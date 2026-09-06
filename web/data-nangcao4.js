// TOÁN NÂNG CAO — LỚP 4 (bồi dưỡng HSG)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Phong cách MathX / HSG cấp trường – huyện Việt Nam (biên soạn lại, KHÔNG mạo nhận nguồn):
// tính nhanh & tính hợp lí, dãy số & quy luật, tìm hai số (tổng–hiệu / tổng–tỉ / hiệu–tỉ),
// trung bình cộng, toán trồng cây – cưa gỗ, gà – chó (giả thiết tạm), đếm hình & đếm số,
// chữ số & cấu tạo số, dấu hiệu chia hết vận dụng, phân số nâng cao, hình học (chu vi – diện
// tích – cắt ghép) và toán có lời văn nhiều bước.
//
// Mức độ: khó hơn SGK nhưng đúng phạm vi lớp 4. Mỗi câu có lời giải ngắn gọn, đủ ý.
// Helper o4(...) và mảng SUBJECTS đã khai báo trong data.js (nạp trước file này).

const NANGCAO4_EXAMS = [

/* ═══════════ ĐỀ 1 — TÍNH NHANH & TÍNH HỢP LÍ ═══════════ */
{
  id: 9001, title: 'Đề 1 · Tính nhanh & tính hợp lí', time: 20,
  questions: [
    { sec: 'Tính nhanh', name: 'Câu 1', pts: 1, text: 'Tính nhanh: <b>25 × 4 × 7</b>', opts: o4('700', '175', '70', '7 000'), ans: 'A', why: '25 × 4 = 100; 100 × 7 = 700.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: 'Tính nhanh: <b>125 × 8 × 9</b>', opts: o4('900', '9 000', '1 125', '90 000'), ans: 'B', why: '125 × 8 = 1 000; 1 000 × 9 = 9 000.' },
    { sec: 'Tính tổng', name: 'Câu 3', pts: 1, text: 'Tính: <b>1 + 2 + 3 + … + 10</b>', opts: o4('45', '50', '55', '100'), ans: 'C', why: 'Ghép cặp (1+10) + (2+9) + … = 5 cặp × 11 = 55.' },
    { sec: 'Tính nhanh', name: 'Câu 4', pts: 1, text: 'Tính nhanh: <b>4 × 27 × 25</b>', opts: o4('270', '2 727', '27 000', '2 700'), ans: 'D', why: '4 × 25 = 100; 100 × 27 = 2 700.' },
    { sec: 'Tính tổng', name: 'Câu 5', pts: 1, text: 'Tính: <b>2 + 4 + 6 + … + 20</b>', opts: o4('110', '100', '90', '210'), ans: 'A', why: 'Có 10 số chẵn; ghép (2+20) + (4+18) + … = 5 cặp × 22 = 110.' },
    { sec: 'Tính hợp lí', name: 'Câu 6', pts: 1, text: 'Tính hợp lí: <b>96 × 4 + 96 × 6</b>', opts: o4('900', '960', '190', '384'), ans: 'B', why: '96 × 4 + 96 × 6 = 96 × (4 + 6) = 96 × 10 = 960.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: 'Tính nhanh: <b>137 × 99</b>', opts: o4('13 700', '13 437', '13 563', '13 653'), ans: 'C', why: '137 × 99 = 137 × 100 − 137 = 13 700 − 137 = 13 563.' },
    { sec: 'Tính tổng', name: 'Câu 8', pts: 1, text: 'Tính nhanh: <b>1 998 + 1 999 + 2 000 + 2 001 + 2 002</b>', opts: o4('9 990', '10 010', '8 000', '10 000'), ans: 'D', why: 'Số ở giữa là 2 000; tổng = 2 000 × 5 = 10 000.' },
    { sec: 'Nhân 11', name: 'Câu 9', pts: 1, text: 'Tính nhanh: <b>45 × 11</b>', opts: o4('495', '450', '405', '545'), ans: 'A', why: '45 × 11 = 45 × 10 + 45 = 450 + 45 = 495.' },
    { sec: 'Tính hợp lí', name: 'Câu 10', pts: 1, text: 'Tính nhanh: <b>64 × 25</b>', opts: o4('160', '1 600', '1 560', '16 000'), ans: 'B', why: '64 × 25 = 16 × 4 × 25 = 16 × 100 = 1 600.' },
  ],
},

/* ═══════════ ĐỀ 2 — DÃY SỐ & QUY LUẬT ═══════════ */
{
  id: 9002, title: 'Đề 2 · Dãy số & quy luật', time: 20,
  questions: [
    { sec: 'Dãy cách đều', name: 'Câu 1', pts: 1, text: 'Cho dãy: 2, 5, 8, 11, … Số hạng thứ <b>10</b> là số nào?', opts: o4('26', '32', '29', '30'), ans: 'C', why: 'Mỗi số hơn số trước 3. Số thứ 10 = 2 + 9 × 3 = 2 + 27 = 29.' },
    { sec: 'Quy luật', name: 'Câu 2', pts: 1, text: 'Số tiếp theo của dãy: 1, 4, 9, 16, 25, … là số nào?', opts: o4('30', '32', '49', '36'), ans: 'D', why: 'Đây là các số chính phương: 1², 2², …, 5². Số tiếp theo là 6² = 36.' },
    { sec: 'Đếm số hạng', name: 'Câu 3', pts: 1, text: 'Dãy 3, 6, 9, …, 99 có bao nhiêu số hạng?', opts: o4('33', '32', '34', '96'), ans: 'A', why: 'Số số hạng = (99 − 3) : 3 + 1 = 32 + 1 = 33.' },
    { sec: 'Tính tổng dãy', name: 'Câu 4', pts: 1, text: 'Tính tổng: 1 + 2 + 3 + … + 20', opts: o4('200', '210', '190', '420'), ans: 'B', why: 'Ghép 10 cặp, mỗi cặp bằng 21 (1+20). Tổng = 10 × 21 = 210.' },
    { sec: 'Quy luật', name: 'Câu 5', pts: 1, text: 'Số tiếp theo của dãy: 1, 1, 2, 3, 5, 8, 13, … là số nào?', opts: o4('18', '20', '21', '24'), ans: 'C', why: 'Mỗi số bằng tổng hai số liền trước: 8 + 13 = 21.' },
    { sec: 'Dãy giảm', name: 'Câu 6', pts: 1, text: 'Cho dãy: 100, 95, 90, 85, … Số hạng thứ <b>8</b> là số nào?', opts: o4('60', '70', '75', '65'), ans: 'D', why: 'Mỗi số kém số trước 5. Số thứ 8 = 100 − 7 × 5 = 100 − 35 = 65.' },
    { sec: 'Tổng số lẻ', name: 'Câu 7', pts: 1, text: 'Tính tổng các số lẻ: 1 + 3 + 5 + … + 19', opts: o4('100', '81', '121', '90'), ans: 'A', why: 'Có 10 số lẻ; ghép (1+19) + (3+17) + … = 5 cặp × 20 = 100.' },
    { sec: 'Quy luật', name: 'Câu 8', pts: 1, text: 'Số tiếp theo của dãy: 2, 6, 12, 20, 30, … là số nào?', opts: o4('40', '42', '44', '36'), ans: 'B', why: 'Các số là 1×2, 2×3, 3×4, 4×5, 5×6, … Số tiếp theo là 6 × 7 = 42.' },
    { sec: 'Số hạng thứ n', name: 'Câu 9', pts: 1, text: 'Số hạng thứ <b>100</b> của dãy 5, 10, 15, 20, … là số nào?', opts: o4('105', '495', '500', '550'), ans: 'C', why: 'Số hạng thứ n = 5 × n. Số thứ 100 = 5 × 100 = 500.' },
    { sec: 'Quy luật', name: 'Câu 10', pts: 1, text: 'Số tiếp theo của dãy: 1, 2, 4, 8, 16, … là số nào?', opts: o4('24', '30', '64', '32'), ans: 'D', why: 'Mỗi số gấp đôi số trước: 16 × 2 = 32.' },
  ],
},

/* ═══════════ ĐỀ 3 — TÌM HAI SỐ (TỔNG–HIỆU / TỔNG–TỈ / HIỆU–TỈ) ═══════════ */
{
  id: 9003, title: 'Đề 3 · Tìm hai số biết tổng – hiệu, tổng – tỉ, hiệu – tỉ', time: 20,
  questions: [
    { sec: 'Tổng – hiệu', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 100 và hiệu 20. Tìm <b>số lớn</b>.', opts: o4('60', '40', '50', '80'), ans: 'A', why: 'Số lớn = (tổng + hiệu) : 2 = (100 + 20) : 2 = 60.' },
    { sec: 'Tổng – hiệu', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 84, số này hơn số kia 16 đơn vị. Tìm <b>số bé</b>.', opts: o4('50', '34', '42', '25'), ans: 'B', why: 'Số bé = (tổng − hiệu) : 2 = (84 − 16) : 2 = 34.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 48, số lớn gấp 3 lần số bé. Tìm <b>số lớn</b>.', opts: o4('12', '16', '36', '24'), ans: 'C', why: 'Tổng 4 phần bằng 48 → 1 phần = 12 (số bé); số lớn = 12 × 3 = 36.' },
    { sec: 'Tổng – tỉ', name: 'Câu 4', pts: 1, text: 'Hai số có tổng 55, tỉ số của số bé và số lớn là 2/3. Tìm <b>số bé</b>.', opts: o4('33', '25', '30', '22'), ans: 'D', why: 'Tổng 2 + 3 = 5 phần = 55 → 1 phần = 11; số bé = 11 × 2 = 22.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 5', pts: 1, text: 'Số lớn hơn số bé 24 đơn vị và gấp 4 lần số bé. Tìm <b>số bé</b>.', opts: o4('8', '6', '12', '32'), ans: 'A', why: 'Hiệu 4 − 1 = 3 phần = 24 → 1 phần = 8 (số bé).' },
    { sec: 'Hiệu – tỉ', name: 'Câu 6', pts: 1, text: 'Hai số có hiệu 30, số lớn gấp 6 lần số bé. Tìm <b>số lớn</b>.', opts: o4('6', '36', '30', '42'), ans: 'B', why: 'Hiệu 6 − 1 = 5 phần = 30 → 1 phần = 6 (số bé); số lớn = 6 × 6 = 36.' },
    { sec: 'Tổng – hiệu', name: 'Câu 7', pts: 1, text: 'Hai lớp có tất cả 70 học sinh, lớp A nhiều hơn lớp B 6 bạn. Lớp A có bao nhiêu bạn?', opts: o4('32', '34', '38', '36'), ans: 'C', why: 'Số học sinh lớp A = (70 + 6) : 2 = 38 (bạn).' },
    { sec: 'Tổng – tỉ', name: 'Câu 8', pts: 1, text: 'Hai thùng chứa tất cả 96 lít dầu, thùng lớn gấp 3 lần thùng nhỏ. Thùng nhỏ chứa bao nhiêu lít?', opts: o4('32', '48', '72', '24'), ans: 'D', why: 'Tổng 3 + 1 = 4 phần = 96 → thùng nhỏ = 96 : 4 = 24 (lít).' },
    { sec: 'Hiệu – tỉ', name: 'Câu 9', pts: 1, text: 'Anh hơn em 8 tuổi, tuổi anh gấp 3 lần tuổi em. Hỏi anh bao nhiêu tuổi?', opts: o4('12', '4', '16', '24'), ans: 'A', why: 'Hiệu 3 − 1 = 2 phần = 8 → em 4 tuổi; anh = 4 × 3 = 12 (tuổi).' },
    { sec: 'Tổng – hiệu', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của hai số là 25, hiệu của chúng là 10. Tìm <b>số lớn</b>.', opts: o4('20', '30', '25', '35'), ans: 'B', why: 'Tổng hai số = 25 × 2 = 50; số lớn = (50 + 10) : 2 = 30.' },
  ],
},

/* ═══════════ ĐỀ 4 — TRUNG BÌNH CỘNG ═══════════ */
{
  id: 9004, title: 'Đề 4 · Trung bình cộng', time: 20,
  questions: [
    { sec: 'Trung bình cộng', name: 'Câu 1', pts: 1, text: 'Tìm trung bình cộng của ba số: 12, 16 và 20.', opts: o4('12', '20', '16', '48'), ans: 'C', why: '(12 + 16 + 20) : 3 = 48 : 3 = 16.' },
    { sec: 'Trung bình cộng', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 25 và 35 là bao nhiêu?', opts: o4('60', '25', '35', '30'), ans: 'D', why: '(25 + 35) : 2 = 60 : 2 = 30.' },
    { sec: 'Tìm tổng', name: 'Câu 3', pts: 1, text: 'Bốn số có trung bình cộng là 15. Tổng của bốn số đó là bao nhiêu?', opts: o4('60', '45', '30', '15'), ans: 'A', why: 'Tổng = trung bình cộng × số các số = 15 × 4 = 60.' },
    { sec: 'Tìm số hạng', name: 'Câu 4', pts: 1, text: 'Ba số có trung bình cộng là 20; hai số đầu là 18 và 22. Tìm <b>số thứ ba</b>.', opts: o4('18', '20', '22', '40'), ans: 'B', why: 'Tổng ba số = 20 × 3 = 60; số thứ ba = 60 − 18 − 22 = 20.' },
    { sec: 'Trung bình cộng', name: 'Câu 5', pts: 1, text: 'Tìm trung bình cộng của: 5, 10, 15, 20, 25.', opts: o4('10', '20', '15', '75'), ans: 'C', why: 'Tổng = 75; trung bình cộng = 75 : 5 = 15.' },
    { sec: 'Ứng dụng', name: 'Câu 6', pts: 1, text: 'An cao 130 cm, Bình cao 136 cm. Trung bình cộng chiều cao của hai bạn là bao nhiêu?', opts: o4('130', '136', '266', '133'), ans: 'D', why: '(130 + 136) : 2 = 266 : 2 = 133 (cm).' },
    { sec: 'Tìm số hạng', name: 'Câu 7', pts: 1, text: 'Hai xe chở trung bình mỗi xe 45 tấn hàng; xe thứ nhất chở 40 tấn. Xe thứ hai chở bao nhiêu tấn?', opts: o4('50', '45', '40', '90'), ans: 'A', why: 'Tổng hai xe = 45 × 2 = 90; xe thứ hai = 90 − 40 = 50 (tấn).' },
    { sec: 'Số liên tiếp', name: 'Câu 8', pts: 1, text: 'Tìm trung bình cộng của ba số lẻ liên tiếp: 7, 9, 11.', opts: o4('7', '9', '11', '27'), ans: 'B', why: 'Trung bình cộng của các số cách đều là số ở giữa: 9.' },
    { sec: 'Ứng dụng', name: 'Câu 9', pts: 1, text: 'Lớp có 30 học sinh, trung bình mỗi em có 4 quyển vở. Cả lớp có tất cả bao nhiêu quyển vở?', opts: o4('30', '34', '120', '90'), ans: 'C', why: 'Tổng số vở = 4 × 30 = 120 (quyển).' },
    { sec: 'Tìm số hạng', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của hai số là 18, một số là 14. Tìm <b>số còn lại</b>.', opts: o4('4', '36', '20', '22'), ans: 'D', why: 'Tổng hai số = 18 × 2 = 36; số còn lại = 36 − 14 = 22.' },
  ],
},

/* ═══════════ ĐỀ 5 — TOÁN TRỒNG CÂY & CƯA GỖ ═══════════ */
{
  id: 9005, title: 'Đề 5 · Toán trồng cây & cưa gỗ', time: 20,
  questions: [
    { sec: 'Trồng cây', name: 'Câu 1', pts: 1, text: 'Trồng cây dọc một đoạn đường dài 100 m, hai cây cách nhau 5 m, cả hai đầu đường đều trồng. Cần bao nhiêu cây?', opts: o4('21', '20', '22', '25'), ans: 'A', why: 'Số cây = 100 : 5 + 1 = 20 + 1 = 21 (cây).' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Một đoạn đường dài 60 m, trồng cây cách nhau 4 m, hai đầu đều có cây. Cần bao nhiêu cây?', opts: o4('15', '16', '14', '17'), ans: 'B', why: 'Số cây = 60 : 4 + 1 = 15 + 1 = 16 (cây).' },
    { sec: 'Đường khép kín', name: 'Câu 3', pts: 1, text: 'Trồng cây quanh một cái ao (khép kín) có chu vi 48 m, hai cây cách nhau 6 m. Cần bao nhiêu cây?', opts: o4('7', '9', '8', '48'), ans: 'C', why: 'Đường khép kín: số cây = số khoảng = 48 : 6 = 8 (cây).' },
    { sec: 'Cưa gỗ', name: 'Câu 4', pts: 1, text: 'Cưa một khúc gỗ thành 5 đoạn, mỗi lần cưa hết 4 phút. Cưa xong hết bao nhiêu phút?', opts: o4('20', '12', '24', '16'), ans: 'D', why: 'Số lần cưa = 5 − 1 = 4; thời gian = 4 × 4 = 16 (phút).' },
    { sec: 'Cưa gỗ', name: 'Câu 5', pts: 1, text: 'Cưa một khúc gỗ dài 12 m thành các đoạn dài 2 m thì phải cưa mấy lần?', opts: o4('5', '6', '4', '7'), ans: 'A', why: 'Số đoạn = 12 : 2 = 6; số lần cưa = 6 − 1 = 5 (lần).' },
    { sec: 'Trồng cây', name: 'Câu 6', pts: 1, text: 'Trồng cây một bên đường dài 45 m, hai cây cách nhau 5 m, hai đầu đều trồng. Cần bao nhiêu cây?', opts: o4('9', '10', '11', '8'), ans: 'B', why: 'Số cây = 45 : 5 + 1 = 9 + 1 = 10 (cây).' },
    { sec: 'Khoảng cách', name: 'Câu 7', pts: 1, text: 'Có 8 cây trồng thẳng hàng, hai cây liền nhau cách 3 m. Khoảng cách từ cây đầu đến cây cuối là bao nhiêu mét?', opts: o4('24', '18', '21', '27'), ans: 'C', why: 'Số khoảng = 8 − 1 = 7; khoảng cách = 7 × 3 = 21 (m).' },
    { sec: 'Đóng cọc', name: 'Câu 8', pts: 1, text: 'Rào quanh một mảnh vườn hình vuông cạnh 10 m bằng các cọc cách nhau 2 m. Cần bao nhiêu cọc?', opts: o4('16', '21', '40', '20'), ans: 'D', why: 'Chu vi = 10 × 4 = 40 m; rào khép kín nên số cọc = 40 : 2 = 20 (cọc).' },
    { sec: 'Cắt dây', name: 'Câu 9', pts: 1, text: 'Cắt một sợi dây dài 20 m thành các đoạn dài 4 m thì phải cắt mấy lần?', opts: o4('4', '5', '6', '3'), ans: 'A', why: 'Số đoạn = 20 : 4 = 5; số lần cắt = 5 − 1 = 4 (lần).' },
    { sec: 'Trồng hai bên', name: 'Câu 10', pts: 1, text: 'Trồng cây hai bên một đoạn đường dài 30 m, mỗi bên cây cách nhau 5 m, hai đầu đều trồng. Cần tất cả bao nhiêu cây?', opts: o4('7', '14', '12', '16'), ans: 'B', why: 'Mỗi bên = 30 : 5 + 1 = 7 cây; hai bên = 7 × 2 = 14 (cây).' },
  ],
},

/* ═══════════ ĐỀ 6 — GÀ – CHÓ (GIẢ THIẾT TẠM) ═══════════ */
{
  id: 9006, title: 'Đề 6 · Bài toán gà – chó (giả thiết tạm)', time: 20,
  questions: [
    { sec: 'Gà – chó', name: 'Câu 1', pts: 1, text: 'Vừa gà vừa chó có 36 con, đếm được 100 chân. Hỏi có bao nhiêu con <b>chó</b>?', opts: o4('22', '18', '14', '16'), ans: 'C', why: 'Giả sử toàn gà: 36 × 2 = 72 chân; thừa 100 − 72 = 28 chân; số chó = 28 : 2 = 14 (con).' },
    { sec: 'Gà – chó', name: 'Câu 2', pts: 1, text: 'Vừa gà vừa chó có 36 con, đếm được 100 chân. Hỏi có bao nhiêu con <b>gà</b>?', opts: o4('14', '18', '20', '22'), ans: 'D', why: 'Số chó = 14 con nên số gà = 36 − 14 = 22 (con).' },
    { sec: 'Gà – chó', name: 'Câu 3', pts: 1, text: 'Có 10 con vừa gà vừa chó, đếm được 28 chân. Hỏi có bao nhiêu con chó?', opts: o4('4', '6', '3', '5'), ans: 'A', why: 'Giả sử toàn gà: 10 × 2 = 20 chân; thừa 28 − 20 = 8; số chó = 8 : 2 = 4 (con).' },
    { sec: 'Gà – thỏ', name: 'Câu 4', pts: 1, text: 'Có 20 con vừa gà vừa thỏ, đếm được 56 chân. Hỏi có bao nhiêu con thỏ?', opts: o4('12', '8', '10', '6'), ans: 'B', why: 'Giả sử toàn gà: 20 × 2 = 40 chân; thừa 56 − 40 = 16; số thỏ = 16 : 2 = 8 (con).' },
    { sec: 'Xe cộ', name: 'Câu 5', pts: 1, text: 'Bãi xe có xe đạp (2 bánh) và ô tô (4 bánh), tất cả 12 xe với 34 bánh. Hỏi có bao nhiêu ô tô?', opts: o4('7', '6', '5', '4'), ans: 'C', why: 'Giả sử toàn xe đạp: 12 × 2 = 24 bánh; thừa 34 − 24 = 10; số ô tô = 10 : 2 = 5 (xe).' },
    { sec: 'Gà – chó', name: 'Câu 6', pts: 1, text: 'Có 15 con vừa gà vừa chó, đếm được 40 chân. Hỏi có bao nhiêu con gà?', opts: o4('5', '8', '12', '10'), ans: 'D', why: 'Giả sử toàn gà: 15 × 2 = 30 chân; thừa 40 − 30 = 10; số chó = 5 → số gà = 15 − 5 = 10 (con).' },
    { sec: 'Suy luận', name: 'Câu 7', pts: 1, text: 'Có 24 con vừa gà vừa chó, biết tổng số chân gà bằng tổng số chân chó. Hỏi có bao nhiêu con gà?', opts: o4('16', '8', '12', '18'), ans: 'A', why: 'Chân gà bằng chân chó nên 2 × (số gà) = 4 × (số chó) → số gà gấp đôi số chó; 3 phần = 24 → chó 8, gà 16 (con).' },
    { sec: 'Tính chân', name: 'Câu 8', pts: 1, text: 'Có 5 con chó và 8 con gà. Tất cả có bao nhiêu chân?', opts: o4('30', '36', '40', '28'), ans: 'B', why: '5 × 4 + 8 × 2 = 20 + 16 = 36 (chân).' },
    { sec: 'Xe cộ', name: 'Câu 9', pts: 1, text: 'Có xe máy (2 bánh) và xe ba gác (3 bánh), tất cả 10 xe với 26 bánh. Hỏi có bao nhiêu xe ba gác?', opts: o4('4', '5', '6', '7'), ans: 'C', why: 'Giả sử toàn xe máy: 10 × 2 = 20 bánh; thừa 26 − 20 = 6; mỗi xe ba gác thừa 1 bánh → 6 xe ba gác.' },
    { sec: 'Gà – chó', name: 'Câu 10', pts: 1, text: 'Có 30 con vừa gà vừa chó, số chó nhiều hơn số gà 4 con. Hỏi tất cả có bao nhiêu chân?', opts: o4('120', '88', '90', '94'), ans: 'D', why: 'Chó = (30 + 4) : 2 = 17; gà = 13. Số chân = 17 × 4 + 13 × 2 = 68 + 26 = 94 (chân).' },
  ],
},

/* ═══════════ ĐỀ 7 — ĐẾM HÌNH & ĐẾM SỐ ═══════════ */
{
  id: 9007, title: 'Đề 7 · Đếm hình & đếm số', time: 20,
  questions: [
    { sec: 'Đếm số', name: 'Câu 1', pts: 1, text: 'Có tất cả bao nhiêu số có <b>hai</b> chữ số?', opts: o4('90', '99', '100', '89'), ans: 'A', why: 'Từ 10 đến 99 có 99 − 10 + 1 = 90 số.' },
    { sec: 'Đếm số', name: 'Câu 2', pts: 1, text: 'Có tất cả bao nhiêu số có <b>ba</b> chữ số?', opts: o4('899', '900', '999', '1 000'), ans: 'B', why: 'Từ 100 đến 999 có 999 − 100 + 1 = 900 số.' },
    { sec: 'Đếm theo dấu hiệu', name: 'Câu 3', pts: 1, text: 'Từ 1 đến 100 có bao nhiêu số chia hết cho 5?', opts: o4('10', '25', '20', '19'), ans: 'C', why: 'Các số 5, 10, …, 100 có 100 : 5 = 20 số.' },
    { sec: 'Lập số', name: 'Câu 4', pts: 1, text: 'Từ ba chữ số 1, 2, 3 lập được bao nhiêu số có hai chữ số <b>khác nhau</b>?', opts: o4('9', '3', '8', '6'), ans: 'D', why: 'Chữ số hàng chục có 3 cách, hàng đơn vị còn 2 cách: 3 × 2 = 6 số.' },
    { sec: 'Đếm đoạn thẳng', name: 'Câu 5', pts: 1, text: 'Trên một đường thẳng có 5 điểm phân biệt. Có tất cả bao nhiêu đoạn thẳng?', opts: o4('10', '20', '5', '25'), ans: 'A', why: 'Mỗi điểm nối với 4 điểm còn lại: 5 × 4 : 2 = 10 (đoạn thẳng).' },
    { sec: 'Đếm theo dấu hiệu', name: 'Câu 6', pts: 1, text: 'Từ 1 đến 50 có bao nhiêu số chẵn?', opts: o4('24', '25', '50', '26'), ans: 'B', why: 'Các số 2, 4, …, 50 có 50 : 2 = 25 số.' },
    { sec: 'Đếm theo dấu hiệu', name: 'Câu 7', pts: 1, text: 'Có bao nhiêu số có hai chữ số chia hết cho 9?', opts: o4('9', '11', '10', '12'), ans: 'C', why: 'Các số 18, 27, …, 99 có (99 − 18) : 9 + 1 = 10 số.' },
    { sec: 'Đánh số trang', name: 'Câu 8', pts: 1, text: 'Cần bao nhiêu chữ số để đánh số trang một cuốn sách từ trang 1 đến trang 20?', opts: o4('40', '29', '20', '31'), ans: 'D', why: 'Trang 1–9: 9 chữ số; trang 10–20: 11 trang × 2 = 22 chữ số. Tổng 9 + 22 = 31.' },
    { sec: 'Lập số', name: 'Câu 9', pts: 1, text: 'Từ ba chữ số 0, 1, 2 lập được bao nhiêu số có hai chữ số <b>khác nhau</b>?', opts: o4('4', '6', '2', '9'), ans: 'A', why: 'Hàng chục khác 0 (có 2 cách: 1 hoặc 2), hàng đơn vị còn 2 cách: 2 × 2 = 4 số.' },
    { sec: 'Đếm trận đấu', name: 'Câu 10', pts: 1, text: '4 đội bóng thi đấu vòng tròn một lượt, hai đội bất kì gặp nhau đúng một trận. Có tất cả bao nhiêu trận?', opts: o4('4', '6', '12', '8'), ans: 'B', why: 'Số trận = 4 × 3 : 2 = 6 (trận).' },
  ],
},

/* ═══════════ ĐỀ 8 — CHỮ SỐ & CẤU TẠO SỐ ═══════════ */
{
  id: 9008, title: 'Đề 8 · Chữ số & cấu tạo số', time: 20,
  questions: [
    { sec: 'Cấu tạo số', name: 'Câu 1', pts: 1, text: 'Số có ba chữ số với hàng trăm là 5, hàng chục là 0, hàng đơn vị là 7 là số nào?', opts: o4('570', '5 007', '507', '75'), ans: 'C', why: '5 trăm, 0 chục, 7 đơn vị viết là 507.' },
    { sec: 'Tổng chữ số', name: 'Câu 2', pts: 1, text: 'Tổng các chữ số của số 2 358 là bao nhiêu?', opts: o4('8', '15', '20', '18'), ans: 'D', why: '2 + 3 + 5 + 8 = 18.' },
    { sec: 'Số lớn nhất', name: 'Câu 3', pts: 1, text: 'Số lớn nhất có ba chữ số <b>khác nhau</b> là số nào?', opts: o4('987', '999', '978', '986'), ans: 'A', why: 'Chọn chữ số lớn dần từ hàng cao: 9, 8, 7 → 987.' },
    { sec: 'Số bé nhất', name: 'Câu 4', pts: 1, text: 'Số bé nhất có ba chữ số <b>khác nhau</b> là số nào?', opts: o4('100', '102', '123', '120'), ans: 'B', why: 'Hàng trăm nhỏ nhất là 1, rồi 0, rồi 2 → 102.' },
    { sec: 'Viết thêm chữ số', name: 'Câu 5', pts: 1, text: 'Viết thêm chữ số 0 vào bên phải số 47 thì số mới hơn số cũ bao nhiêu đơn vị?', opts: o4('470', '43', '423', '410'), ans: 'C', why: 'Số mới là 470; hơn số cũ 470 − 47 = 423 đơn vị.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: 'Một số có hai chữ số, chữ số hàng chục gấp đôi chữ số hàng đơn vị, tổng hai chữ số là 12. Đó là số nào?', opts: o4('48', '93', '24', '84'), ans: 'D', why: 'Gọi đơn vị là a thì hàng chục là 2a; a + 2a = 12 → a = 4. Số đó là 84.' },
    { sec: 'Tìm số', name: 'Câu 7', pts: 1, text: 'Một số có hai chữ số, tổng hai chữ số là 9, chữ số hàng chục hơn hàng đơn vị 3. Đó là số nào?', opts: o4('63', '36', '54', '72'), ans: 'A', why: 'Hàng chục = (9 + 3) : 2 = 6; hàng đơn vị = 3. Số đó là 63.' },
    { sec: 'Viết thêm chữ số', name: 'Câu 8', pts: 1, text: 'Viết thêm chữ số 3 vào bên trái một số có hai chữ số thì số mới hơn số cũ bao nhiêu đơn vị?', opts: o4('30', '300', '3', '303'), ans: 'B', why: 'Viết 3 vào bên trái là thêm 3 trăm → số mới hơn số cũ 300 đơn vị.' },
    { sec: 'Đếm chữ số', name: 'Câu 9', pts: 1, text: 'Trong số 2 024, chữ số 2 xuất hiện mấy lần?', opts: o4('1', '3', '2', '4'), ans: 'C', why: 'Số 2 024 có hai chữ số 2 (hàng nghìn và hàng chục).' },
    { sec: 'Đổi chỗ chữ số', name: 'Câu 10', pts: 1, text: 'Đổi chỗ hai chữ số của số 38 ta được số mới. Số mới hơn số cũ bao nhiêu đơn vị?', opts: o4('83', '38', '54', '45'), ans: 'D', why: 'Số mới là 83; hơn số cũ 83 − 38 = 45 đơn vị.' },
  ],
},

/* ═══════════ ĐỀ 9 — DẤU HIỆU CHIA HẾT & PHÂN SỐ NÂNG CAO ═══════════ */
{
  id: 9009, title: 'Đề 9 · Dấu hiệu chia hết & phân số nâng cao', time: 20,
  questions: [
    { sec: 'Chia hết', name: 'Câu 1', pts: 1, text: 'Tìm chữ số <b>a lớn nhất</b> để số 12a chia hết cho 3.', opts: o4('9', '6', '3', '0'), ans: 'A', why: '1 + 2 + a = 3 + a chia hết cho 3 khi a là 0, 3, 6, 9; lớn nhất là 9 (số 129).' },
    { sec: 'Chia hết', name: 'Câu 2', pts: 1, text: 'Tìm chữ số <b>nhỏ nhất</b> điền vào dấu * để số 2*7 chia hết cho 9.', opts: o4('9', '0', '2', '7'), ans: 'B', why: '2 + * + 7 = 9 + * chia hết cho 9 khi * là 0 hoặc 9; nhỏ nhất là 0 (số 207).' },
    { sec: 'Rút gọn', name: 'Câu 3', pts: 1, text: 'Rút gọn phân số 12/18 được phân số nào?', opts: o4('3/2', '6/9', '2/3', '1/2'), ans: 'C', why: 'Chia cả tử và mẫu cho 6: 12/18 = 2/3.' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'Trong hai phân số 2/3 và 3/4, phân số nào <b>lớn hơn</b>?', opts: o4('bằng nhau', '2/3', 'không so sánh được', '3/4'), ans: 'D', why: 'Quy đồng: 2/3 = 8/12; 3/4 = 9/12. Vì 9/12 > 8/12 nên 3/4 lớn hơn.' },
    { sec: 'Cộng phân số', name: 'Câu 5', pts: 1, text: 'Tính: 1/2 + 1/3', opts: o4('5/6', '2/5', '1/5', '2/6'), ans: 'A', why: 'Quy đồng: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.' },
    { sec: 'Phân số của một số', name: 'Câu 6', pts: 1, text: '3/4 của 20 là bao nhiêu?', opts: o4('12', '15', '16', '5'), ans: 'B', why: '20 : 4 × 3 = 5 × 3 = 15.' },
    { sec: 'Phân số bằng 1', name: 'Câu 7', pts: 1, text: 'Phân số nào <b>bằng 1</b>?', opts: o4('4/5', '5/4', '5/5', '0/5'), ans: 'C', why: 'Phân số có tử số bằng mẫu số thì bằng 1: 5/5 = 1.' },
    { sec: 'Cộng phân số', name: 'Câu 8', pts: 1, text: 'Tính: 2/5 + 3/5', opts: o4('5/10', '6/5', '5/25', '1'), ans: 'D', why: '2/5 + 3/5 = 5/5 = 1.' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Tìm số tự nhiên x, biết 4/x = 1/2.', opts: o4('8', '2', '4', '6'), ans: 'A', why: '1/2 = 4/8 nên x = 8.' },
    { sec: 'Chia hết', name: 'Câu 10', pts: 1, text: 'Số nhỏ nhất có hai chữ số chia hết cho cả 2, 3 và 5 là số nào?', opts: o4('60', '30', '90', '15'), ans: 'B', why: 'Chia hết cho cả 2, 3, 5 thì chia hết cho 30; số hai chữ số nhỏ nhất là 30.' },
  ],
},

/* ═══════════ ĐỀ 10 — HÌNH HỌC & TOÁN CÓ LỜI VĂN NHIỀU BƯỚC ═══════════ */
{
  id: 9010, title: 'Đề 10 · Hình học & toán có lời văn nhiều bước', time: 20,
  questions: [
    { sec: 'Chu vi', name: 'Câu 1', pts: 1, text: 'Hình chữ nhật có chiều dài 12 cm, chiều rộng 8 cm. Chu vi hình đó là bao nhiêu?', opts: o4('20 cm', '96 cm', '40 cm', '80 cm'), ans: 'C', why: 'Chu vi = (12 + 8) × 2 = 20 × 2 = 40 (cm).' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: 'Hình chữ nhật có chiều dài 12 cm, chiều rộng 8 cm. Diện tích hình đó là bao nhiêu?', opts: o4('40 cm²', '20 cm²', '48 cm²', '96 cm²'), ans: 'D', why: 'Diện tích = 12 × 8 = 96 (cm²).' },
    { sec: 'Hình vuông', name: 'Câu 3', pts: 1, text: 'Hình vuông có chu vi 36 cm. Diện tích hình đó là bao nhiêu?', opts: o4('81 cm²', '36 cm²', '9 cm²', '72 cm²'), ans: 'A', why: 'Cạnh = 36 : 4 = 9 cm; diện tích = 9 × 9 = 81 (cm²).' },
    { sec: 'Hình bình hành', name: 'Câu 4', pts: 1, text: 'Hình bình hành có độ dài đáy 10 cm, chiều cao 6 cm. Diện tích hình đó là bao nhiêu?', opts: o4('16 cm²', '60 cm²', '30 cm²', '120 cm²'), ans: 'B', why: 'Diện tích hình bình hành = đáy × chiều cao = 10 × 6 = 60 (cm²).' },
    { sec: 'Hình thoi', name: 'Câu 5', pts: 1, text: 'Hình thoi có hai đường chéo dài 8 cm và 6 cm. Diện tích hình đó là bao nhiêu?', opts: o4('48 cm²', '14 cm²', '24 cm²', '28 cm²'), ans: 'C', why: 'Diện tích hình thoi = (8 × 6) : 2 = 48 : 2 = 24 (cm²).' },
    { sec: 'Bài toán nhiều bước', name: 'Câu 6', pts: 1, text: 'Một mảnh vườn hình chữ nhật dài 25 m, rộng 15 m. Mỗi mét vuông thu được 3 kg rau. Cả vườn thu được bao nhiêu ki-lô-gam rau?', opts: o4('375 kg', '750 kg', '40 kg', '1 125 kg'), ans: 'D', why: 'Diện tích = 25 × 15 = 375 m²; số rau = 375 × 3 = 1 125 (kg).' },
    { sec: 'Hình chữ nhật', name: 'Câu 7', pts: 1, text: 'Hình chữ nhật có chiều dài gấp 3 lần chiều rộng và chu vi 48 cm. Diện tích hình đó là bao nhiêu?', opts: o4('108 cm²', '96 cm²', '48 cm²', '144 cm²'), ans: 'A', why: 'Nửa chu vi = 24 cm = 4 lần chiều rộng → rộng 6 cm, dài 18 cm; diện tích = 18 × 6 = 108 (cm²).' },
    { sec: 'Cắt ghép', name: 'Câu 8', pts: 1, text: 'Cắt một hình vuông cạnh 4 cm thành 4 hình vuông nhỏ bằng nhau. Cạnh mỗi hình vuông nhỏ là bao nhiêu?', opts: o4('1 cm', '2 cm', '4 cm', '8 cm'), ans: 'B', why: 'Chia mỗi cạnh làm đôi được 4 hình vuông nhỏ cạnh 4 : 2 = 2 (cm).' },
    { sec: 'Bài toán nhiều bước', name: 'Câu 9', pts: 1, text: 'Cửa hàng có 240 kg gạo. Ngày đầu bán 1/3 số gạo, ngày sau bán 1/2 số gạo còn lại. Hỏi cuối cùng còn lại bao nhiêu ki-lô-gam gạo?', opts: o4('160 kg', '120 kg', '80 kg', '40 kg'), ans: 'C', why: 'Ngày đầu bán 240 : 3 = 80 kg, còn 160 kg; ngày sau bán 160 : 2 = 80 kg, còn 80 (kg).' },
    { sec: 'Bài toán nhiều bước', name: 'Câu 10', pts: 1, text: 'Lan có 60 000 đồng, mua 3 quyển vở giá 8 000 đồng/quyển và 2 chiếc bút giá 5 000 đồng/chiếc. Lan còn lại bao nhiêu tiền?', opts: o4('34 000 đồng', '24 000 đồng', '16 000 đồng', '26 000 đồng'), ans: 'D', why: 'Tiền vở = 3 × 8 000 = 24 000; tiền bút = 2 × 5 000 = 10 000; còn lại = 60 000 − 34 000 = 26 000 (đồng).' },
  ],
},

];

SUBJECTS.push({ id:'nc4', name:'Toán nâng cao', short:'Nâng cao 4', icon:'🥇', grade:4, exams:NANGCAO4_EXAMS, ready:true, heroTitle:'Toán nâng cao lớp 4 — bồi dưỡng HSG: suy luận, tính nhanh, hình học và toán có lời văn', heroMeta:'📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; phong cách MathX/HSG, biên soạn lại' });
