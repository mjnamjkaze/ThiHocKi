// Xuất đề THCS ra Markdown (để in A4) từ chính file dữ liệu của app.
//
//   node tools/export-de-thcs-md.mjs              → xuất tất cả bank THCS
//   node tools/export-de-thcs-md.mjs toan6        → chỉ xuất một bank
//   node tools/export-de-thcs-md.mjs toan6 1-10   → chỉ xuất đề 1..10 của bank đó
//
// Nguồn dữ liệu duy nhất là web/data-<bank>.js — file .md chỉ là bản in, không sửa tay.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WEB = path.join(ROOT, 'web');
const OUT = path.join(ROOT, 'de-thi', 'thcs');

const BANKS = [
  'toan6', 'toan7', 'toan8', 'toan9',
  'khtn6', 'khtn7', 'khtn8', 'khtn9',
  'tienganh6', 'tienganh7', 'tienganh8', 'tienganh9',
];

const LEVELS = [
  ['NB', 'Nhận biết'],
  ['TH', 'Thông hiểu'],
  ['VD', 'Vận dụng'],
  ['NC', 'Nâng cao'],
];
const LEVEL_NAME = Object.fromEntries(LEVELS);

/** Nạp một file data-*.js trong sandbox và trả về { meta, exams }. */
function loadBank(bank) {
  const file = path.join(WEB, `data-${bank}.js`);
  if (!fs.existsSync(file)) return null;
  const sandbox = {
    SUBJECTS: [],
    o4: (a, b, c, d) => [{ k: 'A', t: a }, { k: 'B', t: b }, { k: 'C', t: c }, { k: 'D', t: d }],
    console,
  };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  const meta = sandbox.SUBJECTS[sandbox.SUBJECTS.length - 1];
  if (!meta) throw new Error(`${file}: không tìm thấy SUBJECTS.push(...)`);
  return { meta, exams: meta.exams || [] };
}

const pct = (n, total) => (total ? (n * 100 / total).toFixed(1).replace('.', ',') : '0,0') + '%';

/** Đếm theo một khoá, giữ nguyên thứ tự xuất hiện đầu tiên. */
function tally(questions, key) {
  const map = new Map();
  questions.forEach((q, i) => {
    const v = q[key] || '(chưa ghi)';
    if (!map.has(v)) map.set(v, []);
    map.get(v).push(i + 1);
  });
  return map;
}

function renderExam(exam, meta) {
  const qs = exam.questions || [];
  const L = [];
  const heading = `${meta.name} ${meta.grade} — ${exam.title}`;

  L.push(`# ${heading}`, '');
  L.push(`- **Chương trình:** GDPT 2018 — bám Yêu cầu cần đạt (dùng chung cho Kết nối tri thức / Chân trời sáng tạo / Cánh Diều)`);
  L.push(`- **Hình thức:** Trắc nghiệm 4 lựa chọn — ${qs.length} câu`);
  L.push(`- **Thời gian:** ${exam.time} phút`);
  L.push('', '---', '');

  // ── PHẦN 1: đề thi (không lộ đáp án) ─────────────────────────────
  L.push('## PHẦN 1 — ĐỀ THI', '');
  qs.forEach((q, i) => {
    L.push(`**Câu ${i + 1}.** ${q.text}`, '');
    q.opts.forEach(o => L.push(`${o.k}. ${o.t}`, ''));
  });

  // ── PHẦN 2: bảng đáp án ──────────────────────────────────────────
  L.push('---', '', '## PHẦN 2 — ĐÁP ÁN', '');
  for (let s = 0; s < qs.length; s += 10) {
    const row = qs.slice(s, s + 10);
    L.push('| Câu | ' + row.map((_, i) => s + i + 1).join(' | ') + ' |');
    L.push('|-----|' + row.map(() => '---|').join(''));
    L.push('| **Đáp án** | ' + row.map(q => q.ans).join(' | ') + ' |');
    L.push('');
  }
  L.push('### Bảng đối chiếu mức độ – chủ đề', '');
  L.push('| Câu | ĐA | Mức độ | Chủ đề |');
  L.push('|----|----|--------|--------|');
  qs.forEach((q, i) => {
    L.push(`| ${i + 1} | ${q.ans} | ${LEVEL_NAME[q.lvl] || '—'} | ${q.sec || '—'} |`);
  });
  L.push('');

  // ── PHẦN 3: giải thích ───────────────────────────────────────────
  L.push('---', '', '## PHẦN 3 — GIẢI THÍCH', '');
  qs.forEach((q, i) => {
    const tag = (q.lvl === 'NC' || q.lvl === 'VD') ? ` (${LEVEL_NAME[q.lvl].toLowerCase()})` : '';
    L.push(`**Câu ${i + 1} – ${q.ans}${tag}.** ${q.why}`, '');
  });

  // ── PHẦN 4: thống kê ─────────────────────────────────────────────
  L.push('---', '', '## PHẦN 4 — THỐNG KÊ', '');
  L.push(`**Tổng số câu:** ${qs.length} — **Thời gian:** ${exam.time} phút`, '');

  L.push('### Phân bố theo chủ đề', '');
  L.push('| Chủ đề | Số câu | Tỉ lệ | Câu số |');
  L.push('|--------|-------:|------:|--------|');
  for (const [sec, nums] of tally(qs, 'sec')) {
    L.push(`| ${sec} | ${nums.length} | ${pct(nums.length, qs.length)} | ${nums.join(', ')} |`);
  }
  L.push('');

  L.push('### Phân bố theo mức độ', '');
  L.push('| Mức độ | Số câu | Tỉ lệ | Câu số |');
  L.push('|--------|-------:|------:|--------|');
  const byLvl = tally(qs, 'lvl');
  for (const [code, name] of LEVELS) {
    const nums = byLvl.get(code) || [];
    L.push(`| ${name} | ${nums.length} | ${pct(nums.length, qs.length)} | ${nums.join(', ') || '—'} |`);
  }
  L.push('');

  L.push('### Phân bố đáp án', '');
  const byAns = tally(qs, 'ans');
  const keys = ['A', 'B', 'C', 'D'];
  L.push('| Đáp án | ' + keys.join(' | ') + ' |');
  L.push('|--------|' + keys.map(() => '--:|').join(''));
  L.push('| Số câu | ' + keys.map(k => (byAns.get(k) || []).length).join(' | ') + ' |');
  L.push('| Tỉ lệ | ' + keys.map(k => pct((byAns.get(k) || []).length, qs.length)).join(' | ') + ' |');
  L.push('');

  return L.join('\n');
}

function parseRange(spec) {
  if (!spec) return null;
  const m = /^(\d+)(?:-(\d+))?$/.exec(spec);
  if (!m) throw new Error(`Khoảng đề không hợp lệ: ${spec}`);
  const a = +m[1], b = m[2] ? +m[2] : a;
  return n => n >= a && n <= b;
}

function main() {
  const [wanted, rangeSpec] = process.argv.slice(2);
  const inRange = parseRange(rangeSpec);
  const banks = wanted ? [wanted] : BANKS;
  let written = 0, skipped = [];

  for (const bank of banks) {
    const loaded = loadBank(bank);
    if (!loaded) { skipped.push(bank); continue; }
    const { meta, exams } = loaded;
    const dir = path.join(OUT, bank);
    fs.mkdirSync(dir, { recursive: true });

    exams.forEach((exam, idx) => {
      const no = idx + 1;
      if (inRange && !inRange(no)) return;
      const out = path.join(dir, `de-${String(no).padStart(2, '0')}.md`);
      fs.writeFileSync(out, renderExam(exam, meta), 'utf8');
      written++;
    });

    // mục lục của bank
    const toc = [`# ${meta.name} ${meta.grade} — ${exams.length} đề`, ''];
    toc.push('| Đề | Tên đề | Số câu | Thời gian |');
    toc.push('|---:|--------|-------:|----------:|');
    exams.forEach((e, i) => {
      const f = `de-${String(i + 1).padStart(2, '0')}.md`;
      toc.push(`| ${i + 1} | [${e.title}](${f}) | ${(e.questions || []).length} | ${e.time} phút |`);
    });
    fs.writeFileSync(path.join(dir, 'README.md'), toc.join('\n') + '\n', 'utf8');
    console.log(`✓ ${bank}: ${exams.length} đề → de-thi/thcs/${bank}/`);
  }

  if (skipped.length) console.log(`· chưa có dữ liệu: ${skipped.join(', ')}`);
  console.log(`\nĐã ghi ${written} file .md`);
}

main();
