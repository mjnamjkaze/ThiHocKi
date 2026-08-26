/* ============================================================================
   ta-art.mjs — bộ vẽ hình SVG cho mục "TIẾNG ANH THEO TUẦN".
   Dùng bởi tools/gen-tienganh-tuan.mjs.

   Nguyên tắc vẽ (học sinh 7–9 tuổi, học từ vựng qua tranh):
    · nền trắng, nét mực #2b2b2b, chi tiết tối giản — nhìn là đoán ra từ;
    · MỖI HÌNH CHỨA ĐỦ THÔNG TIN để trả lời: căn phòng nhận ra qua đồ vật,
      chủ sở hữu đọc được trên BIỂN TÊN gắn trong hình (Amy · Mom · Laura…),
      hành động nhìn thấy qua người + vật (đá bóng · đọc sách · nấu ăn);
    · không câu nào có đáp án phụ thuộc màu sắc.
   ========================================================================== */
'use strict';

const INK = '#2b2b2b';
const FONT = "system-ui, 'Segoe UI', 'Segoe UI Emoji', 'Noto Color Emoji', Arial, sans-serif";
const r1 = (v) => Math.round(v * 10) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r1(w)} ${r1(h)}" font-family="${FONT}">
<rect width="${r1(w)}" height="${r1(h)}" fill="#fff"/>
${body}
</svg>
`;
}

/* ── biển tên treo trên tường / trên cửa: chỗ duy nhất cho biết CHỦ SỞ HỮU ── */
function plateBody(cx, y, text, fs = 20) {
  const t = esc(text);
  const w = Math.max(64, t.length * fs * 0.62 + 26), h = fs * 1.75;
  return `<rect x="${r1(cx - w / 2)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${r1(h / 3)}"
    fill="#fff8e1" stroke="${INK}" stroke-width="2.5"/>
<text x="${r1(cx)}" y="${r1(y + h * 0.7)}" font-size="${r1(fs)}" font-weight="700" text-anchor="middle" fill="${INK}">${t}</text>`;
}

/* ── một hàng emoji đặt đứng trên mặt sàn, cách đều, không chồng lấp ─────── */
function rowBody(items, cx, baseY, defSize) {
  const its = (items || []).map((it) => (typeof it === 'string' ? { e: it } : it));
  const ws = its.map((it) => (it.s || defSize) * 1.22);
  const total = ws.reduce((a, b) => a + b, 0);
  let x = cx - total / 2, s = '';
  its.forEach((it, i) => {
    const size = it.s || defSize;
    s += `<text x="${r1(x + ws[i] / 2)}" y="${r1(baseY - size * 0.06)}" font-size="${r1(size)}" text-anchor="middle">${it.e}</text>`;
    x += ws[i];
  });
  return s;
}

/* ═══════════════════════ TRONG NHÀ — một căn phòng ════════════════════════
   roomSVG({ items: ['🛏️', '🧸'], tag: 'Amy' })
   Tường + cửa sổ + sàn; đồ vật cho biết ĐÂY LÀ PHÒNG GÌ, biển tên (nếu có)
   cho biết PHÒNG CỦA AI.                                                    */
export function roomSVG(opt = {}) {
  const w = opt.w || 340, h = opt.h || 230;
  const M = 14, floorY = h - 46;
  let b = `<rect x="${M}" y="${M}" width="${r1(w - 2 * M)}" height="${r1(h - 2 * M)}" rx="14"
    fill="#fdfbf6" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M${M + 1.5} ${r1(floorY)} H${r1(w - M - 1.5)} V${r1(h - M - 14)} a14 14 0 0 1 -14 14 H${r1(M + 15.5)} a14 14 0 0 1 -14 -14 Z"
    fill="#f0e6d6" stroke="${INK}" stroke-width="2.5"/>`;
  const wx = M + 24, wy = M + 20, ww = 60, wh = 50;
  b += `<rect x="${r1(wx)}" y="${r1(wy)}" width="${ww}" height="${wh}" rx="5" fill="#e8f4ff" stroke="${INK}" stroke-width="2.5"/>
<line x1="${r1(wx + ww / 2)}" y1="${r1(wy)}" x2="${r1(wx + ww / 2)}" y2="${r1(wy + wh)}" stroke="${INK}" stroke-width="2"/>
<line x1="${r1(wx)}" y1="${r1(wy + wh / 2)}" x2="${r1(wx + ww)}" y2="${r1(wy + wh / 2)}" stroke="${INK}" stroke-width="2"/>`;
  if (opt.tag) b += plateBody(w * 0.64, M + 26, opt.tag, opt.tagSize || 20);
  b += rowBody(opt.items, w / 2, floorY - 4, opt.size || 52);
  return svg(w, h, b);
}

/* ═══════════════════════ NGOÀI TRỜI — sân (yard) ══════════════════════════
   yardSVG({ items: ['👦', '⚽'], tag: 'Amy' }) — trời, cỏ, hàng rào, cây.   */
export function yardSVG(opt = {}) {
  const w = opt.w || 340, h = opt.h || 230;
  const M = 14, grassY = h - 74;
  let b = `<rect x="${M}" y="${M}" width="${r1(w - 2 * M)}" height="${r1(h - 2 * M)}" rx="14"
    fill="#eaf6ff" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M${M + 1.5} ${r1(grassY)} H${r1(w - M - 1.5)} V${r1(h - M - 14)} a14 14 0 0 1 -14 14 H${r1(M + 15.5)} a14 14 0 0 1 -14 -14 Z"
    fill="#dbf0cf" stroke="${INK}" stroke-width="2.5"/>`;
  for (let x = M + 16; x < w - M - 24; x += 26) {
    b += `<rect x="${r1(x)}" y="${r1(grassY - 34)}" width="9" height="34" rx="3" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  }
  b += `<line x1="${r1(M + 12)}" y1="${r1(grassY - 26)}" x2="${r1(w - M - 12)}" y2="${r1(grassY - 26)}" stroke="${INK}" stroke-width="2"/>
<line x1="${r1(M + 12)}" y1="${r1(grassY - 12)}" x2="${r1(w - M - 12)}" y2="${r1(grassY - 12)}" stroke="${INK}" stroke-width="2"/>`;
  b += `<text x="${r1(w - M - 42)}" y="${r1(grassY - 28)}" font-size="46" text-anchor="middle">🌳</text>`;
  b += `<text x="${r1(M + 42)}" y="${r1(M + 48)}" font-size="32" text-anchor="middle">☀️</text>`;
  if (opt.tag) b += plateBody(w * 0.54, M + 16, opt.tag, opt.tagSize || 20);
  b += rowBody(opt.items, w / 2, grassY + 36, opt.size || 52);
  return svg(w, h, b);
}

/* ═══════════════════════ NGÔI NHÀ NHÌN TỪ NGOÀI ═══════════════════════════
   houseSVG({ tag: 'Amy' }) — biển tên gắn ngay trên mái: nhà của ai.        */
export function houseSVG(opt = {}) {
  const w = opt.w || 340, h = opt.h || 230;
  const M = 14, groundY = h - 40;
  let b = `<rect x="${M}" y="${M}" width="${r1(w - 2 * M)}" height="${r1(h - 2 * M)}" rx="14"
    fill="#eaf6ff" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M${M + 1.5} ${r1(groundY)} H${r1(w - M - 1.5)} V${r1(h - M - 14)} a14 14 0 0 1 -14 14 H${r1(M + 15.5)} a14 14 0 0 1 -14 -14 Z"
    fill="#dbf0cf" stroke="${INK}" stroke-width="2.5"/>`;
  const bw = 166, bh = 96, bx = (w - bw) / 2, by = groundY - bh;
  b += `<path d="M${r1(bx - 22)} ${r1(by)} L${r1(w / 2)} ${r1(by - 54)} L${r1(bx + bw + 22)} ${r1(by)} Z"
    fill="#f6c9a8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<rect x="${r1(bx)}" y="${r1(by)}" width="${bw}" height="${bh}" fill="#fff8ef" stroke="${INK}" stroke-width="3"/>`;
  const dw = 44, dh = 58, dx = bx + bw / 2 - dw / 2, dy = groundY - dh;
  b += `<rect x="${r1(dx)}" y="${r1(dy)}" width="${dw}" height="${dh}" rx="4" fill="#e0b088" stroke="${INK}" stroke-width="2.5"/>
<circle cx="${r1(dx + dw - 10)}" cy="${r1(dy + dh / 2)}" r="3.5" fill="${INK}"/>`;
  for (const sx of [bx + 18, bx + bw - 18 - 36]) {
    b += `<rect x="${r1(sx)}" y="${r1(by + 22)}" width="36" height="32" rx="4" fill="#e8f4ff" stroke="${INK}" stroke-width="2.5"/>
<line x1="${r1(sx + 18)}" y1="${r1(by + 22)}" x2="${r1(sx + 18)}" y2="${r1(by + 54)}" stroke="${INK}" stroke-width="2"/>`;
  }
  if (opt.tag) b += plateBody(w / 2, by - 46, opt.tag, opt.tagSize || 20);
  if (opt.items && opt.items.length) b += rowBody(opt.items, bx + bw + 42, groundY + 24, opt.size || 40);
  return svg(w, h, b);
}

/* ═══════════════ THẺ TỪ VỰNG — dùng làm HÌNH CHO TỪNG PHƯƠNG ÁN ═══════════ */
export function cardSVG(opt = {}) {
  const w = opt.w || 210, h = opt.h || 150;
  const M = 8;
  let b = `<rect x="${M}" y="${M}" width="${r1(w - 2 * M)}" height="${r1(h - 2 * M)}" rx="14"
    fill="#fdfbf6" stroke="${INK}" stroke-width="3"/>`;
  const size = opt.size || 54;
  const hasLabel = !!opt.label;
  b += rowBody(opt.items || [opt.emoji], w / 2, hasLabel ? h - 44 : h / 2 + size * 0.38, size);
  if (hasLabel) {
    b += `<text x="${r1(w / 2)}" y="${r1(h - 16)}" font-size="20" font-weight="700" text-anchor="middle" fill="${INK}">${esc(opt.label)}</text>`;
  }
  return svg(w, h, b);
}

/* ═══════════════ THÙNG Ủ PHÂN HỮU CƠ (compost) ════════════════════════════ */
export function compostSVG(opt = {}) {
  const w = opt.w || 300, h = opt.h || 220;
  const M = 14, groundY = h - 36;
  let b = `<rect x="${M}" y="${M}" width="${r1(w - 2 * M)}" height="${r1(h - 2 * M)}" rx="14"
    fill="#eaf6ff" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M${M + 1.5} ${r1(groundY)} H${r1(w - M - 1.5)} V${r1(h - M - 14)} a14 14 0 0 1 -14 14 H${r1(M + 15.5)} a14 14 0 0 1 -14 -14 Z"
    fill="#dbf0cf" stroke="${INK}" stroke-width="2.5"/>`;
  const bw = 124, bh = 92, bx = (w - bw) / 2, by = groundY - bh;
  b += `<path d="M${r1(bx + 10)} ${r1(by)} L${r1(bx + bw - 10)} ${r1(by)} L${r1(bx + bw - 20)} ${r1(groundY)} L${r1(bx + 20)} ${r1(groundY)} Z"
    fill="#c9a882" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
  b += `<ellipse cx="${r1(bx + bw / 2)}" cy="${r1(by)}" rx="${r1(bw / 2 - 10)}" ry="11" fill="#6b4f3a" stroke="${INK}" stroke-width="3"/>`;
  b += rowBody(['🍌', '🍎', '🥬'], bx + bw / 2, by + 4, 28);
  b += `<text x="${r1(bx + bw / 2)}" y="${r1(by + 60)}" font-size="30" text-anchor="middle">🪱</text>`;
  // label: false → không ghi chữ, dùng cho câu hỏi bắt học sinh tự nhớ từ
  if (opt.label !== false) {
    b += `<text x="${r1(w / 2)}" y="${r1(M + 32)}" font-size="21" font-weight="700" text-anchor="middle" fill="${INK}">compost</text>`;
  }
  return svg(w, h, b);
}
