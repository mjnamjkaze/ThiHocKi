/* ============================================================================
   gen-thcs-toan7.mjs — sinh ngân hàng "TOÁN LỚP 7 — 100 đề HSG theo chuyên đề"

   Chạy:  node tools/gen-thcs-toan7.mjs
   Xuất:  web/data-toan7.js   (100 đề × 10 câu = 1000 câu, id 21001–21100)

   Bám GDPT 2018 (SGK Kết nối tri thức) — mức HSG cấp trường / cấp huyện:
     T1  Số hữu tỉ (phép tính, luỹ thừa, thứ tự, giá trị tuyệt đối)
     T2  Số thực – căn bậc hai số học – làm tròn – ước lượng
     T3  Tỉ lệ thức – dãy tỉ số bằng nhau – đại lượng tỉ lệ thuận / nghịch
     T4  Biểu thức đại số – đa thức một biến
     T5  Góc và đường thẳng song song
     T6  Tam giác (tổng ba góc, bằng nhau, cân, trung trực, góc–cạnh, BĐT, đồng quy)
     T7  Hình hộp chữ nhật – hình lập phương – lăng trụ đứng
     T8  Thu thập – phân loại dữ liệu, biểu đồ quạt tròn, biểu đồ đoạn thẳng
     T9  Biến cố và xác suất
     MIX Ôn tổng hợp

   Cấu trúc: ~360 câu VIẾT TAY (mảng BANK) + phần còn lại sinh từ 41 HỌ CÂU
   THAM SỐ HOÁ (đáp án tính bằng code, phương án nhiễu mô phỏng lỗi hay gặp).
   RNG mulberry32 có hạt giống nên chạy lại ra đúng cùng một bộ đề.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'web', 'data-toan7.js');

/* ── RNG tất định (mulberry32) ─────────────────────────────────────────── */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const R = rng(21007);
const ri = (lo, hi) => lo + Math.floor(R() * (hi - lo + 1));
const pick = (arr) => arr[Math.floor(R() * arr.length)];
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

/* ── định dạng số ──────────────────────────────────────────────────────── */
const M = '−';                                   // dấu trừ unicode
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
const grp = (n) => { const s = String(Math.abs(n)); return (s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : s); };
const fmtInt = (n) => (n < 0 ? M : '') + grp(n);
const fmtDec = (x, digits) => { let s = Math.abs(x).toFixed(digits).replace('.', ','); return (x < 0 ? M : '') + s; };
// số thập phân "đẹp": bỏ số 0 cuối
const fmtNum = (x) => {
  if (Number.isInteger(x)) return fmtInt(x);
  let s = Math.abs(x).toFixed(4).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',');
  return (x < 0 ? M : '') + s;
};
const sup = (n) => `<sup>${n}</sup>`;
const sub = (n) => `<sub>${n}</sub>`;
const deg = (n) => `${fmtNum(n)}°`;

/* ── phân số ───────────────────────────────────────────────────────────── */
class F {
  constructor(n, d = 1) {
    if (d === 0) throw new Error('mẫu 0');
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d) || 1;
    this.n = n / g; this.d = d / g;
  }
  static of(x) { return x instanceof F ? x : new F(x, 1); }
  add(o) { o = F.of(o); return new F(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o) { o = F.of(o); return new F(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o) { o = F.of(o); return new F(this.n * o.n, this.d * o.d); }
  div(o) { o = F.of(o); return new F(this.n * o.d, this.d * o.n); }
  neg() { return new F(-this.n, this.d); }
  abs() { return new F(Math.abs(this.n), this.d); }
  inv() { return new F(this.d, this.n); }
  pow(k) { let r = new F(1); for (let i = 0; i < k; i++) r = r.mul(this); return r; }
  val() { return this.n / this.d; }
  isInt() { return this.d === 1; }
  isZero() { return this.n === 0; }
  eq(o) { o = F.of(o); return this.n === o.n && this.d === o.d; }
  cmp(o) { o = F.of(o); return this.n * o.d - o.n * this.d; }
  str() { return this.d === 1 ? fmtInt(this.n) : `${this.n < 0 ? M : ''}${Math.abs(this.n)}/${this.d}`; }
  par() { return this.n < 0 ? `(${this.str()})` : this.str(); }   // bọc ngoặc nếu âm
  dec() { // dạng thập phân để giải thích
    const v = this.val();
    const s = fmtDec(v, 3);
    return Number.isInteger(v * 1000) ? s.replace(/,?0+$/, '') : `≈ ${s}`;
  }
}
const fr = (n, d = 1) => new F(n, d);

/* phân số không nguyên, ngẫu nhiên, có dấu */
function randFrac(maxN = 11, maxD = 12, signed = true) {
  for (;;) {
    const d = ri(2, maxD); let n = ri(1, maxN);
    if (n % d === 0) continue;
    if (signed && R() < 0.5) n = -n;
    return fr(n, d);
  }
}

/* ── đóng gói câu hỏi: lọc phương án nhiễu trùng nhau, cần đủ 3 ────────── */
function build(sec, text, a, cands, why) {
  a = String(a);
  const seen = new Set([a]);
  const w = [];
  for (const c of cands) {
    if (c === null || c === undefined) continue;
    const s = String(c);
    if (s === 'NaN' || s === 'undefined' || s === '' || seen.has(s)) continue;
    seen.add(s); w.push(s);
    if (w.length === 3) break;
  }
  if (w.length < 3) return null;
  return { sec, text, a, w, why };
}

/* ═══════════════════════════════════════════════════════════════════════
   NGÂN HÀNG CÂU VIẾT TAY — [chủ đề, sec, text, đáp án đúng, [3 nhiễu], why]
   ═══════════════════════════════════════════════════════════════════════ */
const BANK = [];
const q = (t, sec, text, a, w, why) => BANK.push({ t, sec, text, a: String(a), w: w.map(String), why });

/* ─────────────── T1 · SỐ HỮU TỈ ─────────────── */
q('T1', 'Số hữu tỉ', 'Trong các số sau, số nào <b>không</b> phải là số hữu tỉ?', '√2', ['−3/4', '0,25', '5'], 'Số hữu tỉ viết được dưới dạng a/b (a, b ∈ ℤ, b ≠ 0). √2 = 1,4142… là số vô tỉ.');
q('T1', 'Số hữu tỉ', 'Tập hợp các số hữu tỉ được kí hiệu là:', 'ℚ', ['ℤ', 'ℕ', 'ℝ'], 'ℕ: số tự nhiên, ℤ: số nguyên, ℚ: số hữu tỉ, ℝ: số thực.');
q('T1', 'Số hữu tỉ', 'Số đối của −3/7 là:', '3/7', ['−7/3', '7/3', '−3/7'], 'Số đối của a là −a: số đối của −3/7 là 3/7.');
q('T1', 'Số hữu tỉ', 'Phân số nào sau đây biểu diễn số hữu tỉ −2/5?', '−4/10', ['4/10', '(−6)/(−15)', '2/5'], '−4/10 = −2/5. Còn (−6)/(−15) = 2/5 là số dương.');
q('T1', 'Số hữu tỉ', 'Số hữu tỉ 7/(−4) có thể viết là:', '−7/4', ['7/4', '−4/7', '4/7'], 'Đổi dấu cả tử và mẫu: 7/(−4) = −7/4.');
q('T1', 'Phép tính', 'Kết quả của phép tính 2/3 + (−5/6) là:', '−1/6', ['1/6', '−3/9', '−1/2'], '2/3 = 4/6; 4/6 − 5/6 = −1/6.');
q('T1', 'Phép tính', 'Kết quả của phép tính (−3/4) · (−8/9) là:', '2/3', ['−2/3', '3/4', '−27/32'], 'Hai số âm nhân nhau được số dương: (3·8)/(4·9) = 24/36 = 2/3.');
q('T1', 'Phép tính', 'Kết quả của phép tính (−5/6) : (10/3) là:', '−1/4', ['−25/9', '1/4', '−5/2'], '(−5/6) · (3/10) = −15/60 = −1/4.');
q('T1', 'Phép tính', 'Kết quả của phép tính 0,5 + 1/4 − 3/8 là:', '3/8', ['1/8', '5/8', '1/2'], '0,5 = 4/8; 1/4 = 2/8. Vậy 4/8 + 2/8 − 3/8 = 3/8.');
q('T1', 'So sánh', 'Trong các số −1/2; −2/3; −3/4; −0,6, số lớn nhất là:', '−1/2', ['−2/3', '−3/4', '−0,6'], 'Đổi ra thập phân: −0,5; −0,667; −0,75; −0,6. Số lớn nhất là −0,5 = −1/2.');
q('T1', 'Số thập phân', 'Số hữu tỉ 11/4 viết dưới dạng số thập phân là:', '2,75', ['2,5', '2,25', '2,4'], '11 : 4 = 2,75.');
q('T1', 'Số thập phân', 'Số thập phân vô hạn tuần hoàn 0,(3) bằng phân số nào?', '1/3', ['3/10', '3/100', '1/30'], '1 : 3 = 0,333… = 0,(3).');
q('T1', 'Phép tính', 'Kết quả của phép tính 5/12 − 7/12 + 1/12 là:', '−1/12', ['1/12', '−1/4', '13/12'], '(5 − 7 + 1)/12 = −1/12.');
q('T1', 'Luỹ thừa', 'Giá trị của (−2)<sup>3</sup> là:', '−8', ['8', '−6', '6'], '(−2)·(−2)·(−2) = −8.');
q('T1', 'Luỹ thừa', 'Giá trị của (−1/2)<sup>4</sup> là:', '1/16', ['−1/16', '1/8', '−1/8'], 'Số mũ chẵn nên kết quả dương: 1<sup>4</sup>/2<sup>4</sup> = 1/16.');
q('T1', 'Luỹ thừa', 'Viết 2<sup>3</sup> · 2<sup>4</sup> dưới dạng một luỹ thừa:', '2<sup>7</sup>', ['2<sup>12</sup>', '4<sup>7</sup>', '4<sup>12</sup>'], 'Nhân hai luỹ thừa cùng cơ số: giữ cơ số, cộng số mũ: 3 + 4 = 7.');
q('T1', 'Luỹ thừa', 'Viết 5<sup>6</sup> : 5<sup>2</sup> dưới dạng một luỹ thừa:', '5<sup>4</sup>', ['5<sup>3</sup>', '1<sup>4</sup>', '5<sup>8</sup>'], 'Chia hai luỹ thừa cùng cơ số: giữ cơ số, trừ số mũ: 6 − 2 = 4.');
q('T1', 'Luỹ thừa', 'Viết (3<sup>2</sup>)<sup>3</sup> dưới dạng một luỹ thừa của 3:', '3<sup>6</sup>', ['3<sup>5</sup>', '3<sup>9</sup>', '6<sup>3</sup>'], 'Luỹ thừa của luỹ thừa: nhân hai số mũ: 2·3 = 6.');
q('T1', 'Luỹ thừa', 'Giá trị của (2 · 5)<sup>3</sup> là:', '1000', ['10<sup>6</sup>', '250', '30'], '(2·5)<sup>3</sup> = 10<sup>3</sup> = 1000.');
q('T1', 'Luỹ thừa', 'Giá trị của (1/2)<sup>3</sup> · 2<sup>3</sup> là:', '1', ['1/64', '64', '2'], '(1/2 · 2)<sup>3</sup> = 1<sup>3</sup> = 1.');
q('T1', 'Luỹ thừa', 'Có bao nhiêu số hữu tỉ x thoả mãn x<sup>2</sup> = 49/64?', '2', ['1', '0', '4'], 'x = 7/8 hoặc x = −7/8 (vì (±7/8)² = 49/64).');
q('T1', 'Luỹ thừa', 'Tìm số tự nhiên x biết 2<sup>x</sup> = 32.', '5', ['4', '6', '16'], '32 = 2<sup>5</sup> nên x = 5.');
q('T1', 'Luỹ thừa', 'Tìm x biết (x − 1)<sup>3</sup> = −27.', '−2', ['2', '4', '−4'], '−27 = (−3)<sup>3</sup> nên x − 1 = −3, suy ra x = −2.');
q('T1', 'Tìm x', 'Tìm x biết x + 3/4 = 1/2.', '−1/4', ['1/4', '5/4', '−5/4'], 'x = 1/2 − 3/4 = 2/4 − 3/4 = −1/4.');
q('T1', 'Tìm x', 'Tìm x biết 2/3 · x = −4/9.', '−2/3', ['2/3', '−8/27', '3/2'], 'x = (−4/9) : (2/3) = (−4/9)·(3/2) = −12/18 = −2/3.');
q('T1', 'Tìm x', 'Tìm x biết x : (−3/5) = 10/9.', '−2/3', ['2/3', '−50/27', '−3/2'], 'x = (10/9)·(−3/5) = −30/45 = −2/3.');
q('T1', 'Giá trị tuyệt đối', 'Tìm x biết |x| = 3/4.', 'x = 3/4 hoặc x = −3/4', ['x = 3/4', 'x = −3/4', 'Không có giá trị x'], '|x| = 3/4 khi x = 3/4 hoặc x = −3/4.');
q('T1', 'Giá trị tuyệt đối', 'Tìm x biết |x − 2| = 5.', 'x = 7 hoặc x = −3', ['x = 7', 'x = 3 hoặc x = −3', 'x = 7 hoặc x = 3'], 'x − 2 = 5 ⇒ x = 7; hoặc x − 2 = −5 ⇒ x = −3.');
q('T1', 'Giá trị tuyệt đối', 'Tìm x biết |2x + 1| = 0.', '−1/2', ['1/2', '0', '−1'], '|A| = 0 ⇔ A = 0: 2x + 1 = 0 ⇒ x = −1/2.');
q('T1', 'Giá trị tuyệt đối', 'Tìm x biết |x| + 3 = 1.', 'Không có giá trị nào của x', ['x = −2', 'x = 2 hoặc x = −2', 'x = 2'], '|x| = 1 − 3 = −2 < 0: vô lí vì |x| ≥ 0 với mọi x.');
q('T1', 'Giá trị tuyệt đối', 'Giá trị tuyệt đối của −5/7 là:', '5/7', ['−5/7', '7/5', '−7/5'], '|−5/7| = 5/7.');
q('T1', 'So sánh', 'Điền dấu thích hợp: 3/(−8) … −2/5', '>', ['<', '=', 'Không so sánh được'], '3/(−8) = −15/40; −2/5 = −16/40. Vì −15 > −16 nên 3/(−8) > −2/5.');
q('T1', 'So sánh', 'Số hữu tỉ nào sau đây nằm giữa −1/3 và −1/4?', '−7/24', ['−9/24', '−5/24', '−1/24'], '−1/3 = −8/24; −1/4 = −6/24. Số −7/24 nằm giữa.');
q('T1', 'Tính nhanh', 'Tính nhanh: 5/7 · 3/11 + 5/7 · 8/11', '5/7', ['1', '11/7', '5/11'], 'Đặt thừa số chung: 5/7 · (3/11 + 8/11) = 5/7 · 1 = 5/7.');
q('T1', 'Phép tính', 'Kết quả của phép tính (−0,75) : 3/4 là:', '−1', ['1', '−9/16', '−3/16'], '−0,75 = −3/4; (−3/4) : (3/4) = −1.');
q('T1', 'Lí thuyết', 'Khẳng định nào sau đây là <b>đúng</b>?', 'Mọi số nguyên đều là số hữu tỉ', ['Mọi số hữu tỉ đều là số nguyên', 'Số 0 không phải là số hữu tỉ', 'Mọi số hữu tỉ đều viết được dưới dạng số thập phân hữu hạn'], 'Số nguyên a = a/1 nên là số hữu tỉ. 1/2 là số hữu tỉ nhưng không nguyên; 0 = 0/1 ∈ ℚ; 1/3 = 0,(3) là thập phân vô hạn.');
q('T1', 'Luỹ thừa', 'Giá trị của biểu thức A = (−1)<sup>2025</sup> + (−1)<sup>2024</sup> là:', '0', ['−2', '2', '1'], '(−1) mũ lẻ = −1, mũ chẵn = 1. A = −1 + 1 = 0.');
q('T1', 'Luỹ thừa', 'Tìm số tự nhiên n sao cho 3<sup>n</sup> · 3 = 81.', '3', ['4', '2', '27'], '3<sup>n+1</sup> = 3<sup>4</sup> ⇒ n + 1 = 4 ⇒ n = 3.');
q('T1', 'Phép tính', 'Kết quả của phép tính 7/12 : 5/6 là:', '7/10', ['35/72', '10/7', '7/2'], '7/12 · 6/5 = 42/60 = 7/10.');
q('T1', 'Thực tế', 'Một chiếc áo giá 250 000 đồng được giảm 1/5 giá. Giá áo sau khi giảm là:', '200 000 đồng', ['50 000 đồng', '225 000 đồng', '300 000 đồng'], 'Giảm 250 000 · 1/5 = 50 000 đồng. Giá còn 250 000 − 50 000 = 200 000 đồng.');
q('T1', 'Tính nhanh', 'Tính: 1/(1·2) + 1/(2·3) + 1/(3·4) + … + 1/(9·10)', '9/10', ['1/10', '1', '8/9'], 'Mỗi số hạng 1/(k(k+1)) = 1/k − 1/(k+1). Tổng = 1 − 1/10 = 9/10.');
q('T1', 'Tính nhanh', 'Tính A = 1 + 2 + 2<sup>2</sup> + 2<sup>3</sup> + … + 2<sup>9</sup>.', '1023', ['1024', '512', '511'], '2A = 2 + 2² + … + 2<sup>10</sup>; 2A − A = 2<sup>10</sup> − 1 = 1023.');
q('T1', 'Luỹ thừa', 'Tìm x biết (2x − 1)<sup>2</sup> = 25.', 'x = 3 hoặc x = −2', ['x = 3', 'x = −2', 'x = 3 hoặc x = 2'], '2x − 1 = 5 ⇒ x = 3; hoặc 2x − 1 = −5 ⇒ x = −2.');

/* ─────────────── T2 · SỐ THỰC – CĂN BẬC HAI – LÀM TRÒN ─────────────── */
q('T2', 'Căn bậc hai', 'Căn bậc hai số học của 49 là:', '7', ['±7', '−7', '24,5'], 'Căn bậc hai số học của a ≥ 0 là số x ≥ 0 sao cho x² = a. 7² = 49 nên √49 = 7.');
q('T2', 'Căn bậc hai', 'Căn bậc hai số học của 0,25 là:', '0,5', ['0,05', '0,625', '±0,5'], '0,5² = 0,25 nên √0,25 = 0,5.');
q('T2', 'Số vô tỉ', 'Số nào sau đây là số vô tỉ?', '√3', ['√9', '0,(12)', '−4/5'], '√3 = 1,7320… là số thập phân vô hạn không tuần hoàn. √9 = 3; 0,(12) = 12/99 là hữu tỉ.');
q('T2', 'Số thập phân', 'Số nào sau đây là số thập phân vô hạn <b>không</b> tuần hoàn?', '1,4142135…', ['0,(3)', '2,5', '0,1(23)'], '1,4142135… (= √2) không có chu kì. Các số còn lại là hữu hạn hoặc tuần hoàn.');
q('T2', 'Làm tròn', 'Làm tròn số 3,14159 đến hàng phần trăm ta được:', '3,14', ['3,1', '3,142', '3,15'], 'Chữ số hàng phần nghìn là 1 < 5 nên giữ nguyên: 3,14.');
q('T2', 'Làm tròn', 'Làm tròn số 2 567 đến hàng trăm ta được:', '2 600', ['2 500', '2 570', '3 000'], 'Chữ số hàng chục là 6 ≥ 5 nên làm tròn lên: 2 600.');
q('T2', 'Làm tròn', 'Làm tròn √10 với độ chính xác 0,05 (tức đến hàng phần mười) ta được:', '3,2', ['3,1', '3,16', '3'], '√10 ≈ 3,162… Chữ số hàng phần trăm là 6 ≥ 5 nên làm tròn lên 3,2.');
q('T2', 'Số thực', 'Tập hợp các số thực được kí hiệu là:', 'ℝ', ['ℚ', 'ℤ', 'ℕ'], 'ℝ gồm tất cả số hữu tỉ và số vô tỉ.');
q('T2', 'Số thực', 'Khẳng định nào sau đây là <b>đúng</b>?', 'Mỗi số thực được biểu diễn bởi đúng một điểm trên trục số', ['Mọi số thực đều là số hữu tỉ', 'Số vô tỉ viết được dưới dạng a/b với a, b nguyên', 'Căn bậc hai số học của 16 là −4'], 'Trục số thực: mỗi số thực ứng với một điểm. √2 là số thực nhưng không hữu tỉ; √16 = 4.');
q('T2', 'Căn bậc hai', 'Số nào sau đây <b>không</b> có căn bậc hai số học?', '−4', ['0', '4', '0,4'], 'Chỉ số không âm mới có căn bậc hai số học. −4 < 0.');
q('T2', 'So sánh', 'So sánh √15 và 4:', '√15 < 4', ['√15 > 4', '√15 = 4', 'Không so sánh được'], '4 = √16 mà 15 < 16 nên √15 < √16 = 4.');
q('T2', 'Tính toán', 'Giá trị của √81 − √16 là:', '5', ['√65', '13', '65'], '√81 = 9, √16 = 4 nên 9 − 4 = 5.');
q('T2', 'Tính toán', 'Giá trị của 2√25 + 3√4 là:', '16', ['22', '11', '5√29'], '2·5 + 3·2 = 10 + 6 = 16.');
q('T2', 'Căn bậc hai', 'Căn bậc hai số học của 5 là:', '√5', ['−√5', '2,5', '25'], 'Căn bậc hai số học của 5 là số không âm có bình phương bằng 5, kí hiệu √5.');
q('T2', 'Giá trị tuyệt đối', 'Giá trị của |−√2| là:', '√2', ['−√2', '2', '−2'], 'Giá trị tuyệt đối của số âm là số đối của nó: |−√2| = √2.');
q('T2', 'Giá trị tuyệt đối', 'Rút gọn |1 − √3| ta được:', '√3 − 1', ['1 − √3', '1 + √3', '−1 − √3'], 'Vì √3 > 1 nên 1 − √3 < 0, do đó |1 − √3| = √3 − 1.');
q('T2', 'Ước lượng', 'Số nguyên gần √50 nhất là:', '7', ['25', '8', '6'], '7² = 49 < 50 < 64 = 8², và 50 rất gần 49 nên √50 ≈ 7,07.');
q('T2', 'Ước lượng', '√120 nằm giữa hai số nguyên liên tiếp nào?', '10 và 11', ['11 và 12', '9 và 10', '59 và 61'], '10² = 100 < 120 < 121 = 11² nên 10 < √120 < 11.');
q('T2', 'Tính toán', 'Giá trị của √0,09 + √0,16 là:', '0,7', ['0,5', '0,25', '0,07'], '√0,09 = 0,3; √0,16 = 0,4. Tổng 0,7.');
q('T2', 'Số thập phân', 'Số 0,1(6) là:', 'Số thập phân vô hạn tuần hoàn', ['Số thập phân hữu hạn', 'Số thập phân vô hạn không tuần hoàn', 'Số vô tỉ'], '0,1(6) = 0,1666… có chu kì 6 nên là số thập phân vô hạn tuần hoàn (= 1/6).');
q('T2', 'Số thập phân', 'Viết 7/12 dưới dạng số thập phân ta được:', '0,58(3)', ['0,5(83)', '0,(583)', '0,583'], '7 : 12 = 0,58333… = 0,58(3).');
q('T2', 'So sánh', 'Sắp xếp các số −√2; −1,5; 0; √2 theo thứ tự tăng dần:', '−1,5; −√2; 0; √2', ['−√2; −1,5; 0; √2', '0; −1,5; −√2; √2', '−1,5; −√2; √2; 0'], '√2 ≈ 1,414 nên −1,5 < −1,414 < 0 < 1,414.');
q('T2', 'Tìm x', 'Tìm x biết √x = 6.', '36', ['3', '12', '√6'], 'x = 6² = 36.');
q('T2', 'Tìm x', 'Tìm x ≥ 0 biết x<sup>2</sup> = 0,64.', '0,8', ['0,32', '0,08', '8'], '0,8² = 0,64 và x ≥ 0 nên x = 0,8.');
q('T2', 'Thực tế', 'Một mảnh vườn hình vuông có diện tích 169 m². Độ dài cạnh mảnh vườn là:', '13 m', ['84,5 m', '42,25 m', '14 m'], 'Cạnh = √169 = 13 (m).');
q('T2', 'Làm tròn', 'Làm tròn số 9,995 đến hàng phần mười ta được:', '10,0', ['9,9', '9,99', '10,1'], 'Chữ số hàng phần trăm là 9 ≥ 5 nên 9,9 → 10,0.');
q('T2', 'Số thực', 'Trong các số 2/9; √7; π; 3,(5); √25 có bao nhiêu số hữu tỉ?', '3', ['2', '4', '1'], '2/9; 3,(5) = 32/9; √25 = 5 là hữu tỉ. √7 và π là vô tỉ.');
q('T2', 'Ước lượng', 'Ước lượng kết quả 4,98 · 6,03:', 'Khoảng 30', ['Khoảng 24', 'Khoảng 35', 'Khoảng 300'], '4,98 ≈ 5; 6,03 ≈ 6; 5 · 6 = 30.');
q('T2', 'Làm tròn', 'Làm tròn số 45 499 đến hàng nghìn ta được:', '45 000', ['46 000', '45 500', '50 000'], 'Chữ số hàng trăm là 4 < 5 nên giữ nguyên hàng nghìn: 45 000.');
q('T2', 'Tính toán', 'Giá trị của √(3<sup>2</sup> + 4<sup>2</sup>) là:', '5', ['7', '12', '25'], '3² + 4² = 9 + 16 = 25; √25 = 5.');
q('T2', 'Tìm x', 'Tìm x biết √(x + 1) = 3.', '8', ['2', '10', '9'], 'x + 1 = 9 ⇒ x = 8.');
q('T2', 'Tìm x', 'Có bao nhiêu số thực x thoả mãn (x − 2)<sup>2</sup> = 3?', '2', ['1', '0', 'Vô số'], 'x − 2 = √3 hoặc x − 2 = −√3, tức x = 2 + √3 hoặc x = 2 − √3.');
q('T2', 'Số thập phân', 'Số 2,(7) bằng phân số nào?', '25/9', ['27/10', '27/9', '7/9'], '0,(7) = 7/9 nên 2,(7) = 2 + 7/9 = 25/9.');

/* ─────────────── T3 · TỈ LỆ THỨC – ĐẠI LƯỢNG TỈ LỆ ─────────────── */
q('T3', 'Tỉ lệ thức', 'Từ đẳng thức 2 · 9 = 3 · 6 lập được tỉ lệ thức nào sau đây?', '2/3 = 6/9', ['2/6 = 9/3', '2/9 = 3/6', '3/2 = 6/9'], 'Từ ad = bc suy ra a/b = c/d: 2/3 = 6/9 (vì 2·9 = 3·6).');
q('T3', 'Tỉ lệ thức', 'Từ tỉ lệ thức a/b = c/d (a, b, c, d ≠ 0) suy ra đẳng thức nào?', 'ad = bc', ['ac = bd', 'ab = cd', 'a + d = b + c'], 'Tính chất cơ bản của tỉ lệ thức: tích ngoại tỉ bằng tích trung tỉ.');
q('T3', 'Tỉ lệ thức', 'Cặp tỉ số nào sau đây lập thành một tỉ lệ thức?', '3/5 và 9/15', ['2/3 và 4/9', '1/2 và 3/5', '4/7 và 8/21'], '3·15 = 45 = 5·9 nên 3/5 = 9/15.');
q('T3', 'Tỉ lệ thức', 'Tìm x biết x/6 = 5/3.', '10', ['2,5', '30', '9'], 'x = 6 · 5 : 3 = 10.');
q('T3', 'Tỉ lệ thức', 'Tìm x biết 2/x = 8/12.', '3', ['48', '4', '6'], 'x = 2 · 12 : 8 = 3.');
q('T3', 'Dãy tỉ số', 'Tìm x, y biết x/3 = y/5 và x + y = 24.', 'x = 9; y = 15', ['x = 15; y = 9', 'x = 8; y = 16', 'x = 6; y = 10'], 'x/3 = y/5 = (x + y)/(3 + 5) = 24/8 = 3. Vậy x = 9, y = 15.');
q('T3', 'Dãy tỉ số', 'Tìm x, y biết x/2 = y/7 và y − x = 15.', 'x = 6; y = 21', ['x = 4; y = 14', 'x = 5; y = 20', 'x = 10; y = 25'], 'x/2 = y/7 = (y − x)/(7 − 2) = 15/5 = 3. Vậy x = 6, y = 21.');
q('T3', 'Dãy tỉ số', 'Cho x/4 = y/5 = z/6 và x + y + z = 45. Giá trị của z là:', '18', ['12', '15', '20'], 'x/4 = y/5 = z/6 = 45/(4 + 5 + 6) = 3 nên z = 6 · 3 = 18.');
q('T3', 'Dãy tỉ số', 'Nếu a/b = c/d (b + d ≠ 0) thì a/b bằng:', '(a + c)/(b + d)', ['(a + c)/(b − d)', '(a · c)/(b · d)', '(a − c)/(b + d)'], 'Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d) = (a − c)/(b − d).');
q('T3', 'Tỉ lệ thuận', 'Nếu y tỉ lệ thuận với x theo hệ số tỉ lệ 3 thì x tỉ lệ thuận với y theo hệ số tỉ lệ:', '1/3', ['3', '−3', '−1/3'], 'y = 3x ⇒ x = (1/3)y.');
q('T3', 'Tỉ lệ thuận', 'Cho y tỉ lệ thuận với x. Khi x = 4 thì y = −12. Hệ số tỉ lệ của y đối với x là:', '−3', ['3', '−1/3', '−48'], 'k = y/x = −12/4 = −3.');
q('T3', 'Tỉ lệ nghịch', 'Cho x và y là hai đại lượng tỉ lệ nghịch. Khi x = 6 thì y = 5. Hệ số tỉ lệ là:', '30', ['11', '6/5', '1'], 'Tỉ lệ nghịch: xy = a ⇒ a = 6 · 5 = 30.');
q('T3', 'Nhận dạng', 'Bảng giá trị: x = 2; 3; 4 tương ứng y = 6; 9; 12. Kết luận nào đúng?', 'y tỉ lệ thuận với x theo hệ số 3', ['y tỉ lệ nghịch với x theo hệ số 12', 'y tỉ lệ thuận với x theo hệ số 1/3', 'x và y không tỉ lệ'], 'y/x = 6/2 = 9/3 = 12/4 = 3 không đổi.');
q('T3', 'Nhận dạng', 'Bảng giá trị: x = 2; 4; 8 tương ứng y = 12; 6; 3. Kết luận nào đúng?', 'y tỉ lệ nghịch với x theo hệ số 24', ['y tỉ lệ thuận với x theo hệ số 6', 'y tỉ lệ nghịch với x theo hệ số 12', 'y tỉ lệ thuận với x theo hệ số 3/2'], 'x·y = 2·12 = 4·6 = 8·3 = 24 không đổi.');
q('T3', 'Thực tế', 'Mua 5 quyển vở hết 40 000 đồng. Mua 8 quyển vở cùng loại hết bao nhiêu tiền?', '64 000 đồng', ['56 000 đồng', '72 000 đồng', '45 000 đồng'], 'Giá 1 quyển: 40 000 : 5 = 8 000 đồng. 8 quyển: 64 000 đồng.');
q('T3', 'Thực tế', '12 công nhân làm xong một công việc trong 10 ngày. Hỏi 15 công nhân (cùng năng suất) làm xong công việc đó trong bao nhiêu ngày?', '8 ngày', ['12,5 ngày', '13 ngày', '7 ngày'], 'Số công nhân và số ngày tỉ lệ nghịch: 12 · 10 = 15 · t ⇒ t = 8.');
q('T3', 'Thực tế', 'Ba lớp 7A, 7B, 7C góp được 120 quyển sách, số sách tỉ lệ với 3 : 4 : 5. Lớp 7C góp bao nhiêu quyển?', '50', ['30', '40', '60'], '120 : (3 + 4 + 5) = 10. Lớp 7C: 5 · 10 = 50 quyển.');
q('T3', 'Thực tế', 'Một xe đi từ A đến B với vận tốc 40 km/h hết 3 giờ. Nếu đi với vận tốc 60 km/h thì hết bao lâu?', '2 giờ', ['4,5 giờ', '4 giờ', '1,5 giờ'], 'Vận tốc và thời gian tỉ lệ nghịch: 40 · 3 = 60 · t ⇒ t = 2 giờ.');
q('T3', 'Tỉ lệ nghịch', 'Chia số 100 thành hai phần tỉ lệ nghịch với 2 và 3. Phần ứng với số 2 là:', '60', ['40', '50', '66'], 'Tỉ lệ nghịch với 2 và 3 nghĩa là tỉ lệ thuận với 1/2 : 1/3 = 3 : 2. Phần ứng với 2 là 100 · 3/5 = 60.');
q('T3', 'Tỉ lệ thức', 'Nếu a/b = c/d (b, d ≠ 0) thì khẳng định nào sau đây <b>đúng</b>?', '(a + b)/b = (c + d)/d', ['a/b = (a + c)/d', 'a + b = c + d', 'a · b = c · d'], 'a/b = c/d ⇒ a/b + 1 = c/d + 1 ⇒ (a + b)/b = (c + d)/d.');
q('T3', 'Dãy tỉ số', 'Có bao nhiêu cặp số (x; y) thoả mãn x/y = 3/4 và x · y = 48?', '2', ['1', '0', '4'], 'Đặt x = 3k, y = 4k ⇒ 12k² = 48 ⇒ k = ±2. Được (6; 8) và (−6; −8).');
q('T3', 'Dãy tỉ số', 'Cho x/3 = y/4 và x<sup>2</sup> + y<sup>2</sup> = 100. Giá trị của |x| + |y| là:', '14', ['10', '7', '28'], 'x = 3k, y = 4k ⇒ 25k² = 100 ⇒ k² = 4 ⇒ |x| = 6, |y| = 8. Tổng 14.');
q('T3', 'Dãy tỉ số', 'Cho x/2 = y/3 = z/4 và x − 2y + 3z = 20. Giá trị của x là:', '5', ['2,5', '10', '4'], 'Đặt x = 2k, y = 3k, z = 4k: 2k − 6k + 12k = 8k = 20 ⇒ k = 2,5 ⇒ x = 5.');
q('T3', 'Thực tế', 'Một tam giác có chu vi 36 cm và ba cạnh tỉ lệ với 3 : 4 : 5. Cạnh lớn nhất dài:', '15 cm', ['9 cm', '12 cm', '18 cm'], '36 : (3 + 4 + 5) = 3. Cạnh lớn nhất: 5 · 3 = 15 cm.');
q('T3', 'Thực tế', '6 máy cày (cùng năng suất) cày xong một cánh đồng trong 4 ngày. Hỏi 8 máy cày cày xong cánh đồng đó trong bao nhiêu ngày?', '3 ngày', ['5 ngày', '2 ngày', '6 ngày'], '6 · 4 = 8 · t ⇒ t = 3 ngày.');
q('T3', 'Tỉ lệ thuận', 'Cho y tỉ lệ thuận với x. Khi x = 2 thì y = 5. Khi x = 7 thì y bằng:', '17,5', ['10', '14', '20'], 'k = 5/2 = 2,5 ⇒ y = 2,5 · 7 = 17,5.');
q('T3', 'Tỉ lệ nghịch', 'Cho y tỉ lệ nghịch với x. Khi x = 4 thì y = 9. Khi y = 6 thì x bằng:', '6', ['13,5', '2,7', '24'], 'xy = 36 ⇒ x = 36 : 6 = 6.');
q('T3', 'Thực tế', 'Trong 100 g hạt đậu có 20 g chất đạm. Hỏi 350 g hạt đậu có bao nhiêu gam chất đạm?', '70 g', ['60 g', '75 g', '175 g'], '350 : 100 · 20 = 70 g.');
q('T3', 'Thực tế', 'Trên bản đồ tỉ lệ 1 : 500 000, hai địa điểm cách nhau 3 cm. Khoảng cách thực tế là:', '15 km', ['150 km', '1,5 km', '1 500 km'], '3 · 500 000 = 1 500 000 cm = 15 km.');
q('T3', 'Thực tế', 'Một tam giác có ba góc tỉ lệ với 1 : 2 : 3. Góc lớn nhất bằng:', '90°', ['60°', '30°', '120°'], '180° : (1 + 2 + 3) = 30°. Góc lớn nhất: 3 · 30° = 90°.');
q('T3', 'Thực tế', 'Số học sinh giỏi của ba lớp 7A, 7B, 7C tỉ lệ với 2 : 3 : 4. Lớp 7C nhiều hơn lớp 7A 8 học sinh giỏi. Số học sinh giỏi lớp 7B là:', '12', ['8', '16', '24'], 'Hiệu 4 − 2 = 2 phần ứng với 8 ⇒ 1 phần = 4. Lớp 7B: 3 · 4 = 12.');
q('T3', 'Tỉ lệ thức', 'Cho a/b = 2/3. Giá trị của (a + b)/b là:', '5/3', ['2/3', '5/2', '1'], '(a + b)/b = a/b + 1 = 2/3 + 1 = 5/3.');
q('T3', 'Tỉ lệ thức', 'Từ đẳng thức 4 · 15 = 5 · 12 lập được bao nhiêu tỉ lệ thức?', '4', ['2', '8', '1'], '4/5 = 12/15; 4/12 = 5/15; 15/5 = 12/4; 15/12 = 5/4.');
q('T3', 'Thực tế', 'Bác Hoà chia 2 400 000 đồng cho hai con tỉ lệ với 5 : 7. Người con nhận phần ít hơn được:', '1 000 000 đồng', ['1 400 000 đồng', '1 200 000 đồng', '480 000 đồng'], '2 400 000 : 12 = 200 000. Phần 5: 5 · 200 000 = 1 000 000 đồng.');
q('T3', 'Thực tế', 'Hình chữ nhật có chiều dài và chiều rộng tỉ lệ với 5 : 3, chu vi 64 cm. Diện tích hình chữ nhật là:', '240 cm²', ['160 cm²', '256 cm²', '120 cm²'], 'Dài + rộng = 32 = 8 phần ⇒ 1 phần = 4. Dài 20, rộng 12 ⇒ S = 240 cm².');
q('T3', 'Tỉ lệ nghịch', 'Nếu y tỉ lệ nghịch với x và x tỉ lệ nghịch với z thì y và z:', 'Tỉ lệ thuận với nhau', ['Tỉ lệ nghịch với nhau', 'Không có quan hệ tỉ lệ', 'Luôn bằng nhau'], 'y = a/x, x = b/z ⇒ y = (a/b)·z: y tỉ lệ thuận với z.');

/* ─────────────── T4 · BIỂU THỨC ĐẠI SỐ – ĐA THỨC ─────────────── */
q('T4', 'Biểu thức', 'Biểu thức đại số biểu thị "tổng của x và bình phương của y" là:', 'x + y<sup>2</sup>', ['(x + y)<sup>2</sup>', 'x<sup>2</sup> + y', '2(x + y)'], 'Bình phương của y là y², rồi cộng với x.');
q('T4', 'Biểu thức', 'Hình chữ nhật có chiều dài x (cm), chiều rộng kém chiều dài 3 cm. Biểu thức tính diện tích là:', 'x(x − 3)', ['2(x + x − 3)', 'x − 3', 'x<sup>2</sup> + 3x'], 'Chiều rộng x − 3; diện tích = dài · rộng = x(x − 3).');
q('T4', 'Giá trị', 'Giá trị của biểu thức 3x<sup>2</sup> − 2x + 1 tại x = −1 là:', '6', ['2', '0', '−4'], '3·(−1)² − 2·(−1) + 1 = 3 + 2 + 1 = 6.');
q('T4', 'Đa thức', 'Biểu thức nào sau đây là đa thức một biến?', '2x<sup>3</sup> − x + 1', ['2x<sup>2</sup>y − 1', '3/x + 2', '√x + 1'], 'Đa thức một biến chỉ gồm các đơn thức của một biến với số mũ tự nhiên.');
q('T4', 'Bậc', 'Bậc của đa thức 5x<sup>4</sup> − 3x<sup>2</sup> + 2x<sup>7</sup> − 1 là:', '7', ['4', '2', '5'], 'Bậc là số mũ lớn nhất của biến: 7.');
q('T4', 'Hệ số', 'Hệ số cao nhất của đa thức P(x) = −2x<sup>3</sup> + 5x<sup>5</sup> − x + 7 là:', '5', ['−2', '7', '−1'], 'Hệ số cao nhất là hệ số của hạng tử bậc cao nhất (x<sup>5</sup>): 5.');
q('T4', 'Hệ số', 'Hệ số tự do của đa thức P(x) = 4x<sup>2</sup> − 3x − 9 là:', '−9', ['4', '−3', '9'], 'Hệ số tự do là hạng tử không chứa biến: −9.');
q('T4', 'Thu gọn', 'Thu gọn đa thức 3x<sup>2</sup> − 5x + 2x<sup>2</sup> + x ta được:', '5x<sup>2</sup> − 4x', ['5x<sup>2</sup> + 4x', 'x<sup>2</sup> − 4x', '5x<sup>4</sup> − 4x<sup>2</sup>'], '(3 + 2)x² + (−5 + 1)x = 5x² − 4x.');
q('T4', 'Sắp xếp', 'Sắp xếp đa thức P(x) = 2x − 5x<sup>3</sup> + 4 + x<sup>2</sup> theo luỹ thừa giảm của biến:', '−5x<sup>3</sup> + x<sup>2</sup> + 2x + 4', ['4 + 2x + x<sup>2</sup> − 5x<sup>3</sup>', '2x − 5x<sup>3</sup> + x<sup>2</sup> + 4', '−5x<sup>3</sup> + 2x + x<sup>2</sup> + 4'], 'Xếp theo bậc 3, 2, 1, 0.');
q('T4', 'Bậc', 'Bậc của đa thức P(x) = 7 là:', '0', ['1', '7', 'Không có bậc'], 'Hằng số khác 0 là đa thức bậc 0.');
q('T4', 'Bậc', 'Đa thức không (P(x) = 0):', 'Không có bậc', ['Có bậc 0', 'Có bậc 1', 'Có bậc vô cùng lớn'], 'Theo quy ước, đa thức không không có bậc.');
q('T4', 'Nghiệm', 'x = 2 là nghiệm của đa thức nào sau đây?', 'x<sup>2</sup> − 4', ['x<sup>2</sup> + 4', 'x − 4', '2x + 4'], '2² − 4 = 0 nên x = 2 là nghiệm của x² − 4.');
q('T4', 'Nghiệm', 'Nghiệm của đa thức 3x + 6 là:', 'x = −2', ['x = 2', 'x = −1/2', 'x = 6'], '3x + 6 = 0 ⇒ x = −2.');
q('T4', 'Nghiệm', 'Đa thức x<sup>2</sup> + 1 có bao nhiêu nghiệm?', 'Không có nghiệm', ['1 nghiệm', '2 nghiệm', 'Vô số nghiệm'], 'x² ≥ 0 nên x² + 1 ≥ 1 > 0 với mọi x.');
q('T4', 'Nghiệm', 'Nghiệm của đa thức (x − 1)(x + 3) là:', 'x = 1 hoặc x = −3', ['x = −1 hoặc x = 3', 'x = 1', 'x = −3'], 'Tích bằng 0 khi x − 1 = 0 hoặc x + 3 = 0.');
q('T4', 'Nghiệm', 'Tổng các nghiệm của đa thức x<sup>2</sup> − 5x + 6 là:', '5', ['6', '−5', '1'], 'x² − 5x + 6 = (x − 2)(x − 3) có nghiệm 2 và 3, tổng bằng 5.');
q('T4', 'Cộng trừ', 'Kết quả của (2x<sup>2</sup> − 3x + 1) + (x<sup>2</sup> + 3x − 4) là:', '3x<sup>2</sup> − 3', ['3x<sup>2</sup> − 6x − 3', '3x<sup>2</sup> + 6x − 3', 'x<sup>2</sup> − 3'], '(2 + 1)x² + (−3 + 3)x + (1 − 4) = 3x² − 3.');
q('T4', 'Cộng trừ', 'Kết quả của (5x<sup>3</sup> − 2x + 4) − (3x<sup>3</sup> + x − 1) là:', '2x<sup>3</sup> − 3x + 5', ['2x<sup>3</sup> − x + 3', '2x<sup>3</sup> − 3x + 3', '8x<sup>3</sup> − x + 3'], 'Bỏ ngoặc đổi dấu: 5x³ − 2x + 4 − 3x³ − x + 1 = 2x³ − 3x + 5.');
q('T4', 'Nhân', 'Kết quả của 2x(3x<sup>2</sup> − x + 4) là:', '6x<sup>3</sup> − 2x<sup>2</sup> + 8x', ['6x<sup>3</sup> − 2x + 8x', '5x<sup>3</sup> − 2x<sup>2</sup> + 8x', '6x<sup>2</sup> − 2x + 8'], 'Nhân 2x với từng hạng tử: 6x³ − 2x² + 8x.');
q('T4', 'Nhân', 'Kết quả của (x + 2)(x − 3) là:', 'x<sup>2</sup> − x − 6', ['x<sup>2</sup> + x − 6', 'x<sup>2</sup> − 6', 'x<sup>2</sup> − 5x − 6'], 'x² − 3x + 2x − 6 = x² − x − 6.');
q('T4', 'Nhân', 'Kết quả của (x − 1)(x<sup>2</sup> + x + 1) là:', 'x<sup>3</sup> − 1', ['x<sup>3</sup> + 1', 'x<sup>3</sup> − 2x − 1', 'x<sup>3</sup> + 2x<sup>2</sup> − 1'], 'x³ + x² + x − x² − x − 1 = x³ − 1.');
q('T4', 'Chia', 'Kết quả của (6x<sup>3</sup> − 4x<sup>2</sup>) : 2x<sup>2</sup> là:', '3x − 2', ['3x<sup>2</sup> − 2', '3x − 2x', '4x − 2'], '6x³ : 2x² = 3x; −4x² : 2x² = −2.');
q('T4', 'Chia', 'Kết quả của (x<sup>2</sup> − 9) : (x + 3) là:', 'x − 3', ['x + 3', 'x − 9', 'x<sup>2</sup> − 3'], 'x² − 9 = (x − 3)(x + 3).');
q('T4', 'Chia', 'Kết quả của (x<sup>2</sup> + 5x + 6) : (x + 2) là:', 'x + 3', ['x + 2', 'x + 6', 'x − 3'], 'x² + 5x + 6 = (x + 2)(x + 3).');
q('T4', 'Bậc', 'Bậc của đa thức tích (2x<sup>2</sup> + 1)(x<sup>3</sup> − x) là:', '5', ['6', '2', '3'], 'Bậc của tích bằng tổng các bậc: 2 + 3 = 5.');
q('T4', 'Nghiệm', 'Đa thức P(x) = ax + 3 có nghiệm x = 1. Giá trị của a là:', '−3', ['3', '−1/3', '0'], 'P(1) = a + 3 = 0 ⇒ a = −3.');
q('T4', 'Chia', 'Số dư của phép chia (x<sup>2</sup> + 3x + 5) cho (x + 1) là:', '3', ['5', '2', '0'], 'x² + 3x + 5 = (x + 1)(x + 2) + 3, nên dư 3.');
q('T4', 'Cộng trừ', 'Cho P(x) = 2x<sup>2</sup> − x và Q(x) = x<sup>2</sup> + x − 2. Đa thức P(x) − Q(x) là:', 'x<sup>2</sup> − 2x + 2', ['x<sup>2</sup> − 2', '3x<sup>2</sup> − 2', 'x<sup>2</sup> − 2x − 2'], '2x² − x − x² − x + 2 = x² − 2x + 2.');
q('T4', 'Giá trị', 'Cho P(x) = x<sup>100</sup> − x<sup>99</sup> + x − 1. Giá trị P(1) là:', '0', ['2', '1', '−1'], 'P(1) = 1 − 1 + 1 − 1 = 0.');
q('T4', 'Nghiệm', 'Đa thức P(x) = x<sup>4</sup> + 2x<sup>2</sup> + 3 có bao nhiêu nghiệm?', '0', ['1', '2', '4'], 'x⁴ ≥ 0, x² ≥ 0 nên P(x) ≥ 3 > 0 với mọi x.');
q('T4', 'Biểu thức', 'Hình chữ nhật có chiều dài 2x + 1 và chiều rộng x. Chu vi hình chữ nhật là:', '6x + 2', ['3x + 1', '2x<sup>2</sup> + x', '6x + 1'], 'Chu vi = 2(2x + 1 + x) = 2(3x + 1) = 6x + 2.');
q('T4', 'Biểu thức', 'Mẹ hơn con 25 tuổi. Nếu hiện nay con x tuổi thì sau 3 năm tổng số tuổi của hai mẹ con là:', '2x + 31', ['2x + 25', '2x + 28', '2x + 3'], 'Sau 3 năm: con x + 3, mẹ x + 28. Tổng 2x + 31.');
q('T4', 'Giá trị', 'Biểu thức x<sup>2</sup> + 1:', 'Luôn dương với mọi x', ['Luôn âm với mọi x', 'Có nghiệm x = −1', 'Bằng 0 khi x = 1'], 'x² ≥ 0 nên x² + 1 ≥ 1 > 0.');
q('T4', 'Bậc', 'Đơn thức một biến nào sau đây có bậc 3?', '5x<sup>3</sup>', ['3x', 'x<sup>5</sup>', '3'], 'Bậc của đơn thức là số mũ của biến: 5x³ có bậc 3.');
q('T4', 'Nhân', 'Hệ số của x<sup>2</sup> trong khai triển (x + 1)(x + 2)(x + 3) là:', '6', ['11', '3', '1'], '(x + 1)(x + 2)(x + 3) = x³ + 6x² + 11x + 6.');
q('T4', 'Chia', 'Tìm a để đa thức x<sup>2</sup> − 3x + a chia hết cho x − 2.', 'a = 2', ['a = −2', 'a = 1', 'a = 6'], 'Chia hết ⇔ P(2) = 0 ⇔ 4 − 6 + a = 0 ⇔ a = 2.');
q('T4', 'Nghiệm', 'Đa thức (x<sup>2</sup> − 1)(x<sup>2</sup> − 4) có bao nhiêu nghiệm?', '4', ['2', '1', '0'], 'Nghiệm: x = ±1 và x = ±2.');
q('T4', 'Giá trị', 'Giá trị nhỏ nhất của biểu thức (x − 3)<sup>2</sup> + 5 là:', '5', ['3', '8', '0'], '(x − 3)² ≥ 0 nên biểu thức ≥ 5; dấu bằng khi x = 3.');

/* ─────────────── T5 · GÓC – ĐƯỜNG THẲNG SONG SONG ─────────────── */
q('T5', 'Góc kề bù', 'Hai góc kề bù có tổng số đo bằng:', '180°', ['90°', '360°', '120°'], 'Hai góc kề bù là hai góc kề nhau có hai cạnh ngoài là hai tia đối nhau, tổng bằng 180°.');
q('T5', 'Góc đối đỉnh', 'Hai góc đối đỉnh thì:', 'Bằng nhau', ['Bù nhau', 'Phụ nhau', 'Có tổng bằng 90°'], 'Tính chất: hai góc đối đỉnh thì bằng nhau.');
q('T5', 'Tia phân giác', 'Cho ∠xOy = 70°, tia Oz là tia phân giác của ∠xOy. Số đo ∠xOz là:', '35°', ['70°', '140°', '20°'], 'Tia phân giác chia góc thành hai góc bằng nhau: 70° : 2 = 35°.');
q('T5', 'Góc kề bù', 'Hai góc kề bù, một góc có số đo 35°. Góc còn lại có số đo:', '145°', ['55°', '35°', '325°'], '180° − 35° = 145°.');
q('T5', 'Góc đối đỉnh', 'Hai đường thẳng cắt nhau tạo thành bốn góc, trong đó có một góc 40°. Góc đối đỉnh với góc đó bằng:', '40°', ['140°', '50°', '80°'], 'Hai góc đối đỉnh thì bằng nhau.');
q('T5', 'Góc kề bù', 'Hai đường thẳng cắt nhau tạo thành bốn góc, một góc bằng 60°. Tổng hai góc kề bù với góc đó bằng:', '240°', ['120°', '300°', '180°'], 'Mỗi góc kề bù với góc 60° bằng 120°; tổng 240°.');
q('T5', 'Góc kề bù', 'Cho ∠xOy = 120°, tia Ox′ là tia đối của tia Ox. Số đo ∠x′Oy là:', '60°', ['120°', '240°', '30°'], '∠xOy và ∠x′Oy kề bù: 180° − 120° = 60°.');
q('T5', 'Vuông góc', 'Hai đường thẳng vuông góc với nhau tạo thành bao nhiêu góc vuông?', '4', ['1', '2', '3'], 'Một góc vuông thì góc đối đỉnh và hai góc kề bù cũng vuông: cả 4 góc đều vuông.');
q('T5', 'Tiên đề Euclid', 'Qua một điểm nằm ngoài một đường thẳng, có bao nhiêu đường thẳng song song với đường thẳng đó?', 'Đúng một', ['Hai', 'Vô số', 'Không có'], 'Tiên đề Euclid về đường thẳng song song.');
q('T5', 'Dấu hiệu', 'Đường thẳng c cắt hai đường thẳng a, b. Dấu hiệu nào cho biết a ∥ b?', 'Một cặp góc so le trong bằng nhau', ['Một cặp góc trong cùng phía bằng nhau', 'Một cặp góc kề bù bằng nhau', 'Một cặp góc đối đỉnh bằng nhau'], 'Dấu hiệu: cặp góc so le trong bằng nhau, hoặc cặp góc đồng vị bằng nhau, hoặc cặp góc trong cùng phía bù nhau.');
q('T5', 'Song song', 'Cho a ∥ b, đường thẳng c cắt a và b. Một góc so le trong bằng 55°, góc so le trong với nó bằng:', '55°', ['125°', '35°', '145°'], 'Hai đường thẳng song song thì các góc so le trong bằng nhau.');
q('T5', 'Song song', 'Cho a ∥ b, đường thẳng c cắt a và b. Hai góc trong cùng phía có một góc bằng 110°, góc còn lại bằng:', '70°', ['110°', '20°', '250°'], 'Hai góc trong cùng phía bù nhau: 180° − 110° = 70°.');
q('T5', 'Song song', 'Cho a ∥ b, một góc đồng vị bằng 65°. Góc đồng vị với nó bằng:', '65°', ['115°', '25°', '130°'], 'Hai đường thẳng song song thì các góc đồng vị bằng nhau.');
q('T5', 'Song song', 'Nếu a ⊥ c và b ⊥ c thì:', 'a ∥ b', ['a ⊥ b', 'a cắt b', 'a trùng b'], 'Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song với nhau.');
q('T5', 'Song song', 'Nếu a ∥ b và b ∥ c (a, b, c phân biệt) thì:', 'a ∥ c', ['a ⊥ c', 'a cắt c', 'Không kết luận được'], 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.');
q('T5', 'Song song', 'Nếu a ∥ b và c ⊥ a thì:', 'c ⊥ b', ['c ∥ b', 'c cắt b nhưng không vuông góc', 'Không kết luận được'], 'Một đường thẳng vuông góc với một trong hai đường thẳng song song thì vuông góc với đường thẳng còn lại.');
q('T5', 'Định lí', 'Một định lí gồm hai phần là:', 'Giả thiết và kết luận', ['Tiên đề và định nghĩa', 'Câu hỏi và trả lời', 'Hình vẽ và lời giải'], 'Định lí: "Nếu (giả thiết) thì (kết luận)".');
q('T5', 'Định lí', 'Trong định lí "Hai góc đối đỉnh thì bằng nhau", giả thiết là:', 'Hai góc đối đỉnh', ['Hai góc bằng nhau', 'Hai góc kề bù', 'Hai đường thẳng song song'], 'Giả thiết là điều đã cho: hai góc đối đỉnh; kết luận: chúng bằng nhau.');
q('T5', 'Tia phân giác', 'Góc tạo bởi hai tia phân giác của hai góc kề bù bằng:', '90°', ['180°', '45°', '60°'], 'Nửa của tổng hai góc kề bù: 180° : 2 = 90°.');
q('T5', 'Tính góc', 'Cho ∠xOy = 40°, ∠yOz = 50°, tia Oy nằm giữa hai tia Ox và Oz. Số đo ∠xOz là:', '90°', ['10°', '45°', '80°'], '∠xOz = ∠xOy + ∠yOz = 40° + 50° = 90°.');
q('T5', 'Góc phụ', 'Hai góc có tổng số đo bằng 90° gọi là:', 'Hai góc phụ nhau', ['Hai góc bù nhau', 'Hai góc kề bù', 'Hai góc đối đỉnh'], 'Định nghĩa hai góc phụ nhau.');
q('T5', 'Góc phụ', 'Góc phụ với góc 37° có số đo:', '53°', ['143°', '63°', '47°'], '90° − 37° = 53°.');
q('T5', 'Góc so le', 'Một đường thẳng cắt hai đường thẳng khác tạo thành bao nhiêu cặp góc so le trong?', '2', ['4', '1', '8'], 'Có 2 cặp góc so le trong, 2 cặp góc trong cùng phía và 4 cặp góc đồng vị.');
q('T5', 'Tính góc', 'Cho a ∥ b, đường thẳng c cắt a tại A, cắt b tại B. Hai góc trong cùng phía ∠A và ∠B có ∠A = 2∠B. Số đo góc lớn hơn là:', '120°', ['60°', '90°', '135°'], '∠A + ∠B = 180° và ∠A = 2∠B ⇒ 3∠B = 180° ⇒ ∠B = 60°, ∠A = 120°.');
q('T5', 'Tính góc', 'Hai góc kề bù, góc này bằng 3/2 góc kia. Số đo góc lớn hơn là:', '108°', ['72°', '120°', '60°'], 'Gọi góc nhỏ là y: y + 3y/2 = 180° ⇒ 5y/2 = 180° ⇒ y = 72°, góc lớn 108°.');
q('T5', 'Góc đối đỉnh', 'Hai góc đối đỉnh có tổng số đo bằng 100°. Mỗi góc có số đo:', '50°', ['100°', '80°', '40°'], 'Hai góc đối đỉnh bằng nhau nên mỗi góc bằng 100° : 2 = 50°.');
q('T5', 'Lí thuyết', 'Khẳng định nào sau đây là <b>sai</b>?', 'Hai góc bằng nhau thì đối đỉnh', ['Hai góc đối đỉnh thì bằng nhau', 'Hai góc kề bù có tổng số đo 180°', 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau'], 'Hai góc bằng nhau chưa chắc đối đỉnh (ví dụ hai góc vuông ở hai vị trí bất kì).');
q('T5', 'Vuông góc', 'Cho a ∥ b và c ⊥ a. Góc tạo bởi c và b bằng:', '90°', ['0°', '180°', '45°'], 'c ⊥ a và a ∥ b ⇒ c ⊥ b.');
q('T5', 'Tính góc', 'Cho ∠AOB = 90°, tia OC nằm trong góc AOB sao cho ∠AOC = 2∠COB. Số đo ∠COB là:', '30°', ['60°', '45°', '20°'], '∠AOC + ∠COB = 90° ⇒ 3∠COB = 90° ⇒ ∠COB = 30°.');
q('T5', 'Dấu hiệu', 'Để chứng minh a ∥ b khi đường thẳng c cắt a, b, ta có thể chỉ ra:', 'Một cặp góc trong cùng phía bù nhau', ['Một cặp góc trong cùng phía bằng nhau', 'Một cặp góc so le trong bù nhau', 'Một cặp góc đồng vị bù nhau'], 'Dấu hiệu nhận biết: cặp góc trong cùng phía bù nhau (tổng 180°).');
q('T5', 'Dấu hiệu', 'Đường thẳng d cắt hai đường thẳng a, b. Một cặp góc so le trong có số đo 70° và 110°. Kết luận:', 'a và b không song song', ['a ∥ b', 'a ⊥ b', 'a trùng b'], 'Nếu a ∥ b thì hai góc so le trong phải bằng nhau; 70° ≠ 110°.');
q('T5', 'Tính góc', 'Hai góc kề bù có số đo tỉ lệ với 2 : 7. Số đo góc nhỏ hơn là:', '40°', ['140°', '20°', '70°'], '180° : 9 = 20°. Góc nhỏ: 2 · 20° = 40°.');
q('T5', 'Tính góc', 'Cho a ∥ b, đường thẳng c tạo với a một góc nhọn 45°. Góc tù tạo bởi c và b có số đo:', '135°', ['45°', '90°', '225°'], 'Góc nhọn giữa c và b cũng bằng 45° (đồng vị), góc tù kề bù với nó: 180° − 45° = 135°.');
q('T5', 'Góc đối đỉnh', 'Ba đường thẳng phân biệt cùng đi qua điểm O tạo thành bao nhiêu cặp góc đối đỉnh (không kể góc bẹt)?', '6', ['3', '4', '12'], 'Mỗi cặp đường thẳng tạo 2 cặp góc đối đỉnh; có 3 cặp đường thẳng nên có 3 · 2 = 6.');
q('T5', 'Góc', 'Góc bẹt có số đo bằng:', '180°', ['90°', '360°', '0°'], 'Góc bẹt có hai cạnh là hai tia đối nhau, số đo 180°.');
q('T5', 'Tia phân giác', 'Tia Oz là tia phân giác của ∠xOy và ∠xOz = 32°. Số đo ∠xOy là:', '64°', ['32°', '16°', '148°'], '∠xOy = 2 · ∠xOz = 64°.');
q('T5', 'Lí thuyết', 'Khẳng định nào sau đây là <b>đúng</b>?', 'Nếu hai đường thẳng cắt nhau tạo thành một góc vuông thì các góc còn lại đều vuông', ['Hai góc kề nhau thì bù nhau', 'Hai góc bù nhau thì kề bù', 'Hai đường thẳng vuông góc với nhau thì song song'], 'Một góc vuông thì góc đối đỉnh và hai góc kề bù với nó cũng vuông.');
