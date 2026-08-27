/* ============================================================================
   nc2-art.mjs — bộ vẽ hình SVG bổ sung cho bộ đề "Toán nâng cao lớp 2".
   Dùng bởi tools/gen-nangcao2.mjs, đi kèm bộ vẽ chung tools/hinh-art.mjs.

   Bốn dạng hình mà bộ vẽ cũ chưa có, đều là hình "mang dữ kiện" của toán
   nâng cao lớp 2:
     · barModelSVG  — sơ đồ đoạn thẳng (tổng – hiệu, nhiều hơn – ít hơn, gấp lần)
     · balanceSVG   — cân thăng bằng với quả cân ghi rõ số ki-lô-gam
     · polylineSVG  — đường gấp khúc / hình có ghi số đo từng cạnh
     · treeRowSVG   — hàng cây trồng cách đều trên một đoạn đường

   Cùng ngôn ngữ hình với hinh-art.mjs: nền trắng, nét mực #2b2b2b, phần phải
   tìm tô cam #ffedd5, không có chi tiết trang trí gây nhiễu.
   ========================================================================== */
'use strict';

import { svg } from './hinh-art.mjs';

const INK = '#2b2b2b';
const r1 = (v) => Math.round(v * 10) / 10;

/* màu các đoạn trên sơ đồ: b = phần đã biết · d = phần chênh lệch · q = phần phải tìm */
const SEG = {
  b: { fill: '#bfdbfe', stroke: INK, text: INK },
  d: { fill: '#fecaca', stroke: INK, text: INK },
  q: { fill: '#ffedd5', stroke: '#f97316', text: '#c2410c' },
};

/* ────────────────────────────── SƠ ĐỒ ĐOẠN THẲNG ──────────────────────────
   barModelSVG([{ label, segs:[{v, t, k}], tot }], { title, brace })
     · v  độ lớn (để tính bề rộng)   · t chữ ghi trên đoạn   · k kiểu b|d|q
     · tot   → ngoặc vuông dưới thanh, ghi tổng của riêng hàng đó
     · brace → ngoặc đứng bên phải ôm tất cả các hàng (tổng chung)           */
export function barModelSVG(rows, opt = {}) {
  const LW = opt.labelW || 116, BW = opt.barW || 420, RH = opt.rowH || 84, PAD = 18;
  const titleH = opt.title ? 32 : 0;
  const braceW = opt.brace ? 138 : 22;
  const max = Math.max.apply(null, rows.map((r) => r.segs.reduce((t, s) => t + s.v, 0)));
  const X0 = PAD + LW;
  const W = X0 + BW + braceW;
  const H = PAD * 2 + titleH + rows.length * RH;

  let body = '';
  if (opt.title) body += `<text x="${r1(W / 2)}" y="${PAD + 22}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title}</text>`;

  const y0 = PAD + titleH;
  rows.forEach((row, i) => {
    const yc = y0 + i * RH + 30, h = 38;
    body += `<text x="${PAD}" y="${r1(yc + 7)}" font-size="17" font-weight="bold" fill="${INK}">${row.label}</text>`;
    let x = X0;
    for (const s of row.segs) {
      const w = Math.max(50, s.v / max * BW);
      const c = SEG[s.k || 'b'];
      body += `<rect x="${r1(x)}" y="${r1(yc - h / 2)}" width="${r1(w)}" height="${h}" rx="5" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2.8"/>`
           + `<text x="${r1(x + w / 2)}" y="${r1(yc + 7)}" font-size="18" font-weight="bold" fill="${c.text}" text-anchor="middle">${s.t}</text>`;
      x += w;
    }
    if (row.tot) {
      const yb = yc + h / 2 + 8;
      body += `<path d="M ${X0} ${r1(yb)} L ${X0} ${r1(yb + 9)} L ${r1(x)} ${r1(yb + 9)} L ${r1(x)} ${r1(yb)}" fill="none" stroke="#f97316" stroke-width="2.4"/>`
           + `<text x="${r1((X0 + x) / 2)}" y="${r1(yb + 29)}" font-size="17" font-weight="bold" fill="#c2410c" text-anchor="middle">${row.tot}</text>`;
    }
  });

  if (opt.brace) {
    const yA = y0 + 30 - 20, yB = y0 + (rows.length - 1) * RH + 30 + 20;
    const bx = X0 + BW + 12;
    body += `<path d="M ${r1(bx)} ${r1(yA)} L ${r1(bx + 12)} ${r1(yA)} L ${r1(bx + 12)} ${r1(yB)} L ${r1(bx)} ${r1(yB)}" fill="none" stroke="#f97316" stroke-width="2.6"/>`
         + `<text x="${r1(bx + 20)}" y="${r1((yA + yB) / 2 + 7)}" font-size="18" font-weight="bold" fill="#c2410c">${opt.brace}</text>`;
  }
  return svg(W, H, body);
}

/* ───────────────────────────── CÂN THĂNG BẰNG ──────────────────────────────
   balanceSVG({ emoji, n, cap }, [2, 2, 2], { unit })
   Đĩa trái là vật cần tìm, đĩa phải là các quả cân ghi rõ số ki-lô-gam.     */
export function balanceSVG(left, weights, opt = {}) {
  const unit = opt.unit || 'kg';
  const W = 560, H = 300;
  const cx = W / 2, beamY = 118, arm = 168;
  const lx = cx - arm, rx = cx + arm;

  let body = '';
  /* trụ và đòn cân */
  body += `<polygon points="${cx - 46},${H - 30} ${cx + 46},${H - 30} ${cx + 14},${beamY + 8} ${cx - 14},${beamY + 8}" fill="#cbd5e1" stroke="${INK}" stroke-width="3"/>`
       + `<rect x="${cx - 70}" y="${H - 32}" width="140" height="14" rx="6" fill="#94a3b8" stroke="${INK}" stroke-width="2.6"/>`
       + `<line x1="${lx}" y1="${beamY}" x2="${rx}" y2="${beamY}" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`
       + `<circle cx="${cx}" cy="${beamY}" r="10" fill="${INK}"/>`;
  /* hai đĩa cân */
  for (const x of [lx, rx]) {
    body += `<line x1="${x}" y1="${beamY}" x2="${x}" y2="${beamY + 52}" stroke="${INK}" stroke-width="3"/>`
         + `<polygon points="${x - 78},${beamY + 52} ${x + 78},${beamY + 52} ${x + 58},${beamY + 84} ${x - 58},${beamY + 84}" fill="#e2e8f0" stroke="${INK}" stroke-width="3"/>`;
  }
  /* vật cần tìm trên đĩa trái */
  const n = left.n || 1;
  for (let i = 0; i < n; i++) {
    const step = 46, x = lx - (n - 1) * step / 2 + i * step;
    body += `<text x="${r1(x)}" y="${beamY + 46}" font-size="42" text-anchor="middle">${left.emoji}</text>`;
  }
  body += `<text x="${lx}" y="${beamY + 116}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">${left.cap}</text>`;
  /* các quả cân trên đĩa phải */
  weights.forEach((v, i) => {
    const step = 52, x = rx - (weights.length - 1) * step / 2 + i * step;
    body += `<rect x="${r1(x - 23)}" y="${beamY + 8}" width="46" height="44" rx="7" fill="#fde68a" stroke="${INK}" stroke-width="2.8"/>`
         + `<text x="${r1(x)}" y="${beamY + 37}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">${v}${unit}</text>`;
  });
  body += `<text x="${rx}" y="${beamY + 116}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.rightCap || 'các quả cân'}</text>`;
  return svg(W, H, body);
}

/* ───────────────────────── ĐƯỜNG GẤP KHÚC · HÌNH CÓ SỐ ĐO ─────────────────
   polylineSVG([[x,y], …], ['12 cm', …], { names:['A','B',…], close })
   Toạ độ cho thẳng theo hệ pixel của hình để tỉ lệ luôn đúng như ý.        */
export function polylineSVG(pts, labels, opt = {}) {
  const W = opt.w || 620, H = opt.h || 300;
  const close = !!opt.close;
  const pathPts = pts.map((p) => `${r1(p[0])},${r1(p[1])}`).join(' ');
  let body = close
    ? `<polygon points="${pathPts}" fill="#eff6ff" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`
    : `<polyline points="${pathPts}" fill="none" stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>`;

  pts.forEach((p) => { body += `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="8" fill="#1d4ed8"/>`; });

  const edges = close ? pts.length : pts.length - 1;
  for (let i = 0; i < edges && i < labels.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ox = -dy / len * 26, oy = dx / len * 26;
    body += `<text x="${r1(mx + ox)}" y="${r1(my + oy + 7)}" font-size="21" font-weight="bold" fill="#c2410c" text-anchor="middle">${labels[i]}</text>`;
  }
  if (opt.names) {
    const cx = W / 2, cy = H / 2;
    pts.forEach((p, i) => {
      const ox = p[0] < cx ? -22 : 22, oy = p[1] < cy ? -14 : 32;
      body += `<text x="${r1(p[0] + ox)}" y="${r1(p[1] + oy)}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.names[i]}</text>`;
    });
  }
  return svg(W, H, body);
}

/* ─────────────────────── HÀNG CÂY TRỒNG CÁCH ĐỀU ───────────────────────────
   treeRowSVG(18, 3) — đoạn đường có vạch cách đều, hai đầu đã trồng sẵn một
   cây để thấy rõ "trồng cả ở hai đầu"; số cây phải tìm = số vạch.          */
export function treeRowSVG(total, gap, opt = {}) {
  const unit = opt.unit || 'm';
  const k = Math.round(total / gap);
  const U = opt.u || 74, PAD = 56;
  const W = PAD * 2 + k * U, H = 244, roadY = 150;

  let body = `<rect x="${PAD - 26}" y="${roadY}" width="${r1(k * U + 52)}" height="26" fill="#e7e5e4" stroke="${INK}" stroke-width="2.4"/>`;
  for (let i = 0; i <= k; i++) {
    const x = PAD + i * U;
    body += `<line x1="${r1(x)}" y1="${roadY - 12}" x2="${r1(x)}" y2="${roadY + 38}" stroke="#0ea5e9" stroke-width="3"/>`;
    if (i < k) {
      body += `<text x="${r1(x + U / 2)}" y="${roadY + 62}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">${gap} ${unit}</text>`;
    }
  }
  body += `<text x="${PAD}" y="${roadY - 22}" font-size="40" text-anchor="middle">🌳</text>`
       + `<text x="${r1(PAD + k * U)}" y="${roadY - 22}" font-size="40" text-anchor="middle">🌳</text>`
       + `<text x="${r1(W / 2)}" y="34" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">Đoạn đường dài ${total} ${unit}, các vạch cách đều nhau ${gap} ${unit}</text>`
       + `<text x="${r1(W / 2)}" y="${H - 12}" font-size="17" fill="#475569" text-anchor="middle">Trồng một cây ở mỗi vạch, trồng cả ở hai đầu đường.</text>`;
  return svg(W, H, body);
}
