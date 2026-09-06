// TOÁN — LỚP 1 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
//
// Phạm vi lớp 1: các số đến 100; đếm – đọc – viết – so sánh số; cộng trừ (không nhớ)
// trong phạm vi 100 và cộng trừ trong phạm vi 20; hình phẳng và hình khối; đo độ dài (cm);
// xem giờ đúng; giải toán có lời văn đơn giản (thêm – bớt).

const TOAN1_EXAMS = [

/* ═══════════ ĐỀ 1 — ĐẾM, ĐỌC, VIẾT SỐ ĐẾN 10 ═══════════ */
{
  id: 6101, title: 'Đề 1 · Đếm và so sánh trong phạm vi 10', time: 15,
  questions: [
    { sec: 'Đếm', name: 'Câu 1', pts: 1, text: 'Có mấy quả táo? 🍎🍎🍎🍎🍎',
      opts: o4('3', '4', '5', '6'), ans: 'C', why: 'Đếm lần lượt: 1, 2, 3, 4, 5 — có 5 quả táo.' },
    { sec: 'Số liền sau', name: 'Câu 2', pts: 1, text: 'Số liền sau của số 6 là số nào?',
      opts: o4('5', '7', '6', '8'), ans: 'B', why: 'Số liền sau 6 là 7 (đếm thêm 1).' },
    { sec: 'Số liền trước', name: 'Câu 3', pts: 1, text: 'Số liền trước của số 9 là số nào?',
      opts: o4('10', '9', '8', '7'), ans: 'C', why: 'Số liền trước 9 là 8 (bớt đi 1).' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'Số bé nhất trong các số 3, 7, 2, 5 là số nào?',
      opts: o4('2', '3', '5', '7'), ans: 'A', why: 'Trong 3, 7, 2, 5 thì 2 là số bé nhất.' },
    { sec: 'So sánh', name: 'Câu 5', pts: 1, text: 'Số lớn nhất trong các số 8, 4, 9, 6 là số nào?',
      opts: o4('8', '4', '9', '6'), ans: 'C', why: 'Trong 8, 4, 9, 6 thì 9 là số lớn nhất.' },
    { sec: 'Đếm', name: 'Câu 6', pts: 1, text: 'Đếm ngược: 10, 9, 8, ... Số tiếp theo là số nào?',
      opts: o4('7', '11', '6', '9'), ans: 'A', why: 'Đếm ngược (bớt 1): sau 8 là 7.' },
    { sec: 'So sánh', name: 'Câu 7', pts: 1, text: 'Nhóm nào có nhiều cá hơn: 🐟🐟🐟 hay 🐟🐟?',
      opts: o4('Nhóm 🐟🐟🐟', 'Nhóm 🐟🐟', 'Hai nhóm bằng nhau', 'Không đếm được'), ans: 'A',
      why: 'Nhóm đầu có 3 con, nhóm sau có 2 con; 3 nhiều hơn 2.' },
    { sec: 'Số 0', name: 'Câu 8', pts: 1, text: 'Trong đĩa không có quả nào. Ta viết số mấy?',
      opts: o4('1', '0', '10', '2'), ans: 'B', why: 'Không có cái nào thì viết là số 0.' },
    { sec: 'Sắp xếp', name: 'Câu 9', pts: 1, text: 'Sắp xếp 5, 2, 8 theo thứ tự từ bé đến lớn:',
      opts: o4('2, 5, 8', '8, 5, 2', '5, 2, 8', '2, 8, 5'), ans: 'A', why: 'Từ bé đến lớn: 2, 5, 8.' },
    { sec: 'Đếm thêm', name: 'Câu 10', pts: 1, text: 'Có 4 bạn, thêm 1 bạn nữa. Có tất cả mấy bạn?',
      opts: o4('3', '4', '5', '6'), ans: 'C', why: 'Đếm thêm 1: 4 thêm 1 là 5 bạn.' },
  ],
},

/* ═══════════ ĐỀ 2 — CỘNG, TRỪ TRONG PHẠM VI 10 ═══════════ */
{
  id: 6102, title: 'Đề 2 · Cộng, trừ trong phạm vi 10', time: 15,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '2 + 3 = ?', opts: o4('4', '5', '6', '3'), ans: 'B', why: '2 + 3 = 5.' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '4 + 5 = ?', opts: o4('8', '9', '10', '7'), ans: 'B', why: '4 + 5 = 9.' },
    { sec: 'Trừ', name: 'Câu 3', pts: 1, text: '7 − 2 = ?', opts: o4('4', '5', '6', '9'), ans: 'B', why: '7 − 2 = 5.' },
    { sec: 'Trừ', name: 'Câu 4', pts: 1, text: '10 − 4 = ?', opts: o4('5', '6', '7', '14'), ans: 'B', why: '10 − 4 = 6.' },
    { sec: 'Cộng', name: 'Câu 5', pts: 1, text: '6 + 4 = ?', opts: o4('9', '10', '11', '8'), ans: 'B', why: '6 + 4 = 10.' },
    { sec: 'Trừ', name: 'Câu 6', pts: 1, text: '8 − 3 = ?', opts: o4('4', '5', '6', '11'), ans: 'B', why: '8 − 3 = 5.' },
    { sec: 'Cộng', name: 'Câu 7', pts: 1, text: '3 + 3 = ?', opts: o4('5', '6', '7', '9'), ans: 'B', why: '3 + 3 = 6.' },
    { sec: 'Trừ', name: 'Câu 8', pts: 1, text: '9 − 9 = ?', opts: o4('0', '1', '9', '18'), ans: 'A', why: 'Một số trừ chính nó bằng 0: 9 − 9 = 0.' },
    { sec: 'Cộng với 0', name: 'Câu 9', pts: 1, text: '5 + 0 = ?', opts: o4('0', '5', '50', '6'), ans: 'B', why: 'Cộng với 0 giữ nguyên: 5 + 0 = 5.' },
    { sec: 'Cộng', name: 'Câu 10', pts: 1, text: '2 + 2 + 2 = ?', opts: o4('4', '6', '8', '2'), ans: 'B', why: '2 + 2 = 4, rồi 4 + 2 = 6.' },
  ],
},

/* ═══════════ ĐỀ 3 — CÁC SỐ ĐẾN 100: CHỤC VÀ ĐƠN VỊ ═══════════ */
{
  id: 6103, title: 'Đề 3 · Các số đến 100', time: 15,
  questions: [
    { sec: 'Cấu tạo số', name: 'Câu 1', pts: 1, text: 'Số 35 gồm mấy chục và mấy đơn vị?',
      opts: o4('5 chục 3 đơn vị', '3 chục 5 đơn vị', '35 chục', '3 đơn vị 5 chục'), ans: 'B',
      why: 'Số 35 có chữ số 3 ở hàng chục, chữ số 5 ở hàng đơn vị: 3 chục 5 đơn vị.' },
    { sec: 'Viết số', name: 'Câu 2', pts: 1, text: '4 chục 7 đơn vị viết là số nào?',
      opts: o4('74', '47', '407', '11'), ans: 'B', why: '4 chục và 7 đơn vị viết là 47.' },
    { sec: 'Viết số', name: 'Câu 3', pts: 1, text: 'Số gồm 6 chục và 0 đơn vị là số nào?',
      opts: o4('6', '16', '60', '66'), ans: 'C', why: '6 chục 0 đơn vị là 60.' },
    { sec: 'Số liền sau', name: 'Câu 4', pts: 1, text: 'Số liền sau của 49 là số nào?',
      opts: o4('48', '50', '59', '40'), ans: 'B', why: 'Liền sau 49 là 50.' },
    { sec: 'Số liền trước', name: 'Câu 5', pts: 1, text: 'Số liền trước của 70 là số nào?',
      opts: o4('71', '69', '60', '80'), ans: 'B', why: 'Liền trước 70 là 69.' },
    { sec: 'Đọc viết', name: 'Câu 6', pts: 1, text: '"Hai mươi mốt" viết là số nào?',
      opts: o4('12', '21', '20', '201'), ans: 'B', why: 'Hai mươi mốt viết là 21.' },
    { sec: 'Đọc viết', name: 'Câu 7', pts: 1, text: 'Số 90 đọc là gì?',
      opts: o4('Chín', 'Chín mươi', 'Chín trăm', 'Mười chín'), ans: 'B', why: 'Số 90 đọc là "chín mươi".' },
    { sec: 'Giá trị chữ số', name: 'Câu 8', pts: 1, text: 'Trong số 58, chữ số 5 chỉ mấy chục?',
      opts: o4('5 chục', '8 chục', '5 đơn vị', '50 chục'), ans: 'A', why: 'Chữ số 5 ở hàng chục nên chỉ 5 chục (tức 50).' },
    { sec: 'Số tròn chục', name: 'Câu 9', pts: 1, text: 'Số tròn chục lớn nhất có hai chữ số là số nào?',
      opts: o4('90', '99', '100', '80'), ans: 'A', why: 'Số tròn chục hai chữ số lớn nhất là 90 (100 có ba chữ số).' },
    { sec: 'Đếm thêm', name: 'Câu 10', pts: 1, text: 'Đếm thêm 10: 20, 30, 40, ... Số tiếp theo là?',
      opts: o4('41', '50', '45', '60'), ans: 'B', why: 'Thêm 10 vào 40 được 50.' },
  ],
},

/* ═══════════ ĐỀ 4 — SO SÁNH SỐ ĐẾN 100 ═══════════ */
{
  id: 6104, title: 'Đề 4 · So sánh các số đến 100', time: 15,
  questions: [
    { sec: 'So sánh', name: 'Câu 1', pts: 1, text: 'Điền dấu thích hợp: 34 ... 43',
      opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: '34 có 3 chục, 43 có 4 chục nên 34 < 43.' },
    { sec: 'So sánh', name: 'Câu 2', pts: 1, text: 'Điền dấu thích hợp: 76 ... 67',
      opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'A', why: '76 có 7 chục, 67 có 6 chục nên 76 > 67.' },
    { sec: 'So sánh', name: 'Câu 3', pts: 1, text: 'Điền dấu thích hợp: 50 ... 50',
      opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'C', why: 'Hai số bằng nhau nên 50 = 50.' },
    { sec: 'Lớn nhất', name: 'Câu 4', pts: 1, text: 'Số lớn nhất trong 45, 54, 50 là số nào?',
      opts: o4('45', '54', '50', 'Cả ba bằng nhau'), ans: 'B', why: '54 có 5 chục 4 đơn vị, lớn hơn 50 và 45.' },
    { sec: 'Bé nhất', name: 'Câu 5', pts: 1, text: 'Số bé nhất trong 38, 83, 80 là số nào?',
      opts: o4('38', '83', '80', 'Không có'), ans: 'A', why: '38 có 3 chục, bé hơn 80 và 83.' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'Điền dấu thích hợp: 29 ... 30',
      opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: '29 < 30 (29 đứng trước 30).' },
    { sec: 'So sánh', name: 'Câu 7', pts: 1, text: 'Điền dấu thích hợp: 99 ... 100',
      opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: '99 đứng trước 100 nên 99 < 100.' },
    { sec: 'Sắp xếp', name: 'Câu 8', pts: 1, text: 'Sắp xếp 60, 16, 61 từ bé đến lớn:',
      opts: o4('16, 60, 61', '60, 61, 16', '16, 61, 60', '61, 60, 16'), ans: 'A', why: 'Từ bé đến lớn: 16, 60, 61.' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Số nào lớn hơn 70?',
      opts: o4('68', '70', '72', '69'), ans: 'C', why: '72 lớn hơn 70; các số kia bằng hoặc bé hơn 70.' },
    { sec: 'Tìm số', name: 'Câu 10', pts: 1, text: 'Số nào bé hơn 25?',
      opts: o4('25', '52', '20', '30'), ans: 'C', why: '20 bé hơn 25; các số kia bằng hoặc lớn hơn.' },
  ],
},

/* ═══════════ ĐỀ 5 — CỘNG, TRỪ (KHÔNG NHỚ) TRONG PHẠM VI 100 ═══════════ */
{
  id: 6105, title: 'Đề 5 · Cộng, trừ trong phạm vi 100', time: 15,
  questions: [
    { sec: 'Cộng tròn chục', name: 'Câu 1', pts: 1, text: '30 + 20 = ?', opts: o4('40', '50', '60', '25'), ans: 'B', why: '3 chục cộng 2 chục là 5 chục: 30 + 20 = 50.' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '45 + 3 = ?', opts: o4('48', '75', '42', '15'), ans: 'A', why: '45 + 3 = 48 (cộng ở hàng đơn vị).' },
    { sec: 'Trừ tròn chục', name: 'Câu 3', pts: 1, text: '60 − 40 = ?', opts: o4('20', '30', '100', '10'), ans: 'A', why: '6 chục trừ 4 chục là 2 chục: 60 − 40 = 20.' },
    { sec: 'Trừ', name: 'Câu 4', pts: 1, text: '57 − 5 = ?', opts: o4('52', '02', '62', '50'), ans: 'A', why: '57 − 5 = 52 (trừ ở hàng đơn vị).' },
    { sec: 'Cộng', name: 'Câu 5', pts: 1, text: '24 + 13 = ?', opts: o4('37', '27', '54', '11'), ans: 'A', why: '24 + 13: 4+3=7, 2+1=3 → 37.' },
    { sec: 'Trừ', name: 'Câu 6', pts: 1, text: '68 − 25 = ?', opts: o4('43', '33', '93', '53'), ans: 'A', why: '68 − 25: 8−5=3, 6−2=4 → 43.' },
    { sec: 'Cộng tròn chục', name: 'Câu 7', pts: 1, text: '40 + 50 = ?', opts: o4('80', '90', '100', '45'), ans: 'B', why: '4 chục cộng 5 chục là 9 chục: 40 + 50 = 90.' },
    { sec: 'Cộng', name: 'Câu 8', pts: 1, text: '33 + 33 = ?', opts: o4('66', '63', '96', '36'), ans: 'A', why: '33 + 33: 3+3=6, 3+3=6 → 66.' },
    { sec: 'Trừ', name: 'Câu 9', pts: 1, text: '99 − 9 = ?', opts: o4('90', '80', '9', '00'), ans: 'A', why: '99 − 9 = 90 (trừ ở hàng đơn vị).' },
    { sec: 'Cộng', name: 'Câu 10', pts: 1, text: '12 + 34 = ?', opts: o4('46', '44', '56', '22'), ans: 'A', why: '12 + 34: 2+4=6, 1+3=4 → 46.' },
  ],
},

/* ═══════════ ĐỀ 6 — CỘNG, TRỪ TRONG PHẠM VI 20 ═══════════ */
{
  id: 6106, title: 'Đề 6 · Cộng, trừ trong phạm vi 20', time: 15,
  questions: [
    { sec: 'Cộng qua 10', name: 'Câu 1', pts: 1, text: '8 + 5 = ?', opts: o4('12', '13', '14', '11'), ans: 'B', why: '8 + 2 = 10, còn 3 nữa là 13.' },
    { sec: 'Cộng qua 10', name: 'Câu 2', pts: 1, text: '9 + 6 = ?', opts: o4('14', '15', '16', '13'), ans: 'B', why: '9 + 1 = 10, còn 5 nữa là 15.' },
    { sec: 'Trừ qua 10', name: 'Câu 3', pts: 1, text: '15 − 7 = ?', opts: o4('7', '8', '9', '6'), ans: 'B', why: '15 − 5 = 10, trừ tiếp 2 còn 8.' },
    { sec: 'Trừ qua 10', name: 'Câu 4', pts: 1, text: '13 − 4 = ?', opts: o4('8', '9', '10', '7'), ans: 'B', why: '13 − 3 = 10, trừ tiếp 1 còn 9.' },
    { sec: 'Cộng', name: 'Câu 5', pts: 1, text: '7 + 7 = ?', opts: o4('13', '14', '15', '12'), ans: 'B', why: '7 + 7 = 14.' },
    { sec: 'Trừ', name: 'Câu 6', pts: 1, text: '16 − 8 = ?', opts: o4('7', '8', '9', '6'), ans: 'B', why: '16 − 8 = 8.' },
    { sec: 'Cộng', name: 'Câu 7', pts: 1, text: '9 + 9 = ?', opts: o4('17', '18', '19', '16'), ans: 'B', why: '9 + 9 = 18.' },
    { sec: 'Trừ', name: 'Câu 8', pts: 1, text: '11 − 3 = ?', opts: o4('7', '8', '9', '14'), ans: 'B', why: '11 − 1 = 10, trừ tiếp 2 còn 8.' },
    { sec: 'Cộng', name: 'Câu 9', pts: 1, text: '6 + 8 = ?', opts: o4('13', '14', '15', '12'), ans: 'B', why: '6 + 4 = 10, còn 4 nữa là 14.' },
    { sec: 'Trừ', name: 'Câu 10', pts: 1, text: '20 − 5 = ?', opts: o4('14', '15', '16', '25'), ans: 'B', why: '20 − 5 = 15.' },
  ],
},

/* ═══════════ ĐỀ 7 — HÌNH PHẲNG VÀ HÌNH KHỐI ═══════════ */
{
  id: 6107, title: 'Đề 7 · Hình phẳng và hình khối', time: 15,
  questions: [
    { sec: 'Hình phẳng', name: 'Câu 1', pts: 1, text: 'Hình có 3 cạnh là hình gì?',
      opts: o4('Hình tròn', 'Hình tam giác', 'Hình vuông', 'Hình chữ nhật'), ans: 'B', why: 'Hình tam giác có 3 cạnh.' },
    { sec: 'Hình phẳng', name: 'Câu 2', pts: 1, text: 'Hình có 4 cạnh bằng nhau và 4 góc vuông là hình gì?',
      opts: o4('Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình bầu dục'), ans: 'A', why: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.' },
    { sec: 'Hình phẳng', name: 'Câu 3', pts: 1, text: 'Mặt quyển sách, mặt bàn thường có dạng hình gì?',
      opts: o4('Hình tròn', 'Hình tam giác', 'Hình chữ nhật', 'Hình cầu'), ans: 'C', why: 'Mặt sách, mặt bàn thường có dạng hình chữ nhật.' },
    { sec: 'Hình phẳng', name: 'Câu 4', pts: 1, text: 'Mặt đồng hồ, bánh xe có dạng hình gì?',
      opts: o4('Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'), ans: 'B', why: 'Mặt đồng hồ, bánh xe có dạng hình tròn.' },
    { sec: 'Hình khối', name: 'Câu 5', pts: 1, text: 'Quả bóng có dạng khối gì?',
      opts: o4('Khối lập phương', 'Khối hộp chữ nhật', 'Khối cầu', 'Khối trụ'), ans: 'C', why: 'Quả bóng có dạng khối cầu.' },
    { sec: 'Hình khối', name: 'Câu 6', pts: 1, text: 'Viên xúc xắc (6 mặt đều là hình vuông) có dạng khối gì?',
      opts: o4('Khối lập phương', 'Khối cầu', 'Khối trụ', 'Khối hộp chữ nhật'), ans: 'A', why: 'Xúc xắc có 6 mặt hình vuông bằng nhau nên là khối lập phương.' },
    { sec: 'Hình khối', name: 'Câu 7', pts: 1, text: 'Hộp bánh dài, các mặt là hình chữ nhật có dạng khối gì?',
      opts: o4('Khối cầu', 'Khối hộp chữ nhật', 'Khối trụ', 'Khối lập phương'), ans: 'B', why: 'Hộp có các mặt hình chữ nhật là khối hộp chữ nhật.' },
    { sec: 'Hình khối', name: 'Câu 8', pts: 1, text: 'Lon nước ngọt có dạng khối gì?',
      opts: o4('Khối trụ', 'Khối cầu', 'Khối lập phương', 'Khối hộp chữ nhật'), ans: 'A', why: 'Lon nước có dạng khối trụ.' },
    { sec: 'Hình phẳng', name: 'Câu 9', pts: 1, text: 'Hình tam giác có mấy cạnh?',
      opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Hình tam giác có 3 cạnh.' },
    { sec: 'Hình phẳng', name: 'Câu 10', pts: 1, text: 'Hình vuông có mấy đỉnh (góc)?',
      opts: o4('3', '4', '5', '6'), ans: 'B', why: 'Hình vuông có 4 đỉnh và 4 góc.' },
  ],
},

/* ═══════════ ĐỀ 8 — ĐO ĐỘ DÀI VÀ XEM GIỜ ═══════════ */
{
  id: 6108, title: 'Đề 8 · Đo độ dài và xem giờ đúng', time: 15,
  questions: [
    { sec: 'Đo độ dài', name: 'Câu 1', pts: 1, text: 'Đơn vị đo độ dài đã học ở lớp 1 là gì?',
      opts: o4('Ki-lô-gam', 'Xăng-ti-mét (cm)', 'Lít', 'Giờ'), ans: 'B', why: 'Ở lớp 1, đơn vị đo độ dài là xăng-ti-mét, viết tắt là cm.' },
    { sec: 'Đo độ dài', name: 'Câu 2', pts: 1, text: 'Bút chì dài 10 ... . Điền đơn vị thích hợp:',
      opts: o4('cm', 'kg', 'giờ', 'lít'), ans: 'A', why: 'Độ dài bút chì đo bằng cm: bút chì dài 10 cm.' },
    { sec: 'Xem giờ', name: 'Câu 3', pts: 1, text: 'Kim ngắn chỉ số 3, kim dài chỉ số 12. Đồng hồ chỉ mấy giờ?',
      opts: o4('3 giờ', '12 giờ', '9 giờ', '6 giờ'), ans: 'A', why: 'Kim dài chỉ 12, kim ngắn chỉ 3 là 3 giờ đúng.' },
    { sec: 'Xem giờ', name: 'Câu 4', pts: 1, text: 'Đồng hồ chỉ 9 giờ đúng thì kim ngắn chỉ vào số mấy?',
      opts: o4('12', '9', '3', '6'), ans: 'B', why: 'Lúc 9 giờ đúng, kim ngắn chỉ số 9.' },
    { sec: 'So sánh độ dài', name: 'Câu 5', pts: 1, text: 'Đoạn thẳng AB dài 5 cm, đoạn CD dài 8 cm. Đoạn nào dài hơn?',
      opts: o4('Đoạn AB', 'Đoạn CD', 'Hai đoạn bằng nhau', 'Không biết'), ans: 'B', why: '8 cm dài hơn 5 cm nên đoạn CD dài hơn.' },
    { sec: 'Ước lượng', name: 'Câu 6', pts: 1, text: 'Buổi sáng em thường thức dậy đi học lúc khoảng mấy giờ?',
      opts: o4('6 giờ sáng', '12 giờ đêm', '9 giờ tối', '3 giờ đêm'), ans: 'A', why: 'Buổi sáng đi học thường thức dậy khoảng 6 giờ.' },
    { sec: 'Xem giờ', name: 'Câu 7', pts: 1, text: 'Khi đồng hồ chỉ giờ đúng thì kim dài (kim phút) chỉ vào số mấy?',
      opts: o4('12', '6', '3', '9'), ans: 'A', why: 'Giờ đúng thì kim dài luôn chỉ số 12.' },
    { sec: 'Dụng cụ', name: 'Câu 8', pts: 1, text: 'Thước kẻ dùng để làm gì?',
      opts: o4('Đo độ dài và kẻ đường thẳng', 'Đo cân nặng', 'Xem giờ', 'Đong nước'), ans: 'A', why: 'Thước kẻ dùng để đo độ dài và kẻ đường thẳng.' },
    { sec: 'Cộng độ dài', name: 'Câu 9', pts: 1, text: '3 cm + 4 cm = ?',
      opts: o4('7 cm', '1 cm', '34 cm', '7'), ans: 'A', why: '3 cm + 4 cm = 7 cm.' },
    { sec: 'Trừ độ dài', name: 'Câu 10', pts: 1, text: '9 cm − 6 cm = ?',
      opts: o4('3 cm', '15 cm', '2 cm', '96 cm'), ans: 'A', why: '9 cm − 6 cm = 3 cm.' },
  ],
},

/* ═══════════ ĐỀ 9 — TOÁN CÓ LỜI VĂN ═══════════ */
{
  id: 6109, title: 'Đề 9 · Bài toán có lời văn', time: 15,
  questions: [
    { sec: 'Bớt', name: 'Câu 1', pts: 1, text: 'Lan có 5 bông hoa, cho bạn 2 bông. Lan còn lại mấy bông hoa?',
      opts: o4('2', '3', '7', '4'), ans: 'B', why: 'Còn lại: 5 − 2 = 3 (bông hoa).' },
    { sec: 'Thêm', name: 'Câu 2', pts: 1, text: 'Có 4 con gà, mua thêm 3 con. Có tất cả mấy con gà?',
      opts: o4('6', '7', '1', '8'), ans: 'B', why: 'Tất cả: 4 + 3 = 7 (con gà).' },
    { sec: 'Bớt', name: 'Câu 3', pts: 1, text: 'Trên cây có 8 quả, rụng mất 2 quả. Trên cây còn mấy quả?',
      opts: o4('5', '6', '10', '4'), ans: 'B', why: 'Còn lại: 8 − 2 = 6 (quả).' },
    { sec: 'Gộp', name: 'Câu 4', pts: 1, text: 'Hộp có 6 bút xanh và 3 bút đỏ. Hộp có tất cả mấy bút?',
      opts: o4('8', '9', '3', '10'), ans: 'B', why: 'Tất cả: 6 + 3 = 9 (cái bút).' },
    { sec: 'Bớt', name: 'Câu 5', pts: 1, text: 'Có 10 cái kẹo, ăn hết 4 cái. Còn lại mấy cái kẹo?',
      opts: o4('5', '6', '14', '4'), ans: 'B', why: 'Còn lại: 10 − 4 = 6 (cái kẹo).' },
    { sec: 'Gộp', name: 'Câu 6', pts: 1, text: 'Tổ 1 có 5 bạn, tổ 2 có 5 bạn. Cả hai tổ có mấy bạn?',
      opts: o4('9', '10', '11', '5'), ans: 'B', why: 'Cả hai tổ: 5 + 5 = 10 (bạn).' },
    { sec: 'Tìm số', name: 'Câu 7', pts: 1, text: 'Nam có 7 viên bi, nhiều hơn Hùng 2 viên. Hùng có mấy viên bi?',
      opts: o4('9', '5', '2', '7'), ans: 'B', why: 'Hùng có ít hơn: 7 − 2 = 5 (viên bi).' },
    { sec: 'Tìm số', name: 'Câu 8', pts: 1, text: 'Lớp có 9 bạn, trong đó 4 bạn là nữ. Có mấy bạn nam?',
      opts: o4('4', '5', '13', '6'), ans: 'B', why: 'Số bạn nam: 9 − 4 = 5 (bạn).' },
    { sec: 'Chục', name: 'Câu 9', pts: 1, text: 'Mẹ mua 3 chục quả trứng. Mẹ mua mấy quả trứng?',
      opts: o4('3', '13', '30', '33'), ans: 'C', why: '1 chục là 10, nên 3 chục là 30 quả trứng.' },
    { sec: 'Gộp', name: 'Câu 10', pts: 1, text: 'Có 2 đĩa, mỗi đĩa 5 quả cam. Có tất cả mấy quả cam?',
      opts: o4('7', '10', '25', '5'), ans: 'B', why: 'Hai đĩa: 5 + 5 = 10 (quả cam).' },
  ],
},

/* ═══════════ ĐỀ 10 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 6110, title: 'Đề 10 · Ôn tập tổng hợp', time: 15,
  questions: [
    { sec: 'Số', name: 'Câu 1', pts: 1, text: 'Số liền sau của 99 là số nào?', opts: o4('98', '100', '90', '109'), ans: 'B', why: 'Liền sau 99 là 100.' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '40 + 30 = ?', opts: o4('70', '60', '10', '80'), ans: 'A', why: '4 chục cộng 3 chục là 7 chục: 70.' },
    { sec: 'Trừ', name: 'Câu 3', pts: 1, text: '18 − 9 = ?', opts: o4('8', '9', '10', '27'), ans: 'B', why: '18 − 9 = 9.' },
    { sec: 'Hình', name: 'Câu 4', pts: 1, text: 'Hình có 3 cạnh là hình gì?', opts: o4('Hình vuông', 'Hình tam giác', 'Hình tròn', 'Hình chữ nhật'), ans: 'B', why: 'Hình tam giác có 3 cạnh.' },
    { sec: 'So sánh', name: 'Câu 5', pts: 1, text: 'Điền dấu: 25 ... 52', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: '25 có 2 chục, 52 có 5 chục nên 25 < 52.' },
    { sec: 'Chục', name: 'Câu 6', pts: 1, text: '6 chục bằng bao nhiêu?', opts: o4('6', '16', '60', '66'), ans: 'C', why: '6 chục là 60.' },
    { sec: 'Cộng', name: 'Câu 7', pts: 1, text: '5 + 4 = ?', opts: o4('8', '9', '10', '1'), ans: 'B', why: '5 + 4 = 9.' },
    { sec: 'Hình khối', name: 'Câu 8', pts: 1, text: 'Quả bóng có dạng khối gì?', opts: o4('Khối lập phương', 'Khối trụ', 'Khối cầu', 'Khối hộp'), ans: 'C', why: 'Quả bóng có dạng khối cầu.' },
    { sec: 'Lời văn', name: 'Câu 9', pts: 1, text: 'Có 7 con vịt, 2 con lên bờ. Dưới ao còn mấy con vịt?', opts: o4('5', '9', '4', '2'), ans: 'A', why: 'Còn lại: 7 − 2 = 5 (con vịt).' },
    { sec: 'Cộng', name: 'Câu 10', pts: 1, text: '3 + 3 + 3 = ?', opts: o4('6', '9', '12', '3'), ans: 'B', why: '3 + 3 = 6, rồi 6 + 3 = 9.' },
  ],
},

];

SUBJECTS.push({
  id: 'toan1', name: 'Toán', short: 'Toán 1', icon: '🔢', grade: 1,
  exams: TOAN1_EXAMS, ready: true,
  heroTitle: 'Toán lớp 1 — số đến 100, cộng trừ, hình học, đo độ dài và xem giờ',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
