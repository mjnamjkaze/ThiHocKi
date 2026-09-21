// Kiểm tra chất lượng ngân hàng đề THCS.
//
//   node tools/check-de-thcs.mjs          → kiểm tra tất cả bank
//   node tools/check-de-thcs.mjs toan6    → kiểm tra một bank
//
// Thoát với mã 1 nếu có LỖI (cảnh báo không làm fail).

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WEB = path.join(ROOT, 'web');

const BANKS = [
  'toan6', 'toan7', 'toan8', 'toan9',
  'khtn6', 'khtn7', 'khtn8', 'khtn9',
  'tienganh6', 'tienganh7', 'tienganh8', 'tienganh9',
];

// Ma trận chuẩn cho đề 1–46; đề 47–49 (HSG) dùng ma trận riêng.
const MATRIX_STD = { NB: 9, TH: 9, VD: 3, NC: 9 };
const MATRIX_HSG = { NB: 4, TH: 7, VD: 4, NC: 15 };
const HSG_RANGE = [47, 48, 49];

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
  return meta ? { meta, exams: meta.exams || [] } : null;
}

function checkExam(exam, no, errs, warns) {
  const at = `đề ${no} ("${exam.title}")`;
  const qs = exam.questions || [];

  if (qs.length !== 30) errs.push(`${at}: có ${qs.length} câu, cần 30`);

  const ids = new Set();
  const texts = new Set();
  const counts = { NB: 0, TH: 0, VD: 0, NC: 0 };
  const ansCount = { A: 0, B: 0, C: 0, D: 0 };
  const lvlSeq = [];
  const ansSeq = [];

  qs.forEach((q, i) => {
    const qa = `${at}, câu ${i + 1}`;
    if (!q.text || !q.text.trim()) errs.push(`${qa}: thiếu đề bài`);
    if (!q.why || !q.why.trim()) errs.push(`${qa}: thiếu lời giải thích (why)`);
    if (!q.sec) warns.push(`${qa}: thiếu chủ đề (sec)`);

    if (!Array.isArray(q.opts) || q.opts.length !== 4) {
      errs.push(`${qa}: phải có đúng 4 phương án`);
    } else {
      const seen = new Set();
      q.opts.forEach(o => {
        const t = String(o.t).trim();
        if (!t) errs.push(`${qa}: phương án ${o.k} rỗng`);
        if (seen.has(t)) errs.push(`${qa}: hai phương án trùng nhau ("${t}")`);
        seen.add(t);
      });
      // đáp án đúng không nên là phương án dài nhất một cách lộ liễu
      const lens = q.opts.map(o => String(o.t).length);
      const correct = q.opts.findIndex(o => o.k === q.ans);
      const max = Math.max(...lens);
      if (correct >= 0 && lens[correct] === max && max > 0) {
        const second = Math.max(...lens.filter((_, k) => k !== correct));
        if (max > second * 1.6 && max - second > 25) {
          warns.push(`${qa}: đáp án đúng dài hơn hẳn các phương án còn lại (${max} vs ${second} kí tự)`);
        }
      }
    }

    if (!['A', 'B', 'C', 'D'].includes(q.ans)) errs.push(`${qa}: đáp án "${q.ans}" không hợp lệ`);
    else ansCount[q.ans]++;
    ansSeq.push(q.ans);

    if (!Object.prototype.hasOwnProperty.call(counts, q.lvl)) {
      errs.push(`${qa}: mức độ "${q.lvl}" không hợp lệ (NB/TH/VD/NC)`);
    } else counts[q.lvl]++;
    lvlSeq.push(q.lvl);

    const key = String(q.text).replace(/\s+/g, ' ').trim().toLowerCase();
    if (texts.has(key)) warns.push(`${qa}: trùng nội dung với một câu khác trong cùng đề`);
    texts.add(key);
  });

  // ma trận độ khó
  const want = HSG_RANGE.includes(no) ? MATRIX_HSG : MATRIX_STD;
  for (const k of Object.keys(want)) {
    if (counts[k] !== want[k]) {
      errs.push(`${at}: mức ${k} có ${counts[k]} câu, ma trận cần ${want[k]}`);
    }
  }

  // cân bằng đáp án: mỗi phương án 5–10 câu
  for (const k of ['A', 'B', 'C', 'D']) {
    if (ansCount[k] < 5 || ansCount[k] > 10) {
      warns.push(`${at}: đáp án ${k} xuất hiện ${ansCount[k]} lần (nên trong khoảng 5–10)`);
    }
  }

  // không để lộ pattern
  const runAns = /(.)\1{2,}/.exec(ansSeq.join(''));
  if (runAns) warns.push(`${at}: có ${runAns[0].length} câu liên tiếp cùng đáp án ${runAns[1]}`);

  const runNC = /(NC){3,}/.exec(lvlSeq.join(''));
  if (runNC) errs.push(`${at}: có ≥3 câu nâng cao nằm liền nhau (câu khó bị dồn thành cụm)`);

  // nhịp lặp đều: nếu cứ k câu lại đúng một câu NC thì học sinh đoán được
  for (const step of [2, 3, 4]) {
    for (let off = 0; off < step; off++) {
      const slots = [];
      for (let i = off; i < lvlSeq.length; i += step) slots.push(lvlSeq[i]);
      if (slots.length >= 7 && slots.every(v => v === 'NC')) {
        errs.push(`${at}: cứ ${step} câu lại có đúng một câu nâng cao — lộ nhịp, cần trộn lại`);
      }
    }
  }

  if (ids.size !== 0) { /* reserved */ }
  return { counts, ansCount };
}

function main() {
  const wanted = process.argv[2];
  const banks = wanted ? [wanted] : BANKS;
  const errs = [], warns = [];
  let totalExams = 0, totalQ = 0;
  const seenIds = new Map();

  for (const bank of banks) {
    const loaded = loadBank(bank);
    if (!loaded) { console.log(`· ${bank}: chưa có dữ liệu`); continue; }
    const { meta, exams } = loaded;

    exams.forEach((exam, i) => {
      const no = i + 1;
      if (seenIds.has(exam.id)) errs.push(`${bank} đề ${no}: id ${exam.id} trùng với ${seenIds.get(exam.id)}`);
      seenIds.set(exam.id, `${bank} đề ${no}`);
      checkExam(exam, no, errs, warns);
      totalQ += (exam.questions || []).length;
    });
    totalExams += exams.length;
    console.log(`✓ ${bank}: ${exams.length}/50 đề, ${exams.reduce((s, e) => s + (e.questions || []).length, 0)} câu`);
  }

  console.log(`\nTổng: ${totalExams} đề · ${totalQ} câu`);
  if (warns.length) {
    console.log(`\n⚠ ${warns.length} cảnh báo:`);
    warns.slice(0, 40).forEach(w => console.log('  · ' + w));
    if (warns.length > 40) console.log(`  … và ${warns.length - 40} cảnh báo khác`);
  }
  if (errs.length) {
    console.log(`\n✗ ${errs.length} LỖI:`);
    errs.slice(0, 60).forEach(e => console.log('  · ' + e));
    if (errs.length > 60) console.log(`  … và ${errs.length - 60} lỗi khác`);
    process.exit(1);
  }
  console.log('\n✓ Không có lỗi.');
}

main();
