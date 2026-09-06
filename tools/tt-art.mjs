/* ============================================================================
   tt-art.mjs — bộ vẽ hình SVG cho bộ đề "Toán tư duy 12 dạng" (lớp 2 & lớp 3).
   Dùng bởi tools/gen-tuduy-tt.mjs, đi kèm bộ vẽ chung tools/hinh-art.mjs và
   tools/nc2-art.mjs.

   Cùng ngôn ngữ hình với hinh-art.mjs: nền trắng, nét mực #2b2b2b, phần phải
   tìm tô cam (#ffedd5 / viền #f97316 / chữ #c2410c), phần đã biết tô xanh nhạt,
   không có chi tiết trang trí gây nhiễu. Mỗi hình chứa đủ dữ kiện để giải bài,
   đáp án luôn lấy thẳng từ dữ liệu vẽ ra hình nên hình và lời giải khớp nhau.
   ========================================================================== */
'use strict';

import { svg } from './hinh-art.mjs';

const INK = '#2b2b2b';
const r1 = (v) => Math.round(v * 10) / 10;
const Q = { fill: '#ffedd5', stroke: '#f97316', text: '#c2410c' };

/* ─────────────────────────── DÃY Ô (số hoặc hình) ──────────────────────────
   stripSVG(['🔺','🔵','🔺','?'], { fs })  — ô '?' tô cam.
   Dùng cho: quy luật hình · dãy số · số còn thiếu trong dãy.               */
export function stripSVG(cells, opt = {}) {
  const BW = opt.bw || 76, BH = opt.bh || 66, GAP = 14, PAD = 16, fs = opt.fs || 32;
  const W = PAD * 2 + cells.length * BW + (cells.length - 1) * GAP;
  const H = PAD * 2 + BH + (opt.note ? 26 : 0);
  let body = '';
  cells.forEach((c, i) => {
    const x = PAD + i * (BW + GAP), q = String(c) === '?';
    body += `<rect x="${r1(x)}" y="${PAD}" width="${BW}" height="${BH}" rx="12" fill="${q ? Q.fill : '#eff6ff'}" stroke="${q ? Q.stroke : INK}" stroke-width="${q ? 3.6 : 2.6}"/>`
         + `<text x="${r1(x + BW / 2)}" y="${r1(PAD + BH / 2 + fs * 0.36)}" font-size="${q ? 34 : fs}" font-weight="bold" fill="${q ? Q.text : INK}" text-anchor="middle">${c}</text>`;
  });
  if (opt.note) body += `<text x="${r1(W / 2)}" y="${r1(H - 6)}" font-size="16" fill="#475569" text-anchor="middle">${opt.note}</text>`;
  return svg(W, H, body);
}

/* ───────────────────────────────── TIA SỐ ──────────────────────────────────
   numLineSVG(0, 20, 2, { q: 14 })  — tia số có vạch chia đều; vạch tại `q` bị
   thay bằng dấu ? (tô cam). marks: [{v, t}] để ghi chú thêm mũi tên.       */
export function numLineSVG(min, max, step, opt = {}) {
  const ticks = Math.round((max - min) / step);
  const U = opt.u || 58, X0 = 46, Y = 96;
  const W = X0 * 2 + ticks * U, H = 150;
  let body = `<line x1="${X0 - 18}" y1="${Y}" x2="${r1(X0 + ticks * U + 18)}" y2="${Y}" stroke="${INK}" stroke-width="3.4"/>`
           + `<polygon points="${r1(X0 + ticks * U + 18)},${Y} ${r1(X0 + ticks * U + 6)},${Y - 7} ${r1(X0 + ticks * U + 6)},${Y + 7}" fill="${INK}"/>`;
  for (let i = 0; i <= ticks; i++) {
    const x = X0 + i * U, v = min + i * step, isQ = opt.q != null && v === opt.q;
    body += `<line x1="${r1(x)}" y1="${Y - 11}" x2="${r1(x)}" y2="${Y + 11}" stroke="${INK}" stroke-width="2.6"/>`;
    if (isQ) {
      body += `<rect x="${r1(x - 20)}" y="${Y + 16}" width="40" height="34" rx="8" fill="${Q.fill}" stroke="${Q.stroke}" stroke-width="3"/>`
           + `<text x="${r1(x)}" y="${Y + 40}" font-size="22" font-weight="bold" fill="${Q.text}" text-anchor="middle">?</text>`;
    } else {
      body += `<text x="${r1(x)}" y="${Y + 38}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${v}</text>`;
    }
  }
  return svg(W, H, body);
}

/* ─────────────────────────────── MÁY BIẾN ĐỔI ──────────────────────────────
   machineSVG([[3,8],[5,10],[7,12]], 9)  — các ví dụ vào➜ra, dòng cuối là
   `query` ➜ ?. Trẻ tìm quy luật rồi suy ra kết quả.                        */
export function machineSVG(examples, query, opt = {}) {
  const rows = examples.concat([Array.isArray(query) ? query : [query, '?']]);
  const RH = 48, PAD = 18, LW = 96, AW = 70, RW = 96;
  const titleH = 34;
  const W = PAD * 2 + LW + AW + RW;
  const H = PAD * 2 + titleH + rows.length * RH;
  let body = `<text x="${r1(W / 2)}" y="${PAD + 22}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title || 'Máy biến đổi số'}</text>`;
  const y0 = PAD + titleH;
  rows.forEach((p, i) => {
    const yc = y0 + i * RH + RH / 2, q = String(p[1]) === '?', qi = String(p[0]) === '?';
    body += `<rect x="${PAD}" y="${r1(yc - 20)}" width="${LW}" height="40" rx="9" fill="${qi ? Q.fill : '#eff6ff'}" stroke="${qi ? Q.stroke : INK}" stroke-width="${qi ? 3.4 : 2.4}"/>`
         + `<text x="${r1(PAD + LW / 2)}" y="${r1(yc + 7)}" font-size="21" font-weight="bold" fill="${qi ? Q.text : INK}" text-anchor="middle">${p[0]}</text>`
         + `<text x="${r1(PAD + LW + AW / 2)}" y="${r1(yc + 8)}" font-size="26" fill="#475569" text-anchor="middle">➜</text>`
         + `<rect x="${r1(PAD + LW + AW)}" y="${r1(yc - 20)}" width="${RW}" height="40" rx="9" fill="${q ? Q.fill : '#dcfce7'}" stroke="${q ? Q.stroke : INK}" stroke-width="${q ? 3.4 : 2.4}"/>`
         + `<text x="${r1(PAD + LW + AW + RW / 2)}" y="${r1(yc + 7)}" font-size="21" font-weight="bold" fill="${q ? Q.text : INK}" text-anchor="middle">${p[1]}</text>`;
  });
  return svg(W, H, body);
}

/* ─────────────────────────────── BIỂU ĐỒ CỘT ───────────────────────────────
   barChartSVG([{label:'Lan', n:8}, …], { title, unit, step })             */
export function barChartSVG(rows, opt = {}) {
  const step = opt.step || 1, unit = opt.unit || '';
  const maxN = Math.max.apply(null, rows.map((r) => r.n));
  const grid = Math.ceil(maxN / step) * step;
  const BW = 54, GAP = 30, PADL = 54, PADR = 24, PADT = opt.title ? 44 : 20, PADB = 52;
  const plotH = 200;
  const W = PADL + PADR + rows.length * BW + (rows.length - 1) * GAP;
  const H = PADT + plotH + PADB;
  const baseY = PADT + plotH;
  let body = '';
  if (opt.title) body += `<text x="${r1(W / 2)}" y="26" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title}</text>`;
  for (let g = 0; g <= grid; g += step) {
    const y = baseY - g / grid * plotH;
    body += `<line x1="${PADL}" y1="${r1(y)}" x2="${r1(W - PADR)}" y2="${r1(y)}" stroke="#e2e8f0" stroke-width="1.6"/>`
         + `<text x="${PADL - 10}" y="${r1(y + 5)}" font-size="15" fill="#64748b" text-anchor="end">${g}</text>`;
  }
  body += `<line x1="${PADL}" y1="${PADT}" x2="${PADL}" y2="${r1(baseY)}" stroke="${INK}" stroke-width="2.6"/>`
       + `<line x1="${PADL}" y1="${r1(baseY)}" x2="${r1(W - PADR)}" y2="${r1(baseY)}" stroke="${INK}" stroke-width="2.6"/>`;
  const colors = ['#93c5fd', '#fca5a5', '#fcd34d', '#86efac', '#d8b4fe', '#f9a8d4', '#a5b4fc'];
  rows.forEach((row, i) => {
    const x = PADL + 16 + i * (BW + GAP), h = row.n / grid * plotH;
    body += `<rect x="${r1(x)}" y="${r1(baseY - h)}" width="${BW}" height="${r1(h)}" rx="4" fill="${colors[i % colors.length]}" stroke="${INK}" stroke-width="2.2"/>`
         + `<text x="${r1(x + BW / 2)}" y="${r1(baseY - h - 8)}" font-size="17" font-weight="bold" fill="${INK}" text-anchor="middle">${row.n}</text>`
         + `<text x="${r1(x + BW / 2)}" y="${r1(baseY + 22)}" font-size="16" font-weight="bold" fill="${INK}" text-anchor="middle">${row.label}</text>`;
  });
  if (unit) body += `<text x="${PADL - 6}" y="${PADT - 6}" font-size="14" fill="#64748b" text-anchor="middle">${unit}</text>`;
  return svg(W, H, body);
}

/* ─────────────────────────── BẢNG GHÉP KHẢ NĂNG ────────────────────────────
   comboSVG(['👕','👚'], ['👖','🩳','👗'], {title})  — lưới ghép mỗi hàng với
   mỗi cột; số ô = số cách chọn. Ô giao ghi cặp emoji.                      */
export function comboSVG(rowItems, colItems, opt = {}) {
  const CW = 78, CH = 60, HDR = 56, PAD = 16, titleH = opt.title ? 32 : 0;
  const nC = colItems.length, nR = rowItems.length;
  const W = PAD * 2 + HDR + nC * CW;
  const H = PAD * 2 + titleH + HDR + nR * CH;
  let body = '';
  if (opt.title) body += `<text x="${r1(W / 2)}" y="${PAD + 22}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title}</text>`;
  const x0 = PAD + HDR, y0 = PAD + titleH + HDR;
  colItems.forEach((c, j) => {
    body += `<text x="${r1(x0 + j * CW + CW / 2)}" y="${r1(y0 - HDR / 2 + 12)}" font-size="30" text-anchor="middle">${c}</text>`;
  });
  rowItems.forEach((rItem, i) => {
    body += `<text x="${r1(PAD + HDR / 2)}" y="${r1(y0 + i * CH + CH / 2 + 10)}" font-size="30" text-anchor="middle">${rItem}</text>`;
    colItems.forEach((c, j) => {
      const x = x0 + j * CW, y = y0 + i * CH;
      body += `<rect x="${r1(x)}" y="${r1(y)}" width="${CW}" height="${CH}" fill="${(i + j) % 2 ? '#f8fafc' : '#fff'}" stroke="#94a3b8" stroke-width="1.8"/>`
           + `<text x="${r1(x + CW / 2)}" y="${r1(y + CH / 2 + 8)}" font-size="23" text-anchor="middle">${rItem}${c}</text>`;
    });
  });
  body += `<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(nC * CW)}" height="${r1(nR * CH)}" fill="none" stroke="${INK}" stroke-width="2.6"/>`;
  return svg(W, H, body);
}

/* ───────────────────────── HÀNG LỰA CHỌN A·B·C·D ───────────────────────────
   oddOneSVG(['🍎','🍌','🚗','🍇'])  — 4 ô có nhãn A-D, mỗi ô một biểu tượng.
   Dùng cho: phân loại (tìm vật khác nhóm) · chọn hình.                     */
export function oddOneSVG(items, opt = {}) {
  const CW = opt.cw || 108, CH = 108, PAD = 18, GAP = 12;
  const W = PAD * 2 + items.length * CW + (items.length - 1) * GAP, H = PAD * 2 + CH + 30;
  let body = '';
  items.forEach((it, i) => {
    const x = PAD + i * (CW + GAP);
    body += `<rect x="${r1(x)}" y="${PAD}" width="${CW}" height="${CH}" rx="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.6"/>`
         + `<text x="${r1(x + CW / 2)}" y="${r1(PAD + CH / 2 + 22)}" font-size="${opt.fs || 54}" text-anchor="middle">${it}</text>`
         + `<text x="${r1(x + CW / 2)}" y="${r1(PAD + CH + 24)}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">${'ABCD'[i]}</text>`;
  });
  return svg(W, H, body);
}

/* ─────────────────────────────── XÚC XẮC ───────────────────────────────────
   diceSVG([3,5,6])  — vẽ các mặt xúc xắc có chấm; đếm/cộng số chấm.        */
export function diceSVG(values, opt = {}) {
  const S = 76, GAP = 22, PAD = 16;
  const W = PAD * 2 + values.length * S + (values.length - 1) * GAP, H = PAD * 2 + S;
  const spots = {
    1: [[.5, .5]], 2: [[.28, .28], [.72, .72]],
    3: [[.28, .28], [.5, .5], [.72, .72]],
    4: [[.28, .28], [.72, .28], [.28, .72], [.72, .72]],
    5: [[.28, .28], [.72, .28], [.5, .5], [.28, .72], [.72, .72]],
    6: [[.28, .26], [.72, .26], [.28, .5], [.72, .5], [.28, .74], [.72, .74]],
  };
  let body = '';
  values.forEach((v, i) => {
    const x = PAD + i * (S + GAP);
    body += `<rect x="${r1(x)}" y="${PAD}" width="${S}" height="${S}" rx="14" fill="#fff" stroke="${INK}" stroke-width="3"/>`;
    (spots[v] || []).forEach((p) => {
      body += `<circle cx="${r1(x + p[0] * S)}" cy="${r1(PAD + p[1] * S)}" r="7" fill="${INK}"/>`;
    });
  });
  return svg(W, H, body);
}

/* ──────────────────────── CỘT KHỐI LẬP PHƯƠNG (nhìn thẳng) ─────────────────
   colStacksSVG([3,1,4,2])  — mỗi cột là chồng khối vuông; đếm tổng số khối. */
export function colStacksSVG(heights, opt = {}) {
  const U = 40, PAD = 20, baseGap = 6;
  const maxH = Math.max.apply(null, heights);
  const W = PAD * 2 + heights.length * (U + baseGap) - baseGap;
  const H = PAD * 2 + maxH * U + 24;
  const baseY = H - PAD - 20;
  let body = `<line x1="${PAD - 6}" y1="${r1(baseY)}" x2="${r1(W - PAD + 6)}" y2="${r1(baseY)}" stroke="${INK}" stroke-width="3"/>`;
  heights.forEach((h, i) => {
    const x = PAD + i * (U + baseGap);
    for (let k = 0; k < h; k++) {
      const y = baseY - (k + 1) * U;
      body += `<rect x="${r1(x)}" y="${r1(y)}" width="${U}" height="${U}" fill="#bfdbfe" stroke="${INK}" stroke-width="2.4"/>`;
    }
    body += `<text x="${r1(x + U / 2)}" y="${r1(baseY + 18)}" font-size="15" fill="#64748b" text-anchor="middle">${'ABCDEFG'[i]}</text>`;
  });
  return svg(W, H, body);
}

/* ─────────────────────────── LƯỚI SỐ (ô ẩn tô cam) ─────────────────────────
   numGridSVG([[2,7,6],[9,5,1],[4,'?',8]])  — dùng cho bảng cộng, ma phương,
   bảng số có ô còn thiếu.                                                  */
export function numGridSVG(matrix, opt = {}) {
  const CW = opt.cw || 62, CH = opt.ch || 56, PAD = 16, titleH = opt.title ? 32 : 0;
  const nC = matrix[0].length, nR = matrix.length;
  const W = PAD * 2 + nC * CW, H = PAD * 2 + titleH + nR * CH;
  let body = '';
  if (opt.title) body += `<text x="${r1(W / 2)}" y="${PAD + 22}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title}</text>`;
  const y0 = PAD + titleH;
  matrix.forEach((row, i) => {
    row.forEach((v, j) => {
      const x = PAD + j * CW, y = y0 + i * CH, q = String(v) === '?';
      body += `<rect x="${r1(x)}" y="${r1(y)}" width="${CW}" height="${CH}" fill="${q ? Q.fill : '#eff6ff'}" stroke="${q ? Q.stroke : '#94a3b8'}" stroke-width="${q ? 3.2 : 1.8}"/>`
           + `<text x="${r1(x + CW / 2)}" y="${r1(y + CH / 2 + 8)}" font-size="23" font-weight="bold" fill="${q ? Q.text : INK}" text-anchor="middle">${v}</text>`;
    });
  });
  body += `<rect x="${PAD}" y="${r1(y0)}" width="${r1(nC * CW)}" height="${r1(nR * CH)}" fill="none" stroke="${INK}" stroke-width="2.8"/>`;
  return svg(W, H, body);
}

/* ─────────────────────── KHỐI GIÁ TRỊ (trăm · chục · đơn vị) ────────────────
   placeValueSVG(2, 3, 4)  — 2 tấm trăm, 3 thanh chục, 4 ô đơn vị.         */
export function placeValueSVG(h, t, o, opt = {}) {
  const PAD = 18, GAP = 26;
  const flat = 66, rod = 66, unit = 15;
  const cols = [];
  if (h) cols.push({ kind: 'h', n: h, w: h * 18 + 48 });
  if (t) cols.push({ kind: 't', n: t, w: t * 12 + 20 });
  cols.push({ kind: 'o', n: o, w: 3 * unit + 8 });
  const W = PAD * 2 + cols.reduce((s, c) => s + c.w, 0) + GAP * (cols.length - 1);
  const H = PAD * 2 + 90;
  const baseY = H - PAD;
  let body = '', x = PAD;
  for (const c of cols) {
    if (c.kind === 'h') {
      for (let i = 0; i < c.n; i++) {
        body += `<rect x="${r1(x + i * 18)}" y="${r1(baseY - flat)}" width="${flat}" height="${flat}" fill="#c7d2fe" stroke="${INK}" stroke-width="2.2"/>`;
      }
      body += `<text x="${r1(x + (c.n - 1) * 18 + flat / 2)}" y="${r1(baseY + 16)}" font-size="15" fill="#64748b" text-anchor="middle">trăm</text>`;
    } else if (c.kind === 't') {
      for (let i = 0; i < c.n; i++) {
        body += `<rect x="${r1(x + i * 12)}" y="${r1(baseY - rod)}" width="9" height="${rod}" fill="#bbf7d0" stroke="${INK}" stroke-width="2"/>`;
      }
      body += `<text x="${r1(x + (c.n - 1) * 12 / 2 + 4)}" y="${r1(baseY + 16)}" font-size="15" fill="#64748b" text-anchor="middle">chục</text>`;
    } else {
      for (let i = 0; i < c.n; i++) {
        const cx = x + (i % 3) * (unit + 2), cy = baseY - unit - Math.floor(i / 3) * (unit + 2);
        body += `<rect x="${r1(cx)}" y="${r1(cy)}" width="${unit}" height="${unit}" fill="#fed7aa" stroke="${INK}" stroke-width="1.8"/>`;
      }
      body += `<text x="${r1(x + unit)}" y="${r1(baseY + 16)}" font-size="15" fill="#64748b" text-anchor="middle">đơn vị</text>`;
    }
    x += c.w + GAP;
  }
  return svg(W, H, body);
}

/* ─────────────────────── SỐ TRẬN ĐỒ TAM GIÁC (数阵图 · Trung Quốc) ──────────
   triangleArraySVG({A,B,C, ab,bc,ca})  — 3 đỉnh + 3 số giữa cạnh; ô '?' tô cam.
   Tổng ba số trên mỗi cạnh (đỉnh + giữa + đỉnh) bằng nhau.               */
export function triangleArraySVG(v, opt = {}) {
  const W = 340, H = 300;
  const A = [W / 2, 46], B = [58, H - 40], C = [W - 58, H - 40];
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const nodes = [
    { p: A, val: v.A }, { p: B, val: v.B }, { p: C, val: v.C },
    { p: mid(A, B), val: v.ab }, { p: mid(B, C), val: v.bc }, { p: mid(C, A), val: v.ca },
  ];
  let body = `<polygon points="${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}" fill="none" stroke="${INK}" stroke-width="3"/>`;
  for (const n of nodes) {
    const q = String(n.val) === '?';
    body += `<circle cx="${r1(n.p[0])}" cy="${r1(n.p[1])}" r="24" fill="${q ? Q.fill : '#eff6ff'}" stroke="${q ? Q.stroke : INK}" stroke-width="${q ? 3.4 : 2.6}"/>`
         + `<text x="${r1(n.p[0])}" y="${r1(n.p[1] + 8)}" font-size="23" font-weight="bold" fill="${q ? Q.text : INK}" text-anchor="middle">${n.val}</text>`;
  }
  if (opt.title) body += `<text x="${r1(W / 2)}" y="${H - 8}" font-size="16" fill="#475569" text-anchor="middle">${opt.title}</text>`;
  return svg(W, H, body);
}

/* ─────────────────────── CHUỖI MŨI TÊN QUY LUẬT (a →+3→ b) ─────────────────
   arrowChainSVG([5,8,11,'?'], '+3')  — dãy số nối bằng mũi tên ghi phép.  */
export function arrowChainSVG(cells, ruleText, opt = {}) {
  const BW = 66, BH = 56, AW = 66, PAD = 16;
  const W = PAD * 2 + cells.length * BW + (cells.length - 1) * AW;
  const H = PAD * 2 + BH + 12;
  let body = '';
  cells.forEach((c, i) => {
    const x = PAD + i * (BW + AW), q = String(c) === '?';
    body += `<rect x="${r1(x)}" y="${PAD}" width="${BW}" height="${BH}" rx="11" fill="${q ? Q.fill : '#eff6ff'}" stroke="${q ? Q.stroke : INK}" stroke-width="${q ? 3.4 : 2.4}"/>`
         + `<text x="${r1(x + BW / 2)}" y="${r1(PAD + BH / 2 + 9)}" font-size="24" font-weight="bold" fill="${q ? Q.text : INK}" text-anchor="middle">${c}</text>`;
    if (i < cells.length - 1) {
      const ax = x + BW, mid = ax + AW / 2, yc = PAD + BH / 2;
      const rt = opt.rules ? opt.rules[i] : ruleText;
      body += `<line x1="${r1(ax + 6)}" y1="${r1(yc)}" x2="${r1(ax + AW - 6)}" y2="${r1(yc)}" stroke="#f97316" stroke-width="2.6"/>`
           + `<polygon points="${r1(ax + AW - 6)},${r1(yc)} ${r1(ax + AW - 16)},${r1(yc - 6)} ${r1(ax + AW - 16)},${r1(yc + 6)}" fill="#f97316"/>`
           + `<text x="${r1(mid)}" y="${r1(yc - 12)}" font-size="17" font-weight="bold" fill="#c2410c" text-anchor="middle">${rt}</text>`;
    }
  });
  return svg(W, H, body);
}
