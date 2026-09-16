// SINH TỰ ĐỘNG ngân hàng "Vật lí lớp 9" (phần Vật lí trong KHTN 9 — GDPT 2018, SGK Kết nối tri thức)
//   node tools/gen-thcs-vatli9.mjs
// Tạo: web/data-vatli9.js — 100 đề × 10 câu = 1000 câu, id 23101–23200, 20 phút/đề.
//
// Cấu trúc: ≥ 400 câu viết tay (BANK) + phần còn lại sinh từ các "họ câu" tham số hoá (FAMILIES),
// đáp án tính bằng code, phương án nhiễu mô phỏng lỗi nhầm công thức / nhầm đơn vị.
// Đề xếp theo chương: I Năng lượng cơ học · II Ánh sáng · III Điện · IV Điện từ · V Năng lượng với cuộc sống,
// cuối cùng là các đề ôn tổng hợp. Khoảng 25% câu vận dụng cao (cờ hard).
// (Đây là file sinh tự động — sửa nội dung trong script này rồi chạy lại, đừng sửa data-vatli9.js.)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BANK, CHAP, SEC } from './vatli9-bank.mjs';
import { FAMILIES } from './vatli9-fam.mjs';
import { fmt, rnd, shuffle, pick, ri } from './vatli9-util.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'web', 'data-vatli9.js');

// ---------- Kế hoạch đề ----------
// Mỗi đề: chương + chuyên đề (topic ưu tiên). Đề ôn tổng hợp lấy 2 câu mỗi chương.
const TOPIC_NAME = {
  'cn-dong-the': 'Động năng và thế năng', 'cn-bao-toan': 'Cơ năng và sự chuyển hoá năng lượng', 'cn-cong': 'Công và công suất',
  'as-khuc-xa': 'Khúc xạ ánh sáng – chiết suất', 'as-pxtp': 'Phản xạ toàn phần', 'as-lang-kinh': 'Lăng kính – tán sắc – màu sắc',
  'as-thau-kinh': 'Thấu kính – dựng ảnh', 'as-kinh-lup': 'Kính lúp',
  'di-ohm': 'Định luật Ohm – điện trở', 'di-mach': 'Đoạn mạch nối tiếp – song song', 'di-cong-suat': 'Năng lượng điện – công suất – an toàn điện',
  'dt-cam-ung': 'Cảm ứng điện từ', 'dt-xoay-chieu': 'Dòng điện xoay chiều – máy phát điện',
  'nl-vong': 'Vòng năng lượng Trái Đất – nhiên liệu hoá thạch', 'nl-tai-tao': 'Năng lượng tái tạo – sử dụng hiệu quả',
};
const PLAN = [];
function cyc(chap, topics, n) { for (let i = 0; i < n; i++) PLAN.push({ chap, topic: topics[i % topics.length] }); }
cyc('I', ['cn-dong-the', 'cn-bao-toan', 'cn-cong', 'cn-dong-the', 'cn-bao-toan'], 18);
cyc('II', ['as-khuc-xa', 'as-thau-kinh', 'as-lang-kinh', 'as-pxtp', 'as-thau-kinh', 'as-khuc-xa', 'as-kinh-lup', 'as-thau-kinh'], 24);
cyc('III', ['di-ohm', 'di-mach', 'di-cong-suat', 'di-mach'], 26);
cyc('IV', ['dt-cam-ung', 'dt-xoay-chieu'], 10);
cyc('V', ['nl-vong', 'nl-tai-tao'], 8);
for (let i = 0; i < 14; i++) PLAN.push({ chap: 'ALL', topic: null });
if (PLAN.length !== 100) throw new Error('Kế hoạch phải đúng 100 đề, hiện ' + PLAN.length);

// ---------- Sinh câu tham số ----------
const usedText = new Set();
for (const b of BANK) {
  if (usedText.has(b.text)) throw new Error('Câu viết tay trùng text: ' + b.text);
  usedText.add(b.text);
}
const PARAM = [];
for (const F of FAMILIES) {
  let made = 0, tries = 0;
  while (made < F.max && tries < F.max * 40) {
    tries++;
    const it = F.gen();
    if (!it) continue;
    if (usedText.has(it.text)) continue;
    if (!it.ds || it.ds.length !== 3) throw new Error(`Họ ${F.name}: cần 3 nhiễu`);
    const all = [it.correct, ...it.ds].map(String);
    if (new Set(all).size !== 4) continue;        // nhiễu trùng đáp án -> bỏ, thử lại
    usedText.add(it.text);
    PARAM.push({ topic: F.topic, chap: CHAP[F.topic], text: it.text, correct: String(it.correct), ds: it.ds.map(String), why: it.why, hard: F.hard ? 1 : 0, hand: 0, fam: F.name });
    made++;
  }
  if (made < F.min) throw new Error(`Họ ${F.name} chỉ sinh được ${made}/${F.min} câu`);
}

// ---------- Chia câu vào đề ----------
const POOL = {};
for (const c of Object.keys(SEC)) POOL[c] = shuffle([...BANK.filter(b => b.chap === c), ...PARAM.filter(p => p.chap === c)]);
const remHand = {}, remSlots = {};
for (const c of Object.keys(SEC)) {
  remHand[c] = BANK.filter(b => b.chap === c).length;
  remSlots[c] = PLAN.filter(p => p.chap === c).length * 10 + PLAN.filter(p => p.chap === 'ALL').length * 2;
  if (remHand[c] > remSlots[c]) throw new Error(`Chương ${c}: ${remHand[c]} câu viết tay > ${remSlots[c]} chỗ`);
}

function takeFrom(chap, n, pref, filter) {
  // lấy n câu từ POOL[chap] thoả filter, ưu tiên topic pref
  const out = [];
  const pool = POOL[chap];
  const order = [];
  if (pref) for (let i = 0; i < pool.length; i++) if (pool[i].topic === pref && filter(pool[i])) order.push(i);
  for (let i = 0; i < pool.length; i++) if (pool[i].topic !== pref && filter(pool[i])) order.push(i);
  const chosen = order.slice(0, n);
  for (const i of chosen) out.push(pool[i]);
  const set = new Set(chosen);
  POOL[chap] = pool.filter((_, i) => !set.has(i));
  return out;
}

function pickForChapter(chap, slots, nHard, pref) {
  const got = [];
  const hardHand = Math.round(remHand[chap] / remSlots[chap] * slots);
  // 1) câu khó (viết tay hoặc tham số), ưu tiên chuyên đề
  got.push(...takeFrom(chap, nHard, pref, x => x.hard));
  // 2) câu viết tay theo hạn ngạch
  let needHand = Math.max(0, hardHand - got.filter(x => x.hand).length);
  needHand = Math.min(needHand, slots - got.length);
  got.push(...takeFrom(chap, needHand, pref, x => x.hand && !x.hard));
  if (got.length < slots) got.push(...takeFrom(chap, slots - got.length, pref, x => x.hand)); // vét câu tay khó còn lại nếu cần
  // 3) phần còn lại: câu tham số thường
  if (got.length < slots) got.push(...takeFrom(chap, slots - got.length, pref, x => !x.hand && !x.hard));
  if (got.length < slots) got.push(...takeFrom(chap, slots - got.length, pref, x => true));
  if (got.length < slots) throw new Error(`Chương ${chap} hết câu`);
  remHand[chap] -= got.filter(x => x.hand).length;
  remSlots[chap] -= slots;
  return got;
}

const EXAMS = [];
let hardTotal = 0;
PLAN.forEach((p, idx) => {
  const nHard = (idx % 2 === 0) ? 2 : 3;
  let qs = [];
  if (p.chap === 'ALL') {
    const chaps = shuffle(Object.keys(SEC));
    chaps.forEach((c, k) => qs.push(...pickForChapter(c, 2, k < nHard ? 1 : 0, null)));
    qs = shuffle(qs);
  } else {
    qs = pickForChapter(p.chap, 10, nHard, p.topic);
    qs = shuffle(qs);
    // câu khó dồn về cuối đề
    qs.sort((a, b) => a.hard - b.hard);
  }
  hardTotal += qs.filter(x => x.hard).length;
  // rải đáp án đúng A/B/C/D
  const extra = shuffle(['A', 'B', 'C', 'D']).slice(0, 2);
  const letters = shuffle(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', ...extra]);
  const N = idx + 1;
  const title = p.chap === 'ALL' ? `Đề ${N} · Ôn tổng hợp ${N - 86}` : `Đề ${N} · ${TOPIC_NAME[p.topic]}`;
  const questions = qs.map((x, k) => {
    const ans = letters[k];
    const ds = shuffle(x.ds);
    const opts = [];
    let di = 0;
    for (const L of ['A', 'B', 'C', 'D']) opts.push(L === ans ? x.correct : ds[di++]);
    return { sec: SEC[x.chap], name: `Câu ${k + 1}`, pts: 1, text: x.text, opts, ans, why: x.why, _hand: x.hand, _hard: x.hard, _topic: x.topic };
  });
  EXAMS.push({ id: 23101 + idx, title, time: 20, questions });
});

// ---------- Tự kiểm tra ----------
for (const c of Object.keys(SEC)) if (remHand[c] !== 0) throw new Error(`Chương ${c} còn ${remHand[c]} câu viết tay chưa dùng`);
const allQ = EXAMS.flatMap(e => e.questions);
if (EXAMS.length !== 100 || allQ.length !== 1000) throw new Error('Phải có 100 đề × 10 câu');
const texts = new Set(allQ.map(x => x.text));
if (texts.size !== 1000) throw new Error('Có câu trùng text');
const cnt = { A: 0, B: 0, C: 0, D: 0 };
for (const x of allQ) {
  if (new Set(x.opts).size !== 4) throw new Error('Phương án trùng: ' + x.text);
  if (!['A', 'B', 'C', 'D'].includes(x.ans)) throw new Error('ans lạ');
  if (x.opts['ABCD'.indexOf(x.ans)] === undefined) throw new Error('ans lệch');
  if (/\\\(|\$\$|\\frac/.test(x.text + x.opts.join(''))) throw new Error('Không dùng LaTeX: ' + x.text);
  cnt[x.ans]++;
}
for (const L of 'ABCD') { const p = cnt[L] / 10; if (p < 20 || p > 30) throw new Error(`Đáp án ${L} chiếm ${p}% (cần 20–30%)`); }
const nHand = allQ.filter(x => x._hand).length;
if (nHand < 400) throw new Error(`Chỉ có ${nHand} câu viết tay (< 400)`);
if (FAMILIES.length < 20) throw new Error('Cần ≥ 20 họ câu tham số');
for (const e of EXAMS) { const ids = e.id; if (ids < 23101 || ids > 23200) throw new Error('id ngoài dải'); }

// ---------- Ghi file ----------
const S = s => JSON.stringify(s);
let out = `// VẬT LÍ — LỚP 9 (phần Vật lí trong KHTN 9, GDPT 2018, SGK Kết nối tri thức)
// 100 đề × 10 câu = 1000 câu · mức HSG cấp trường / cấp huyện · 20 phút mỗi đề.
// SINH TỰ ĐỘNG bởi tools/gen-thcs-vatli9.mjs — đừng sửa tay, sửa script rồi chạy lại.
//
// Chương I  Năng lượng cơ học: động năng, thế năng, cơ năng và sự chuyển hoá, công – công suất (đề 1–18)
// Chương II Ánh sáng: khúc xạ, chiết suất, phản xạ toàn phần, lăng kính – tán sắc – màu sắc, thấu kính, kính lúp (đề 19–42)
// Chương III Điện: định luật Ohm, điện trở, đoạn mạch nối tiếp – song song – hỗn hợp, năng lượng điện, an toàn điện (đề 43–68)
// Chương IV Điện từ: cảm ứng điện từ, dòng điện xoay chiều, máy phát điện (đề 69–78)
// Chương V  Năng lượng với cuộc sống: vòng năng lượng, nhiên liệu hoá thạch, năng lượng tái tạo (đề 79–86)
// Đề 87–100: ôn tổng hợp.
// Câu viết tay: ${nHand} · câu sinh tham số: ${1000 - nHand} · câu vận dụng cao: ${hardTotal}.

const VATLI9_EXAMS = [
`;
for (const e of EXAMS) {
  out += `\n/* ═══════════ ${e.title.toUpperCase()} ═══════════ */\n{\n  id: ${e.id}, title: ${S(e.title)}, time: ${e.time},\n  questions: [\n`;
  for (const x of e.questions) {
    out += `    { sec: ${S(x.sec)}, name: ${S(x.name)}, pts: 1,\n      text: ${S(x.text)},\n      opts: o4(${x.opts.map(S).join(', ')}), ans: ${S(x.ans)},\n      why: ${S(x.why)} },\n`;
  }
  out += `  ],\n},\n`;
}
out += `\n];

SUBJECTS.push({ id: 'vatli9', name: 'Vật lí', short: 'Vật lí 9', icon: '⚛️', grade: 9,
  exams: VATLI9_EXAMS, ready: true,
  heroTitle: 'Vật lí lớp 9 (KHTN) — 100 đề luyện học sinh giỏi theo chương',
  heroMeta: '📚 100 đề &nbsp;•&nbsp; 1000 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề' });
`;
fs.writeFileSync(OUT, out, 'utf8');

// ---------- Báo cáo ----------
const byTopic = {};
for (const x of allQ) byTopic[x._topic] = (byTopic[x._topic] || 0) + 1;
console.log(`Đã ghi ${OUT}`);
console.log(`Đề: ${EXAMS.length} · Câu: ${allQ.length} · viết tay: ${nHand} · tham số: ${1000 - nHand} · khó: ${hardTotal}`);
console.log('Đáp án:', cnt);
console.log('Theo chuyên đề:', byTopic);
console.log('Họ câu dùng:', FAMILIES.length, '· sinh sẵn', PARAM.length, 'câu tham số (dư', PARAM.length - (1000 - nHand), ')');
