/* ============================================================================
   gen-thcs-toan9.mjs — sinh bộ "TOÁN LỚP 9" (GDPT 2018, SGK Kết nối tri thức).

   Chạy:  node tools/gen-thcs-toan9.mjs
   Xuất:  web/data-toan9.js   (100 đề × 10 câu = 1000 câu, id 23001–23100)

   Mức độ: HSG cấp trường / cấp huyện, hướng ôn thi vào lớp 10 (không bê đề
   olympic quốc tế). Khoảng 25% câu vận dụng cao (Viète, rút gọn căn phức,
   cực trị đơn giản, đường tròn tổng hợp).

   Cấu tạo: ≥ 300 câu VIẾT TAY (mảng BANK) + phần còn lại sinh từ các HỌ CÂU
   tham số hoá (mảng FAM) — đáp án tính bằng code, nhiễu mô phỏng lỗi hay gặp.
   Script tự kiểm tra (số đề/câu, 4 phương án khác nhau, không trùng text,
   phân bố A/B/C/D) rồi mới ghi file.
   ========================================================================== */
'use strict';

import fs from 'fs';

/* ─────────────────────────── RNG có hạt giống ─────────────────────────── */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const R = mulberry32(20260916);
const ri = (min, max) => min + Math.floor(R() * (max - min + 1));
const pick = (arr) => arr[Math.floor(R() * arr.length)];
const nz = (min, max) => { let v = 0; while (v === 0) v = ri(min, max); return v; };
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ─────────────────────────── Định dạng toán ─────────────────────────── */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const fmtN = (n) => (n < 0 ? '−' + String(-n).replace('.', ',') : String(n).replace('.', ','));
const dec = fmtN;
function frac(n, d = 1) {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1; n /= g; d /= g;
  if (d === 1) return fmtN(n);
  return (n < 0 ? '−' : '') + Math.abs(n) + '/' + d;
}
const pr = (x, y) => `(${fmtN(x)}; ${fmtN(y)})`;
const set = (...xs) => '{' + xs.join('; ') + '}';
const X2 = 'x<sup>2</sup>';
function term(coef, v, first) {
  const a = Math.abs(coef);
  const body = (a === 1 && v) ? v : (v ? a + v : String(a));
  if (first) return (coef < 0 ? '−' : '') + body;
  return (coef < 0 ? ' − ' : ' + ') + body;
}
function quad(a, b, c) { let s = term(a, X2, true); if (b) s += term(b, 'x'); if (c) s += term(c, ''); return s + ' = 0'; }
function lin(a, b, c) { let s = a ? term(a, 'x', true) : ''; if (b) s += (s ? term(b, 'y') : term(b, 'y', true)); return s + ' = ' + fmtN(c); }
function linx(a, b) { let s = term(a, 'x', true); if (b) s += term(b, ''); return s; }
function isSq(n) { const r = Math.round(Math.sqrt(n)); return r * r === n; }
function simpSqrt(n) { let k = 1, m = n; for (let p = 2; p * p <= m; p++) while (m % (p * p) === 0) { m /= p * p; k *= p; } return [k, m]; }
function rt(n) { return isSq(n) ? String(Math.round(Math.sqrt(n))) : '√' + n; }
function kr(k, m) { // k√m
  if (k === 0) return '0';
  if (m === 1) return fmtN(k);
  if (k === 1) return '√' + m;
  if (k === -1) return '−√' + m;
  return fmtN(k) + '√' + m;
}
function piStr(num, den = 1) { // (num/den)π
  if (den < 0) { num = -num; den = -den; }
  const g = gcd(num, den) || 1; num /= g; den /= g;
  const sgn = num < 0 ? '−' : ''; num = Math.abs(num);
  if (den === 1) return sgn + (num === 1 ? 'π' : num + 'π');
  return sgn + (num === 1 ? 'π' : num + 'π') + '/' + den;
}
const deg = (n) => fmtN(n) + '°';
const C2 = (n) => n * (n - 1) / 2;

/* ═══════════════════════════ CHUYÊN ĐỀ ═══════════════════════════ */
const TOPICS = {
  T1: { name: 'Hệ hai phương trình bậc nhất hai ẩn', exams: 12 },
  T2: { name: 'Phương trình quy về bậc nhất', exams: 6 },
  T3: { name: 'Bất đẳng thức – bất phương trình', exams: 7 },
  T4: { name: 'Căn bậc hai – căn bậc ba', exams: 12 },
  T5: { name: 'Hàm số y = ax² và đồ thị', exams: 6 },
  T6: { name: 'Phương trình bậc hai – định lí Viète', exams: 14 },
  T7: { name: 'Hệ thức lượng trong tam giác vuông', exams: 8 },
  T8: { name: 'Đường tròn', exams: 14 },
  T9: { name: 'Hình trụ – hình nón – hình cầu', exams: 6 },
  T10: { name: 'Thống kê', exams: 4 },
  T11: { name: 'Xác suất', exams: 5 },
  T12: { name: 'Ôn tổng hợp', exams: 6 },
};

/* ═══════════════════════════ CÂU VIẾT TAY ═══════════════════════════ */
const BANK = [];
const H = (topic, sec, text, c, d, why) => BANK.push({ topic, sec, text, c: String(c), d: d.map(String), why, hand: true });

/* ---------- T1: Hệ phương trình ---------- */
H('T1', 'Phương trình bậc nhất hai ẩn', 'Phương trình bậc nhất hai ẩn ax + by = c (a, b không đồng thời bằng 0) có bao nhiêu nghiệm?', 'Vô số nghiệm', ['Đúng một nghiệm', 'Đúng hai nghiệm', 'Vô nghiệm'], 'Mỗi giá trị của x cho tương ứng một giá trị của y nên phương trình có vô số nghiệm; tập nghiệm biểu diễn bởi một đường thẳng.');
H('T1', 'Nghiệm của phương trình', 'Cặp số nào sau đây là nghiệm của phương trình 2x − y = 3?', '(2; 1)', ['(1; 2)', '(0; 3)', '(3; 2)'], 'Thay x = 2, y = 1: 2·2 − 1 = 3 (đúng). Các cặp còn lại cho 0; −3; 4 (khác 3).');
H('T1', 'Giải hệ', 'Nghiệm của hệ phương trình x + y = 5 và x − y = 1 là:', '(3; 2)', ['(2; 3)', '(4; 1)', '(1; 4)'], 'Cộng hai phương trình: 2x = 6 ⇒ x = 3; suy ra y = 2.');
H('T1', 'Giải hệ', 'Hệ phương trình 2x + y = 7 và x − y = −1 có nghiệm (x; y) là:', '(2; 3)', ['(3; 2)', '(2; −3)', '(−2; 3)'], 'Cộng hai phương trình: 3x = 6 ⇒ x = 2; thay vào x − y = −1 được y = 3.');
H('T1', 'Số nghiệm của hệ', 'Hệ phương trình x + 2y = 4 và 2x + 4y = 5 có bao nhiêu nghiệm?', 'Vô nghiệm', ['Một nghiệm duy nhất', 'Hai nghiệm', 'Vô số nghiệm'], 'Nhân phương trình thứ nhất với 2 được 2x + 4y = 8 ≠ 5: hai đường thẳng song song nên hệ vô nghiệm.');
H('T1', 'Số nghiệm của hệ', 'Hệ phương trình x − y = 2 và 3x − 3y = 6 có bao nhiêu nghiệm?', 'Vô số nghiệm', ['Vô nghiệm', 'Một nghiệm duy nhất', 'Hai nghiệm'], 'Phương trình thứ hai chính là phương trình thứ nhất nhân 3: hai đường thẳng trùng nhau nên hệ có vô số nghiệm.');
H('T1', 'Đường thẳng', 'Đường thẳng 3x − 2y = 6 cắt trục tung tại điểm có tung độ bằng:', '−3', ['3', '2', '−2'], 'Trên trục tung x = 0 ⇒ −2y = 6 ⇒ y = −3.');
H('T1', 'Tham số', 'Với giá trị nào của m thì cặp số (1; −2) là nghiệm của phương trình mx + 3y = −4?', '2', ['−2', '10', '−10'], 'Thay x = 1, y = −2: m − 6 = −4 ⇒ m = 2.');
H('T1', 'Giải hệ', 'Hệ phương trình x + y = 10 và x = 4y có nghiệm là:', '(8; 2)', ['(2; 8)', '(6; 4)', '(4; 6)'], 'Thế x = 4y vào phương trình đầu: 5y = 10 ⇒ y = 2, x = 8.');
H('T1', 'Bài toán lập hệ', 'Tổng của hai số là 50, hiệu của chúng là 12. Số lớn là:', '31', ['19', '38', '62'], 'Gọi hai số là x > y: x + y = 50, x − y = 12 ⇒ 2x = 62 ⇒ x = 31.');
H('T1', 'Bài toán lập hệ', 'Hai số có tổng bằng 72 và số lớn gấp 3 lần số bé. Số bé là:', '18', ['54', '24', '36'], 'x + y = 72, x = 3y ⇒ 4y = 72 ⇒ y = 18.');
H('T1', 'Bài toán lập hệ', 'Một số có hai chữ số, tổng hai chữ số bằng 9. Nếu đổi chỗ hai chữ số thì được số mới nhỏ hơn số ban đầu 27 đơn vị. Số ban đầu là:', '63', ['36', '72', '54'], 'Gọi số là ab: a + b = 9 và (10a + b) − (10b + a) = 9(a − b) = 27 ⇒ a − b = 3 ⇒ a = 6, b = 3. Số cần tìm là 63.');
H('T1', 'Bài toán chuyển động', 'Hai xe khởi hành cùng lúc từ A và B cách nhau 180 km, đi ngược chiều và gặp nhau sau 2 giờ. Xe đi từ A nhanh hơn xe đi từ B 10 km/h. Vận tốc xe đi từ A là:', '50 km/h', ['40 km/h', '45 km/h', '55 km/h'], 'Tổng vận tốc = 180 : 2 = 90 km/h; hiệu = 10 km/h ⇒ xe A: (90 + 10) : 2 = 50 km/h.');
H('T1', 'Xác định đường thẳng', 'Đường thẳng y = ax + b đi qua hai điểm A(1; 3) và B(−1; −1). Khi đó:', 'a = 2, b = 1', ['a = 1, b = 2', 'a = −2, b = 1', 'a = 2, b = −1'], 'Ta có hệ a + b = 3 và −a + b = −1 ⇒ 2b = 2 ⇒ b = 1, a = 2.');
H('T1', 'Tham số', 'Hệ phương trình 2x − 3y = 1 và 4x − 6y = m có vô số nghiệm khi m bằng:', '2', ['1', '−2', '4'], 'Nhân phương trình đầu với 2 được 4x − 6y = 2. Hệ có vô số nghiệm khi hai phương trình trùng nhau: m = 2.');
H('T1', 'Tham số', 'Hệ phương trình x + my = 2 và 2x + 4y = 3 vô nghiệm khi m bằng:', '2', ['−2', '4', '1'], 'Hệ vô nghiệm khi 1/2 = m/4 ≠ 2/3 ⇒ m = 2.');
H('T1', 'Giải hệ', 'Nghiệm của hệ phương trình 3x + 2y = 16 và x − 2y = 0 là:', '(4; 2)', ['(2; 4)', '(4; −2)', '(−4; 2)'], 'Cộng hai phương trình: 4x = 16 ⇒ x = 4; từ x − 2y = 0 ⇒ y = 2.');
H('T1', 'Bài toán lập hệ', 'Một mảnh vườn hình chữ nhật có chu vi 56 m, chiều dài hơn chiều rộng 8 m. Diện tích mảnh vườn là:', '180 m<sup>2</sup>', ['160 m<sup>2</sup>', '196 m<sup>2</sup>', '200 m<sup>2</sup>'], 'Nửa chu vi 28 m: d + r = 28, d − r = 8 ⇒ d = 18, r = 10 ⇒ S = 18 × 10 = 180 m².');
H('T1', 'Bài toán lập hệ', 'Lớp 9A có 40 học sinh, số học sinh nữ nhiều hơn số học sinh nam là 6. Số học sinh nữ là:', '23', ['17', '20', '26'], 'nữ + nam = 40, nữ − nam = 6 ⇒ nữ = (40 + 6) : 2 = 23.');
H('T1', 'Bài toán lập hệ', 'Mua 3 cái bút và 2 quyển vở hết 29 nghìn đồng; mua 2 cái bút và 3 quyển vở hết 31 nghìn đồng. Giá một quyển vở là:', '7 nghìn đồng', ['5 nghìn đồng', '6 nghìn đồng', '8 nghìn đồng'], '3b + 2v = 29 và 2b + 3v = 31. Cộng: 5(b + v) = 60 ⇒ b + v = 12; trừ: v − b = 2 ⇒ v = 7, b = 5.');
H('T1', 'Bài toán chuyển động', 'Một ca nô xuôi dòng 60 km hết 2 giờ và ngược dòng 60 km hết 3 giờ. Vận tốc của dòng nước là:', '5 km/h', ['10 km/h', '25 km/h', '4 km/h'], 'Vận tốc xuôi 30 km/h = v + w, ngược 20 km/h = v − w ⇒ w = (30 − 20) : 2 = 5 km/h.');
H('T1', 'Giải hệ', 'Nghiệm của hệ phương trình x/2 + y/4 = 3 và x + y = 8 là:', '(4; 4)', ['(2; 6)', '(6; 2)', '(8; 0)'], 'Nhân phương trình đầu với 4: 2x + y = 12. Trừ phương trình x + y = 8 được x = 4 ⇒ y = 4.');
H('T1', 'Giải hệ', 'Nghiệm của hệ 3(x − 1) + 2y = 7 và x + 2(y + 1) = 8 là:', '(2; 2)', ['(2; −2)', '(1; 3)', '(4; 1)'], 'Rút gọn: 3x + 2y = 10 và x + 2y = 6. Trừ hai phương trình: 2x = 4 ⇒ x = 2, y = 2.');
H('T1', 'Đặt ẩn phụ', 'Hệ phương trình 1/x + 1/y = 5/6 và 1/x − 1/y = 1/6 có nghiệm (x; y) là:', '(2; 3)', ['(3; 2)', '(1; 6)', '(6; 1)'], 'Cộng hai phương trình: 2/x = 1 ⇒ x = 2; khi đó 1/y = 5/6 − 1/2 = 1/3 ⇒ y = 3.');
H('T1', 'Bài toán năng suất', 'Hai vòi nước cùng chảy vào một bể cạn thì đầy sau 6 giờ. Nếu vòi thứ nhất chảy 2 giờ rồi vòi thứ hai chảy 3 giờ thì được 2/5 bể. Thời gian vòi thứ nhất chảy một mình đầy bể là:', '10 giờ', ['15 giờ', '12 giờ', '8 giờ'], 'Gọi u, v là phần bể mỗi vòi chảy trong 1 giờ: u + v = 1/6; 2u + 3v = 2/5. Suy ra v = 2/5 − 1/3 = 1/15, u = 1/6 − 1/15 = 1/10 ⇒ vòi 1 chảy một mình 10 giờ.');
H('T1', 'Bài toán tuổi', 'Hiện nay tuổi cha gấp 3 lần tuổi con. Sau 12 năm nữa tuổi cha chỉ gấp 2 lần tuổi con. Tuổi con hiện nay là:', '12', ['8', '10', '15'], 'Gọi tuổi con là x, tuổi cha 3x: 3x + 12 = 2(x + 12) ⇒ x = 12.');
H('T1', 'Giao điểm hai đường thẳng', 'Hai đường thẳng y = 2x − 1 và y = −x + 8 cắt nhau tại điểm có tọa độ:', '(3; 5)', ['(5; 3)', '(3; −5)', '(2; 3)'], 'Hoành độ giao điểm: 2x − 1 = −x + 8 ⇒ x = 3 ⇒ y = 5.');
H('T1', 'Lý thuyết', 'Khẳng định nào sau đây đúng về hệ hai phương trình bậc nhất hai ẩn?', 'Hệ có thể vô nghiệm, có nghiệm duy nhất hoặc có vô số nghiệm', ['Hệ luôn có nghiệm duy nhất', 'Hệ luôn có nghiệm', 'Hệ không thể có vô số nghiệm'], 'Tuỳ vị trí tương đối của hai đường thẳng (cắt, song song, trùng) mà hệ có nghiệm duy nhất, vô nghiệm hoặc vô số nghiệm.');
H('T1', 'Bài toán lập hệ', 'Một sân trường hình chữ nhật có chiều dài gấp đôi chiều rộng. Nếu tăng chiều rộng thêm 10 m và giảm chiều dài 10 m thì được hình vuông. Chiều dài sân trường là:', '40 m', ['20 m', '30 m', '60 m'], 'd = 2r và d − 10 = r + 10 ⇒ 2r − 10 = r + 10 ⇒ r = 20, d = 40 m.');
H('T1', 'Đường thẳng', 'Đường thẳng 2x + 3y = 12 cắt hai trục tọa độ tại A (trên Ox) và B (trên Oy). Diện tích tam giác OAB là:', '12', ['6', '24', '10'], 'A(6; 0), B(0; 4) ⇒ S = (6 × 4) : 2 = 12.');

/* ---------- T2: Phương trình quy về bậc nhất ---------- */
H('T2', 'Phương trình tích', 'Tập nghiệm của phương trình (x − 3)(2x + 5) = 0 là:', set(3, '−5/2'), [set(3, '5/2'), set(-3, '−5/2'), set(-3, '5/2')], 'x − 3 = 0 ⇒ x = 3; 2x + 5 = 0 ⇒ x = −5/2.');
H('T2', 'Phương trình tích', `Tập nghiệm của phương trình ${X2} − 5x = 0 là:`, set(0, 5), [set(5), set(0, -5), set(-5)], 'x(x − 5) = 0 ⇒ x = 0 hoặc x = 5. Không được chia hai vế cho x vì sẽ mất nghiệm x = 0.');
H('T2', 'Phương trình tích', 'Tập nghiệm của phương trình (x + 1)<sup>2</sup> − 4 = 0 là:', set(1, -3), [set(-1, 3), set(1, 3), set(-1, -3)], '(x + 1 − 2)(x + 1 + 2) = (x − 1)(x + 3) = 0 ⇒ x = 1 hoặc x = −3.');
H('T2', 'Phương trình tích', `Tập nghiệm của phương trình 4${X2} − 9 = 0 là:`, set('3/2', '−3/2'), [set('3/2'), set('9/4', '−9/4'), set('2/3', '−2/3')], '(2x − 3)(2x + 3) = 0 ⇒ x = 3/2 hoặc x = −3/2.');
H('T2', 'Điều kiện xác định', 'Điều kiện xác định của phương trình (x + 2)/(x − 1) + 3/(x + 3) = 1 là:', 'x ≠ 1 và x ≠ −3', ['x ≠ −1 và x ≠ 3', 'x ≠ 1', 'x ≠ −2 và x ≠ −3'], 'Các mẫu thức x − 1 và x + 3 phải khác 0.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Nghiệm của phương trình 2/(x − 1) = 3/(x + 1) là:', '5', ['1', '−5', '−1'], 'ĐKXĐ x ≠ ±1. Quy đồng: 2(x + 1) = 3(x − 1) ⇒ 2x + 2 = 3x − 3 ⇒ x = 5 (thoả mãn).');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Nghiệm của phương trình (x + 3)/(x − 2) = 2 là:', '7', ['−7', '1', '5'], 'ĐKXĐ x ≠ 2. x + 3 = 2(x − 2) ⇒ x + 3 = 2x − 4 ⇒ x = 7.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Phương trình (x − 1)/(x + 1) = (x + 1)/(x − 1) có nghiệm là:', 'x = 0', ['x = 1', 'x = −1', 'Vô nghiệm'], 'ĐKXĐ x ≠ ±1. (x − 1)<sup>2</sup> = (x + 1)<sup>2</sup> ⇒ −2x = 2x ⇒ x = 0.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Nghiệm của phương trình x/(x − 2) + 1 = 4/(x − 2) là:', '3', ['2', '−3', '1'], 'ĐKXĐ x ≠ 2. Quy đồng: x + (x − 2) = 4 ⇒ 2x = 6 ⇒ x = 3 (thoả mãn).');
H('T2', 'Phương trình chứa ẩn ở mẫu', `Phương trình (${X2} − 4)/(x − 2) = 0 có tập nghiệm là:`, set(-2), [set(2), set(2, -2), 'Tập rỗng'], 'ĐKXĐ x ≠ 2. x² − 4 = 0 ⇒ x = ±2, loại x = 2. Vậy chỉ có nghiệm x = −2.');
H('T2', 'Phương trình tích', 'Tập nghiệm của phương trình x(x − 2) = 3(x − 2) là:', set(2, 3), [set(3), set(2), set(-2, 3)], 'Chuyển vế: (x − 2)(x − 3) = 0 ⇒ x = 2 hoặc x = 3. Chia hai vế cho x − 2 sẽ làm mất nghiệm x = 2.');
H('T2', 'Phương trình tích', 'Phương trình x<sup>3</sup> − 4x = 0 có bao nhiêu nghiệm?', '3', ['1', '2', '0'], 'x(x − 2)(x + 2) = 0 ⇒ x ∈ {0; 2; −2}: ba nghiệm.');
H('T2', 'Phương trình tích', 'Tổng các nghiệm của phương trình (2x − 1)(x + 4) = 0 bằng:', '−7/2', ['7/2', '−9/2', '9/2'], 'Hai nghiệm là 1/2 và −4, tổng bằng 1/2 − 4 = −7/2.');
H('T2', 'Đưa về bậc nhất', 'Nghiệm của phương trình (x − 5)/3 − (x + 1)/2 = 1 là:', '−19', ['19', '−13', '13'], 'Quy đồng mẫu 6: 2(x − 5) − 3(x + 1) = 6 ⇒ −x − 13 = 6 ⇒ x = −19.');
H('T2', 'Phương trình tích', 'Tập nghiệm của phương trình (x − 2)<sup>2</sup> = 9 là:', set(5, -1), [set(5), set(-1, 1), set(5, 1)], 'x − 2 = 3 hoặc x − 2 = −3 ⇒ x = 5 hoặc x = −1.');
H('T2', 'Phương trình tích', `Phương trình ${X2} − 6x + 9 = 0 có tập nghiệm là:`, set(3), [set(3, -3), set(-3), set(0, 6)], '(x − 3)<sup>2</sup> = 0 ⇒ x = 3 (nghiệm kép).');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Phương trình (x + 2)/(x − 3) − 1 = 5/(x − 3) có tập nghiệm là:', 'Mọi số thực x ≠ 3', ['x = 3', 'Tập rỗng', 'x = 5'], 'Quy đồng: x + 2 − (x − 3) = 5 ⇒ 5 = 5 luôn đúng. Vậy mọi x thoả ĐKXĐ (x ≠ 3) đều là nghiệm.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Nghiệm của phương trình 3/(x − 2) = 1 + (x − 5)/(x − 2) là:', '5', ['2', '−5', '3'], 'ĐKXĐ x ≠ 2. 3 = (x − 2) + (x − 5) ⇒ 2x = 10 ⇒ x = 5.');
H('T2', 'Phương trình tích', `Tập nghiệm của phương trình ${X2} = 3x là:`, set(0, 3), [set(3), set(0), set(-3, 0)], 'x² − 3x = x(x − 3) = 0 ⇒ x = 0 hoặc x = 3.');
H('T2', 'Phương trình tích', 'Tập nghiệm của phương trình x(x + 1)(x − 4) = 0 là:', set(0, -1, 4), [set(-1, 4), set(0, 1, -4), set(1, 4)], 'Tích bằng 0 khi một thừa số bằng 0: x = 0, x = −1 hoặc x = 4.');
H('T2', 'Lý thuyết', 'Nếu a · b = 0 thì khẳng định nào sau đây đúng?', 'a = 0 hoặc b = 0', ['a = 0 và b = 0', 'a = b', 'a = 0 và b ≠ 0'], 'Tích hai số bằng 0 khi và chỉ khi ít nhất một trong hai thừa số bằng 0.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Phương trình 2x/(x + 1) − 2 = 3/(x + 1) có tập nghiệm là:', 'Tập rỗng', ['x = −1', 'x = 5/2', 'x = −5/2'], 'ĐKXĐ x ≠ −1. 2x − 2(x + 1) = 3 ⇒ −2 = 3 (vô lí). Phương trình vô nghiệm.');
H('T2', 'Điều kiện xác định', `Điều kiện xác định của phương trình 1/(${X2} − 4) = 3 là:`, 'x ≠ 2 và x ≠ −2', ['x ≠ 2', 'x ≠ 4', 'x ≠ 4 và x ≠ −4'], 'x² − 4 = (x − 2)(x + 2) ≠ 0 ⇒ x ≠ ±2.');
H('T2', 'Phương trình tích', `Phương trình (x − 1)(${X2} + 1) = 0 có tập nghiệm là:`, set(1), [set(1, -1), 'Tập rỗng', set(-1)], 'x² + 1 > 0 với mọi x nên chỉ có x − 1 = 0 ⇒ x = 1.');
H('T2', 'Phương trình tích', 'Nghiệm dương của phương trình (3x − 6)(x + 1) = 0 là:', '2', ['−1', '6', '3'], '3x − 6 = 0 ⇒ x = 2 (dương); x + 1 = 0 ⇒ x = −1 (loại vì âm).');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Nghiệm của phương trình (x + 3)/(x − 1) = (x − 3)/(x + 1) là:', 'x = 0', ['x = 3', 'x = −3', 'Vô nghiệm'], 'ĐKXĐ x ≠ ±1. (x + 3)(x + 1) = (x − 3)(x − 1) ⇒ x² + 4x + 3 = x² − 4x + 3 ⇒ 8x = 0 ⇒ x = 0.');
H('T2', 'Phương trình chứa ẩn ở mẫu', 'Phương trình 1/x + 1/(x + 1) = 3/(x(x + 1)) có nghiệm là:', 'x = 1', ['x = −1', 'x = 0', 'Vô nghiệm'], 'ĐKXĐ x ≠ 0, x ≠ −1. Quy đồng: (x + 1) + x = 3 ⇒ x = 1 (thoả mãn).');

/* ---------- T3: BĐT – BPT ---------- */
H('T3', 'Tính chất bất đẳng thức', 'Cho a > b. Khẳng định nào sau đây đúng?', '−2a < −2b', ['−2a > −2b', '−2a = −2b', 'Không so sánh được'], 'Nhân hai vế của bất đẳng thức với số âm (−2) thì bất đẳng thức đổi chiều.');
H('T3', 'Tính chất bất đẳng thức', 'Cho a > b. Khẳng định nào sau đây đúng?', 'a − 5 > b − 5', ['a − 5 < b − 5', '5 − a > 5 − b', 'a/(−3) > b/(−3)'], 'Cộng cùng một số vào hai vế thì bất đẳng thức không đổi chiều; nhân hoặc chia cho số âm thì đổi chiều.');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình 2x − 6 > 0 là:', 'x > 3', ['x < 3', 'x > −3', 'x ≥ 3'], '2x > 6 ⇒ x > 3.');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình −3x + 9 ≥ 0 là:', 'x ≤ 3', ['x ≥ 3', 'x ≤ −3', 'x ≥ −3'], '−3x ≥ −9, chia hai vế cho −3 (đổi chiều): x ≤ 3.');
H('T3', 'Nghiệm nguyên', 'Số nguyên lớn nhất thoả mãn bất phương trình 3x − 7 < 5 là:', '3', ['4', '2', '−4'], '3x < 12 ⇒ x < 4 ⇒ số nguyên lớn nhất là 3.');
H('T3', 'Nghiệm nguyên', 'Số nguyên nhỏ nhất thoả mãn bất phương trình 2x + 5 ≥ 0 là:', '−2', ['−3', '0', '2'], '2x ≥ −5 ⇒ x ≥ −2,5 ⇒ số nguyên nhỏ nhất là −2.');
H('T3', 'Kiểm tra nghiệm', 'Với x = 1, bất phương trình nào sau đây nghiệm đúng?', '2x + 1 > 2', ['x − 3 > 0', '−x + 1 > 0', '3x < 1'], 'Thay x = 1: 2 + 1 = 3 > 2 (đúng). Các bất phương trình còn lại cho −2 > 0; 0 > 0; 3 < 1 (đều sai).');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình 5 − 2x < 3x là:', 'x > 1', ['x < 1', 'x > −1', 'x < −1'], '5 < 5x ⇒ x > 1.');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình (x − 1)/2 < 1 là:', 'x < 3', ['x < 1', 'x > 3', 'x < 2'], 'Nhân hai vế với 2: x − 1 < 2 ⇒ x < 3.');
H('T3', 'Tính chất bất đẳng thức', 'Cho a < b. Khẳng định nào sau đây SAI?', 'a<sup>2</sup> < b<sup>2</sup>', ['a + 1 < b + 1', '2a < 2b', '−a > −b'], 'Bình phương không bảo toàn thứ tự khi có số âm, ví dụ −3 < 2 nhưng 9 > 4.');
H('T3', 'Tính chất bất đẳng thức', 'Nếu a ≥ b và b ≥ c thì a ≥ c. Đây là tính chất nào của bất đẳng thức?', 'Tính chất bắc cầu', ['Tính chất cộng', 'Tính chất nhân', 'Tính chất đối xứng'], 'Đó là tính chất bắc cầu của quan hệ thứ tự.');
H('T3', 'Cực trị', `Giá trị nhỏ nhất của biểu thức ${X2} + 2x + 3 là:`, '2', ['3', '1', '0'], 'x² + 2x + 3 = (x + 1)<sup>2</sup> + 2 ≥ 2, dấu bằng khi x = −1.');
H('T3', 'Cực trị', 'Một hình chữ nhật có chu vi 20 cm. Diện tích lớn nhất của hình chữ nhật đó là:', '25 cm<sup>2</sup>', ['20 cm<sup>2</sup>', '24 cm<sup>2</sup>', '100 cm<sup>2</sup>'], 'a + b = 10 ⇒ ab ≤ ((a + b)/2)<sup>2</sup> = 25, đạt khi a = b = 5 (hình vuông).');
H('T3', 'Cực trị', 'Với a > 0, giá trị nhỏ nhất của biểu thức a + 4/a là:', '4', ['2', '8', '5'], 'Theo bất đẳng thức Cô-si: a + 4/a ≥ 2√(a · 4/a) = 4, dấu bằng khi a = 2.');
H('T3', 'Nhận dạng', 'Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?', '2x − 3 > 0', ['0x + 5 > 0', `${X2} − 1 < 0`, '2/x + 1 ≥ 0'], 'Dạng ax + b > 0 với a ≠ 0. 0x + 5 > 0 có a = 0; hai bất phương trình còn lại không phải bậc nhất.');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình 2(x + 1) − 3 ≤ x + 4 là:', 'x ≤ 5', ['x ≥ 5', 'x ≤ 3', 'x < 5'], '2x − 1 ≤ x + 4 ⇒ x ≤ 5.');
H('T3', 'Nghiệm nguyên', 'Bất phương trình 3x − 2 < 10 có bao nhiêu nghiệm nguyên dương?', '3', ['4', '2', '5'], '3x < 12 ⇒ x < 4. Các nghiệm nguyên dương: 1; 2; 3.');
H('T3', 'Giải bất phương trình', 'Tập nghiệm của bất phương trình (2x − 1)/3 − (x + 2)/2 > 0 là:', 'x > 8', ['x < 8', 'x > −8', 'x > 4'], 'Quy đồng mẫu 6: 2(2x − 1) − 3(x + 2) > 0 ⇒ x − 8 > 0 ⇒ x > 8.');
H('T3', 'Tham số', 'Với m > 3, bất phương trình (m − 3)x > 1 có tập nghiệm là:', 'x > 1/(m − 3)', ['x < 1/(m − 3)', 'x > m − 3', 'x > 1/(3 − m)'], 'Vì m − 3 > 0 nên chia hai vế cho m − 3 không đổi chiều: x > 1/(m − 3).');
H('T3', 'Bất đẳng thức Cô-si', 'Với x > 0, khẳng định nào sau đây luôn đúng?', 'x + 1/x ≥ 2', ['x + 1/x ≤ 2', 'x + 1/x > 3', 'x + 1/x = 1'], 'x + 1/x − 2 = (√x − 1/√x)<sup>2</sup> ≥ 0, dấu bằng khi x = 1.');
H('T3', 'So sánh', 'Số dương a thoả mãn a<sup>2</sup> < a khi và chỉ khi:', '0 < a < 1', ['a > 1', 'a ≥ 1', 'Mọi a > 0'], 'a² < a ⇔ a(a − 1) < 0 ⇔ 0 < a < 1 (vì a > 0).');
H('T3', 'Biểu diễn tập nghiệm', 'Trên trục số, tập nghiệm được biểu diễn bằng dấu ngoặc vuông "[" tại điểm −1 và tô đậm phần bên phải. Đó là tập nghiệm của bất phương trình nào?', 'x ≥ −1', ['x > −1', 'x ≤ −1', 'x < −1'], 'Ngoặc vuông nghĩa là lấy cả điểm −1; phần bên phải là các số lớn hơn −1.');
H('T3', 'Tính chất bất đẳng thức', 'Nếu 2a − 1 > 2b − 1 thì:', 'a > b', ['a < b', 'a = b', 'a ≤ b'], 'Cộng 1 vào hai vế rồi chia cho 2 (số dương): a > b.');
H('T3', 'Cực trị', `Giá trị lớn nhất của biểu thức −${X2} + 4x + 1 là:`, '5', ['1', '4', '−5'], '−x² + 4x + 1 = 5 − (x − 2)<sup>2</sup> ≤ 5, dấu bằng khi x = 2.');
H('T3', 'Nghiệm nguyên', 'Có bao nhiêu số nguyên x thoả mãn −3 < 2x − 1 ≤ 5?', '4', ['3', '5', '2'], '−2 < 2x ≤ 6 ⇒ −1 < x ≤ 3 ⇒ x ∈ {0; 1; 2; 3}.');
H('T3', 'Lý thuyết', 'Khi nhân hai vế của một bất phương trình với cùng một số âm, ta phải:', 'Đổi chiều bất phương trình', ['Giữ nguyên chiều bất phương trình', 'Đổi dấu hai vế nhưng giữ chiều', 'Bỏ dấu bất phương trình'], 'Đó là quy tắc nhân với một số: nhân với số âm thì đổi chiều.');
H('T3', 'Cực trị', 'Cho x + y = 6 với x, y > 0. Giá trị lớn nhất của tích xy là:', '9', ['6', '12', '36'], 'xy ≤ ((x + y)/2)<sup>2</sup> = 9, dấu bằng khi x = y = 3.');
H('T3', 'Nghiệm nguyên', 'Tổng các nghiệm nguyên của bất phương trình |x| ≤ 3 với x nguyên dương là:', '6', ['3', '9', '12'], 'x ∈ {1; 2; 3} ⇒ tổng bằng 6.');

/* ---------- T4: Căn bậc hai – căn bậc ba ---------- */
H('T4', 'Căn bậc hai số học', 'Căn bậc hai số học của 81 là:', '9', ['−9', '9 và −9', '3'], 'Căn bậc hai số học là số không âm x mà x² = 81 ⇒ x = 9. (81 có hai căn bậc hai là 9 và −9.)');
H('T4', 'Căn bậc hai', 'Số nào sau đây không có căn bậc hai?', '−4', ['0', '4', '0,25'], 'Số âm không có căn bậc hai (trong tập số thực).');
H('T4', 'Hằng đẳng thức căn', 'Giá trị của √((−3)<sup>2</sup>) là:', '3', ['−3', '±3', '9'], '√(a²) = |a| nên √((−3)²) = |−3| = 3.');
H('T4', 'Điều kiện xác định', 'Biểu thức √(x − 2) có nghĩa khi:', 'x ≥ 2', ['x > 2', 'x ≤ 2', 'x ≠ 2'], 'Căn thức có nghĩa khi biểu thức dưới dấu căn không âm: x − 2 ≥ 0.');
H('T4', 'Rút gọn', 'Kết quả rút gọn √50 − √18 + √2 là:', '3√2', ['5√2', '2√2', '√34'], '√50 = 5√2, √18 = 3√2 ⇒ 5√2 − 3√2 + √2 = 3√2.');
H('T4', 'Nhân căn thức', 'Giá trị của √12 · √3 là:', '6', ['√15', '36', '6√3'], '√12 · √3 = √36 = 6.');
H('T4', 'Chia căn thức', 'Giá trị của √75 : √3 là:', '5', ['25', '√5', '15'], '√75 : √3 = √(75 : 3) = √25 = 5.');
H('T4', 'Biểu thức liên hợp', 'Giá trị của (√5 − 2)(√5 + 2) là:', '1', ['3', '9', '√5 − 4'], '(√5 − 2)(√5 + 2) = 5 − 4 = 1.');
H('T4', 'Trục căn thức', 'Trục căn thức ở mẫu: 1/(√3 − 1) =', '(√3 + 1)/2', ['√3 − 1', '(√3 − 1)/2', '√3 + 1'], 'Nhân cả tử và mẫu với √3 + 1: (√3 + 1)/(3 − 1) = (√3 + 1)/2.');
H('T4', 'Căn phức', 'Rút gọn √(7 − 4√3) được:', '2 − √3', ['√3 − 2', '2 + √3', '4 − √3'], '7 − 4√3 = (2 − √3)<sup>2</sup> và 2 − √3 > 0 nên √(7 − 4√3) = 2 − √3.');
H('T4', 'Hằng đẳng thức căn', 'Với x < 0, biểu thức √(x<sup>2</sup>) bằng:', '−x', ['x', '±x', 'x<sup>2</sup>'], '√(x²) = |x| = −x khi x < 0.');
H('T4', 'Căn bậc ba', 'Giá trị của ∛(−27) là:', '−3', ['3', 'Không tồn tại', '±3'], '(−3)<sup>3</sup> = −27 nên ∛(−27) = −3. Mọi số thực đều có đúng một căn bậc ba.');
H('T4', 'Căn bậc ba', 'Giá trị của ∛(0,008) là:', '0,2', ['0,02', '0,4', '0,002'], '0,2<sup>3</sup> = 0,008.');
H('T4', 'Rút gọn', 'Với a < 0 và b ≥ 0, biểu thức √(a<sup>2</sup>b) bằng:', '−a√b', ['a√b', 'a<sup>2</sup>√b', '|b|√a'], '√(a²b) = |a|√b = −a√b vì a < 0.');
H('T4', 'So sánh', 'So sánh 3√2 và 2√3, ta được:', '3√2 > 2√3', ['3√2 < 2√3', '3√2 = 2√3', 'Không so sánh được'], '3√2 = √18, 2√3 = √12; vì 18 > 12 nên 3√2 > 2√3.');
H('T4', 'Tính giá trị', 'Giá trị của √9 + ∛8 là:', '5', ['1', '17', '11'], '√9 = 3, ∛8 = 2 ⇒ tổng bằng 5.');
H('T4', 'Biểu thức liên hợp', 'Với a, b ≥ 0, biểu thức (√a + √b)(√a − √b) bằng:', 'a − b', ['a + b', '√(a − b)', 'a<sup>2</sup> − b<sup>2</sup>'], 'Hiệu hai bình phương: (√a)<sup>2</sup> − (√b)<sup>2</sup> = a − b.');
H('T4', 'Khai triển', 'Giá trị của (√2 + 1)<sup>2</sup> là:', '3 + 2√2', ['3', '2 + 2√2', '5'], '(√2 + 1)² = 2 + 2√2 + 1 = 3 + 2√2.');
H('T4', 'Phương trình chứa căn', 'Nghiệm của phương trình √(2x + 1) = 3 là:', '4', ['2', '1', '5'], 'Bình phương hai vế: 2x + 1 = 9 ⇒ x = 4.');
H('T4', 'Phương trình chứa căn', 'Phương trình √x = −2 có tập nghiệm là:', 'Tập rỗng', [set(4), set(-4), set(2)], '√x ≥ 0 với mọi x ≥ 0 nên không thể bằng −2: phương trình vô nghiệm.');
H('T4', 'Trục căn thức', 'Rút gọn 2/√2 được:', '√2', ['2', '1/√2', '2√2'], '2/√2 = 2√2/2 = √2.');
H('T4', 'Rút gọn', 'Với x ≥ 0, rút gọn √(9x<sup>2</sup>) − 2x được:', 'x', ['5x', '−x', '7x'], '√(9x²) = 3x (vì x ≥ 0) ⇒ 3x − 2x = x.');
H('T4', 'So sánh', 'Số lớn nhất trong các số √17; 4; ∛64; 4,1 là:', '√17', ['4', '∛64', '4,1'], '∛64 = 4; √17 = √17 > √16,81 = 4,1. Vậy √17 lớn nhất.');
H('T4', 'Trục căn thức', 'Rút gọn (√3 + √2)/(√3 − √2) được:', '5 + 2√6', ['1', '5 − 2√6', '5 + √6'], 'Nhân tử và mẫu với √3 + √2: (√3 + √2)<sup>2</sup>/(3 − 2) = 5 + 2√6.');
H('T4', 'Điều kiện xác định', 'Biểu thức √(x + 1) + √(3 − x) có nghĩa khi:', '−1 ≤ x ≤ 3', ['x ≥ −1', 'x ≤ 3', 'x ≥ 3'], 'Cần x + 1 ≥ 0 và 3 − x ≥ 0 ⇒ −1 ≤ x ≤ 3.');
H('T4', 'Căn phức', 'Giá trị của √(4 + 2√3) − √3 là:', '1', ['2', '√3', '2√3 − 1'], '4 + 2√3 = (√3 + 1)<sup>2</sup> ⇒ √(4 + 2√3) = √3 + 1 ⇒ kết quả 1.');
H('T4', 'Lý thuyết', 'Khẳng định nào sau đây đúng với mọi số thực a?', '∛(a<sup>3</sup>) = a', ['√(a<sup>2</sup>) = a', '√a · √a = a', '∛a chỉ có nghĩa khi a ≥ 0'], 'Căn bậc ba xác định với mọi số thực và ∛(a³) = a; còn √(a²) = |a|, √a chỉ có nghĩa khi a ≥ 0.');
H('T4', 'Rút gọn biểu thức', 'Với x ≥ 0, x ≠ 1, rút gọn P = (√x + 1)(√x − 1)/(x − 1) được:', '1', ['√x', '√x − 1', 'x + 1'], '(√x + 1)(√x − 1) = x − 1 nên P = (x − 1)/(x − 1) = 1.');
H('T4', 'Rút gọn biểu thức', 'Với x ≥ 0, rút gọn B = (x − 4)/(√x + 2) được:', '√x − 2', ['√x + 2', 'x − 2', '√x − 4'], 'x − 4 = (√x − 2)(√x + 2) ⇒ B = √x − 2.');
H('T4', 'Phương trình chứa căn', 'Tập nghiệm của phương trình √(x<sup>2</sup>) = 5 là:', set(5, -5), [set(5), set(25), set(-5)], '√(x²) = |x| = 5 ⇒ x = ±5.');
H('T4', 'Tính giá trị', 'Giá trị của √0,25 · √64 là:', '4', ['8', '2', '16'], '√0,25 = 0,5; √64 = 8 ⇒ 0,5 × 8 = 4.');
H('T4', 'Rút gọn biểu thức', 'Với x > 0, x ≠ 1, rút gọn A = (x − √x)/(√x − 1) được:', '√x', ['x', '√x − 1', '1'], 'x − √x = √x(√x − 1) ⇒ A = √x.');
H('T4', 'Căn phức', 'Giá trị của √(6 + 2√5) + √(6 − 2√5) là:', '2√5', ['2', '2√6', '√10'], '6 ± 2√5 = (√5 ± 1)<sup>2</sup> ⇒ (√5 + 1) + (√5 − 1) = 2√5.');

/* ---------- T5: Hàm số y = ax² ---------- */
H('T5', 'Tính đồng biến – nghịch biến', 'Hàm số y = 2x<sup>2</sup> đồng biến khi:', 'x > 0', ['x < 0', 'Với mọi x', 'Không đồng biến'], 'Với a = 2 > 0, hàm số y = ax² đồng biến khi x > 0 và nghịch biến khi x < 0.');
H('T5', 'Tính đồng biến – nghịch biến', 'Hàm số y = −3x<sup>2</sup> đồng biến khi:', 'x < 0', ['x > 0', 'Với mọi x', 'x ≠ 0'], 'Với a < 0, hàm số đồng biến khi x < 0 và nghịch biến khi x > 0.');
H('T5', 'Xác định hệ số', 'Đồ thị hàm số y = ax<sup>2</sup> đi qua điểm (2; −8). Giá trị của a là:', '−2', ['2', '−4', '−1/2'], 'Thay x = 2, y = −8: 4a = −8 ⇒ a = −2.');
H('T5', 'Điểm thuộc đồ thị', 'Điểm nào sau đây thuộc đồ thị hàm số y = x<sup>2</sup>/2?', '(2; 2)', ['(2; 4)', '(1; 1)', '(−2; −2)'], 'Thay x = 2: y = 4/2 = 2. Các điểm còn lại không thoả mãn.');
H('T5', 'Tính chất đồ thị', 'Đồ thị hàm số y = ax<sup>2</sup> (a ≠ 0) là:', 'Một parabol đi qua gốc tọa độ, nhận Oy làm trục đối xứng', ['Một đường thẳng đi qua gốc tọa độ', 'Một parabol nhận Ox làm trục đối xứng', 'Một đường thẳng song song với Ox'], 'Đồ thị y = ax² là parabol đỉnh O, đối xứng qua trục tung.');
H('T5', 'Tính chất đồ thị', 'Với a < 0, đồ thị hàm số y = ax<sup>2</sup> có tính chất:', 'Nằm phía dưới trục hoành, O là điểm cao nhất', ['Nằm phía trên trục hoành, O là điểm thấp nhất', 'Nằm bên trái trục tung', 'Cắt trục hoành tại hai điểm'], 'Khi a < 0 thì y ≤ 0 với mọi x, giá trị lớn nhất y = 0 tại x = 0.');
H('T5', 'Tính giá trị', 'Giá trị của hàm số y = −x<sup>2</sup>/4 tại x = −4 là:', '−4', ['4', '−2', '2'], 'y = −(−4)²/4 = −16/4 = −4.');
H('T5', 'Tham số', 'Hàm số y = (m − 1)x<sup>2</sup> đồng biến khi x > 0 khi và chỉ khi:', 'm > 1', ['m < 1', 'm ≥ 1', 'm ≠ 1'], 'Cần hệ số a = m − 1 > 0 ⇒ m > 1.');
H('T5', 'Giao điểm với đường thẳng', 'Hoành độ các giao điểm của parabol y = x<sup>2</sup> và đường thẳng y = x + 2 là:', '−1 và 2', ['1 và 2', '−1 và −2', '1 và −2'], 'x² = x + 2 ⇔ x² − x − 2 = 0 ⇔ (x + 1)(x − 2) = 0 ⇒ x = −1 hoặc x = 2.');
H('T5', 'Giao điểm với đường thẳng', 'Parabol y = x<sup>2</sup> và đường thẳng y = 2x − 1 có bao nhiêu điểm chung?', '1', ['0', '2', 'Vô số'], 'x² − 2x + 1 = (x − 1)<sup>2</sup> = 0 có nghiệm kép x = 1: đường thẳng tiếp xúc parabol tại (1; 1).');
H('T5', 'Điều kiện tiếp xúc', 'Đường thẳng y = 2x + m tiếp xúc với parabol y = x<sup>2</sup> khi m bằng:', '−1', ['1', '0', '−2'], 'x² − 2x − m = 0 có nghiệm kép ⇔ Δ\' = 1 + m = 0 ⇔ m = −1.');
H('T5', 'Xác định hệ số', 'Hàm số y = ax<sup>2</sup> có giá trị bằng 12 tại x = 2. Giá trị của hàm số tại x = −1 là:', '3', ['−3', '6', '12'], '4a = 12 ⇒ a = 3 ⇒ y(−1) = 3 · 1 = 3.');
H('T5', 'Tính đối xứng', 'Điểm A(−3; 18) thuộc parabol y = ax<sup>2</sup>. Điểm nào sau đây cũng thuộc parabol đó?', '(3; 18)', ['(−3; −18)', '(3; −18)', '(18; 3)'], 'Parabol đối xứng qua Oy nên điểm đối xứng với A là (3; 18) cũng thuộc parabol.');
H('T5', 'Giá trị lớn nhất – nhỏ nhất', 'Giá trị lớn nhất của hàm số y = −2x<sup>2</sup> là:', '0', ['−2', 'Không có giá trị lớn nhất', '2'], 'y = −2x² ≤ 0 với mọi x, dấu bằng khi x = 0.');
H('T5', 'Giá trị lớn nhất – nhỏ nhất', 'Giá trị lớn nhất của hàm số y = x<sup>2</sup> khi −1 ≤ x ≤ 2 là:', '4', ['1', '0', '5'], 'Trên [−1; 2], y lớn nhất tại x = 2: y = 4 (tại x = −1 chỉ được 1).');
H('T5', 'Tính đồng biến – nghịch biến', 'Hàm số y = 5x<sup>2</sup> nghịch biến khi:', 'x < 0', ['x > 0', 'Với mọi x', 'x ≥ 0'], 'a = 5 > 0 nên hàm số nghịch biến khi x < 0.');
H('T5', 'Điểm thuộc đồ thị', 'Điểm M(m; 8) thuộc đồ thị hàm số y = 2x<sup>2</sup>. Giá trị của m là:', '±2', ['2', '4', '±4'], '2m² = 8 ⇒ m² = 4 ⇒ m = 2 hoặc m = −2.');
H('T5', 'Giao điểm với đường thẳng', 'Giao điểm có hoành độ dương của parabol y = −x<sup>2</sup> và đường thẳng y = x − 2 là:', '(1; −1)', ['(1; 1)', '(2; −4)', '(−2; −4)'], '−x² = x − 2 ⇔ x² + x − 2 = 0 ⇒ x = 1 hoặc x = −2. Với x = 1: y = −1.');
H('T5', 'Giao điểm với đường thẳng', 'Đường thẳng y = 4 cắt parabol y = x<sup>2</sup> tại hai điểm A, B. Độ dài AB bằng:', '4', ['2', '8', '16'], 'x² = 4 ⇒ x = ±2 ⇒ A(−2; 4), B(2; 4) ⇒ AB = 4.');
H('T5', 'So sánh', 'Với x ≠ 0, so sánh giá trị của hai hàm số y = 3x<sup>2</sup> và y = x<sup>2</sup> tại cùng một giá trị x ta được:', '3x<sup>2</sup> > x<sup>2</sup>', ['3x<sup>2</sup> < x<sup>2</sup>', '3x<sup>2</sup> = x<sup>2</sup>', 'Tuỳ dấu của x'], 'x² > 0 khi x ≠ 0 nên 3x² > x²: parabol y = 3x² "hẹp" hơn và nằm phía trên.');
H('T5', 'Ứng dụng', 'Quãng đường rơi tự do của một vật cho bởi s = 5t<sup>2</sup> (s tính bằng m, t tính bằng giây). Sau 3 giây vật rơi được:', '45 m', ['15 m', '30 m', '90 m'], 's = 5 · 3² = 45 m.');
H('T5', 'Ứng dụng', 'Với s = 5t<sup>2</sup> (m), thời gian để vật rơi được 80 m là:', '4 giây', ['16 giây', '8 giây', '2 giây'], '5t² = 80 ⇒ t² = 16 ⇒ t = 4 (t > 0).');
H('T5', 'Giao điểm với đường thẳng', 'Đường thẳng y = m cắt parabol y = x<sup>2</sup> tại hai điểm phân biệt khi và chỉ khi:', 'm > 0', ['m ≥ 0', 'm < 0', 'Với mọi m'], 'x² = m có hai nghiệm phân biệt khi m > 0.');
H('T5', 'Điểm thuộc đồ thị', 'Điểm trên parabol y = x<sup>2</sup> có tung độ bằng 9 và hoành độ âm là:', '(−3; 9)', ['(3; 9)', '(−9; 81)', '(−3; −9)'], 'x² = 9 ⇒ x = ±3; hoành độ âm nên x = −3.');
H('T5', 'Giao điểm với đường thẳng', 'Parabol y = x<sup>2</sup> cắt đường thẳng y = 3x − 2 tại hai điểm A, B. Tổng các hoành độ của A và B bằng:', '3', ['2', '−3', '1'], 'x² − 3x + 2 = 0 ⇒ theo Viète tổng hai nghiệm bằng 3 (hai nghiệm là 1 và 2).');
H('T5', 'Xác định hệ số', 'Parabol y = ax<sup>2</sup> đi qua điểm (−2; 1). Khi đó a bằng:', '1/4', ['−1/4', '1/2', '4'], '4a = 1 ⇒ a = 1/4.');

/* ---------- T6: Phương trình bậc hai – Viète ---------- */
H('T6', 'Nhận dạng', 'Phương trình nào sau đây là phương trình bậc hai một ẩn?', `3${X2} − x + 1 = 0`, [`0${X2} + 2x − 1 = 0`, 'x<sup>3</sup> − x = 0', '2x − 5 = 0'], 'Phương trình bậc hai một ẩn có dạng ax² + bx + c = 0 với a ≠ 0.');
H('T6', 'Hệ số', `Phương trình 2${X2} − 3x + 5 = 0 có các hệ số:`, 'a = 2, b = −3, c = 5', ['a = 2, b = 3, c = 5', 'a = 2, b = −3, c = −5', 'a = −3, b = 2, c = 5'], 'So với dạng ax² + bx + c = 0: a = 2, b = −3, c = 5.');
H('T6', 'Biệt thức', `Biệt thức Δ của phương trình ${X2} − 4x + 1 = 0 bằng:`, '12', ['20', '−12', '15'], 'Δ = b² − 4ac = 16 − 4 = 12.');
H('T6', 'Giải phương trình', `Tập nghiệm của phương trình ${X2} − 5x + 6 = 0 là:`, set(2, 3), [set(-2, -3), set(1, 6), set(-1, -6)], 'Δ = 25 − 24 = 1 ⇒ x = (5 ± 1)/2 ⇒ x = 3 hoặc x = 2.');
H('T6', 'Giải phương trình', `Tập nghiệm của phương trình ${X2} − 2x − 3 = 0 là:`, set(-1, 3), [set(1, -3), set(1, 3), set(-1, -3)], 'a − b + c = 1 + 2 − 3 = 0 ⇒ x = −1 và x = −c/a = 3.');
H('T6', 'Số nghiệm', `Phương trình ${X2} + x + 1 = 0:`, 'Vô nghiệm', ['Có nghiệm x = −1', 'Có nghiệm x = 1', 'Có nghiệm kép'], 'Δ = 1 − 4 = −3 < 0 nên phương trình vô nghiệm.');
H('T6', 'Nghiệm kép', `Phương trình 4${X2} − 4x + 1 = 0 có:`, 'Nghiệm kép x = 1/2', ['Nghiệm kép x = −1/2', 'Nghiệm kép x = 2', 'Hai nghiệm phân biệt'], '(2x − 1)<sup>2</sup> = 0 ⇒ nghiệm kép x = 1/2.');
H('T6', 'Định lí Viète', `Tổng hai nghiệm của phương trình ${X2} − 7x + 10 = 0 bằng:`, '7', ['−7', '10', '−10'], 'Δ = 9 > 0; theo Viète x₁ + x₂ = −b/a = 7.');
H('T6', 'Định lí Viète', `Tích hai nghiệm của phương trình 2${X2} − 3x − 5 = 0 bằng:`, '−5/2', ['5/2', '3/2', '−3/2'], 'ac < 0 nên có hai nghiệm; x₁x₂ = c/a = −5/2.');
H('T6', 'Định lí Viète', `Phương trình 3${X2} + 6x − 1 = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub>. Giá trị x<sub>1</sub> + x<sub>2</sub> bằng:`, '−2', ['2', '−6', '1/3'], 'x₁ + x₂ = −b/a = −6/3 = −2.');
H('T6', 'Nhẩm nghiệm', `Tập nghiệm của phương trình 2${X2} − 5x + 3 = 0 là:`, set(1, '3/2'), [set(-1, '−3/2'), set(1, 3), set(1, '2/3')], 'a + b + c = 2 − 5 + 3 = 0 ⇒ x₁ = 1, x₂ = c/a = 3/2.');
H('T6', 'Nhẩm nghiệm', `Tập nghiệm của phương trình ${X2} + 5x + 4 = 0 là:`, set(-1, -4), [set(1, 4), set(-1, 4), set(1, -4)], 'a − b + c = 1 − 5 + 4 = 0 ⇒ x₁ = −1, x₂ = −c/a = −4.');
H('T6', 'Điều kiện có nghiệm', `Phương trình ${X2} − 2(m + 1)x + m<sup>2</sup> = 0 có hai nghiệm phân biệt khi:`, 'm > −1/2', ['m < −1/2', 'm > 1/2', 'm ≥ −1/2'], 'Δ\' = (m + 1)² − m² = 2m + 1 > 0 ⇔ m > −1/2.');
H('T6', 'Điều kiện có nghiệm', `Phương trình ${X2} − 2x + m = 0 có nghiệm kép khi m bằng:`, '1', ['−1', '0', '2'], 'Δ\' = 1 − m = 0 ⇔ m = 1.');
H('T6', 'Điều kiện có nghiệm', `Phương trình ${X2} + 4x + m = 0 vô nghiệm khi:`, 'm > 4', ['m < 4', 'm ≥ 4', 'm ≤ 4'], 'Δ\' = 4 − m < 0 ⇔ m > 4.');
H('T6', 'Nghiệm còn lại', `Phương trình ${X2} − 3x + m = 0 có một nghiệm là x = 1. Nghiệm còn lại là:`, '2', ['1', '3', '−2'], 'Theo Viète x₁ + x₂ = 3 ⇒ x₂ = 3 − 1 = 2 (khi đó m = 2).');
H('T6', 'Lập phương trình', 'Hai số có tổng bằng 5 và tích bằng 6 là nghiệm của phương trình:', `${X2} − 5x + 6 = 0`, [`${X2} + 5x + 6 = 0`, `${X2} − 6x + 5 = 0`, `${X2} + 5x − 6 = 0`], 'Hai số có tổng S, tích P là nghiệm của x² − Sx + P = 0.');
H('T6', 'Tìm hai số', 'Hai số u, v có u + v = 7 và uv = 12. Hai số đó là:', '3 và 4', ['2 và 6', '1 và 12', '−3 và −4'], 'u, v là nghiệm của x² − 7x + 12 = 0 ⇒ x = 3 hoặc x = 4.');
H('T6', 'Biểu thức đối xứng', `Gọi x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ${X2} − 4x + 3 = 0. Giá trị x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup> bằng:`, '10', ['22', '16', '13'], 'x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 16 − 6 = 10.');
H('T6', 'Biểu thức đối xứng', `Gọi x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ${X2} − 3x + 1 = 0. Giá trị 1/x<sub>1</sub> + 1/x<sub>2</sub> bằng:`, '3', ['1/3', '−3', '1'], '1/x₁ + 1/x₂ = (x₁ + x₂)/(x₁x₂) = 3/1 = 3.');
H('T6', 'Biểu thức đối xứng', `Gọi x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ${X2} − 6x + 5 = 0. Giá trị |x<sub>1</sub> − x<sub>2</sub>| bằng:`, '4', ['6', '5', '2'], 'Hai nghiệm là 1 và 5 ⇒ |x₁ − x₂| = 4. (Hoặc (x₁ − x₂)² = S² − 4P = 36 − 20 = 16.)');
H('T6', 'Biểu thức đối xứng', `Gọi x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ${X2} + 2x − 8 = 0. Giá trị x<sub>1</sub><sup>3</sup> + x<sub>2</sub><sup>3</sup> bằng:`, '−56', ['56', '−8', '40'], 'x₁³ + x₂³ = S³ − 3PS = (−2)³ − 3(−8)(−2) = −8 − 48 = −56.');
H('T6', 'Tìm tham số', `Phương trình ${X2} − 2x + m = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub> thoả mãn x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup> = 10. Giá trị của m là:`, '−3', ['3', '−2', '7'], 'S² − 2P = 4 − 2m = 10 ⇒ m = −3 (thoả Δ\' = 1 − m > 0).');
H('T6', 'Nhận dạng', `Phương trình (m − 1)${X2} + 2x − 1 = 0 là phương trình bậc hai khi:`, 'm ≠ 1', ['m = 1', 'm > 1', 'Với mọi m'], 'Cần hệ số của x² khác 0: m − 1 ≠ 0.');
H('T6', 'Nhẩm nghiệm', `Phương trình ${X2} − (m + 2)x + m + 1 = 0 luôn có một nghiệm không phụ thuộc m là:`, 'x = 1', ['x = −1', 'x = m', 'x = 0'], 'a + b + c = 1 − (m + 2) + m + 1 = 0 nên x = 1 luôn là nghiệm; nghiệm còn lại là m + 1.');
H('T6', 'Bài toán lập phương trình', 'Một hình chữ nhật có chu vi 28 cm và diện tích 48 cm<sup>2</sup>. Chiều dài hình chữ nhật là:', '8 cm', ['6 cm', '12 cm', '7 cm'], 'd + r = 14, dr = 48 ⇒ d, r là nghiệm của x² − 14x + 48 = 0 ⇒ 8 và 6. Chiều dài 8 cm.');
H('T6', 'Bài toán lập phương trình', 'Tích của hai số tự nhiên liên tiếp bằng 156. Số bé là:', '12', ['13', '11', '14'], 'n(n + 1) = 156 ⇒ n² + n − 156 = 0 ⇒ n = 12 (loại n = −13).');
H('T6', 'Bài toán lập phương trình', 'Một đội xe dự định chở 120 tấn hàng, mỗi xe chở lượng hàng bằng nhau. Do 2 xe bị điều đi làm việc khác nên mỗi xe còn lại phải chở thêm 3 tấn. Số xe của đội lúc đầu là:', '10', ['8', '12', '15'], '120/(x − 2) − 120/x = 3 ⇒ 240 = 3x(x − 2) ⇒ x² − 2x − 80 = 0 ⇒ x = 10.');
H('T6', 'Bài toán lập phương trình', 'Một người đi xe đạp từ A đến B dài 30 km. Lúc về tăng vận tốc thêm 3 km/h nên thời gian về ít hơn thời gian đi 30 phút. Vận tốc lúc đi là:', '12 km/h', ['15 km/h', '10 km/h', '9 km/h'], '30/v − 30/(v + 3) = 1/2 ⇒ 180 = v(v + 3) ⇒ v² + 3v − 180 = 0 ⇒ v = 12.');
H('T6', 'Tham số', `Cho phương trình ${X2} − 2mx + m<sup>2</sup> − 1 = 0. Khẳng định nào đúng?`, 'Phương trình luôn có hai nghiệm phân biệt với mọi m', ['Phương trình vô nghiệm khi m < 0', 'Phương trình có nghiệm kép khi m = 1', 'Phương trình vô nghiệm với mọi m'], 'Δ\' = m² − (m² − 1) = 1 > 0 với mọi m; hai nghiệm là m − 1 và m + 1.');
H('T6', 'Dấu của nghiệm', `Phương trình ${X2} − 2x + m − 3 = 0 có hai nghiệm trái dấu khi:`, 'm < 3', ['m > 3', 'm ≤ 3', 'm ≠ 3'], 'Hai nghiệm trái dấu ⇔ ac < 0 ⇔ m − 3 < 0 ⇔ m < 3.');
H('T6', 'Lập phương trình', `Phương trình ${X2} + bx + c = 0 có hai nghiệm là 2 và −5. Khi đó:`, 'b = 3, c = −10', ['b = −3, c = −10', 'b = 3, c = 10', 'b = −3, c = 10'], 'x₁ + x₂ = −3 = −b ⇒ b = 3; x₁x₂ = −10 = c.');
H('T6', 'Biểu thức đối xứng', `Gọi x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ${X2} − 5x + 4 = 0. Giá trị (x<sub>1</sub> − 1)(x<sub>2</sub> − 1) bằng:`, '0', ['1', '−1', '8'], '(x₁ − 1)(x₂ − 1) = x₁x₂ − (x₁ + x₂) + 1 = 4 − 5 + 1 = 0.');
H('T6', 'Tìm tham số', `Phương trình ${X2} − (2m + 1)x + m<sup>2</sup> + m = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub> với x<sub>1</sub> − x<sub>2</sub> = 1 với mọi m. Hai nghiệm đó là:`, 'm và m + 1', ['m và m − 1', 'm và 2m', '1 và m'], 'x² − (2m + 1)x + m(m + 1) = (x − m)(x − m − 1) = 0 ⇒ hai nghiệm là m và m + 1.');
H('T6', 'Dấu của nghiệm', `Phương trình ${X2} − 6x + m = 0 có hai nghiệm dương phân biệt khi:`, '0 < m < 9', ['m < 9', 'm > 0', 'm ≥ 9'], 'Cần Δ\' = 9 − m > 0, S = 6 > 0 và P = m > 0 ⇒ 0 < m < 9.');

/* ---------- T7: Hệ thức lượng ---------- */
H('T7', 'Tỉ số lượng giác', 'Tam giác ABC vuông tại A có AB = 3, AC = 4. Giá trị sin B là:', '4/5', ['3/5', '3/4', '4/3'], 'BC = 5; sin B = cạnh đối/cạnh huyền = AC/BC = 4/5.');
H('T7', 'Tỉ số lượng giác', 'Tam giác ABC vuông tại A có AB = 3, AC = 4. Giá trị tan C là:', '3/4', ['4/3', '3/5', '4/5'], 'tan C = cạnh đối/cạnh kề = AB/AC = 3/4.');
H('T7', 'Đường cao', 'Tam giác ABC vuông tại A, AB = 3, AC = 4, đường cao AH. Độ dài AH là:', '2,4', ['2,5', '3', '1,2'], 'AH = AB · AC / BC = 12/5 = 2,4.');
H('T7', 'Hình chiếu', 'Tam giác ABC vuông tại A, AB = 3, AC = 4, đường cao AH. Độ dài BH là:', '1,8', ['3,2', '2,4', '1,5'], 'AB² = BH · BC ⇒ BH = 9/5 = 1,8.');
H('T7', 'Giá trị lượng giác đặc biệt', 'Giá trị của sin 30° là:', '1/2', ['√3/2', '√2/2', '√3/3'], 'sin 30° = 1/2.');
H('T7', 'Giá trị lượng giác đặc biệt', 'Giá trị của tan 60° là:', '√3', ['√3/3', '1', '1/2'], 'tan 60° = √3.');
H('T7', 'Hai góc phụ nhau', 'Khẳng định nào sau đây đúng?', 'sin 40° = cos 50°', ['sin 40° = cos 40°', 'sin 40° = sin 50°', 'sin 40° = tan 50°'], 'Hai góc phụ nhau: sin α = cos(90° − α).');
H('T7', 'Hệ thức lượng giác', 'Cho góc nhọn α có sin α = 3/5. Giá trị cos α là:', '4/5', ['2/5', '3/4', '4/3'], 'cos² α = 1 − sin² α = 1 − 9/25 = 16/25 ⇒ cos α = 4/5.');
H('T7', 'Giá trị lượng giác đặc biệt', 'Góc nhọn α có tan α = 1. Số đo α là:', '45°', ['30°', '60°', '90°'], 'tan 45° = 1.');
H('T7', 'Giải tam giác vuông', 'Tam giác vuông cân có cạnh góc vuông bằng 5. Cạnh huyền bằng:', '5√2', ['10', '5√3', '25'], 'Cạnh huyền = √(5² + 5²) = 5√2.');
H('T7', 'Giải tam giác vuông', 'Tam giác ABC vuông tại A có góc B = 30°, BC = 10. Độ dài AC là:', '5', ['5√3', '10√3', '5√2'], 'AC = BC · sin B = 10 · 1/2 = 5.');
H('T7', 'Giải tam giác vuông', 'Tam giác ABC vuông tại A có góc B = 60°, AB = 4. Độ dài BC là:', '8', ['4√3', '2', '8√3'], 'AB = BC · cos B ⇒ BC = 4 : cos 60° = 4 : (1/2) = 8.');
H('T7', 'Ứng dụng thực tế', 'Một chiếc thang dài 5 m tựa vào tường, chân thang cách tường 3 m. Đỉnh thang cách mặt đất:', '4 m', ['2 m', '4,5 m', '√34 m'], 'Định lí Pythagore: √(5² − 3²) = 4 m.');
H('T7', 'Ứng dụng thực tế', 'Từ một điểm trên mặt đất cách chân tháp 50 m, người ta nhìn thấy đỉnh tháp dưới góc nâng 45°. Chiều cao tháp là:', '50 m', ['25 m', '50√3 m', '50√2 m'], 'h = 50 · tan 45° = 50 m.');
H('T7', 'Ứng dụng thực tế', 'Bóng của một cột cờ trên mặt đất dài 6 m khi tia nắng tạo với mặt đất góc 60°. Chiều cao cột cờ là:', '6√3 m', ['3√3 m', '2√3 m', '12 m'], 'h = 6 · tan 60° = 6√3 ≈ 10,4 m.');
H('T7', 'So sánh', 'Sắp xếp theo thứ tự tăng dần: sin 30°, sin 50°, sin 70°.', 'sin 30° < sin 50° < sin 70°', ['sin 70° < sin 50° < sin 30°', 'sin 50° < sin 30° < sin 70°', 'sin 30° = sin 50° = sin 70°'], 'Khi góc nhọn tăng thì sin tăng.');
H('T7', 'Hệ thức lượng giác', 'Cho góc nhọn α có tan α = 3/4. Giá trị sin α là:', '3/5', ['4/5', '3/4', '4/3'], 'Chọn cạnh đối 3, cạnh kề 4 ⇒ cạnh huyền 5 ⇒ sin α = 3/5.');
H('T7', 'Hình chiếu', 'Tam giác vuông có cạnh huyền 13 và một cạnh góc vuông bằng 5. Hình chiếu của cạnh góc vuông đó trên cạnh huyền là:', '25/13', ['144/13', '60/13', '5/13'], 'b² = b\' · a ⇒ b\' = 25/13.');
H('T7', 'Đường cao', 'Tam giác ABC vuông tại A, đường cao AH = 6, BH = 4. Độ dài CH là:', '9', ['24', '10', '3'], 'AH² = BH · CH ⇒ CH = 36/4 = 9.');
H('T7', 'Giá trị lượng giác đặc biệt', 'Giá trị của cos 60° + sin 30° là:', '1', ['√3', '1/2', '√3/2'], 'cos 60° = 1/2, sin 30° = 1/2 ⇒ tổng bằng 1.');
H('T7', 'Hệ thức lượng giác', 'Với góc nhọn α, giá trị tan α · cot α bằng:', '1', ['0', 'sin α', '2'], 'tan α · cot α = 1.');
H('T7', 'Hệ thức cạnh và góc', 'Tam giác ABC vuông tại A. Hệ thức nào sau đây đúng?', 'AC = BC · sin B', ['AC = BC · cos B', 'AC = AB · tan C', 'AC = BC · tan B'], 'Cạnh góc vuông = cạnh huyền × sin góc đối: AC đối diện góc B nên AC = BC · sin B.');
H('T7', 'Giải tam giác vuông', 'Tam giác ABC vuông tại A có AB = 6, BC = 10. Số đo góc C xấp xỉ:', '37°', ['53°', '31°', '60°'], 'sin C = AB/BC = 0,6 ⇒ C ≈ 37°.');
H('T7', 'Diện tích', 'Tam giác ABC vuông tại A có BC = 10, góc B = 30°. Diện tích tam giác là:', '25√3/2', ['25√3', '25/2', '50√3'], 'AC = 5, AB = 5√3 ⇒ S = (5 · 5√3)/2 = 25√3/2.');
H('T7', 'Ứng dụng thực tế', 'Một máy bay cất cánh với góc nâng 30° so với phương ngang. Sau khi bay được quãng đường 12 km, máy bay ở độ cao:', '6 km', ['6√3 km', '12 km', '4 km'], 'h = 12 · sin 30° = 6 km.');
H('T7', 'Tỉ số lượng giác', 'Tam giác ABC vuông tại A có AB = AC. Giá trị sin B là:', '√2/2', ['1/2', '√3/2', '1'], 'Tam giác vuông cân nên B = 45° ⇒ sin B = √2/2.');
H('T7', 'Hệ thức lượng giác', 'Cho góc nhọn α có cos α = 0,8. Giá trị tan α là:', '0,75', ['0,6', '4/3', '0,8'], 'sin α = √(1 − 0,64) = 0,6 ⇒ tan α = 0,6/0,8 = 0,75.');
H('T7', 'Hệ thức lượng giác', 'Biểu thức sin<sup>2</sup> 25° + sin<sup>2</sup> 65° có giá trị bằng:', '1', ['0', '2', 'sin 90°/2'], 'sin 65° = cos 25° nên tổng = sin² 25° + cos² 25° = 1.');

/* ---------- T8: Đường tròn ---------- */
H('T8', 'Vị trí điểm và đường tròn', 'Cho đường tròn (O; 5 cm) và điểm M với OM = 7 cm. Khi đó điểm M:', 'Nằm ngoài đường tròn', ['Nằm trên đường tròn', 'Nằm trong đường tròn', 'Trùng với tâm O'], 'OM = 7 > R = 5 nên M nằm ngoài đường tròn.');
H('T8', 'Đường thẳng và đường tròn', 'Đường thẳng d cách tâm đường tròn (O; 3 cm) một khoảng 3 cm. Khi đó d và (O):', 'Tiếp xúc nhau', ['Cắt nhau', 'Không giao nhau', 'd đi qua tâm O'], 'Khoảng cách từ tâm đến đường thẳng bằng bán kính ⇒ tiếp xúc.');
H('T8', 'Hai đường tròn', 'Hai đường tròn (O; 5 cm) và (O\'; 3 cm) có OO\' = 8 cm. Vị trí tương đối của chúng là:', 'Tiếp xúc ngoài', ['Tiếp xúc trong', 'Cắt nhau', 'Ở ngoài nhau'], 'OO\' = R + r = 8 ⇒ tiếp xúc ngoài.');
H('T8', 'Hai đường tròn', 'Hai đường tròn (O; 5 cm) và (O\'; 3 cm) có OO\' = 2 cm. Vị trí tương đối của chúng là:', 'Tiếp xúc trong', ['Tiếp xúc ngoài', 'Cắt nhau', 'Đựng nhau'], 'OO\' = R − r = 2 ⇒ tiếp xúc trong.');
H('T8', 'Hai đường tròn', 'Hai đường tròn (O; 5 cm) và (O\'; 3 cm) có OO\' = 4 cm. Vị trí tương đối của chúng là:', 'Cắt nhau tại hai điểm', ['Tiếp xúc ngoài', 'Tiếp xúc trong', 'Ở ngoài nhau'], 'R − r = 2 < OO\' = 4 < R + r = 8 ⇒ hai đường tròn cắt nhau.');
H('T8', 'Tiếp tuyến', 'Từ điểm A ngoài đường tròn (O) kẻ hai tiếp tuyến AB, AC (B, C là tiếp điểm). Khẳng định nào KHÔNG luôn đúng?', 'AB = OB', ['AB = AC', 'OA ⊥ BC', 'AO là tia phân giác của góc BAC'], 'Hai tiếp tuyến cắt nhau cho AB = AC, AO là phân giác góc BAC và OA ⊥ BC; AB = OB chỉ xảy ra khi góc BAC = 90°.');
H('T8', 'Tiếp tuyến', 'Đường thẳng d là tiếp tuyến của đường tròn (O) tại A. Khẳng định đúng là:', 'OA ⊥ d', ['OA ∥ d', 'd đi qua O', 'd cắt (O) tại hai điểm'], 'Tiếp tuyến vuông góc với bán kính đi qua tiếp điểm.');
H('T8', 'Góc nội tiếp', 'Góc nội tiếp chắn nửa đường tròn có số đo bằng:', '90°', ['180°', '45°', '60°'], 'Góc nội tiếp bằng nửa số đo cung bị chắn: 180° : 2 = 90°.');
H('T8', 'Góc ở tâm – góc nội tiếp', 'Góc ở tâm AOB = 80°. Góc nội tiếp cùng chắn cung nhỏ AB có số đo:', '40°', ['80°', '160°', '20°'], 'Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung.');
H('T8', 'Góc nội tiếp', 'Góc nội tiếp có số đo 35° thì cung bị chắn có số đo:', '70°', ['35°', '140°', '17,5°'], 'Số đo cung bị chắn gấp đôi góc nội tiếp.');
H('T8', 'Tứ giác nội tiếp', 'Tứ giác ABCD nội tiếp đường tròn có góc A = 70°. Số đo góc C là:', '110°', ['70°', '20°', '290°'], 'Tổng hai góc đối của tứ giác nội tiếp bằng 180°.');
H('T8', 'Tứ giác nội tiếp', 'Hình nào sau đây luôn nội tiếp được đường tròn?', 'Hình chữ nhật', ['Hình thoi', 'Hình bình hành', 'Hình thang'], 'Hình chữ nhật có hai góc đối bù nhau (90° + 90°); tâm đường tròn là giao hai đường chéo.');
H('T8', 'Tứ giác nội tiếp', 'Một hình thoi nội tiếp được đường tròn khi và chỉ khi nó là:', 'Hình vuông', ['Hình chữ nhật', 'Hình bình hành', 'Hình thang cân'], 'Hình thoi nội tiếp cần hai góc đối bù nhau, mà chúng bằng nhau nên mỗi góc 90°: hình vuông.');
H('T8', 'Đường tròn ngoại tiếp', 'Tâm đường tròn ngoại tiếp tam giác vuông là:', 'Trung điểm cạnh huyền', ['Trọng tâm tam giác', 'Giao ba đường cao', 'Giao ba đường phân giác'], 'Góc vuông là góc nội tiếp chắn nửa đường tròn nên cạnh huyền là đường kính.');
H('T8', 'Đường tròn ngoại tiếp', 'Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Bán kính đường tròn ngoại tiếp là:', '5 cm', ['10 cm', '4 cm', '3 cm'], 'Cạnh huyền 10 cm là đường kính ⇒ R = 5 cm.');
H('T8', 'Đa giác đều', 'Bán kính đường tròn ngoại tiếp tam giác đều cạnh 6 cm là:', '2√3 cm', ['3√3 cm', '√3 cm', '6√3 cm'], 'R = a√3/3 = 6√3/3 = 2√3 cm.');
H('T8', 'Đa giác đều', 'Bán kính đường tròn nội tiếp tam giác đều cạnh 6 cm là:', '√3 cm', ['2√3 cm', '3 cm', '3√3 cm'], 'r = a√3/6 = √3 cm.');
H('T8', 'Đa giác đều', 'Lục giác đều cạnh 4 cm nội tiếp đường tròn có bán kính:', '4 cm', ['2 cm', '4√3 cm', '8 cm'], 'Lục giác đều gồm 6 tam giác đều nên R = cạnh = 4 cm.');
H('T8', 'Đa giác đều', 'Số đo mỗi góc của ngũ giác đều là:', '108°', ['72°', '120°', '100°'], 'Mỗi góc = (5 − 2) · 180° / 5 = 108°.');
H('T8', 'Đa giác đều', 'Một đa giác đều có mỗi góc bằng 135°. Số cạnh của đa giác là:', '8', ['6', '10', '12'], '(n − 2) · 180 / n = 135 ⇒ 45n = 360 ⇒ n = 8.');
H('T8', 'Độ dài cung', 'Độ dài cung 60° của đường tròn bán kính 6 cm là:', '2π cm', ['6π cm', 'π cm', '12π cm'], 'l = πRn/180 = π · 6 · 60/180 = 2π cm.');
H('T8', 'Hình quạt tròn', 'Diện tích hình quạt tròn bán kính 3 cm, cung 120° là:', '3π cm<sup>2</sup>', ['9π cm<sup>2</sup>', 'π cm<sup>2</sup>', '6π cm<sup>2</sup>'], 'S = πR²n/360 = π · 9 · 120/360 = 3π cm².');
H('T8', 'Chu vi – diện tích', 'Một đường tròn có chu vi 10π cm. Diện tích hình tròn đó là:', '25π cm<sup>2</sup>', ['100π cm<sup>2</sup>', '10π cm<sup>2</sup>', '5π cm<sup>2</sup>'], '2πR = 10π ⇒ R = 5 ⇒ S = 25π cm².');
H('T8', 'Ứng dụng', 'Bánh xe có bán kính 30 cm quay 100 vòng thì xe đi được quãng đường:', '6000π cm', ['3000π cm', '9000π cm', '600π cm'], 'Mỗi vòng đi được chu vi 60π cm ⇒ 100 vòng: 6000π cm ≈ 188 m.');
H('T8', 'Hình viên phân', 'Cho đường tròn (O; 2 cm) và dây AB với góc AOB = 90°. Diện tích hình viên phân giới hạn bởi dây AB và cung nhỏ AB là:', 'π − 2 (cm<sup>2</sup>)', ['π + 2 (cm<sup>2</sup>)', '2π − 2 (cm<sup>2</sup>)', 'π − 4 (cm<sup>2</sup>)'], 'S quạt = π · 4 · 90/360 = π; S tam giác OAB = 2 · 2/2 = 2 ⇒ S viên phân = π − 2.');
H('T8', 'Dây và khoảng cách đến tâm', 'Đường tròn (O; 5 cm) có dây AB = 8 cm. Khoảng cách từ O đến AB là:', '3 cm', ['4 cm', '5 cm', '2 cm'], 'Gọi H là trung điểm AB: OH = √(5² − 4²) = 3 cm.');
H('T8', 'Dây và khoảng cách đến tâm', 'Trong một đường tròn, khẳng định nào sau đây đúng?', 'Hai dây bằng nhau thì cách tâm bằng nhau', ['Dây lớn hơn thì cách tâm xa hơn', 'Mọi dây đều đi qua tâm', 'Hai dây song song thì bằng nhau'], 'Tính chất: hai dây bằng nhau khi và chỉ khi chúng cách tâm bằng nhau; dây lớn hơn thì gần tâm hơn.');
H('T8', 'Dây cung', 'Trong một đường tròn, dây lớn nhất là:', 'Đường kính', ['Dây đi qua trung điểm bán kính', 'Dây vuông góc với bán kính', 'Không có dây lớn nhất'], 'Mọi dây không đi qua tâm đều nhỏ hơn đường kính.');
H('T8', 'Góc ở tâm – góc nội tiếp', 'Tam giác ABC nội tiếp đường tròn (O) có góc A = 60°. Số đo góc BOC là:', '120°', ['60°', '30°', '240°'], 'Góc ở tâm BOC gấp đôi góc nội tiếp BAC cùng chắn cung BC.');
H('T8', 'Số đo cung', 'Cung nhỏ AB của đường tròn có số đo 100°. Cung lớn AB có số đo:', '260°', ['80°', '160°', '200°'], 'Cung lớn = 360° − 100° = 260°.');
H('T8', 'Tiếp tuyến', 'Từ điểm A cách tâm O của đường tròn (O; 6 cm) một khoảng 10 cm kẻ tiếp tuyến AB (B là tiếp điểm). Độ dài AB là:', '8 cm', ['4 cm', '√136 cm', '16 cm'], 'Tam giác OBA vuông tại B: AB = √(10² − 6²) = 8 cm.');
H('T8', 'Tiếp tuyến', 'Hai tiếp tuyến AB, AC của đường tròn (O) tạo với nhau góc BAC = 60°. Số đo góc BOC là:', '120°', ['60°', '30°', '90°'], 'Tứ giác ABOC có hai góc vuông tại B, C nên góc BOC = 180° − 60° = 120°.');
H('T8', 'Đa giác đều', 'Lục giác đều nội tiếp đường tròn. Số đo cung nhỏ nối hai đỉnh kề nhau là:', '60°', ['30°', '120°', '45°'], '360° : 6 = 60°.');
H('T8', 'Hình tròn nội tiếp', 'Hình vuông cạnh 4 cm có đường tròn nội tiếp. Diện tích phần hình vuông nằm ngoài hình tròn là:', '16 − 4π (cm<sup>2</sup>)', ['16 − 2π (cm<sup>2</sup>)', '8 − 4π (cm<sup>2</sup>)', '16π − 4 (cm<sup>2</sup>)'], 'r = 2 cm ⇒ S tròn = 4π; S vuông = 16 ⇒ 16 − 4π ≈ 3,4 cm².');
H('T8', 'Tứ giác nội tiếp', 'Cho tam giác ABC có các đường cao BD, CE (D ∈ AC, E ∈ AB). Tứ giác nào sau đây nội tiếp đường tròn?', 'BCDE', ['ABDE', 'ABCD', 'ABEC'], 'Góc BEC = góc BDC = 90° cùng nhìn cạnh BC nên B, C, D, E cùng thuộc đường tròn đường kính BC.');
H('T8', 'Góc tạo bởi tiếp tuyến và dây', 'Góc tạo bởi tia tiếp tuyến và dây cung chắn cung 140° có số đo:', '70°', ['140°', '40°', '220°'], 'Góc tạo bởi tia tiếp tuyến và dây cung bằng nửa số đo cung bị chắn.');

/* ---------- T9: Trụ – nón – cầu ---------- */
H('T9', 'Hình trụ', 'Hình trụ có bán kính đáy 3 cm, chiều cao 5 cm. Diện tích xung quanh là:', '30π cm<sup>2</sup>', ['15π cm<sup>2</sup>', '45π cm<sup>2</sup>', '9π cm<sup>2</sup>'], 'S<sub>xq</sub> = 2πrh = 2π · 3 · 5 = 30π cm².');
H('T9', 'Hình trụ', 'Hình trụ có bán kính đáy 3 cm, chiều cao 5 cm. Thể tích là:', '45π cm<sup>3</sup>', ['15π cm<sup>3</sup>', '30π cm<sup>3</sup>', '90π cm<sup>3</sup>'], 'V = πr²h = π · 9 · 5 = 45π cm³.');
H('T9', 'Hình nón', 'Hình nón có bán kính đáy 3 cm, chiều cao 4 cm. Diện tích xung quanh là:', '15π cm<sup>2</sup>', ['12π cm<sup>2</sup>', '20π cm<sup>2</sup>', '25π cm<sup>2</sup>'], 'Đường sinh l = √(3² + 4²) = 5 ⇒ S<sub>xq</sub> = πrl = 15π cm².');
H('T9', 'Hình nón', 'Hình nón có bán kính đáy 3 cm, chiều cao 4 cm. Thể tích là:', '12π cm<sup>3</sup>', ['36π cm<sup>3</sup>', '15π cm<sup>3</sup>', '4π cm<sup>3</sup>'], 'V = (1/3)πr²h = (1/3)π · 9 · 4 = 12π cm³.');
H('T9', 'Hình cầu', 'Hình cầu bán kính 3 cm có thể tích là:', '36π cm<sup>3</sup>', ['12π cm<sup>3</sup>', '27π cm<sup>3</sup>', '108π cm<sup>3</sup>'], 'V = (4/3)πR³ = (4/3)π · 27 = 36π cm³.');
H('T9', 'Hình cầu', 'Hình cầu bán kính 3 cm có diện tích mặt cầu là:', '36π cm<sup>2</sup>', ['9π cm<sup>2</sup>', '12π cm<sup>2</sup>', '18π cm<sup>2</sup>'], 'S = 4πR² = 4π · 9 = 36π cm².');
H('T9', 'Hình trụ', 'Hình trụ có thể tích 100π cm<sup>3</sup> và chiều cao 4 cm. Bán kính đáy là:', '5 cm', ['25 cm', '10 cm', '2,5 cm'], 'πr² · 4 = 100π ⇒ r² = 25 ⇒ r = 5 cm.');
H('T9', 'Hình nón', 'Hình nón có đường sinh 10 cm, bán kính đáy 6 cm. Chiều cao hình nón là:', '8 cm', ['4 cm', '12 cm', '√136 cm'], 'h = √(l² − r²) = √(100 − 36) = 8 cm.');
H('T9', 'Mặt cắt', 'Cắt hình trụ bởi một mặt phẳng song song với đáy, mặt cắt là:', 'Hình tròn', ['Hình chữ nhật', 'Hình elip', 'Hình tam giác'], 'Mặt phẳng song song với đáy cắt hình trụ theo một hình tròn bằng đáy (cắt qua trục mới được hình chữ nhật).');
H('T9', 'Mặt cắt', 'Cắt hình nón bởi mặt phẳng đi qua trục, mặt cắt là:', 'Tam giác cân', ['Hình tròn', 'Tam giác vuông', 'Hình thang'], 'Mặt cắt qua trục là tam giác cân có cạnh bên bằng đường sinh, đáy bằng đường kính.');
H('T9', 'Mặt cắt', 'Cắt hình cầu bởi một mặt phẳng bất kì, mặt cắt là:', 'Hình tròn', ['Hình elip', 'Hình vuông', 'Đoạn thẳng'], 'Mọi mặt phẳng cắt hình cầu đều cho mặt cắt là hình tròn (lớn nhất khi đi qua tâm).');
H('T9', 'Hình thành khối tròn xoay', 'Quay một tam giác vuông một vòng quanh một cạnh góc vuông cố định, ta được:', 'Hình nón', ['Hình trụ', 'Hình cầu', 'Hình chóp'], 'Cạnh góc vuông cố định là trục, cạnh huyền quét thành mặt xung quanh hình nón.');
H('T9', 'Hình trụ', 'Hình trụ có diện tích xung quanh 24π cm<sup>2</sup> và chiều cao 4 cm. Bán kính đáy là:', '3 cm', ['6 cm', '2 cm', '12 cm'], '2πr · 4 = 24π ⇒ r = 3 cm.');
H('T9', 'Hình cầu', 'Hình cầu có thể tích 288π cm<sup>3</sup>. Bán kính hình cầu là:', '6 cm', ['12 cm', '3 cm', '8 cm'], '(4/3)πR³ = 288π ⇒ R³ = 216 ⇒ R = 6 cm.');
H('T9', 'Hình nón', 'Hình nón có thiết diện qua trục là tam giác đều cạnh 6 cm. Thể tích hình nón là:', '9√3π cm<sup>3</sup>', ['27√3π cm<sup>3</sup>', '9π cm<sup>3</sup>', '3√3π cm<sup>3</sup>'], 'r = 3, h = 3√3 ⇒ V = (1/3)π · 9 · 3√3 = 9√3π cm³.');
H('T9', 'Tỉ số thể tích', 'Nếu bán kính đáy hình trụ tăng gấp đôi, chiều cao giữ nguyên thì thể tích:', 'Tăng 4 lần', ['Tăng 2 lần', 'Tăng 8 lần', 'Không đổi'], 'V = πr²h tỉ lệ với r² ⇒ tăng 2² = 4 lần.');
H('T9', 'Tỉ số thể tích', 'Nếu bán kính hình cầu tăng gấp đôi thì thể tích hình cầu:', 'Tăng 8 lần', ['Tăng 2 lần', 'Tăng 4 lần', 'Tăng 6 lần'], 'V tỉ lệ với R³ ⇒ tăng 2³ = 8 lần.');
H('T9', 'Hình trụ', 'Hình trụ có bán kính đáy 2 cm, chiều cao 3 cm. Diện tích toàn phần là:', '20π cm<sup>2</sup>', ['12π cm<sup>2</sup>', '16π cm<sup>2</sup>', '24π cm<sup>2</sup>'], 'S<sub>tp</sub> = 2πrh + 2πr² = 12π + 8π = 20π cm².');
H('T9', 'Hình nón', 'Hình nón có bán kính đáy 3 cm, đường sinh 5 cm. Diện tích toàn phần là:', '24π cm<sup>2</sup>', ['15π cm<sup>2</sup>', '30π cm<sup>2</sup>', '39π cm<sup>2</sup>'], 'S<sub>tp</sub> = πrl + πr² = 15π + 9π = 24π cm².');
H('T9', 'Ứng dụng', 'Một hộp sữa hình trụ có đường kính đáy 8 cm, cao 12 cm. Thể tích hộp là:', '192π cm<sup>3</sup>', ['768π cm<sup>3</sup>', '96π cm<sup>3</sup>', '384π cm<sup>3</sup>'], 'r = 4 ⇒ V = π · 16 · 12 = 192π cm³ ≈ 603 cm³.');
H('T9', 'Ứng dụng', 'Một quả bóng đá hình cầu có đường kính 22 cm. Diện tích mặt bóng là:', '484π cm<sup>2</sup>', ['121π cm<sup>2</sup>', '1936π cm<sup>2</sup>', '242π cm<sup>2</sup>'], 'R = 11 ⇒ S = 4π · 121 = 484π cm².');
H('T9', 'Ứng dụng', 'Một chiếc nón lá có bán kính đáy 20 cm và đường sinh 25 cm. Diện tích xung quanh của nón là:', '500π cm<sup>2</sup>', ['1000π cm<sup>2</sup>', '400π cm<sup>2</sup>', '250π cm<sup>2</sup>'], 'S<sub>xq</sub> = πrl = π · 20 · 25 = 500π cm².');
H('T9', 'Ứng dụng', 'Một cốc hình trụ có bán kính đáy 3 cm đang chứa nước. Thả chìm vào cốc một viên bi hình cầu bán kính 1,5 cm thì mực nước dâng lên:', '0,5 cm', ['1 cm', '1,5 cm', '0,25 cm'], 'V bi = (4/3)π · 1,5³ = 4,5π; nước dâng h = 4,5π/(π · 9) = 0,5 cm.');
H('T9', 'Tỉ số thể tích', 'Một hình cầu nội tiếp hình trụ (đường kính cầu bằng đường kính đáy và bằng chiều cao trụ). Tỉ số thể tích hình cầu và hình trụ là:', '2/3', ['1/2', '3/4', '1/3'], 'V cầu = (4/3)πR³, V trụ = πR² · 2R = 2πR³ ⇒ tỉ số = 2/3.');
H('T9', 'Tỉ số thể tích', 'Hình nón và hình trụ có cùng bán kính đáy và cùng chiều cao. Tỉ số thể tích hình nón so với hình trụ là:', '1/3', ['1/2', '1', '3'], 'V nón = (1/3)πr²h, V trụ = πr²h ⇒ tỉ số 1/3.');
H('T9', 'Hình thành khối tròn xoay', 'Quay hình chữ nhật một vòng quanh một cạnh cố định ta được:', 'Hình trụ', ['Hình nón', 'Hình cầu', 'Hình nón cụt'], 'Cạnh cố định là trục, cạnh đối diện quét thành mặt xung quanh hình trụ.');

/* ---------- T10: Thống kê ---------- */
const BT = 'Bảng tần số điểm kiểm tra của 30 học sinh: điểm 5 (2 học sinh), điểm 6 (5), điểm 7 (8), điểm 8 (10), điểm 9 (3), điểm 10 (2).';
H('T10', 'Tần số tương đối', BT + ' Tần số tương đối của điểm 8 là:', '33,3%', ['10%', '30%', '25%'], 'f = 10/30 ≈ 33,3%.');
H('T10', 'Tần số tương đối', BT + ' Tỉ lệ học sinh đạt điểm 7 hoặc 8 là:', '60%', ['50%', '40%', '70%'], '(8 + 10)/30 = 18/30 = 60%.');
H('T10', 'Bảng tần số', BT + ' Giá trị có tần số lớn nhất là:', '8', ['7', '10', '6'], 'Điểm 8 có tần số 10, lớn nhất trong bảng.');
H('T10', 'Tần số tương đối', BT + ' Tỉ lệ học sinh đạt từ 8 điểm trở lên là:', '50%', ['60%', '45%', '15%'], '(10 + 3 + 2)/30 = 15/30 = 50%.');
H('T10', 'Bảng tần số tương đối', 'Khảo sát phương tiện đến trường của 40 học sinh: xe đạp 45%, đi bộ 30%, xe buýt 15%, phương tiện khác 10%. Số học sinh đi xe đạp là:', '18', ['45', '12', '20'], '45% × 40 = 18 học sinh.');
H('T10', 'Biểu đồ hình quạt tròn', 'Trong biểu đồ hình quạt tròn, phần chiếm 25% ứng với hình quạt có góc ở tâm:', '90°', ['25°', '45°', '180°'], '25% × 360° = 90°.');
H('T10', 'Biểu đồ hình quạt tròn', 'Trong biểu đồ hình quạt tròn, hình quạt có góc ở tâm 72° biểu diễn tỉ lệ:', '20%', ['72%', '25%', '10%'], '72/360 = 20%.');
H('T10', 'Lý thuyết', 'Tổng các tần số tương đối trong một bảng tần số tương đối luôn bằng:', '100%', ['50%', 'Tuỳ bảng số liệu', '0%'], 'Tổng các tần số bằng tổng số dữ liệu N nên tổng tần số tương đối = N/N = 100%.');
H('T10', 'Chọn biểu đồ', 'Để so sánh tỉ lệ các phần so với tổng thể (ví dụ tỉ lệ các loại phương tiện đến trường), biểu đồ phù hợp nhất là:', 'Biểu đồ hình quạt tròn', ['Biểu đồ đoạn thẳng', 'Bảng số liệu thô', 'Biểu đồ tranh'], 'Biểu đồ hình quạt tròn thể hiện trực quan tỉ lệ phần trăm của từng phần trong tổng thể.');
H('T10', 'Chọn biểu đồ', 'Để theo dõi sự thay đổi nhiệt độ trung bình các tháng trong năm, biểu đồ phù hợp nhất là:', 'Biểu đồ đoạn thẳng', ['Biểu đồ hình quạt tròn', 'Biểu đồ tranh', 'Bảng tần số tương đối'], 'Biểu đồ đoạn thẳng thể hiện xu hướng thay đổi theo thời gian.');
const DL = 'Cho dãy số liệu: 3; 5; 5; 7; 8; 5; 3; 9; 5; 10.';
H('T10', 'Tần số tương đối', DL + ' Tần số tương đối của giá trị 5 là:', '40%', ['4%', '50%', '30%'], 'Giá trị 5 xuất hiện 4 lần trong 10 số liệu ⇒ 4/10 = 40%.');
H('T10', 'Tần số tương đối', DL + ' Tần số tương đối của giá trị 3 là:', '20%', ['2%', '30%', '10%'], 'Giá trị 3 xuất hiện 2 lần ⇒ 2/10 = 20%.');
const GN = 'Bảng tần số ghép nhóm chiều cao (cm) của 35 học sinh: [150; 155): 4; [155; 160): 10; [160; 165): 12; [165; 170): 6; [170; 175): 3.';
H('T10', 'Bảng tần số ghép nhóm', GN + ' Nhóm có tần số lớn nhất là:', '[160; 165)', ['[155; 160)', '[165; 170)', '[150; 155)'], 'Nhóm [160; 165) có tần số 12, lớn nhất.');
H('T10', 'Bảng tần số ghép nhóm', GN + ' Tần số tương đối của nhóm [155; 160) là:', '28,6%', ['10%', '25%', '35%'], '10/35 ≈ 28,6%.');
H('T10', 'Bảng tần số ghép nhóm', GN + ' Tỉ lệ học sinh cao từ 165 cm trở lên là:', '25,7%', ['17,1%', '9%', '34,3%'], '(6 + 3)/35 = 9/35 ≈ 25,7%.');
H('T10', 'Bảng tần số tương đối', 'Khảo sát 200 người, có 35% chọn phương án A. Số người chọn phương án A là:', '70', ['35', '65', '130'], '35% × 200 = 70 người.');
H('T10', 'Bảng tần số tương đối', 'Một bảng tần số tương đối có 4 giá trị với tần số tương đối lần lượt là 20%; 35%; ?; 15%. Giá trị còn thiếu là:', '30%', ['25%', '70%', '40%'], '100% − (20 + 35 + 15)% = 30%.');
H('T10', 'Lý thuyết', 'Tần số tương đối f của một giá trị có tần số n trong N dữ liệu được tính bởi:', 'f = n/N · 100%', ['f = N/n · 100%', 'f = n · N', 'f = N − n'], 'Định nghĩa tần số tương đối.');
H('T10', 'Tần số tương đối', 'Trong 25 bài kiểm tra có 3 bài đạt điểm 10. Tần số tương đối của điểm 10 là:', '12%', ['3%', '25%', '30%'], '3/25 = 12%.');
H('T10', 'Biểu đồ hình quạt tròn', 'Biểu đồ hình quạt tròn của 60 học sinh có hình quạt "Bóng đá" chiếm 120°. Số học sinh thích bóng đá là:', '20', ['12', '30', '40'], '120/360 = 1/3 ⇒ 60 · 1/3 = 20 học sinh.');
H('T10', 'Bảng tần số ghép nhóm', 'Với số liệu cân nặng (kg) 42; 45; 47; 50; 52; 55; 58; 61, nếu chia thành các nhóm [40; 50), [50; 60), [60; 70) thì tần số nhóm [50; 60) là:', '4', ['3', '5', '2'], 'Các giá trị 50; 52; 55; 58 thuộc [50; 60) ⇒ tần số 4.');

/* ---------- T11: Xác suất ---------- */
H('T11', 'Gieo xúc xắc', 'Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện là số chẵn là:', '1/2', ['1/3', '1/6', '2/3'], 'Các kết quả thuận lợi: 2; 4; 6 ⇒ P = 3/6 = 1/2.');
H('T11', 'Gieo xúc xắc', 'Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện chia hết cho 3 là:', '1/3', ['1/2', '1/6', '2/3'], 'Kết quả thuận lợi: 3; 6 ⇒ P = 2/6 = 1/3.');
H('T11', 'Gieo xúc xắc', 'Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện lớn hơn 4 là:', '1/3', ['1/2', '2/3', '1/6'], 'Kết quả thuận lợi: 5; 6 ⇒ P = 2/6 = 1/3.');
H('T11', 'Không gian mẫu', 'Gieo hai con xúc xắc cân đối. Số phần tử của không gian mẫu là:', '36', ['12', '6', '21'], 'Mỗi con có 6 kết quả ⇒ 6 × 6 = 36 kết quả đồng khả năng.');
H('T11', 'Gieo hai xúc xắc', 'Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng 7 là:', '1/6', ['7/36', '1/12', '1/36'], 'Có 6 kết quả thuận lợi: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1) ⇒ P = 6/36 = 1/6.');
H('T11', 'Gieo hai xúc xắc', 'Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng 12 là:', '1/36', ['1/12', '1/18', '1/6'], 'Chỉ có (6; 6) ⇒ P = 1/36.');
H('T11', 'Gieo hai xúc xắc', 'Gieo hai con xúc xắc cân đối. Xác suất để hai con xúc xắc xuất hiện cùng số chấm là:', '1/6', ['1/36', '1/12', '1/3'], 'Có 6 kết quả (1;1), …, (6;6) ⇒ P = 6/36 = 1/6.');
H('T11', 'Gieo hai xúc xắc', 'Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm không vượt quá 4 là:', '1/6', ['1/9', '1/12', '5/36'], 'Kết quả thuận lợi: (1;1), (1;2), (2;1), (1;3), (3;1), (2;2) ⇒ 6/36 = 1/6.');
H('T11', 'Tung đồng xu', 'Tung hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt sấp là:', '1/4', ['1/2', '1/3', '3/4'], 'Không gian mẫu {SS, SN, NS, NN} có 4 kết quả, 1 kết quả thuận lợi ⇒ 1/4.');
H('T11', 'Tung đồng xu', 'Tung hai đồng xu cân đối. Xác suất để có ít nhất một đồng xu xuất hiện mặt ngửa là:', '3/4', ['1/2', '1/4', '2/3'], 'Chỉ có SS là không thuận lợi ⇒ P = 3/4.');
H('T11', 'Tung đồng xu', 'Tung ba đồng xu cân đối. Xác suất để có đúng hai đồng xu xuất hiện mặt ngửa là:', '3/8', ['1/4', '1/8', '1/2'], 'Không gian mẫu có 8 kết quả; thuận lợi: NNS, NSN, SNN ⇒ 3/8.');
H('T11', 'Lấy bi', 'Một hộp có 3 viên bi đỏ và 2 viên bi xanh cùng kích cỡ. Lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ là:', '3/5', ['2/5', '1/2', '3/2'], 'P = 3/(3 + 2) = 3/5.');
H('T11', 'Rút thẻ', 'Rút ngẫu nhiên một thẻ từ 20 thẻ ghi số 1 đến 20. Xác suất rút được thẻ ghi số nguyên tố là:', '2/5', ['1/2', '7/20', '9/20'], 'Các số nguyên tố: 2, 3, 5, 7, 11, 13, 17, 19 (8 số) ⇒ 8/20 = 2/5.');
H('T11', 'Rút thẻ', 'Rút ngẫu nhiên một thẻ từ 20 thẻ ghi số 1 đến 20. Xác suất rút được thẻ ghi số chia hết cho 3 là:', '3/10', ['1/3', '7/20', '1/5'], 'Các số 3, 6, 9, 12, 15, 18 (6 số) ⇒ 6/20 = 3/10.');
H('T11', 'Rút thẻ', 'Rút ngẫu nhiên một thẻ từ 20 thẻ ghi số 1 đến 20. Xác suất rút được thẻ ghi số chia hết cho cả 2 và 3 là:', '3/20', ['1/6', '1/5', '1/4'], 'Chia hết cho 6: 6, 12, 18 ⇒ 3/20.');
H('T11', 'Không gian mẫu', 'Chọn ngẫu nhiên 2 bạn từ 4 bạn An, Bình, Cường, Dũng. Số phần tử của không gian mẫu là:', '6', ['4', '12', '8'], 'Các cặp: AB, AC, AD, BC, BD, CD ⇒ 6 cách.');
H('T11', 'Chọn người', 'Một nhóm có 2 bạn nam và 2 bạn nữ. Chọn ngẫu nhiên 2 bạn. Xác suất để chọn được 1 nam và 1 nữ là:', '2/3', ['1/2', '1/3', '1/4'], 'Có 6 cách chọn 2 bạn; 2 × 2 = 4 cách chọn 1 nam 1 nữ ⇒ 4/6 = 2/3.');
H('T11', 'Lấy bi', 'Hộp có 1 viên bi đỏ và 3 viên bi xanh. Lấy ngẫu nhiên 2 viên. Xác suất để cả hai viên đều xanh là:', '1/2', ['1/4', '3/4', '1/3'], 'Có 6 cách lấy 2 viên; 3 cách lấy 2 viên xanh ⇒ 3/6 = 1/2.');
H('T11', 'Biến cố chắc chắn', 'Gieo một con xúc xắc. Xác suất của biến cố "Số chấm xuất hiện nhỏ hơn 7" là:', '1', ['6/7', '0', '1/6'], 'Mọi kết quả đều thoả mãn: biến cố chắc chắn có xác suất 1.');
H('T11', 'Lý thuyết', 'Xác suất của một biến cố A luôn thoả mãn:', '0 ≤ P(A) ≤ 1', ['P(A) > 1', 'P(A) < 0', '0 < P(A) < 1'], 'Xác suất là tỉ số số kết quả thuận lợi trên tổng số kết quả nên nằm trong [0; 1].');
H('T11', 'Chọn người', 'Lớp có 18 học sinh nam và 12 học sinh nữ. Chọn ngẫu nhiên một học sinh. Xác suất chọn được học sinh nữ là:', '2/5', ['3/5', '2/3', '1/2'], 'P = 12/30 = 2/5.');
H('T11', 'Chọn số', 'Chọn ngẫu nhiên một số có hai chữ số. Xác suất để số đó chia hết cho 10 là:', '1/10', ['1/9', '10/99', '1/5'], 'Có 90 số có hai chữ số, 9 số chia hết cho 10 (10, 20, …, 90) ⇒ 9/90 = 1/10.');
H('T11', 'Vòng quay', 'Một vòng quay chia thành 8 phần bằng nhau ghi số 1 đến 8. Quay một lần, xác suất mũi tên chỉ vào số lớn hơn 5 là:', '3/8', ['5/8', '1/2', '1/4'], 'Các số 6, 7, 8 ⇒ 3/8.');
H('T11', 'Gieo hai xúc xắc', 'Gieo một con xúc xắc hai lần. Xác suất để số chấm lần thứ nhất lớn hơn số chấm lần thứ hai là:', '5/12', ['1/2', '1/6', '7/12'], 'Có 6 kết quả hai lần bằng nhau, 30 kết quả còn lại chia đều cho hai trường hợp ⇒ 15/36 = 5/12.');
H('T11', 'Rút thẻ', 'Hộp có 10 thẻ ghi số 1 đến 10. Rút ngẫu nhiên 2 thẻ. Xác suất để tổng hai số trên thẻ là số chẵn là:', '4/9', ['1/2', '5/9', '2/5'], 'Có 45 cách rút; tổng chẵn khi cả hai cùng lẻ (10 cách) hoặc cùng chẵn (10 cách) ⇒ 20/45 = 4/9.');
H('T11', 'Biến cố không thể', 'Gieo hai con xúc xắc. Xác suất của biến cố "Tổng số chấm bằng 13" là:', '0', ['1/36', '1/13', '1'], 'Tổng lớn nhất là 12 nên biến cố không thể xảy ra: P = 0.');
H('T11', 'Chọn người', 'Ba bạn An, Bình, Cường xếp ngẫu nhiên thành một hàng ngang. Xác suất để An đứng ở giữa là:', '1/3', ['1/2', '1/6', '2/3'], 'Có 6 cách xếp; An ở giữa có 2 cách (B-A-C, C-A-B) ⇒ 2/6 = 1/3.');

/* ── PHẦN 2 (họ câu tham số hoá) và PHẦN 3 (lắp đề) được nối tiếp bên dưới ── */
