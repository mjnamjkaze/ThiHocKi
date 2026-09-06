// TOÁN TƯ DUY — LỚP 4
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Biên soạn theo PHONG CÁCH các bài toán tư duy – bồi dưỡng HSG quốc tế (Trung Quốc: gà và
// chó / trồng cây / tổng – hiệu – tỉ; Nga: số chẵn lẻ, chữ số, cắt chia; Úc/Kangaroo: đếm
// hình, suy luận), KHÔNG sao chép nguyên văn. Số liệu ở mức HSG cấp trường/huyện Việt Nam.

const TTD4_EXAMS = [

/* ═══════════ ĐỀ 1 — GÀ VÀ CHÓ (SỐ CHÂN, SỐ ĐẦU) ═══════════ */
{
  id: 5811, title: 'Đề 1 · Gà và chó (chân và đầu)', time: 20,
  questions: [
    { sec: 'Gà và chó', name: 'Câu 1', pts: 1, text: 'Vừa gà vừa chó có 10 con, đếm được 28 chân. Có mấy con chó?', opts: o4('4', '6', '3', '5'), ans: 'A', why: 'Giả sử toàn gà: 10 × 2 = 20 chân, thiếu 28 − 20 = 8; mỗi con chó hơn gà 2 chân nên có 8 : 2 = 4 con chó.' },
    { sec: 'Gà và chó', name: 'Câu 2', pts: 1, text: 'Vừa gà vừa chó có 10 con, 28 chân. Có mấy con gà?', opts: o4('6', '4', '5', '7'), ans: 'A', why: 'Có 4 con chó nên số gà = 10 − 4 = 6 con.' },
    { sec: 'Gà và chó', name: 'Câu 3', pts: 1, text: 'Gà và chó có 8 con, 22 chân. Có mấy con chó?', opts: o4('3', '4', '5', '2'), ans: 'A', why: 'Toàn gà: 16 chân, thiếu 6; 6 : 2 = 3 con chó.' },
    { sec: 'Gà và thỏ', name: 'Câu 4', pts: 1, text: 'Gà và thỏ có 12 con, 40 chân. Có mấy con thỏ?', opts: o4('8', '4', '6', '10'), ans: 'A', why: 'Toàn gà: 24 chân, thiếu 16; 16 : 2 = 8 con thỏ.' },
    { sec: 'Gà và chó', name: 'Câu 5', pts: 1, text: 'Gà và chó có 5 con, 14 chân. Có mấy con gà?', opts: o4('3', '2', '4', '1'), ans: 'A', why: 'Toàn gà: 10 chân, thiếu 4; 4 : 2 = 2 con chó, nên gà = 5 − 2 = 3.' },
    { sec: 'Xe cộ', name: 'Câu 6', pts: 1, text: 'Gà và chó có 7 con, 20 chân. Có mấy con chó?', opts: o4('3', '4', '2', '5'), ans: 'A', why: 'Toàn gà: 14 chân, thiếu 6; 6 : 2 = 3 con chó.' },
    { sec: 'Gà và chó', name: 'Câu 7', pts: 1, text: 'Gà và chó có 9 con, 24 chân. Có mấy con chó?', opts: o4('3', '4', '5', '6'), ans: 'A', why: 'Toàn gà: 18 chân, thiếu 6; 6 : 2 = 3 con chó.' },
    { sec: 'Gà và chó', name: 'Câu 8', pts: 1, text: 'Trong sân đếm được 6 cái đầu và 18 cái chân (gà và chó). Có mấy con chó?', opts: o4('3', '2', '4', '5'), ans: 'A', why: 'Toàn gà: 12 chân, thiếu 6; 6 : 2 = 3 con chó.' },
    { sec: 'Xe cộ', name: 'Câu 9', pts: 1, text: 'Bãi xe có xe máy (2 bánh) và ô tô (4 bánh), tất cả 5 xe, 16 bánh. Có mấy ô tô?', opts: o4('3', '2', '4', '1'), ans: 'A', why: 'Toàn xe máy: 10 bánh, thiếu 6; 6 : 2 = 3 ô tô.' },
    { sec: 'Gà và thỏ', name: 'Câu 10', pts: 1, text: 'Gà và thỏ có 15 con, 40 chân. Có mấy con thỏ?', opts: o4('5', '10', '8', '6'), ans: 'A', why: 'Toàn gà: 30 chân, thiếu 10; 10 : 2 = 5 con thỏ.' },
  ],
},

/* ═══════════ ĐỀ 2 — TRỒNG CÂY, CƯA GỖ ═══════════ */
{
  id: 5812, title: 'Đề 2 · Trồng cây và cưa gỗ', time: 20,
  questions: [
    { sec: 'Trồng cây', name: 'Câu 1', pts: 1, text: 'Trồng cây dọc một đoạn đường thẳng dài 10 m, cây cách nhau 2 m, trồng cả hai đầu. Có mấy cây?', opts: o4('5', '6', '4', '11'), ans: 'B', why: 'Số khoảng = 10 : 2 = 5; trồng cả hai đầu nên số cây = 5 + 1 = 6.' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Đường dài 20 m, trồng cây cách nhau 5 m, cả hai đầu. Có mấy cây?', opts: o4('4', '5', '6', '20'), ans: 'B', why: 'Số khoảng = 20 : 5 = 4; số cây = 4 + 1 = 5.' },
    { sec: 'Khép kín', name: 'Câu 3', pts: 1, text: 'Đóng cọc rào quanh vườn (khép kín) có chu vi 40 m, cọc cách nhau 4 m. Cần mấy cọc?', opts: o4('10', '11', '9', '40'), ans: 'A', why: 'Đường khép kín: số cọc = số khoảng = 40 : 4 = 10.' },
    { sec: 'Cưa gỗ', name: 'Câu 4', pts: 1, text: 'Cưa một khúc gỗ thành 5 đoạn thì cần mấy nhát cưa?', opts: o4('4', '5', '6', '3'), ans: 'A', why: 'Số nhát cưa = số đoạn − 1 = 5 − 1 = 4 nhát.' },
    { sec: 'Cưa gỗ', name: 'Câu 5', pts: 1, text: 'Cưa 3 nhát trên một khúc gỗ thì được mấy đoạn?', opts: o4('3', '4', '5', '2'), ans: 'B', why: 'Số đoạn = số nhát + 1 = 3 + 1 = 4 đoạn.' },
    { sec: 'Trồng cây', name: 'Câu 6', pts: 1, text: 'Trồng cây HAI BÊN đường dài 100 m, cây cách 10 m, trồng cả hai đầu. Có tất cả mấy cây?', opts: o4('11', '20', '22', '10'), ans: 'C', why: 'Một bên: 100 : 10 + 1 = 11 cây; hai bên: 11 × 2 = 22 cây.' },
    { sec: 'Bậc thang', name: 'Câu 7', pts: 1, text: 'Từ tầng 1 lên tầng 4, mỗi tầng có 20 bậc. Phải leo bao nhiêu bậc?', opts: o4('80', '60', '40', '100'), ans: 'B', why: 'Từ tầng 1 lên tầng 4 phải qua 3 tầng: 3 × 20 = 60 bậc.' },
    { sec: 'Gõ chuông', name: 'Câu 8', pts: 1, text: 'Đồng hồ đánh 6 tiếng "boong" hết 5 giây. Hỏi đánh 12 tiếng hết mấy giây?', opts: o4('10', '11', '12', '6'), ans: 'B', why: '6 tiếng có 5 khoảng = 5 giây → 1 khoảng 1 giây; 12 tiếng có 11 khoảng = 11 giây.' },
    { sec: 'Khép kín', name: 'Câu 9', pts: 1, text: 'Trồng cây quanh một hồ tròn có chu vi 60 m, cây cách nhau 6 m. Có mấy cây?', opts: o4('10', '11', '9', '12'), ans: 'A', why: 'Đường khép kín: số cây = 60 : 6 = 10.' },
    { sec: 'Trồng cây', name: 'Câu 10', pts: 1, text: 'Trồng cây trên đoạn 12 m, cây cách 3 m, chỉ trồng ở MỘT đầu. Có mấy cây?', opts: o4('4', '5', '3', '6'), ans: 'A', why: 'Chỉ trồng một đầu nên số cây = số khoảng = 12 : 3 = 4.' },
  ],
},

/* ═══════════ ĐỀ 3 — TỔNG – HIỆU – TỈ, TUỔI ═══════════ */
{
  id: 5813, title: 'Đề 3 · Tổng – hiệu – tỉ và bài toán tuổi', time: 20,
  questions: [
    { sec: 'Tổng – hiệu', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 30, hiệu 6. Số lớn là bao nhiêu?', opts: o4('18', '12', '24', '15'), ans: 'A', why: 'Số lớn = (30 + 6) : 2 = 18.' },
    { sec: 'Tổng – hiệu', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 30, hiệu 6. Số bé là bao nhiêu?', opts: o4('12', '18', '24', '6'), ans: 'A', why: 'Số bé = (30 − 6) : 2 = 12.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 24, số lớn gấp đôi số bé. Số bé là bao nhiêu?', opts: o4('8', '16', '6', '12'), ans: 'A', why: 'Tổng số phần = 1 + 2 = 3; số bé = 24 : 3 = 8.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 4', pts: 1, text: 'Số lớn gấp 4 lần số bé, hiệu là 15. Số bé là bao nhiêu?', opts: o4('5', '3', '20', '4'), ans: 'A', why: 'Hiệu số phần = 4 − 1 = 3; số bé = 15 : 3 = 5.' },
    { sec: 'Tuổi', name: 'Câu 5', pts: 1, text: 'Bố hơn con 28 tuổi, tuổi bố gấp 5 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('7', '35', '5', '14'), ans: 'A', why: 'Tuổi con = 28 : (5 − 1) = 7.' },
    { sec: 'Tuổi', name: 'Câu 6', pts: 1, text: 'Tuổi mẹ và con cộng lại 40, tuổi mẹ gấp 3 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('10', '30', '13', '8'), ans: 'A', why: 'Tổng số phần = 1 + 3 = 4; tuổi con = 40 : 4 = 10.' },
    { sec: 'Tổng – hiệu', name: 'Câu 7', pts: 1, text: 'Hai số có tổng 100, hiệu 20. Số lớn là bao nhiêu?', opts: o4('60', '40', '80', '50'), ans: 'A', why: 'Số lớn = (100 + 20) : 2 = 60.' },
    { sec: 'Tổng – hiệu', name: 'Câu 8', pts: 1, text: 'Anh và em có tổng số tuổi là 18, anh hơn em 4 tuổi. Anh bao nhiêu tuổi?', opts: o4('11', '7', '9', '14'), ans: 'A', why: 'Tuổi anh = (18 + 4) : 2 = 11.' },
    { sec: 'Tuổi', name: 'Câu 9', pts: 1, text: '3 năm nữa con tròn 10 tuổi. Hiện nay con bao nhiêu tuổi?', opts: o4('7', '13', '10', '3'), ans: 'A', why: 'Hiện nay con = 10 − 3 = 7 tuổi.' },
    { sec: 'Tuổi', name: 'Câu 10', pts: 1, text: 'Cách đây 2 năm con 5 tuổi. Hiện nay con bao nhiêu tuổi?', opts: o4('7', '3', '5', '9'), ans: 'A', why: 'Hiện nay con = 5 + 2 = 7 tuổi.' },
  ],
},

/* ═══════════ ĐỀ 4 — DÃY SỐ VÀ QUY LUẬT ═══════════ */
{
  id: 5814, title: 'Đề 4 · Dãy số và quy luật', time: 20,
  questions: [
    { sec: 'Dãy số', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 1, 4, 7, 10, ...?', opts: o4('12', '13', '14', '11'), ans: 'B', why: 'Dãy cách nhau 3: sau 10 là 13.' },
    { sec: 'Dãy số', name: 'Câu 2', pts: 1, text: 'Số tiếp theo: 2, 6, 12, 20, ...?', opts: o4('28', '30', '32', '26'), ans: 'B', why: 'Khoảng cách tăng dần 4, 6, 8, 10: sau 20 là 20 + 10 = 30.' },
    { sec: 'Dãy số', name: 'Câu 3', pts: 1, text: 'Số tiếp theo: 1, 2, 4, 7, 11, ...?', opts: o4('15', '16', '14', '17'), ans: 'B', why: 'Khoảng cách tăng 1, 2, 3, 4, 5: sau 11 là 11 + 5 = 16.' },
    { sec: 'Tổng dãy', name: 'Câu 4', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 10 bằng bao nhiêu?', opts: o4('45', '55', '50', '100'), ans: 'B', why: 'Ghép cặp (1+10)+(2+9)+... = 11 × 5 = 55.' },
    { sec: 'Tổng dãy', name: 'Câu 5', pts: 1, text: 'Tổng các số từ 1 đến 100 bằng bao nhiêu?', opts: o4('5050', '5000', '1000', '10000'), ans: 'A', why: 'Có 50 cặp, mỗi cặp bằng 101: 101 × 50 = 5050.' },
    { sec: 'Dãy số', name: 'Câu 6', pts: 1, text: 'Số tiếp theo: 1, 3, 6, 10, 15, ...?', opts: o4('20', '21', '18', '25'), ans: 'B', why: 'Khoảng cách tăng 2, 3, 4, 5, 6: sau 15 là 15 + 6 = 21.' },
    { sec: 'Số thứ n', name: 'Câu 7', pts: 1, text: 'Số thứ 5 trong dãy 2, 4, 6, 8, ... là số nào?', opts: o4('10', '12', '8', '14'), ans: 'A', why: 'Dãy chẵn: số thứ 5 là 2 × 5 = 10.' },
    { sec: 'Số thứ n', name: 'Câu 8', pts: 1, text: 'Số thứ 6 trong dãy 100, 90, 80, ... là số nào?', opts: o4('50', '60', '40', '70'), ans: 'A', why: '100, 90, 80, 70, 60, 50 — số thứ 6 là 50.' },
    { sec: 'Dãy số', name: 'Câu 9', pts: 1, text: 'Số tiếp theo: 1, 2, 4, 8, 16, ...?', opts: o4('24', '32', '20', '30'), ans: 'B', why: 'Mỗi số gấp đôi số trước: 16 × 2 = 32.' },
    { sec: 'Đếm số hạng', name: 'Câu 10', pts: 1, text: 'Dãy 5, 10, 15, ..., 50 có bao nhiêu số?', opts: o4('9', '10', '11', '50'), ans: 'B', why: 'Số số hạng = (50 − 5) : 5 + 1 = 10.' },
  ],
},

/* ═══════════ ĐỀ 5 — ĐẾM HÌNH, ĐẾM CÁCH ═══════════ */
{
  id: 5815, title: 'Đề 5 · Đếm hình và đếm cách', time: 20,
  questions: [
    { sec: 'Đếm hình vuông', name: 'Câu 1', pts: 1, text: 'Một hình vuông lớn được chia thành 4 ô vuông nhỏ (lưới 2×2). Đếm được TẤT CẢ bao nhiêu hình vuông?', opts: o4('4', '5', '6', '8'), ans: 'B', why: 'Có 4 hình vuông nhỏ và 1 hình vuông lớn: 4 + 1 = 5.' },
    { sec: 'Đếm ô vuông', name: 'Câu 2', pts: 1, text: 'Lưới 3×3 ô vuông nhỏ có bao nhiêu ô vuông nhỏ (loại 1×1)?', opts: o4('6', '9', '12', '3'), ans: 'B', why: 'Lưới 3 hàng × 3 cột = 9 ô vuông nhỏ.' },
    { sec: 'Đoạn thẳng', name: 'Câu 3', pts: 1, text: 'Trên một đường thẳng có 4 điểm. Nối hai điểm bất kì thì có bao nhiêu đoạn thẳng?', opts: o4('4', '5', '6', '8'), ans: 'C', why: 'Số đoạn = 3 + 2 + 1 = 6.' },
    { sec: 'Đoạn thẳng', name: 'Câu 4', pts: 1, text: 'Trên một đường thẳng có 5 điểm. Có bao nhiêu đoạn thẳng?', opts: o4('8', '10', '12', '5'), ans: 'B', why: 'Số đoạn = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Giao điểm', name: 'Câu 5', pts: 1, text: '3 đường thẳng cắt nhau nhiều nhất tạo ra bao nhiêu giao điểm?', opts: o4('2', '3', '4', '6'), ans: 'B', why: 'Cứ 2 đường cắt nhau tạo 1 điểm: 3 cặp đường → 3 giao điểm.' },
    { sec: 'Đếm ô', name: 'Câu 6', pts: 1, text: 'Một hình chữ nhật được chia thành lưới 2 hàng × 3 cột. Có bao nhiêu ô nhỏ?', opts: o4('5', '6', '8', '9'), ans: 'B', why: '2 × 3 = 6 ô nhỏ.' },
    { sec: 'Đếm cách', name: 'Câu 7', pts: 1, text: 'Từ nhà đến trường có 3 con đường, từ trường đến chợ có 2 con đường. Đi từ nhà qua trường rồi tới chợ có mấy cách?', opts: o4('5', '6', '3', '2'), ans: 'B', why: 'Mỗi đường tới trường lại có 2 cách tới chợ: 3 × 2 = 6 cách.' },
    { sec: 'Thi đấu', name: 'Câu 8', pts: 1, text: '4 đội bóng đấu vòng tròn, mỗi cặp gặp nhau đúng 1 trận. Có bao nhiêu trận?', opts: o4('4', '5', '6', '8'), ans: 'C', why: 'Số trận = 3 + 2 + 1 = 6.' },
    { sec: 'Bắt tay', name: 'Câu 9', pts: 1, text: '5 người gặp nhau, mỗi người bắt tay một lần với mỗi người khác. Có bao nhiêu cái bắt tay?', opts: o4('8', '10', '12', '20'), ans: 'B', why: 'Số bắt tay = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Đoạn thẳng', name: 'Câu 10', pts: 1, text: '4 điểm (không có 3 điểm nào thẳng hàng) nối từng đôi được mấy đoạn thẳng?', opts: o4('4', '5', '6', '8'), ans: 'C', why: 'Số đoạn = 3 + 2 + 1 = 6.' },
  ],
},

/* ═══════════ ĐỀ 6 — SUY LUẬN LOGIC ═══════════ */
{
  id: 5816, title: 'Đề 6 · Suy luận logic', time: 20,
  questions: [
    { sec: 'Suy luận', name: 'Câu 1', pts: 1, text: 'An, Bình, Cường. An không cao nhất, Cường thấp nhất. Ai cao nhất?', opts: o4('An', 'Bình', 'Cường', 'Không rõ'), ans: 'B', why: 'An không cao nhất, Cường thấp nhất nên Bình cao nhất.' },
    { sec: 'Suy luận', name: 'Câu 2', pts: 1, text: 'Ba bạn mặc áo đỏ, xanh, vàng. Nam không mặc đỏ, cũng không mặc xanh. Nam mặc áo màu gì?', opts: o4('Vàng', 'Đỏ', 'Xanh', 'Trắng'), ans: 'A', why: 'Loại đỏ và xanh, còn lại là vàng.' },
    { sec: 'Tuổi', name: 'Câu 3', pts: 1, text: 'Nam hơn Bình 2 tuổi, Bình hơn Cường 3 tuổi. Nam hơn Cường mấy tuổi?', opts: o4('5', '1', '6', '3'), ans: 'A', why: 'Nam hơn Cường = 2 + 3 = 5 tuổi.' },
    { sec: 'Thứ trong tuần', name: 'Câu 4', pts: 1, text: 'Hôm nay là thứ Sáu. Ba ngày nữa là thứ mấy?', opts: o4('Thứ Hai', 'Chủ nhật', 'Thứ Bảy', 'Thứ Ba'), ans: 'A', why: 'Thứ Sáu + 3 ngày: Bảy, Chủ nhật, Hai → thứ Hai.' },
    { sec: 'Ngày', name: 'Câu 5', pts: 1, text: 'Sinh nhật vào ngày 10, hôm nay ngày 7. Còn mấy ngày nữa đến sinh nhật?', opts: o4('3', '2', '4', '17'), ans: 'A', why: '10 − 7 = 3 ngày.' },
    { sec: 'Bắt tay', name: 'Câu 6', pts: 1, text: '4 bạn, mỗi bạn bắt tay một lần với mỗi bạn khác. Tổng số cái bắt tay là bao nhiêu?', opts: o4('4', '5', '6', '8'), ans: 'C', why: 'Số bắt tay = 3 + 2 + 1 = 6.' },
    { sec: 'Sắp xếp', name: 'Câu 7', pts: 1, text: '3 bạn xếp thành một hàng dọc thì có bao nhiêu cách xếp khác nhau?', opts: o4('3', '4', '6', '9'), ans: 'C', why: 'Số cách = 3 × 2 × 1 = 6.' },
    { sec: 'Đồng hồ', name: 'Câu 8', pts: 1, text: 'Lúc 3 giờ đúng, kim giờ và kim phút tạo thành góc gì?', opts: o4('Góc vuông', 'Góc nhọn', 'Góc tù', 'Góc bẹt'), ans: 'A', why: 'Lúc 3 giờ, hai kim vuông góc nhau (góc 90° = góc vuông).' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Một số cộng với 5 thì được 12. Số đó là bao nhiêu?', opts: o4('7', '17', '6', '8'), ans: 'A', why: 'Số đó = 12 − 5 = 7.' },
    { sec: 'Tìm số', name: 'Câu 10', pts: 1, text: 'Gấp 3 lần một số thì được 21. Số đó là bao nhiêu?', opts: o4('7', '18', '24', '6'), ans: 'A', why: 'Số đó = 21 : 3 = 7.' },
  ],
},

/* ═══════════ ĐỀ 7 — CHIA HẾT VÀ SỐ HỌC ═══════════ */
{
  id: 5817, title: 'Đề 7 · Chia hết và số học', time: 20,
  questions: [
    { sec: 'Chia hết', name: 'Câu 1', pts: 1, text: 'Số nhỏ nhất (khác 0) chia hết cho cả 2 và 3 là số nào?', opts: o4('6', '2', '3', '12'), ans: 'A', why: '6 chia hết cho cả 2 và 3, và là số nhỏ nhất như vậy.' },
    { sec: 'Chia hết', name: 'Câu 2', pts: 1, text: 'Số nhỏ nhất (khác 0) chia hết cho cả 2 và 5 là số nào?', opts: o4('10', '2', '5', '20'), ans: 'A', why: '10 chia hết cho cả 2 và 5, và là số nhỏ nhất như vậy.' },
    { sec: 'Chia hết', name: 'Câu 3', pts: 1, text: 'Số nào chia hết cho 3: 20, 21, 22, 25?', opts: o4('21', '20', '22', '25'), ans: 'A', why: '2 + 1 = 3 chia hết cho 3 nên 21 chia hết cho 3.' },
    { sec: 'Số lẻ', name: 'Câu 4', pts: 1, text: 'Số lẻ lớn nhất có 2 chữ số là số nào?', opts: o4('99', '98', '97', '89'), ans: 'A', why: '99 là số lẻ lớn nhất có 2 chữ số.' },
    { sec: 'Số chẵn', name: 'Câu 5', pts: 1, text: 'Số chẵn bé nhất có 3 chữ số là số nào?', opts: o4('100', '102', '101', '110'), ans: 'A', why: '100 là số chẵn bé nhất có 3 chữ số.' },
    { sec: 'Chẵn lẻ', name: 'Câu 6', pts: 1, text: 'Tổng của hai số lẻ là số chẵn hay số lẻ?', opts: o4('Số chẵn', 'Số lẻ', 'Lúc chẵn lúc lẻ', 'Không xác định'), ans: 'A', why: 'Ví dụ 3 + 5 = 8; tổng hai số lẻ luôn là số chẵn.' },
    { sec: 'Tích', name: 'Câu 7', pts: 1, text: '2 × 3 × 5 bằng bao nhiêu?', opts: o4('30', '10', '15', '25'), ans: 'A', why: '2 × 3 = 6, 6 × 5 = 30.' },
    { sec: 'Số nguyên tố', name: 'Câu 8', pts: 1, text: 'Số nguyên tố nhỏ nhất là số nào?', opts: o4('2', '1', '3', '0'), ans: 'A', why: 'Số nguyên tố nhỏ nhất là 2 (1 không phải số nguyên tố).' },
    { sec: 'Ước', name: 'Câu 9', pts: 1, text: 'Số nào là ước của 12: 5, 7, 6, 8?', opts: o4('6', '5', '7', '8'), ans: 'A', why: '12 : 6 = 2 (không dư) nên 6 là ước của 12.' },
    { sec: 'Bội', name: 'Câu 10', pts: 1, text: 'Số nào là bội của 5: 12, 14, 15, 16?', opts: o4('15', '12', '14', '16'), ans: 'A', why: '15 = 5 × 3 nên 15 là bội của 5.' },
  ],
},

/* ═══════════ ĐỀ 8 — TÍNH NHANH ═══════════ */
{
  id: 5818, title: 'Đề 8 · Tính nhanh, tính thông minh', time: 20,
  questions: [
    { sec: 'Tính nhanh', name: 'Câu 1', pts: 1, text: '25 × 4 = ?', opts: o4('100', '90', '110', '104'), ans: 'A', why: '25 × 4 = 100.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: '125 × 8 = ?', opts: o4('1000', '900', '1250', '888'), ans: 'A', why: '125 × 8 = 1000.' },
    { sec: 'Tính nhanh', name: 'Câu 3', pts: 1, text: '99 + 99 = ?', opts: o4('198', '188', '199', '200'), ans: 'A', why: '99 + 99 = 200 − 2 = 198.' },
    { sec: 'Tổng dãy', name: 'Câu 4', pts: 1, text: '1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = ?', opts: o4('45', '40', '50', '36'), ans: 'A', why: 'Ghép cặp (1+9)+(2+8)+(3+7)+(4+6) = 40, cộng 5 = 45.' },
    { sec: 'Tổng chẵn', name: 'Câu 5', pts: 1, text: '2 + 4 + 6 + 8 + 10 = ?', opts: o4('30', '20', '40', '25'), ans: 'A', why: '(2+10)+(4+8)+6 = 12 + 12 + 6 = 30.' },
    { sec: 'Tính nhanh', name: 'Câu 6', pts: 1, text: '100 − 1 − 2 − 3 − 4 = ?', opts: o4('90', '94', '89', '86'), ans: 'A', why: '100 − (1+2+3+4) = 100 − 10 = 90.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: '5 × 12 × 2 = ?', opts: o4('120', '100', '110', '130'), ans: 'A', why: '5 × 2 = 10, 10 × 12 = 120.' },
    { sec: 'Tính nhanh', name: 'Câu 8', pts: 1, text: '50 × 2 = ?', opts: o4('100', '52', '150', '25'), ans: 'A', why: '50 × 2 = 100.' },
    { sec: 'Tính nhanh', name: 'Câu 9', pts: 1, text: '(7 + 3) × 10 = ?', opts: o4('100', '73', '37', '20'), ans: 'A', why: '7 + 3 = 10, 10 × 10 = 100.' },
    { sec: 'Chia', name: 'Câu 10', pts: 1, text: '1000 : 8 = ?', opts: o4('125', '120', '150', '80'), ans: 'A', why: '1000 : 8 = 125.' },
  ],
},

/* ═══════════ ĐỀ 9 — TOÁN ĐỐ THỰC TẾ ═══════════ */
{
  id: 5819, title: 'Đề 9 · Toán đố thực tế', time: 20,
  questions: [
    { sec: 'Giá tiền', name: 'Câu 1', pts: 1, text: 'Một cái bút giá 3 000 đồng. 4 cái bút giá bao nhiêu?', opts: o4('12 000 đồng', '7 000 đồng', '9 000 đồng', '34 000 đồng'), ans: 'A', why: '3 000 × 4 = 12 000 (đồng).' },
    { sec: 'Giá tiền', name: 'Câu 2', pts: 1, text: '5 quyển vở giá 20 000 đồng. 1 quyển giá bao nhiêu?', opts: o4('4 000 đồng', '5 000 đồng', '100 000 đồng', '15 000 đồng'), ans: 'A', why: '20 000 : 5 = 4 000 (đồng).' },
    { sec: 'Tiền thừa', name: 'Câu 3', pts: 1, text: 'Mua 2 cái bánh, mỗi cái 5 000 đồng, đưa 20 000 đồng. Được thối lại bao nhiêu?', opts: o4('10 000 đồng', '5 000 đồng', '15 000 đồng', '2 000 đồng'), ans: 'A', why: 'Phải trả 5 000 × 2 = 10 000; thối lại 20 000 − 10 000 = 10 000 (đồng).' },
    { sec: 'Tá', name: 'Câu 4', pts: 1, text: 'Một tá có 12 cái. 2 tá bút có bao nhiêu cái?', opts: o4('24', '12', '14', '20'), ans: 'A', why: '12 × 2 = 24 cái.' },
    { sec: 'Thời gian', name: 'Câu 5', pts: 1, text: 'Nửa giờ có bao nhiêu phút?', opts: o4('30', '60', '15', '45'), ans: 'A', why: '1 giờ = 60 phút, nửa giờ = 30 phút.' },
    { sec: 'Đố mẹo', name: 'Câu 6', pts: 1, text: '3 con gà đẻ 3 quả trứng trong 3 ngày. Vậy 1 con gà đẻ mấy quả trứng trong 3 ngày?', opts: o4('1', '3', '9', '2'), ans: 'A', why: '3 con đẻ 3 quả trong 3 ngày, nghĩa là mỗi con đẻ 1 quả trong 3 ngày.' },
    { sec: 'Cắt dây', name: 'Câu 7', pts: 1, text: 'Cắt một sợi dây thành 4 đoạn thì cần mấy nhát cắt?', opts: o4('3', '4', '5', '2'), ans: 'A', why: 'Số nhát cắt = số đoạn − 1 = 4 − 1 = 3.' },
    { sec: 'Chia đều', name: 'Câu 8', pts: 1, text: '12 cái kẹo chia đều cho 4 bạn. Mỗi bạn được mấy cái?', opts: o4('3', '4', '6', '8'), ans: 'A', why: '12 : 4 = 3 cái.' },
    { sec: 'Nhân', name: 'Câu 9', pts: 1, text: 'Một xe chở 40 người. 2 xe chở bao nhiêu người?', opts: o4('80', '42', '60', '20'), ans: 'A', why: '40 × 2 = 80 người.' },
    { sec: 'Chia đều', name: 'Câu 10', pts: 1, text: 'Lớp có 30 bạn chia đều thành 5 tổ. Mỗi tổ mấy bạn?', opts: o4('6', '5', '25', '35'), ans: 'A', why: '30 : 5 = 6 bạn.' },
  ],
},

/* ═══════════ ĐỀ 10 — ĐỀ TỔNG HỢP HSG ═══════════ */
{
  id: 5820, title: 'Đề 10 · Tổng hợp bồi dưỡng HSG', time: 20,
  questions: [
    { sec: 'Gà và chó', name: 'Câu 1', pts: 1, text: 'Gà và chó có 10 con, 26 chân. Có mấy con chó?', opts: o4('3', '4', '5', '2'), ans: 'A', why: 'Toàn gà: 20 chân, thiếu 6; 6 : 2 = 3 con chó.' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Trồng cây trên đường 20 m, cách 4 m, cả hai đầu. Có mấy cây?', opts: o4('5', '6', '4', '7'), ans: 'B', why: 'Số cây = 20 : 4 + 1 = 6.' },
    { sec: 'Tổng – hiệu', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 40, hiệu 8. Số lớn là bao nhiêu?', opts: o4('24', '16', '20', '32'), ans: 'A', why: 'Số lớn = (40 + 8) : 2 = 24.' },
    { sec: 'Dãy số', name: 'Câu 4', pts: 1, text: 'Số tiếp theo: 1, 4, 9, 16, ...?', opts: o4('25', '20', '24', '32'), ans: 'A', why: 'Đây là các số chính phương: 1, 4, 9, 16, 25 (5×5).' },
    { sec: 'Bắt tay', name: 'Câu 5', pts: 1, text: '5 người bắt tay nhau, mỗi cặp một lần. Có mấy cái bắt tay?', opts: o4('10', '8', '12', '20'), ans: 'A', why: 'Số bắt tay = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Số học', name: 'Câu 6', pts: 1, text: 'Số bé nhất có 3 chữ số khác nhau là số nào?', opts: o4('102', '100', '123', '120'), ans: 'A', why: 'Số bé nhất có 3 chữ số khác nhau là 102.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: '25 × 4 = ?', opts: o4('100', '90', '104', '80'), ans: 'A', why: '25 × 4 = 100.' },
    { sec: 'Cưa gỗ', name: 'Câu 8', pts: 1, text: 'Cưa một khúc gỗ thành 6 đoạn cần mấy nhát cưa?', opts: o4('5', '6', '4', '7'), ans: 'A', why: 'Số nhát = 6 − 1 = 5.' },
    { sec: 'Tuổi', name: 'Câu 9', pts: 1, text: 'Bố gấp 4 lần tuổi con, bố hơn con 27 tuổi. Con bao nhiêu tuổi?', opts: o4('9', '7', '12', '36'), ans: 'A', why: 'Tuổi con = 27 : (4 − 1) = 9.' },
    { sec: 'Tổng dãy', name: 'Câu 10', pts: 1, text: 'Tổng các số từ 1 đến 20 bằng bao nhiêu?', opts: o4('210', '200', '190', '220'), ans: 'A', why: 'Có 10 cặp, mỗi cặp bằng 21: 21 × 10 = 210.' },
  ],
},

];

SUBJECTS.push({
  id: 'ttd4', name: 'Toán tư duy', short: 'Tư duy 4', icon: '💡', grade: 4,
  exams: TTD4_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 4 — gà và chó, trồng cây, tổng – hiệu – tỉ, dãy số và suy luận',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; dạng bồi dưỡng HSG (Trung Quốc · Nga · Úc)',
});
