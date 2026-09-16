// SINH TỰ ĐỘNG "Toán lớp 6 — 100 đề luyện học sinh giỏi theo chuyên đề"
//   node tools/gen-thcs-toan6.mjs
// Tạo:  web/data-toan6.js  (100 đề × 10 câu = 1000 câu, id 20001–20100)
//
// Nguồn câu: (1) BANK — hơn 300 câu viết tay (lý thuyết, nhận biết, câu đố, bài toán lời văn);
//            (2) FAMILIES — hơn 35 họ câu tham số hoá, đáp án tính bằng code, phương án nhiễu
//                mô phỏng lỗi hay gặp. RNG có hạt giống nên chạy lại cho ra đúng cùng một file.
// Mức độ: HSG cấp trường / cấp huyện, bám GDPT 2018 (SGK Kết nối tri thức). ~25% vận dụng cao.
// (Đây là file sinh tự động — sửa nội dung trong script này rồi chạy lại, đừng sửa data-toan6.js.)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'web', 'data-toan6.js');

// ---------- RNG có hạt giống ----------
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20260916);
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = arr => arr[Math.floor(rnd() * arr.length)];
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ---------- Toán học ----------
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const lcm = (a, b) => a / gcd(a, b) * b;
const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const divisors = n => { const r = []; for (let i = 1; i <= n; i++) if (n % i === 0) r.push(i); return r; };
function factorize(n) { const f = {}; let d = 2; while (n > 1) { while (n % d === 0) { f[d] = (f[d] || 0) + 1; n /= d; } d++; } return f; }
const factorStr = n => Object.entries(factorize(n)).map(([p, e]) => e > 1 ? `${p}<sup>${e}</sup>` : p).join(' · ');
const fmt = n => { // 12345 -> "12 345"; số âm giữ dấu −
  const neg = n < 0; n = Math.abs(n);
  const s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (neg ? '−' : '') + s;
};
const sgn = n => n < 0 ? `(−${fmt(-n)})` : String(n);   // viết số nguyên trong biểu thức
const neg = n => n < 0 ? `−${fmt(-n)}` : fmt(n);
const frac = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? neg(a) : `${neg(a)}/${b}`; };
const dec = (x, d = 2) => { let s = (Math.round(x * 10 ** d) / 10 ** d).toString().replace('.', ','); return s.replace(/^-/, '−'); };
const pct = x => dec(x, 1) + '%';

// ---------- Kiểm tra phương án ----------
// Trả về 3 phương án nhiễu (chuỗi) khác nhau và khác đáp án đúng.
function distinct(correct, cands, fallback) {
  const seen = new Set([String(correct)]);
  const out = [];
  for (const c of cands) { const s = String(c); if (!seen.has(s)) { seen.add(s); out.push(s); } if (out.length === 3) break; }
  let k = 1;
  while (out.length < 3) {
    const s = String(fallback ? fallback(k) : (Number(String(correct).replace(/\s/g, '').replace('−', '-')) + (k % 2 ? k : -k)));
    if (!seen.has(s)) { seen.add(s); out.push(s); }
    k++; if (k > 60) throw new Error('Không tạo đủ phương án nhiễu cho ' + correct);
  }
  return out;
}
// Phương án nhiễu cho số nguyên: nhận danh sách số, lọc trùng, bù bằng ±k.
function numD(correct, cands) {
  return distinct(fmt(correct), cands.map(v => fmt(v)), k => fmt(correct + (k % 2 ? Math.ceil(k / 2) : -Math.ceil(k / 2))));
}

// ---------- Kho câu ----------
// Mỗi mục: { t: chủ đề, sec, text, ok: đáp án đúng, wr: [3 nhiễu], why, hard }
const BANK = [];
function Q(t, sec, text, ok, wr, why, hard = 0) {
  BANK.push({ t, sec, text, ok: String(ok), wr: wr.map(String), why, hard });
}

// ═══════════ BANK — SỐ TỰ NHIÊN (tập hợp, ghi số, phép tính, luỹ thừa, thứ tự thực hiện) ═══════════
Q('nt', 'Tập hợp', 'Cho tập hợp A = {x ∈ ℕ | 3 &lt; x ≤ 8}. Tập hợp A có bao nhiêu phần tử?', '5', ['6', '4', '8'], 'A = {4; 5; 6; 7; 8} có 5 phần tử.');
Q('nt', 'Tập hợp', 'Cách viết nào sau đây là đúng với tập hợp M = {a; b; c}?', 'a ∈ M', ['a ⊂ M', '{a} ∈ M', 'd ∈ M'], 'a là một phần tử của M nên viết a ∈ M. {a} là tập hợp con nên phải dùng ⊂.');
Q('nt', 'Tập hợp', 'Tập hợp các số tự nhiên lẻ nhỏ hơn 10 được viết bằng cách liệt kê là:', '{1; 3; 5; 7; 9}', ['{1; 3; 5; 7}', '{0; 1; 3; 5; 7; 9}', '{1; 3; 5; 7; 9; 11}'], 'Các số lẻ nhỏ hơn 10 là 1; 3; 5; 7; 9.');
Q('nt', 'Tập hợp', 'Tập hợp B = {0; 3; 6; 9; …; 99} có bao nhiêu phần tử?', '34', ['33', '32', '99'], 'Số phần tử = (99 − 0) : 3 + 1 = 34.');
Q('nt', 'Tập hợp', 'Tập hợp ℕ* khác tập hợp ℕ ở điểm nào?', 'ℕ* không chứa số 0', ['ℕ* chứa cả số âm', 'ℕ* chỉ có số lẻ', 'ℕ* có hữu hạn phần tử'], 'ℕ* = {1; 2; 3; …} là tập số tự nhiên khác 0.');
Q('nt', 'Ghi số', 'Số La Mã XXIV có giá trị là:', '24', ['26', '14', '34'], 'XX = 20, IV = 4 → 24.');
Q('nt', 'Ghi số', 'Số 19 viết bằng chữ số La Mã là:', 'XIX', ['XVIIII', 'IXX', 'XVIV'], '19 = 10 + 9 = X + IX = XIX.');
Q('nt', 'Ghi số', 'Số tự nhiên lớn nhất có 4 chữ số khác nhau là:', '9876', ['9999', '9987', '9870'], 'Chọn các chữ số lớn nhất khác nhau theo thứ tự giảm: 9876.');
Q('nt', 'Ghi số', 'Số tự nhiên nhỏ nhất có 5 chữ số khác nhau là:', '10 234', ['10 000', '12 345', '10 123'], 'Chữ số đầu là 1 (không thể là 0), tiếp theo là 0, 2, 3, 4.');
Q('nt', 'Ghi số', 'Có bao nhiêu số tự nhiên có 3 chữ số?', '900', ['999', '899', '1000'], 'Từ 100 đến 999 có 999 − 100 + 1 = 900 số.');
Q('nt', 'Ghi số', 'Từ ba chữ số 0; 5; 7 lập được bao nhiêu số có 3 chữ số khác nhau?', '4', ['6', '3', '5'], 'Chữ số hàng trăm chỉ có thể là 5 hoặc 7: 507; 570; 705; 750 → 4 số.', 1);
Q('nt', 'Ghi số', 'Để viết các số tự nhiên từ 1 đến 100 cần dùng tất cả bao nhiêu chữ số?', '192', ['200', '100', '189'], '1–9: 9 chữ số; 10–99: 90 × 2 = 180; số 100: 3 chữ số. Tổng 9 + 180 + 3 = 192.', 1);
Q('nt', 'Ghi số', 'Chữ số 7 xuất hiện bao nhiêu lần khi viết các số tự nhiên từ 1 đến 100?', '20', ['10', '19', '21'], 'Hàng đơn vị: 7, 17, …, 97 → 10 lần; hàng chục: 70–79 → 10 lần. Tổng 20 lần.', 1);
Q('nt', 'Phép tính', 'Kết quả của phép tính 37 × 25 × 4 là:', '3700', ['370', '3600', '3800'], '25 × 4 = 100, rồi 37 × 100 = 3700.');
Q('nt', 'Phép tính', 'Tính nhanh: 125 × 8 × 15 × 4', '60 000', ['6000', '600 000', '50 000'], '125 × 8 = 1000; 15 × 4 = 60; 1000 × 60 = 60 000.');
Q('nt', 'Phép tính', 'Tính: 1 + 2 + 3 + … + 100', '5050', ['5000', '5100', '4950'], 'Có 100 số, tổng = (1 + 100) × 100 : 2 = 5050.');
Q('nt', 'Phép tính', 'Tổng 2 + 4 + 6 + … + 200 bằng:', '10 100', ['10 000', '20 100', '5050'], 'Có (200 − 2) : 2 + 1 = 100 số; tổng = (2 + 200) × 100 : 2 = 10 100.');
Q('nt', 'Phép tính', 'Trong phép chia có dư, số dư lớn nhất có thể khi chia cho 13 là:', '12', ['13', '1', '11'], 'Số dư luôn nhỏ hơn số chia: dư lớn nhất = 13 − 1 = 12.');
Q('nt', 'Phép tính', 'Một số chia cho 9 được thương là 47 và số dư lớn nhất có thể. Số đó là:', '431', ['423', '424', '432'], 'Dư lớn nhất là 8: số cần tìm = 9 × 47 + 8 = 431.');
Q('nt', 'Phép tính', 'Tính hợp lý: 99 × 47 + 47', '4700', ['4653', '4747', '4600'], '99 × 47 + 47 = 47 × (99 + 1) = 47 × 100 = 4700.');
Q('nt', 'Phép tính', 'Tính: 2020 × 2021 − 2019 × 2021', '2021', ['2020', '1', '4041'], '2021 × (2020 − 2019) = 2021 × 1 = 2021.');
Q('nt', 'Luỹ thừa', 'Viết gọn tích 3 · 3 · 3 · 3 · 3 dưới dạng một luỹ thừa:', '3<sup>5</sup>', ['5<sup>3</sup>', '3 · 5', '3<sup>4</sup>'], 'Tích của 5 thừa số 3 là 3<sup>5</sup>.');
Q('nt', 'Luỹ thừa', 'Giá trị của 2<sup>10</sup> là:', '1024', ['100', '20', '512'], '2<sup>10</sup> = 1024.');
Q('nt', 'Luỹ thừa', 'Số nào sau đây là một số chính phương?', '144', ['140', '150', '124'], '144 = 12². Các số còn lại không là bình phương của số tự nhiên nào.');
Q('nt', 'Luỹ thừa', 'Tích 5<sup>4</sup> · 5<sup>3</sup> viết dưới dạng một luỹ thừa là:', '5<sup>7</sup>', ['5<sup>12</sup>', '25<sup>7</sup>', '10<sup>7</sup>'], 'Nhân hai luỹ thừa cùng cơ số: giữ cơ số, cộng số mũ: 5<sup>4 + 3</sup> = 5<sup>7</sup>.');
Q('nt', 'Luỹ thừa', 'Thương 7<sup>9</sup> : 7<sup>3</sup> bằng:', '7<sup>6</sup>', ['7<sup>3</sup>', '1<sup>6</sup>', '7<sup>12</sup>'], 'Chia hai luỹ thừa cùng cơ số: trừ số mũ: 7<sup>9 − 3</sup> = 7<sup>6</sup>.');
Q('nt', 'Luỹ thừa', 'So sánh 2<sup>7</sup> và 5<sup>3</sup>:', '2<sup>7</sup> &gt; 5<sup>3</sup>', ['2<sup>7</sup> &lt; 5<sup>3</sup>', '2<sup>7</sup> = 5<sup>3</sup>', 'Không so sánh được'], '2<sup>7</sup> = 128; 5<sup>3</sup> = 125 → 128 &gt; 125.');
Q('nt', 'Luỹ thừa', 'Số 1 000 000 viết dưới dạng luỹ thừa của 10 là:', '10<sup>6</sup>', ['10<sup>5</sup>', '10<sup>7</sup>', '6<sup>10</sup>'], '1 000 000 có 6 chữ số 0 → 10<sup>6</sup>.');
Q('nt', 'Luỹ thừa', 'Chữ số tận cùng của 7<sup>2024</sup> là:', '1', ['7', '9', '3'], 'Tận cùng của 7<sup>n</sup> lặp theo chu kì 4: 7, 9, 3, 1. Vì 2024 chia hết cho 4 nên tận cùng là 1.', 1);
Q('nt', 'Luỹ thừa', 'Chữ số tận cùng của 2<sup>2023</sup> là:', '8', ['2', '4', '6'], 'Tận cùng 2<sup>n</sup> lặp: 2, 4, 8, 6. 2023 chia 4 dư 3 → tận cùng là 8.', 1);
Q('nt', 'Luỹ thừa', 'So sánh A = 2<sup>300</sup> và B = 3<sup>200</sup>:', 'A &lt; B', ['A &gt; B', 'A = B', 'Không so sánh được'], 'A = (2<sup>3</sup>)<sup>100</sup> = 8<sup>100</sup>; B = (3<sup>2</sup>)<sup>100</sup> = 9<sup>100</sup>. Vì 8 &lt; 9 nên A &lt; B.', 1);
Q('nt', 'Luỹ thừa', 'Tìm số tự nhiên n biết 2<sup>n</sup> = 64.', '6', ['5', '7', '32'], '2<sup>6</sup> = 64 nên n = 6.');
Q('nt', 'Luỹ thừa', 'Tìm số tự nhiên x biết 3<sup>x</sup> · 3 = 243.', '4', ['5', '3', '81'], '3<sup>x + 1</sup> = 3<sup>5</sup> → x + 1 = 5 → x = 4.', 1);
Q('nt', 'Luỹ thừa', 'Giá trị của biểu thức 5<sup>2</sup> · 2<sup>3</sup> − 10<sup>2</sup> là:', '100', ['0', '200', '150'], '25 · 8 − 100 = 200 − 100 = 100.');
Q('nt', 'Thứ tự phép tính', 'Kết quả của 60 − 40 : 5 + 2 là:', '54', ['6', '18', '52'], 'Thực hiện chia trước: 40 : 5 = 8; rồi 60 − 8 + 2 = 54.');
Q('nt', 'Thứ tự phép tính', 'Tính: 100 : {2 · [52 − (35 − 8)]}', '2', ['1', '4', '50'], '35 − 8 = 27; 52 − 27 = 25; 2 · 25 = 50; 100 : 50 = 2.');
Q('nt', 'Thứ tự phép tính', 'Giá trị của biểu thức 3<sup>2</sup> · 4 − 2<sup>3</sup> · 3 là:', '12', ['0', '48', '24'], '9 · 4 − 8 · 3 = 36 − 24 = 12.');
Q('nt', 'Thứ tự phép tính', 'Tính: 2<sup>3</sup> · 5 − (12 + 3)<sup>2</sup> : 15', '25', ['15', '40', '175'], '8 · 5 = 40; (15)<sup>2</sup> : 15 = 225 : 15 = 15; 40 − 15 = 25.');
Q('nt', 'Tìm x', 'Tìm x biết (x − 15) · 3 = 45.', '30', ['15', '10', '45'], 'x − 15 = 45 : 3 = 15 → x = 30.');
Q('nt', 'Tìm x', 'Tìm x biết 2<sup>x</sup> + 2<sup>x+1</sup> = 96.', '5', ['4', '6', '32'], '2<sup>x</sup>(1 + 2) = 96 → 2<sup>x</sup> = 32 → x = 5.', 1);
Q('nt', 'Tìm x', 'Tìm x biết 7<sup>2</sup> − (x + 4)<sup>2</sup> = 13.', '2', ['6', '4', '32'], '(x + 4)<sup>2</sup> = 49 − 13 = 36 = 6<sup>2</sup> → x + 4 = 6 → x = 2.', 1);
Q('nt', 'Dãy số', 'Cho dãy 3; 7; 11; 15; … Số hạng thứ 20 của dãy là:', '79', ['80', '83', '75'], 'Số hạng thứ n = 3 + (n − 1) · 4. Với n = 20: 3 + 19 · 4 = 79.', 1);
Q('nt', 'Dãy số', 'Dãy số 1; 4; 9; 16; 25; … Số hạng tiếp theo là:', '36', ['30', '35', '49'], 'Đây là dãy số chính phương 1², 2², 3², … → tiếp theo là 6² = 36.');
Q('nt', 'Dãy số', 'Dãy 1; 1; 2; 3; 5; 8; 13; … Số hạng tiếp theo là:', '21', ['18', '20', '26'], 'Mỗi số bằng tổng hai số liền trước: 8 + 13 = 21.');
Q('nt', 'Dãy số', 'Tính tổng S = 1 + 3 + 5 + … + 99.', '2500', ['2450', '5000', '2550'], 'Có (99 − 1) : 2 + 1 = 50 số; S = (1 + 99) · 50 : 2 = 2500.', 1);
Q('nt', 'Dãy số', 'Dãy 2; 6; 18; 54; … Số hạng thứ 6 của dãy là:', '486', ['162', '324', '648'], 'Mỗi số gấp 3 lần số trước: 2; 6; 18; 54; 162; 486.');
Q('nt', 'Bài toán', 'Một cuốn sách có 250 trang. Cần dùng bao nhiêu chữ số để đánh số trang cuốn sách đó?', '642', ['750', '640', '500'], 'Trang 1–9: 9 chữ số; 10–99: 180; 100–250: 151 × 3 = 453. Tổng 9 + 180 + 453 = 642.', 1);
Q('nt', 'Bài toán', 'Bạn An mua 3 quyển vở giá 8000 đồng/quyển và 2 bút giá 5000 đồng/cái. An đưa 50 000 đồng, được trả lại:', '16 000 đồng', ['34 000 đồng', '13 000 đồng', '26 000 đồng'], 'Tiền mua: 3 × 8000 + 2 × 5000 = 34 000. Trả lại: 50 000 − 34 000 = 16 000 đồng.');
Q('nt', 'Bài toán', 'Một hình vuông có cạnh 2<sup>3</sup> cm. Diện tích hình vuông đó viết dưới dạng luỹ thừa là:', '2<sup>6</sup> cm²', ['2<sup>5</sup> cm²', '4<sup>3</sup> cm²', '2<sup>9</sup> cm²'], 'Diện tích = (2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> = 64 cm².');
Q('nt', 'Bài toán', 'Tổng của 5 số tự nhiên liên tiếp là 125. Số nhỏ nhất trong 5 số đó là:', '23', ['25', '21', '24'], 'Số ở giữa = 125 : 5 = 25. Năm số là 23; 24; 25; 26; 27.', 1);
Q('nt', 'Bài toán', 'Tích của hai số tự nhiên là 0. Kết luận nào đúng?', 'Có ít nhất một thừa số bằng 0', ['Cả hai thừa số đều bằng 0', 'Hai thừa số bằng nhau', 'Không có kết luận gì'], 'a · b = 0 khi và chỉ khi a = 0 hoặc b = 0.');
Q('nt', 'Bài toán', 'Số liền trước của số 10<sup>3</sup> là:', '999', ['1001', '99', '1000'], '10<sup>3</sup> = 1000, số liền trước là 999.');
Q('nt', 'Bài toán', 'Một số có hai chữ số, chữ số hàng chục gấp đôi chữ số hàng đơn vị. Nếu đổi chỗ hai chữ số thì số mới bé hơn số cũ 36 đơn vị. Số đó là:', '84', ['42', '63', '21'], 'Gọi số là ab với a = 2b. Hiệu = 9(a − b) = 9b = 36 → b = 4, a = 8. Số là 84.', 1);
Q('nt', 'Bài toán', 'Khi chia số tự nhiên a cho 12 được dư 7. Số a chia cho 4 thì dư:', '3', ['7', '1', '0'], 'a = 12k + 7 = 4(3k + 1) + 3 → dư 3.', 1);
Q('nt', 'Bài toán', 'Một người đi xe máy từ A lúc 7 giờ 15 phút, đến B lúc 9 giờ 45 phút, nghỉ 30 phút giữa đường. Thời gian đi thực sự là:', '2 giờ', ['2 giờ 30 phút', '1 giờ 30 phút', '3 giờ'], '9 giờ 45 − 7 giờ 15 = 2 giờ 30 phút; trừ 30 phút nghỉ còn 2 giờ.');
Q('nt', 'Bài toán', 'Số 2<sup>2</sup> · 3<sup>2</sup> · 5 có giá trị là:', '180', ['60', '90', '360'], '4 · 9 · 5 = 180.');

// ═══════════ BANK — CHIA HẾT, SỐ NGUYÊN TỐ, ƯCLN – BCNN ═══════════
Q('ch', 'Dấu hiệu chia hết', 'Số nào sau đây chia hết cho cả 2; 3; 5 và 9?', '1170', ['1125', '2350', '1740'], '1170 tận cùng 0 → chia hết cho 2 và 5; tổng chữ số 1 + 1 + 7 + 0 = 9 → chia hết cho 3 và 9. 1125 là số lẻ; 2350 có tổng chữ số 10; 1740 có tổng 12 không chia hết cho 9.');
Q('ch', 'Dấu hiệu chia hết', 'Không tính tổng, cho biết tổng 12 + 18 + 30 chắc chắn chia hết cho số nào dưới đây?', '6', ['9', '8', '7'], 'Mỗi số hạng đều chia hết cho 6 nên tổng chia hết cho 6. Tổng bằng 60 không chia hết cho 9, 8, 7.');
Q('ch', 'Dấu hiệu chia hết', 'Điền chữ số vào dấu * để số 5*3 chia hết cho 9:', '1', ['0', '9', '4'], 'Tổng chữ số 5 + * + 3 = 8 + * chia hết cho 9 → * = 1.');
Q('ch', 'Dấu hiệu chia hết', 'Số 12*4 chia hết cho 3. Có bao nhiêu chữ số * thoả mãn?', '3', ['4', '1', '10'], '1 + 2 + * + 4 = 7 + * chia hết cho 3 → * ∈ {2; 5; 8}: có 3 chữ số.');
Q('ch', 'Dấu hiệu chia hết', 'Số tự nhiên có dạng 3a7b chia hết cho cả 2, 5 và 9. Giá trị của a là:', '8', ['0', '9', '5'], 'Chia hết cho 2 và 5 → b = 0. Tổng 3 + a + 7 + 0 = 10 + a chia hết cho 9 → a = 8.', 1);
Q('ch', 'Dấu hiệu chia hết', 'Khẳng định nào sau đây là đúng?', 'Số chia hết cho 9 thì chia hết cho 3', ['Số chia hết cho 3 thì chia hết cho 9', 'Số chia hết cho 2 thì chia hết cho 4', 'Số tận cùng là 5 thì chia hết cho 2'], '9 = 3 · 3 nên số chia hết cho 9 chắc chắn chia hết cho 3; điều ngược lại không đúng (ví dụ 6).');
Q('ch', 'Dấu hiệu chia hết', 'Cho A = 2 + 2<sup>2</sup> + 2<sup>3</sup> + … + 2<sup>10</sup>. A chia hết cho số nào?', '3', ['5', '7', '9'], 'Nhóm từng cặp: 2(1 + 2) + 2<sup>3</sup>(1 + 2) + … = 3 · (2 + 2<sup>3</sup> + … + 2<sup>9</sup>) → A chia hết cho 3.', 1);
Q('ch', 'Ước và bội', 'Số nào là ước của 75 nhưng không là ước của 50?', '15', ['25', '5', '1'], 'Ư(75) = {1; 3; 5; 15; 25; 75}; Ư(50) = {1; 2; 5; 10; 25; 50}. 15 chia hết 75 nhưng không chia hết 50.');
Q('ch', 'Ước và bội', 'Tập hợp các bội của 6 nhỏ hơn 40 là:', '{0; 6; 12; 18; 24; 30; 36}', ['{6; 12; 18; 24; 30; 36}', '{1; 2; 3; 6}', '{0; 6; 12; 18; 24; 30; 36; 42}'], 'B(6) = {0; 6; 12; …}. Chú ý 0 cũng là bội của 6.');
Q('ch', 'Ước và bội', 'Số 36 có tất cả bao nhiêu ước tự nhiên?', '9', ['8', '6', '10'], '36 = 2² · 3² → số ước = (2 + 1)(2 + 1) = 9: 1; 2; 3; 4; 6; 9; 12; 18; 36.');
Q('ch', 'Ước và bội', 'Tìm số tự nhiên x biết x ∈ B(7) và 30 &lt; x ≤ 50. Có bao nhiêu giá trị x?', '3', ['2', '4', '7'], 'Bội của 7 trong khoảng: 35; 42; 49 → 3 giá trị.');
Q('ch', 'Ước và bội', 'Tìm số tự nhiên x sao cho 12 chia hết cho (x − 1) và x &gt; 5.', 'x ∈ {7; 13}', ['x ∈ {6; 12}', 'x ∈ {7; 12}', 'x = 13'], 'x − 1 ∈ Ư(12) = {1; 2; 3; 4; 6; 12} và x − 1 &gt; 4 → x − 1 ∈ {6; 12} → x ∈ {7; 13}.', 1);
Q('ch', 'Số nguyên tố', 'Số nguyên tố nhỏ nhất là số nào?', '2', ['1', '3', '0'], '2 là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất. Số 1 không là số nguyên tố.');
Q('ch', 'Số nguyên tố', 'Có bao nhiêu số nguyên tố nhỏ hơn 30?', '10', ['9', '11', '15'], 'Đó là 2; 3; 5; 7; 11; 13; 17; 19; 23; 29 → 10 số.');
Q('ch', 'Số nguyên tố', 'Số nào sau đây là hợp số?', '91', ['89', '97', '83'], '91 = 7 · 13 là hợp số. 83; 89; 97 đều là số nguyên tố.');
Q('ch', 'Số nguyên tố', 'Tổng của hai số nguyên tố là 15. Hai số đó là:', '2 và 13', ['3 và 12', '5 và 10', '7 và 8'], 'Tổng lẻ nên một số phải là 2 (số nguyên tố chẵn duy nhất): 15 − 2 = 13 là số nguyên tố.', 1);
Q('ch', 'Số nguyên tố', 'Phân tích số 360 ra thừa số nguyên tố ta được:', '2<sup>3</sup> · 3<sup>2</sup> · 5', ['2<sup>2</sup> · 3<sup>2</sup> · 10', '2<sup>3</sup> · 3 · 15', '2<sup>2</sup> · 3<sup>3</sup> · 5'], '360 = 8 · 45 = 2<sup>3</sup> · 3<sup>2</sup> · 5. Các cách khác chứa hợp số 10, 15 hoặc tính sai.');
Q('ch', 'Số nguyên tố', 'Tìm số nguyên tố p sao cho p + 2 và p + 4 cũng là số nguyên tố.', 'p = 3', ['p = 5', 'p = 7', 'p = 2'], 'p = 3 → 5 và 7 đều là số nguyên tố. Với p khác 3, trong ba số p, p + 2, p + 4 luôn có một số chia hết cho 3.', 1);
Q('ch', 'Số nguyên tố', 'Số nguyên tố p sao cho 5p + 3 cũng là số nguyên tố là:', 'p = 2', ['p = 3', 'p = 5', 'p = 7'], 'p = 2 → 13 là số nguyên tố. Với p lẻ thì 5p + 3 là số chẵn lớn hơn 2 nên là hợp số.', 1);
Q('ch', 'Số nguyên tố', 'Hai số nào sau đây là hai số nguyên tố cùng nhau?', '14 và 15', ['14 và 21', '15 và 25', '12 và 18'], 'ƯCLN(14, 15) = 1. Các cặp khác có ước chung 7; 5; 6.');
Q('ch', 'Số nguyên tố', 'Khẳng định nào sau đây sai?', 'Mọi số lẻ đều là số nguyên tố', ['Số 2 là số nguyên tố chẵn duy nhất', 'Số 1 không là số nguyên tố cũng không là hợp số', 'Mọi hợp số đều phân tích được ra thừa số nguyên tố'], '9; 15; 21 là số lẻ nhưng là hợp số.');
Q('ch', 'ƯCLN', 'ƯCLN(24, 36) bằng:', '12', ['6', '72', '4'], '24 = 2³ · 3; 36 = 2² · 3² → ƯCLN = 2² · 3 = 12.');
Q('ch', 'ƯCLN', 'ƯCLN(48, 72, 120) bằng:', '24', ['12', '8', '48'], '48 = 2⁴ · 3; 72 = 2³ · 3²; 120 = 2³ · 3 · 5 → ƯCLN = 2³ · 3 = 24.');
Q('ch', 'ƯCLN', 'Tập hợp ước chung của 18 và 30 là:', '{1; 2; 3; 6}', ['{1; 2; 3}', '{1; 2; 3; 6; 9}', '{6}'], 'ƯCLN(18, 30) = 6, ƯC = Ư(6) = {1; 2; 3; 6}.');
Q('ch', 'BCNN', 'BCNN(12, 18) bằng:', '36', ['6', '216', '72'], '12 = 2² · 3; 18 = 2 · 3² → BCNN = 2² · 3² = 36.');
Q('ch', 'BCNN', 'BCNN(8, 9, 12) bằng:', '72', ['864', '36', '24'], '8 = 2³; 9 = 3²; 12 = 2² · 3 → BCNN = 2³ · 3² = 72.');
Q('ch', 'BCNN', 'Với a = 4 và b = 6, khẳng định nào đúng?', 'ƯCLN(a, b) · BCNN(a, b) = a · b', ['BCNN(a, b) = a · b', 'ƯCLN(a, b) = 1', 'BCNN(a, b) = 24'], 'ƯCLN = 2, BCNN = 12; 2 · 12 = 24 = 4 · 6.');
Q('ch', 'BCNN', 'Số nhỏ nhất khác 0 chia hết cho cả 15 và 20 là:', '60', ['300', '30', '5'], 'BCNN(15, 20) = 60.');
Q('ch', 'Bài toán ƯCLN', 'Cô giáo có 48 bút và 36 vở, muốn chia thành các phần thưởng giống nhau (mỗi phần cùng số bút, cùng số vở), không thừa. Số phần thưởng nhiều nhất là:', '12', ['6', '24', '4'], 'Số phần thưởng là ƯCLN(48, 36) = 12. Mỗi phần có 4 bút và 3 vở.', 1);
Q('ch', 'Bài toán ƯCLN', 'Một mảnh đất hình chữ nhật 72 m × 60 m được chia thành các ô vuông bằng nhau, cạnh lớn nhất có thể (số nguyên mét). Có bao nhiêu ô vuông?', '30', ['12', '60', '36'], 'Cạnh ô = ƯCLN(72, 60) = 12 m. Số ô = (72 : 12) · (60 : 12) = 6 · 5 = 30.', 1);
Q('ch', 'Bài toán BCNN', 'Số học sinh của một trường khi xếp hàng 12, hàng 15, hàng 18 đều vừa đủ. Biết số học sinh trong khoảng 500 đến 600. Trường có bao nhiêu học sinh?', '540', ['180', '360', '560'], 'Số học sinh là bội chung của 12, 15, 18. BCNN = 180; bội trong khoảng 500–600 là 540.', 1);
Q('ch', 'Bài toán BCNN', 'Hai xe buýt cùng xuất phát lúc 6 giờ. Xe A cứ 15 phút chạy một chuyến, xe B cứ 20 phút một chuyến. Lần tiếp theo hai xe cùng xuất phát là lúc:', '7 giờ', ['6 giờ 35 phút', '6 giờ 30 phút', '8 giờ'], 'BCNN(15, 20) = 60 phút → 6 giờ + 1 giờ = 7 giờ.', 1);
Q('ch', 'Bài toán BCNN', 'Số tự nhiên nhỏ nhất chia cho 5 dư 1, chia cho 7 dư 1 và lớn hơn 1 là:', '36', ['35', '71', '12'], 'Số đó trừ 1 chia hết cho 5 và 7 → là bội của 35. Số nhỏ nhất &gt; 1 là 35 + 1 = 36.', 1);
Q('ch', 'Bài toán BCNN', 'Số tự nhiên nhỏ nhất chia cho 3 dư 2, chia cho 4 dư 3, chia cho 5 dư 4 là:', '59', ['60', '61', '29'], 'Số đó cộng 1 chia hết cho 3, 4, 5 → BCNN = 60 → số cần tìm là 59.', 1);
Q('ch', 'Bài toán', 'Một số chia hết cho 4 và cho 6. Kết luận nào chắc chắn đúng?', 'Số đó chia hết cho 12', ['Số đó chia hết cho 24', 'Số đó chia hết cho 8', 'Số đó chia hết cho 36'], 'Chia hết cho 4 và 6 thì chia hết cho BCNN(4, 6) = 12 (ví dụ 12 không chia hết cho 24, 8, 36).');
Q('ch', 'Bài toán', 'Tích của hai số tự nhiên bằng 72 và ƯCLN của chúng bằng 6. Hai số đó là:', '6 và 12', ['8 và 9', '6 và 18', '3 và 24'], 'a = 6m, b = 6n với (m, n) = 1 và m · n = 2 → hai số là 6 và 12.', 1);
Q('ch', 'Bài toán', 'Số ước tự nhiên của 2<sup>4</sup> · 5<sup>2</sup> là:', '15', ['8', '6', '10'], 'Số ước = (4 + 1)(2 + 1) = 15.');
Q('ch', 'Bài toán', 'Tổng các ước tự nhiên của 28 (không kể chính nó) là:', '28', ['27', '56', '14'], '1 + 2 + 4 + 7 + 14 = 28 (28 là "số hoàn hảo").', 1);
Q('ch', 'Bài toán', 'Số tự nhiên lớn nhất có 3 chữ số chia hết cho cả 2, 3 và 5 là:', '990', ['999', '960', '900'], 'Chia hết cho 30; bội của 30 lớn nhất có 3 chữ số là 990.');
Q('ch', 'Bài toán', 'Số các số tự nhiên từ 1 đến 100 không chia hết cho 2 và cũng không chia hết cho 5 là:', '40', ['50', '60', '30'], 'Chia hết cho 2: 50 số; cho 5: 20 số; cho 10: 10 số. Chia hết cho 2 hoặc 5: 50 + 20 − 10 = 60. Còn lại 100 − 60 = 40.', 1);

// ═══════════ BANK — SỐ NGUYÊN ═══════════
Q('ng', 'Khái niệm', 'Số đối của −7 là:', '7', ['−7', '1/7', '0'], 'Số đối của a là −a: số đối của −7 là 7.');
Q('ng', 'Khái niệm', 'Trong các số sau, số nào là số nguyên âm nhỏ nhất có hai chữ số?', '−99', ['−10', '−11', '−90'], 'Trên trục số, −99 nằm xa bên trái nhất trong các số nguyên âm có hai chữ số.');
Q('ng', 'Khái niệm', 'Số nguyên âm lớn nhất là:', '−1', ['0', '−9', 'Không tồn tại'], 'Số nguyên âm lớn nhất là −1 (gần 0 nhất ở bên trái).');
Q('ng', 'Khái niệm', 'Nhiệt độ ở Sa Pa buổi sáng là −2 °C, buổi trưa tăng thêm 7 °C. Nhiệt độ buổi trưa là:', '5 °C', ['−9 °C', '9 °C', '−5 °C'], '−2 + 7 = 5 °C.');
Q('ng', 'Khái niệm', 'Một tàu ngầm đang ở độ cao −250 m so với mực nước biển rồi nổi lên 120 m. Độ cao của tàu lúc đó là:', '−130 m', ['−370 m', '130 m', '370 m'], '−250 + 120 = −130 (m).');
Q('ng', 'So sánh', 'Sắp xếp các số −5; 3; −12; 0; 8 theo thứ tự tăng dần:', '−12; −5; 0; 3; 8', ['−5; −12; 0; 3; 8', '8; 3; 0; −5; −12', '0; 3; 8; −5; −12'], 'Số âm nhỏ hơn 0 nhỏ hơn số dương; trong các số âm, số có phần số tự nhiên lớn hơn thì nhỏ hơn.');
Q('ng', 'So sánh', 'Có bao nhiêu số nguyên x thoả mãn −4 &lt; x ≤ 3?', '7', ['6', '8', '3'], 'x ∈ {−3; −2; −1; 0; 1; 2; 3} → 7 số.');
Q('ng', 'So sánh', 'Khẳng định nào sau đây đúng?', '−(−5) = 5', ['|−5| = −5', '−5 &gt; −3', '−|−5| = 5'], 'Số đối của −5 là 5. |−5| = 5; −5 &lt; −3; −|−5| = −5.');
Q('ng', 'So sánh', 'Tổng tất cả các số nguyên x thoả mãn −6 &lt; x &lt; 5 là:', '−5', ['0', '−6', '5'], 'Các số từ −5 đến 4: các cặp đối nhau triệt tiêu, còn lại −5.', 1);
Q('ng', 'Cộng trừ', 'Kết quả của (−15) + 28 là:', '13', ['−13', '43', '−43'], 'Hai số khác dấu: 28 − 15 = 13, lấy dấu của số có giá trị tuyệt đối lớn hơn (dương).');
Q('ng', 'Cộng trừ', 'Kết quả của (−17) − (−25) là:', '8', ['−42', '−8', '42'], '(−17) − (−25) = −17 + 25 = 8.');
Q('ng', 'Cộng trừ', 'Tính: 45 − (12 − 30) − (−8)', '71', ['55', '−1', '19'], '12 − 30 = −18; 45 − (−18) = 63; 63 − (−8) = 71.');
Q('ng', 'Cộng trừ', 'Tính hợp lý: (−125) + 37 + (−75) + 63', '−100', ['100', '−300', '0'], '[(−125) + (−75)] + (37 + 63) = −200 + 100 = −100.');
Q('ng', 'Cộng trừ', 'Bỏ dấu ngoặc rồi tính: −(12 − 35) + (−8 + 12)', '27', ['−19', '19', '−27'], '−12 + 35 − 8 + 12 = 27.');
Q('ng', 'Nhân chia', 'Kết quả của (−4) · (−25) là:', '100', ['−100', '−29', '29'], 'Hai số âm nhân nhau được số dương: 4 · 25 = 100.');
Q('ng', 'Nhân chia', 'Kết quả của (−36) : 9 là:', '−4', ['4', '−27', '−45'], 'Chia hai số khác dấu được số âm: 36 : 9 = 4 → −4.');
Q('ng', 'Nhân chia', 'Tích (−1) · (−2) · (−3) · (−4) · (−5) có dấu gì và bằng:', '−120', ['120', '−15', '15'], 'Có 5 thừa số âm (số lẻ) nên tích âm: −(1 · 2 · 3 · 4 · 5) = −120.');
Q('ng', 'Nhân chia', 'Tính: (−3)<sup>3</sup> + (−2)<sup>4</sup>', '−11', ['−43', '11', '7'], '(−3)³ = −27; (−2)⁴ = 16; −27 + 16 = −11.');
Q('ng', 'Nhân chia', 'Tính nhanh: 23 · (−15) + 23 · 15 − 23 · 4', '−92', ['92', '−782', '0'], '23 · (−15 + 15 − 4) = 23 · (−4) = −92.');
Q('ng', 'Nhân chia', 'Giá trị của biểu thức (−2)<sup>2</sup> · 5 − 3 · (−7) là:', '41', ['−41', '−1', '1'], '4 · 5 = 20; 3 · (−7) = −21; 20 − (−21) = 41.');
Q('ng', 'Tìm x', 'Tìm số nguyên x biết x + 15 = −7.', '−22', ['22', '−8', '8'], 'x = −7 − 15 = −22.');
Q('ng', 'Tìm x', 'Tìm số nguyên x biết 3x − 8 = −23.', '−5', ['5', '−31/3', '−10'], '3x = −23 + 8 = −15 → x = −5.');
Q('ng', 'Tìm x', 'Có bao nhiêu số nguyên x thoả mãn |x| ≤ 4?', '9', ['4', '5', '8'], 'x ∈ {−4; −3; …; 3; 4} → 9 số.');
Q('ng', 'Tìm x', 'Tìm số nguyên x biết |x − 2| = 5.', 'x = 7 hoặc x = −3', ['x = 7', 'x = 3 hoặc x = −7', 'x = −3'], 'x − 2 = 5 → x = 7; x − 2 = −5 → x = −3.', 1);
Q('ng', 'Tìm x', 'Tìm số nguyên x sao cho (x − 3)(x + 2) = 0.', 'x = 3 hoặc x = −2', ['x = −3 hoặc x = 2', 'x = 3', 'x = −2'], 'Tích bằng 0 khi một thừa số bằng 0: x = 3 hoặc x = −2.');
Q('ng', 'Ước bội', 'Tập hợp tất cả các ước nguyên của 6 là:', '{−6; −3; −2; −1; 1; 2; 3; 6}', ['{1; 2; 3; 6}', '{−1; −2; −3; −6}', '{−6; −3; −2; 2; 3; 6}'], 'Ước nguyên gồm cả ước dương và ước âm: 8 ước.');
Q('ng', 'Ước bội', 'Tìm số nguyên x sao cho (x + 1) là ước của 5. Tổng các giá trị của x là:', '−4', ['0', '4', '−2'], 'x + 1 ∈ {−5; −1; 1; 5} → x ∈ {−6; −2; 0; 4}. Tổng = −4.', 1);
Q('ng', 'Ước bội', 'Số nguyên n để 2n + 7 chia hết cho n + 1. Có bao nhiêu giá trị n?', '4', ['2', '3', '6'], '2n + 7 = 2(n + 1) + 5 → n + 1 ∈ Ư(5) = {±1; ±5} → 4 giá trị n: −6; −2; 0; 4.', 1);
Q('ng', 'Bài toán', 'Một công ty quý I lãi 250 triệu đồng, quý II lỗ 80 triệu đồng, quý III lãi 130 triệu đồng, quý IV lỗ 120 triệu đồng. Cả năm công ty:', 'Lãi 180 triệu đồng', ['Lỗ 180 triệu đồng', 'Lãi 380 triệu đồng', 'Lãi 200 triệu đồng'], '250 + (−80) + 130 + (−120) = 180 (triệu đồng) → lãi.', 1);
Q('ng', 'Bài toán', 'Nhiệt độ lúc 6 giờ là −3 °C, cứ mỗi giờ tăng 2 °C. Đến lúc nào nhiệt độ đạt 9 °C?', '12 giờ', ['9 giờ', '10 giờ', '11 giờ'], 'Cần tăng 9 − (−3) = 12 °C, mỗi giờ 2 °C → 6 giờ sau: 6 + 6 = 12 giờ.', 1);
Q('ng', 'Bài toán', 'Tính tổng S = 1 − 2 + 3 − 4 + … + 99 − 100.', '−50', ['50', '0', '−100'], 'Ghép từng cặp (1 − 2) + (3 − 4) + … + (99 − 100) = (−1) · 50 = −50.', 1);
Q('ng', 'Bài toán', 'Tích của ba số nguyên là số âm. Số các thừa số âm có thể là:', '1 hoặc 3', ['1 hoặc 2', '2', '0 hoặc 2'], 'Tích âm khi số thừa số âm là số lẻ: 1 hoặc 3.');
Q('ng', 'Bài toán', 'Giá trị nhỏ nhất của biểu thức |x − 3| + 5 (x nguyên) là:', '5', ['0', '3', '8'], '|x − 3| ≥ 0 nên biểu thức ≥ 5; dấu bằng khi x = 3.', 1);
Q('ng', 'Bài toán', 'Số nào sau đây bằng (−2)<sup>3</sup> · (−5)?', '40', ['−40', '−30', '30'], '(−2)³ = −8; (−8) · (−5) = 40.');

// ═══════════ BANK — PHÂN SỐ ═══════════
Q('ps', 'Khái niệm', 'Phân số nào sau đây bằng phân số 3/4?', '15/20', ['6/9', '9/16', '4/3'], '3/4 = (3 · 5)/(4 · 5) = 15/20.');
Q('ps', 'Khái niệm', 'Phân số 36/48 rút gọn về phân số tối giản là:', '3/4', ['6/8', '9/12', '18/24'], 'ƯCLN(36, 48) = 12 → 36/48 = 3/4.');
Q('ps', 'Khái niệm', 'Phân số nào sau đây là phân số tối giản?', '14/15', ['12/18', '15/25', '21/28'], '14 và 15 nguyên tố cùng nhau. Các phân số khác rút gọn được (ƯC là 6; 5; 7).');
Q('ps', 'Khái niệm', 'Tìm x biết x/12 = −5/6.', '−10', ['10', '−5', '−12'], 'x = (−5 · 12) : 6 = −10.');
Q('ps', 'Khái niệm', 'Hỗn số 2 3/5 viết dưới dạng phân số là:', '13/5', ['6/5', '11/5', '23/5'], '2 3/5 = (2 · 5 + 3)/5 = 13/5.');
Q('ps', 'Khái niệm', 'Phân số −17/4 viết dưới dạng hỗn số là:', '−4 1/4', ['−4 3/4', '4 1/4', '−3 1/4'], '17 : 4 = 4 dư 1 → 17/4 = 4 1/4, nên −17/4 = −4 1/4.');
Q('ps', 'So sánh', 'Phân số lớn nhất trong các phân số 2/3; 3/4; 5/6; 7/12 là:', '5/6', ['2/3', '3/4', '7/12'], 'Quy đồng mẫu 12: 8/12; 9/12; 10/12; 7/12 → lớn nhất là 10/12 = 5/6.');
Q('ps', 'So sánh', 'Sắp xếp các phân số −1/2; 2/3; −3/4; 0 theo thứ tự tăng dần:', '−3/4; −1/2; 0; 2/3', ['−1/2; −3/4; 0; 2/3', '2/3; 0; −1/2; −3/4', '0; −1/2; −3/4; 2/3'], '−3/4 = −9/12 &lt; −1/2 = −6/12 &lt; 0 &lt; 2/3.');
Q('ps', 'So sánh', 'So sánh A = 2023/2024 và B = 2024/2025:', 'A &lt; B', ['A &gt; B', 'A = B', 'Không so sánh được'], '1 − A = 1/2024 &gt; 1/2025 = 1 − B nên A &lt; B (phần bù lớn hơn thì phân số bé hơn).', 1);
Q('ps', 'So sánh', 'Có bao nhiêu phân số có mẫu 7 lớn hơn 1/3 và nhỏ hơn 2/3?', '2', ['1', '3', '4'], '1/3 &lt; x/7 &lt; 2/3 → 7/21 &lt; 3x/21 &lt; 14/21 → 3x ∈ {9; 12} → x ∈ {3; 4}: 3/7 và 4/7.', 1);
Q('ps', 'Cộng trừ', 'Kết quả của 3/4 + 5/6 là:', '19/12', ['8/10', '4/5', '15/24'], 'Quy đồng mẫu 12: 9/12 + 10/12 = 19/12.');
Q('ps', 'Cộng trừ', 'Kết quả của 2/3 − 5/6 là:', '−1/6', ['1/6', '−3/3', '−1/2'], '4/6 − 5/6 = −1/6.');
Q('ps', 'Cộng trừ', 'Tính: 1/2 + 1/6 + 1/12 + 1/20', '4/5', ['1/40', '3/5', '5/6'], '1/(n(n+1)) = 1/n − 1/(n+1): tổng = 1 − 1/5 = 4/5.', 1);
Q('ps', 'Cộng trừ', 'Tính hợp lý: 5/7 + 3/11 + 2/7 + 8/11 − 1', '1', ['2', '0', '3'], '(5/7 + 2/7) + (3/11 + 8/11) − 1 = 1 + 1 − 1 = 1.');
Q('ps', 'Nhân chia', 'Kết quả của 4/9 · 3/8 là:', '1/6', ['7/17', '12/17', '32/27'], '4 · 3 / (9 · 8) = 12/72 = 1/6.');
Q('ps', 'Nhân chia', 'Kết quả của 5/6 : 10/3 là:', '1/4', ['25/9', '50/18', '4'], '5/6 · 3/10 = 15/60 = 1/4.');
Q('ps', 'Nhân chia', 'Số nghịch đảo của −3/7 là:', '−7/3', ['7/3', '3/7', '−3/7'], 'Nghịch đảo của a/b là b/a, giữ dấu: −7/3.');
Q('ps', 'Nhân chia', 'Tính: (1 − 1/2)(1 − 1/3)(1 − 1/4)…(1 − 1/10)', '1/10', ['9/10', '1/9', '1/100'], '= 1/2 · 2/3 · 3/4 · … · 9/10 = 1/10 (rút gọn chéo).', 1);
Q('ps', 'Nhân chia', 'Tính: 2/5 · 7/9 + 2/5 · 2/9', '2/5', ['4/5', '18/45', '2/9'], '2/5 · (7/9 + 2/9) = 2/5 · 1 = 2/5.');
Q('ps', 'Tìm x', 'Tìm x biết x + 2/3 = 5/4.', '7/12', ['7/7', '23/12', '−7/12'], 'x = 5/4 − 2/3 = 15/12 − 8/12 = 7/12.');
Q('ps', 'Tìm x', 'Tìm x biết 3/4 · x − 1/2 = 1/4.', '1', ['−1/3', '3/4', '1/2'], '3/4 · x = 3/4 → x = 1.');
Q('ps', 'Tìm x', 'Tìm x biết x : 2/3 = 9/4.', '3/2', ['27/8', '3/4', '8/27'], 'x = 9/4 · 2/3 = 18/12 = 3/2.');
Q('ps', 'Bài toán', 'Lớp 6A có 40 học sinh, trong đó 3/5 số học sinh là nữ. Số học sinh nam của lớp là:', '16', ['24', '15', '25'], 'Nữ: 40 · 3/5 = 24; nam: 40 − 24 = 16.');
Q('ps', 'Bài toán', 'Một người đi 2/5 quãng đường thì còn 18 km nữa mới đến đích. Quãng đường dài:', '30 km', ['45 km', '7,2 km', '12 km'], 'Còn lại 3/5 quãng đường là 18 km → quãng đường = 18 : 3/5 = 30 km.', 1);
Q('ps', 'Bài toán', 'Một bể nước, vòi thứ nhất chảy đầy bể trong 6 giờ, vòi thứ hai trong 3 giờ. Cả hai vòi cùng chảy thì đầy bể sau:', '2 giờ', ['4,5 giờ', '9 giờ', '1,5 giờ'], 'Mỗi giờ hai vòi chảy 1/6 + 1/3 = 1/2 bể → đầy sau 2 giờ.', 1);
Q('ps', 'Bài toán', 'An đọc một cuốn sách trong 3 ngày: ngày 1 đọc 1/3 cuốn, ngày 2 đọc 5/12 cuốn, ngày 3 đọc 30 trang còn lại. Cuốn sách có bao nhiêu trang?', '120 trang', ['90 trang', '150 trang', '100 trang'], 'Ngày 3 đọc 1 − 1/3 − 5/12 = 1/4 cuốn = 30 trang → cuốn sách 120 trang.', 1);
Q('ps', 'Bài toán', 'Một thùng có 60 lít dầu. Lần đầu lấy ra 2/5 số dầu, lần hai lấy 1/3 số dầu còn lại. Trong thùng còn:', '24 lít', ['36 lít', '20 lít', '16 lít'], 'Lần 1 lấy 24 lít, còn 36; lần 2 lấy 12 lít, còn 24 lít.', 1);
Q('ps', 'Bài toán', '3/4 của một số là 27. Số đó là:', '36', ['81/4', '20,25', '108'], 'Số đó = 27 : 3/4 = 36.');
Q('ps', 'Bài toán', 'Tìm một số biết 2/3 của nó cộng với 5 bằng 21.', '24', ['39', '16', '18'], '2/3 số đó = 16 → số đó = 16 : 2/3 = 24.');
Q('ps', 'Bài toán', 'Một cửa hàng bán 2/7 tấm vải thì còn lại 15 m. Tấm vải dài:', '21 m', ['30 m', '35 m', '6 m'], 'Còn 5/7 tấm = 15 m → tấm vải dài 15 : 5/7 = 21 m.');
Q('ps', 'Bài toán', 'Tổng của hai phân số là 7/6, hiệu là 1/6. Phân số lớn hơn là:', '2/3', ['1/2', '4/3', '1/3'], 'Số lớn = (7/6 + 1/6) : 2 = 8/6 : 2 = 2/3.', 1);
Q('ps', 'Bài toán', 'Giá trị của biểu thức (1/2 + 1/3) : (1/2 − 1/3) là:', '5', ['1', '1/5', '6'], '5/6 : 1/6 = 5.');
Q('ps', 'Bài toán', 'Kết quả của 1/2 + 1/4 + 1/8 + 1/16 + 1/32 là:', '31/32', ['5/32', '1', '15/16'], '= 1 − 1/32 = 31/32.', 1);

// ═══════════ BANK — SỐ THẬP PHÂN, TỈ SỐ PHẦN TRĂM ═══════════
Q('tp', 'Số thập phân', 'Phân số 3/8 viết dưới dạng số thập phân là:', '0,375', ['0,38', '0,35', '3,8'], '3 : 8 = 0,375.');
Q('tp', 'Số thập phân', 'Số thập phân −2,75 viết dưới dạng phân số tối giản là:', '−11/4', ['−275/100', '−27/5', '−11/5'], '−2,75 = −275/100 = −11/4.');
Q('tp', 'Số thập phân', 'Làm tròn số 12,4567 đến hàng phần trăm được:', '12,46', ['12,45', '12,5', '12,457'], 'Chữ số hàng phần nghìn là 6 ≥ 5 nên làm tròn lên: 12,46.');
Q('tp', 'Số thập phân', 'Sắp xếp theo thứ tự giảm dần: −3,2; 0,45; −0,5; 0,405', '0,45; 0,405; −0,5; −3,2', ['0,405; 0,45; −0,5; −3,2', '0,45; 0,405; −3,2; −0,5', '−3,2; −0,5; 0,405; 0,45'], '0,45 &gt; 0,405 &gt; 0 &gt; −0,5 &gt; −3,2.');
Q('tp', 'Số thập phân', 'Kết quả của 12,5 − 3,75 + 1,25 là:', '10', ['7,5', '10,5', '8,75'], '12,5 − 3,75 = 8,75; 8,75 + 1,25 = 10.');
Q('tp', 'Số thập phân', 'Kết quả của (−2,5) · 4,2 là:', '−10,5', ['10,5', '−1,05', '−9,5'], '2,5 · 4,2 = 10,5; hai số khác dấu → −10,5.');
Q('tp', 'Số thập phân', 'Kết quả của 7,2 : 0,9 là:', '8', ['0,8', '80', '6,48'], '7,2 : 0,9 = 72 : 9 = 8.');
Q('tp', 'Số thập phân', 'Tính nhanh: 0,25 · 3,7 · 4 · 10', '37', ['3,7', '370', '14,8'], '0,25 · 4 = 1; 3,7 · 10 = 37.');
Q('tp', 'Số thập phân', 'Ước lượng kết quả của 19,8 · 5,1 gần với số nào nhất?', '100', ['10', '1000', '25'], '19,8 ≈ 20; 5,1 ≈ 5 → 20 · 5 = 100.');
Q('tp', 'Tỉ số', 'Tỉ số của 45 phút và 2 giờ là:', '3/8', ['45/2', '3/4', '8/3'], '2 giờ = 120 phút; 45/120 = 3/8.');
Q('tp', 'Tỉ số', 'Tỉ số phần trăm của 18 và 40 là:', '45%', ['18%', '40%', '222%'], '18 : 40 = 0,45 = 45%.');
Q('tp', 'Tỉ số', 'Viết 0,6% dưới dạng số thập phân:', '0,006', ['0,6', '0,06', '6'], '0,6% = 0,6 : 100 = 0,006.');
Q('tp', 'Tỉ số', '5/8 viết dưới dạng tỉ số phần trăm là:', '62,5%', ['58%', '6,25%', '625%'], '5 : 8 = 0,625 = 62,5%.');
Q('tp', 'Phần trăm', '15% của 240 là:', '36', ['24', '16', '3,6'], '240 · 15 : 100 = 36.');
Q('tp', 'Phần trăm', 'Tìm một số biết 20% của số đó bằng 48.', '240', ['9,6', '96', '480'], 'Số đó = 48 : 20 · 100 = 240.');
Q('tp', 'Phần trăm', 'Một chiếc áo giá 250 000 đồng được giảm giá 20%. Giá bán sau khi giảm là:', '200 000 đồng', ['50 000 đồng', '230 000 đồng', '210 000 đồng'], 'Giảm 250 000 · 20% = 50 000 → còn 200 000 đồng.');
Q('tp', 'Phần trăm', 'Sau khi giảm giá 25%, một chiếc xe đạp có giá 1 500 000 đồng. Giá ban đầu là:', '2 000 000 đồng', ['1 875 000 đồng', '1 125 000 đồng', '1 750 000 đồng'], 'Giá sau giảm bằng 75% giá gốc → giá gốc = 1 500 000 : 75 · 100 = 2 000 000 đồng.', 1);
Q('tp', 'Phần trăm', 'Một cửa hàng mua vào 80 000 đồng, bán ra 100 000 đồng. Tỉ số phần trăm lãi so với giá mua là:', '25%', ['20%', '80%', '125%'], 'Lãi 20 000; 20 000 : 80 000 = 25%.', 1);
Q('tp', 'Phần trăm', 'Gửi tiết kiệm 20 000 000 đồng, lãi suất 6% một năm. Sau 1 năm, tổng số tiền nhận được là:', '21 200 000 đồng', ['1 200 000 đồng', '20 600 000 đồng', '32 000 000 đồng'], 'Lãi: 20 000 000 · 6% = 1 200 000. Tổng: 21 200 000 đồng.');
Q('tp', 'Phần trăm', 'Lớp 6B có 45 học sinh, trong đó 60% là học sinh nữ. Số học sinh nam là:', '18', ['27', '15', '30'], 'Nữ: 45 · 60% = 27 → nam: 45 − 27 = 18.');
Q('tp', 'Phần trăm', 'Giá một mặt hàng tăng 10% rồi lại giảm 10%. So với giá ban đầu, giá cuối cùng:', 'Giảm 1%', ['Không đổi', 'Tăng 1%', 'Giảm 10%'], 'Gọi giá là 100: tăng lên 110, giảm 10% của 110 là 11 → 99. Giảm 1%.', 1);
Q('tp', 'Phần trăm', 'Trong 500 g dung dịch muối có 20 g muối. Nồng độ phần trăm của dung dịch là:', '4%', ['2,5%', '20%', '25%'], '20 : 500 = 0,04 = 4%.');
Q('tp', 'Phần trăm', 'Bạn Nam làm đúng 18 câu trong đề 25 câu. Tỉ lệ phần trăm số câu đúng là:', '72%', ['18%', '78%', '28%'], '18 : 25 = 0,72 = 72%.');
Q('tp', 'Phần trăm', 'Giá xăng tăng từ 20 000 đồng lên 23 000 đồng một lít. Giá xăng đã tăng:', '15%', ['3%', '13%', '30%'], 'Tăng 3000; 3000 : 20 000 = 15%.');
Q('tp', 'Phần trăm', 'Số học sinh giỏi của lớp là 12 bạn, chiếm 30% cả lớp. Cả lớp có:', '40 học sinh', ['36 học sinh', '42 học sinh', '360 học sinh'], '12 : 30 · 100 = 40.');
Q('tp', 'Phần trăm', 'Mua 3 hộp sữa được tặng 1 hộp. Khi mua 12 hộp và nhận đủ khuyến mãi, thực chất mỗi hộp được giảm giá:', '25%', ['33%', '20%', '30%'], 'Trả 12 hộp nhận 16 hộp; giá mỗi hộp bằng 12/16 = 75% → giảm 25%.', 1);
Q('tp', 'Bài toán', 'Một người bán hàng lãi 20% so với giá vốn thì được lãi 60 000 đồng. Giá bán của món hàng là:', '360 000 đồng', ['300 000 đồng', '240 000 đồng', '72 000 đồng'], 'Giá vốn = 60 000 : 20% = 300 000; giá bán = 360 000 đồng.', 1);
Q('tp', 'Bài toán', 'Kết quả 3,6 · 2,5 − 1,5 · 2,4 viết dưới dạng phân số tối giản là:', '27/5', ['54/10', '5,4', '9/2'], '9 − 3,6 = 5,4 = 54/10 = 27/5.');
Q('tp', 'Bài toán', 'Số thập phân nào nằm chính giữa 2,4 và 2,5 trên trục số?', '2,45', ['2,55', '2,35', '2,50'], '(2,4 + 2,5) : 2 = 2,45.');

// ═══════════ BANK — HÌNH HỌC TRỰC QUAN (đa giác đều, chu vi – diện tích) ═══════════
Q('hh', 'Tam giác đều', 'Tam giác đều có tính chất nào sau đây?', 'Ba cạnh bằng nhau, ba góc bằng 60°', ['Ba cạnh bằng nhau, một góc vuông', 'Hai cạnh bằng nhau', 'Ba góc bằng 90°'], 'Tam giác đều có ba cạnh bằng nhau và ba góc đều bằng 60°.');
Q('hh', 'Tam giác đều', 'Chu vi tam giác đều là 27 cm. Độ dài mỗi cạnh là:', '9 cm', ['13,5 cm', '81 cm', '3 cm'], '27 : 3 = 9 cm.');
Q('hh', 'Lục giác đều', 'Lục giác đều ABCDEF có bao nhiêu đường chéo chính (đi qua tâm)?', '3', ['6', '9', '2'], 'Có 3 đường chéo chính: AD, BE, CF.');
Q('hh', 'Lục giác đều', 'Mỗi góc của lục giác đều có số đo:', '120°', ['60°', '90°', '108°'], 'Lục giác đều ghép từ 6 tam giác đều, mỗi góc bằng 2 · 60° = 120°.');
Q('hh', 'Lục giác đều', 'Lục giác đều có cạnh 5 cm được ghép từ 6 tam giác đều. Chu vi lục giác là:', '30 cm', ['25 cm', '15 cm', '60 cm'], '6 · 5 = 30 cm.');
Q('hh', 'Lục giác đều', 'Lục giác đều có tất cả bao nhiêu đường chéo?', '9', ['6', '3', '12'], 'Số đường chéo = 6 · (6 − 3) : 2 = 9.', 1);
Q('hh', 'Hình vuông', 'Hình vuông có chu vi 36 cm. Diện tích của nó là:', '81 cm²', ['36 cm²', '144 cm²', '324 cm²'], 'Cạnh = 36 : 4 = 9 cm; diện tích = 9² = 81 cm².');
Q('hh', 'Hình vuông', 'Hình vuông có diện tích 64 cm². Chu vi của nó là:', '32 cm', ['16 cm', '64 cm', '256 cm'], 'Cạnh = 8 cm (8² = 64); chu vi = 4 · 8 = 32 cm.');
Q('hh', 'Hình vuông', 'Nếu tăng cạnh hình vuông lên 3 lần thì diện tích tăng lên:', '9 lần', ['3 lần', '6 lần', '12 lần'], 'Diện tích = cạnh²; cạnh tăng 3 lần → diện tích tăng 3² = 9 lần.', 1);
Q('hh', 'Hình chữ nhật', 'Hình chữ nhật có chiều dài 12 cm, chiều rộng bằng 3/4 chiều dài. Diện tích là:', '108 cm²', ['144 cm²', '42 cm²', '96 cm²'], 'Rộng = 12 · 3/4 = 9 cm; diện tích = 12 · 9 = 108 cm².');
Q('hh', 'Hình chữ nhật', 'Hình chữ nhật có chu vi 40 cm, chiều dài hơn chiều rộng 4 cm. Diện tích là:', '96 cm²', ['160 cm²', '80 cm²', '100 cm²'], 'Nửa chu vi 20; dài = (20 + 4) : 2 = 12, rộng = 8; diện tích = 96 cm².', 1);
Q('hh', 'Hình chữ nhật', 'Một mảnh vườn hình chữ nhật 20 m × 15 m, người ta làm lối đi rộng 1 m xung quanh phía trong. Diện tích phần còn lại là:', '234 m²', ['300 m²', '266 m²', '252 m²'], 'Phần còn lại là hình chữ nhật (20 − 2) × (15 − 2) = 18 × 13 = 234 m².', 1);
Q('hh', 'Hình bình hành', 'Hình bình hành có đáy 15 cm, chiều cao 8 cm. Diện tích là:', '120 cm²', ['60 cm²', '46 cm²', '23 cm²'], 'S = đáy · chiều cao = 15 · 8 = 120 cm².');
Q('hh', 'Hình bình hành', 'Hình bình hành ABCD có AB = 10 cm, BC = 6 cm. Chu vi của hình bình hành là:', '32 cm', ['16 cm', '60 cm', '26 cm'], 'Chu vi = 2 · (10 + 6) = 32 cm.');
Q('hh', 'Hình bình hành', 'Hình bình hành có diện tích 84 cm², chiều cao 7 cm. Độ dài cạnh đáy tương ứng là:', '12 cm', ['6 cm', '24 cm', '77 cm'], 'Đáy = 84 : 7 = 12 cm.');
Q('hh', 'Hình bình hành', 'Khẳng định nào về hình bình hành là sai?', 'Hai đường chéo bằng nhau', ['Các cạnh đối song song và bằng nhau', 'Các góc đối bằng nhau', 'Hai đường chéo cắt nhau tại trung điểm mỗi đường'], 'Hình bình hành nói chung có hai đường chéo không bằng nhau (chỉ hình chữ nhật mới có).');
Q('hh', 'Hình thoi', 'Hình thoi có hai đường chéo 10 cm và 24 cm. Diện tích là:', '120 cm²', ['240 cm²', '34 cm²', '60 cm²'], 'S = (10 · 24) : 2 = 120 cm².');
Q('hh', 'Hình thoi', 'Hình thoi có cạnh 7 cm. Chu vi hình thoi là:', '28 cm', ['14 cm', '49 cm', '21 cm'], 'Bốn cạnh bằng nhau: 4 · 7 = 28 cm.');
Q('hh', 'Hình thoi', 'Hình thoi có diện tích 96 cm², một đường chéo dài 12 cm. Đường chéo còn lại dài:', '16 cm', ['8 cm', '48 cm', '4 cm'], 'd₂ = 2 · 96 : 12 = 16 cm.');
Q('hh', 'Hình thoi', 'Hình nào sau đây vừa là hình thoi vừa là hình chữ nhật?', 'Hình vuông', ['Hình bình hành', 'Hình thang cân', 'Lục giác đều'], 'Hình vuông có bốn cạnh bằng nhau (là hình thoi) và bốn góc vuông (là hình chữ nhật).');
Q('hh', 'Hình thang cân', 'Hình thang cân có hai đáy 8 cm và 14 cm, chiều cao 5 cm. Diện tích là:', '55 cm²', ['110 cm²', '70 cm²', '40 cm²'], 'S = (8 + 14) · 5 : 2 = 55 cm².');
Q('hh', 'Hình thang cân', 'Hình thang cân có hai đáy 6 cm và 10 cm, cạnh bên 5 cm. Chu vi là:', '26 cm', ['21 cm', '31 cm', '16 cm'], 'Chu vi = 6 + 10 + 5 + 5 = 26 cm.');
Q('hh', 'Hình thang cân', 'Khẳng định nào về hình thang cân là đúng?', 'Hai đường chéo bằng nhau', ['Hai cạnh bên song song', 'Hai đáy bằng nhau', 'Bốn góc bằng nhau'], 'Hình thang cân có hai cạnh bên bằng nhau, hai đường chéo bằng nhau, hai góc kề một đáy bằng nhau.');
Q('hh', 'Hình thang cân', 'Hình thang có diện tích 90 cm², chiều cao 6 cm. Tổng hai đáy là:', '30 cm', ['15 cm', '60 cm', '540 cm'], 'Tổng hai đáy = 2 · 90 : 6 = 30 cm.');
Q('hh', 'Bài toán thực tế', 'Một nền nhà hình chữ nhật 6 m × 4 m lát bằng gạch vuông cạnh 40 cm. Cần bao nhiêu viên gạch (không tính mạch)?', '150 viên', ['60 viên', '15 viên', '1500 viên'], '6 m = 600 cm → 600 : 40 = 15 viên; 400 : 40 = 10 viên; 15 · 10 = 150 viên.', 1);
Q('hh', 'Bài toán thực tế', 'Một khu đất hình thoi có hai đường chéo 40 m và 30 m. Người ta trồng rau, mỗi m² thu 5 kg. Tổng thu hoạch là:', '3000 kg', ['6000 kg', '1500 kg', '600 kg'], 'S = 40 · 30 : 2 = 600 m²; 600 · 5 = 3000 kg.', 1);
Q('hh', 'Bài toán thực tế', 'Làm hàng rào quanh mảnh đất hình chữ nhật 25 m × 18 m, để cổng rộng 3 m. Chiều dài hàng rào là:', '83 m', ['86 m', '450 m', '43 m'], 'Chu vi = 2 · (25 + 18) = 86 m; trừ cổng 3 m: 83 m.', 1);
Q('hh', 'Bài toán thực tế', 'Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng và diện tích 75 cm². Chu vi hình chữ nhật là:', '40 cm', ['30 cm', '50 cm', '75 cm'], 'Rộng · 3 · rộng = 75 → rộng = 5, dài = 15 → chu vi = 2 · 20 = 40 cm.', 1);
Q('hh', 'Bài toán thực tế', 'Từ một hình vuông cạnh 10 cm cắt bỏ ở mỗi góc một hình vuông cạnh 2 cm. Diện tích phần còn lại là:', '84 cm²', ['96 cm²', '64 cm²', '92 cm²'], '100 − 4 · 4 = 84 cm².', 1);
Q('hh', 'Bài toán thực tế', 'Một hình chữ nhật có chiều dài tăng 20%, chiều rộng giảm 20%. Diện tích mới so với cũ:', 'Giảm 4%', ['Không đổi', 'Tăng 4%', 'Giảm 20%'], '1,2 · 0,8 = 0,96 → giảm 4%.', 1);
Q('hh', 'Bài toán thực tế', 'Ghép 6 tam giác đều cạnh 4 cm được một lục giác đều. Chu vi lục giác đó bằng:', '24 cm', ['72 cm', '12 cm', '48 cm'], 'Lục giác có 6 cạnh, mỗi cạnh 4 cm → 24 cm.');
Q('hh', 'Bài toán thực tế', 'Hai hình vuông có cạnh 3 cm và 4 cm. Hình vuông có diện tích bằng tổng diện tích hai hình đó có cạnh:', '5 cm', ['7 cm', '6 cm', '3,5 cm'], '9 + 16 = 25 = 5².');

// ═══════════ BANK — HÌNH CÓ TRỤC ĐỐI XỨNG, TÂM ĐỐI XỨNG ═══════════
Q('dx', 'Trục đối xứng', 'Hình vuông có bao nhiêu trục đối xứng?', '4', ['2', '1', '8'], '2 đường chéo và 2 đường nối trung điểm các cạnh đối → 4 trục.');
Q('dx', 'Trục đối xứng', 'Hình chữ nhật (không là hình vuông) có bao nhiêu trục đối xứng?', '2', ['4', '1', '0'], 'Hai đường thẳng đi qua trung điểm các cạnh đối. Đường chéo KHÔNG là trục đối xứng.');
Q('dx', 'Trục đối xứng', 'Tam giác đều có bao nhiêu trục đối xứng?', '3', ['1', '2', '6'], 'Mỗi đường thẳng đi qua một đỉnh và trung điểm cạnh đối diện là một trục → 3 trục.');
Q('dx', 'Trục đối xứng', 'Lục giác đều có bao nhiêu trục đối xứng?', '6', ['3', '12', '2'], '3 đường chéo chính và 3 đường nối trung điểm hai cạnh đối → 6 trục.');
Q('dx', 'Trục đối xứng', 'Hình thoi (không là hình vuông) có bao nhiêu trục đối xứng?', '2', ['4', '1', '0'], 'Hai đường chéo là hai trục đối xứng.');
Q('dx', 'Trục đối xứng', 'Hình nào sau đây có đúng 1 trục đối xứng?', 'Hình thang cân', ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi'], 'Hình thang cân có 1 trục là đường thẳng qua trung điểm hai đáy. Hình bình hành không có trục đối xứng.');
Q('dx', 'Trục đối xứng', 'Hình nào sau đây KHÔNG có trục đối xứng?', 'Hình bình hành', ['Hình thoi', 'Hình thang cân', 'Tam giác đều'], 'Hình bình hành (không đặc biệt) không có trục đối xứng nào.');
Q('dx', 'Trục đối xứng', 'Hình tròn có bao nhiêu trục đối xứng?', 'Vô số', ['1', '2', '4'], 'Mọi đường thẳng đi qua tâm đều là trục đối xứng của hình tròn.');
Q('dx', 'Trục đối xứng', 'Trong các chữ cái in hoa A, N, H, Z, chữ nào có trục đối xứng?', 'A và H', ['N và Z', 'Chỉ A', 'Cả bốn chữ'], 'A có 1 trục dọc; H có 2 trục; N và Z không có trục đối xứng.');
Q('dx', 'Trục đối xứng', 'Chữ cái in hoa nào sau đây có đúng 2 trục đối xứng?', 'H', ['A', 'E', 'M'], 'H có trục dọc và trục ngang. A, E, M chỉ có 1 trục.');
Q('dx', 'Trục đối xứng', 'Chữ số nào sau đây có trục đối xứng?', '8', ['2', '5', '7'], 'Chữ số 8 có trục dọc (và trục ngang nếu viết cân). 2, 5, 7 không có.');
Q('dx', 'Tâm đối xứng', 'Hình nào sau đây có tâm đối xứng?', 'Hình bình hành', ['Tam giác đều', 'Hình thang cân', 'Tam giác vuông'], 'Giao điểm hai đường chéo là tâm đối xứng của hình bình hành.');
Q('dx', 'Tâm đối xứng', 'Tam giác đều có tâm đối xứng không?', 'Không có', ['Có, là trọng tâm', 'Có, là một đỉnh', 'Có, là trung điểm một cạnh'], 'Quay tam giác đều 180° quanh bất kì điểm nào cũng không trùng với chính nó → không có tâm đối xứng.');
Q('dx', 'Tâm đối xứng', 'Chữ cái in hoa nào sau đây có tâm đối xứng?', 'S', ['A', 'T', 'M'], 'Xoay chữ S 180° vẫn được chữ S. Các chữ N, Z, H, I, O, X cũng có tâm đối xứng.');
Q('dx', 'Tâm đối xứng', 'Trong các chữ cái H, I, N, O, X, Z, có bao nhiêu chữ vừa có trục đối xứng vừa có tâm đối xứng?', '4', ['6', '2', '3'], 'H, I, O, X vừa có trục vừa có tâm; N và Z chỉ có tâm đối xứng.', 1);
Q('dx', 'Tâm đối xứng', 'Hình nào sau đây vừa có trục đối xứng vừa có tâm đối xứng?', 'Hình chữ nhật', ['Hình thang cân', 'Tam giác đều', 'Hình bình hành'], 'Hình chữ nhật có 2 trục và tâm là giao điểm hai đường chéo.');
Q('dx', 'Tâm đối xứng', 'Tâm đối xứng của hình lục giác đều là:', 'Giao điểm ba đường chéo chính', ['Một đỉnh của lục giác', 'Trung điểm một cạnh', 'Lục giác đều không có tâm đối xứng'], 'Ba đường chéo chính cắt nhau tại tâm, cũng là tâm đối xứng.');
Q('dx', 'Tâm đối xứng', 'Đoạn thẳng AB có tâm đối xứng là:', 'Trung điểm của AB', ['Điểm A', 'Điểm B', 'Không có'], 'Trung điểm M của AB là tâm đối xứng của đoạn thẳng.');
Q('dx', 'Tâm đối xứng', 'Ngũ giác đều (5 cạnh) có bao nhiêu trục đối xứng và có tâm đối xứng không?', '5 trục, không có tâm đối xứng', ['5 trục, có tâm đối xứng', '10 trục, có tâm đối xứng', '1 trục, không có tâm'], 'Đa giác đều n cạnh có n trục; chỉ khi n chẵn mới có tâm đối xứng.', 1);
Q('dx', 'Ứng dụng', 'Vật nào sau đây có tâm đối xứng?', 'Bánh xe đạp (không kể van)', ['Chiếc lá bàng', 'Bàn tay người', 'Chiếc cốc có tay cầm'], 'Bánh xe tròn có tâm đối xứng là tâm bánh xe; các vật còn lại không có.');
Q('dx', 'Ứng dụng', 'Quạt trần có 3 cánh giống nhau, xếp đều. Hình của quạt (nhìn từ dưới lên) có:', '3 trục đối xứng, không có tâm đối xứng', ['3 trục đối xứng và có tâm đối xứng', '1 trục đối xứng', 'Không có trục, có tâm đối xứng'], 'Giống tam giác đều: có 3 trục; quay 180° không trùng chính nó nên không có tâm đối xứng.', 1);
Q('dx', 'Ứng dụng', 'Gấp đôi một tờ giấy rồi cắt một hình bất kì, mở ra ta được hình có:', 'Ít nhất 1 trục đối xứng là đường gấp', ['Tâm đối xứng', '2 trục đối xứng', 'Không có trục đối xứng'], 'Đường gấp chính là trục đối xứng của hình nhận được.');
Q('dx', 'Ứng dụng', 'Điểm A cách trục đối xứng d là 3 cm. Điểm A\' đối xứng với A qua d cách A một khoảng:', '6 cm', ['3 cm', '1,5 cm', '9 cm'], 'd là đường trung trực của AA\' nên AA\' = 2 · 3 = 6 cm.');
Q('dx', 'Ứng dụng', 'Một hình có 2 trục đối xứng vuông góc với nhau thì:', 'Có tâm đối xứng là giao điểm hai trục', ['Không thể có tâm đối xứng', 'Có đúng 4 trục đối xứng', 'Là hình vuông'], 'Ví dụ hình chữ nhật, hình thoi: giao hai trục vuông góc là tâm đối xứng.', 1);

// ═══════════ BANK — ĐIỂM, ĐƯỜNG THẲNG, TIA, ĐOẠN THẲNG, TRUNG ĐIỂM, GÓC ═══════════
Q('dg', 'Điểm – đường thẳng', 'Qua hai điểm phân biệt A và B vẽ được bao nhiêu đường thẳng?', 'Đúng 1', ['2', 'Vô số', 'Không vẽ được'], 'Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.');
Q('dg', 'Điểm – đường thẳng', 'Qua một điểm cho trước vẽ được bao nhiêu đường thẳng?', 'Vô số', ['1', '2', '3'], 'Qua một điểm có vô số đường thẳng.');
Q('dg', 'Điểm – đường thẳng', 'Cho 4 điểm A, B, C, D trong đó không có 3 điểm nào thẳng hàng. Số đường thẳng vẽ được đi qua 2 trong 4 điểm đó là:', '6', ['4', '8', '12'], 'Số đường thẳng = 4 · 3 : 2 = 6.');
Q('dg', 'Điểm – đường thẳng', 'Cho 5 điểm trong đó có đúng 3 điểm thẳng hàng. Số đường thẳng đi qua 2 trong 5 điểm là:', '8', ['10', '7', '9'], 'Nếu không có 3 điểm nào thẳng hàng: 10 đường. Ba điểm thẳng hàng làm 3 đường trùng thành 1 → 10 − 3 + 1 = 8.', 1);
Q('dg', 'Điểm – đường thẳng', 'Ba điểm A, B, C thẳng hàng và B nằm giữa A và C. Khẳng định nào đúng?', 'Hai tia BA và BC đối nhau', ['Hai tia AB và AC đối nhau', 'Hai tia AB và BA trùng nhau', 'Hai tia CA và CB đối nhau'], 'B nằm giữa nên hai tia BA, BC là hai tia đối nhau. AB và AC là hai tia trùng nhau.');
Q('dg', 'Điểm – đường thẳng', 'Hai đường thẳng phân biệt có thể có bao nhiêu điểm chung?', '0 hoặc 1', ['Đúng 1', '2', 'Vô số'], 'Hai đường thẳng phân biệt hoặc song song (0 điểm chung) hoặc cắt nhau (1 điểm chung).');
Q('dg', 'Điểm – đường thẳng', 'Có 6 đường thẳng đôi một cắt nhau, không có 3 đường nào đồng quy. Số giao điểm là:', '15', ['6', '12', '30'], 'Số giao điểm = 6 · 5 : 2 = 15.', 1);
Q('dg', 'Tia', 'Trên đường thẳng xy lấy điểm O. Hai tia Ox và Oy gọi là:', 'Hai tia đối nhau', ['Hai tia trùng nhau', 'Hai tia song song', 'Hai tia vuông góc'], 'Hai tia chung gốc O tạo thành đường thẳng là hai tia đối nhau.');
Q('dg', 'Tia', 'Cho 3 điểm A, B, C không thẳng hàng. Số tia có gốc là một trong ba điểm và đi qua một điểm còn lại là:', '6', ['3', '4', '9'], 'Mỗi cặp điểm cho 2 tia (AB và BA khác nhau): 3 cặp → 6 tia.');
Q('dg', 'Đoạn thẳng', 'Cho 5 điểm phân biệt trên một đường thẳng. Có bao nhiêu đoạn thẳng có hai đầu là hai trong 5 điểm đó?', '10', ['5', '20', '4'], 'Số đoạn thẳng = 5 · 4 : 2 = 10.');
Q('dg', 'Đoạn thẳng', 'Điểm M nằm giữa A và B, AM = 3 cm, MB = 5 cm. Độ dài AB là:', '8 cm', ['2 cm', '15 cm', '4 cm'], 'AB = AM + MB = 3 + 5 = 8 cm.');
Q('dg', 'Đoạn thẳng', 'Trên tia Ox lấy A, B sao cho OA = 4 cm, OB = 9 cm. Độ dài AB là:', '5 cm', ['13 cm', '4,5 cm', '6,5 cm'], 'A nằm giữa O và B (vì OA &lt; OB) nên AB = OB − OA = 5 cm.');
Q('dg', 'Đoạn thẳng', 'Cho AB = 7 cm, điểm C nằm giữa A và B sao cho AC − CB = 1 cm. Độ dài AC là:', '4 cm', ['3 cm', '6 cm', '3,5 cm'], 'AC + CB = 7, AC − CB = 1 → AC = (7 + 1) : 2 = 4 cm.', 1);
Q('dg', 'Đoạn thẳng', 'Trên tia Ox lấy A, B sao cho OA = 3 cm, OB = 7 cm. Điểm nào nằm giữa hai điểm còn lại?', 'Điểm A', ['Điểm O', 'Điểm B', 'Không xác định'], 'Trên cùng tia Ox, OA &lt; OB nên A nằm giữa O và B.');
Q('dg', 'Trung điểm', 'M là trung điểm của đoạn AB có AB = 12 cm. Độ dài MA là:', '6 cm', ['12 cm', '24 cm', '3 cm'], 'MA = MB = AB : 2 = 6 cm.');
Q('dg', 'Trung điểm', 'Điều kiện để M là trung điểm của đoạn thẳng AB là:', 'M nằm giữa A, B và MA = MB', ['MA = MB', 'M nằm giữa A và B', 'MA + MB = AB'], 'Cần đủ cả hai: M nằm giữa (MA + MB = AB) và cách đều hai đầu (MA = MB).');
Q('dg', 'Trung điểm', 'Cho AB = 8 cm, M là trung điểm AB, N là trung điểm MB. Độ dài AN là:', '6 cm', ['4 cm', '2 cm', '5 cm'], 'AM = 4, MN = 2 → AN = AM + MN = 6 cm.', 1);
Q('dg', 'Trung điểm', 'Trên tia Ox lấy A, B với OA = 2 cm, OB = 8 cm. Gọi M là trung điểm của AB. Độ dài OM là:', '5 cm', ['3 cm', '4 cm', '6 cm'], 'AB = 6 → AM = 3 → OM = OA + AM = 5 cm.', 1);
Q('dg', 'Trung điểm', 'Cho đoạn AB = 10 cm. Điểm C thuộc AB sao cho AC = 4 cm; gọi M, N lần lượt là trung điểm của AC và CB. Độ dài MN là:', '5 cm', ['4 cm', '6 cm', '10 cm'], 'MC = 2, CN = 3 → MN = 5 cm (luôn bằng nửa AB).', 1);
Q('dg', 'Góc', 'Góc có số đo 90° gọi là:', 'Góc vuông', ['Góc nhọn', 'Góc tù', 'Góc bẹt'], 'Góc vuông là góc có số đo bằng 90°.');
Q('dg', 'Góc', 'Góc bẹt có số đo:', '180°', ['90°', '360°', '100°'], 'Góc bẹt tạo bởi hai tia đối nhau, có số đo 180°.');
Q('dg', 'Góc', 'Góc có số đo 125° là:', 'Góc tù', ['Góc nhọn', 'Góc vuông', 'Góc bẹt'], '90° &lt; 125° &lt; 180° nên là góc tù.');
Q('dg', 'Góc', 'Góc xOy = 70°, tia Oz nằm giữa hai tia Ox, Oy sao cho góc xOz = 25°. Số đo góc zOy là:', '45°', ['95°', '55°', '35°'], 'zOy = xOy − xOz = 70° − 25° = 45°.');
Q('dg', 'Góc', 'Lúc 3 giờ đúng, kim giờ và kim phút tạo thành góc:', '90°', ['30°', '60°', '180°'], 'Mỗi giờ kim giờ lệch 30°; 3 giờ → 90°.');
Q('dg', 'Góc', 'Lúc 5 giờ đúng, góc giữa kim giờ và kim phút là:', '150°', ['50°', '120°', '30°'], '5 · 30° = 150°.');
Q('dg', 'Góc', 'Kim phút quay được 1 vòng thì kim giờ quay được góc:', '30°', ['360°', '60°', '12°'], 'Kim phút quay 1 vòng = 1 giờ, kim giờ đi từ số này sang số kề bên = 30°.');
Q('dg', 'Góc', 'Cho 5 tia chung gốc O, không có 2 tia nào đối nhau. Số góc tạo thành là:', '10', ['5', '20', '4'], 'Mỗi cặp tia tạo một góc: 5 · 4 : 2 = 10 góc.', 1);
Q('dg', 'Góc', 'Hai góc đều là góc tù thì tổng số đo của chúng:', 'Lớn hơn 180°', ['Bằng 180°', 'Nhỏ hơn 180°', 'Bằng 360°'], 'Mỗi góc tù lớn hơn 90° nên tổng lớn hơn 180°.', 1);
Q('dg', 'Góc', 'Góc xOy = 120°, tia Ot nằm giữa Ox và Oy sao cho góc xOt = góc tOy. Số đo góc xOt là:', '60°', ['120°', '30°', '240°'], 'Ot chia góc xOy thành 2 góc bằng nhau: 120° : 2 = 60°.');
Q('dg', 'Góc', 'Trong một tam giác đều, mỗi góc có số đo:', '60°', ['90°', '45°', '120°'], 'Ba góc bằng nhau, tổng 180° → mỗi góc 60°.');
Q('dg', 'Bài toán', 'Đoạn thẳng AB dài 20 cm. Lấy điểm C trên AB sao cho AC = 3/5 AB. Độ dài CB là:', '8 cm', ['12 cm', '15 cm', '5 cm'], 'AC = 12 cm → CB = 20 − 12 = 8 cm.');
Q('dg', 'Bài toán', 'Cho 10 điểm trong đó không có 3 điểm nào thẳng hàng. Số đoạn thẳng nối các điểm là:', '45', ['90', '10', '100'], '10 · 9 : 2 = 45 đoạn thẳng.');
Q('dg', 'Bài toán', 'Số đoạn thẳng nối các điểm (không có 3 điểm nào thẳng hàng) là 28. Số điểm là:', '8', ['7', '14', '56'], 'n(n − 1) : 2 = 28 → n(n − 1) = 56 = 8 · 7 → n = 8.', 1);

// ═══════════ BANK — DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM ═══════════
Q('dl', 'Thu thập dữ liệu', 'Dữ liệu nào sau đây là dữ liệu số (dữ liệu định lượng)?', 'Chiều cao của các bạn trong lớp', ['Màu sắc yêu thích', 'Môn học yêu thích', 'Quê quán của học sinh'], 'Chiều cao đo được bằng số; các dữ liệu còn lại là dữ liệu không phải số.');
Q('dl', 'Thu thập dữ liệu', 'Dữ liệu nào sau đây KHÔNG hợp lý trong bảng "Số học sinh vắng mỗi ngày"?', '−2', ['0', '3', '5'], 'Số học sinh vắng không thể là số âm.');
Q('dl', 'Thu thập dữ liệu', 'Muốn biết môn thể thao yêu thích nhất của học sinh khối 6, cách thu thập dữ liệu hợp lý là:', 'Lập phiếu hỏi tất cả học sinh khối 6', ['Hỏi 3 bạn trong lớp mình', 'Quan sát sân trường một buổi', 'Hỏi thầy cô giáo'], 'Cần hỏi đúng đối tượng (học sinh khối 6) và đủ số lượng.');
Q('dl', 'Bảng thống kê', 'Bảng thống kê điểm kiểm tra của 20 bạn: điểm 7 có 5 bạn, điểm 8 có 8 bạn, điểm 9 có 4 bạn, còn lại điểm 10. Số bạn được 10 điểm là:', '3', ['4', '5', '2'], '20 − (5 + 8 + 4) = 3 bạn.');
Q('dl', 'Bảng thống kê', 'Trong bảng kiểm đếm (5 gạch một nhóm), hai nhóm đủ 5 gạch và thêm 3 gạch lẻ biểu thị số:', '13', ['8', '23', '10'], '2 · 5 + 3 = 13.');
Q('dl', 'Biểu đồ tranh', 'Biểu đồ tranh dùng mỗi biểu tượng 🍎 ứng với 10 quả táo. Lớp 6A có 3 biểu tượng rưỡi. Lớp 6A hái được:', '35 quả', ['3,5 quả', '30 quả', '40 quả'], '3 · 10 + 5 = 35 quả.');
Q('dl', 'Biểu đồ cột', 'Biểu đồ cột biểu diễn số sách 4 lớp mượn: 6A: 35; 6B: 42; 6C: 28; 6D: 45. Lớp nào mượn ít nhất và ít hơn lớp mượn nhiều nhất bao nhiêu quyển?', '6C, ít hơn 17 quyển', ['6A, ít hơn 10 quyển', '6C, ít hơn 14 quyển', '6C, ít hơn 7 quyển'], 'Ít nhất: 6C (28); nhiều nhất: 6D (45); 45 − 28 = 17.');
Q('dl', 'Biểu đồ cột', 'Biểu đồ cột biểu diễn số sách 4 lớp mượn: 6A: 35; 6B: 42; 6C: 28; 6D: 45. Trung bình mỗi lớp mượn:', '37,5 quyển', ['150 quyển', '37 quyển', '40 quyển'], '(35 + 42 + 28 + 45) : 4 = 150 : 4 = 37,5.');
Q('dl', 'Biểu đồ cột', 'Trên biểu đồ cột, trục thẳng đứng chia vạch 0, 20, 40, 60. Một cột cao đến giữa vạch 40 và 60 biểu thị giá trị:', '50', ['45', '40', '60'], 'Giữa 40 và 60 là 50.');
Q('dl', 'Biểu đồ cột kép', 'Biểu đồ cột kép về số HS nam – nữ: 6A (18 nam, 22 nữ), 6B (20 nam, 20 nữ), 6C (24 nam, 16 nữ). Lớp có số nữ nhiều hơn số nam là:', '6A', ['6B', '6C', '6B và 6C'], 'Chỉ 6A có 22 nữ &gt; 18 nam.');
Q('dl', 'Biểu đồ cột kép', 'Biểu đồ cột kép về số HS nam – nữ: 6A (18 nam, 22 nữ), 6B (20 nam, 20 nữ), 6C (24 nam, 16 nữ). Tổng số học sinh nam của ba lớp là:', '62', ['58', '120', '60'], '18 + 20 + 24 = 62.');
Q('dl', 'Biểu đồ cột kép', 'Biểu đồ cột kép thích hợp nhất để:', 'So sánh hai bộ dữ liệu cùng loại của các đối tượng', ['Biểu diễn một dữ liệu duy nhất', 'Biểu diễn tỉ lệ phần trăm', 'Vẽ hình học'], 'Ví dụ: so sánh số nam và số nữ của từng lớp.');
Q('dl', 'Xác suất thực nghiệm', 'Tung một đồng xu 40 lần, có 18 lần xuất hiện mặt sấp. Xác suất thực nghiệm xuất hiện mặt ngửa là:', '11/20', ['9/20', '1/2', '18/40'], 'Mặt ngửa: 40 − 18 = 22 lần → 22/40 = 11/20.');
Q('dl', 'Xác suất thực nghiệm', 'Gieo một con xúc xắc 50 lần, mặt 6 chấm xuất hiện 8 lần. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:', '4/25', ['1/6', '8/25', '42/50'], '8/50 = 4/25.');
Q('dl', 'Xác suất thực nghiệm', 'Trong hộp có 3 bi xanh, 2 bi đỏ. Lấy ngẫu nhiên 1 bi. Kết quả nào KHÔNG thể xảy ra?', 'Lấy được bi vàng', ['Lấy được bi xanh', 'Lấy được bi đỏ', 'Lấy được bi màu xanh hoặc đỏ'], 'Hộp không có bi vàng.');
Q('dl', 'Xác suất thực nghiệm', 'Gieo một con xúc xắc. Sự kiện nào sau đây chắc chắn xảy ra?', 'Số chấm xuất hiện nhỏ hơn 7', ['Số chấm là số chẵn', 'Số chấm lớn hơn 3', 'Số chấm bằng 6'], 'Xúc xắc chỉ có 1–6 chấm nên luôn nhỏ hơn 7.');
Q('dl', 'Xác suất thực nghiệm', 'Tung đồng xu 20 lần, xác suất thực nghiệm xuất hiện mặt sấp là 0,35. Số lần mặt sấp là:', '7', ['13', '35', '14'], '20 · 0,35 = 7.');
Q('dl', 'Xác suất thực nghiệm', 'Gieo xúc xắc 60 lần, kết quả: mặt 1: 9; mặt 2: 11; mặt 3: 10; mặt 4: 12; mặt 5: 8; mặt 6: còn lại. Xác suất thực nghiệm xuất hiện mặt 6 là:', '1/6', ['1/5', '10/50', '1/10'], 'Mặt 6: 60 − 50 = 10 lần → 10/60 = 1/6.');
Q('dl', 'Xác suất thực nghiệm', 'Gieo xúc xắc 60 lần, kết quả: mặt 1: 9; mặt 2: 11; mặt 3: 10; mặt 4: 12; mặt 5: 8; mặt 6: 10. Xác suất thực nghiệm xuất hiện mặt có số chấm chẵn là:', '11/20', ['1/2', '9/20', '33/30'], 'Chẵn: 11 + 12 + 10 = 33 lần → 33/60 = 11/20.', 1);
Q('dl', 'Xác suất thực nghiệm', 'Bạn An tung đồng xu 10 lần được 7 lần ngửa; bạn Bình tung 100 lần được 52 lần ngửa. Kết quả nào phản ánh sát hơn khả năng xuất hiện mặt ngửa?', 'Của Bình, vì số lần thử nhiều hơn', ['Của An, vì tỉ lệ cao hơn', 'Hai kết quả như nhau', 'Không kết luận được'], 'Số lần thử càng nhiều, xác suất thực nghiệm càng gần khả năng thực (khoảng 1/2).', 1);
Q('dl', 'Xác suất thực nghiệm', 'Quay tấm bìa chia 8 phần bằng nhau ghi số 1–8. Tập hợp các kết quả có thể của một lần quay là:', '{1; 2; 3; 4; 5; 6; 7; 8}', ['{1; 8}', '{0; 1; …; 8}', '{1; 2; …; 7}'], 'Mũi tên có thể chỉ vào bất kì phần nào trong 8 phần.');
Q('dl', 'Xác suất thực nghiệm', 'Trong 30 ngày, có 12 ngày mưa. Xác suất thực nghiệm của sự kiện "ngày không mưa" là:', '3/5', ['2/5', '12/30', '1/2'], 'Không mưa: 18 ngày → 18/30 = 3/5.');
Q('dl', 'Bài toán', 'Điểm trung bình môn Toán của 4 bạn là 8,0. Ba bạn có điểm 7,5; 8,5; 9,0. Điểm của bạn thứ tư là:', '7,0', ['8,0', '7,5', '6,5'], 'Tổng = 32; 32 − (7,5 + 8,5 + 9) = 7,0.', 1);
Q('dl', 'Bài toán', 'Một cửa hàng ghi số áo bán trong 5 ngày: 12; 15; 9; 18; 16. Ngày bán được nhiều nhất hơn ngày ít nhất bao nhiêu phần trăm (so với ngày ít nhất)?', '100%', ['50%', '9%', '200%'], '18 − 9 = 9; 9 : 9 = 100%.', 1);
Q('dl', 'Bài toán', 'Bảng dữ liệu: số cây trồng của 3 tổ là 24; 30; 36. Vẽ biểu đồ cột với mỗi đơn vị chiều cao ứng với 6 cây thì cột của tổ 3 cao:', '6 đơn vị', ['36 đơn vị', '5 đơn vị', '4 đơn vị'], '36 : 6 = 6 đơn vị.');

// ═══════════ FAMILIES — họ câu tham số hoá (đáp án tính bằng code) ═══════════
// Mỗi họ: { t: chủ đề, hard, gen: () => { sec, text, ok, wr[3], why } }
const FAMILIES = [];
const F = (t, hard, gen) => FAMILIES.push({ t, hard, gen });

// ---- Số tự nhiên ----
F('nt', 0, () => { // thứ tự thực hiện phép tính
  const a = ri(20, 90), b = ri(3, 12), c = ri(3, 9), d = ri(2, 15);
  const v = a + b * c - d;
  return { sec: 'Thứ tự phép tính', text: `Kết quả của phép tính ${a} + ${b} × ${c} − ${d} là:`, ok: fmt(v),
    wr: numD(v, [(a + b) * c - d, a + b * (c - d), v + 10]), why: `${b} × ${c} = ${b * c}; ${a} + ${b * c} − ${d} = ${v}.` };
});
F('nt', 0, () => { // luỹ thừa trong biểu thức
  const a = ri(2, 5), m = ri(2, 3), b = ri(2, 6), c = ri(2, 4);
  const v = a ** m * b - c ** 2;
  return { sec: 'Luỹ thừa', text: `Giá trị của biểu thức ${a}<sup>${m}</sup> · ${b} − ${c}<sup>2</sup> là:`, ok: fmt(v),
    wr: numD(v, [a * m * b - c * 2, a ** m * b - c * 2, (a * b) ** m - c ** 2]), why: `${a}<sup>${m}</sup> = ${a ** m}; ${a ** m} · ${b} = ${a ** m * b}; ${c}² = ${c ** 2}; ${a ** m * b} − ${c ** 2} = ${v}.` };
});
F('nt', 0, () => { // nhân/chia luỹ thừa cùng cơ số
  const a = pick([2, 3, 5, 7, 10]), m = ri(3, 9), n = ri(2, m - 1), op = pick(['·', ':']);
  const e = op === '·' ? m + n : m - n;
  return { sec: 'Luỹ thừa', text: `Viết kết quả ${a}<sup>${m}</sup> ${op} ${a}<sup>${n}</sup> dưới dạng một luỹ thừa:`, ok: `${a}<sup>${e}</sup>`,
    wr: distinct(`${a}<sup>${e}</sup>`, [`${a}<sup>${op === '·' ? m * n : Math.floor(m / n)}</sup>`, `${op === '·' ? a * a : 1}<sup>${e}</sup>`, `${a}<sup>${op === '·' ? m - n : m + n}</sup>`], k => `${a}<sup>${e + k}</sup>`),
    why: op === '·' ? `Nhân hai luỹ thừa cùng cơ số: cộng số mũ ${m} + ${n} = ${e}.` : `Chia hai luỹ thừa cùng cơ số: trừ số mũ ${m} − ${n} = ${e}.` };
});
F('nt', 1, () => { // tìm x nhiều bước
  const x = ri(5, 60), a = ri(2, 9), b = ri(3, 40), c = ri(2, 6);
  const v = (x * a + b) * c;  // (a·x + b)·c = v
  return { sec: 'Tìm x', text: `Tìm số tự nhiên x biết (${a}x + ${b}) · ${c} = ${fmt(v)}.`, ok: fmt(x),
    wr: numD(x, [x * a, (v - b) / c, Math.round(v / c) - b]), why: `${a}x + ${b} = ${fmt(v)} : ${c} = ${fmt(v / c)}; ${a}x = ${fmt(v / c - b)}; x = ${x}.` };
});
F('nt', 1, () => { // dãy số cách đều: số hạng thứ n / tổng
  const a = ri(1, 9), d = pick([3, 4, 5, 6, 7]), n = ri(15, 60);
  const last = a + (n - 1) * d;
  if (rnd() < 0.5) {
    return { sec: 'Dãy số', text: `Cho dãy số ${a}; ${a + d}; ${a + 2 * d}; ${a + 3 * d}; … Số hạng thứ ${n} của dãy là:`, ok: fmt(last),
      wr: numD(last, [a + n * d, a + (n - 2) * d, n * d]), why: `Số hạng thứ n = ${a} + (n − 1) · ${d}. Với n = ${n}: ${a} + ${n - 1} · ${d} = ${last}.` };
  }
  const S = (a + last) * n / 2;
  return { sec: 'Dãy số', text: `Tính tổng S = ${a} + ${a + d} + ${a + 2 * d} + … + ${last}.`, ok: fmt(S),
    wr: numD(S, [(a + last) * n, (a + last) * (n - 1) / 2, (a + last) * (n + 1) / 2]), why: `Số số hạng: (${last} − ${a}) : ${d} + 1 = ${n}. S = (${a} + ${last}) · ${n} : 2 = ${fmt(S)}.` };
});
F('nt', 0, () => { // tập hợp: số phần tử
  const a = ri(3, 40), b = a + ri(4, 30), kind = pick(['≤', '<']);
  const lo = kind === '≤' ? a : a + 1;
  const hi = b - 1; // x < b
  const cnt = hi - lo + 1;
  return { sec: 'Tập hợp', text: `Tập hợp A = {x ∈ ℕ | ${a} ${kind} x &lt; ${b}} có bao nhiêu phần tử?`, ok: fmt(cnt),
    wr: numD(cnt, [cnt + 1, cnt - 1, b - a + 1]), why: `Các phần tử là ${lo}; ${lo + 1}; …; ${hi}. Số phần tử = ${hi} − ${lo} + 1 = ${cnt}.` };
});
F('nt', 1, () => { // bài toán mua hàng nhiều bước
  const n1 = ri(2, 6), p1 = ri(5, 25) * 1000, n2 = ri(2, 5), p2 = ri(3, 12) * 1000;
  const tot = n1 * p1 + n2 * p2; const pay = Math.ceil(tot / 50000) * 50000 + pick([0, 50000]);
  const back = pay - tot;
  return { sec: 'Bài toán', text: `Bạn Minh mua ${n1} quyển vở giá ${fmt(p1)} đồng/quyển và ${n2} chiếc bút giá ${fmt(p2)} đồng/chiếc. Minh đưa ${fmt(pay)} đồng thì được trả lại:`, ok: `${fmt(back)} đồng`,
    wr: distinct(`${fmt(back)} đồng`, [`${fmt(tot)} đồng`, `${fmt(back + p2)} đồng`, `${fmt(pay - n1 * p1 - p2)} đồng`], k => `${fmt(back + k * 1000)} đồng`),
    why: `Tiền hàng: ${n1} × ${fmt(p1)} + ${n2} × ${fmt(p2)} = ${fmt(tot)}. Trả lại: ${fmt(pay)} − ${fmt(tot)} = ${fmt(back)} đồng.` };
});
F('nt', 0, () => { // chia có dư
  const q = ri(12, 99), b = ri(6, 19), r = ri(1, b - 1); const a = q * b + r;
  return { sec: 'Phép chia', text: `Số ${fmt(a)} chia cho ${b} được thương và số dư lần lượt là:`, ok: `${q} và ${r}`,
    wr: distinct(`${q} và ${r}`, [`${q + 1} và ${r}`, `${q} và ${b - r}`, `${r} và ${q}`], k => `${q + k} và ${r}`), why: `${b} × ${q} = ${fmt(q * b)}; ${fmt(a)} − ${fmt(q * b)} = ${r} &lt; ${b}. Vậy thương ${q}, dư ${r}.` };
});
