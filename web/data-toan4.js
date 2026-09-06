// TOÁN — LỚP 4 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'toan4', name: 'Toán', short: 'Toán 4', icon: '🔢', grade: 4,
  exams: TOAN4_EXAMS, ready: true,
  heroTitle: 'Toán lớp 4 — số đến lớp triệu, dấu hiệu chia hết, phân số, tìm hai số và hình học',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
