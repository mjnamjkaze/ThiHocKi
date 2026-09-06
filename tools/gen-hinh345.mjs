// SINH TỰ ĐỘNG "Toán qua hình ảnh" cho lớp 3, 4, 5.
//   node tools/gen-hinh345.mjs
// Tạo:  web/data-hinh3.js, web/data-hinh4.js, web/data-hinh5.js
//       web/assets/hinh3/*.svg, web/assets/hinh4/*.svg, web/assets/hinh5/*.svg
//
// Mỗi bộ 10 đề × 10 câu = 100 câu, khoảng 40% câu có hình. Hình vẽ bằng code và
// đáp án lấy thẳng từ dữ liệu vẽ ra hình nên hình và lời giải KHÔNG BAO GIỜ lệch nhau.
// (Đây là file sinh tự động — sửa nội dung trong script này rồi chạy lại, đừng sửa data-*.js.)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.join(__dirname, '..', 'web');

// ---- RNG có hạt giống để tái lập ----
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let rnd = mulberry32(20260907);
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));   // int trong [a,b]
const pick = arr => arr[Math.floor(rnd() * arr.length)];

// ---- SVG helpers ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Nunito,Arial,sans-serif">`
    + `<rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>` + body + `</svg>`;
}
const R = (x, y, w, h, fill, stroke = '#333', sw = 2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const L = (x1, y1, x2, y2, stroke = '#333', sw = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"/>`;
const C = (cx, cy, r, fill, stroke = '#333', sw = 2) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const POLY = (pts, fill, stroke = '#333', sw = 2) => `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const T = (x, y, s, size = 16, anchor = 'middle', fill = '#222', weight = 700) => `<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}" fill="${fill}" font-weight="${weight}">${esc(s)}</text>`;

const EMO = { '🍎': '🍎', '⭐': '⭐', '🌸': '🌸', '🐟': '🐟', '🎈': '🎈', '🍰': '🍰', '📗': '📗', '🍊': '🍊' };
function emoGrid(items, cols, x0, y0, gap, emo) {
  let b = '', i = 0;
  for (const [gx, gy, n] of items) { /* not used */ }
  return b;
}

// vẽ n emoji xếp lưới trong một khung
function drawGroup(x, y, n, emo, cols = 5, cell = 34) {
  let b = '';
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / cols), c = i % cols;
    b += `<text x="${x + c * cell + cell / 2}" y="${y + r * cell + cell * 0.72}" font-size="${cell - 8}" text-anchor="middle">${emo}</text>`;
  }
  const rows = Math.ceil(n / cols);
  return { body: b, w: cols * cell, h: rows * cell };
}

// ---- kết quả tích luỹ ----
const OUT = {}; // grade -> { exams:[], assetDir, prefix }
function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }

// tạo bộ 4 phương án phân biệt quanh đáp án đúng
function opts4(correct, makeDistractor, fmt = x => String(x)) {
  const set = new Set([fmt(correct)]);
  let guard = 0;
  const dvals = [];
  while (dvals.length < 3 && guard++ < 200) {
    const d = makeDistractor();
    const f = fmt(d);
    if (!set.has(f)) { set.add(f); dvals.push(f); }
  }
  // nếu thiếu, thêm lệch cố định
  let k = 1;
  while (dvals.length < 3) { const f = fmt(correct + k); if (!set.has(f)) { set.add(f); dvals.push(f); } k++; }
  const all = [fmt(correct), ...dvals];
  // xáo trộn
  for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
  const ans = 'ABCD'[all.indexOf(fmt(correct))];
  return { opts: all, ans };
}

let assetCount = 0;
function saveImg(grade, key, content) {
  const dir = path.join(WEB, 'assets', `hinh${grade}`);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, key + '.svg'), content, 'utf8');
  assetCount++;
  return `assets/hinh${grade}/${key}.svg`;
}

// ================= FIGURE + QUESTION GENERATORS =================
// mỗi hàm trả về {sec,text,opts,ans,why,img?}

function qCountMul(grade, key) {
  const emo = pick(['🍎', '⭐', '🌸', '🍊', '🎈', '📗']);
  const g = ri(2, grade === 3 ? 4 : 5), n = ri(3, 6);
  let body = '', x = 20;
  const cell = 30, cols = 3;
  for (let i = 0; i < g; i++) {
    const gr = drawGroup(x + 6, 24, n, emo, cols, cell);
    body += R(x, 16, gr.w + 12, gr.h + 12, '#eef4ff', '#5b8def', 2);
    x += gr.w + 24;
  }
  const w = x + 4, h = 24 + Math.ceil(n / cols) * cell + 16;
  const img = saveImg(grade, key, svg(w, h + 8, body));
  const total = g * n;
  const { opts, ans } = opts4(total, () => total + pick([-n, n, g, -g, 1, -1, g * n === total ? g + n : 2]));
  return {
    sec: 'Đếm & nhân', text: `Đếm số hình trong mỗi nhóm rồi cho biết cả ${g} nhóm có tất cả bao nhiêu hình?`, img,
    opts, ans, why: `Mỗi nhóm có ${n} hình, có ${g} nhóm nên tất cả: ${n} × ${g} = ${total} (hình).`
  };
}

function qRectPerim(grade, key) {
  const w = ri(3, 9), h = ri(2, 8);
  const scale = 22, ox = 40, oy = 30;
  let body = R(ox, oy, w * scale, h * scale, '#fff7e6', '#e8a33d', 2.5);
  body += T(ox + w * scale / 2, oy - 8, `${w} cm`, 15);
  body += T(ox - 12, oy + h * scale / 2 + 5, `${h} cm`, 15, 'end');
  const img = saveImg(grade, key, svg(ox + w * scale + 30, oy + h * scale + 24, body));
  const per = 2 * (w + h);
  const { opts, ans } = opts4(per, () => pick([w * h, (w + h), 2 * w + h, w + 2 * h, per + 2, per - 2]), x => x + ' cm');
  return {
    sec: 'Chu vi', text: 'Tính chu vi hình chữ nhật trong hình.', img,
    opts, ans, why: `Chu vi = (dài + rộng) × 2 = (${w} + ${h}) × 2 = ${per} (cm).`
  };
}

function qRectArea(grade, key) {
  const w = ri(3, 9), h = ri(2, 8);
  const scale = 22, ox = 40, oy = 30;
  let body = R(ox, oy, w * scale, h * scale, '#e8f7ee', '#39a86b', 2.5);
  body += T(ox + w * scale / 2, oy - 8, `${w} cm`, 15);
  body += T(ox - 12, oy + h * scale / 2 + 5, `${h} cm`, 15, 'end');
  const img = saveImg(grade, key, svg(ox + w * scale + 30, oy + h * scale + 24, body));
  const area = w * h;
  const { opts, ans } = opts4(area, () => pick([2 * (w + h), w + h, area + w, area - h, (w + 1) * h]), x => x + ' cm²');
  return {
    sec: 'Diện tích', text: 'Tính diện tích hình chữ nhật trong hình.', img,
    opts, ans, why: `Diện tích = dài × rộng = ${w} × ${h} = ${area} (cm²).`
  };
}

function qTriArea(grade, key) {
  const b = ri(4, 10), hh = ri(3, 8);
  const scale = 20, ox = 40, oy = 20;
  const x0 = ox, y0 = oy + hh * scale;
  const apexX = ox + Math.floor(b * scale * 0.4);
  let body = POLY([[x0, y0], [x0 + b * scale, y0], [apexX, oy]], '#fde8ee', '#e05b7e', 2.5);
  body += L(apexX, oy, apexX, y0, '#e05b7e', 1.5);           // đường cao
  body += T((x0 + x0 + b * scale) / 2, y0 + 18, `${b} cm`, 15);
  body += T(apexX + 6, (oy + y0) / 2, `${hh} cm`, 14, 'start');
  const img = saveImg(grade, key, svg(ox + b * scale + 30, y0 + 28, body));
  const area = (b * hh) / 2;
  const { opts, ans } = opts4(area, () => pick([b * hh, b + hh, (b * hh) / 2 + 1, area + 2, area - 1]), x => x + ' cm²');
  return {
    sec: 'Diện tích tam giác', text: 'Tính diện tích hình tam giác (đáy và chiều cao cho trong hình).', img,
    opts, ans, why: `Diện tích tam giác = (đáy × chiều cao) : 2 = (${b} × ${hh}) : 2 = ${area} (cm²).`
  };
}

function qFraction(grade, key) {
  const d = pick([3, 4, 5, 6, 8]);
  const s = ri(1, d - 1);
  const cell = 40, ox = 20, oy = 24, h = 44;
  let body = '';
  for (let i = 0; i < d; i++) body += R(ox + i * cell, oy, cell, h, i < s ? '#7cc6ff' : '#ffffff', '#333', 2);
  const img = saveImg(grade, key, svg(ox * 2 + d * cell, oy + h + 20, body));
  const { opts, ans } = opts4(`${s}/${d}`, () => `${pick([s, s + 1 <= d ? s + 1 : s - 1, d - s])}/${pick([d, d + 1, d - 1 || d])}`, x => x);
  return {
    sec: 'Phân số', text: 'Phân số nào chỉ phần đã tô màu trong hình?', img,
    opts, ans, why: `Hình chia thành ${d} phần bằng nhau, tô ${s} phần nên phân số là ${s}/${d}.`
  };
}

function qBarChart(grade, key) {
  const cats = ['Tổ 1', 'Tổ 2', 'Tổ 3', 'Tổ 4'];
  const vals = cats.map(() => ri(3, 12));
  const ox = 44, oy = 12, bw = 34, gap = 20, unit = 12, baseY = 12 + 12 * unit;
  let body = L(ox - 6, baseY, ox + cats.length * (bw + gap), baseY, '#333', 2);
  cats.forEach((c, i) => {
    const x = ox + i * (bw + gap);
    body += R(x, baseY - vals[i] * unit, bw, vals[i] * unit, pick(['#5b8def', '#39a86b', '#e8a33d', '#e05b7e']));
    body += T(x + bw / 2, baseY + 16, c, 13);
    body += T(x + bw / 2, baseY - vals[i] * unit - 5, String(vals[i]), 13);
  });
  const img = saveImg(grade, key, svg(ox + cats.length * (bw + gap) + 8, baseY + 26, body));
  const mode = pick(['max', 'total', 'diff']);
  let correct, text, why;
  if (mode === 'max') {
    const mi = vals.indexOf(Math.max(...vals)); correct = cats[mi];
    text = 'Dựa vào biểu đồ, tổ nào có số cây trồng được nhiều nhất?';
    why = `${cats[mi]} cao nhất với ${vals[mi]} cây.`;
    const { opts, ans } = opts4(correct, () => pick(cats), x => x);
    return { sec: 'Biểu đồ', text, img, opts, ans, why };
  } else if (mode === 'total') {
    correct = vals.reduce((a, b) => a + b, 0);
    text = 'Dựa vào biểu đồ, cả bốn tổ trồng được tất cả bao nhiêu cây?';
    why = `Tổng = ${vals.join(' + ')} = ${correct} (cây).`;
  } else {
    correct = Math.max(...vals) - Math.min(...vals);
    text = 'Dựa vào biểu đồ, tổ nhiều nhất hơn tổ ít nhất bao nhiêu cây?';
    why = `Nhiều nhất ${Math.max(...vals)}, ít nhất ${Math.min(...vals)}; hiệu = ${correct} (cây).`;
  }
  const { opts, ans } = opts4(correct, () => correct + pick([-2, -1, 1, 2, 3]), x => x + ' cây');
  return { sec: 'Biểu đồ', text, img, opts, ans, why };
}

function qCountSquares(grade, key) {
  const r = ri(2, 3), c = ri(3, 4), cell = 30, ox = 20, oy = 16;
  let body = '';
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) body += R(ox + j * cell, oy + i * cell, cell, cell, '#eef4ff', '#5b8def', 2);
  const img = saveImg(grade, key, svg(ox * 2 + c * cell, oy * 2 + r * cell, body));
  const n = r * c;
  const { opts, ans } = opts4(n, () => pick([n + 1, n - 1, r + c, n + c, n + r]));
  return {
    sec: 'Đếm hình', text: 'Hình bên có bao nhiêu ô vuông nhỏ?', img,
    opts, ans, why: `Có ${r} hàng, mỗi hàng ${c} ô nên tất cả: ${r} × ${c} = ${n} (ô vuông).`
  };
}

function qClock(grade, key) {
  const hID = ri(1, 12), m = pick([0, 15, 30, 45]);
  const cx = 60, cy = 60, r = 50;
  let body = C(cx, cy, r, '#ffffff', '#333', 3);
  for (let k = 1; k <= 12; k++) {
    const a = (k / 12) * 2 * Math.PI - Math.PI / 2;
    body += T(cx + Math.cos(a) * (r - 12), cy + Math.sin(a) * (r - 12) + 5, String(k), 12);
  }
  const ma = (m / 60) * 2 * Math.PI - Math.PI / 2;
  const ha = ((hID % 12 + m / 60) / 12) * 2 * Math.PI - Math.PI / 2;
  body += L(cx, cy, cx + Math.cos(ha) * (r * 0.5), cy + Math.sin(ha) * (r * 0.5), '#333', 4);
  body += L(cx, cy, cx + Math.cos(ma) * (r * 0.78), cy + Math.sin(ma) * (r * 0.78), '#e05b7e', 3);
  body += C(cx, cy, 3, '#333', '#333', 1);
  const img = saveImg(grade, key, svg(120, 124, body));
  const mm = String(m).padStart(2, '0');
  const label = h => `${h} giờ ${m === 0 ? 'đúng' : mm + ' phút'}`;
  const correct = label(hID);
  const { opts, ans } = opts4(correct, () => label(((hID + ri(1, 11) - 1) % 12) + 1), x => x);
  return {
    sec: 'Xem đồng hồ', text: 'Đồng hồ trong hình chỉ mấy giờ?', img,
    opts, ans, why: `Kim ngắn chỉ ${hID}, kim dài chỉ ${m} phút nên là ${correct}.`
  };
}

// ---- câu CHỮ (không hình) theo khối ----
function qTextArith(grade) {
  if (grade === 3) {
    const t = pick(['muldiv', 'add', 'sub', 'word']);
    if (t === 'muldiv') { const a = ri(2, 9), b = ri(2, 9); const p = a * b; const { opts, ans } = opts4(p, () => pick([a + b, p + a, p - b, (a + 1) * b])); return { sec: 'Nhân chia', text: `${a} × ${b} = ?`, opts, ans, why: `${a} × ${b} = ${p}.` }; }
    if (t === 'add') { const a = ri(100, 800), b = ri(50, 199); const s = a + b; const { opts, ans } = opts4(s, () => s + pick([-10, 10, -1, 1, 100])); return { sec: 'Cộng', text: `${a} + ${b} = ?`, opts, ans, why: `${a} + ${b} = ${s}.` }; }
    if (t === 'sub') { const a = ri(300, 900), b = ri(50, 280); const s = a - b; const { opts, ans } = opts4(s, () => s + pick([-10, 10, -1, 1])); return { sec: 'Trừ', text: `${a} − ${b} = ?`, opts, ans, why: `${a} − ${b} = ${s}.` }; }
    const a = ri(3, 8), b = ri(2, 6); const p = a * b; const { opts, ans } = opts4(p, () => pick([a + b, p + a, p - b])); return { sec: 'Có lời văn', text: `Mỗi hộp có ${a} chiếc bút, có ${b} hộp như thế. Hỏi có tất cả bao nhiêu chiếc bút?`, opts, ans, why: `${a} × ${b} = ${p} (chiếc bút).` };
  }
  if (grade === 4) {
    const t = pick(['tonghieu', 'tbc', 'chiahet', 'doiđv']);
    if (t === 'tonghieu') { const b = ri(6, 30), hi = ri(2, 12); const big = (b*2 + hi)/2; if (!Number.isInteger(big)) return qTextArith(4); const small = big - hi; const { opts, ans } = opts4(big, () => big + pick([-hi, hi, -1, 1, 2])); return { sec: 'Tổng–hiệu', text: `Hai số có tổng bằng ${big + small} và hiệu bằng ${hi}. Số lớn là bao nhiêu?`, opts, ans, why: `Số lớn = (tổng + hiệu) : 2 = (${big + small} + ${hi}) : 2 = ${big}.` }; }
    if (t === 'tbc') { const xs = [ri(4, 20), ri(4, 20), ri(4, 20)]; const s = xs.reduce((a, b) => a + b, 0); if (s % 3) return qTextArith(4); const m = s / 3; const { opts, ans } = opts4(m, () => m + pick([-2, -1, 1, 2, 3])); return { sec: 'Trung bình cộng', text: `Trung bình cộng của ba số ${xs.join(', ')} là bao nhiêu?`, opts, ans, why: `(${xs.join(' + ')}) : 3 = ${s} : 3 = ${m}.` }; }
    if (t === 'chiahet') { const cands = [12, 15, 18, 20, 24, 27, 30, 35, 45]; const d = pick([2, 3, 5, 9]); const good = cands.filter(x => x % d === 0); const bad = cands.filter(x => x % d !== 0); const correct = pick(good); const { opts, ans } = opts4(correct, () => pick(bad)); return { sec: 'Chia hết', text: `Số nào chia hết cho ${d}?`, opts, ans, why: `${correct} chia hết cho ${d}.` }; }
    const km = ri(2, 9); const m = km * 1000; const { opts, ans } = opts4(m, () => pick([km * 100, km * 10, m + 100, m - 100])); return { sec: 'Đổi đơn vị', text: `${km} km = ? m`, opts, ans, why: `1 km = 1000 m nên ${km} km = ${m} m.` };
  }
  // grade 5
  const t = pick(['thapphan', 'phantram', 'vantoc', 'tbc']);
  if (t === 'thapphan') { const a = (ri(10, 90) / 10), b = (ri(10, 90) / 10); const s = Math.round((a + b) * 10) / 10; const { opts, ans } = opts4(s, () => Math.round((s + pick([-1, 1, 0.1, -0.1, 0.2]) ) * 10) / 10, x => String(x)); return { sec: 'Số thập phân', text: `${a} + ${b} = ?`, opts, ans, why: `${a} + ${b} = ${s}.` }; }
  if (t === 'phantram') { const whole = pick([200, 300, 400, 500, 600, 800]); const p = pick([10, 20, 25, 50]); const v = whole * p / 100; const { opts, ans } = opts4(v, () => v + pick([-whole/10, whole/10, -10, 10])); return { sec: 'Phần trăm', text: `${p}% của ${whole} là bao nhiêu?`, opts, ans, why: `${whole} × ${p} : 100 = ${v}.` }; }
  if (t === 'vantoc') { const v = pick([30, 40, 45, 50, 60]); const time = ri(2, 4); const s = v * time; const { opts, ans } = opts4(s, () => s + pick([-v, v, -10, 10]), x => x + ' km'); return { sec: 'Chuyển động', text: `Một ô tô đi với vận tốc ${v} km/giờ trong ${time} giờ. Quãng đường đi được là bao nhiêu?`, opts, ans, why: `Quãng đường = vận tốc × thời gian = ${v} × ${time} = ${s} (km).` }; }
  const xs = [ri(10, 40), ri(10, 40)]; const s = xs[0] + xs[1]; if (s % 2) return qTextArith(5); const m = s / 2; const { opts, ans } = opts4(m, () => m + pick([-2, 2, -1, 1])); return { sec: 'Trung bình cộng', text: `Trung bình cộng của ${xs[0]} và ${xs[1]} là bao nhiêu?`, opts, ans, why: `(${xs[0]} + ${xs[1]}) : 2 = ${m}.` };
}

// bể chọn hàm hình theo khối
const IMGGENS = {
  3: [qCountMul, qRectPerim, qBarChart, qCountSquares, qClock, qFraction],
  4: [qRectArea, qRectPerim, qFraction, qBarChart, qCountSquares, qCountMul],
  5: [qTriArea, qRectArea, qFraction, qBarChart, qRectPerim, qCountSquares],
};

const THEMES = {
  3: ['Đếm & phép nhân', 'Chu vi & hình học', 'Biểu đồ & số liệu', 'Đếm hình & ô vuông', 'Xem giờ & thời gian', 'Phân số ban đầu', 'Cộng trừ trong 1000', 'Bài toán có lời văn', 'Đổi đơn vị đo', 'Ôn tập tổng hợp'],
  4: ['Diện tích hình chữ nhật', 'Chu vi & diện tích', 'Phân số qua hình', 'Biểu đồ cột', 'Đếm hình', 'Tổng – hiệu', 'Trung bình cộng', 'Dấu hiệu chia hết', 'Đổi đơn vị đo', 'Ôn tập tổng hợp'],
  5: ['Diện tích tam giác', 'Diện tích hình chữ nhật', 'Phân số & phần đã tô', 'Biểu đồ cột', 'Chu vi & chọn hình', 'Số thập phân', 'Tỉ số phần trăm', 'Toán chuyển động', 'Đếm hình', 'Ôn tập tổng hợp'],
};

const IDBASE = { 3: 9401, 4: 9411, 5: 9421 };
const HERO = {
  3: { title: 'Toán qua hình lớp 3 — đọc hiểu hình vẽ: đếm, chu vi, biểu đồ, đồng hồ và phân số', },
  4: { title: 'Toán qua hình lớp 4 — diện tích, phân số, biểu đồ và đếm hình từ hình vẽ', },
  5: { title: 'Toán qua hình lớp 5 — diện tích tam giác, phân số, biểu đồ và toán có hình', },
};

function buildGrade(grade) {
  const exams = [];
  let imgCount = 0, total = 0;
  for (let e = 0; e < 10; e++) {
    const qs = [];
    // 4 câu có hình + 6 câu chữ, đan xen
    const imgSlots = new Set([0, 3, 6, 8]); // 40%
    for (let q = 0; q < 10; q++) {
      let item;
      if (imgSlots.has(q)) {
        const gen = IMGGENS[grade][(e * 4 + q) % IMGGENS[grade].length];
        const key = `e${e + 1}q${q + 1}`;
        item = gen(grade, key);
        imgCount++;
      } else {
        item = qTextArith(grade);
      }
      total++;
      qs.push({ ...item, name: `Câu ${q + 1}`, pts: 1 });
    }
    exams.push({ id: IDBASE[grade] + e, title: `Đề ${e + 1} · ${THEMES[grade][e]}`, time: 25, questions: qs });
  }
  return { exams, imgCount, total };
}

function serialize(grade, exams) {
  const NAME = `HINH${grade}`;
  let s = `// TOÁN LỚP ${grade} QUA HÌNH ẢNH — 10 đề × 10 câu = 100 câu (40 câu có hình, 40%).\n`;
  s += `// SINH TỰ ĐỘNG bởi tools/gen-hinh345.mjs — sửa nội dung trong script rồi chạy lại:\n`;
  s += `//     node tools/gen-hinh345.mjs\n`;
  s += `// Hình vẽ bằng code (assets/hinh${grade}/) và đáp án lấy thẳng từ dữ liệu vẽ hình nên không bao giờ lệch.\n\n`;
  s += `const ${NAME}_EXAMS = [\n`;
  for (const ex of exams) {
    s += `{\n  id: ${ex.id}, title: ${JSON.stringify(ex.title)}, time: ${ex.time},\n  questions: [\n`;
    for (const q of ex.questions) {
      const optCall = `o4(${q.opts.map(o => JSON.stringify(o)).join(', ')})`;
      const imgPart = q.img ? `, img: ${JSON.stringify(q.img)}` : '';
      s += `    { sec: ${JSON.stringify(q.sec)}, name: ${JSON.stringify(q.name)}, pts: 1, text: ${JSON.stringify(q.text)}${imgPart}, opts: ${optCall}, ans: ${JSON.stringify(q.ans)}, why: ${JSON.stringify(q.why)} },\n`;
    }
    s += `  ],\n},\n`;
  }
  s += `];\n\n`;
  s += `SUBJECTS.push({\n  id: 'hinh${grade}', name: 'Toán qua hình', short: 'Qua hình ${grade}', icon: '🖼️', grade: ${grade},\n`;
  s += `  exams: ${NAME}_EXAMS, ready: true,\n`;
  s += `  heroTitle: ${JSON.stringify(HERO[grade].title)},\n`;
  s += `  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; 🖼️ 40% câu có hình &nbsp;•&nbsp; ⏱ 25 phút mỗi đề',\n});\n`;
  return s;
}

let report = [];
for (const grade of [3, 4, 5]) {
  const { exams, imgCount, total } = buildGrade(grade);
  const js = serialize(grade, exams);
  fs.writeFileSync(path.join(WEB, `data-hinh${grade}.js`), js, 'utf8');
  report.push(`hinh${grade}: ${exams.length} đề, ${total} câu, ${imgCount} câu có hình (${Math.round(100 * imgCount / total)}%)`);
}
console.log('Đã sinh:');
report.forEach(r => console.log('  ' + r));
console.log(`Tổng SVG đã ghi: ${assetCount}`);
