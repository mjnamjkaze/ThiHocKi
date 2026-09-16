/* ============================================================================
   hinhb-art.mjs — bộ vẽ SVG + tiện ích dùng chung cho bộ đề "Toán qua hình — Bài học"
   (tools/gen-hinh-baihoc.mjs và các module hinhb-q{2,3,4,5}.mjs).

   Nguyên tắc vẽ: nền trắng, nét #2b2b2b, không chi tiết trang trí gây nhiễu; mỗi hình chứa
   đủ thông tin để giải bài; đáp án luôn được TÍNH từ chính dữ liệu vẽ ra hình.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const WEB = path.join(__dirname, '..', 'web');

// ---- RNG có hạt giống để tái lập ----
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rnd = mulberry32(20260916);
export const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
export const pick = arr => arr[Math.floor(rnd() * arr.length)];
export const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const sum = a => a.reduce((t, v) => t + v, 0);
export const uniq = a => [...new Set(a)];
export const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));

// ---- SVG primitives ----
export const INK = '#2b2b2b';
const FONT = "system-ui,'Segoe UI','Segoe UI Emoji','Noto Color Emoji',Arial,sans-serif";
export const PAL = ['#5b8def', '#39a86b', '#e8a33d', '#e05b7e', '#8e6cd1', '#2bb3c0'];
export const r1 = v => Math.round(v * 10) / 10;
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r1(w)} ${r1(h)}" width="${r1(w)}" height="${r1(h)}" font-family="${FONT}">\n<rect width="${r1(w)}" height="${r1(h)}" fill="#fff"/>\n${body}\n</svg>\n`;
}
export const R = (x, y, w, h, fill = '#fff', stroke = INK, sw = 2, extra = '') => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
export const L = (x1, y1, x2, y2, stroke = INK, sw = 2, extra = '') => `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" ${extra}/>`;
export const C = (cx, cy, r, fill = '#fff', stroke = INK, sw = 2) => `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
export const EL = (cx, cy, rx, ry, fill = '#fff', stroke = INK, sw = 2) => `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
export const P = (pts, fill = '#fff', stroke = INK, sw = 2) => `<polygon points="${pts.map(p => r1(p[0]) + ',' + r1(p[1])).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
export const PL = (pts, stroke = INK, sw = 2.5) => `<polyline points="${pts.map(p => r1(p[0]) + ',' + r1(p[1])).join(' ')}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"/>`;
export const T = (x, y, s, size = 15, anchor = 'middle', fill = INK, weight = 700) => `<text x="${r1(x)}" y="${r1(y)}" font-size="${size}" text-anchor="${anchor}" fill="${fill}" font-weight="${weight}">${esc(s)}</text>`;
export const EM = (x, y, e, size = 28) => `<text x="${r1(x)}" y="${r1(y)}" font-size="${size}" text-anchor="middle">${e}</text>`;
export const PATH = (d, fill = 'none', stroke = INK, sw = 2) => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
export const deg = a => a * Math.PI / 180;
export const fmtNum = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');   // 40000 -> "40 000"
export const fmtDec = x => String(Math.round(x * 100) / 100).replace('.', ',');
export const money = n => fmtNum(n) + ' đồng';

// ---- kho hình & phương án ----
export const STATE = { assetCount: 0, preview: [] };
export function saveImg(g, key, content) {
  const dir = path.join(WEB, 'assets', `hinhb${g}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, key + '.svg'), content, 'utf8');
  STATE.assetCount++;
  const p = `assets/hinhb${g}/${key}.svg`;
  STATE.preview.push(p);
  return p;
}

/* Vị trí đáp án đúng lấy từ hàng đợi xáo trộn → A/B/C/D rải đều, bé không đoán theo thói quen. */
let posQueue = [];
export function resetPos() { posQueue = []; }
function nextPos() {
  if (!posQueue.length) posQueue = shuffle(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
  return posQueue.shift();
}
/* mk(đáp án đúng, [các nhiễu ưu tiên…], fmt) → {opts, ans}; nhiễu số thiếu thì tự bù ±k */
export function mk(correct, distractors, fmt = String) {
  const c = fmt(correct);
  const seen = new Set([c]);
  const ds = [];
  for (const d of distractors) {
    if (d === null || d === undefined || (typeof d === 'number' && (!Number.isFinite(d) || d < 0))) continue;
    const s = fmt(d);
    if (!seen.has(s)) { seen.add(s); ds.push(s); }
    if (ds.length === 3) break;
  }
  if (typeof correct === 'number') {
    for (let k = 1; ds.length < 3 && k < 60; k++) {
      for (const d of [correct + k, correct - k]) {
        if (ds.length === 3 || d < 0) continue;
        const s = fmt(d);
        if (!seen.has(s)) { seen.add(s); ds.push(s); }
      }
    }
  }
  if (ds.length < 3) throw new Error('Thiếu phương án nhiễu cho: ' + c + ' | ' + distractors.map(fmt).join(', '));
  const pos = nextPos();
  const opts = ds.slice();
  opts.splice('ABCD'.indexOf(pos), 0, c);
  return { opts, ans: pos };
}
/* 4 phương án là HÌNH: correctSvg + 3 wrongSvgs (chuỗi svg) → {optImgs, ans} */
export function mkImg(g, key, correctSvg, wrongSvgs) {
  const pos = nextPos();
  const idx = 'ABCD'.indexOf(pos);
  const list = wrongSvgs.slice(0, 3);
  if (list.length < 3) throw new Error('mkImg cần 3 hình sai: ' + key);
  list.splice(idx, 0, correctSvg);
  const paths = list.map((s, i) => saveImg(g, key + 'abcd'[i], s));
  return { optImgs: paths, ans: pos };
}

// ================= BỘ VẼ DÙNG CHUNG =================

/* Khối hộp chữ nhật chiếu xiên: a (ngang) × b (sâu) × c (cao), u = px/đơn vị.
   grid=true kẻ ô từng khối lập phương nhỏ để đếm. labels = {a,b,c}. */
export function boxBody(x, y, a, b, c, u, opt = {}) {
  const dx = b * u * 0.5, dy = b * u * 0.5;
  const fillF = opt.fill || '#dbe7ff', fillT = opt.fillTop || '#eef4ff', fillR = opt.fillSide || '#b9cdf5';
  const X = x, Y = y + dy;
  let s = '';
  s += P([[X, Y], [X + a * u, Y], [X + a * u, Y + c * u], [X, Y + c * u]], fillF);
  s += P([[X, Y], [X + dx, Y - dy], [X + a * u + dx, Y - dy], [X + a * u, Y]], fillT);
  s += P([[X + a * u, Y], [X + a * u + dx, Y - dy], [X + a * u + dx, Y + c * u - dy], [X + a * u, Y + c * u]], fillR);
  if (opt.grid) {
    const g = '#5a6f9a';
    for (let i = 1; i < a; i++) { s += L(X + i * u, Y, X + i * u, Y + c * u, g, 1.2); s += L(X + i * u, Y, X + i * u + dx, Y - dy, g, 1.2); }
    for (let j = 1; j < c; j++) { s += L(X, Y + j * u, X + a * u, Y + j * u, g, 1.2); s += L(X + a * u, Y + j * u, X + a * u + dx, Y + j * u - dy, g, 1.2); }
    for (let k = 1; k < b; k++) { const o = k * u * 0.5; s += L(X + o, Y - o, X + a * u + o, Y - o, g, 1.2); s += L(X + a * u + o, Y - o, X + a * u + o, Y + c * u - o, g, 1.2); }
  }
  if (opt.labels) {
    const lb = opt.labels;
    if (lb.a) s += T(X + a * u / 2, Y + c * u + 18, lb.a, 14);
    if (lb.c) s += T(X - 8, Y + c * u / 2 + 5, lb.c, 14, 'end');
    if (lb.b) s += T(X + a * u + dx / 2 + 8, Y + c * u - dy / 2 + 16, lb.b, 14, 'start');
  }
  return { body: s, w: a * u + dx, h: c * u + dy };
}
export function cylinderBody(cx, cy, rx, h, fill = '#ffe4b3') {
  const ry = rx * 0.38;
  let s = R(cx - rx, cy - h / 2, 2 * rx, h, fill, 'none', 0);
  s += L(cx - rx, cy - h / 2, cx - rx, cy + h / 2) + L(cx + rx, cy - h / 2, cx + rx, cy + h / 2);
  s += PATH(`M ${r1(cx - rx)} ${r1(cy + h / 2)} A ${r1(rx)} ${r1(ry)} 0 0 0 ${r1(cx + rx)} ${r1(cy + h / 2)}`, fill, INK, 2);
  s += EL(cx, cy - h / 2, rx, ry, '#fff3d6');
  return s;
}
export function sphereBody(cx, cy, r, fill = '#c7e9f7') {
  return C(cx, cy, r, fill)
    + PATH(`M ${r1(cx - r * 0.55)} ${r1(cy - r * 0.35)} A ${r1(r * 0.7)} ${r1(r * 0.7)} 0 0 1 ${r1(cx - r * 0.2)} ${r1(cy - r * 0.62)}`, 'none', '#fff', 3)
    + EL(cx, cy, r, r * 0.35, 'none', '#7aa8bf', 1.2);
}
/* khối: 'tru' 'cau' 'hop' 'lapphuong' vẽ vào ô tâm (cx,cy) cỡ s */
export function solidBody(kind, cx, cy, s) {
  if (kind === 'tru') return cylinderBody(cx, cy, s * 0.26, s * 0.62);
  if (kind === 'cau') return sphereBody(cx, cy, s * 0.34);
  if (kind === 'lapphuong') { const u = s * 0.4; return boxBody(cx - u * 0.75, cy - u * 0.45 - u * 0.5, 1, 1, 1, u, { fill: '#d7f5e3', fillTop: '#ecfbf1', fillSide: '#a9dcc0' }).body; }
  const u = s * 0.22; return boxBody(cx - u * 1.7, cy - u * 0.7 - u * 0.6, 3, 1.2, 1.6, u, { fill: '#fde1e8', fillTop: '#fff0f4', fillSide: '#f5b8c9' }).body;
}
export const SOLID_NAME = { tru: 'khối trụ', cau: 'khối cầu', hop: 'khối hộp chữ nhật', lapphuong: 'khối lập phương' };

/* hình phẳng vẽ vào ô tâm (cx,cy), cỡ s */
export function flatBody(kind, cx, cy, s, fill = '#e8f0ff') {
  const h = s / 2;
  const M = {
    tri: [[cx, cy - h], [cx - h, cy + h * 0.8], [cx + h, cy + h * 0.8]],
    triR: [[cx - h, cy - h], [cx - h, cy + h], [cx + h, cy + h]],
    triO: [[cx - h, cy + h * 0.6], [cx + h, cy + h * 0.6], [cx + h * 0.9, cy - h * 0.5]],
    vuong: [[cx - h * 0.8, cy - h * 0.8], [cx + h * 0.8, cy - h * 0.8], [cx + h * 0.8, cy + h * 0.8], [cx - h * 0.8, cy + h * 0.8]],
    cn: [[cx - h, cy - h * 0.55], [cx + h, cy - h * 0.55], [cx + h, cy + h * 0.55], [cx - h, cy + h * 0.55]],
    thang: [[cx - h * 0.5, cy - h * 0.7], [cx + h * 0.5, cy - h * 0.7], [cx + h, cy + h * 0.7], [cx - h, cy + h * 0.7]],
    thangV: [[cx - h * 0.9, cy - h * 0.7], [cx + h * 0.3, cy - h * 0.7], [cx + h * 0.9, cy + h * 0.7], [cx - h * 0.9, cy + h * 0.7]],
    thoi: [[cx, cy - h], [cx + h * 0.6, cy], [cx, cy + h], [cx - h * 0.6, cy]],
    bh: [[cx - h * 0.55, cy - h * 0.6], [cx + h, cy - h * 0.6], [cx + h * 0.55, cy + h * 0.6], [cx - h, cy + h * 0.6]],
    tugiac: [[cx - h * 0.9, cy - h * 0.3], [cx + h * 0.2, cy - h], [cx + h, cy + h * 0.2], [cx - h * 0.4, cy + h * 0.9]],
  };
  if (M[kind]) return P(M[kind], fill);
  if (kind === 'ngugiac' || kind === 'lucgiac') {
    const n = kind === 'ngugiac' ? 5 : 6;
    const pts = []; for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / n; pts.push([cx + Math.cos(a) * h * 0.95, cy + Math.sin(a) * h * 0.95]); }
    return P(pts, fill);
  }
  if (kind === 'tron') return C(cx, cy, h * 0.85, fill);
  if (kind === 'oval') return EL(cx, cy, h * 0.95, h * 0.6, fill);
  throw new Error('flatBody: ' + kind);
}
export const SIDES = { tri: 3, triR: 3, triO: 3, vuong: 4, cn: 4, thang: 4, thangV: 4, thoi: 4, bh: 4, tugiac: 4, ngugiac: 5, lucgiac: 6, tron: 0, oval: 0 };
export const FLAT_NAME = { tri: 'hình tam giác', triR: 'hình tam giác', triO: 'hình tam giác', vuong: 'hình vuông', cn: 'hình chữ nhật', thang: 'hình thang', thangV: 'hình thang', thoi: 'hình thoi', bh: 'hình bình hành', tugiac: 'hình tứ giác', ngugiac: 'hình ngũ giác', lucgiac: 'hình lục giác', tron: 'hình tròn', oval: 'hình bầu dục' };

/* lưới có đánh số 1..n dưới mỗi ô */
export function numberedGrid(items, cols, cell, draw) {
  const rows = Math.ceil(items.length / cols);
  let s = '';
  items.forEach((it, i) => {
    const cx = 12 + (i % cols) * cell + cell / 2, cy = 8 + Math.floor(i / cols) * (cell + 18) + cell / 2;
    s += draw(it, cx, cy, i);
    s += T(cx, cy + cell / 2 + 14, String(i + 1), 13, 'middle', '#666');
  });
  return { body: s, w: 24 + cols * cell, h: 8 + rows * (cell + 18) + 6 };
}
/* một hình lẻ đóng khung để làm phương án */
export function optCard(drawBody, w = 120, h = 100) {
  return svg(w, h, R(2, 2, w - 4, h - 4, '#fff', '#dde3ee', 1.5) + drawBody(w / 2, h / 2, Math.min(w, h) * 0.7));
}

/* cân đĩa thăng bằng: left / right = mảng vật {kind:'w'|'bag'|'box', label} */
export function balanceSVG(left, right, opt = {}) {
  const W = 380, H = 200, cx = W / 2, beamY = 44;
  let s = '';
  s += P([[cx - 26, H - 26], [cx + 26, H - 26], [cx + 6, beamY + 4], [cx - 6, beamY + 4]], '#cfd8e6');
  s += L(cx - 130, beamY, cx + 130, beamY, INK, 5);
  s += C(cx, beamY, 6, INK);
  const pan = (px, items) => {
    let b = L(px, beamY, px - 56, beamY + 66, INK, 1.5) + L(px, beamY, px + 56, beamY + 66, INK, 1.5);
    b += P([[px - 66, beamY + 66], [px + 66, beamY + 66], [px + 56, beamY + 80], [px - 56, beamY + 80]], '#e6ecf5');
    const iw = 46, gap = 4, total = items.length * iw + (items.length - 1) * gap;
    items.forEach((it, i) => {
      const ix = px - total / 2 + i * (iw + gap), iy = beamY + 66;
      if (it.kind === 'w') {
        b += P([[ix + 6, iy - 30], [ix + iw - 6, iy - 30], [ix + iw, iy], [ix, iy]], '#8e8e9a', INK, 1.5);
        b += R(ix + 16, iy - 38, 14, 8, '#8e8e9a', INK, 1.5);
        b += T(ix + iw / 2, iy - 10, it.label, 11, 'middle', '#fff');
      } else if (it.kind === 'bag') {
        b += PATH(`M ${ix + 4} ${iy} L ${ix + 4} ${iy - 26} Q ${ix + iw / 2} ${iy - 48} ${ix + iw - 4} ${iy - 26} L ${ix + iw - 4} ${iy} Z`, '#f7d9a8', INK, 1.8);
        b += L(ix + 12, iy - 30, ix + iw - 12, iy - 30, INK, 1.5);
        b += T(ix + iw / 2, iy - 8, it.label, 13);
      } else {
        b += R(ix + 2, iy - 34, iw - 4, 34, '#d7f5e3', INK, 1.8);
        b += T(ix + iw / 2, iy - 12, it.label, 12);
      }
    });
    return b;
  };
  s += pan(cx - 130, left) + pan(cx + 130, right);
  if (opt.caption) s += T(cx, H - 8, opt.caption, 13, 'middle', '#555', 500);
  return svg(W, H, s);
}

/* thước: len đơn vị, u px/đơn vị; sub = số vạch nhỏ mỗi đơn vị; lblEvery = ghi số mỗi k đơn vị */
export function rulerBody(x, y, len, u, opt = {}) {
  const h = opt.h || 34, sub = opt.sub || 0, lblEvery = opt.lblEvery || 1, unitName = opt.unit || '';
  let s = R(x, y, len * u, h, '#fff7d6', INK, 2);
  for (let i = 0; i <= len; i++) {
    const big = i % lblEvery === 0;
    s += L(x + i * u, y, x + i * u, y + (big ? 12 : 8), INK, big ? 2 : 1.4);
    if (big) s += T(x + i * u, y + h - 6, String(i) + (i === len && unitName ? ' ' + unitName : ''), 11, 'middle', INK, 600);
    if (sub && i < len) for (let k = 1; k < sub; k++) s += L(x + i * u + k * u / sub, y, x + i * u + k * u / sub, y + (k === sub / 2 ? 8 : 5), INK, 1);
  }
  return s;
}

/* tia số: labels = mảng nhãn (chuỗi | null ẩn | '?' ô hỏi); points = [{i,label}] chấm đỏ */
export function numberLineSVG(labels, opt = {}) {
  const n = labels.length, u = opt.u || 54, x0 = 30, y = 46;
  const W = x0 * 2 + (n - 1) * u + 20, H = 92;
  let s = L(x0 - 14, y, x0 + (n - 1) * u + 16, y, INK, 2.5);
  s += P([[x0 + (n - 1) * u + 18, y], [x0 + (n - 1) * u + 8, y - 6], [x0 + (n - 1) * u + 8, y + 6]], INK);
  labels.forEach((lb, i) => {
    const x = x0 + i * u;
    s += L(x, y - 8, x, y + 8, INK, 2);
    if (lb === '?') { s += R(x - 16, y + 14, 32, 24, '#fff3c4', '#e8a33d', 2); s += T(x, y + 32, '?', 16, 'middle', '#b45309'); }
    else if (lb !== null && lb !== undefined) s += T(x, y + 30, String(lb), 13);
  });
  if (opt.minor) labels.forEach((_, i) => { if (i < n - 1) for (let k = 1; k < opt.minor; k++) s += L(x0 + i * u + k * u / opt.minor, y - 4, x0 + i * u + k * u / opt.minor, y + 4, INK, 1.2); });
  (opt.points || []).forEach(pt => {
    const x = x0 + pt.i * u;
    s += C(x, y, 6, '#e05b7e', '#e05b7e');
    if (pt.label) s += T(x, y - 16, pt.label, 13, 'middle', '#e05b7e');
  });
  return svg(W, H, s);
}

/* vạch đếm */
export function tallyBody(x, y, n, size = 22) {
  let s = ''; const groups = Math.floor(n / 5), rest = n % 5, gw = 4 * 9 + 14;
  for (let g = 0; g < groups; g++) {
    const gx = x + g * gw;
    for (let k = 0; k < 4; k++) s += L(gx + k * 9, y, gx + k * 9, y + size, INK, 2.2);
    s += L(gx - 3, y + size - 2, gx + 30, y + 2, '#e05b7e', 2.4);
  }
  for (let k = 0; k < rest; k++) s += L(x + groups * gw + k * 9, y, x + groups * gw + k * 9, y + size, INK, 2.2);
  return s;
}
export function tallySVG(rows, opt = {}) {
  const rowH = 44, W = 360, H = 16 + rows.length * rowH + (opt.title ? 22 : 0);
  let s = ''; let y0 = 12;
  if (opt.title) { s += T(W / 2, 20, opt.title, 14); y0 = 34; }
  rows.forEach((r, i) => {
    const y = y0 + i * rowH;
    s += R(12, y, W - 24, rowH - 6, i % 2 ? '#f6f8fc' : '#fff', '#c9d3e3', 1);
    if (r.emoji) s += EM(40, y + 29, r.emoji, 24); else s += T(40, y + 26, r.label, 13);
    if (r.name) s += T(r.emoji ? 66 : 70, y + 26, r.name, 13, 'start', '#555', 600);
    s += tallyBody(r.name ? 150 : 78, y + 9, r.n);
  });
  return svg(W, H, s);
}

/* bảng số liệu: head = [tiêu đề cột…], rows = [[…], …] */
export function tableSVG(head, rows, opt = {}) {
  const cw = opt.cw || 78, rh = 32, W = 16 + cw * head.length, H = 16 + rh * (rows.length + 1) + (opt.title ? 24 : 0);
  let s = ''; const y0 = opt.title ? 32 : 8;
  if (opt.title) s += T(W / 2, 20, opt.title, 14);
  head.forEach((h, j) => { s += R(8 + j * cw, y0, cw, rh, '#dbe7ff', INK, 1.5); s += T(8 + j * cw + cw / 2, y0 + 21, h, 13); });
  rows.forEach((r, i) => r.forEach((v, j) => {
    s += R(8 + j * cw, y0 + rh * (i + 1), cw, rh, j === 0 ? '#f6f8fc' : '#fff', INK, 1.5);
    s += T(8 + j * cw + cw / 2, y0 + rh * (i + 1) + 21, String(v), 13, 'middle', INK, j === 0 ? 700 : 500);
  }));
  return svg(W, H, s);
}

/* biểu đồ cột */
export function barChartSVG(cats, vals, opt = {}) {
  const bw = 40, gap = 26, ox = 46;
  const maxV = Math.max(...vals), unit = opt.unit || Math.max(4, Math.floor(150 / maxV));
  const baseY = 24 + maxV * unit, W = ox + cats.length * (bw + gap) + 10, H = baseY + (opt.title ? 44 : 28);
  let s = L(ox - 8, baseY, W - 6, baseY, INK, 2) + L(ox - 8, baseY, ox - 8, 8, INK, 2);
  cats.forEach((c, i) => {
    const x = ox + i * (bw + gap);
    s += R(x, baseY - vals[i] * unit, bw, vals[i] * unit, PAL[i % PAL.length], 'none', 0);
    s += T(x + bw / 2, baseY + 16, c, 12);
    s += T(x + bw / 2, baseY - vals[i] * unit - 6, String(vals[i]), 13);
  });
  if (opt.title) s += T(W / 2, H - 8, opt.title, 12, 'middle', '#555', 500);
  return svg(W, H, s);
}

/* lịch tháng */
export const WD = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
export const dim = (y, mo) => new Date(y, mo, 0).getDate();
export function calendarSVG(y, mo, opt = {}) {
  const cw = 42, ch = 30, W = 16 + cw * 7, first = new Date(y, mo - 1, 1).getDay(), col0 = (first + 6) % 7;
  const n = dim(y, mo), rows = Math.ceil((col0 + n) / 7), H = 78 + ch * rows;
  let s = R(8, 8, W - 16, H - 16, '#fff', INK, 2) + R(8, 8, W - 16, 30, '#e05b7e', INK, 2);
  s += T(W / 2, 30, `Tháng ${mo} – ${y}`, 15, 'middle', '#fff');
  ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].forEach((d, i) => s += T(8 + i * cw + cw / 2, 60, d, 12, 'middle', i === 6 ? '#e05b7e' : INK));
  for (let d = 1; d <= n; d++) {
    const idx = col0 + d - 1, c = idx % 7, r = Math.floor(idx / 7);
    const x = 8 + c * cw, yy = 68 + r * ch;
    if (opt.mark === d) s += C(x + cw / 2, yy + ch / 2 - 1, 13, '#fff3c4', '#e8a33d', 2);
    s += T(x + cw / 2, yy + ch / 2 + 4, String(d), 13, 'middle', c === 6 ? '#e05b7e' : INK, 600);
  }
  return svg(W, H, s);
}

/* sơ đồ đoạn thẳng: rows=[{label,len,text,segs,fill}], opt.brace={label}, opt.diff={label} */
export function barModelSVG(rows, opt = {}) {
  const u = opt.u || 26, x0 = 96, y0 = 24, rh = 36, gap = 16;
  const maxLen = Math.max(...rows.map(r => r.len));
  const W = x0 + maxLen * u + (opt.brace ? 90 : 24) + (rows.some(r => r.segs && r.text) ? 70 : 0), H = y0 + rows.length * (rh + gap);
  let s = '';
  rows.forEach((r, i) => {
    const y = y0 + i * (rh + gap);
    s += T(x0 - 10, y + rh / 2 + 5, r.label, 14, 'end');
    if (r.segs) { for (let k = 0; k < r.segs; k++) s += R(x0 + k * (r.len / r.segs) * u, y, (r.len / r.segs) * u, rh, r.fill || '#dbe7ff', INK, 2); }
    else s += R(x0, y, r.len * u, rh, r.fill || '#dbe7ff', INK, 2);
    if (r.text) s += r.segs ? T(x0 + r.len * u + 8, y + rh / 2 + 5, r.text, 14, 'start', '#1d4ed8') : T(x0 + r.len * u / 2, y + rh / 2 + 5, r.text, 14);
  });
  if (opt.diff) {
    const a = rows[0].len, b = rows[1].len, y = y0;
    s += L(x0 + b * u, y - 2, x0 + b * u, y + 2 * rh + gap + 4, '#888', 1.5, 'stroke-dasharray="4 3"');
    s += PATH(`M ${r1(x0 + b * u)} ${y - 6} L ${r1(x0 + b * u)} ${y - 12} L ${r1(x0 + a * u)} ${y - 12} L ${r1(x0 + a * u)} ${y - 6}`, 'none', '#e05b7e', 2);
    s += T(x0 + (a + b) * u / 2, y - 15, opt.diff.label, 13, 'middle', '#e05b7e');
  }
  if (opt.brace) {
    const xb = x0 + maxLen * u + 14, yt = y0, yb = y0 + rows.length * (rh + gap) - gap;
    s += PATH(`M ${xb} ${yt} L ${xb + 10} ${yt} L ${xb + 10} ${yb} L ${xb} ${yb}`, 'none', '#39a86b', 2);
    s += T(xb + 16, (yt + yb) / 2 + 5, opt.brace.label, 13, 'start', '#1d7a4b');
  }
  return svg(W, H + 12, s);
}

/* biểu đồ hình quạt: parts=[{label, pct, color}] */
export function pieSVG(parts, opt = {}) {
  const cx = 110, cy = 110, r = 92, W = 340, H = 220;
  let s = ''; let a0 = -90;
  parts.forEach((p, i) => {
    const a1 = a0 + p.pct * 3.6;
    const x0 = cx + r * Math.cos(deg(a0)), y0 = cy + r * Math.sin(deg(a0));
    const x1 = cx + r * Math.cos(deg(a1)), y1 = cy + r * Math.sin(deg(a1));
    const large = p.pct > 50 ? 1 : 0;
    s += PATH(`M ${cx} ${cy} L ${r1(x0)} ${r1(y0)} A ${r} ${r} 0 ${large} 1 ${r1(x1)} ${r1(y1)} Z`, p.color || PAL[i % PAL.length], '#fff', 2);
    const am = deg((a0 + a1) / 2), lr = p.pct < 8 ? r * 0.82 : r * 0.6;
    s += T(cx + lr * Math.cos(am), cy + lr * Math.sin(am) + 5, `${p.pct}%`, p.pct < 8 ? 11 : 14, 'middle', '#fff');
    a0 = a1;
  });
  parts.forEach((p, i) => {
    const y = 40 + i * 30;
    s += R(226, y - 12, 18, 18, p.color || PAL[i % PAL.length], 'none', 0);
    s += T(252, y + 2, p.label, 13, 'start');
  });
  if (opt.title) s += T(W / 2, H - 6, opt.title, 12, 'middle', '#555', 500);
  return svg(W, H, s);
}

/* vẽ n emoji xếp lưới trong khung, trả về {body,w,h} */
export function emojiGroup(x, y, n, emo, cols = 5, cell = 34) {
  let b = '';
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / cols), c = i % cols;
    b += EM(x + c * cell + cell / 2, y + r * cell + cell * 0.74, emo, cell - 8);
  }
  return { body: b, w: cols * cell, h: Math.ceil(n / cols) * cell };
}
