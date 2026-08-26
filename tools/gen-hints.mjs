/* ============================================================================
   gen-hints.mjs — sinh GỢI Ý (q.hint) cho toàn bộ ngân hàng câu hỏi.

   Chạy:  $env:GEMINI_API_KEY='AQ...'          (cmd.exe: set GEMINI_API_KEY=AQ...)
          node tools/gen-hints.mjs             [--only toan,hsg2] [--limit 50]
   Xuất:  web/data-hints.js         — bảng tra gợi ý, nạp TRƯỚC split-exams.js
   Cache: tools/.hints-cache.json   — nhớ từng câu, chạy lại không gọi lại API

   VÌ SAO SINH SẴN, KHÔNG GỌI API LÚC HỌC SINH LÀM BÀI:
   đề là dữ liệu tĩnh nên gợi ý cũng tĩnh — sinh một lần rồi đóng gói vào web thì
   trang chạy được cả khi mất mạng, bấm là hiện ngay, và quan trọng nhất là KHÔNG
   PHẢI NHÚNG API KEY vào trang public (nhúng vào thì ai cũng lấy được, mã hóa
   base64 hay không cũng vậy). Gợi ý sinh ra còn đọc/sửa lại được trước khi
   publish — với đề lớp 2 thì gợi ý sai còn tai hại hơn là không có gợi ý.

   Gợi ý KHÔNG được lộ đáp án: chỉ chỉ ra bước đầu tiên hoặc chi tiết cần để ý.
   Môn tiếng Anh viết gợi ý bằng tiếng Anh (xem CLAUDE.md).
   ========================================================================== */
'use strict';

import fs from 'fs';
import vm from 'vm';

const WEB = 'web';
const OUT = `${WEB}/data-hints.js`;
const CACHE = 'tools/.hints-cache.json';
/* Hạn mức MIỄN PHÍ tính theo SỐ LẦN GỌI MỖI NGÀY, không theo số câu — bản
   gemini-3.6-flash chỉ cho 20 lần/ngày nên không đủ chạy hết ngân hàng đề.
   Vì vậy mặc định dùng bản "flash-lite" (hạn mức rộng hơn nhiều) và nhồi thật
   nhiều câu vào MỘT lần gọi. Muốn đổi: node tools/gen-hints.mjs --model ... */
const DEFAULT_MODEL = 'gemini-3.5-flash-lite';

const BATCH = 25;        // số câu mỗi lần gọi API — càng nhiều càng đỡ tốn lượt gọi
const CONCURRENCY = 3;   // số lần gọi chạy song song
const MAX_TRY = 8;       // số lần thử lại khi bị 429 / 5xx

const KEY = process.env.GEMINI_API_KEY || '';
if (!KEY) {
  console.error('Thiếu GEMINI_API_KEY.\n' +
    "  PowerShell:  $env:GEMINI_API_KEY='AQ...'; node tools/gen-hints.mjs\n" +
    '  cmd.exe:     set GEMINI_API_KEY=AQ... && node tools/gen-hints.mjs');
  process.exit(1);
}

const arg = (name) => {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : null;
};
const ONLY = (arg('--only') || '').split(',').filter(Boolean);
const LIMIT = Number(arg('--limit')) || 0;
const MODEL = arg('--model') || DEFAULT_MODEL;
const API = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

/* ─────────── nạp toàn bộ data-*.js đúng thứ tự khai báo trong index.html ───────────
   Các file data dùng chung một phạm vi biến (o4, A, DS… khai báo ở data.js) nên phải
   chạy tuần tự trong CÙNG một vm context, y như trên trình duyệt.
   KHÔNG chạy split-exams.js: cần id đề và số thứ tự câu GỐC để làm khóa tra. */
function loadData() {
  const html = fs.readFileSync(`${WEB}/index.html`, 'utf8');
  const files = [...html.matchAll(/<script src="(data[^"]*\.js)"><\/script>/g)]
    .map(m => m[1]).filter(f => f !== 'data-hints.js');
  const ctx = vm.createContext({ console });
  for (const f of files) vm.runInContext(fs.readFileSync(`${WEB}/${f}`, 'utf8'), ctx, { filename: f });
  return vm.runInContext('SUBJECTS', ctx);
}

/* bỏ thẻ HTML, giữ lại chữ — bảng biểu trong đề rút thành các ô ngăn bởi ' | ' */
const plain = (s) => String(s == null ? '' : s)
  .replace(/<\/(td|th)>\s*<(td|th)[^>]*>/gi, ' | ')
  .replace(/<\/tr>/gi, ' ; ').replace(/<br\s*\/?>/gi, ' ')
  .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();

const isEnglish = (subId) => /tanh|ta-tuan/.test(subId);

/* mô tả một câu cho model — đủ dữ kiện để viết gợi ý mà không cần nhìn hình */
function describe(q, i) {
  const o = { i, de: plain(q.text) };
  if (q.read) o.doan_van = plain(q.read);
  if (q.img || q.imgs) o.co_hinh = 'có hình vẽ kèm theo (học sinh nhìn thấy, model thì không)';
  if (q.opts) o.phuong_an = q.opts.map(x => `${x.k}. ${x.img ? '[ảnh]' : plain(x.t)}`).join('  ');
  if (q.type === 'type') o.dang = 'học sinh gõ từ để trả lời';
  if (q.type === 'order') { o.dang = 'ghép các thẻ từ thành câu đúng'; o.the_tu = (q.words || []).join(' / '); }
  if (q.type === 'match') { o.dang = 'nối mỗi ảnh với một từ'; o.tu = (q.right || []).join(' / '); }
  o.dap_an = String(q.ans);
  if (q.why) o.giai_thich = plain(q.why);
  return o;
}

const SCHEMA = {
  type: 'ARRAY',
  items: {
    type: 'OBJECT',
    properties: { i: { type: 'INTEGER' }, hint: { type: 'STRING' } },
    required: ['i', 'hint'],
  },
};

/* Môn tiếng Anh phải ra gợi ý TIẾNG ANH. Nhắc bằng một dòng "hãy viết tiếng Anh"
   đặt giữa một lời nhắc toàn tiếng Việt thì model vẫn trả về tiếng Việt (đã bị),
   nên với các môn này phải viết CẢ lời nhắc bằng tiếng Anh, ví dụ mẫu cũng tiếng Anh. */
function promptEn(sub, items) {
  const g = sub.grade || 2;
  return `You are a primary-school teacher sitting next to a GRADE ${g} Vietnamese pupil who is stuck on "${sub.name}". The pupil is learning this subject IN ENGLISH. For EACH question below, write ONE hint.

Rules:
1. NEVER give the answer away: no final result, no option letter (A/B/C/D), never write the correct word or sentence. The "dap_an" and "giai_thich" fields are for your understanding only — the pupil must not see them yet.
2. Point only at the FIRST step to take, or the detail to notice, e.g. "Try counting…", "Think about the <b>times-3</b> table…", "Notice the word 'left' in the question…".
3. Short: 25 words max, one sentence, no line breaks, no markdown, no numbering. You may wrap one keyword in <b>…</b>.
4. WRITE THE HINT IN ENGLISH ONLY — not a single Vietnamese word. Address the pupil as "you". Keep the words simple enough for grade ${g}.
5. If the question has a picture, tell the pupil to look at it ("Look carefully at the picture…"); do not describe the picture as if you could see it.

Return JSON: an array of {"i": <the question's i>, "hint": "<hint>"}, all ${items.length} questions.

QUESTIONS:
${JSON.stringify(items, null, 1)}`;
}

function promptFor(sub, items) {
  if (isEnglish(sub.id)) return promptEn(sub, items);
  const lop = sub.grade || 2;
  return `Bạn là giáo viên tiểu học Việt Nam đang ngồi cạnh một học sinh LỚP ${lop} đang bí ở môn "${sub.name}". Với MỖI câu dưới đây hãy viết MỘT câu gợi ý.

Quy tắc bắt buộc:
1. TUYỆT ĐỐI không lộ đáp án: không viết kết quả cuối cùng, không nhắc chữ cái phương án (A/B/C/D), không viết ra từ/câu trả lời đúng. Trường "dap_an" và "giai_thich" chỉ để bạn biết đường dẫn dắt — học sinh KHÔNG được thấy chúng lúc này.
2. Chỉ nhắc bước ĐẦU TIÊN nên làm, hoặc chi tiết trong đề cần để ý, kiểu "Em thử đếm…", "Em nhẩm lại bảng nhân 3 xem…", "Chú ý chữ 'còn lại' trong đề…".
3. Ngắn: tối đa 25 từ, một câu, không xuống dòng, không markdown, không đánh số. Được dùng <b>…</b> để nhấn một từ khóa.
4. Giọng thân thiện, gọi học sinh là "em", dùng từ đúng trình độ lớp ${lop}.
5. Viết bằng tiếng Việt có dấu.
6. Câu có hình: hướng học sinh nhìn vào hình ("Em nhìn kĩ…"), đừng tả lại hình như thể bạn nhìn thấy nó.

Trả về JSON: mảng các đối tượng {"i": <số i của câu>, "hint": "<gợi ý>"}, đủ ${items.length} câu.

CÁC CÂU:
${JSON.stringify(items, null, 1)}`;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

/* Hạn mức miễn phí tính theo số lần gọi mỗi phút. Bị 429 thì KHÔNG phải chỉ mình
   lần gọi đó phải chờ — cả nhóm phải nghỉ, nếu không những lần gọi song song còn
   lại vẫn đâm vào tường và cũng bị 429 nốt. `gate` là giờ hẹn nghỉ chung đó. */
const gate = { until: 0, hits: 0 };
async function waitGate() {
  for (let w = gate.until - Date.now(); w > 0; w = gate.until - Date.now()) await sleep(Math.min(w, 2000));
}
/* Hết lượt của cả NGÀY thì chờ mấy chục giây cũng vô ích — dừng hẳn để mai chạy lại. */
let outOfQuota = false;
const isDailyQuota = (body) => (body?.error?.details || []).some(d =>
  (d.violations || []).some(v => /PerDay/i.test(v.quotaId || '')));

/* Google báo phải chờ bao lâu trong error.details[].retryDelay ("23s") */
function retryDelayOf(body, headers) {
  const h = Number(headers.get('retry-after'));
  if (h > 0) return h * 1000;
  for (const d of body?.error?.details || []) {
    const m = /^(\d+(?:\.\d+)?)s$/.exec(d.retryDelay || '');
    if (m) return Math.round(Number(m[1]) * 1000);
  }
  return 0;
}

async function callGemini(prompt) {
  let wait = 5000;
  for (let t = 1; t <= MAX_TRY; t++) {
    await waitGate();
    let res;
    try {
      res = await fetch(API, {
        method: 'POST',
        headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, responseMimeType: 'application/json', responseSchema: SCHEMA },
        }),
      });
    } catch (e) {                                   // mất mạng
      if (t === MAX_TRY) throw e;
      await sleep(wait); wait = Math.min(wait * 2, 90000); continue;
    }
    if (res.status === 429 || res.status >= 500) {  // quá hạn mức / server bận → cả nhóm nghỉ rồi thử lại
      const body = await res.json().catch(() => null);
      const pause = retryDelayOf(body, res.headers) || wait;
      if (res.status === 429 && isDailyQuota(body)) {
        outOfQuota = true;                          // hết lượt của HÔM NAY: dừng hẳn, mai chạy lại là xong nốt
        throw new Error(`hết hạn mức miễn phí trong ngày của ${MODEL}`);
      }
      if (res.status === 429) {
        gate.until = Math.max(gate.until, Date.now() + pause + 500);
        if (++gate.hits % 10 === 1) console.log(`\n  … chạm hạn mức miễn phí, nghỉ ${Math.round(pause / 1000)}s rồi chạy tiếp`);
      }
      if (t === MAX_TRY) throw new Error(`HTTP ${res.status} sau ${MAX_TRY} lần thử`);
      await sleep(pause); wait = Math.min(wait * 2, 90000); continue;
    }
    const j = await res.json();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(j).slice(0, 200)}`);
    const txt = (j.candidates?.[0]?.content?.parts || []).map(p => p.text).filter(Boolean).join('');
    if (!txt) throw new Error('API không trả về nội dung: ' + JSON.stringify(j).slice(0, 200));
    return JSON.parse(txt);
  }
}

/* dọn gợi ý model trả về: bỏ markdown, loại những câu lỡ lộ đáp án */
const HAS_VI = /[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/i;
function clean(hint, q, en) {
  const h = String(hint || '').replace(/\s+/g, ' ').trim()
    .replace(/^\d+[.)]\s*/, '').replace(/^(Gợi ý|Hint)\s*[:：]\s*/i, '')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/[*_`]/g, '');
  if (!h || h.length > 220) return null;
  if (en && HAS_VI.test(h)) return null;            // môn tiếng Anh mà lẫn tiếng Việt thì bỏ, sinh lại
  if (/\b(đáp án|chọn|answer|option)\b[^.]{0,12}\b[A-E]\b/i.test(h)) return null;
  if (q.type === 'type' && String(q.ans).length > 2 &&
      h.toLowerCase().includes(String(q.ans).toLowerCase())) return null;
  if (saysAnswer(h, q)) return null;
  return h;
}

/* Gợi ý viết trắng ra phương án đúng ("… là hình chữ nhật nhé") thì hỏng cả mục đích.
   So khớp theo RANH GIỚI TỪ, nếu không "6 quả" lại khớp nhầm vào "16 quả", "Con B"
   khớp vào "con bọ rùa". Đáp án đã nằm sẵn trong đề thì không tính là lộ. */
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function saysAnswer(hint, q) {
  const opt = (q.opts || []).find(x => x.k === q.ans);
  if (!opt || opt.img) return false;
  const t = plain(opt.t);
  if (t.length < 3) return false;
  if (plain(q.text).toLowerCase().includes(t.toLowerCase())) return false;   // đề đã cho sẵn
  return new RegExp(`(^|[^\\p{L}\\p{N}])${esc(t)}($|[^\\p{L}\\p{N}])`, 'iu').test(plain(hint));
}

/* ───────────────────────────────── chạy ───────────────────────────────── */
/* Mất tools/.hints-cache.json (máy khác, xóa đi…) thì dựng lại từ chính
   web/data-hints.js — gợi ý đã sinh rồi không phải trả tiền gọi API lần nữa. */
function seedCache() {
  if (!fs.existsSync(OUT)) return {};
  const ctx = vm.createContext({ SUBJECTS: [] });
  vm.runInContext(fs.readFileSync(OUT, 'utf8'), ctx, { filename: 'data-hints.js' });
  const H = vm.runInContext('HINTS', ctx) || {};
  const c = {};
  for (const k of Object.keys(H)) {
    c[k] = {};
    H[k].forEach((h, i) => { if (h) c[k][i] = h; });
  }
  console.log(`(dựng lại cache từ ${OUT})`);
  return c;
}

const SUBJECTS = loadData();
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : seedCache();

const keyOf = (sub, exam) => `${sub.id}|${exam.id}`;
const todo = [];                       // các lô cần gọi API
let total = 0, have = 0, skip = 0;

/* Gom câu theo MÔN chứ không theo từng đề: mỗi đề chỉ ~10 câu, cắt lô theo đề thì
   phí lượt gọi (hạn mức đếm theo lần gọi). Cả môn dùng chung một lời nhắc (cùng
   khối lớp, cùng cách xưng hô) nên trộn chung được. */
for (const sub of SUBJECTS) {
  if (!sub.exams || (ONLY.length && !ONLY.includes(sub.id))) continue;
  const need = [];
  for (const exam of sub.exams) {
    const k = keyOf(sub, exam);
    exam.questions.forEach((q, i) => {
      total++;
      if (q.hint) { skip++; return; }               // đã có hint viết tay trong data-*.js
      if (cache[k] && cache[k][i]) { have++; return; }
      need.push({ k, i, q });
    });
  }
  for (let i = 0; i < need.length; i += BATCH) todo.push({ sub, part: need.slice(i, i + BATCH) });
}

const batches = LIMIT ? todo.slice(0, LIMIT) : todo;
console.log(`${total} câu · ${skip} đã có hint sẵn · ${have} lấy từ cache · ` +
  `còn ${batches.reduce((t, b) => t + b.part.length, 0)} câu trong ${batches.length} lô` +
  (LIMIT && todo.length > LIMIT ? ` (giới hạn --limit ${LIMIT}/${todo.length})` : ''));

let done = 0, failed = 0, dirty = 0;
const nBatch = batches.length;
const t0 = Date.now();
async function worker() {
  for (;;) {
    const b = batches.shift();
    if (!b || outOfQuota) return;
    try {
      // "i" gửi cho model là số thứ tự TRONG LÔ (0…24), không phải số câu trong đề —
      // một lô nay trộn câu của nhiều đề khác nhau.
      const out = await callGemini(promptFor(b.sub, b.part.map(({ q }, n) => describe(q, n))));
      let ok = 0;
      for (const r of out || []) {
        const item = b.part[Number(r.i)];
        if (!item) continue;
        const h = clean(r.hint, item.q, isEnglish(b.sub.id));
        if (h) { (cache[item.k] = cache[item.k] || {})[item.i] = h; ok++; }
      }
      failed += b.part.length - ok;
      dirty++;
    } catch (e) {
      if (outOfQuota) { batches.length = 0; console.warn(`\n  ⏸ ${e.message} — phần còn lại để mai chạy tiếp (cache đã lưu).`); return; }
      if (!b.retried) { b.retried = true; batches.push(b); }   // lỗi mạng: xếp lại cuối hàng, thử thêm một lượt
      else { failed += b.part.length; console.warn(`\n  ✗ ${b.sub.id}: ${e.message}`); }
    }
    done++;
    if (dirty >= 5) { fs.writeFileSync(CACHE, JSON.stringify(cache)); dirty = 0; }   // lưu dần, đứt là chạy lại tiếp
    if (done % 10 === 0) {
      const m = (Date.now() - t0) / 60000;
      console.log(`  ${done}/${done + batches.length} lô · ${Math.round(done / m)} lô/phút · lỗi ${failed} câu`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
fs.writeFileSync(CACHE, JSON.stringify(cache));
console.log('\nxong phần gọi API.');

/* ─────────────────────────── ghi web/data-hints.js ─────────────────────────── */
const q1 = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const lines = [];
let written = 0, missing = 0;
for (const sub of SUBJECTS) {
  for (const exam of sub.exams || []) {
    const m = cache[keyOf(sub, exam)];
    if (!m) continue;
    const arr = exam.questions.map((q, i) => {
      if (q.hint) return null;                       // hint viết tay thì để nguyên trong data-*.js
      if (m[i]) { written++; return m[i]; }
      missing++; return null;
    });
    while (arr.length && arr[arr.length - 1] == null) arr.pop();
    if (!arr.length) continue;
    lines.push(`${q1(keyOf(sub, exam))}: [\n${arr.map(h => (h == null ? '  0,' : `  ${q1(h)},`)).join('\n')}\n],`);
  }
}

fs.writeFileSync(OUT, `/* GỢI Ý cho từng câu — SINH TỰ ĐỘNG bởi tools/gen-hints.mjs, đừng sửa tay.
   Sinh lại:  $env:GEMINI_API_KEY='...'; node tools/gen-hints.mjs
   (tools/.hints-cache.json giữ kết quả cũ nên chỉ câu MỚI mới tốn lượt gọi API)

   Khóa là "<mã môn>|<id đề gốc>", giá trị là mảng gợi ý theo thứ tự câu trong đề gốc
   (0 = câu đó chưa có gợi ý). Nạp TRƯỚC split-exams.js và gắn thẳng hint vào từng câu,
   nên đề có bị cắt thành nhiều phần thì gợi ý vẫn đi theo đúng câu.

   ${written} gợi ý cho ${lines.length} đề. */
'use strict';

const HINTS = {
${lines.join('\n')}
};

for (const sub of SUBJECTS) {
  for (const exam of sub.exams || []) {
    const hs = HINTS[sub.id + '|' + exam.id];
    if (hs) exam.questions.forEach((q, i) => { if (!q.hint && hs[i]) q.hint = hs[i]; });
  }
}
`);
console.log(`→ ${OUT}: ${written} gợi ý / ${lines.length} đề` + (missing ? ` · còn thiếu ${missing} câu` : ''));
