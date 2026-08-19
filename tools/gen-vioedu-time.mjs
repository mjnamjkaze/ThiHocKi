/* ============================================================================
   gen-vioedu-time.mjs — sinh bộ đề VioEdu "Đồng hồ · Tính giờ · Ngày tháng · Sudoku"
   cho LỚP 2 và LỚP 3, mức cấp Trường + cấp Quận/Huyện.

   Chạy:  node tools/gen-vioedu-time.mjs
   Xuất:  web/assets/vioedu/t_*.svg          (hình vẽ bằng code, không ảnh stock)
          web/data-vioedu2-tgian.js          (đề lớp 2, nối vào môn VioEdu Toán 2)
          web/data-vioedu3-tgian.js          (đề lớp 3, nối vào môn VioEdu Toán 3)

   Vì sao sinh bằng script: mỗi câu hỏi có hình đều lấy ĐÁP ÁN TỪ CHÍNH DỮ LIỆU
   vẽ ra hình đó (giờ trên đồng hồ, thứ trong tờ lịch lấy từ Date, ô sudoku lấy
   từ lời giải đã kiểm tra là duy nhất) — không thể lệch giữa hình và đáp án.
   Muốn sửa nội dung: sửa trong file này rồi chạy lại.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import { clockSVG, clocksSVG, digitalSVG, calendarSVG, sudokuSVG, weekdayOf, daysInMonth, colOf } from './vio-art.mjs';

const ASSETS = 'web/assets/vioedu';
const VI = 'assets/vioedu/';

/* ───────────────────────────────── tiện ích ───────────────────────────────── */
let assetCount = 0;
function save(name, content) {
  const p = path.join(ASSETS, name);
  fs.writeFileSync(p, content);
  assetCount++;
  return VI + name;
}
const pad = (n) => String(n).padStart(2, '0');

/* xáo đáp án theo thứ tự cố định (không dùng random) để chạy lại vẫn ra y hệt */
let shuffleSeed = 7;
function opts4(correct, distractors) {
  const seen = new Set([String(correct)]);
  const ds = [];
  for (const d of distractors) {
    const s = String(d);
    if (!seen.has(s)) { seen.add(s); ds.push(s); }
    if (ds.length === 3) break;
  }
  if (ds.length < 3) throw new Error('Thiếu phương án nhiễu cho: ' + correct);
  const arr = [String(correct), ...ds];
  /* hoán vị xác định theo seed: đưa đáp án đúng về vị trí seed%4 */
  const pos = shuffleSeed % 4;
  shuffleSeed = (shuffleSeed * 5 + 3) % 97;
  arr.splice(0, 1);
  arr.splice(pos, 0, String(correct));
  return { opts: arr, ans: 'ABCD'[pos] };
}

const Q = (o) => o;                       /* cho dễ đọc khi soạn câu hỏi */

/* ───────────────────────────── giờ giấc: chữ & phép tính ──────────────────── */
const gio = (h, m) => (m === 0 ? `${h} giờ` : `${h} giờ ${m} phút`);
const gioKem = (h, m) => `${(h % 12) + 1} giờ kém ${60 - m} phút`;
const addMin = (h, m, d) => {                    /* đồng hồ kim: quay vòng 12 giờ */
  let t = (((h % 12) * 60 + m + d) % 720 + 720) % 720;
  const hh = Math.floor(t / 60) || 12;
  return [hh, t % 60];
};
const buoi = (h24) => (h24 < 11 ? 'sáng' : h24 < 13 ? 'trưa' : h24 < 18 ? 'chiều' : 'tối');
const to12 = (h24) => (h24 % 12 === 0 ? 12 : h24 % 12);

/* ───────────────────────────────── SUDOKU ────────────────────────────────── */
/* đếm số lời giải (dừng ở 2) — dùng để bảo đảm đề chỉ có MỘT đáp án đúng */
function countSolutions(given, n, limit = 2) {
  const g = given.slice();
  const box = (i) => (n === 4 ? Math.floor(Math.floor(i / n) / 2) * 2 + Math.floor((i % n) / 2) : -1);
  let found = 0;
  const ok = (i, v) => {
    const r = Math.floor(i / n), c = i % n;
    for (let k = 0; k < n; k++) {
      if (g[r * n + k] === v || g[k * n + c] === v) return false;
      if (n === 4) {
        const br = Math.floor(r / 2) * 2 + Math.floor(k / 2), bc = Math.floor(c / 2) * 2 + (k % 2);
        if (g[br * n + bc] === v) return false;
      }
    }
    return true;
  };
  const go = (i) => {
    if (found >= limit) return;
    if (i === n * n) { found++; return; }
    if (g[i]) return go(i + 1);
    for (let v = 1; v <= n; v++) if (ok(i, v)) { g[i] = v; go(i + 1); g[i] = 0; }
  };
  go(0);
  return found;
}
function solveGrid(given, n) {
  const g = given.slice();
  const ok = (i, v) => {
    const r = Math.floor(i / n), c = i % n;
    for (let k = 0; k < n; k++) {
      if (g[r * n + k] === v || g[k * n + c] === v) return false;
      if (n === 4) {
        const br = Math.floor(r / 2) * 2 + Math.floor(k / 2), bc = Math.floor(c / 2) * 2 + (k % 2);
        if (g[br * n + bc] === v) return false;
      }
    }
    return true;
  };
  const go = (i) => {
    if (i === n * n) return true;
    if (g[i]) return go(i + 1);
    for (let v = 1; v <= n; v++) if (ok(i, v)) { g[i] = v; if (go(i + 1)) return true; g[i] = 0; }
    return false;
  };
  if (!go(0)) throw new Error('Sudoku vô nghiệm: ' + given.join(''));
  return g;
}

/* Sinh đề sudoku tự động: lấy một lời giải hợp lệ, thêm dần gợi ý theo thứ tự
   cố định cho tới khi đề chỉ còn ĐÚNG MỘT cách điền — nhờ vậy câu hỏi "ô ❓ là số
   mấy" luôn có một đáp án duy nhất, không phụ thuộc may rủi. */
function perms(a) {
  if (a.length <= 1) return [a];
  const out = [];
  a.forEach((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).forEach((r) => out.push([x, ...r])));
  return out;
}
const LATIN3 = (() => {
  const ps = perms([1, 2, 3]), out = [];
  for (const r0 of ps) for (const r1 of ps) for (const r2 of ps) {
    const g = [...r0, ...r1, ...r2];
    let ok = true;
    for (let c = 0; c < 3; c++) if (new Set([g[c], g[c + 3], g[c + 6]]).size !== 3) ok = false;
    if (ok) out.push(g);
  }
  return out;                                   /* 12 bảng 3×3 hợp lệ */
})();
const BASE4 = [1, 2, 3, 4, 3, 4, 1, 2, 2, 1, 4, 3, 4, 3, 2, 1];
function sol4(i) {
  const sym = perms([1, 2, 3, 4])[i % 24];
  let g = BASE4.map((v) => sym[v - 1]);
  const rows = [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [2, 3, 0, 1]][i % 4];
  g = rows.flatMap((r) => g.slice(r * 4, r * 4 + 4));
  const cols = [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [2, 3, 0, 1]][(i >> 2) % 4];
  return g.map((_, k) => g[Math.floor(k / 4) * 4 + cols[k % 4]]);
}
const ORDER3 = [[0, 4, 8, 2, 3, 7, 1, 5, 6], [1, 5, 6, 0, 4, 8, 2, 3, 7], [2, 3, 7, 1, 5, 6, 0, 4, 8],
                [0, 5, 7, 1, 3, 8, 2, 4, 6], [8, 1, 3, 4, 6, 2, 5, 7, 0], [4, 2, 6, 0, 7, 5, 3, 1, 8]];
/* thêm gợi ý cho tới khi duy nhất; trả về { given, qPos } */
function carve(sol, n, order) {
  const given = new Array(n * n).fill(0);
  for (const c of order) {
    if (countSolutions(given, n) === 1) break;
    given[c] = sol[c];
  }
  const empty = order.filter((c) => !given[c]);
  if (!empty.length) throw new Error('Đề sudoku không còn ô trống để hỏi');
  return { given, qPos: empty[empty.length - 1] };
}
let auto3n = 0, auto4n = 0;
const auto3 = () => { const i = auto3n++; return carve(LATIN3[(i * 5) % 12], 3, ORDER3[i % ORDER3.length]); };
const auto4 = () => {
  const i = auto4n++;
  const order = Array.from({ length: 16 }, (_, k) => (k * 7 + i * 3) % 16);
  const seen = new Set(), ord = [];
  for (const c of order) if (!seen.has(c)) { seen.add(c); ord.push(c); }
  for (let c = 0; c < 16; c++) if (!seen.has(c)) ord.push(c);
  return carve(sol4(i), 4, ord);
};

let sdkId = 0;
/* given: mảng n*n (0 = ô trống). qPos: các ô sẽ hiện dấu ❓ (phải đang trống). */
function sudoku(given, n, qPos, opt = {}) {
  const nSol = countSolutions(given, n);
  if (nSol !== 1) throw new Error(`Sudoku phải có duy nhất 1 lời giải (đang có ${nSol}): ${given.join('')}`);
  const sol = solveGrid(given, n);
  const shown = given.slice();
  for (const p of qPos) {
    if (given[p] !== 0) throw new Error('Ô ❓ phải là ô trống');
    shown[p] = '?';
  }
  const name = `t_s${n}${opt.sym ? 'h' : ''}_${++sdkId}.svg`;
  const img = save(name, sudokuSVG(shown, n, opt));
  return { img, sol, val: qPos.map((p) => sol[p]) };
}

/* mô tả lời giải sudoku theo hàng/cột để trẻ hiểu cách suy luận */
function sudokuWhy(sol, n, p) {
  const r = Math.floor(p / n), c = p % n;
  const row = sol.slice(r * n, r * n + n).join(' – ');
  const col = Array.from({ length: n }, (_, k) => sol[k * n + c]).join(' – ');
  return `Hàng ${r + 1} sau khi điền đủ là ${row}; cột ${c + 1} là ${col}. Vậy ô ❓ (hàng ${r + 1}, cột ${c + 1}) là số ${sol[p]}.`;
}

/* ─────────────────────────── các dạng câu hỏi có hình ─────────────────────── */
const clkImg = (h, m) => save(`t_c${pad(h)}${pad(m)}.svg`, clockSVG(h, m));
const clk2Img = (a, b, la = 'Bắt đầu', lb = 'Kết thúc') =>
  save(`t_c2_${pad(a[0])}${pad(a[1])}_${pad(b[0])}${pad(b[1])}.svg`, clocksSVG([[a[0], a[1], la], [b[0], b[1], lb]]));
const digImg = (h, m) => save(`t_d${pad(h)}${pad(m)}.svg`, digitalSVG(h, m));
const calImg = (y, mo, opt = {}) =>
  save(`t_cal${y}${pad(mo)}${opt.ring ? 'r' + opt.ring.join('') : ''}${opt.hide ? 'h' + opt.hide.join('') : ''}.svg`, calendarSVG(y, mo, opt));

/* 1. Đọc giờ trên đồng hồ kim */
function qReadClock(sec, name, pts, h, m, extra = {}) {
  const correct = gio(h, m);
  const dis = [
    gio(h === 12 ? 1 : h + 1, m),                          /* đọc nhầm sang số kế tiếp */
    m % 5 === 0 && m !== 0 ? gio(m / 5, h * 5 % 60 || 5) : gio(h, (m + 10) % 60),  /* đổi chỗ hai kim */
    gio(h, (m + 5) % 60),
    gio(h, (m + 55) % 60),
    gio(h === 1 ? 12 : h - 1, m),
  ];
  const { opts, ans } = opts4(correct, dis);
  const kimPhut = m === 0 ? 'chỉ đúng số 12' : `chỉ số ${m / 5}`;
  return Q({
    sec, name, pts, text: extra.text || 'Đồng hồ dưới đây chỉ mấy giờ?', img: clkImg(h, m),
    opts, ans,
    why: extra.why || `Kim ngắn (kim giờ) đã qua số ${h}, kim dài (kim phút) ${kimPhut} nên được ${m} phút. Đồng hồ chỉ ${correct}.`,
  });
}

/* 2. Cách đọc "giờ kém" */
function qKem(sec, name, pts, h, m) {
  if (m < 35) throw new Error('Chỉ đọc "kém" khi kim phút đã qua số 7');
  const correct = gioKem(h, m);
  const dis = [gioKem(h, m === 55 ? 35 : m + 5), gioKem(h, m === 35 ? 55 : m - 5), `${h} giờ kém ${60 - m} phút`, gioKem(h === 12 ? 1 : h + 1, m)];
  const { opts, ans } = opts4(correct, dis);
  return Q({
    sec, name, pts, img: clkImg(h, m),
    text: `Đồng hồ dưới đây chỉ ${gio(h, m)}. Cách đọc nào dưới đây cũng chỉ đúng giờ đó?`,
    opts, ans,
    why: `Còn ${60 - m} phút nữa mới đến ${(h % 12) + 1} giờ, nên ${gio(h, m)} còn đọc là ${correct}.`,
  });
}

/* 3. Sau / trước bao nhiêu phút thì là mấy giờ */
function qShift(sec, name, pts, h, m, d, story) {
  const [h2, m2] = addMin(h, m, d);
  const correct = gio(h2, m2);
  const dis = [gio(h2 === 12 ? 1 : h2 + 1, m2), gio(...addMin(h, m, -d)), gio(...addMin(h, m, d + 10)), gio(...addMin(h, m, d - 15))];
  const { opts, ans } = opts4(correct, dis);
  const t = d > 0 ? `sau ${d} phút nữa` : `cách đây ${-d} phút`;
  return Q({
    sec, name, pts, img: clkImg(h, m),
    text: `${story} Đồng hồ đang chỉ như hình. Hỏi ${t} là mấy giờ?`,
    opts, ans,
    why: `Đồng hồ đang chỉ ${gio(h, m)}. ${d > 0 ? `${gio(h, m)} + ${d} phút` : `${gio(h, m)} − ${-d} phút`} = ${correct}.`,
  });
}

/* 4. Hai đồng hồ: đã trôi qua bao lâu */
function qElapsed(sec, name, pts, a, b, story, labels) {
  let mins = ((b[0] % 12) * 60 + b[1]) - ((a[0] % 12) * 60 + a[1]);
  if (mins <= 0) mins += 720;
  const dur = (x) => (x < 60 ? `${x} phút` : x % 60 === 0 ? `${x / 60} giờ` : `${Math.floor(x / 60)} giờ ${x % 60} phút`);
  const correct = dur(mins);
  const { opts, ans } = opts4(correct, [dur(mins + 60), dur(mins + 15), dur(Math.max(5, mins - 30)), dur(mins + 45)]);
  return Q({
    sec, name, pts, img: clk2Img(a, b, labels?.[0], labels?.[1]),
    text: `${story} Hỏi đã trôi qua bao lâu?`,
    opts, ans,
    why: `Từ ${gio(a[0], a[1])} đến ${gio(b[0], b[1])}: ${mins >= 60 ? `${Math.floor(mins / 60)} giờ ${mins % 60 ? mins % 60 + ' phút' : ''}`.trim() : `${mins} phút`}. Vậy đã trôi qua ${correct}.`,
  });
}

/* 5. Đồng hồ điện tử 24 giờ → cách nói thường ngày */
function qDigital(sec, name, pts, h24, m, story) {
  const correct = `${to12(h24)} giờ${m ? ' ' + m + ' phút' : ''} ${buoi(h24)}`;
  const dis = [
    `${to12(h24)} giờ${m ? ' ' + m + ' phút' : ''} sáng`,
    `${h24} giờ${m ? ' ' + m + ' phút' : ''} sáng`,
    `${to12(h24) === 12 ? 1 : to12(h24) + 1} giờ${m ? ' ' + m + ' phút' : ''} ${buoi(h24)}`,
    `${to12(h24)} giờ${m ? ' ' + (60 - m) + ' phút' : ''} ${buoi(h24)}`,
  ];
  const { opts, ans } = opts4(correct, dis);
  return Q({
    sec, name, pts, img: digImg(h24, m),
    text: `${story} Đồng hồ điện tử hiện số như hình. Ta đọc giờ đó là:`,
    opts, ans,
    why: `Đồng hồ điện tử đếm đến 24 giờ. ${h24} giờ − 12 giờ = ${to12(h24)} giờ ${buoi(h24)}, nên đọc là ${correct}.`,
  });
}

/* 6. Xem tờ lịch tháng */
function qCalWeekday(sec, name, pts, y, mo, d, opt = {}) {
  const correct = weekdayOf(y, mo, d);
  const all = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật'];
  const { opts, ans } = opts4(correct, all.filter((w) => w !== correct));
  return Q({
    sec, name, pts, img: calImg(y, mo, { ring: [d] }),
    text: opt.text || `Nhìn tờ lịch tháng ${mo} dưới đây, ngày ${d} (ô khoanh tròn) là thứ mấy?`,
    opts, ans,
    why: opt.why || `Dóng ô ngày ${d} lên hàng tên thứ ở đầu tờ lịch, ta được ${correct}.`,
  });
}

/* ─────────────────────── in ra file dữ liệu cho web app ───────────────────── */
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
function fmtQ(q) {
  const img = q.img ? `, img: '${q.img}'` : '';
  return `    { sec: '${esc(q.sec)}', name: '${esc(q.name)}', pts: ${q.pts},\n` +
    `      text: '${esc(q.text)}'${img},\n` +
    `      opts: o4('${q.opts.map(esc).join("', '")}'), ans: '${q.ans}',\n` +
    `      why: '${esc(q.why)}' },`;
}
function fmtExam(e) {
  const total = e.questions.reduce((t, q) => t + q.pts, 0);
  if (Math.abs(total - 10) > 0.001) throw new Error(`Đề "${e.title}" có tổng điểm ${total} (phải là 10)`);
  return `{\n  id: ${e.id}, title: '${esc(e.title)}', time: ${e.time},\n  questions: [\n${e.questions.map(fmtQ).join('\n')}\n  ],\n},`;
}
function writeBank(file, header, varName, exams, subjectId) {
  const body = `${header}
const ${varName} = [
${exams.map(fmtExam).join('\n')}
];

/* nối thêm vào môn VioEdu Toán đã có (file data-vioedu*-toan.js chạy trước) */
(() => {
  const s = SUBJECTS.find((x) => x.id === '${subjectId}');
  if (!s) return;
  s.exams.push(...${varName});
  s.heroMeta = s.heroMeta.replace(/📚 \\d+ đề/, '📚 ' + s.exams.length + ' đề')
    + ' &nbsp;•&nbsp; Chuyên đề Đồng hồ · Ngày tháng · Sudoku';
})();
`;
  fs.writeFileSync(file, body);
  const nq = exams.reduce((t, e) => t + e.questions.length, 0);
  console.log(`${file}: ${exams.length} đề · ${nq} câu`);
  return nq;
}

/* ══════════════════════════════════════════════════════════════════════════
   LỚP 2 — 14 đề × 10 câu
   ══════════════════════════════════════════════════════════════════════════ */
const L2 = [];
const e2 = (id, title, time, questions) => L2.push({ id, title, time, questions });

/* ── Đề 1: đọc giờ đúng · giờ rưỡi · 15 phút ─────────────────────────────── */
e2(1101, 'Đồng hồ 1 · Giờ đúng – giờ rưỡi – 15 phút', 15, [
  qReadClock('Xem đồng hồ', 'Câu 1', 1, 3, 0),
  qReadClock('Xem đồng hồ', 'Câu 2', 1, 7, 30),
  qReadClock('Xem đồng hồ', 'Câu 3', 1, 9, 15),
  qReadClock('Xem đồng hồ', 'Câu 4', 1, 5, 45),
  qReadClock('Xem đồng hồ', 'Câu 5', 1, 11, 30),
  qReadClock('Xem đồng hồ', 'Câu 6', 1, 12, 15),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 7', pts: 1, img: clkImg(6, 30),
    text: 'Đồng hồ dưới đây chỉ 6 giờ 30 phút. Người ta còn gọi giờ này là:',
    ...opts4('6 giờ rưỡi', ['6 giờ kém rưỡi', '7 giờ rưỡi', 'Nửa giờ 6', '5 giờ rưỡi']),
    why: '30 phút là nửa giờ, nên 6 giờ 30 phút còn gọi là 6 giờ rưỡi.',
  }),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 8', pts: 1,
    text: 'Khi kim dài (kim phút) chỉ đúng số 12 thì đồng hồ đang chỉ:',
    ...opts4('Giờ đúng', ['Giờ rưỡi', '15 phút', '12 phút']),
    why: 'Kim phút chỉ số 12 nghĩa là 0 phút, lúc đó đồng hồ chỉ giờ đúng (ví dụ 3 giờ, 8 giờ).',
  }),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 9', pts: 1,
    text: 'Kim dài (kim phút) đi từ số 12 đến số 3 thì đã trôi qua bao nhiêu phút?',
    ...opts4('15 phút', ['3 phút', '20 phút', '30 phút']),
    why: 'Mỗi khoảng giữa hai số liền nhau là 5 phút. Từ 12 đến 3 có 3 khoảng: 5 × 3 = 15 phút.',
  }),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 10', pts: 1,
    text: 'Trong một giờ, kim dài (kim phút) quay được mấy vòng quanh mặt đồng hồ?',
    ...opts4('1 vòng', ['2 vòng', '12 vòng', 'Nửa vòng']),
    why: '1 giờ = 60 phút, kim phút đi hết đúng một vòng mặt đồng hồ.',
  }),
]);

/* ── Đề 2: đọc giờ chính xác đến 5 phút ──────────────────────────────────── */
e2(1102, 'Đồng hồ 2 · Đọc giờ đến từng 5 phút', 15, [
  qReadClock('Xem đồng hồ', 'Câu 1', 1, 8, 35),
  qReadClock('Xem đồng hồ', 'Câu 2', 1, 2, 20),
  qReadClock('Xem đồng hồ', 'Câu 3', 1, 10, 55),
  qReadClock('Xem đồng hồ', 'Câu 4', 1, 4, 10),
  qReadClock('Xem đồng hồ', 'Câu 5', 1, 6, 40),
  qReadClock('Xem đồng hồ', 'Câu 6', 1, 1, 25),
  qReadClock('Xem đồng hồ', 'Câu 7', 1, 9, 50),
  qReadClock('Xem đồng hồ', 'Câu 8', 1, 12, 5),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 9', pts: 1,
    text: 'Kim dài chỉ số 7 thì đồng hồ đang chỉ bao nhiêu phút?',
    ...opts4('35 phút', ['7 phút', '30 phút', '40 phút']),
    why: 'Đếm 5 phút một: từ số 12 đến số 7 có 7 khoảng, 5 × 7 = 35 phút.',
  }),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 10', pts: 1,
    text: 'Lúc 4 giờ 20 phút, kim ngắn (kim giờ) nằm ở đâu trên mặt đồng hồ?',
    ...opts4('Đã đi qua số 4 một chút', ['Chỉ đúng số 4', 'Chỉ đúng số 20', 'Đã đi qua số 5 một chút']),
    why: 'Kim giờ nhích dần trong suốt một giờ: lúc 4 giờ 20 phút nó đã rời số 4 và đang tiến dần về số 5.',
  }),
]);

/* ── Đề 3: giờ kém & buổi trong ngày ─────────────────────────────────────── */
e2(1103, 'Đồng hồ 3 · Giờ kém và buổi trong ngày', 15, [
  qKem('Giờ kém', 'Câu 1', 1, 8, 45),
  qKem('Giờ kém', 'Câu 2', 1, 5, 40),
  qKem('Giờ kém', 'Câu 3', 1, 11, 55),
  qKem('Giờ kém', 'Câu 4', 1, 2, 50),
  qKem('Giờ kém', 'Câu 5', 1, 9, 35),
  Q({
    sec: 'Buổi trong ngày', name: 'Câu 6', pts: 1,
    text: 'Buổi tối, khi đồng hồ chỉ 8 giờ thì đồng hồ điện tử trong nhà hiện số mấy?',
    ...opts4('20:00', ['08:00', '18:00', '22:00']),
    why: 'Buổi tối 8 giờ là 12 + 8 = 20 giờ, đồng hồ điện tử hiện 20:00.',
  }),
  Q({
    sec: 'Buổi trong ngày', name: 'Câu 7', pts: 1,
    text: 'Một ngày có bao nhiêu giờ?',
    ...opts4('24 giờ', ['12 giờ', '60 giờ', '30 giờ']),
    why: 'Một ngày (một ngày đêm) có 24 giờ.',
  }),
  Q({
    sec: 'Buổi trong ngày', name: 'Câu 8', pts: 1,
    text: 'Em đi ngủ lúc 21 giờ. Đó là mấy giờ tối?',
    ...opts4('9 giờ tối', ['7 giờ tối', '11 giờ tối', '8 giờ tối']),
    why: '21 giờ − 12 giờ = 9 giờ, tức 9 giờ tối.',
  }),
  Q({
    sec: 'Buổi trong ngày', name: 'Câu 9', pts: 1,
    text: 'Trong một ngày, kim ngắn (kim giờ) quay được mấy vòng quanh mặt đồng hồ?',
    ...opts4('2 vòng', ['1 vòng', '12 vòng', '24 vòng']),
    why: 'Mỗi vòng của kim giờ là 12 giờ; một ngày 24 giờ nên kim giờ quay 24 : 12 = 2 vòng.',
  }),
  Q({
    sec: 'Buổi trong ngày', name: 'Câu 10', pts: 1,
    text: 'Sắp xếp các mốc giờ theo thứ tự sớm → muộn trong ngày: 15 giờ ; 7 giờ ; 20 giờ ; 11 giờ.',
    ...opts4('7 giờ ; 11 giờ ; 15 giờ ; 20 giờ', ['7 giờ ; 15 giờ ; 11 giờ ; 20 giờ', '20 giờ ; 15 giờ ; 11 giờ ; 7 giờ', '11 giờ ; 7 giờ ; 15 giờ ; 20 giờ']),
    why: 'Cứ so sánh số giờ từ bé đến lớn: 7 < 11 < 15 < 20.',
  }),
]);

/* ── Đề 4: cộng / trừ thời gian trên đồng hồ ─────────────────────────────── */
e2(1104, 'Tính giờ 1 · Sau bao lâu nữa là mấy giờ?', 15, [
  qShift('Tính giờ', 'Câu 1', 1, 7, 15, 30, 'Nam bắt đầu ăn sáng.'),
  qShift('Tính giờ', 'Câu 2', 1, 9, 0, 45, 'Tiết Toán bắt đầu.'),
  qShift('Tính giờ', 'Câu 3', 1, 2, 40, 20, 'Lan bắt đầu tưới cây.'),
  qShift('Tính giờ', 'Câu 4', 1, 10, 30, -15, 'Bây giờ là giờ ra chơi.'),
  qShift('Tính giờ', 'Câu 5', 1, 4, 50, 25, 'Bố bắt đầu nấu cơm.'),
  qShift('Tính giờ', 'Câu 6', 1, 11, 20, -40, 'Đồng hồ nhà bếp đang chỉ giờ này.'),
  Q({
    sec: 'Tính giờ', name: 'Câu 7', pts: 1,
    text: 'Mẹ bắt đầu làm bánh lúc 10 giờ 10 phút, làm trong 30 phút. Mẹ làm xong lúc mấy giờ?',
    ...opts4('10 giờ 40 phút', ['10 giờ 30 phút', '11 giờ 10 phút', '10 giờ 35 phút']),
    why: '10 giờ 10 phút + 30 phút = 10 giờ 40 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 8', pts: 1,
    text: 'Bộ phim hoạt hình bắt đầu lúc 8 giờ và kéo dài 45 phút. Phim kết thúc lúc mấy giờ?',
    ...opts4('8 giờ 45 phút', ['8 giờ 15 phút', '9 giờ 45 phút', '9 giờ']),
    why: '8 giờ + 45 phút = 8 giờ 45 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 9', pts: 1,
    text: 'Xe buýt chạy từ bến lúc 6 giờ 50 phút, đi hết 20 phút thì tới trường. Xe tới trường lúc mấy giờ?',
    ...opts4('7 giờ 10 phút', ['6 giờ 70 phút', '7 giờ 20 phút', '6 giờ 30 phút']),
    why: 'Còn 10 phút nữa là 7 giờ, dùng 10 phút đó rồi thêm 10 phút nữa: 6 giờ 50 phút + 20 phút = 7 giờ 10 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 10', pts: 1,
    text: 'Bé Bo ngủ trưa 1 giờ 30 phút, tỉnh dậy lúc 2 giờ chiều. Bé Bo bắt đầu ngủ lúc mấy giờ?',
    ...opts4('12 giờ 30 phút', ['1 giờ 30 phút', '12 giờ', '11 giờ 30 phút']),
    why: 'Lùi lại 1 giờ 30 phút từ 2 giờ: 2 giờ − 1 giờ = 1 giờ, 1 giờ − 30 phút = 12 giờ 30 phút.',
  }),
]);

/* ── Đề 5: hai đồng hồ – đã trôi qua bao lâu ─────────────────────────────── */
e2(1105, 'Tính giờ 2 · Đã trôi qua bao lâu?', 15, [
  qElapsed('Khoảng thời gian', 'Câu 1', 1, [7, 0], [7, 45], 'Nam làm bài tập từ lúc đồng hồ thứ nhất đến lúc đồng hồ thứ hai.'),
  qElapsed('Khoảng thời gian', 'Câu 2', 1, [8, 15], [9, 0], 'Lớp 2A sinh hoạt tập thể.'),
  qElapsed('Khoảng thời gian', 'Câu 3', 1, [3, 30], [5, 0], 'Bố sửa xe đạp giúp Nam.'),
  qElapsed('Khoảng thời gian', 'Câu 4', 1, [10, 20], [11, 5], 'Mẹ đi chợ.', ['Lúc đi', 'Lúc về']),
  qElapsed('Khoảng thời gian', 'Câu 5', 1, [1, 45], [3, 15], 'Cả nhà xem một trận bóng đá.'),
  qElapsed('Khoảng thời gian', 'Câu 6', 1, [6, 40], [7, 10], 'Bé Na tập đàn.'),
  Q({
    sec: 'Khoảng thời gian', name: 'Câu 7', pts: 1,
    text: 'An làm bài từ 8 giờ đến 9 giờ 15 phút. Hỏi An làm bài trong bao lâu?',
    ...opts4('1 giờ 15 phút', ['15 phút', '1 giờ 30 phút', '2 giờ 15 phút']),
    why: '9 giờ 15 phút − 8 giờ = 1 giờ 15 phút.',
  }),
  Q({
    sec: 'Khoảng thời gian', name: 'Câu 8', pts: 1,
    text: 'Giờ ra chơi từ 9 giờ 25 phút đến 9 giờ 50 phút. Giờ ra chơi dài bao nhiêu phút?',
    ...opts4('25 phút', ['15 phút', '35 phút', '30 phút']),
    why: '9 giờ 50 phút − 9 giờ 25 phút = 25 phút.',
  }),
  Q({
    sec: 'Khoảng thời gian', name: 'Câu 9', pts: 1,
    text: 'Buổi học bắt đầu lúc 7 giờ 30 phút và tan lúc 10 giờ 30 phút. Buổi học kéo dài mấy giờ?',
    ...opts4('3 giờ', ['2 giờ', '3 giờ 30 phút', '4 giờ']),
    why: 'Từ 7 giờ 30 phút đến 10 giờ 30 phút là đúng 3 giờ.',
  }),
  Q({
    sec: 'Khoảng thời gian', name: 'Câu 10', pts: 1,
    text: 'Mỗi tiết học dài 35 phút. Hai tiết học liền nhau (không nghỉ giữa giờ) kéo dài bao lâu?',
    ...opts4('1 giờ 10 phút', ['70 giờ', '1 giờ 5 phút', '1 giờ 15 phút']),
    why: '35 × 2 = 70 phút; 70 phút = 60 phút + 10 phút = 1 giờ 10 phút.',
  }),
]);

/* ── Đề 6: tờ lịch tháng ─────────────────────────────────────────────────── */
e2(1106, 'Ngày tháng 1 · Đọc tờ lịch tháng', 15, [
  qCalWeekday('Xem lịch', 'Câu 1', 1, 2025, 4, 12),
  qCalWeekday('Xem lịch', 'Câu 2', 1, 2025, 9, 2),
  qCalWeekday('Xem lịch', 'Câu 3', 1, 2026, 1, 20),
  Q({
    sec: 'Xem lịch', name: 'Câu 4', pts: 1, img: calImg(2025, 6),
    text: 'Nhìn tờ lịch tháng 6 dưới đây, tháng này có bao nhiêu ngày Chủ nhật?',
    ...opts4('5 ngày', ['3 ngày', '4 ngày', '6 ngày']),
    why: 'Các ô cột Chủ nhật (in đỏ) là ngày 1, 8, 15, 22, 29 — tất cả 5 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 5', pts: 1, img: calImg(2025, 6),
    text: 'Vẫn là tờ lịch tháng 6 ở trên: ngày Chủ nhật cuối cùng của tháng là ngày nào?',
    ...opts4('Ngày 29', ['Ngày 22', 'Ngày 30', 'Ngày 28']),
    why: 'Các Chủ nhật là 1, 8, 15, 22, 29; ngày 30 đã là thứ Hai nên Chủ nhật cuối cùng là ngày 29.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 6', pts: 1, img: calImg(2025, 11, { ring: [26] }),
    text: 'Sinh nhật bạn Lan là ngày 26 tháng 11 (ô khoanh tròn). Sinh nhật Lan rơi vào thứ mấy?',
    ...opts4('Thứ Tư', ['Thứ Ba', 'Thứ Năm', 'Thứ Sáu']),
    why: 'Dóng ô ngày 26 lên hàng tên thứ, ta được thứ Tư.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 7', pts: 1, img: calImg(2025, 11),
    text: 'Vẫn tờ lịch tháng 11 ở trên: tháng 11 năm đó có bao nhiêu ngày?',
    ...opts4('30 ngày', ['28 ngày', '29 ngày', '31 ngày']),
    why: 'Ô cuối cùng trong tờ lịch là ngày 30, nên tháng 11 có 30 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 8', pts: 1,
    text: 'Những tháng nào dưới đây có 31 ngày?',
    ...opts4('Tháng 1, 3, 5, 7', ['Tháng 2, 4, 6, 8', 'Tháng 4, 6, 9, 11', 'Tháng 2, 3, 4, 5']),
    why: 'Các tháng có 31 ngày là 1, 3, 5, 7, 8, 10, 12; các tháng 4, 6, 9, 11 có 30 ngày; tháng 2 có 28 hoặc 29 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 9', pts: 1,
    text: 'Một tuần lễ em đi học từ thứ Hai đến thứ Sáu, nghỉ thứ Bảy và Chủ nhật. Mỗi tuần em đi học mấy ngày?',
    ...opts4('5 ngày', ['4 ngày', '6 ngày', '7 ngày']),
    why: 'Từ thứ Hai đến thứ Sáu có 5 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 10', pts: 1,
    text: 'Tháng 5 có 31 ngày. Hỏi tháng 5 có mấy tuần lễ và lẻ mấy ngày?',
    ...opts4('4 tuần và 3 ngày', ['4 tuần và 1 ngày', '5 tuần', '3 tuần và 5 ngày']),
    why: '31 : 7 = 4 (dư 3), nên tháng 5 có 4 tuần lễ và lẻ 3 ngày.',
  }),
]);

/* ── Đề 7: thứ – ngày – tuần ─────────────────────────────────────────────── */
e2(1107, 'Ngày tháng 2 · Thứ, ngày và tuần lễ', 15, [
  Q({
    sec: 'Thứ – ngày', name: 'Câu 1', pts: 1,
    text: 'Hôm nay là thứ Ba ngày 8. Hỏi thứ Ba tuần sau là ngày mấy?',
    ...opts4('Ngày 15', ['Ngày 14', 'Ngày 16', 'Ngày 22']),
    why: 'Một tuần có 7 ngày nên cùng thứ của tuần sau là 8 + 7 = 15.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 2', pts: 1,
    text: 'Thứ Năm tuần này là ngày 25 tháng 3. Hỏi thứ Năm tuần trước là ngày nào?',
    ...opts4('Ngày 18 tháng 3', ['Ngày 24 tháng 3', 'Ngày 17 tháng 3', 'Ngày 20 tháng 3']),
    why: 'Lùi lại một tuần: 25 − 7 = 18, tức ngày 18 tháng 3.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 3', pts: 1, img: calImg(2026, 3, { ring: [5] }),
    text: 'Nhìn tờ lịch tháng 3 dưới đây. Ngày 5 (ô khoanh tròn) là thứ Năm. Vậy ngày 19 là thứ mấy?',
    ...opts4('Thứ Năm', ['Thứ Tư', 'Thứ Sáu', 'Thứ Bảy']),
    why: '19 − 5 = 14 = 7 × 2, tức đúng 2 tuần sau, nên ngày 19 cũng là thứ Năm.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 4', pts: 1,
    text: 'Ngày 1 tháng 6 là thứ Hai. Hỏi ngày 10 tháng 6 là thứ mấy?',
    ...opts4('Thứ Tư', ['Thứ Ba', 'Thứ Năm', 'Thứ Hai']),
    why: 'Các thứ Hai là 1, 8; ngày 9 là thứ Ba, ngày 10 là thứ Tư.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 5', pts: 1,
    text: 'Ngày 8 tháng 3 là Chủ nhật. Ngày Chủ nhật tiếp theo trong tháng đó là ngày nào?',
    ...opts4('Ngày 15', ['Ngày 14', 'Ngày 16', 'Ngày 9']),
    why: 'Chủ nhật cách nhau 7 ngày: 8 + 7 = 15.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 6', pts: 1,
    text: 'Trại hè bắt đầu ngày 1 tháng 6 và kết thúc ngày 8 tháng 6. Trại hè diễn ra trong bao nhiêu ngày?',
    ...opts4('8 ngày', ['6 ngày', '7 ngày', '9 ngày']),
    why: 'Đếm cả ngày đầu và ngày cuối: từ ngày 1 đến ngày 8 có 8 ngày.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 7', pts: 1,
    text: 'Từ thứ Hai đến Chủ nhật cùng tuần có mấy ngày?',
    ...opts4('7 ngày', ['5 ngày', '6 ngày', '8 ngày']),
    why: 'Một tuần lễ có 7 ngày: Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ nhật.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 8', pts: 1,
    text: 'Hôm qua là thứ Sáu. Hỏi ngày kia là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Bảy', 'Thứ Ba']),
    why: 'Hôm qua là thứ Sáu nên hôm nay là thứ Bảy, ngày mai là Chủ nhật, ngày kia (sau ngày mai) là thứ Hai.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 9', pts: 1,
    text: 'Một tháng có 30 ngày và ngày 30 là thứ Ba. Hỏi ngày 23 của tháng đó là thứ mấy?',
    ...opts4('Thứ Ba', ['Thứ Hai', 'Thứ Tư', 'Chủ nhật']),
    why: '30 − 23 = 7, đúng một tuần trước, nên ngày 23 cũng là thứ Ba.',
  }),
  Q({
    sec: 'Thứ – ngày', name: 'Câu 10', pts: 1,
    text: 'Nam nghỉ hè 2 tuần lễ và thêm 3 ngày. Nam nghỉ tất cả bao nhiêu ngày?',
    ...opts4('17 ngày', ['14 ngày', '15 ngày', '23 ngày']),
    why: '2 tuần = 7 × 2 = 14 ngày; 14 + 3 = 17 ngày.',
  }),
]);

/* ── Đề 8 & 9: sudoku 3×3 ────────────────────────────────────────────────── */
function qSudoku3(sec, name, pts, opt = {}) {
  const { given, qPos } = auto3();
  const s = sudoku(given, 3, [qPos], opt);
  const correct = String(s.val[0]);
  const { opts, ans } = opts4(correct, ['1', '2', '3', 'Không xác định được'].filter((x) => x !== correct));
  return Q({
    sec, name, pts, img: s.img,
    text: opt.text || 'Điền các số 1, 2, 3 vào bảng sao cho mỗi hàng ngang và mỗi cột dọc đều có đủ ba số 1, 2, 3 (không số nào lặp lại). Số ở ô ❓ là số mấy?',
    opts, ans, why: sudokuWhy(s.sol, 3, qPos),
  });
}

e2(1108, 'Sudoku 3×3 · Làm quen', 15, [
  qSudoku3('Sudoku', 'Câu 1', 1),
  qSudoku3('Sudoku', 'Câu 2', 1),
  qSudoku3('Sudoku', 'Câu 3', 1),
  qSudoku3('Sudoku', 'Câu 4', 1),
  qSudoku3('Sudoku', 'Câu 5', 1),
  qSudoku3('Sudoku', 'Câu 6', 1),
  qSudoku3('Sudoku', 'Câu 7', 1),
  qSudoku3('Sudoku', 'Câu 8', 1),
  Q({
    sec: 'Sudoku', name: 'Câu 9', pts: 1,
    text: 'Trong bảng sudoku 3×3 điền các số 1, 2, 3, mỗi hàng ngang có tổng bằng bao nhiêu?',
    ...opts4('6', ['3', '9', '5']),
    why: 'Mỗi hàng có đủ ba số 1, 2, 3 nên tổng luôn là 1 + 2 + 3 = 6.',
  }),
  Q({
    sec: 'Sudoku', name: 'Câu 10', pts: 1,
    text: 'Một bảng sudoku 3×3 đã điền xong có tất cả bao nhiêu số 2?',
    ...opts4('3 số', ['1 số', '2 số', '9 số']),
    why: 'Mỗi hàng có đúng một số 2, bảng có 3 hàng nên có 3 số 2.',
  }),
]);

/* sudoku hình (dùng ●, ▲, ■ thay cho 1, 2, 3) */
const SYM = { 1: 'circle', 2: 'tri', 3: 'square' };
const SYM_NAME = { 1: 'hình tròn ●', 2: 'hình tam giác ▲', 3: 'hình vuông ■' };
function qSudokuShape(sec, name, pts) {
  const { given, qPos } = auto3();
  const s = sudoku(given, 3, [qPos], { sym: SYM });
  const correct = SYM_NAME[s.val[0]];
  const { opts, ans } = opts4(correct, Object.values(SYM_NAME).filter((x) => x !== correct).concat('Không xác định được'));
  return Q({
    sec, name, pts, img: s.img,
    text: 'Mỗi hàng ngang và mỗi cột dọc phải có đủ ba hình khác nhau: hình tròn ●, hình tam giác ▲, hình vuông ■. Hỏi ô ❓ là hình gì?',
    opts, ans,
    why: `Coi ● là 1, ▲ là 2, ■ là 3 thì bảng điền đủ là ${s.sol.slice(0, 3).join('')} / ${s.sol.slice(3, 6).join('')} / ${s.sol.slice(6).join('')}. Ô ❓ là ${correct}.`,
  });
}

e2(1109, 'Sudoku 3×3 · Nâng cao và sudoku hình', 18, [
  qSudoku3('Sudoku', 'Câu 1', 1),
  qSudoku3('Sudoku', 'Câu 2', 1),
  qSudoku3('Sudoku', 'Câu 3', 1),
  qSudoku3('Sudoku', 'Câu 4', 1),
  qSudokuShape('Sudoku hình', 'Câu 5', 1),
  qSudokuShape('Sudoku hình', 'Câu 6', 1),
  qSudokuShape('Sudoku hình', 'Câu 7', 1),
  Q({
    sec: 'Sudoku', name: 'Câu 8', pts: 1,
    text: 'Bảng sudoku 3×3 điền số 1, 2, 3. Biết hàng thứ nhất là 1 – 2 – 3 và ô đầu hàng thứ hai là số 2. Hàng thứ hai từ trái sang phải là:',
    ...opts4('2 – 3 – 1', ['2 – 1 – 3', '3 – 1 – 2', '2 – 3 – 2']),
    why: 'Hàng 2 đã có số 2 ở ô đầu nên hai ô còn lại là 1 và 3. Cột 3 đã có số 3 (ở hàng 1) nên ô cuối hàng 2 phải là 1, ô giữa là 3. Hàng thứ hai là 2 – 3 – 1.',
  }),
  Q({
    sec: 'Sudoku', name: 'Câu 9', pts: 1,
    text: 'Cả bảng sudoku 3×3 đã điền xong có tổng tất cả các số bằng bao nhiêu?',
    ...opts4('18', ['6', '9', '12']),
    why: 'Mỗi hàng có tổng 1 + 2 + 3 = 6; ba hàng có tổng 6 × 3 = 18.',
  }),
  Q({
    sec: 'Sudoku', name: 'Câu 10', pts: 1,
    text: 'Trong bảng sudoku 3×3, nếu ô giữa là số 2 và ô góc trên bên trái là số 1 thì ô góc dưới bên phải là số mấy?',
    ...opts4('3', ['1', '2', 'Không xác định được']),
    why: 'Ô giữa là 2 nên cột 2 ở hàng 1 không thể là 2, mà hàng 1 bắt đầu bằng 1 nên hàng 1 là 1 – 3 – 2. Cột 3 đã có 2 (hàng 1); hàng 2 là 3 – 2 – 1 nên ô góc dưới bên phải chỉ còn số 3.',
  }),
]);

/* ── Đề 10–14: tổng hợp cấp Trường / cấp Quận ────────────────────────────── */
e2(1110, 'Cấp Trường · Tổng hợp Đồng hồ và Lịch', 18, [
  qReadClock('Cấp Trường', 'Câu 1', 1, 7, 40),
  qKem('Cấp Trường', 'Câu 2', 1, 4, 45),
  qShift('Cấp Trường', 'Câu 3', 1, 8, 25, 50, 'Buổi tập múa bắt đầu.'),
  qElapsed('Cấp Trường', 'Câu 4', 1, [2, 10], [4, 40], 'Cả lớp đi tham quan bảo tàng.', ['Lúc đến', 'Lúc về']),
  qCalWeekday('Cấp Trường', 'Câu 5', 1, 2025, 12, 25),
  qSudoku3('Cấp Trường', 'Câu 6', 1),
  Q({
    sec: 'Cấp Trường', name: 'Câu 7', pts: 1,
    text: 'Nam học bài từ 19 giờ 30 phút đến 20 giờ 15 phút, sau đó đọc truyện 20 phút rồi đi ngủ ngay. Nam đi ngủ lúc mấy giờ?',
    ...opts4('20 giờ 35 phút', ['20 giờ 15 phút', '21 giờ 5 phút', '20 giờ 45 phút']),
    why: 'Nam đọc truyện xong lúc 20 giờ 15 phút + 20 phút = 20 giờ 35 phút.',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 8', pts: 1,
    text: 'Trong một tháng có 31 ngày, ngày 24 là Chủ nhật. Hỏi ngày 31 của tháng đó là thứ mấy?',
    ...opts4('Chủ nhật', ['Thứ Bảy', 'Thứ Hai', 'Thứ Sáu']),
    why: '31 − 24 = 7 ngày, đúng một tuần sau, nên ngày 31 cũng là Chủ nhật.',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 9', pts: 1,
    text: 'Kim phút đang chỉ số 4. Sau 25 phút nữa kim phút chỉ số mấy?',
    ...opts4('Số 9', ['Số 5', 'Số 8', 'Số 10']),
    why: 'Kim phút ở số 4 tức 20 phút; 20 + 25 = 45 phút, ứng với số 9 (45 : 5 = 9).',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 10', pts: 1,
    text: 'Mỗi ngày Lan tập đàn 45 phút. Hỏi trong 2 ngày Lan tập đàn tất cả bao lâu?',
    ...opts4('1 giờ 30 phút', ['90 giờ', '1 giờ 15 phút', '2 giờ']),
    why: '45 × 2 = 90 phút; 90 phút = 60 phút + 30 phút = 1 giờ 30 phút.',
  }),
]);

e2(1111, 'Cấp Quận/Huyện · Thời gian nâng cao', 20, [
  qReadClock('Cấp Quận', 'Câu 1', 1, 11, 35),
  qShift('Cấp Quận', 'Câu 2', 1, 10, 45, 35, 'Đồng hồ ga tàu đang chỉ giờ này.'),
  qElapsed('Cấp Quận', 'Câu 3', 1, [9, 50], [12, 20], 'Chuyến xe khách chạy từ bến A đến bến B.', ['Xuất phát', 'Đến nơi']),
  Q({
    sec: 'Cấp Quận', name: 'Câu 4', pts: 1,
    text: 'Một bộ phim chiếu lúc 19 giờ 45 phút, dài 1 giờ 30 phút. Phim kết thúc lúc mấy giờ?',
    ...opts4('21 giờ 15 phút', ['20 giờ 15 phút', '21 giờ 45 phút', '20 giờ 75 phút']),
    why: '19 giờ 45 phút + 1 giờ = 20 giờ 45 phút; thêm 30 phút nữa là 21 giờ 15 phút.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 5', pts: 1,
    text: 'Tàu chạy từ Hà Nội lúc 6 giờ sáng, đến Vinh lúc 12 giờ trưa cùng ngày. Tàu chạy hết bao lâu?',
    ...opts4('6 giờ', ['5 giờ', '7 giờ', '12 giờ']),
    why: 'Từ 6 giờ đến 12 giờ là 12 − 6 = 6 giờ.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 6', pts: 1,
    text: 'Mỗi tiết học dài 35 phút, giữa hai tiết nghỉ 5 phút. Tiết 1 bắt đầu lúc 7 giờ 30 phút. Hỏi tiết 3 bắt đầu lúc mấy giờ?',
    ...opts4('8 giờ 50 phút', ['8 giờ 45 phút', '8 giờ 40 phút', '9 giờ']),
    why: 'Mỗi tiết cộng giờ nghỉ là 35 + 5 = 40 phút. Tiết 3 bắt đầu sau 2 lần như vậy: 7 giờ 30 phút + 80 phút = 8 giờ 50 phút.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 7', pts: 1,
    text: 'Bây giờ là 9 giờ. Hỏi sau bao lâu nữa kim phút và kim giờ cùng chỉ vào số 12?',
    ...opts4('3 giờ', ['9 giờ', '12 giờ', '2 giờ']),
    why: 'Cả hai kim cùng ở số 12 lúc 12 giờ; từ 9 giờ đến 12 giờ là 3 giờ.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 8', pts: 1,
    text: 'Nam bắt đầu làm bài lúc 8 giờ 20 phút và làm trong 1 giờ 45 phút. Nam làm xong lúc mấy giờ?',
    ...opts4('10 giờ 5 phút', ['9 giờ 65 phút', '10 giờ 15 phút', '9 giờ 5 phút']),
    why: '8 giờ 20 phút + 1 giờ = 9 giờ 20 phút; 9 giờ 20 phút + 45 phút = 10 giờ 5 phút.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 9', pts: 1,
    text: 'Một cái đồng hồ mỗi giờ gõ số tiếng đúng bằng số giờ (1 giờ gõ 1 tiếng, 2 giờ gõ 2 tiếng…). Từ 1 giờ đến 5 giờ đồng hồ gõ tất cả bao nhiêu tiếng?',
    ...opts4('15 tiếng', ['5 tiếng', '10 tiếng', '20 tiếng']),
    why: '1 + 2 + 3 + 4 + 5 = 15 tiếng.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 10', pts: 1,
    text: 'Đồng hồ nhà Nam chạy nhanh 5 phút. Khi đồng hồ đó chỉ 7 giờ 20 phút thì thực ra đang là mấy giờ?',
    ...opts4('7 giờ 15 phút', ['7 giờ 25 phút', '7 giờ 20 phút', '6 giờ 15 phút']),
    why: 'Đồng hồ chạy nhanh 5 phút nên giờ thật ít hơn 5 phút: 7 giờ 20 phút − 5 phút = 7 giờ 15 phút.',
  }),
]);

e2(1112, 'Cấp Quận/Huyện · Lịch và suy luận', 20, [
  qCalWeekday('Cấp Quận', 'Câu 1', 1, 2026, 5, 1),
  Q({
    sec: 'Cấp Quận', name: 'Câu 2', pts: 1, img: calImg(2026, 5),
    text: 'Vẫn là tờ lịch tháng 5 ở trên. Trong tháng này có bao nhiêu ngày thứ Bảy?',
    ...opts4('5 ngày', ['4 ngày', '6 ngày', '3 ngày']),
    why: 'Cột thứ Bảy có các ngày 2, 9, 16, 23, 30 — tất cả 5 ngày.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 3', pts: 1,
    text: 'Ngày 1 của một tháng là thứ Sáu. Hỏi ngày 15 của tháng đó là thứ mấy?',
    ...opts4('Thứ Sáu', ['Thứ Năm', 'Thứ Bảy', 'Chủ nhật']),
    why: '15 − 1 = 14 = 7 × 2 nên ngày 15 cách ngày 1 đúng 2 tuần, cũng là thứ Sáu.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 4', pts: 1,
    text: 'Tháng 4 có 30 ngày. Ngày 30 tháng 4 là thứ Tư. Hỏi ngày 1 tháng 5 là thứ mấy?',
    ...opts4('Thứ Năm', ['Thứ Ba', 'Thứ Tư', 'Thứ Sáu']),
    why: 'Ngày 1 tháng 5 là ngày liền sau ngày 30 tháng 4 nên là thứ Năm.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 5', pts: 1,
    text: 'Trong một tháng có 31 ngày, ngày đầu tháng là Chủ nhật. Tháng đó có mấy ngày Chủ nhật?',
    ...opts4('5 ngày', ['4 ngày', '3 ngày', '6 ngày']),
    why: 'Các Chủ nhật là 1, 8, 15, 22, 29 — có 5 ngày.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 6', pts: 1,
    text: 'Chuyến công tác của bố kéo dài 10 ngày, ngày đầu tiên là ngày 25 tháng 4 (tháng 4 có 30 ngày). Ngày cuối cùng của chuyến đi là ngày nào?',
    ...opts4('Ngày 4 tháng 5', ['Ngày 5 tháng 5', 'Ngày 3 tháng 5', 'Ngày 6 tháng 5']),
    why: 'Trong tháng 4 bố đi các ngày 25, 26, 27, 28, 29, 30 — được 6 ngày. Còn 10 − 6 = 4 ngày nữa là các ngày 1, 2, 3, 4 tháng 5. Vậy ngày cuối cùng là ngày 4 tháng 5.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 7', pts: 1,
    text: 'Một năm thường có 365 ngày. Hỏi một năm thường có bao nhiêu tuần lễ và lẻ mấy ngày?',
    ...opts4('52 tuần và 1 ngày', ['52 tuần', '53 tuần', '52 tuần và 2 ngày']),
    why: '365 : 7 = 52 (dư 1) nên một năm thường có 52 tuần lễ và lẻ 1 ngày.',
  }),
  qSudoku3('Cấp Quận', 'Câu 8', 1),
  Q({
    sec: 'Cấp Quận', name: 'Câu 9', pts: 1,
    text: 'Sinh nhật Nam vào thứ Ba ngày 12. Sinh nhật Lan sau sinh nhật Nam 9 ngày. Sinh nhật Lan là thứ mấy?',
    ...opts4('Thứ Năm', ['Thứ Tư', 'Thứ Sáu', 'Thứ Ba']),
    why: '9 ngày = 7 ngày (1 tuần) + 2 ngày. Sau 1 tuần vẫn là thứ Ba, thêm 2 ngày nữa là thứ Năm.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 10', pts: 1,
    text: 'Hôm nay là thứ Bảy. Hỏi sau 15 ngày nữa là thứ mấy?',
    ...opts4('Chủ nhật', ['Thứ Bảy', 'Thứ Hai', 'Thứ Sáu']),
    why: '15 = 7 × 2 + 1. Sau 2 tuần vẫn là thứ Bảy, thêm 1 ngày nữa là Chủ nhật.',
  }),
]);

e2(1113, 'Cấp Quận/Huyện · Đồng hồ và Sudoku', 20, [
  qReadClock('Cấp Quận', 'Câu 1', 1, 5, 55),
  qReadClock('Cấp Quận', 'Câu 2', 1, 3, 35),
  qShift('Cấp Quận', 'Câu 3', 1, 12, 40, 45, 'Đồng hồ trên tường lớp học đang chỉ giờ này.'),
  qElapsed('Cấp Quận', 'Câu 4', 1, [7, 35], [10, 5], 'Nam về quê thăm ông bà.', ['Lúc đi', 'Lúc tới']),
  qSudoku3('Cấp Quận', 'Câu 5', 1),
  qSudoku3('Cấp Quận', 'Câu 6', 1),
  qSudokuShape('Cấp Quận', 'Câu 7', 1),
  Q({
    sec: 'Cấp Quận', name: 'Câu 8', pts: 1,
    text: 'Ba bạn Nam, Bình, Lan vào lớp lần lượt cách nhau 5 phút. Nam vào lúc 7 giờ 10 phút và là người vào đầu tiên, Lan vào sau cùng. Lan vào lớp lúc mấy giờ?',
    ...opts4('7 giờ 20 phút', ['7 giờ 15 phút', '7 giờ 25 phút', '7 giờ 30 phút']),
    why: 'Bình vào lúc 7 giờ 15 phút, Lan vào sau Bình 5 phút nữa: 7 giờ 20 phút.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 9', pts: 1,
    text: 'Trong bảng sudoku 3×3, hàng thứ nhất là 3 – 1 – 2. Hỏi ô giữa của bảng (hàng 2, cột 2) có thể là số nào?',
    ...opts4('2 hoặc 3', ['Chỉ có thể là 1', 'Chỉ có thể là 2', 'Số nào cũng được']),
    why: 'Cột 2 đã có số 1 ở hàng đầu nên ô giữa chỉ còn 2 hoặc 3.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 10', pts: 1,
    text: 'Đồng hồ chỉ 8 giờ. Hỏi giữa hai kim đồng hồ lúc đó có bao nhiêu khoảng nhỏ (khoảng cách giữa hai số liền nhau) nếu tính theo đường ngắn nhất?',
    ...opts4('4 khoảng', ['8 khoảng', '3 khoảng', '5 khoảng']),
    why: 'Kim giờ ở số 8, kim phút ở số 12. Đi theo đường ngắn nhất từ 8 đến 12 có 4 khoảng.',
  }),
]);

e2(1114, 'Cấp Quận/Huyện · Đề tổng hợp cuối', 20, [
  qReadClock('Tổng hợp', 'Câu 1', 1, 6, 20),
  qKem('Tổng hợp', 'Câu 2', 1, 7, 50),
  qCalWeekday('Tổng hợp', 'Câu 3', 1, 2026, 9, 5),
  qSudoku3('Tổng hợp', 'Câu 4', 1),
  qElapsed('Tổng hợp', 'Câu 5', 1, [4, 25], [6, 10], 'Buổi học vẽ ở nhà văn hoá.'),
  Q({
    sec: 'Tổng hợp', name: 'Câu 6', pts: 1,
    text: 'Mỗi ngày Nam ngủ 9 giờ. Hỏi trong 2 ngày Nam ngủ bao nhiêu giờ?',
    ...opts4('18 giờ', ['9 giờ', '16 giờ', '20 giờ']),
    why: '9 × 2 = 18 giờ.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 7', pts: 1,
    text: 'Lan đi học lúc 6 giờ 45 phút và đến trường lúc 7 giờ 5 phút. Lan đi hết bao nhiêu phút?',
    ...opts4('20 phút', ['15 phút', '25 phút', '40 phút']),
    why: 'Từ 6 giờ 45 phút đến 7 giờ là 15 phút, thêm 5 phút nữa là 20 phút.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 8', pts: 1,
    text: 'Ngày 20 tháng 11 là thứ Năm. Hỏi thứ Năm của tuần trước là ngày mấy?',
    ...opts4('Ngày 13', ['Ngày 12', 'Ngày 14', 'Ngày 27']),
    why: 'Lùi một tuần: 20 − 7 = 13.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 9', pts: 1,
    text: 'Một tuần lễ Nam học 5 buổi sáng, mỗi buổi 4 tiết, mỗi tiết 35 phút. Nam học bao nhiêu tiết trong tuần?',
    ...opts4('20 tiết', ['9 tiết', '25 tiết', '35 tiết']),
    why: '5 × 4 = 20 tiết.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 10', pts: 1,
    text: 'Hôm nay là ngày 28 tháng 2 năm 2025 (tháng 2 năm đó có 28 ngày). Ngày mai là ngày nào?',
    ...opts4('Ngày 1 tháng 3', ['Ngày 29 tháng 2', 'Ngày 30 tháng 2', 'Ngày 2 tháng 3']),
    why: 'Tháng 2 năm 2025 chỉ có 28 ngày nên sau ngày 28/2 là ngày 1/3.',
  }),
]);

/* ══════════════════════════════════════════════════════════════════════════
   LỚP 3 — 13 đề × 10 câu
   ══════════════════════════════════════════════════════════════════════════ */
const L3 = [];
const e3 = (id, title, time, questions) => L3.push({ id, title, time, questions });

e3(1201, 'Đồng hồ 1 · Đọc giờ chính xác đến phút', 15, [
  qReadClock('Xem đồng hồ', 'Câu 1', 1, 9, 25),
  qReadClock('Xem đồng hồ', 'Câu 2', 1, 4, 55),
  qReadClock('Xem đồng hồ', 'Câu 3', 1, 7, 5),
  qReadClock('Xem đồng hồ', 'Câu 4', 1, 1, 40),
  qReadClock('Xem đồng hồ', 'Câu 5', 1, 10, 35),
  qReadClock('Xem đồng hồ', 'Câu 6', 1, 12, 50),
  qKem('Xem đồng hồ', 'Câu 7', 1, 3, 45),
  qKem('Xem đồng hồ', 'Câu 8', 1, 6, 55),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 9', pts: 1,
    text: '1 giờ = … phút ; 1 phút = … giây. Cặp số thích hợp là:',
    ...opts4('60 và 60', ['60 và 100', '100 và 60', '24 và 60']),
    why: '1 giờ = 60 phút và 1 phút = 60 giây.',
  }),
  Q({
    sec: 'Xem đồng hồ', name: 'Câu 10', pts: 1,
    text: 'Trong 1 giờ, kim giờ đi được mấy khoảng (khoảng cách giữa hai số liền nhau trên mặt đồng hồ)?',
    ...opts4('1 khoảng', ['5 khoảng', '12 khoảng', '60 khoảng']),
    why: 'Sau đúng 1 giờ, kim giờ nhích từ số này sang số liền sau, tức 1 khoảng.',
  }),
]);

e3(1202, 'Đồng hồ 2 · Đồng hồ 24 giờ và đồng hồ điện tử', 15, [
  qDigital('Đồng hồ 24 giờ', 'Câu 1', 1, 15, 40, 'Buổi chiều mẹ đón em.'),
  qDigital('Đồng hồ 24 giờ', 'Câu 2', 1, 20, 15, 'Cả nhà xem thời sự.'),
  qDigital('Đồng hồ 24 giờ', 'Câu 3', 1, 13, 30, 'Tiết học buổi chiều bắt đầu.'),
  qDigital('Đồng hồ 24 giờ', 'Câu 4', 1, 18, 0, 'Trời bắt đầu tối.'),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 5', pts: 1, img: digImg(22, 45),
    text: 'Đồng hồ điện tử chỉ như hình. Cùng lúc đó, đồng hồ kim chỉ mấy giờ?',
    ...opts4('10 giờ 45 phút', ['22 giờ 45 phút', '11 giờ 45 phút', '9 giờ 45 phút']),
    why: '22 − 12 = 10 nên đồng hồ kim chỉ 10 giờ 45 phút (đêm).',
  }),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 6', pts: 1,
    text: '5 giờ chiều còn được viết là:',
    ...opts4('17 giờ', ['15 giờ', '5 giờ', '19 giờ']),
    why: 'Buổi chiều cộng thêm 12: 5 + 12 = 17 giờ.',
  }),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 7', pts: 1,
    text: 'Chuyến tàu khởi hành lúc 14 giờ 20 phút. Đó là mấy giờ chiều?',
    ...opts4('2 giờ 20 phút chiều', ['4 giờ 20 phút chiều', '12 giờ 20 phút chiều', '2 giờ 20 phút sáng']),
    why: '14 − 12 = 2 nên đó là 2 giờ 20 phút chiều.',
  }),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 8', pts: 1,
    text: 'Sắp xếp theo thứ tự thời gian sớm → muộn: 8 giờ tối ; 14 giờ ; 6 giờ sáng ; 11 giờ trưa.',
    ...opts4('6 giờ sáng ; 11 giờ trưa ; 14 giờ ; 8 giờ tối', ['6 giờ sáng ; 8 giờ tối ; 11 giờ trưa ; 14 giờ', '8 giờ tối ; 14 giờ ; 11 giờ trưa ; 6 giờ sáng', '11 giờ trưa ; 14 giờ ; 6 giờ sáng ; 8 giờ tối']),
    why: 'Đổi hết sang giờ 24: 6 giờ ; 11 giờ ; 14 giờ ; 20 giờ.',
  }),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 9', pts: 1,
    text: 'Cửa hàng mở cửa lúc 7 giờ sáng và đóng cửa lúc 21 giờ. Mỗi ngày cửa hàng mở cửa bao nhiêu giờ?',
    ...opts4('14 giờ', ['12 giờ', '13 giờ', '16 giờ']),
    why: '21 − 7 = 14 giờ.',
  }),
  Q({
    sec: 'Đồng hồ 24 giờ', name: 'Câu 10', pts: 1,
    text: 'Nửa đêm 12 giờ trên đồng hồ 24 giờ được viết là:',
    ...opts4('0 giờ', ['12 giờ', '24 giờ 00', '00 giờ 60']),
    why: 'Ngày mới bắt đầu lúc 0 giờ, đồng hồ điện tử hiện 00:00.',
  }),
]);

e3(1203, 'Tính giờ 1 · Cộng và trừ thời gian', 18, [
  qShift('Tính giờ', 'Câu 1', 1, 8, 40, 35, 'Tiết Tiếng Việt bắt đầu.'),
  qShift('Tính giờ', 'Câu 2', 1, 2, 15, 50, 'Buổi tập bóng rổ bắt đầu.'),
  qShift('Tính giờ', 'Câu 3', 1, 11, 50, -25, 'Đồng hồ trong bếp đang chỉ giờ này.'),
  Q({
    sec: 'Tính giờ', name: 'Câu 4', pts: 1,
    text: 'Một trận bóng đá bắt đầu lúc 16 giờ 30 phút, đá 45 phút hiệp một rồi nghỉ 15 phút. Hiệp hai bắt đầu lúc mấy giờ?',
    ...opts4('17 giờ 30 phút', ['17 giờ 15 phút', '17 giờ 45 phút', '18 giờ']),
    why: '16 giờ 30 phút + 45 phút = 17 giờ 15 phút; nghỉ 15 phút nữa là 17 giờ 30 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 5', pts: 1,
    text: 'Mẹ nấu cơm hết 40 phút và xong lúc 11 giờ 15 phút. Mẹ bắt đầu nấu lúc mấy giờ?',
    ...opts4('10 giờ 35 phút', ['10 giờ 45 phút', '11 giờ 55 phút', '10 giờ 25 phút']),
    why: '11 giờ 15 phút − 40 phút: bớt 15 phút được 11 giờ, bớt tiếp 25 phút được 10 giờ 35 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 6', pts: 1,
    text: 'Một chuyến xe chạy 2 giờ 45 phút và đến nơi lúc 15 giờ. Xe xuất phát lúc mấy giờ?',
    ...opts4('12 giờ 15 phút', ['12 giờ 45 phút', '13 giờ 15 phút', '11 giờ 15 phút']),
    why: '15 giờ − 2 giờ = 13 giờ; 13 giờ − 45 phút = 12 giờ 15 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 7', pts: 1,
    text: '2 giờ 30 phút + 1 giờ 45 phút = ?',
    ...opts4('4 giờ 15 phút', ['3 giờ 75 phút', '3 giờ 15 phút', '4 giờ 5 phút']),
    why: '2 giờ + 1 giờ = 3 giờ; 30 phút + 45 phút = 75 phút = 1 giờ 15 phút. Tổng là 4 giờ 15 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 8', pts: 1,
    text: '3 giờ 20 phút − 1 giờ 50 phút = ?',
    ...opts4('1 giờ 30 phút', ['2 giờ 30 phút', '1 giờ 70 phút', '2 giờ 10 phút']),
    why: 'Đổi 3 giờ 20 phút = 2 giờ 80 phút; 2 giờ 80 phút − 1 giờ 50 phút = 1 giờ 30 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 9', pts: 1,
    text: 'Nam làm 3 bài tập, mỗi bài hết 12 phút. Nam bắt đầu lúc 19 giờ 40 phút thì làm xong lúc mấy giờ?',
    ...opts4('20 giờ 16 phút', ['20 giờ 6 phút', '19 giờ 76 phút', '20 giờ 26 phút']),
    why: '3 bài hết 12 × 3 = 36 phút; 19 giờ 40 phút + 36 phút = 20 giờ 16 phút.',
  }),
  Q({
    sec: 'Tính giờ', name: 'Câu 10', pts: 1,
    text: 'Một cái máy bơm chạy liên tục từ 8 giờ 15 phút đến 11 giờ 45 phút thì tắt. Máy đã chạy bao lâu?',
    ...opts4('3 giờ 30 phút', ['3 giờ', '2 giờ 30 phút', '4 giờ 30 phút']),
    why: 'Từ 8 giờ 15 phút đến 11 giờ 15 phút là 3 giờ, thêm 30 phút nữa là 3 giờ 30 phút.',
  }),
]);

e3(1204, 'Tính giờ 2 · Lịch trình và thời gian biểu', 18, [
  qElapsed('Lịch trình', 'Câu 1', 1, [8, 10], [11, 40], 'Chuyến tàu chạy từ ga A đến ga B.', ['Rời ga A', 'Đến ga B']),
  qElapsed('Lịch trình', 'Câu 2', 1, [1, 55], [4, 25], 'Bố lái xe về quê.', ['Xuất phát', 'Về đến nơi']),
  qElapsed('Lịch trình', 'Câu 3', 1, [6, 5], [7, 50], 'Nam ôn bài buổi tối.'),
  Q({
    sec: 'Lịch trình', name: 'Câu 4', pts: 1,
    text: 'Tàu xuất phát lúc 21 giờ 30 phút và chạy 8 giờ. Tàu đến nơi lúc mấy giờ ngày hôm sau?',
    ...opts4('5 giờ 30 phút', ['4 giờ 30 phút', '6 giờ 30 phút', '29 giờ 30 phút']),
    why: 'Từ 21 giờ 30 phút đến nửa đêm (24 giờ) là 2 giờ 30 phút; còn lại 8 − 2 giờ 30 phút = 5 giờ 30 phút, nên tàu đến lúc 5 giờ 30 phút sáng hôm sau.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 5', pts: 1,
    text: 'Thời gian biểu: 7 giờ dậy — 7 giờ 20 phút ăn sáng — 7 giờ 45 phút đi học. Nam ăn sáng trong bao lâu?',
    ...opts4('25 phút', ['20 phút', '45 phút', '15 phút']),
    why: 'Từ 7 giờ 20 phút đến 7 giờ 45 phút là 25 phút.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 6', pts: 1,
    text: 'Có 4 tiết học liền nhau, mỗi tiết 40 phút, không nghỉ giữa các tiết. Bắt đầu lúc 13 giờ 30 phút thì kết thúc lúc mấy giờ?',
    ...opts4('16 giờ 10 phút', ['15 giờ 50 phút', '16 giờ 30 phút', '17 giờ 10 phút']),
    why: '4 tiết hết 40 × 4 = 160 phút = 2 giờ 40 phút; 13 giờ 30 phút + 2 giờ 40 phút = 16 giờ 10 phút.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 7', pts: 1,
    text: 'Xe buýt cứ 15 phút có một chuyến, chuyến đầu lúc 6 giờ. Chuyến thứ 5 chạy lúc mấy giờ?',
    ...opts4('7 giờ', ['6 giờ 45 phút', '7 giờ 15 phút', '6 giờ 75 phút']),
    why: 'Từ chuyến 1 đến chuyến 5 có 4 khoảng: 15 × 4 = 60 phút = 1 giờ. Vậy chuyến thứ 5 chạy lúc 7 giờ.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 8', pts: 1,
    text: 'Nam ngủ lúc 21 giờ 45 phút và dậy lúc 6 giờ 15 phút sáng hôm sau. Nam ngủ bao lâu?',
    ...opts4('8 giờ 30 phút', ['9 giờ 30 phút', '8 giờ', '7 giờ 30 phút']),
    why: 'Từ 21 giờ 45 phút đến 24 giờ là 2 giờ 15 phút; cộng thêm 6 giờ 15 phút là 8 giờ 30 phút.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 9', pts: 1,
    text: 'Một bộ phim dài 95 phút, chiếu xong lúc 20 giờ 5 phút. Phim bắt đầu chiếu lúc mấy giờ?',
    ...opts4('18 giờ 30 phút', ['18 giờ 10 phút', '19 giờ 30 phút', '18 giờ 45 phút']),
    why: '95 phút = 1 giờ 35 phút. 20 giờ 5 phút − 1 giờ = 19 giờ 5 phút; 19 giờ 5 phút − 35 phút = 18 giờ 30 phút.',
  }),
  Q({
    sec: 'Lịch trình', name: 'Câu 10', pts: 1,
    text: 'Hai chuyến xe cùng rời bến lúc 6 giờ. Xe A cứ 20 phút chạy một chuyến, xe B cứ 30 phút một chuyến. Hỏi lần tiếp theo hai xe cùng rời bến là lúc mấy giờ?',
    ...opts4('7 giờ', ['6 giờ 30 phút', '6 giờ 50 phút', '7 giờ 30 phút']),
    why: 'Xe A rời bến lúc 6 giờ 20, 6 giờ 40, 7 giờ…; xe B lúc 6 giờ 30, 7 giờ… Cả hai gặp nhau ở 7 giờ (60 phút chia hết cho cả 20 và 30).',
  }),
]);

e3(1205, 'Ngày tháng 1 · Tháng, năm, quý', 18, [
  Q({
    sec: 'Tháng – năm', name: 'Câu 1', pts: 1,
    text: 'Một năm có bao nhiêu tháng và bao nhiêu quý?',
    ...opts4('12 tháng và 4 quý', ['12 tháng và 3 quý', '10 tháng và 4 quý', '12 tháng và 12 quý']),
    why: 'Một năm có 12 tháng, chia thành 4 quý, mỗi quý 3 tháng.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 2', pts: 1,
    text: 'Tháng 8 thuộc quý mấy trong năm?',
    ...opts4('Quý III', ['Quý II', 'Quý IV', 'Quý I']),
    why: 'Quý I: tháng 1–3; quý II: tháng 4–6; quý III: tháng 7–9 nên tháng 8 thuộc quý III.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 3', pts: 1,
    text: 'Những tháng nào trong năm chỉ có 30 ngày?',
    ...opts4('Tháng 4, 6, 9, 11', ['Tháng 1, 3, 5, 7', 'Tháng 2, 4, 6, 8', 'Tháng 3, 6, 9, 12']),
    why: 'Các tháng 4, 6, 9, 11 có 30 ngày; tháng 2 có 28 hoặc 29 ngày; các tháng còn lại có 31 ngày.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 4', pts: 1,
    text: 'Năm nhuận có 366 ngày, tháng 2 năm nhuận có bao nhiêu ngày?',
    ...opts4('29 ngày', ['28 ngày', '30 ngày', '31 ngày']),
    why: 'Năm nhuận nhiều hơn năm thường 1 ngày, ngày đó nằm ở tháng 2 nên tháng 2 có 29 ngày.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 5', pts: 1,
    text: 'Quý I của một năm thường (tháng 2 có 28 ngày) gồm bao nhiêu ngày?',
    ...opts4('90 ngày', ['89 ngày', '91 ngày', '92 ngày']),
    why: 'Tháng 1 có 31 ngày, tháng 2 có 28 ngày, tháng 3 có 31 ngày: 31 + 28 + 31 = 90 ngày.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 6', pts: 1,
    text: 'Hai tháng liền nhau nào cùng có 31 ngày?',
    ...opts4('Tháng 7 và tháng 8', ['Tháng 5 và tháng 6', 'Tháng 9 và tháng 10', 'Tháng 11 và tháng 12']),
    why: 'Tháng 7 và tháng 8 đều có 31 ngày (dùng đốt ngón tay để kiểm tra).',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 7', pts: 1,
    text: 'Từ ngày 1 tháng 1 đến hết ngày 31 tháng 3 của một năm thường có bao nhiêu ngày?',
    ...opts4('90 ngày', ['91 ngày', '89 ngày', '92 ngày']),
    why: '31 + 28 + 31 = 90 ngày.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 8', pts: 1,
    text: 'Bố nói: "Ông nội sinh năm 1960, năm nay ông 65 tuổi". Vậy năm nay là năm nào?',
    ...opts4('2025', ['2020', '2015', '2030']),
    why: '1960 + 65 = 2025.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 9', pts: 1,
    text: 'Một thế kỉ có bao nhiêu năm?',
    ...opts4('100 năm', ['10 năm', '50 năm', '1000 năm']),
    why: 'Một thế kỉ bằng 100 năm.',
  }),
  Q({
    sec: 'Tháng – năm', name: 'Câu 10', pts: 1,
    text: 'Từ ngày 25 tháng 3 đến ngày 5 tháng 4 cùng năm có bao nhiêu ngày (tính cả hai ngày đó)?',
    ...opts4('12 ngày', ['11 ngày', '10 ngày', '13 ngày']),
    why: 'Tháng 3 có 31 ngày: từ 25/3 đến 31/3 có 7 ngày; từ 1/4 đến 5/4 có 5 ngày. Tổng 7 + 5 = 12 ngày.',
  }),
]);

e3(1206, 'Ngày tháng 2 · Xem lịch tháng', 18, [
  qCalWeekday('Xem lịch', 'Câu 1', 1, 2025, 10, 20),
  qCalWeekday('Xem lịch', 'Câu 2', 1, 2026, 4, 30),
  Q({
    sec: 'Xem lịch', name: 'Câu 3', pts: 1, img: calImg(2025, 8),
    text: 'Nhìn tờ lịch tháng 8 dưới đây. Ngày thứ Sáu đầu tiên của tháng là ngày nào?',
    ...opts4('Ngày 1', ['Ngày 2', 'Ngày 7', 'Ngày 8']),
    why: 'Tờ lịch cho thấy ngày 1 tháng 8 nằm ở cột thứ Sáu, đó là thứ Sáu đầu tiên của tháng.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 4', pts: 1, img: calImg(2025, 8),
    text: 'Vẫn tờ lịch tháng 8 ở trên: tháng đó có bao nhiêu ngày Chủ nhật?',
    ...opts4('5 ngày', ['4 ngày', '3 ngày', '6 ngày']),
    why: 'Cột Chủ nhật gồm các ngày 3, 10, 17, 24, 31 — có 5 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 5', pts: 1, img: calImg(2026, 2, { hide: [18] }),
    text: 'Tờ lịch tháng 2 dưới đây bị mờ mất một ô (ô có dấu ?). Ô đó là ngày mấy?',
    ...opts4('Ngày 18', ['Ngày 17', 'Ngày 19', 'Ngày 25']),
    why: 'Ô mờ nằm giữa ngày 17 và ngày 19 trên cùng một hàng nên đó là ngày 18.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 6', pts: 1, img: calImg(2026, 2, { hide: [18] }),
    text: 'Vẫn tờ lịch tháng 2 ở trên: ngày ở ô mờ là thứ mấy?',
    ...opts4('Thứ Tư', ['Thứ Ba', 'Thứ Năm', 'Thứ Hai']),
    why: 'Ô mờ nằm ở cột thứ Tư của tờ lịch nên ngày đó là thứ Tư.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 7', pts: 1, img: calImg(2026, 6, { ring: [1] }),
    text: 'Ngày Quốc tế Thiếu nhi 1 tháng 6 (ô khoanh tròn) rơi vào thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Bảy']),
    why: 'Ô ngày 1 nằm ở cột đầu tiên — cột thứ Hai.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 8', pts: 1,
    text: 'Trong một tháng có 30 ngày, ngày 1 là thứ Bảy. Hỏi tháng đó có mấy ngày thứ Bảy?',
    ...opts4('5 ngày', ['4 ngày', '3 ngày', '6 ngày']),
    why: 'Các thứ Bảy là 1, 8, 15, 22, 29 — có 5 ngày.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 9', pts: 1,
    text: 'Ngày 30 tháng 4 là thứ Tư thì ngày 2 tháng 5 cùng năm là thứ mấy?',
    ...opts4('Thứ Sáu', ['Thứ Năm', 'Thứ Bảy', 'Chủ nhật']),
    why: 'Ngày 1/5 là thứ Năm, ngày 2/5 là thứ Sáu.',
  }),
  Q({
    sec: 'Xem lịch', name: 'Câu 10', pts: 1,
    text: 'Một tháng có 5 ngày thứ Hai và 5 ngày thứ Ba nhưng chỉ có 4 ngày Chủ nhật. Tháng đó có bao nhiêu ngày?',
    ...opts4('30 ngày hoặc 31 ngày', ['28 ngày', 'Đúng 30 ngày', 'Đúng 31 ngày']),
    why: 'Muốn có 5 thứ Hai và 5 thứ Ba thì tháng phải nhiều hơn 28 ngày ít nhất 2 ngày, tức từ 30 ngày trở lên; cả tháng 30 và 31 ngày đều có thể xảy ra.',
  }),
]);

e3(1207, 'Ngày tháng 3 · Tìm thứ và ngày (nâng cao)', 20, [
  Q({
    sec: 'Tìm thứ', name: 'Câu 1', pts: 1,
    text: 'Ngày 5 tháng 6 là thứ Hai. Hỏi ngày 20 tháng 6 là thứ mấy?',
    ...opts4('Thứ Ba', ['Thứ Hai', 'Thứ Tư', 'Thứ Năm']),
    why: 'Các thứ Hai là 5, 12, 19; ngày 20 là ngày liền sau ngày 19 nên là thứ Ba.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 2', pts: 1,
    text: 'Hôm nay là thứ Tư ngày 10. Hỏi ngày 31 cùng tháng là thứ mấy?',
    ...opts4('Thứ Tư', ['Thứ Năm', 'Thứ Ba', 'Thứ Sáu']),
    why: '31 − 10 = 21 = 7 × 3, đúng 3 tuần nên ngày 31 cũng là thứ Tư.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 3', pts: 1,
    text: 'Ngày 1 tháng 5 là thứ Năm. Hỏi ngày 26 tháng 5 là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Bảy']),
    why: '26 − 1 = 25 = 7 × 3 + 4. Sau 3 tuần vẫn là thứ Năm (ngày 22), thêm 4 ngày nữa: Sáu, Bảy, Chủ nhật, Hai. Vậy ngày 26 là thứ Hai.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 4', pts: 1,
    text: 'Ngày 28 tháng 2 năm 2025 là thứ Sáu (tháng 2 năm đó có 28 ngày). Hỏi ngày 3 tháng 3 năm đó là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Bảy']),
    why: 'Ngày 1/3 là thứ Bảy, 2/3 là Chủ nhật, 3/3 là thứ Hai.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 5', pts: 1,
    text: 'Sinh nhật Lan ngày 14 tháng 7 rơi vào thứ Bảy. Hỏi sinh nhật Lan năm ngoái (năm thường, 365 ngày) rơi vào thứ mấy?',
    ...opts4('Thứ Sáu', ['Thứ Bảy', 'Chủ nhật', 'Thứ Năm']),
    why: '365 : 7 = 52 dư 1, mỗi năm thường ngày sinh nhật lùi lại 1 thứ, nên năm ngoái là thứ Sáu.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 6', pts: 1,
    text: 'Từ ngày 1 tháng 4 đến hết ngày 30 tháng 6 có bao nhiêu ngày?',
    ...opts4('91 ngày', ['90 ngày', '92 ngày', '89 ngày']),
    why: 'Tháng 4 có 30 ngày, tháng 5 có 31 ngày, tháng 6 có 30 ngày: 30 + 31 + 30 = 91 ngày.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 7', pts: 1,
    text: 'Ngày 15 tháng 8 là thứ Sáu. Ngày Chủ nhật gần nhất SAU ngày đó là ngày mấy?',
    ...opts4('Ngày 17', ['Ngày 16', 'Ngày 18', 'Ngày 22']),
    why: 'Ngày 16 là thứ Bảy, ngày 17 là Chủ nhật.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 8', pts: 1,
    text: 'Trong tháng 9 (30 ngày), các ngày thứ Ba là 2, 9, 16, 23, 30. Hỏi ngày 25 tháng 9 là thứ mấy?',
    ...opts4('Thứ Năm', ['Thứ Tư', 'Thứ Sáu', 'Thứ Bảy']),
    why: 'Ngày 23 là thứ Ba nên 24 là thứ Tư, 25 là thứ Năm.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 9', pts: 1,
    text: 'Nam đi trại 12 ngày, bắt đầu từ thứ Hai. Ngày cuối cùng của trại là thứ mấy?',
    ...opts4('Thứ Sáu', ['Thứ Năm', 'Thứ Bảy', 'Thứ Hai']),
    why: 'Ngày thứ nhất là thứ Hai, sau 11 ngày nữa là ngày cuối: 11 = 7 + 4, tức thứ Hai + 4 ngày = thứ Sáu.',
  }),
  Q({
    sec: 'Tìm thứ', name: 'Câu 10', pts: 1,
    text: 'Ngày Nhà giáo Việt Nam 20 tháng 11 năm nay là thứ Năm. Hỏi ngày Quốc phòng toàn dân 22 tháng 12 cùng năm là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Tư']),
    why: 'Từ 20/11 đến 22/12 có 10 ngày còn lại của tháng 11 (30 ngày) cộng 22 ngày, tức 32 ngày. 32 = 7 × 4 + 4, thứ Năm + 4 ngày = thứ Hai.',
  }),
]);

/* ── Sudoku lớp 3 ────────────────────────────────────────────────────────── */
function qSudoku4(sec, name, pts) {
  const { given, qPos } = auto4();
  const s = sudoku(given, 4, [qPos]);
  const correct = String(s.val[0]);
  const { opts, ans } = opts4(correct, ['1', '2', '3', '4'].filter((x) => x !== correct));
  return Q({
    sec, name, pts, img: s.img,
    text: 'Điền các số 1, 2, 3, 4 vào bảng sao cho mỗi hàng ngang, mỗi cột dọc và mỗi ô vuông 2×2 (viền đậm) đều có đủ bốn số 1, 2, 3, 4. Số ở ô ❓ là số mấy?',
    opts, ans, why: sudokuWhy(s.sol, 4, qPos),
  });
}

e3(1208, 'Sudoku 3×3 · Suy luận nhanh', 18, [
  qSudoku3('Sudoku', 'Câu 1', 1),
  qSudoku3('Sudoku', 'Câu 2', 1),
  qSudoku3('Sudoku', 'Câu 3', 1),
  qSudoku3('Sudoku', 'Câu 4', 1),
  qSudoku3('Sudoku', 'Câu 5', 1),
  qSudokuShape('Sudoku hình', 'Câu 6', 1),
  qSudokuShape('Sudoku hình', 'Câu 7', 1),
  Q({
    sec: 'Sudoku', name: 'Câu 8', pts: 1,
    text: 'Trong bảng sudoku 3×3 điền các số 1, 2, 3, tổng của cả bảng là 18. Nếu hàng thứ nhất và hàng thứ hai đã điền xong thì tổng hàng thứ ba bằng bao nhiêu?',
    ...opts4('6', ['12', '9', '18']),
    why: 'Mỗi hàng đều có đủ 1, 2, 3 nên tổng mỗi hàng luôn là 6.',
  }),
  Q({
    sec: 'Sudoku', name: 'Câu 9', pts: 1,
    text: 'Có bao nhiêu cách điền khác nhau cho một bảng sudoku 3×3 (mỗi hàng, mỗi cột đủ ba số 1, 2, 3)?',
    ...opts4('12 cách', ['6 cách', '9 cách', '3 cách']),
    why: 'Hàng đầu có 6 cách xếp; ứng với mỗi cách, hai hàng còn lại có 2 cách. Tất cả 6 × 2 = 12 cách.',
  }),
  Q({
    sec: 'Sudoku', name: 'Câu 10', pts: 1,
    text: 'Một bảng sudoku 3×3 có hàng đầu là 1 – 2 – 3 và cột đầu là 1 – 2 – 3 (từ trên xuống). Ô chính giữa bảng là số mấy?',
    ...opts4('3', ['1', '2', 'Không xác định được']),
    why: 'Cột đầu là 1 – 2 – 3 nên hàng 2 bắt đầu bằng 2; cột 2 đã có số 2 (hàng 1) nên ô giữa không thể là 2 hay 1 (số 1 đã nằm ở cột 1 hàng 1 — thử điền thì hàng 2 là 2 – 3 – 1). Vậy ô giữa là 3.',
  }),
]);

e3(1209, 'Sudoku 4×4 · Có ô vuông 2×2', 20, [
  qSudoku4('Sudoku 4×4', 'Câu 1', 1),
  qSudoku4('Sudoku 4×4', 'Câu 2', 1),
  qSudoku4('Sudoku 4×4', 'Câu 3', 1),
  qSudoku4('Sudoku 4×4', 'Câu 4', 1),
  qSudoku4('Sudoku 4×4', 'Câu 5', 1),
  qSudoku4('Sudoku 4×4', 'Câu 6', 1),
  Q({
    sec: 'Sudoku 4×4', name: 'Câu 7', pts: 1,
    text: 'Trong sudoku 4×4 (điền số 1, 2, 3, 4), tổng các số trong mỗi hàng bằng bao nhiêu?',
    ...opts4('10', ['6', '8', '16']),
    why: '1 + 2 + 3 + 4 = 10.',
  }),
  Q({
    sec: 'Sudoku 4×4', name: 'Câu 8', pts: 1,
    text: 'Bảng sudoku 4×4 điền xong có tổng tất cả các số bằng bao nhiêu?',
    ...opts4('40', ['20', '30', '16']),
    why: 'Mỗi hàng có tổng 10, bảng có 4 hàng: 10 × 4 = 40.',
  }),
  Q({
    sec: 'Sudoku 4×4', name: 'Câu 9', pts: 1,
    text: 'Trong sudoku 4×4, mỗi ô vuông 2×2 viền đậm chứa bao nhiêu ô nhỏ?',
    ...opts4('4 ô', ['2 ô', '6 ô', '8 ô']),
    why: 'Ô vuông 2×2 gồm 2 hàng × 2 cột = 4 ô nhỏ.',
  }),
  Q({
    sec: 'Sudoku 4×4', name: 'Câu 10', pts: 1,
    text: 'Trong một bảng sudoku 4×4 đã điền xong, số 3 xuất hiện bao nhiêu lần?',
    ...opts4('4 lần', ['1 lần', '2 lần', '16 lần']),
    why: 'Mỗi hàng có đúng một số 3, bảng có 4 hàng nên số 3 xuất hiện 4 lần.',
  }),
]);

e3(1210, 'Cấp Trường · Tổng hợp thời gian', 20, [
  qReadClock('Cấp Trường', 'Câu 1', 1, 2, 35),
  qKem('Cấp Trường', 'Câu 2', 1, 10, 40),
  qDigital('Cấp Trường', 'Câu 3', 1, 16, 25, 'Nam đá bóng ở sân trường.'),
  qElapsed('Cấp Trường', 'Câu 4', 1, [8, 45], [11, 15], 'Buổi lao động của lớp 3B.'),
  qCalWeekday('Cấp Trường', 'Câu 5', 1, 2025, 9, 5),
  qSudoku4('Cấp Trường', 'Câu 6', 1),
  Q({
    sec: 'Cấp Trường', name: 'Câu 7', pts: 1,
    text: 'Lan tập đàn mỗi ngày 45 phút. Hỏi trong 4 ngày Lan tập đàn bao nhiêu giờ?',
    ...opts4('3 giờ', ['2 giờ 45 phút', '3 giờ 15 phút', '4 giờ']),
    why: '45 × 4 = 180 phút = 3 giờ.',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 8', pts: 1,
    text: 'Một năm học bắt đầu ngày 5 tháng 9 và kết thúc ngày 31 tháng 5 năm sau. Năm học đó kéo dài mấy tháng (tính tròn tháng)?',
    ...opts4('9 tháng', ['8 tháng', '10 tháng', '12 tháng']),
    why: 'Từ tháng 9 đến tháng 12 có 4 tháng, từ tháng 1 đến tháng 5 có 5 tháng: 4 + 5 = 9 tháng.',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 9', pts: 1,
    text: 'Kim phút quay được nửa vòng thì đã trôi qua bao lâu?',
    ...opts4('30 phút', ['15 phút', '6 phút', '1 giờ']),
    why: 'Cả vòng là 60 phút nên nửa vòng là 30 phút.',
  }),
  Q({
    sec: 'Cấp Trường', name: 'Câu 10', pts: 1,
    text: 'Bây giờ là 10 giờ 40 phút. Cách đây 1 giờ 55 phút là mấy giờ?',
    ...opts4('8 giờ 45 phút', ['8 giờ 55 phút', '9 giờ 45 phút', '8 giờ 35 phút']),
    why: '10 giờ 40 phút − 1 giờ = 9 giờ 40 phút; 9 giờ 40 phút − 55 phút = 8 giờ 45 phút.',
  }),
]);

e3(1211, 'Cấp Quận/Huyện · Đồng hồ và lịch trình', 20, [
  qReadClock('Cấp Quận', 'Câu 1', 1, 8, 55),
  qShift('Cấp Quận', 'Câu 2', 1, 9, 35, 55, 'Đồng hồ ở phòng chờ sân bay đang chỉ giờ này.'),
  qElapsed('Cấp Quận', 'Câu 3', 1, [10, 50], [1, 20], 'Chuyến xe đường dài chạy qua buổi trưa.', ['Xuất phát', 'Đến nơi']),
  Q({
    sec: 'Cấp Quận', name: 'Câu 4', pts: 1,
    text: 'Một chuyến bay cất cánh lúc 22 giờ 40 phút và bay 3 giờ 50 phút. Máy bay hạ cánh lúc mấy giờ?',
    ...opts4('2 giờ 30 phút sáng hôm sau', ['1 giờ 30 phút sáng hôm sau', '2 giờ 30 phút chiều', '26 giờ 30 phút']),
    why: '22 giờ 40 phút + 3 giờ = 1 giờ 40 phút sáng hôm sau; cộng thêm 50 phút được 2 giờ 30 phút sáng.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 5', pts: 1,
    text: 'Đồng hồ của Nam chạy chậm 8 phút. Khi đồng hồ đó chỉ 6 giờ 55 phút thì giờ đúng là mấy giờ?',
    ...opts4('7 giờ 3 phút', ['6 giờ 47 phút', '7 giờ 8 phút', '6 giờ 55 phút']),
    why: 'Đồng hồ chậm 8 phút nên giờ đúng nhiều hơn 8 phút: 6 giờ 55 phút + 8 phút = 7 giờ 3 phút.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 6', pts: 1,
    text: 'Một cái chuông cứ 15 phút kêu một lần. Từ 8 giờ đến 10 giờ chuông kêu bao nhiêu lần (tính cả lần lúc 8 giờ)?',
    ...opts4('9 lần', ['8 lần', '10 lần', '12 lần']),
    why: 'Từ 8 giờ đến 10 giờ có 120 phút, chia thành 120 : 15 = 8 khoảng, số lần kêu là 8 + 1 = 9 lần.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 7', pts: 1,
    text: 'Ba bạn thi chạy: Nam hết 3 phút 20 giây, Bình hết 195 giây, Lan hết 3 phút 5 giây. Ai về đích sớm nhất?',
    ...opts4('Lan', ['Nam', 'Bình', 'Nam và Bình bằng nhau']),
    why: 'Đổi ra giây: Nam 200 giây, Bình 195 giây, Lan 185 giây. Lan ít giây nhất nên về sớm nhất.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 8', pts: 1,
    text: 'Xe lửa chạy từ ga A lúc 7 giờ 25 phút, dừng ở ga B 10 phút rồi chạy tiếp và đến ga C lúc 10 giờ 5 phút. Tổng thời gian từ ga A đến ga C là bao lâu?',
    ...opts4('2 giờ 40 phút', ['2 giờ 30 phút', '2 giờ 50 phút', '3 giờ']),
    why: 'Từ 7 giờ 25 phút đến 10 giờ 5 phút là 2 giờ 40 phút (thời gian dừng đã nằm trong khoảng này).',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 9', pts: 1,
    text: 'Lúc 3 giờ đúng, hai kim đồng hồ tạo thành một góc. Sau nửa giờ nữa, kim phút chỉ vào số mấy?',
    ...opts4('Số 6', ['Số 3', 'Số 12', 'Số 9']),
    why: 'Nửa giờ là 30 phút, kim phút quay từ số 12 xuống số 6.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 10', pts: 1,
    text: 'Mỗi ngày Nam học ở trường từ 7 giờ 15 phút đến 11 giờ 15 phút. Trong một tuần lễ (5 buổi) Nam học ở trường bao nhiêu giờ?',
    ...opts4('20 giờ', ['16 giờ', '24 giờ', '25 giờ']),
    why: 'Mỗi buổi 4 giờ; 4 × 5 = 20 giờ.',
  }),
]);

e3(1212, 'Cấp Quận/Huyện · Ngày tháng và suy luận', 20, [
  qCalWeekday('Cấp Quận', 'Câu 1', 1, 2026, 12, 24),
  Q({
    sec: 'Cấp Quận', name: 'Câu 2', pts: 1, img: calImg(2026, 12),
    text: 'Vẫn tờ lịch tháng 12 ở trên. Ngày cuối cùng của năm là thứ mấy?',
    ...opts4('Thứ Năm', ['Thứ Tư', 'Thứ Sáu', 'Thứ Bảy']),
    why: 'Ngày cuối cùng của tháng 12 là ngày 31, trên tờ lịch ngày này nằm ở cột thứ Năm.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 3', pts: 1,
    text: 'Ngày 1 tháng 1 của một năm thường là thứ Hai. Hỏi ngày 31 tháng 12 của năm đó là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Bảy']),
    why: 'Năm thường có 365 ngày = 52 tuần dư 1 ngày, nên ngày cuối năm trùng thứ với ngày đầu năm: thứ Hai.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 4', pts: 1,
    text: 'Trong một tháng, ngày 1 là thứ Ba và tháng đó có 31 ngày. Hỏi tháng đó có bao nhiêu ngày thứ Năm?',
    ...opts4('5 ngày', ['4 ngày', '3 ngày', '6 ngày']),
    why: 'Ngày 1 thứ Ba thì ngày 3 là thứ Năm; các thứ Năm là 3, 10, 17, 24, 31 — có 5 ngày.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 5', pts: 1,
    text: 'Bố đi công tác từ ngày 28 tháng 2 đến hết ngày 6 tháng 3 (năm thường). Bố đi tất cả bao nhiêu ngày?',
    ...opts4('7 ngày', ['6 ngày', '8 ngày', '9 ngày']),
    why: 'Ngày 28/2 là 1 ngày; từ 1/3 đến 6/3 có 6 ngày. Tổng 1 + 6 = 7 ngày.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 6', pts: 1,
    text: 'Hôm nay là ngày 25 tháng 12. Hỏi còn bao nhiêu ngày nữa là hết năm?',
    ...opts4('6 ngày', ['5 ngày', '7 ngày', '31 ngày']),
    why: 'Tháng 12 có 31 ngày; 31 − 25 = 6 ngày nữa là hết năm.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 7', pts: 1,
    text: 'Một cửa hàng nghỉ vào tất cả các ngày Chủ nhật. Tháng 3 có 31 ngày và ngày 1 là Chủ nhật. Cửa hàng mở cửa bao nhiêu ngày trong tháng đó?',
    ...opts4('26 ngày', ['27 ngày', '25 ngày', '28 ngày']),
    why: 'Các Chủ nhật là 1, 8, 15, 22, 29 — 5 ngày nghỉ; 31 − 5 = 26 ngày mở cửa.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 8', pts: 1,
    text: 'Nam sinh ngày 29 tháng 2. Hỏi mấy năm Nam mới có một lần sinh nhật đúng ngày sinh?',
    ...opts4('4 năm', ['2 năm', '3 năm', '5 năm']),
    why: 'Ngày 29 tháng 2 chỉ có trong năm nhuận, mà cứ 4 năm mới có một năm nhuận.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 9', pts: 1,
    text: 'Ngày 10 tháng 10 là thứ Sáu. Hỏi ngày 10 tháng 11 cùng năm là thứ mấy?',
    ...opts4('Thứ Hai', ['Chủ nhật', 'Thứ Ba', 'Thứ Bảy']),
    why: 'Tháng 10 có 31 ngày nên từ 10/10 đến 10/11 là 31 ngày. 31 = 7 × 4 + 3, thứ Sáu + 3 ngày = thứ Hai.',
  }),
  Q({
    sec: 'Cấp Quận', name: 'Câu 10', pts: 1,
    text: 'Trong 3 tháng liên tiếp có tất cả 92 ngày. Đó có thể là ba tháng nào?',
    ...opts4('Tháng 7, 8, 9', ['Tháng 1, 2, 3', 'Tháng 4, 5, 6', 'Tháng 2, 3, 4']),
    why: 'Tháng 7 (31) + tháng 8 (31) + tháng 9 (30) = 92 ngày.',
  }),
]);

e3(1213, 'Cấp Quận/Huyện · Đề tổng hợp cuối', 20, [
  qReadClock('Tổng hợp', 'Câu 1', 1, 11, 45),
  qDigital('Tổng hợp', 'Câu 2', 1, 19, 50, 'Cả nhà chuẩn bị ăn tối.'),
  qElapsed('Tổng hợp', 'Câu 3', 1, [3, 40], [6, 25], 'Nam giúp mẹ dọn nhà.'),
  qCalWeekday('Tổng hợp', 'Câu 4', 1, 2025, 5, 19),
  qSudoku4('Tổng hợp', 'Câu 5', 1),
  qSudoku3('Tổng hợp', 'Câu 6', 1),
  Q({
    sec: 'Tổng hợp', name: 'Câu 7', pts: 1,
    text: 'Một quyển truyện dày 120 trang. Mỗi ngày Nam đọc trong 30 phút và đọc được 15 trang. Hỏi Nam đọc hết quyển truyện trong bao nhiêu giờ?',
    ...opts4('4 giờ', ['2 giờ', '3 giờ', '8 giờ']),
    why: 'Nam cần 120 : 15 = 8 ngày, mỗi ngày 30 phút: 8 × 30 = 240 phút = 4 giờ.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 8', pts: 1,
    text: 'Từ 8 giờ sáng đến 8 giờ tối cùng ngày là bao nhiêu giờ?',
    ...opts4('12 giờ', ['10 giờ', '14 giờ', '24 giờ']),
    why: '8 giờ tối là 20 giờ; 20 − 8 = 12 giờ.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 9', pts: 1,
    text: 'Mỗi vòng đu quay mất 4 phút. Bé Na chơi 5 vòng liên tiếp, bắt đầu lúc 9 giờ 50 phút. Bé chơi xong lúc mấy giờ?',
    ...opts4('10 giờ 10 phút', ['10 giờ', '10 giờ 20 phút', '9 giờ 70 phút']),
    why: '5 vòng hết 4 × 5 = 20 phút; 9 giờ 50 phút + 20 phút = 10 giờ 10 phút.',
  }),
  Q({
    sec: 'Tổng hợp', name: 'Câu 10', pts: 1,
    text: 'Ngày 2 tháng 9 năm nay là thứ Ba. Hỏi ngày 2 tháng 9 sang năm (năm sau là năm thường) là thứ mấy?',
    ...opts4('Thứ Tư', ['Thứ Ba', 'Thứ Năm', 'Thứ Hai']),
    why: 'Một năm thường có 365 ngày = 52 tuần dư 1 ngày, nên cùng ngày sang năm lùi thêm 1 thứ: thứ Tư.',
  }),
]);

/* ══════════════════════════════════ XUẤT FILE ═══════════════════════════════ */
const HEAD2 = `// VioEdu — CHUYÊN ĐỀ "Đồng hồ · Tính giờ · Ngày tháng · Sudoku" · LỚP 2
// SINH TỰ ĐỘNG bởi tools/gen-vioedu-time.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-vioedu-time.mjs
//
// Mức độ: cấp Trường + cấp Quận/Huyện của Đấu trường Toán học VioEdu.
// Dạng bài bám theo cấu trúc vòng thi VioEdu (vio.edu.vn) và các bộ đề ôn công khai:
//   https://hoatieu.vn/de-thi-vioedu-lop-2-245854
//   https://www.toaniq.com/de-on-thi-vioedu-lop-2-cap-truong-nam-2025-2026/
//   https://www.vietjack.com/toan-3-kn/trac-nghiem-bai-67-thuc-hanh-xem-dong-hoog-xem-lich.jsp
// Toàn bộ hình (đồng hồ kim, đồng hồ điện tử, tờ lịch, bảng sudoku) đều vẽ bằng
// code trong tools/vio-art.mjs — đáp án lấy thẳng từ dữ liệu vẽ ra hình nên
// không bao giờ lệch giữa hình và lời giải.
`;
const HEAD3 = HEAD2.replace('LỚP 2', 'LỚP 3').replace('de-thi-vioedu-lop-2-245854', 'de-on-thi-vioedu-lop-3-224407');

fs.mkdirSync(ASSETS, { recursive: true });
const n2 = writeBank('web/data-vioedu2-tgian.js', HEAD2, 'VIO2_TGIAN', L2, 'vio2-toan');
const n3 = writeBank('web/data-vioedu3-tgian.js', HEAD3, 'VIO3_TGIAN', L3, 'vio3-toan');
console.log(`Tổng: ${L2.length + L3.length} đề · ${n2 + n3} câu · ${assetCount} hình SVG`);
