// TOÁN — LỚP 4 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: số tự nhiên đến lớp triệu (đọc – viết – so sánh – làm tròn – giá trị
// chữ số); bốn phép tính; dấu hiệu chia hết cho 2, 3, 5, 9; phân số (rút gọn, quy đồng,
// so sánh, cộng – trừ – nhân – chia); trung bình cộng; tìm hai số biết tổng – hiệu,
// tổng – tỉ, hiệu – tỉ; đơn vị đo (khối lượng, thời gian, diện tích); góc; hình bình hành,
// hình thoi (diện tích).

const TOAN4_EXAMS = [

/* ═══════════ ĐỀ 1 — SỐ TỰ NHIÊN ĐẾN LỚP TRIỆU ═══════════ */
{
  id: 6401, title: 'Đề 1 · Số tự nhiên đến lớp triệu', time: 20,
  questions: [
    { sec: 'Cấu tạo số', name: 'Câu 1', pts: 1, text: 'Số 1 000 000 (một triệu) có mấy chữ số 0?', opts: o4('5', '6', '7', '4'), ans: 'B', why: '1 000 000 gồm chữ số 1 và 6 chữ số 0.' },
    { sec: 'Đọc số', name: 'Câu 2', pts: 1, text: 'Số 305 720 đọc là:', opts: o4('Ba trăm linh năm nghìn bảy trăm hai mươi', 'Ba trăm năm nghìn bảy trăm hai mươi', 'Ba mươi lăm nghìn bảy trăm hai mươi', 'Ba trăm linh năm nghìn bảy trăm hai'), ans: 'A', why: '305 720 đọc là "ba trăm linh năm nghìn bảy trăm hai mươi".' },
    { sec: 'Giá trị chữ số', name: 'Câu 3', pts: 1, text: 'Giá trị của chữ số 7 trong số 27 483 là bao nhiêu?', opts: o4('7', '70', '700', '7000'), ans: 'D', why: 'Chữ số 7 ở hàng nghìn nên có giá trị 7000.' },
    { sec: 'Số lớn nhất', name: 'Câu 4', pts: 1, text: 'Số lớn nhất có 5 chữ số là số nào?', opts: o4('99 999', '10 000', '90 000', '99 990'), ans: 'A', why: 'Số lớn nhất có 5 chữ số là 99 999.' },
    { sec: 'Số bé nhất', name: 'Câu 5', pts: 1, text: 'Số bé nhất có 6 chữ số là số nào?', opts: o4('999 999', '100 000', '111 111', '100 001'), ans: 'B', why: 'Số bé nhất có 6 chữ số là 100 000.' },
    { sec: 'Làm tròn', name: 'Câu 6', pts: 1, text: 'Làm tròn số 45 678 đến hàng nghìn được số nào?', opts: o4('45 000', '46 000', '45 700', '40 000'), ans: 'B', why: 'Chữ số hàng trăm là 6 (≥ 5) nên làm tròn lên: 46 000.' },
    { sec: 'Hàng', name: 'Câu 7', pts: 1, text: 'Trong số 8 216 400, chữ số 2 thuộc hàng nào?', opts: o4('Hàng trăm nghìn', 'Hàng chục nghìn', 'Hàng nghìn', 'Hàng trăm'), ans: 'A', why: 'Từ phải sang: 8(triệu) 2(trăm nghìn) 1(chục nghìn) 6(nghìn)... nên 2 ở hàng trăm nghìn.' },
    { sec: 'So sánh', name: 'Câu 8', pts: 1, text: 'Điền dấu thích hợp: 65 432 ... 65 342', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'A', why: 'Cùng hàng nghìn, so hàng trăm: 4 > 3 nên 65 432 > 65 342.' },
    { sec: 'Số liền sau', name: 'Câu 9', pts: 1, text: 'Số liền sau của 99 999 là số nào?', opts: o4('99 998', '100 000', '90 000', '99 990'), ans: 'B', why: 'Liền sau 99 999 là 100 000.' },
    { sec: 'Viết số', name: 'Câu 10', pts: 1, text: '"Hai mươi ba nghìn không trăm bốn mươi" viết là số nào?', opts: o4('23 040', '23 400', '23 004', '203 040'), ans: 'A', why: '23 nghìn, 0 trăm, 40 đơn vị viết là 23 040.' },
  ],
},

/* ═══════════ ĐỀ 2 — BỐN PHÉP TÍNH ═══════════ */
{
  id: 6402, title: 'Đề 2 · Bốn phép tính với số tự nhiên', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '3 456 + 2 178 = ?', opts: o4('5 634', '5 624', '5 534', '5 734'), ans: 'A', why: '3 456 + 2 178 = 5 634.' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: '7 000 − 2 345 = ?', opts: o4('4 655', '4 755', '5 655', '4 645'), ans: 'A', why: '7 000 − 2 345 = 4 655.' },
    { sec: 'Nhân', name: 'Câu 3', pts: 1, text: '234 × 3 = ?', opts: o4('702', '692', '712', '602'), ans: 'A', why: '234 × 3 = 702.' },
    { sec: 'Nhân', name: 'Câu 4', pts: 1, text: '125 × 8 = ?', opts: o4('1 000', '1 025', '960', '1 080'), ans: 'A', why: '125 × 8 = 1 000.' },
    { sec: 'Chia', name: 'Câu 5', pts: 1, text: '4 848 : 4 = ?', opts: o4('1 212', '1 202', '1 221', '1 122'), ans: 'A', why: '4 848 : 4 = 1 212.' },
    { sec: 'Nhân 10', name: 'Câu 6', pts: 1, text: '246 × 10 = ?', opts: o4('2 460', '246', '24 600', '2 406'), ans: 'A', why: 'Nhân với 10 thì thêm một chữ số 0: 2 460.' },
    { sec: 'Nhân với tổng', name: 'Câu 7', pts: 1, text: '5 × (20 + 6) = ?', opts: o4('130', '100', '56', '120'), ans: 'A', why: '5 × 26 = 130 (hoặc 5×20 + 5×6 = 100 + 30 = 130).' },
    { sec: 'Tìm x', name: 'Câu 8', pts: 1, text: 'Tìm x, biết: x + 15 = 40', opts: o4('25', '55', '15', '30'), ans: 'A', why: 'x = 40 − 15 = 25.' },
    { sec: 'Tìm x', name: 'Câu 9', pts: 1, text: 'Tìm x, biết: x × 6 = 54', opts: o4('9', '8', '48', '60'), ans: 'A', why: 'x = 54 : 6 = 9.' },
    { sec: 'Chia 100', name: 'Câu 10', pts: 1, text: '9 000 : 100 = ?', opts: o4('90', '900', '9', '9 000'), ans: 'A', why: 'Chia cho 100 thì bớt hai chữ số 0: 90.' },
  ],
},

/* ═══════════ ĐỀ 3 — DẤU HIỆU CHIA HẾT ═══════════ */
{
  id: 6403, title: 'Đề 3 · Dấu hiệu chia hết cho 2, 3, 5, 9', time: 20,
  questions: [
    { sec: 'Chia hết cho 2', name: 'Câu 1', pts: 1, text: 'Số chia hết cho 2 có chữ số tận cùng là:', opts: o4('0, 2, 4, 6, 8', '1, 3, 5, 7, 9', '0 hoặc 5', 'chữ số bất kì'), ans: 'A', why: 'Số chia hết cho 2 là số chẵn, tận cùng bằng 0, 2, 4, 6, 8.' },
    { sec: 'Chia hết cho 5', name: 'Câu 2', pts: 1, text: 'Số nào chia hết cho 5?', opts: o4('32', '45', '58', '61'), ans: 'B', why: '45 tận cùng bằng 5 nên chia hết cho 5.' },
    { sec: 'Chia hết cho 2', name: 'Câu 3', pts: 1, text: 'Số nào chia hết cho 2?', opts: o4('27', '34', '45', '51'), ans: 'B', why: '34 là số chẵn (tận cùng 4) nên chia hết cho 2.' },
    { sec: 'Chia hết cho 9', name: 'Câu 4', pts: 1, text: 'Số nào chia hết cho 9?', opts: o4('234', '145', '163', '250'), ans: 'A', why: '2 + 3 + 4 = 9 chia hết cho 9 nên 234 chia hết cho 9.' },
    { sec: 'Chia hết cho 3', name: 'Câu 5', pts: 1, text: 'Số nào chia hết cho 3?', opts: o4('123', '124', '125', '127'), ans: 'A', why: '1 + 2 + 3 = 6 chia hết cho 3 nên 123 chia hết cho 3.' },
    { sec: 'Chia hết cho 2 và 5', name: 'Câu 6', pts: 1, text: 'Số vừa chia hết cho 2 vừa chia hết cho 5 có tận cùng là chữ số nào?', opts: o4('0', '5', '2', '1'), ans: 'A', why: 'Số chia hết cho cả 2 và 5 phải tận cùng bằng 0.' },
    { sec: 'Kết hợp', name: 'Câu 7', pts: 1, text: 'Số 90 chia hết cho cả 2, 3, 5 và 9. Đúng hay sai?', opts: o4('Đúng', 'Sai', 'Chỉ chia hết cho 2 và 5', 'Chỉ chia hết cho 9'), ans: 'A', why: '90 tận cùng 0 (chia hết 2 và 5); 9+0=9 chia hết 3 và 9 → đúng.' },
    { sec: 'Không chia hết', name: 'Câu 8', pts: 1, text: 'Số nào KHÔNG chia hết cho 3?', opts: o4('12', '15', '20', '21'), ans: 'C', why: '2 + 0 = 2 không chia hết cho 3 nên 20 không chia hết cho 3.' },
    { sec: 'Số lẻ', name: 'Câu 9', pts: 1, text: 'Một số lẻ có chia hết cho 2 không?', opts: o4('Không', 'Có', 'Tuỳ số', 'Chỉ số lẻ lớn'), ans: 'A', why: 'Số lẻ tận cùng bằng 1,3,5,7,9 nên không chia hết cho 2.' },
    { sec: 'Chia hết cho 2 và 3', name: 'Câu 10', pts: 1, text: 'Số nào chia hết cho cả 2 và 3?', opts: o4('12', '14', '15', '22'), ans: 'A', why: '12 chẵn (chia hết 2) và 1+2=3 chia hết 3 → chia hết cho cả 2 và 3.' },
  ],
},

/* ═══════════ ĐỀ 4 — PHÂN SỐ ═══════════ */
{
  id: 6404, title: 'Đề 4 · Phân số: rút gọn, so sánh', time: 20,
  questions: [
    { sec: 'Đọc phân số', name: 'Câu 1', pts: 1, text: 'Phân số 3/4 đọc là:', opts: o4('Ba phần tư', 'Bốn phần ba', 'Ba phần bốn mươi', 'Ba trên tư mươi'), ans: 'A', why: 'Phân số 3/4 đọc là "ba phần tư".' },
    { sec: 'Tử số', name: 'Câu 2', pts: 1, text: 'Trong phân số 3/4, tử số là số nào?', opts: o4('3', '4', '7', '1'), ans: 'A', why: 'Số ở trên gạch ngang là tử số: tử số là 3.' },
    { sec: 'Rút gọn', name: 'Câu 3', pts: 1, text: 'Rút gọn phân số 6/8 được phân số nào?', opts: o4('3/4', '2/4', '6/4', '3/8'), ans: 'A', why: 'Chia cả tử và mẫu cho 2: 6/8 = 3/4.' },
    { sec: 'Rút gọn', name: 'Câu 4', pts: 1, text: 'Rút gọn phân số 10/15 được phân số nào?', opts: o4('2/3', '5/3', '2/5', '10/5'), ans: 'A', why: 'Chia cả tử và mẫu cho 5: 10/15 = 2/3.' },
    { sec: 'Phân số bằng nhau', name: 'Câu 5', pts: 1, text: 'Phân số nào bằng 1/2?', opts: o4('2/4', '2/3', '3/4', '1/3'), ans: 'A', why: '2/4 = 1/2 (nhân cả tử và mẫu của 1/2 với 2).' },
    { sec: 'Quy đồng', name: 'Câu 6', pts: 1, text: 'Quy đồng 1/2 với mẫu số chung là 6 thì 1/2 = ?', opts: o4('3/6', '2/6', '1/6', '6/6'), ans: 'A', why: '1/2 = (1×3)/(2×3) = 3/6.' },
    { sec: 'So sánh', name: 'Câu 7', pts: 1, text: 'So sánh: 2/5 ... 3/5', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: 'Cùng mẫu, so tử: 2 < 3 nên 2/5 < 3/5.' },
    { sec: 'So sánh', name: 'Câu 8', pts: 1, text: 'So sánh: 3/4 ... 1/2', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'A', why: '1/2 = 2/4, mà 3/4 > 2/4 nên 3/4 > 1/2.' },
    { sec: 'So với 1', name: 'Câu 9', pts: 1, text: 'Phân số nào lớn hơn 1?', opts: o4('5/4', '3/4', '2/3', '1/2'), ans: 'A', why: 'Phân số có tử lớn hơn mẫu thì lớn hơn 1: 5/4 > 1.' },
    { sec: 'Bằng 1', name: 'Câu 10', pts: 1, text: 'Phân số 4/4 bằng số nào?', opts: o4('1', '4', '0', '8'), ans: 'A', why: 'Tử bằng mẫu nên 4/4 = 1.' },
  ],
},

/* ═══════════ ĐỀ 5 — CỘNG, TRỪ PHÂN SỐ ═══════════ */
{
  id: 6405, title: 'Đề 5 · Cộng, trừ phân số', time: 20,
  questions: [
    { sec: 'Cộng cùng mẫu', name: 'Câu 1', pts: 1, text: '1/5 + 2/5 = ?', opts: o4('3/5', '3/10', '2/5', '1/5'), ans: 'A', why: 'Cùng mẫu: cộng tử số, giữ mẫu: 1/5 + 2/5 = 3/5.' },
    { sec: 'Cộng cùng mẫu', name: 'Câu 2', pts: 1, text: '3/7 + 2/7 = ?', opts: o4('5/7', '5/14', '1/7', '6/7'), ans: 'A', why: '3/7 + 2/7 = 5/7.' },
    { sec: 'Trừ cùng mẫu', name: 'Câu 3', pts: 1, text: '5/8 − 1/8 = ?', opts: o4('4/8', '4/16', '6/8', '1/8'), ans: 'A', why: '5/8 − 1/8 = 4/8.' },
    { sec: 'Cộng khác mẫu', name: 'Câu 4', pts: 1, text: '1/2 + 1/4 = ?', opts: o4('3/4', '2/6', '1/4', '2/4'), ans: 'A', why: 'Quy đồng: 1/2 = 2/4, nên 2/4 + 1/4 = 3/4.' },
    { sec: 'Cộng khác mẫu', name: 'Câu 5', pts: 1, text: '1/4 + 1/8 = ?', opts: o4('3/8', '2/12', '3/12', '1/8'), ans: 'A', why: 'Quy đồng: 1/4 = 2/8, nên 2/8 + 1/8 = 3/8.' },
    { sec: 'Trừ cùng mẫu', name: 'Câu 6', pts: 1, text: '2/3 − 1/3 = ?', opts: o4('1/3', '1/6', '3/3', '2/3'), ans: 'A', why: '2/3 − 1/3 = 1/3.' },
    { sec: 'Trừ cùng mẫu', name: 'Câu 7', pts: 1, text: '7/10 − 3/10 = ?', opts: o4('4/10', '4/20', '10/10', '3/10'), ans: 'A', why: '7/10 − 3/10 = 4/10.' },
    { sec: 'Trừ với 1', name: 'Câu 8', pts: 1, text: '1 − 1/4 = ?', opts: o4('3/4', '1/4', '4/4', '1/3'), ans: 'A', why: '1 = 4/4, nên 4/4 − 1/4 = 3/4.' },
    { sec: 'Cộng ba phân số', name: 'Câu 9', pts: 1, text: '2/7 + 3/7 + 1/7 = ?', opts: o4('6/7', '6/21', '5/7', '7/7'), ans: 'A', why: '2/7 + 3/7 + 1/7 = 6/7.' },
    { sec: 'Trừ cùng mẫu', name: 'Câu 10', pts: 1, text: '5/9 − 2/9 = ?', opts: o4('3/9', '3/18', '7/9', '2/9'), ans: 'A', why: '5/9 − 2/9 = 3/9.' },
  ],
},

/* ═══════════ ĐỀ 6 — NHÂN, CHIA PHÂN SỐ ═══════════ */
{
  id: 6406, title: 'Đề 6 · Nhân, chia phân số', time: 20,
  questions: [
    { sec: 'Nhân với số', name: 'Câu 1', pts: 1, text: '2/3 × 4 = ?', opts: o4('8/3', '6/3', '2/12', '8/12'), ans: 'A', why: 'Nhân tử với 4: (2×4)/3 = 8/3.' },
    { sec: 'Nhân phân số', name: 'Câu 2', pts: 1, text: '1/2 × 1/3 = ?', opts: o4('1/6', '2/5', '1/5', '2/6'), ans: 'A', why: 'Nhân tử với tử, mẫu với mẫu: (1×1)/(2×3) = 1/6.' },
    { sec: 'Nhân phân số', name: 'Câu 3', pts: 1, text: '3/5 × 2/7 = ?', opts: o4('6/35', '5/12', '6/12', '5/35'), ans: 'A', why: '(3×2)/(5×7) = 6/35.' },
    { sec: 'Chia cho số', name: 'Câu 4', pts: 1, text: '3/5 : 2 = ?', opts: o4('3/10', '3/7', '6/5', '5/6'), ans: 'A', why: 'Chia cho 2 thì nhân mẫu với 2: 3/(5×2) = 3/10.' },
    { sec: 'Chia phân số', name: 'Câu 5', pts: 1, text: '1/2 : 1/4 = ?', opts: o4('2', '1/8', '2/6', '8'), ans: 'A', why: 'Chia thì nhân với phân số đảo ngược: 1/2 × 4/1 = 4/2 = 2.' },
    { sec: 'Nhân với số', name: 'Câu 6', pts: 1, text: '2/5 × 3 = ?', opts: o4('6/5', '5/6', '6/15', '2/15'), ans: 'A', why: '(2×3)/5 = 6/5.' },
    { sec: 'Nhân phân số', name: 'Câu 7', pts: 1, text: '3/7 × 1/2 = ?', opts: o4('3/14', '3/9', '5/14', '6/7'), ans: 'A', why: '(3×1)/(7×2) = 3/14.' },
    { sec: 'Chia phân số', name: 'Câu 8', pts: 1, text: '2/3 : 1/2 = ?', opts: o4('4/3', '4/6', '2/6', '3/4'), ans: 'A', why: '2/3 × 2/1 = 4/3.' },
    { sec: 'Phân số của số', name: 'Câu 9', pts: 1, text: '1/3 của 12 là bao nhiêu?', opts: o4('4', '3', '36', '9'), ans: 'A', why: '12 × 1/3 = 12 : 3 = 4.' },
    { sec: 'Phân số của số', name: 'Câu 10', pts: 1, text: '2/5 của 20 là bao nhiêu?', opts: o4('8', '10', '40', '4'), ans: 'A', why: '20 : 5 = 4, rồi 4 × 2 = 8.' },
  ],
},

/* ═══════════ ĐỀ 7 — TRUNG BÌNH CỘNG & TỔNG – HIỆU ═══════════ */
{
  id: 6407, title: 'Đề 7 · Trung bình cộng, tìm hai số (tổng – hiệu)', time: 20,
  questions: [
    { sec: 'Trung bình cộng', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 4 và 8 là bao nhiêu?', opts: o4('6', '12', '4', '5'), ans: 'A', why: '(4 + 8) : 2 = 12 : 2 = 6.' },
    { sec: 'Trung bình cộng', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 3, 5, 7 là bao nhiêu?', opts: o4('5', '15', '6', '4'), ans: 'A', why: '(3 + 5 + 7) : 3 = 15 : 3 = 5.' },
    { sec: 'Trung bình cộng', name: 'Câu 3', pts: 1, text: 'Trung bình cộng của 10, 20, 30, 40 là bao nhiêu?', opts: o4('25', '100', '30', '20'), ans: 'A', why: '(10+20+30+40) : 4 = 100 : 4 = 25.' },
    { sec: 'Tổng – hiệu', name: 'Câu 4', pts: 1, text: 'Hai số có tổng là 20, hiệu là 4. Số lớn là bao nhiêu?', opts: o4('12', '8', '16', '10'), ans: 'A', why: 'Số lớn = (tổng + hiệu) : 2 = (20 + 4) : 2 = 12.' },
    { sec: 'Tổng – hiệu', name: 'Câu 5', pts: 1, text: 'Hai số có tổng là 20, hiệu là 4. Số bé là bao nhiêu?', opts: o4('8', '12', '16', '4'), ans: 'A', why: 'Số bé = (tổng − hiệu) : 2 = (20 − 4) : 2 = 8.' },
    { sec: 'Tổng – hiệu', name: 'Câu 6', pts: 1, text: 'Tổng hai số là 50, số này hơn số kia 10. Số lớn là bao nhiêu?', opts: o4('30', '20', '40', '25'), ans: 'A', why: 'Số lớn = (50 + 10) : 2 = 30.' },
    { sec: 'Tổng – hiệu', name: 'Câu 7', pts: 1, text: 'An và Bình có tất cả 24 viên bi, An hơn Bình 6 viên. An có mấy viên?', opts: o4('15', '9', '12', '18'), ans: 'A', why: 'An = (24 + 6) : 2 = 15 (viên bi).' },
    { sec: 'Trung bình cộng', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của hai số là 15, một số là 12. Số kia là bao nhiêu?', opts: o4('18', '3', '27', '13'), ans: 'A', why: 'Tổng hai số = 15 × 2 = 30, số kia = 30 − 12 = 18.' },
    { sec: 'Trung bình cộng', name: 'Câu 9', pts: 1, text: 'Trung bình mỗi ngày bán 25 kg gạo. Bốn ngày bán được bao nhiêu ki-lô-gam?', opts: o4('100 kg', '29 kg', '50 kg', '75 kg'), ans: 'A', why: 'Tổng = trung bình × số ngày = 25 × 4 = 100 (kg).' },
    { sec: 'Tổng – hiệu', name: 'Câu 10', pts: 1, text: 'Hai số có tổng 100, hiệu 20. Số bé là bao nhiêu?', opts: o4('40', '60', '50', '80'), ans: 'A', why: 'Số bé = (100 − 20) : 2 = 40.' },
  ],
},

/* ═══════════ ĐỀ 8 — TÌM HAI SỐ (TỔNG – TỈ, HIỆU – TỈ) ═══════════ */
{
  id: 6408, title: 'Đề 8 · Tìm hai số biết tổng – tỉ, hiệu – tỉ', time: 20,
  questions: [
    { sec: 'Tổng – tỉ', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 20, số bé bằng 1/3 số lớn. Số bé là bao nhiêu?', opts: o4('5', '15', '4', '10'), ans: 'A', why: 'Tổng số phần = 1 + 3 = 4 phần; số bé = 20 : 4 × 1 = 5.' },
    { sec: 'Tổng – tỉ', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 20, số bé bằng 1/3 số lớn. Số lớn là bao nhiêu?', opts: o4('15', '5', '12', '18'), ans: 'A', why: 'Số lớn = 20 : 4 × 3 = 15.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tỉ số 2 : 3 và tổng bằng 25. Số lớn là bao nhiêu?', opts: o4('15', '10', '5', '20'), ans: 'A', why: 'Tổng số phần = 2 + 3 = 5; mỗi phần 25 : 5 = 5; số lớn = 5 × 3 = 15.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 4', pts: 1, text: 'Số lớn gấp 3 lần số bé, hiệu hai số là 12. Số bé là bao nhiêu?', opts: o4('6', '18', '4', '9'), ans: 'A', why: 'Hiệu số phần = 3 − 1 = 2; số bé = 12 : 2 = 6.' },
    { sec: 'Tỉ số', name: 'Câu 5', pts: 1, text: 'Anh 10 tuổi, tuổi anh gấp đôi tuổi em. Em bao nhiêu tuổi?', opts: o4('5', '20', '8', '12'), ans: 'A', why: 'Tuổi em = 10 : 2 = 5 (tuổi).' },
    { sec: 'Tổng – tỉ', name: 'Câu 6', pts: 1, text: 'Lớp có 30 bạn, số nữ gấp đôi số nam. Có bao nhiêu bạn nam?', opts: o4('10', '20', '15', '5'), ans: 'A', why: 'Tổng số phần = 1 + 2 = 3; số nam = 30 : 3 = 10 (bạn).' },
    { sec: 'Tổng – tỉ', name: 'Câu 7', pts: 1, text: 'Hai số có tổng 42, số lớn gấp 5 lần số bé. Số bé là bao nhiêu?', opts: o4('7', '35', '6', '8'), ans: 'A', why: 'Tổng số phần = 1 + 5 = 6; số bé = 42 : 6 = 7.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 8', pts: 1, text: 'Số lớn gấp 3 lần số bé, hiệu là 8. Số lớn là bao nhiêu?', opts: o4('12', '4', '16', '24'), ans: 'A', why: 'Số bé = 8 : (3−1) = 4; số lớn = 4 × 3 = 12.' },
    { sec: 'Tổng – tỉ', name: 'Câu 9', pts: 1, text: 'Hai thùng có tất cả 60 lít dầu, thùng 1 gấp đôi thùng 2. Thùng 2 chứa bao nhiêu lít?', opts: o4('20', '40', '30', '15'), ans: 'A', why: 'Tổng số phần = 1 + 2 = 3; thùng 2 = 60 : 3 = 20 (lít).' },
    { sec: 'Hiệu – tỉ', name: 'Câu 10', pts: 1, text: 'Mẹ hơn con 24 tuổi, tuổi mẹ gấp 3 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('12', '36', '8', '24'), ans: 'A', why: 'Tuổi con = 24 : (3−1) = 12 (tuổi).' },
  ],
},

/* ═══════════ ĐỀ 9 — ĐƠN VỊ ĐO VÀ GÓC ═══════════ */
{
  id: 6409, title: 'Đề 9 · Đơn vị đo và góc', time: 20,
  questions: [
    { sec: 'Khối lượng', name: 'Câu 1', pts: 1, text: '1 tấn = ? kg', opts: o4('1 000 kg', '100 kg', '10 kg', '10 000 kg'), ans: 'A', why: '1 tấn = 1 000 kg.' },
    { sec: 'Khối lượng', name: 'Câu 2', pts: 1, text: '1 tạ = ? kg', opts: o4('100 kg', '10 kg', '1 000 kg', '50 kg'), ans: 'A', why: '1 tạ = 100 kg.' },
    { sec: 'Khối lượng', name: 'Câu 3', pts: 1, text: '5 kg = ? g', opts: o4('5 000 g', '500 g', '50 g', '50 000 g'), ans: 'A', why: '1 kg = 1 000 g nên 5 kg = 5 000 g.' },
    { sec: 'Thời gian', name: 'Câu 4', pts: 1, text: '1 giờ = ? phút', opts: o4('60', '100', '30', '24'), ans: 'A', why: '1 giờ = 60 phút.' },
    { sec: 'Thời gian', name: 'Câu 5', pts: 1, text: '1 thế kỉ = ? năm', opts: o4('100', '10', '1 000', '50'), ans: 'A', why: '1 thế kỉ = 100 năm.' },
    { sec: 'Diện tích', name: 'Câu 6', pts: 1, text: '1 m² = ? dm²', opts: o4('100', '10', '1 000', '1 00 00'), ans: 'A', why: '1 m² = 100 dm².' },
    { sec: 'Góc', name: 'Câu 7', pts: 1, text: 'Góc lớn hơn góc vuông và bé hơn góc bẹt là góc gì?', opts: o4('Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'), ans: 'A', why: 'Góc tù lớn hơn góc vuông (90°) và bé hơn góc bẹt (180°).' },
    { sec: 'Góc', name: 'Câu 8', pts: 1, text: 'Góc bé hơn góc vuông là góc gì?', opts: o4('Góc nhọn', 'Góc tù', 'Góc bẹt', 'Góc vuông'), ans: 'A', why: 'Góc nhọn bé hơn góc vuông (nhỏ hơn 90°).' },
    { sec: 'Góc', name: 'Câu 9', pts: 1, text: 'Góc vuông có số đo bằng bao nhiêu độ?', opts: o4('90°', '180°', '45°', '60°'), ans: 'A', why: 'Góc vuông bằng 90°.' },
    { sec: 'Thời gian', name: 'Câu 10', pts: 1, text: '2 giờ = ? phút', opts: o4('120', '60', '100', '200'), ans: 'A', why: '2 × 60 = 120 phút.' },
  ],
},

/* ═══════════ ĐỀ 10 — HÌNH BÌNH HÀNH, HÌNH THOI & ÔN TẬP ═══════════ */
{
  id: 6410, title: 'Đề 10 · Hình bình hành, hình thoi và ôn tập', time: 20,
  questions: [
    { sec: 'Hình bình hành', name: 'Câu 1', pts: 1, text: 'Diện tích hình bình hành được tính bằng:', opts: o4('Độ dài đáy × chiều cao', 'Cạnh × cạnh', 'Đáy + chiều cao', '(đáy × cao) : 2'), ans: 'A', why: 'Diện tích hình bình hành = độ dài đáy × chiều cao (cùng đơn vị).' },
    { sec: 'Hình bình hành', name: 'Câu 2', pts: 1, text: 'Hình bình hành có đáy 6 cm, chiều cao 4 cm. Diện tích là bao nhiêu?', opts: o4('24 cm²', '10 cm²', '20 cm²', '48 cm²'), ans: 'A', why: 'S = 6 × 4 = 24 (cm²).' },
    { sec: 'Hình thoi', name: 'Câu 3', pts: 1, text: 'Diện tích hình thoi được tính bằng:', opts: o4('(tích hai đường chéo) : 2', 'cạnh × cạnh', 'đáy × chiều cao', 'chu vi : 2'), ans: 'A', why: 'Diện tích hình thoi = (đường chéo dài × đường chéo ngắn) : 2.' },
    { sec: 'Hình thoi', name: 'Câu 4', pts: 1, text: 'Hình thoi có hai đường chéo 6 cm và 8 cm. Diện tích là bao nhiêu?', opts: o4('24 cm²', '48 cm²', '14 cm²', '28 cm²'), ans: 'A', why: 'S = (6 × 8) : 2 = 48 : 2 = 24 (cm²).' },
    { sec: 'Hình bình hành', name: 'Câu 5', pts: 1, text: 'Hình bình hành có mấy cặp cạnh đối song song?', opts: o4('2 cặp', '1 cặp', '3 cặp', '4 cặp'), ans: 'A', why: 'Hình bình hành có 2 cặp cạnh đối song song và bằng nhau.' },
    { sec: 'Hình thoi', name: 'Câu 6', pts: 1, text: 'Bốn cạnh của hình thoi có đặc điểm gì?', opts: o4('Bằng nhau', 'Khác nhau', 'Chỉ hai cạnh bằng', 'Đều vuông góc'), ans: 'A', why: 'Hình thoi có bốn cạnh bằng nhau.' },
    { sec: 'Ôn tập', name: 'Câu 7', pts: 1, text: '234 × 3 = ?', opts: o4('702', '692', '712', '602'), ans: 'A', why: '234 × 3 = 702.' },
    { sec: 'Ôn tập', name: 'Câu 8', pts: 1, text: '1/4 + 2/4 = ?', opts: o4('3/4', '3/8', '2/4', '1/2'), ans: 'A', why: '1/4 + 2/4 = 3/4.' },
    { sec: 'Ôn tập', name: 'Câu 9', pts: 1, text: 'Số nào chia hết cho 5?', opts: o4('24', '35', '42', '58'), ans: 'B', why: '35 tận cùng bằng 5 nên chia hết cho 5.' },
    { sec: 'Ôn tập', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của 6 và 10 là bao nhiêu?', opts: o4('8', '16', '4', '6'), ans: 'A', why: '(6 + 10) : 2 = 8.' },
  ],
},

/* ═══════════ ĐỀ 11 — SỐ ĐẾN LỚP TRIỆU (NÂNG CAO) ═══════════ */
{
  id: 7401, title: 'Đề 11 · Số đến lớp triệu (nâng cao)', time: 20,
  questions: [
    { sec: 'Giá trị chữ số', name: 'Câu 1', pts: 1, text: 'Giá trị của chữ số 5 trong số 45 672 189 là bao nhiêu?', opts: o4('500 000', '5 000 000', '50 000', '5 000'), ans: 'B', why: 'Từ phải sang: 5 đứng ở hàng triệu nên có giá trị 5 000 000.' },
    { sec: 'Đọc số', name: 'Câu 2', pts: 1, text: 'Số 7 006 020 đọc là:', opts: o4('Bảy triệu không trăm linh sáu nghìn không trăm hai mươi', 'Bảy triệu sáu nghìn hai mươi', 'Bảy triệu không trăm sáu mươi nghìn không trăm hai mươi', 'Bảy triệu không trăm linh sáu nghìn hai trăm'), ans: 'A', why: '7 006 020 gồm 7 triệu, 006 nghìn, 020 đơn vị → "bảy triệu không trăm linh sáu nghìn không trăm hai mươi".' },
    { sec: 'So sánh', name: 'Câu 3', pts: 1, text: 'Điền dấu thích hợp: 9 999 999 ... 10 000 000', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: '9 999 999 có 7 chữ số, 10 000 000 có 8 chữ số nên 9 999 999 < 10 000 000.' },
    { sec: 'Làm tròn', name: 'Câu 4', pts: 1, text: 'Làm tròn số 2 547 863 đến hàng trăm nghìn được số nào?', opts: o4('2 600 000', '2 550 000', '2 500 000', '2 000 000'), ans: 'C', why: 'Chữ số hàng chục nghìn là 4 (< 5) nên làm tròn xuống: 2 500 000.' },
    { sec: 'Số liền trước', name: 'Câu 5', pts: 1, text: 'Số liền trước của 1 000 000 là số nào?', opts: o4('1 000 001', '900 000', '999 000', '999 999'), ans: 'D', why: 'Liền trước 1 000 000 là 999 999.' },
    { sec: 'Viết số', name: 'Câu 6', pts: 1, text: '"Ba triệu hai trăm nghìn không trăm năm mươi" viết là số nào?', opts: o4('3 200 050', '3 200 500', '3 020 050', '3 200 005'), ans: 'A', why: '3 triệu, 200 nghìn, 050 đơn vị viết là 3 200 050.' },
    { sec: 'Số chẵn lớn nhất', name: 'Câu 7', pts: 1, text: 'Số chẵn lớn nhất có 6 chữ số là số nào?', opts: o4('1 000 000', '999 999', '999 998', '999 990'), ans: 'C', why: 'Số lớn nhất có 6 chữ số là 999 999 (lẻ), số chẵn lớn nhất là 999 998.' },
    { sec: 'Đếm số', name: 'Câu 8', pts: 1, text: 'Có tất cả bao nhiêu số có ba chữ số?', opts: o4('999', '900', '1 000', '899'), ans: 'B', why: 'Từ 100 đến 999 có 999 − 100 + 1 = 900 số.' },
    { sec: 'Cấu tạo số', name: 'Câu 9', pts: 1, text: 'Số 30 517 có mấy chữ số?', opts: o4('4', '6', '3', '5'), ans: 'D', why: 'Các chữ số 3, 0, 5, 1, 7 — tất cả 5 chữ số.' },
    { sec: 'Hàng', name: 'Câu 10', pts: 1, text: 'Chữ số hàng triệu trong số 82 456 013 là chữ số nào?', opts: o4('2', '8', '4', '6'), ans: 'A', why: 'Từ phải sang: 8(chục triệu) 2(triệu)... nên chữ số hàng triệu là 2.' },
  ],
},

/* ═══════════ ĐỀ 12 — BỐN PHÉP TÍNH & TÍNH NHANH ═══════════ */
{
  id: 7402, title: 'Đề 12 · Bốn phép tính và tính nhanh', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '12 345 + 6 789 = ?', opts: o4('19 034', '19 134', '18 134', '19 144'), ans: 'B', why: '12 345 + 6 789 = 19 134.' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: '50 000 − 23 456 = ?', opts: o4('26 544', '27 544', '26 644', '26 454'), ans: 'A', why: '50 000 − 23 456 = 26 544.' },
    { sec: 'Nhân', name: 'Câu 3', pts: 1, text: '1 234 × 5 = ?', opts: o4('6 150', '6 270', '6 170', '5 170'), ans: 'C', why: '1 234 × 5 = 6 170.' },
    { sec: 'Chia', name: 'Câu 4', pts: 1, text: '3 456 : 8 = ?', opts: o4('422', '438', '342', '432'), ans: 'D', why: '3 456 : 8 = 432 (vì 432 × 8 = 3 456).' },
    { sec: 'Tính nhanh', name: 'Câu 5', pts: 1, text: '25 × 4 × 7 = ?', opts: o4('700', '680', '70', '7 000'), ans: 'A', why: '25 × 4 = 100, rồi 100 × 7 = 700.' },
    { sec: 'Tính nhanh', name: 'Câu 6', pts: 1, text: '4 × 125 × 2 = ?', opts: o4('8 000', '1 000', '100', '1 250'), ans: 'B', why: '4 × 125 = 500, rồi 500 × 2 = 1 000.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: '96 + 199 = ?', opts: o4('295', '305', '285', '296'), ans: 'A', why: '96 + 199 = 96 + 200 − 1 = 295.' },
    { sec: 'Tìm x', name: 'Câu 8', pts: 1, text: 'Tìm x, biết: x − 250 = 750', opts: o4('500', '1 050', '1 000', '900'), ans: 'C', why: 'x = 750 + 250 = 1 000.' },
    { sec: 'Tìm x', name: 'Câu 9', pts: 1, text: 'Tìm x, biết: x : 7 = 8', opts: o4('15', '49', '63', '56'), ans: 'D', why: 'x = 8 × 7 = 56.' },
    { sec: 'Nhân với hiệu', name: 'Câu 10', pts: 1, text: '6 × (100 − 1) = ?', opts: o4('594', '606', '600', '588'), ans: 'A', why: '6 × 99 = 600 − 6 = 594.' },
  ],
},

/* ═══════════ ĐỀ 13 — DẤU HIỆU CHIA HẾT (NÂNG CAO) ═══════════ */
{
  id: 7403, title: 'Đề 13 · Dấu hiệu chia hết (nâng cao)', time: 20,
  questions: [
    { sec: 'Chia hết cho 9', name: 'Câu 1', pts: 1, text: 'Số nào chia hết cho 9?', opts: o4('915', '972', '924', '933'), ans: 'B', why: '9 + 7 + 2 = 18 chia hết cho 9 nên 972 chia hết cho 9.' },
    { sec: 'Chia hết cho 2 và 3', name: 'Câu 2', pts: 1, text: 'Số nào vừa chia hết cho 2 vừa chia hết cho 3?', opts: o4('126', '125', '127', '129'), ans: 'A', why: '126 chẵn (chia hết 2) và 1 + 2 + 6 = 9 chia hết 3.' },
    { sec: 'Điền chữ số', name: 'Câu 3', pts: 1, text: 'Chữ số nào điền vào ô trống để số 27☐ chia hết cho 3?', opts: o4('4', '5', '3', '7'), ans: 'C', why: '2 + 7 = 9; để tổng chia hết 3 thì ☐ là 0, 3, 6 hoặc 9 → chọn 3.' },
    { sec: 'Chia hết cho 5', name: 'Câu 4', pts: 1, text: 'Số nào chia hết cho 5 nhưng KHÔNG chia hết cho 2?', opts: o4('20', '35', '40', '50'), ans: 'B', why: '35 tận cùng bằng 5 nên chia hết 5 và là số lẻ (không chia hết 2).' },
    { sec: 'Chia hết cho 9', name: 'Câu 5', pts: 1, text: 'Số nào chia hết cho 9?', opts: o4('38', '40', '55', '27'), ans: 'D', why: '2 + 7 = 9 chia hết cho 9 nên 27 chia hết cho 9.' },
    { sec: 'Đếm số', name: 'Câu 6', pts: 1, text: 'Có bao nhiêu số có hai chữ số chia hết cho 5?', opts: o4('18', '19', '20', '17'), ans: 'A', why: 'Các số 10, 15, 20, ..., 95 gồm (95 − 10) : 5 + 1 = 18 số.' },
    { sec: 'Không chia hết', name: 'Câu 7', pts: 1, text: 'Số nào KHÔNG chia hết cho 9?', opts: o4('108', '126', '135', '140'), ans: 'D', why: '1 + 4 + 0 = 5 không chia hết cho 9 nên 140 không chia hết 9.' },
    { sec: 'Số lớn nhất', name: 'Câu 8', pts: 1, text: 'Số lớn nhất có ba chữ số chia hết cho 5 là số nào?', opts: o4('999', '990', '995', '985'), ans: 'C', why: 'Số lớn nhất có 3 chữ số là 999; số chia hết 5 gần nhất là 995.' },
    { sec: 'Số bé nhất', name: 'Câu 9', pts: 1, text: 'Số bé nhất có ba chữ số chia hết cho 9 là số nào?', opts: o4('100', '108', '117', '126'), ans: 'B', why: 'Số nhỏ nhất có 3 chữ số là 100; số chia hết 9 gần nhất là 108 (1+0+8=9).' },
    { sec: 'Chia hết cho 3 không cho 9', name: 'Câu 10', pts: 1, text: 'Số nào chia hết cho 3 nhưng KHÔNG chia hết cho 9?', opts: o4('123', '126', '135', '144'), ans: 'A', why: '1 + 2 + 3 = 6 chia hết 3 nhưng không chia hết 9.' },
  ],
},

/* ═══════════ ĐỀ 14 — PHÂN SỐ: RÚT GỌN, QUY ĐỒNG, SO SÁNH ═══════════ */
{
  id: 7404, title: 'Đề 14 · Phân số: rút gọn, quy đồng, so sánh', time: 20,
  questions: [
    { sec: 'Rút gọn', name: 'Câu 1', pts: 1, text: 'Rút gọn phân số 12/18 được phân số nào?', opts: o4('3/4', '2/3', '5/6', '1/2'), ans: 'B', why: 'Chia cả tử và mẫu cho 6: 12/18 = 2/3.' },
    { sec: 'Rút gọn', name: 'Câu 2', pts: 1, text: 'Rút gọn phân số 15/25 được phân số nào?', opts: o4('3/5', '5/3', '3/10', '1/5'), ans: 'A', why: 'Chia cả tử và mẫu cho 5: 15/25 = 3/5.' },
    { sec: 'Quy đồng', name: 'Câu 3', pts: 1, text: 'Quy đồng 2/3 với mẫu số chung là 12 thì 2/3 = ?', opts: o4('6/12', '9/12', '8/12', '5/12'), ans: 'C', why: '2/3 = (2×4)/(3×4) = 8/12.' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'So sánh: 5/6 ... 4/5', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'A', why: '5/6 = 25/30 và 4/5 = 24/30, mà 25 > 24 nên 5/6 > 4/5.' },
    { sec: 'Lớn nhất', name: 'Câu 5', pts: 1, text: 'Phân số nào lớn nhất trong các phân số 1/2, 2/3, 3/4, 4/5?', opts: o4('1/2', '2/3', '3/4', '4/5'), ans: 'D', why: 'Quy về cùng ý nghĩa: 4/5 = 0,8 lớn nhất.' },
    { sec: 'Phân số bằng nhau', name: 'Câu 6', pts: 1, text: 'Phân số nào bằng 3/5?', opts: o4('5/3', '6/10', '3/10', '9/10'), ans: 'B', why: '6/10 = (3×2)/(5×2) = 3/5.' },
    { sec: 'Rút gọn', name: 'Câu 7', pts: 1, text: 'Rút gọn phân số 24/36 được phân số nào?', opts: o4('2/3', '3/4', '5/6', '1/2'), ans: 'A', why: 'Chia cả tử và mẫu cho 12: 24/36 = 2/3.' },
    { sec: 'So với 1', name: 'Câu 8', pts: 1, text: 'So sánh: 7/8 ... 1', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'B', why: 'Tử số 7 bé hơn mẫu số 8 nên 7/8 < 1.' },
    { sec: 'Rút gọn về số tự nhiên', name: 'Câu 9', pts: 1, text: 'Phân số 18/6 bằng số nào?', opts: o4('2', '6', '3', '9'), ans: 'C', why: '18 : 6 = 3.' },
    { sec: 'Quy đồng', name: 'Câu 10', pts: 1, text: 'Quy đồng 1/3 với mẫu số chung là 6 thì 1/3 = ?', opts: o4('3/6', '1/6', '4/6', '2/6'), ans: 'D', why: '1/3 = (1×2)/(3×2) = 2/6.' },
  ],
},

/* ═══════════ ĐỀ 15 — BỐN PHÉP TÍNH VỚI PHÂN SỐ ═══════════ */
{
  id: 7405, title: 'Đề 15 · Cộng, trừ, nhân, chia phân số', time: 20,
  questions: [
    { sec: 'Cộng cùng mẫu', name: 'Câu 1', pts: 1, text: '3/8 + 1/8 = ?', opts: o4('4/8', '4/16', '2/8', '5/8'), ans: 'A', why: 'Cùng mẫu: cộng tử, giữ mẫu: 3/8 + 1/8 = 4/8.' },
    { sec: 'Cộng khác mẫu', name: 'Câu 2', pts: 1, text: '2/3 + 1/6 = ?', opts: o4('3/9', '5/6', '5/9', '3/6'), ans: 'B', why: 'Quy đồng: 2/3 = 4/6, nên 4/6 + 1/6 = 5/6.' },
    { sec: 'Trừ khác mẫu', name: 'Câu 3', pts: 1, text: '5/6 − 1/2 = ?', opts: o4('4/8', '2/4', '2/6', '3/6'), ans: 'C', why: 'Quy đồng: 1/2 = 3/6, nên 5/6 − 3/6 = 2/6.' },
    { sec: 'Nhân phân số', name: 'Câu 4', pts: 1, text: '3/4 × 2/3 = ?', opts: o4('6/12', '5/7', '6/7', '5/12'), ans: 'A', why: 'Nhân tử với tử, mẫu với mẫu: (3×2)/(4×3) = 6/12.' },
    { sec: 'Chia phân số', name: 'Câu 5', pts: 1, text: '4/5 : 2/5 = ?', opts: o4('1/2', '4/25', '8/5', '2'), ans: 'D', why: 'Nhân với phân số đảo ngược: 4/5 × 5/2 = 20/10 = 2.' },
    { sec: 'Nhân với số', name: 'Câu 6', pts: 1, text: '2/7 × 3 = ?', opts: o4('6/21', '6/7', '5/7', '2/21'), ans: 'B', why: 'Nhân tử với 3: (2×3)/7 = 6/7.' },
    { sec: 'Phân số của số', name: 'Câu 7', pts: 1, text: '3/4 của 20 là bao nhiêu?', opts: o4('15', '5', '60', '12'), ans: 'A', why: '20 : 4 = 5, rồi 5 × 3 = 15.' },
    { sec: 'Trừ với 1', name: 'Câu 8', pts: 1, text: '1 − 2/5 = ?', opts: o4('2/5', '1/5', '3/5', '5/5'), ans: 'C', why: '1 = 5/5, nên 5/5 − 2/5 = 3/5.' },
    { sec: 'Chia cho số', name: 'Câu 9', pts: 1, text: '5/6 : 5 = ?', opts: o4('1/5', '6/5', '25/6', '1/6'), ans: 'D', why: 'Chia cho 5 thì nhân mẫu với 5: 5/(6×5) = 5/30 = 1/6.' },
    { sec: 'Cộng ba phân số', name: 'Câu 10', pts: 1, text: '1/2 + 1/3 + 1/6 = ?', opts: o4('1', '3/11', '1/6', '5/6'), ans: 'A', why: 'Quy đồng mẫu 6: 3/6 + 2/6 + 1/6 = 6/6 = 1.' },
  ],
},

/* ═══════════ ĐỀ 16 — TRUNG BÌNH CỘNG ═══════════ */
{
  id: 7406, title: 'Đề 16 · Trung bình cộng', time: 20,
  questions: [
    { sec: 'Trung bình cộng', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 12, 18, 24 là bao nhiêu?', opts: o4('54', '18', '16', '20'), ans: 'B', why: '(12 + 18 + 24) : 3 = 54 : 3 = 18.' },
    { sec: 'Trung bình cộng', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 5, 10, 15, 20, 25 là bao nhiêu?', opts: o4('15', '75', '12', '18'), ans: 'A', why: '(5+10+15+20+25) : 5 = 75 : 5 = 15.' },
    { sec: 'Tìm số chưa biết', name: 'Câu 3', pts: 1, text: 'Trung bình cộng hai số là 40, một số là 35. Số kia là bao nhiêu?', opts: o4('5', '80', '45', '75'), ans: 'C', why: 'Tổng hai số = 40 × 2 = 80; số kia = 80 − 35 = 45.' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Ba bạn hái được 12, 15, 18 quả. Trung bình mỗi bạn hái mấy quả?', opts: o4('15', '45', '12', '16'), ans: 'A', why: '(12 + 15 + 18) : 3 = 45 : 3 = 15 (quả).' },
    { sec: 'Tìm tổng', name: 'Câu 5', pts: 1, text: 'Trung bình cộng tuổi của 3 người là 30. Tổng số tuổi của họ là bao nhiêu?', opts: o4('10', '60', '120', '90'), ans: 'D', why: 'Tổng = trung bình × số người = 30 × 3 = 90 (tuổi).' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Ba xe chở 40 bao, 50 bao và 60 bao. Trung bình mỗi xe chở bao nhiêu bao?', opts: o4('150', '50', '45', '55'), ans: 'B', why: '(40 + 50 + 60) : 3 = 150 : 3 = 50 (bao).' },
    { sec: 'Lời văn', name: 'Câu 7', pts: 1, text: 'Cửa hàng ngày đầu bán 20 m vải, ngày sau bán 40 m. Trung bình mỗi ngày bán mấy mét?', opts: o4('30', '60', '20', '25'), ans: 'A', why: '(20 + 40) : 2 = 60 : 2 = 30 (m).' },
    { sec: 'Tìm số chưa biết', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của 4 số là 25; ba số đầu là 20, 30, 25. Số thứ tư là bao nhiêu?', opts: o4('75', '100', '25', '20'), ans: 'C', why: 'Tổng 4 số = 25 × 4 = 100; số thứ tư = 100 − (20+30+25) = 100 − 75 = 25.' },
    { sec: 'Lời văn', name: 'Câu 9', pts: 1, text: 'Lan cao 130 cm, Mai cao 128 cm, Hoa cao 132 cm. Trung bình mỗi bạn cao bao nhiêu?', opts: o4('390', '129', '131', '130'), ans: 'D', why: '(130 + 128 + 132) : 3 = 390 : 3 = 130 (cm).' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của hai số là 50. Nếu một số là 0 thì số kia là bao nhiêu?', opts: o4('100', '50', '0', '25'), ans: 'A', why: 'Tổng hai số = 50 × 2 = 100; số kia = 100 − 0 = 100.' },
  ],
},

/* ═══════════ ĐỀ 17 — TÌM HAI SỐ (TỔNG – HIỆU) ═══════════ */
{
  id: 7407, title: 'Đề 17 · Tìm hai số biết tổng – hiệu', time: 20,
  questions: [
    { sec: 'Tổng – hiệu', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 48, hiệu 12. Số lớn là bao nhiêu?', opts: o4('18', '30', '36', '24'), ans: 'B', why: 'Số lớn = (48 + 12) : 2 = 60 : 2 = 30.' },
    { sec: 'Tổng – hiệu', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 48, hiệu 12. Số bé là bao nhiêu?', opts: o4('18', '30', '24', '36'), ans: 'A', why: 'Số bé = (48 − 12) : 2 = 36 : 2 = 18.' },
    { sec: 'Lời văn', name: 'Câu 3', pts: 1, text: 'Hai lớp 4A và 4B có 70 học sinh, 4A hơn 4B 6 học sinh. Lớp 4A có bao nhiêu học sinh?', opts: o4('32', '35', '38', '40'), ans: 'C', why: '4A = (70 + 6) : 2 = 76 : 2 = 38 (học sinh).' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Hai lớp 4A và 4B có 70 học sinh, 4A hơn 4B 6 học sinh. Lớp 4B có bao nhiêu học sinh?', opts: o4('32', '38', '35', '30'), ans: 'A', why: '4B = (70 − 6) : 2 = 64 : 2 = 32 (học sinh).' },
    { sec: 'Tổng – hiệu', name: 'Câu 5', pts: 1, text: 'Tổng hai số là 100, số lớn hơn số bé 30. Số lớn là bao nhiêu?', opts: o4('35', '70', '50', '65'), ans: 'D', why: 'Số lớn = (100 + 30) : 2 = 130 : 2 = 65.' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Hai thùng có 84 lít dầu, thùng A ít hơn thùng B 10 lít. Thùng B chứa bao nhiêu lít?', opts: o4('37', '47', '42', '52'), ans: 'B', why: 'Thùng B = (84 + 10) : 2 = 94 : 2 = 47 (lít).' },
    { sec: 'Lời văn', name: 'Câu 7', pts: 1, text: 'Anh và em có 45 viên kẹo, anh hơn em 5 viên. Em có bao nhiêu viên?', opts: o4('20', '25', '22', '15'), ans: 'A', why: 'Em = (45 − 5) : 2 = 40 : 2 = 20 (viên).' },
    { sec: 'Tổng – hiệu', name: 'Câu 8', pts: 1, text: 'Hai số có tổng 36, hiệu 8. Số bé là bao nhiêu?', opts: o4('22', '18', '14', '16'), ans: 'C', why: 'Số bé = (36 − 8) : 2 = 28 : 2 = 14.' },
    { sec: 'Tổng – hiệu', name: 'Câu 9', pts: 1, text: 'Hai số có tổng là 99, hiệu 11. Số lớn là bao nhiêu?', opts: o4('44', '50', '60', '55'), ans: 'D', why: 'Số lớn = (99 + 11) : 2 = 110 : 2 = 55.' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Hai thửa ruộng thu 500 kg thóc, thửa 1 hơn thửa 2 100 kg. Thửa 2 thu bao nhiêu ki-lô-gam?', opts: o4('200', '300', '250', '150'), ans: 'A', why: 'Thửa 2 = (500 − 100) : 2 = 400 : 2 = 200 (kg).' },
  ],
},

/* ═══════════ ĐỀ 18 — TÌM HAI SỐ (TỔNG – TỈ, HIỆU – TỈ) ═══════════ */
{
  id: 7408, title: 'Đề 18 · Tìm hai số biết tổng – tỉ, hiệu – tỉ', time: 20,
  questions: [
    { sec: 'Tổng – tỉ', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 36, số bé bằng 1/2 số lớn. Số bé là bao nhiêu?', opts: o4('24', '12', '18', '9'), ans: 'B', why: 'Tổng số phần = 1 + 2 = 3; số bé = 36 : 3 × 1 = 12.' },
    { sec: 'Tổng – tỉ', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 36, số bé bằng 1/2 số lớn. Số lớn là bao nhiêu?', opts: o4('24', '12', '18', '30'), ans: 'A', why: 'Số lớn = 36 : 3 × 2 = 24.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tỉ số 3 : 4 và tổng bằng 63. Số lớn là bao nhiêu?', opts: o4('27', '28', '36', '35'), ans: 'C', why: 'Tổng số phần = 3 + 4 = 7; mỗi phần 63 : 7 = 9; số lớn = 9 × 4 = 36.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 4', pts: 1, text: 'Số lớn gấp 4 lần số bé, hiệu hai số là 27. Số bé là bao nhiêu?', opts: o4('9', '36', '27', '12'), ans: 'A', why: 'Hiệu số phần = 4 − 1 = 3; số bé = 27 : 3 = 9.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 5', pts: 1, text: 'Số lớn gấp 4 lần số bé, hiệu hai số là 27. Số lớn là bao nhiêu?', opts: o4('9', '27', '45', '36'), ans: 'D', why: 'Số bé = 27 : 3 = 9; số lớn = 9 × 4 = 36.' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Vườn có 48 cây cam và bưởi, số cam gấp 3 lần số bưởi. Có bao nhiêu cây bưởi?', opts: o4('36', '12', '16', '24'), ans: 'B', why: 'Tổng số phần = 3 + 1 = 4; số bưởi = 48 : 4 = 12 (cây).' },
    { sec: 'Tổng – tỉ', name: 'Câu 7', pts: 1, text: 'Hai số có tổng 55, số này bằng 2/3 số kia. Số bé là bao nhiêu?', opts: o4('22', '33', '25', '30'), ans: 'A', why: 'Tổng số phần = 2 + 3 = 5; số bé = 55 : 5 × 2 = 22.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 8', pts: 1, text: 'Mẹ hơn con 25 tuổi, tuổi mẹ gấp 6 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('30', '6', '5', '25'), ans: 'C', why: 'Hiệu số phần = 6 − 1 = 5; tuổi con = 25 : 5 = 5 (tuổi).' },
    { sec: 'Lời văn', name: 'Câu 9', pts: 1, text: 'Hai kho có 120 tấn thóc, kho A gấp đôi kho B. Kho A chứa bao nhiêu tấn?', opts: o4('40', '60', '90', '80'), ans: 'D', why: 'Tổng số phần = 2 + 1 = 3; mỗi phần 120 : 3 = 40; kho A = 40 × 2 = 80 (tấn).' },
    { sec: 'Hiệu – tỉ', name: 'Câu 10', pts: 1, text: 'Số lớn gấp 5 lần số bé, hiệu hai số là 40. Số bé là bao nhiêu?', opts: o4('10', '50', '8', '40'), ans: 'A', why: 'Hiệu số phần = 5 − 1 = 4; số bé = 40 : 4 = 10.' },
  ],
},

/* ═══════════ ĐỀ 19 — ĐƠN VỊ ĐO KHỐI LƯỢNG & THỜI GIAN ═══════════ */
{
  id: 7409, title: 'Đề 19 · Đơn vị đo khối lượng và thời gian', time: 20,
  questions: [
    { sec: 'Khối lượng', name: 'Câu 1', pts: 1, text: '3 tấn 5 tạ = ? kg', opts: o4('3 050 kg', '3 500 kg', '3 005 kg', '35 000 kg'), ans: 'B', why: '3 tấn = 3 000 kg, 5 tạ = 500 kg → 3 500 kg.' },
    { sec: 'Khối lượng', name: 'Câu 2', pts: 1, text: '4 kg 200 g = ? g', opts: o4('4 200 g', '4 020 g', '420 g', '42 000 g'), ans: 'A', why: '4 kg = 4 000 g, cộng 200 g → 4 200 g.' },
    { sec: 'Thời gian', name: 'Câu 3', pts: 1, text: '2 phút 30 giây = ? giây', opts: o4('230', '90', '150', '120'), ans: 'C', why: '2 phút = 120 giây, cộng 30 giây → 150 giây.' },
    { sec: 'Thời gian', name: 'Câu 4', pts: 1, text: '1/4 giờ = ? phút', opts: o4('15', '25', '20', '30'), ans: 'A', why: '1 giờ = 60 phút; 60 : 4 = 15 phút.' },
    { sec: 'Thế kỉ', name: 'Câu 5', pts: 1, text: 'Năm 2026 thuộc thế kỉ thứ mấy?', opts: o4('XX', 'XIX', 'XXII', 'XXI'), ans: 'D', why: 'Từ năm 2001 đến 2100 thuộc thế kỉ XXI.' },
    { sec: 'Khối lượng', name: 'Câu 6', pts: 1, text: '5 tạ = ? kg', opts: o4('50', '500', '5 000', '5'), ans: 'B', why: '1 tạ = 100 kg nên 5 tạ = 500 kg.' },
    { sec: 'Thời gian', name: 'Câu 7', pts: 1, text: '3 ngày = ? giờ', opts: o4('72', '36', '48', '24'), ans: 'A', why: '1 ngày = 24 giờ; 24 × 3 = 72 giờ.' },
    { sec: 'Khối lượng', name: 'Câu 8', pts: 1, text: '6 000 kg = ? tấn', opts: o4('60', '600', '6', '6 000'), ans: 'C', why: '1 tấn = 1 000 kg nên 6 000 kg = 6 tấn.' },
    { sec: 'Thế kỉ', name: 'Câu 9', pts: 1, text: 'Nửa thế kỉ bằng bao nhiêu năm?', opts: o4('100', '25', '500', '50'), ans: 'D', why: '1 thế kỉ = 100 năm nên nửa thế kỉ = 50 năm.' },
    { sec: 'Thời gian', name: 'Câu 10', pts: 1, text: '1 giờ 15 phút = ? phút', opts: o4('75', '115', '65', '90'), ans: 'A', why: '1 giờ = 60 phút, cộng 15 phút → 75 phút.' },
  ],
},

/* ═══════════ ĐỀ 20 — ĐƠN VỊ ĐO DIỆN TÍCH & GÓC ═══════════ */
{
  id: 7410, title: 'Đề 20 · Đơn vị đo diện tích và góc', time: 20,
  questions: [
    { sec: 'Diện tích', name: 'Câu 1', pts: 1, text: '1 m² = ? cm²', opts: o4('100', '10 000', '1 000', '100 000'), ans: 'B', why: '1 m² = 100 dm² = 10 000 cm².' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: '5 m² = ? dm²', opts: o4('500', '50', '5 000', '55'), ans: 'A', why: '1 m² = 100 dm² nên 5 m² = 500 dm².' },
    { sec: 'Diện tích', name: 'Câu 3', pts: 1, text: '300 dm² = ? m²', opts: o4('30', '300', '3', '33'), ans: 'C', why: '1 m² = 100 dm² nên 300 dm² = 3 m².' },
    { sec: 'Góc', name: 'Câu 4', pts: 1, text: 'Số đo nào dưới đây là của một góc tù?', opts: o4('120°', '60°', '90°', '30°'), ans: 'A', why: 'Góc tù lớn hơn 90° và bé hơn 180° → 120°.' },
    { sec: 'Góc', name: 'Câu 5', pts: 1, text: 'Lúc 3 giờ đúng, kim giờ và kim phút tạo thành góc gì?', opts: o4('Góc nhọn', 'Góc tù', 'Góc bẹt', 'Góc vuông'), ans: 'D', why: 'Hai kim cách nhau 3 giờ, tạo thành góc vuông (90°).' },
    { sec: 'Góc', name: 'Câu 6', pts: 1, text: 'Góc bẹt có số đo bằng bao nhiêu độ?', opts: o4('90°', '180°', '360°', '45°'), ans: 'B', why: 'Góc bẹt bằng 180°.' },
    { sec: 'Diện tích', name: 'Câu 7', pts: 1, text: '2 m² 30 dm² = ? dm²', opts: o4('230', '2 300', '203', '23'), ans: 'A', why: '2 m² = 200 dm², cộng 30 dm² → 230 dm².' },
    { sec: 'Góc', name: 'Câu 8', pts: 1, text: 'Lúc 6 giờ đúng, hai kim đồng hồ tạo thành góc gì?', opts: o4('Góc vuông', 'Góc nhọn', 'Góc bẹt', 'Góc tù'), ans: 'C', why: 'Hai kim thẳng hàng ngược nhau tạo thành góc bẹt (180°).' },
    { sec: 'Diện tích', name: 'Câu 9', pts: 1, text: '700 cm² = ? dm²', opts: o4('70', '77', '700', '7'), ans: 'D', why: '1 dm² = 100 cm² nên 700 cm² = 7 dm².' },
    { sec: 'Góc', name: 'Câu 10', pts: 1, text: 'Số đo nào dưới đây là của một góc nhọn?', opts: o4('45°', '100°', '90°', '180°'), ans: 'A', why: 'Góc nhọn bé hơn 90° → 45°.' },
  ],
},

/* ═══════════ ĐỀ 21 — HÌNH BÌNH HÀNH & HÌNH THOI ═══════════ */
{
  id: 7411, title: 'Đề 21 · Hình bình hành và hình thoi', time: 20,
  questions: [
    { sec: 'Hình bình hành', name: 'Câu 1', pts: 1, text: 'Hình bình hành có đáy 12 cm, chiều cao 5 cm. Diện tích là bao nhiêu?', opts: o4('17 cm²', '60 cm²', '34 cm²', '120 cm²'), ans: 'B', why: 'S = đáy × chiều cao = 12 × 5 = 60 (cm²).' },
    { sec: 'Hình bình hành', name: 'Câu 2', pts: 1, text: 'Hình bình hành có đáy 8 dm, chiều cao 6 dm. Diện tích là bao nhiêu?', opts: o4('48 dm²', '14 dm²', '28 dm²', '96 dm²'), ans: 'A', why: 'S = 8 × 6 = 48 (dm²).' },
    { sec: 'Hình thoi', name: 'Câu 3', pts: 1, text: 'Hình thoi có hai đường chéo 10 cm và 12 cm. Diện tích là bao nhiêu?', opts: o4('120 cm²', '22 cm²', '60 cm²', '44 cm²'), ans: 'C', why: 'S = (10 × 12) : 2 = 120 : 2 = 60 (cm²).' },
    { sec: 'Hình thoi', name: 'Câu 4', pts: 1, text: 'Hình thoi có hai đường chéo 5 cm và 8 cm. Diện tích là bao nhiêu?', opts: o4('20 cm²', '40 cm²', '13 cm²', '26 cm²'), ans: 'A', why: 'S = (5 × 8) : 2 = 40 : 2 = 20 (cm²).' },
    { sec: 'Hình bình hành', name: 'Câu 5', pts: 1, text: 'Hình bình hành có diện tích 72 cm², đáy 9 cm. Chiều cao là bao nhiêu?', opts: o4('9 cm', '63 cm', '81 cm', '8 cm'), ans: 'D', why: 'Chiều cao = 72 : 9 = 8 (cm).' },
    { sec: 'Hình thoi', name: 'Câu 6', pts: 1, text: 'Hình thoi có diện tích 24 cm², một đường chéo 6 cm. Đường chéo kia dài bao nhiêu?', opts: o4('4 cm', '8 cm', '12 cm', '18 cm'), ans: 'B', why: 'Đường chéo kia = 24 × 2 : 6 = 48 : 6 = 8 (cm).' },
    { sec: 'Hình bình hành', name: 'Câu 7', pts: 1, text: 'Hình bình hành có đáy 15 cm, chiều cao 4 cm. Diện tích là bao nhiêu?', opts: o4('60 cm²', '19 cm²', '38 cm²', '120 cm²'), ans: 'A', why: 'S = 15 × 4 = 60 (cm²).' },
    { sec: 'Hình thoi', name: 'Câu 8', pts: 1, text: 'Hình thoi có cạnh 5 cm. Chu vi của nó là bao nhiêu?', opts: o4('10 cm', '25 cm', '20 cm', '15 cm'), ans: 'C', why: 'Hình thoi có 4 cạnh bằng nhau: chu vi = 5 × 4 = 20 (cm).' },
    { sec: 'Hình bình hành', name: 'Câu 9', pts: 1, text: 'Hình bình hành có chu vi 40 cm, một cạnh dài 12 cm. Cạnh kia dài bao nhiêu?', opts: o4('28 cm', '16 cm', '20 cm', '8 cm'), ans: 'D', why: 'Nửa chu vi = 40 : 2 = 20; cạnh kia = 20 − 12 = 8 (cm).' },
    { sec: 'Hình thoi', name: 'Câu 10', pts: 1, text: 'Hình thoi có hai đường chéo 14 cm và 6 cm. Diện tích là bao nhiêu?', opts: o4('42 cm²', '84 cm²', '20 cm²', '40 cm²'), ans: 'A', why: 'S = (14 × 6) : 2 = 84 : 2 = 42 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 22 — BIỂU ĐỒ CỘT & BẢNG SỐ LIỆU ═══════════ */
{
  id: 7412, title: 'Đề 22 · Biểu đồ cột và bảng số liệu', time: 20,
  questions: [
    { sec: 'Biểu đồ', name: 'Câu 1', pts: 1, text: 'Biểu đồ số cây trồng: lớp 4A trồng 20 cây, 4B trồng 25 cây, 4C trồng 15 cây. Lớp nào trồng nhiều cây nhất?', opts: o4('4A', '4B', '4C', 'Bằng nhau'), ans: 'B', why: 'So sánh 20, 25, 15 → 25 lớn nhất là lớp 4B.' },
    { sec: 'Biểu đồ', name: 'Câu 2', pts: 1, text: 'Với biểu đồ trên (4A: 20, 4B: 25, 4C: 15 cây), cả ba lớp trồng được bao nhiêu cây?', opts: o4('60', '55', '45', '65'), ans: 'A', why: '20 + 25 + 15 = 60 (cây).' },
    { sec: 'Biểu đồ', name: 'Câu 3', pts: 1, text: 'Với biểu đồ trên, lớp 4B trồng nhiều hơn lớp 4C bao nhiêu cây?', opts: o4('5', '15', '10', '40'), ans: 'C', why: '25 − 15 = 10 (cây).' },
    { sec: 'Bảng số liệu', name: 'Câu 4', pts: 1, text: 'Số điểm 10 trong tuần: Thứ Hai 3, Thứ Ba 5, Thứ Tư 2, Thứ Năm 4. Ngày nào được nhiều điểm 10 nhất?', opts: o4('Thứ Ba', 'Thứ Hai', 'Thứ Tư', 'Thứ Năm'), ans: 'A', why: 'So sánh 3, 5, 2, 4 → 5 nhiều nhất là Thứ Ba.' },
    { sec: 'Bảng số liệu', name: 'Câu 5', pts: 1, text: 'Với bảng trên (3, 5, 2, 4 điểm 10), cả tuần được tất cả bao nhiêu điểm 10?', opts: o4('13', '15', '12', '14'), ans: 'D', why: '3 + 5 + 2 + 4 = 14 (điểm 10).' },
    { sec: 'Bảng số liệu', name: 'Câu 6', pts: 1, text: 'Số bông hoa gấp được: An 6, Bình 8, Cường 10, Dũng 12. Bạn nào gấp được nhiều nhất?', opts: o4('An', 'Dũng', 'Bình', 'Cường'), ans: 'B', why: 'So sánh 6, 8, 10, 12 → 12 nhiều nhất là Dũng.' },
    { sec: 'Bảng số liệu', name: 'Câu 7', pts: 1, text: 'Với bảng trên (An 6, Bình 8, Cường 10, Dũng 12 bông), trung bình mỗi bạn gấp được bao nhiêu bông hoa?', opts: o4('9', '36', '8', '10'), ans: 'A', why: '(6 + 8 + 10 + 12) : 4 = 36 : 4 = 9 (bông).' },
    { sec: 'Bảng số liệu', name: 'Câu 8', pts: 1, text: 'Với bảng trên, bạn nào gấp được ít bông hoa nhất?', opts: o4('Bình', 'Cường', 'An', 'Dũng'), ans: 'C', why: 'So sánh 6, 8, 10, 12 → 6 ít nhất là An.' },
    { sec: 'Biểu đồ', name: 'Câu 9', pts: 1, text: 'Biểu đồ giấy vụn thu được: Tổ 1 được 12 kg, Tổ 2 được 15 kg, Tổ 3 được 9 kg. Cả ba tổ thu được bao nhiêu ki-lô-gam?', opts: o4('35', '37', '30', '36'), ans: 'D', why: '12 + 15 + 9 = 36 (kg).' },
    { sec: 'Biểu đồ', name: 'Câu 10', pts: 1, text: 'Với biểu đồ trên, Tổ 2 thu được nhiều hơn Tổ 3 bao nhiêu ki-lô-gam?', opts: o4('6', '3', '5', '24'), ans: 'A', why: '15 − 9 = 6 (kg).' },
  ],
},

/* ═══════════ ĐỀ 23 — BÀI TOÁN CÓ LỜI VĂN (1) ═══════════ */
{
  id: 7413, title: 'Đề 23 · Bài toán có lời văn (1)', time: 20,
  questions: [
    { sec: 'Lời văn', name: 'Câu 1', pts: 1, text: 'Cửa hàng có 1 250 kg gạo, đã bán 480 kg. Cửa hàng còn lại bao nhiêu ki-lô-gam gạo?', opts: o4('870 kg', '770 kg', '730 kg', '1 730 kg'), ans: 'B', why: '1 250 − 480 = 770 (kg).' },
    { sec: 'Lời văn', name: 'Câu 2', pts: 1, text: 'Mỗi hộp có 24 chiếc bút. Hỏi 5 hộp như thế có bao nhiêu chiếc bút?', opts: o4('120', '29', '100', '125'), ans: 'A', why: '24 × 5 = 120 (chiếc).' },
    { sec: 'Lời văn', name: 'Câu 3', pts: 1, text: 'Có 960 bao xi măng chở đều lên 8 xe. Mỗi xe chở bao nhiêu bao?', opts: o4('952', '108', '120', '130'), ans: 'C', why: '960 : 8 = 120 (bao).' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Mua 3 kg táo hết 90 000 đồng. Hỏi 1 kg táo giá bao nhiêu tiền?', opts: o4('30 000 đồng', '27 000 đồng', '60 000 đồng', '93 000 đồng'), ans: 'A', why: '90 000 : 3 = 30 000 (đồng).' },
    { sec: 'Lời văn', name: 'Câu 5', pts: 1, text: 'Lớp có 32 học sinh, trong đó 3/4 số học sinh đạt loại giỏi. Có bao nhiêu học sinh giỏi?', opts: o4('8', '28', '16', '24'), ans: 'D', why: '32 : 4 = 8, rồi 8 × 3 = 24 (học sinh).' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Thư viện có 1 500 cuốn sách, mua thêm 350 cuốn. Hỏi thư viện có tất cả bao nhiêu cuốn?', opts: o4('1 150', '1 850', '1 800', '1 250'), ans: 'B', why: '1 500 + 350 = 1 850 (cuốn).' },
    { sec: 'Lời văn', name: 'Câu 7', pts: 1, text: 'Một hình chữ nhật dài 15 m, rộng 8 m. Chu vi của nó là bao nhiêu?', opts: o4('46 m', '120 m', '23 m', '60 m'), ans: 'A', why: 'Chu vi = (15 + 8) × 2 = 23 × 2 = 46 (m).' },
    { sec: 'Lời văn', name: 'Câu 8', pts: 1, text: 'Với hình chữ nhật dài 15 m, rộng 8 m ở trên, diện tích của nó là bao nhiêu?', opts: o4('46 m²', '23 m²', '120 m²', '60 m²'), ans: 'C', why: 'Diện tích = 15 × 8 = 120 (m²).' },
    { sec: 'Lời văn', name: 'Câu 9', pts: 1, text: 'Một ô tô mỗi giờ đi được 60 km. Trong 4 giờ, ô tô đi được bao nhiêu ki-lô-mét?', opts: o4('64 km', '180 km', '15 km', '240 km'), ans: 'D', why: '60 × 4 = 240 (km).' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Có 45 kg đường chia đều vào 9 túi. Mỗi túi có bao nhiêu ki-lô-gam đường?', opts: o4('5 kg', '54 kg', '36 kg', '9 kg'), ans: 'A', why: '45 : 9 = 5 (kg).' },
  ],
},

/* ═══════════ ĐỀ 24 — BÀI TOÁN CÓ LỜI VĂN (2) ═══════════ */
{
  id: 7414, title: 'Đề 24 · Bài toán có lời văn (2)', time: 20,
  questions: [
    { sec: 'Lời văn', name: 'Câu 1', pts: 1, text: 'Mảnh vườn hình chữ nhật dài 24 m, chiều rộng bằng 1/3 chiều dài. Chiều rộng là bao nhiêu?', opts: o4('72 m', '8 m', '21 m', '12 m'), ans: 'B', why: 'Chiều rộng = 24 : 3 = 8 (m).' },
    { sec: 'Lời văn', name: 'Câu 2', pts: 1, text: 'Với mảnh vườn dài 24 m, rộng 8 m ở trên, diện tích của nó là bao nhiêu?', opts: o4('192 m²', '32 m²', '64 m²', '200 m²'), ans: 'A', why: 'Diện tích = 24 × 8 = 192 (m²).' },
    { sec: 'Lời văn', name: 'Câu 3', pts: 1, text: 'Hai người thợ làm được 350 sản phẩm, người thứ nhất làm 150 sản phẩm. Người thứ hai làm nhiều hơn người thứ nhất bao nhiêu sản phẩm?', opts: o4('200', '100', '50', '350'), ans: 'C', why: 'Người thứ hai = 350 − 150 = 200; nhiều hơn = 200 − 150 = 50 (sản phẩm).' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Một bể chứa 2 000 lít nước, đã dùng 3/5 lượng nước đó. Bể còn lại bao nhiêu lít?', opts: o4('800 lít', '1 200 lít', '400 lít', '600 lít'), ans: 'A', why: 'Đã dùng = 2 000 : 5 × 3 = 1 200; còn lại = 2 000 − 1 200 = 800 (lít).' },
    { sec: 'Lời văn', name: 'Câu 5', pts: 1, text: 'Mua 5 quyển vở (mỗi quyển 8 000 đồng) và 3 cây bút (mỗi cây 5 000 đồng). Hết tất cả bao nhiêu tiền?', opts: o4('65 000 đồng', '40 000 đồng', '13 000 đồng', '55 000 đồng'), ans: 'D', why: 'Vở: 5 × 8 000 = 40 000; bút: 3 × 5 000 = 15 000; tổng = 55 000 (đồng).' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Một đội trồng 1 200 cây trong 4 ngày, mỗi ngày trồng như nhau. Trong 3 ngày đội trồng được bao nhiêu cây?', opts: o4('300', '900', '1 200', '600'), ans: 'B', why: 'Mỗi ngày = 1 200 : 4 = 300; ba ngày = 300 × 3 = 900 (cây).' },
    { sec: 'Lời văn', name: 'Câu 7', pts: 1, text: 'Trung bình mỗi bao gạo nặng 50 kg. Hỏi 24 bao gạo nặng bao nhiêu ki-lô-gam?', opts: o4('1 200 kg', '74 kg', '600 kg', '1 250 kg'), ans: 'A', why: '50 × 24 = 1 200 (kg).' },
    { sec: 'Lời văn', name: 'Câu 8', pts: 1, text: 'An có 36 viên bi, Bình có số bi gấp đôi An. Cả hai bạn có tất cả bao nhiêu viên bi?', opts: o4('72', '54', '108', '144'), ans: 'C', why: 'Bình = 36 × 2 = 72; cả hai = 36 + 72 = 108 (viên).' },
    { sec: 'Lời văn', name: 'Câu 9', pts: 1, text: 'Cửa hàng ngày đầu bán 125 kg gạo, ngày sau bán gấp 3 lần ngày đầu. Ngày sau bán được bao nhiêu ki-lô-gam?', opts: o4('128 kg', '250 kg', '500 kg', '375 kg'), ans: 'D', why: '125 × 3 = 375 (kg).' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Có 256 quyển sách xếp đều vào 8 giá, mỗi giá 4 ngăn. Mỗi ngăn có bao nhiêu quyển sách?', opts: o4('8', '30', '32', '16'), ans: 'A', why: 'Tổng số ngăn = 8 × 4 = 32; mỗi ngăn = 256 : 32 = 8 (quyển).' },
  ],
},

/* ═══════════ ĐỀ 25 — ÔN TẬP TỔNG HỢP (1) ═══════════ */
{
  id: 7415, title: 'Đề 25 · Ôn tập tổng hợp (1)', time: 20,
  questions: [
    { sec: 'Đọc số', name: 'Câu 1', pts: 1, text: 'Số 60 000 000 đọc là:', opts: o4('Sáu triệu', 'Sáu mươi triệu', 'Sáu trăm triệu', 'Sáu mươi nghìn'), ans: 'B', why: '60 000 000 đọc là "sáu mươi triệu".' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '25 000 + 17 000 = ?', opts: o4('42 000', '32 000', '43 000', '41 000'), ans: 'A', why: '25 000 + 17 000 = 42 000.' },
    { sec: 'Chia hết', name: 'Câu 3', pts: 1, text: 'Số nào chia hết cho 9?', opts: o4('190', '191', '189', '188'), ans: 'C', why: '1 + 8 + 9 = 18 chia hết cho 9 nên 189 chia hết 9.' },
    { sec: 'Phân số', name: 'Câu 4', pts: 1, text: '4/9 + 2/9 = ?', opts: o4('6/9', '6/18', '2/9', '8/9'), ans: 'A', why: 'Cùng mẫu: 4/9 + 2/9 = 6/9.' },
    { sec: 'Trung bình cộng', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của 14 và 20 là bao nhiêu?', opts: o4('34', '16', '18', '17'), ans: 'D', why: '(14 + 20) : 2 = 34 : 2 = 17.' },
    { sec: 'Tổng – hiệu', name: 'Câu 6', pts: 1, text: 'Hai số có tổng 30, hiệu 6. Số lớn là bao nhiêu?', opts: o4('12', '18', '24', '15'), ans: 'B', why: 'Số lớn = (30 + 6) : 2 = 36 : 2 = 18.' },
    { sec: 'Đơn vị đo', name: 'Câu 7', pts: 1, text: '3 tấn = ? kg', opts: o4('3 000', '300', '30 000', '30'), ans: 'A', why: '1 tấn = 1 000 kg nên 3 tấn = 3 000 kg.' },
    { sec: 'Hình thoi', name: 'Câu 8', pts: 1, text: 'Hình thoi có hai đường chéo 8 cm và 10 cm. Diện tích là bao nhiêu?', opts: o4('80 cm²', '18 cm²', '40 cm²', '36 cm²'), ans: 'C', why: 'S = (8 × 10) : 2 = 80 : 2 = 40 (cm²).' },
    { sec: 'Góc', name: 'Câu 9', pts: 1, text: 'Góc có số đo 90° là góc gì?', opts: o4('Góc nhọn', 'Góc tù', 'Góc bẹt', 'Góc vuông'), ans: 'D', why: 'Góc 90° là góc vuông.' },
    { sec: 'Phân số của số', name: 'Câu 10', pts: 1, text: '2/3 của 30 là bao nhiêu?', opts: o4('20', '10', '45', '15'), ans: 'A', why: '30 : 3 = 10, rồi 10 × 2 = 20.' },
  ],
},

/* ═══════════ ĐỀ 26 — ÔN TẬP TỔNG HỢP (2) ═══════════ */
{
  id: 7416, title: 'Đề 26 · Ôn tập tổng hợp (2)', time: 20,
  questions: [
    { sec: 'Giá trị chữ số', name: 'Câu 1', pts: 1, text: 'Giá trị của chữ số 6 trong số 3 604 200 là bao nhiêu?', opts: o4('6 000', '600 000', '60 000', '6 000 000'), ans: 'B', why: 'Chữ số 6 ở hàng trăm nghìn nên có giá trị 600 000.' },
    { sec: 'Nhân', name: 'Câu 2', pts: 1, text: '15 × 6 = ?', opts: o4('90', '80', '96', '85'), ans: 'A', why: '15 × 6 = 90.' },
    { sec: 'Rút gọn', name: 'Câu 3', pts: 1, text: 'Rút gọn phân số 20/25 được phân số nào?', opts: o4('5/4', '2/5', '4/5', '4/25'), ans: 'C', why: 'Chia cả tử và mẫu cho 5: 20/25 = 4/5.' },
    { sec: 'Thời gian', name: 'Câu 4', pts: 1, text: '1 giờ 30 phút = ? phút', opts: o4('90', '130', '60', '120'), ans: 'A', why: '1 giờ = 60 phút, cộng 30 phút → 90 phút.' },
    { sec: 'Tổng – tỉ', name: 'Câu 5', pts: 1, text: 'Số lớn gấp 3 lần số bé, tổng hai số là 40. Số bé là bao nhiêu?', opts: o4('30', '13', '20', '10'), ans: 'D', why: 'Tổng số phần = 3 + 1 = 4; số bé = 40 : 4 = 10.' },
    { sec: 'Trừ phân số', name: 'Câu 6', pts: 1, text: '7/8 − 3/8 = ?', opts: o4('4/16', '4/8', '10/8', '1/8'), ans: 'B', why: 'Cùng mẫu: 7/8 − 3/8 = 4/8.' },
    { sec: 'Hình bình hành', name: 'Câu 7', pts: 1, text: 'Hình bình hành có đáy 10 cm, chiều cao 7 cm. Diện tích là bao nhiêu?', opts: o4('70 cm²', '17 cm²', '34 cm²', '35 cm²'), ans: 'A', why: 'S = 10 × 7 = 70 (cm²).' },
    { sec: 'Đơn vị đo', name: 'Câu 8', pts: 1, text: '5 000 g = ? kg', opts: o4('50 kg', '500 kg', '5 kg', '5 000 kg'), ans: 'C', why: '1 kg = 1 000 g nên 5 000 g = 5 kg.' },
    { sec: 'So sánh phân số', name: 'Câu 9', pts: 1, text: 'So sánh: 3/5 ... 2/3', opts: o4('=', '>', 'Không so sánh được', '<'), ans: 'D', why: '3/5 = 9/15 và 2/3 = 10/15, mà 9 < 10 nên 3/5 < 2/3.' },
    { sec: 'Trung bình cộng', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của 10, 20, 30 là bao nhiêu?', opts: o4('20', '60', '15', '25'), ans: 'A', why: '(10 + 20 + 30) : 3 = 60 : 3 = 20.' },
  ],
},

/* ═══════════ ĐỀ 27 — ÔN TẬP TỔNG HỢP (3) ═══════════ */
{
  id: 7417, title: 'Đề 27 · Ôn tập tổng hợp (3)', time: 20,
  questions: [
    { sec: 'Làm tròn', name: 'Câu 1', pts: 1, text: 'Làm tròn số 384 726 đến hàng nghìn được số nào?', opts: o4('384 000', '385 000', '390 000', '380 000'), ans: 'B', why: 'Chữ số hàng trăm là 7 (≥ 5) nên làm tròn lên: 385 000.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: '8 × 9 × 5 = ?', opts: o4('360', '350', '72', '400'), ans: 'A', why: '8 × 9 = 72, rồi 72 × 5 = 360.' },
    { sec: 'So với 1', name: 'Câu 3', pts: 1, text: 'Phân số nào lớn hơn 1?', opts: o4('3/4', '5/7', '7/5', '1/2'), ans: 'C', why: 'Phân số có tử lớn hơn mẫu thì lớn hơn 1: 7/5 > 1.' },
    { sec: 'Đơn vị đo', name: 'Câu 4', pts: 1, text: '2 kg 500 g = ? g', opts: o4('2 500 g', '250 g', '2 050 g', '25 000 g'), ans: 'A', why: '2 kg = 2 000 g, cộng 500 g → 2 500 g.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 5', pts: 1, text: 'Số lớn gấp 4 lần số bé, hiệu hai số là 15. Số lớn là bao nhiêu?', opts: o4('5', '25', '15', '20'), ans: 'D', why: 'Hiệu số phần = 4 − 1 = 3; số bé = 15 : 3 = 5; số lớn = 5 × 4 = 20.' },
    { sec: 'Nhân với số', name: 'Câu 6', pts: 1, text: '1/2 × 6 = ?', opts: o4('6/12', '3', '12', '1/12'), ans: 'B', why: '(1 × 6)/2 = 6/2 = 3.' },
    { sec: 'Hình thoi', name: 'Câu 7', pts: 1, text: 'Hình thoi có hai đường chéo 12 dm và 5 dm. Diện tích là bao nhiêu?', opts: o4('30 dm²', '60 dm²', '17 dm²', '34 dm²'), ans: 'A', why: 'S = (12 × 5) : 2 = 60 : 2 = 30 (dm²).' },
    { sec: 'Số học', name: 'Câu 8', pts: 1, text: 'Số bé nhất có bốn chữ số khác nhau là số nào?', opts: o4('1 000', '1 234', '1 023', '1 002'), ans: 'C', why: 'Chọn nhỏ nhất: hàng nghìn 1, rồi 0, 2, 3 khác nhau → 1 023.' },
    { sec: 'Đơn vị đo', name: 'Câu 9', pts: 1, text: '3 000 kg = ? tấn', opts: o4('30 tấn', '300 tấn', '3 tạ', '3 tấn'), ans: 'D', why: '1 tấn = 1 000 kg nên 3 000 kg = 3 tấn.' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Một tuần có 7 ngày. Hỏi 4 tuần có bao nhiêu ngày?', opts: o4('28', '11', '21', '30'), ans: 'A', why: '7 × 4 = 28 (ngày).' },
  ],
},

/* ═══════════ ĐỀ 28 — SỐ & GIÁ TRỊ CHỮ SỐ (NÂNG CAO) ═══════════ */
{
  id: 7418, title: 'Đề 28 · Số và giá trị chữ số (nâng cao)', time: 20,
  questions: [
    { sec: 'Viết số', name: 'Câu 1', pts: 1, text: 'Số gồm 5 triệu, 4 trăm nghìn, 3 chục và 2 đơn vị viết là số nào?', opts: o4('5 400 320', '5 400 032', '5 043 002', '5 400 302'), ans: 'B', why: '5 triệu = 5 000 000, 4 trăm nghìn = 400 000, 3 chục = 30, 2 đơn vị = 2 → 5 400 032.' },
    { sec: 'Làm tròn', name: 'Câu 2', pts: 1, text: 'Làm tròn số 45 678 đến hàng chục nghìn được số nào?', opts: o4('50 000', '40 000', '45 000', '46 000'), ans: 'A', why: 'Chữ số hàng nghìn là 5 (≥ 5) nên làm tròn lên: 50 000.' },
    { sec: 'Giá trị chữ số', name: 'Câu 3', pts: 1, text: 'Giá trị của chữ số 3 trong số 7 235 618 là bao nhiêu?', opts: o4('3 000', '300 000', '30 000', '3 000 000'), ans: 'C', why: 'Từ phải sang: 3 ở hàng chục nghìn nên có giá trị 30 000.' },
    { sec: 'Số chẵn', name: 'Câu 4', pts: 1, text: 'Số chẵn bé nhất có 5 chữ số khác nhau là số nào?', opts: o4('10 234', '10 000', '12 340', '10 236'), ans: 'A', why: 'Chọn nhỏ nhất, các chữ số khác nhau, tận cùng chẵn: 10 234.' },
    { sec: 'Đếm số', name: 'Câu 5', pts: 1, text: 'Từ 1 đến 100 có bao nhiêu số tròn chục?', opts: o4('9', '11', '100', '10'), ans: 'D', why: 'Các số 10, 20, 30, ..., 100 gồm 10 số.' },
    { sec: 'Số liền sau', name: 'Câu 6', pts: 1, text: 'Số liền sau của số lớn nhất có 6 chữ số là số nào?', opts: o4('999 998', '1 000 000', '1 000 001', '100 000'), ans: 'B', why: 'Số lớn nhất có 6 chữ số là 999 999; liền sau là 1 000 000.' },
    { sec: 'Đếm chữ số', name: 'Câu 7', pts: 1, text: 'Số 2 020 202 có mấy chữ số 2?', opts: o4('4', '3', '5', '2'), ans: 'A', why: 'Các chữ số: 2, 0, 2, 0, 2, 0, 2 — có 4 chữ số 2.' },
    { sec: 'So sánh đơn vị', name: 'Câu 8', pts: 1, text: 'So sánh 5 tấn và 4 900 kg:', opts: o4('5 tấn < 4 900 kg', '5 tấn = 4 900 kg', '5 tấn > 4 900 kg', 'Không so sánh được'), ans: 'C', why: '5 tấn = 5 000 kg, mà 5 000 > 4 900 nên 5 tấn > 4 900 kg.' },
    { sec: 'Tổng chữ số', name: 'Câu 9', pts: 1, text: 'Tổng các chữ số của số 999 là bao nhiêu?', opts: o4('18', '9', '999', '27'), ans: 'D', why: '9 + 9 + 9 = 27.' },
    { sec: 'Số tròn nghìn', name: 'Câu 10', pts: 1, text: 'Số nào dưới đây là số tròn nghìn?', opts: o4('5 000', '5 500', '5 050', '5 005'), ans: 'A', why: 'Số tròn nghìn có ba chữ số tận cùng là 000 → 5 000.' },
  ],
},

/* ═══════════ ĐỀ 29 — TÍNH NHANH & PHỐI HỢP PHÉP TÍNH ═══════════ */
{
  id: 7419, title: 'Đề 29 · Tính nhanh và phối hợp phép tính', time: 20,
  questions: [
    { sec: 'Tính nhanh', name: 'Câu 1', pts: 1, text: '4 × 25 × 13 = ?', opts: o4('1 200', '1 300', '130', '1 250'), ans: 'B', why: '4 × 25 = 100, rồi 100 × 13 = 1 300.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: '2 × 5 × 8 × 5 = ?', opts: o4('400', '200', '800', '80'), ans: 'A', why: '2 × 5 = 10, 10 × 8 = 80, 80 × 5 = 400.' },
    { sec: 'Tính nhanh', name: 'Câu 3', pts: 1, text: '125 × 8 × 3 = ?', opts: o4('1 000', '375', '3 000', '3 375'), ans: 'C', why: '125 × 8 = 1 000, rồi 1 000 × 3 = 3 000.' },
    { sec: 'Tính nhanh', name: 'Câu 4', pts: 1, text: '45 + 55 + 32 = ?', opts: o4('132', '122', '142', '100'), ans: 'A', why: '45 + 55 = 100, rồi 100 + 32 = 132.' },
    { sec: 'Nhân với tổng', name: 'Câu 5', pts: 1, text: '27 × 4 + 27 × 6 = ?', opts: o4('108', '162', '297', '270'), ans: 'D', why: '27 × 4 + 27 × 6 = 27 × (4 + 6) = 27 × 10 = 270.' },
    { sec: 'Nhân với 9', name: 'Câu 6', pts: 1, text: '99 × 5 = ?', opts: o4('505', '495', '450', '595'), ans: 'B', why: '99 × 5 = 100 × 5 − 5 = 500 − 5 = 495.' },
    { sec: 'Phối hợp', name: 'Câu 7', pts: 1, text: '36 × 5 : 9 = ?', opts: o4('20', '180', '4', '45'), ans: 'A', why: '36 × 5 = 180, rồi 180 : 9 = 20.' },
    { sec: 'Phối hợp', name: 'Câu 8', pts: 1, text: '(100 − 20) : 4 = ?', opts: o4('80', '25', '20', '16'), ans: 'C', why: '100 − 20 = 80, rồi 80 : 4 = 20.' },
    { sec: 'Nhân với tổng', name: 'Câu 9', pts: 1, text: '8 × 7 + 8 × 3 = ?', opts: o4('56', '24', '88', '80'), ans: 'D', why: '8 × 7 + 8 × 3 = 8 × (7 + 3) = 8 × 10 = 80.' },
    { sec: 'Trừ liên tiếp', name: 'Câu 10', pts: 1, text: '1 000 − 1 − 2 − 3 = ?', opts: o4('994', '996', '1 006', '990'), ans: 'A', why: '1 000 − (1 + 2 + 3) = 1 000 − 6 = 994.' },
  ],
},

/* ═══════════ ĐỀ 30 — TỔNG HỢP CUỐI ═══════════ */
{
  id: 7420, title: 'Đề 30 · Tổng hợp cuối', time: 20,
  questions: [
    { sec: 'Đọc số', name: 'Câu 1', pts: 1, text: 'Số 405 000 000 đọc là:', opts: o4('Bốn trăm năm triệu', 'Bốn trăm linh năm triệu', 'Bốn trăm linh năm nghìn', 'Bốn mươi lăm triệu'), ans: 'B', why: '405 000 000 đọc là "bốn trăm linh năm triệu".' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: '12 345 − 6 789 = ?', opts: o4('5 556', '5 656', '5 546', '6 556'), ans: 'A', why: '12 345 − 6 789 = 5 556.' },
    { sec: 'Chia hết', name: 'Câu 3', pts: 1, text: 'Số nào chia hết cho cả 2, 3 và 5?', opts: o4('130', '140', '120', '160'), ans: 'C', why: '120 tận cùng 0 (chia hết 2 và 5) và 1+2+0=3 chia hết 3.' },
    { sec: 'Trừ phân số', name: 'Câu 4', pts: 1, text: '6/7 − 2/7 = ?', opts: o4('4/7', '4/14', '8/7', '2/7'), ans: 'A', why: 'Cùng mẫu: 6/7 − 2/7 = 4/7.' },
    { sec: 'Tổng – tỉ', name: 'Câu 5', pts: 1, text: 'Hai số có tổng 84, tỉ số 3 : 4. Số bé là bao nhiêu?', opts: o4('48', '12', '42', '36'), ans: 'D', why: 'Tổng số phần = 3 + 4 = 7; mỗi phần 84 : 7 = 12; số bé = 12 × 3 = 36.' },
    { sec: 'Hình bình hành', name: 'Câu 6', pts: 1, text: 'Hình bình hành có đáy 20 cm, chiều cao 9 cm. Diện tích là bao nhiêu?', opts: o4('29 cm²', '180 cm²', '58 cm²', '200 cm²'), ans: 'B', why: 'S = 20 × 9 = 180 (cm²).' },
    { sec: 'Đơn vị đo', name: 'Câu 7', pts: 1, text: '4 tấn 5 tạ = ? kg', opts: o4('4 500 kg', '4 050 kg', '450 kg', '45 000 kg'), ans: 'A', why: '4 tấn = 4 000 kg, 5 tạ = 500 kg → 4 500 kg.' },
    { sec: 'Trung bình cộng', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của 22, 28, 25 là bao nhiêu?', opts: o4('75', '24', '25', '26'), ans: 'C', why: '(22 + 28 + 25) : 3 = 75 : 3 = 25.' },
    { sec: 'Hình thoi', name: 'Câu 9', pts: 1, text: 'Hình thoi có hai đường chéo 16 cm và 9 cm. Diện tích là bao nhiêu?', opts: o4('144 cm²', '25 cm²', '50 cm²', '72 cm²'), ans: 'D', why: 'S = (16 × 9) : 2 = 144 : 2 = 72 (cm²).' },
    { sec: 'Phân số của số', name: 'Câu 10', pts: 1, text: '3/4 của 100 là bao nhiêu?', opts: o4('75', '25', '300', '50'), ans: 'A', why: '100 : 4 = 25, rồi 25 × 3 = 75.' },
  ],
},

];

SUBJECTS.push({
  id: 'toan4', name: 'Toán', short: 'Toán 4', icon: '🔢', grade: 4,
  exams: TOAN4_EXAMS, ready: true,
  heroTitle: 'Toán lớp 4 — số đến lớp triệu, dấu hiệu chia hết, phân số, tìm hai số và hình học',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
