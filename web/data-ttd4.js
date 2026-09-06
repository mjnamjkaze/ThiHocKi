// TOÁN TƯ DUY — LỚP 4
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

/* ═══════════ ĐỀ 11 — GÀ VÀ CHÓ (GIẢ THIẾT TẠM) NÂNG CAO ═══════════ */
{
  id: 7701, title: 'Đề 11 · Gà và chó nâng cao', time: 20,
  questions: [
    { sec: 'Gà và chó', name: 'Câu 1', pts: 1, text: 'Vừa gà vừa chó có 20 con, đếm được 56 chân. Có mấy con chó?', opts: o4('8', '7', '6', '10'), ans: 'A', why: 'Giả sử toàn gà: 20 × 2 = 40 chân, thiếu 56 − 40 = 16; mỗi con chó hơn gà 2 chân nên 16 : 2 = 8 con chó.' },
    { sec: 'Gà và chó', name: 'Câu 2', pts: 1, text: 'Vừa gà vừa chó có 20 con, 56 chân. Có mấy con gà?', opts: o4('10', '12', '14', '8'), ans: 'B', why: 'Có 8 con chó nên số gà = 20 − 8 = 12 con.' },
    { sec: 'Gà và thỏ', name: 'Câu 3', pts: 1, text: 'Gà và thỏ có 18 con, 52 chân. Có mấy con thỏ?', opts: o4('9', '7', '8', '10'), ans: 'C', why: 'Toàn gà: 36 chân, thiếu 16; 16 : 2 = 8 con thỏ.' },
    { sec: 'Gà và thỏ', name: 'Câu 4', pts: 1, text: 'Gà và thỏ có 30 con, 90 chân. Có mấy con gà?', opts: o4('12', '18', '20', '15'), ans: 'D', why: 'Toàn gà: 60 chân, thiếu 30; 30 : 2 = 15 con thỏ, nên gà = 30 − 15 = 15 con.' },
    { sec: 'Gà và chó', name: 'Câu 5', pts: 1, text: 'Gà và chó có 12 con, 34 chân. Có mấy con chó?', opts: o4('5', '6', '4', '7'), ans: 'A', why: 'Toàn gà: 24 chân, thiếu 10; 10 : 2 = 5 con chó.' },
    { sec: 'Xe cộ', name: 'Câu 6', pts: 1, text: 'Bãi có xe đạp (2 bánh) và xe ba gác (3 bánh), tất cả 10 xe, 26 bánh. Có mấy xe ba gác?', opts: o4('4', '6', '5', '7'), ans: 'B', why: 'Toàn xe đạp: 20 bánh, thiếu 6; mỗi xe ba gác hơn 1 bánh nên 6 : 1 = 6 xe ba gác.' },
    { sec: 'Gà và chó', name: 'Câu 7', pts: 1, text: 'Gà và chó có 16 con, 44 chân. Có mấy con gà?', opts: o4('8', '6', '10', '12'), ans: 'C', why: 'Toàn gà: 32 chân, thiếu 12; 12 : 2 = 6 con chó, nên gà = 16 − 6 = 10 con.' },
    { sec: 'Gà và chó', name: 'Câu 8', pts: 1, text: 'Trong sân đếm được 25 cái đầu và 80 cái chân (gà và chó). Có mấy con chó?', opts: o4('10', '20', '12', '15'), ans: 'D', why: 'Toàn gà: 50 chân, thiếu 30; 30 : 2 = 15 con chó.' },
    { sec: 'Gà và chó', name: 'Câu 9', pts: 1, text: 'Gà và chó có 8 con, 26 chân. Có mấy con chó?', opts: o4('5', '4', '6', '3'), ans: 'A', why: 'Toàn gà: 16 chân, thiếu 10; 10 : 2 = 5 con chó.' },
    { sec: 'Gà và trâu', name: 'Câu 10', pts: 1, text: 'Đàn có gà và trâu, 14 con, 40 chân. Có mấy con trâu?', opts: o4('8', '6', '7', '5'), ans: 'B', why: 'Toàn gà: 28 chân, thiếu 12; 12 : 2 = 6 con trâu.' },
  ],
},

/* ═══════════ ĐỀ 12 — TRỒNG CÂY, CƯA GỖ, GÕ CHUÔNG ═══════════ */
{
  id: 7702, title: 'Đề 12 · Trồng cây và cưa gỗ nâng cao', time: 20,
  questions: [
    { sec: 'Trồng cây', name: 'Câu 1', pts: 1, text: 'Trồng cây dọc đường thẳng dài 30 m, cây cách nhau 3 m, trồng cả hai đầu. Có mấy cây?', opts: o4('11', '10', '12', '9'), ans: 'A', why: 'Số khoảng = 30 : 3 = 10; trồng cả hai đầu nên số cây = 10 + 1 = 11.' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Đường dài 24 m, trồng cây cách 4 m, chỉ trồng một đầu. Có mấy cây?', opts: o4('7', '6', '5', '8'), ans: 'B', why: 'Chỉ trồng một đầu nên số cây = số khoảng = 24 : 4 = 6.' },
    { sec: 'Khép kín', name: 'Câu 3', pts: 1, text: 'Đóng cọc rào quanh vườn (khép kín) chu vi 48 m, cọc cách 6 m. Cần mấy cọc?', opts: o4('9', '7', '8', '6'), ans: 'C', why: 'Đường khép kín: số cọc = số khoảng = 48 : 6 = 8.' },
    { sec: 'Cưa gỗ', name: 'Câu 4', pts: 1, text: 'Cưa một khúc gỗ thành 8 đoạn thì cần mấy nhát cưa?', opts: o4('8', '6', '9', '7'), ans: 'D', why: 'Số nhát cưa = số đoạn − 1 = 8 − 1 = 7 nhát.' },
    { sec: 'Cưa gỗ', name: 'Câu 5', pts: 1, text: 'Cưa 5 nhát trên một khúc gỗ thì được mấy đoạn?', opts: o4('6', '5', '7', '4'), ans: 'A', why: 'Số đoạn = số nhát + 1 = 5 + 1 = 6 đoạn.' },
    { sec: 'Trồng cây', name: 'Câu 6', pts: 1, text: 'Trồng cây HAI BÊN đường dài 200 m, cây cách 20 m, cả hai đầu. Có tất cả mấy cây?', opts: o4('20', '22', '21', '24'), ans: 'B', why: 'Một bên: 200 : 20 + 1 = 11 cây; hai bên: 11 × 2 = 22 cây.' },
    { sec: 'Bậc thang', name: 'Câu 7', pts: 1, text: 'Từ tầng 1 lên tầng 5, mỗi tầng có 18 bậc. Phải leo bao nhiêu bậc?', opts: o4('90', '54', '72', '80'), ans: 'C', why: 'Từ tầng 1 lên tầng 5 phải qua 4 tầng: 4 × 18 = 72 bậc.' },
    { sec: 'Gõ chuông', name: 'Câu 8', pts: 1, text: 'Đồng hồ đánh 4 tiếng "boong" hết 6 giây. Đánh 7 tiếng hết mấy giây?', opts: o4('10', '14', '9', '12'), ans: 'D', why: '4 tiếng có 3 khoảng = 6 giây → 1 khoảng 2 giây; 7 tiếng có 6 khoảng = 12 giây.' },
    { sec: 'Khép kín', name: 'Câu 9', pts: 1, text: 'Trồng cây quanh hồ tròn chu vi 72 m, cây cách nhau 8 m. Có mấy cây?', opts: o4('9', '10', '8', '12'), ans: 'A', why: 'Đường khép kín: số cây = 72 : 8 = 9.' },
    { sec: 'Cưa gỗ', name: 'Câu 10', pts: 1, text: 'Cưa khúc gỗ dài 10 m thành các đoạn dài 2 m thì cần mấy nhát cưa?', opts: o4('5', '4', '3', '6'), ans: 'B', why: 'Được 10 : 2 = 5 đoạn, số nhát cưa = 5 − 1 = 4 nhát.' },
  ],
},

/* ═══════════ ĐỀ 13 — TỔNG – HIỆU – TỈ NÂNG CAO ═══════════ */
{
  id: 7703, title: 'Đề 13 · Tổng – hiệu – tỉ nâng cao', time: 20,
  questions: [
    { sec: 'Tổng – hiệu', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 84, hiệu 12. Số lớn là bao nhiêu?', opts: o4('48', '36', '54', '40'), ans: 'A', why: 'Số lớn = (84 + 12) : 2 = 48.' },
    { sec: 'Tổng – hiệu', name: 'Câu 2', pts: 1, text: 'Hai số có tổng 84, hiệu 12. Số bé là bao nhiêu?', opts: o4('48', '36', '30', '42'), ans: 'B', why: 'Số bé = (84 − 12) : 2 = 36.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 63, số lớn gấp đôi số bé. Số lớn là bao nhiêu?', opts: o4('21', '40', '42', '45'), ans: 'C', why: 'Tổng số phần = 1 + 2 = 3; số bé = 63 : 3 = 21, số lớn = 21 × 2 = 42.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 4', pts: 1, text: 'Số lớn gấp 5 lần số bé, hiệu là 32. Số bé là bao nhiêu?', opts: o4('6', '7', '10', '8'), ans: 'D', why: 'Hiệu số phần = 5 − 1 = 4; số bé = 32 : 4 = 8.' },
    { sec: 'Tổng – tỉ', name: 'Câu 5', pts: 1, text: 'Hai số có tổng 45, số lớn gấp 4 lần số bé. Số bé là bao nhiêu?', opts: o4('9', '36', '10', '8'), ans: 'A', why: 'Tổng số phần = 1 + 4 = 5; số bé = 45 : 5 = 9.' },
    { sec: 'Tổng – tỉ', name: 'Câu 6', pts: 1, text: 'Hai số có tổng 100, số này gấp 3 lần số kia. Số lớn là bao nhiêu?', opts: o4('25', '75', '60', '80'), ans: 'B', why: 'Tổng số phần = 1 + 3 = 4; số lớn = 100 : 4 × 3 = 75.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 7', pts: 1, text: 'Hiệu hai số là 24, số lớn gấp 3 lần số bé. Số lớn là bao nhiêu?', opts: o4('12', '24', '36', '48'), ans: 'C', why: 'Hiệu số phần = 3 − 1 = 2; số bé = 24 : 2 = 12, số lớn = 12 × 3 = 36.' },
    { sec: 'Tổng – hiệu', name: 'Câu 8', pts: 1, text: 'Hai kho có tổng 120 tấn thóc, kho A hơn kho B 30 tấn. Kho A có bao nhiêu tấn?', opts: o4('45', '60', '90', '75'), ans: 'D', why: 'Kho A = (120 + 30) : 2 = 75 tấn.' },
    { sec: 'Trung bình', name: 'Câu 9', pts: 1, text: 'Trung bình cộng hai số là 20, số này hơn số kia 8. Số lớn là bao nhiêu?', opts: o4('24', '16', '20', '28'), ans: 'A', why: 'Tổng = 20 × 2 = 40; số lớn = (40 + 8) : 2 = 24.' },
    { sec: 'Tổng – tỉ', name: 'Câu 10', pts: 1, text: 'Ba số có tổng 60. Số thứ nhất gấp đôi số thứ hai, số thứ ba bằng số thứ hai. Số thứ nhất là bao nhiêu?', opts: o4('15', '30', '20', '24'), ans: 'B', why: 'Số phần: 2 + 1 + 1 = 4; số thứ hai = 60 : 4 = 15, số thứ nhất = 15 × 2 = 30.' },
  ],
},

/* ═══════════ ĐỀ 14 — BÀI TOÁN TUỔI NÂNG CAO ═══════════ */
{
  id: 7704, title: 'Đề 14 · Bài toán tuổi nâng cao', time: 20,
  questions: [
    { sec: 'Tuổi', name: 'Câu 1', pts: 1, text: 'Bố hơn con 30 tuổi, tuổi bố gấp 6 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('6', '8', '5', '7'), ans: 'A', why: 'Tuổi con = 30 : (6 − 1) = 6.' },
    { sec: 'Tuổi', name: 'Câu 2', pts: 1, text: 'Tuổi mẹ và con cộng lại 44, tuổi mẹ gấp 3 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('12', '11', '10', '13'), ans: 'B', why: 'Tổng số phần = 1 + 3 = 4; tuổi con = 44 : 4 = 11.' },
    { sec: 'Tuổi', name: 'Câu 3', pts: 1, text: 'Anh và em có tổng số tuổi 25, anh hơn em 5 tuổi. Anh bao nhiêu tuổi?', opts: o4('10', '12', '15', '20'), ans: 'C', why: 'Tuổi anh = (25 + 5) : 2 = 15.' },
    { sec: 'Tuổi', name: 'Câu 4', pts: 1, text: 'Con 8 tuổi, bố 38 tuổi. Mấy năm nữa tuổi bố gấp 3 lần tuổi con?', opts: o4('6', '5', '8', '7'), ans: 'D', why: 'Sau 7 năm: con 15, bố 45 = 3 × 15. (38 + x = 3(8 + x) → x = 7.)' },
    { sec: 'Tuổi', name: 'Câu 5', pts: 1, text: '5 năm trước con 6 tuổi. Hiện nay con bao nhiêu tuổi?', opts: o4('11', '6', '16', '1'), ans: 'A', why: 'Hiện nay con = 6 + 5 = 11 tuổi.' },
    { sec: 'Tuổi', name: 'Câu 6', pts: 1, text: '4 năm nữa con tròn 12 tuổi. Hiện nay con bao nhiêu tuổi?', opts: o4('16', '8', '12', '9'), ans: 'B', why: 'Hiện nay con = 12 − 4 = 8 tuổi.' },
    { sec: 'Tuổi', name: 'Câu 7', pts: 1, text: 'Tuổi bố hiện gấp 4 lần tuổi con, tổng tuổi hai bố con là 50. Con bao nhiêu tuổi?', opts: o4('40', '12', '10', '8'), ans: 'C', why: 'Tổng số phần = 1 + 4 = 5; tuổi con = 50 : 5 = 10.' },
    { sec: 'Tuổi', name: 'Câu 8', pts: 1, text: '2 năm nữa tổng số tuổi hai anh em là 26. Hiện nay tổng số tuổi hai anh em là bao nhiêu?', opts: o4('24', '20', '26', '22'), ans: 'D', why: 'Mỗi người tăng 2 tuổi → tổng tăng 4; hiện nay = 26 − 4 = 22.' },
    { sec: 'Tuổi', name: 'Câu 9', pts: 1, text: 'Ông 60 tuổi, cháu 6 tuổi. Tuổi ông gấp mấy lần tuổi cháu?', opts: o4('10', '9', '12', '54'), ans: 'A', why: '60 : 6 = 10 lần.' },
    { sec: 'Tuổi', name: 'Câu 10', pts: 1, text: 'Cách đây 3 năm bố 30 tuổi. Hiện nay bố bao nhiêu tuổi?', opts: o4('27', '33', '30', '36'), ans: 'B', why: 'Hiện nay bố = 30 + 3 = 33 tuổi.' },
  ],
},

/* ═══════════ ĐỀ 15 — DÃY SỐ VÀ QUY LUẬT ═══════════ */
{
  id: 7705, title: 'Đề 15 · Dãy số và quy luật', time: 20,
  questions: [
    { sec: 'Dãy số', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 3, 6, 9, 12, ...?', opts: o4('14', '15', '16', '18'), ans: 'B', why: 'Dãy cách nhau 3: sau 12 là 15.' },
    { sec: 'Dãy số', name: 'Câu 2', pts: 1, text: 'Số tiếp theo: 1, 2, 4, 7, 11, 16, ...?', opts: o4('21', '22', '23', '20'), ans: 'B', why: 'Khoảng cách tăng 1, 2, 3, 4, 5, 6: sau 16 là 16 + 6 = 22.' },
    { sec: 'Dãy số', name: 'Câu 3', pts: 1, text: 'Số tiếp theo: 2, 5, 10, 17, 26, ...?', opts: o4('35', '36', '37', '38'), ans: 'C', why: 'Khoảng cách 3, 5, 7, 9, 11: sau 26 là 26 + 11 = 37.' },
    { sec: 'Dãy số', name: 'Câu 4', pts: 1, text: 'Số tiếp theo: 1, 3, 9, 27, ...?', opts: o4('54', '63', '72', '81'), ans: 'D', why: 'Mỗi số gấp 3 lần số trước: 27 × 3 = 81.' },
    { sec: 'Số thứ n', name: 'Câu 5', pts: 1, text: 'Số thứ 8 trong dãy 100, 95, 90, ... là số nào?', opts: o4('65', '60', '70', '55'), ans: 'A', why: '100, 95, 90, 85, 80, 75, 70, 65 — số thứ 8 là 65.' },
    { sec: 'Tổng dãy', name: 'Câu 6', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 15 bằng bao nhiêu?', opts: o4('120', '105', '135', '150'), ans: 'A', why: 'Có (1 + 15) × 15 : 2 = 16 × 15 : 2 = 120.' },
    { sec: 'Dãy số', name: 'Câu 7', pts: 1, text: 'Số tiếp theo: 1, 4, 9, 16, 25, ...?', opts: o4('30', '36', '49', '32'), ans: 'B', why: 'Đây là các số chính phương: sau 25 (5×5) là 36 (6×6).' },
    { sec: 'Đếm số hạng', name: 'Câu 8', pts: 1, text: 'Dãy 3, 7, 11, 15, ..., 43 có bao nhiêu số?', opts: o4('10', '11', '12', '9'), ans: 'B', why: 'Số số hạng = (43 − 3) : 4 + 1 = 11.' },
    { sec: 'Dãy số', name: 'Câu 9', pts: 1, text: 'Số tiếp theo: 1, 1, 2, 3, 5, 8, ...?', opts: o4('11', '12', '13', '14'), ans: 'C', why: 'Mỗi số bằng tổng hai số trước (Phi-bô-na-xi): 5 + 8 = 13.' },
    { sec: 'Tổng dãy', name: 'Câu 10', pts: 1, text: 'Tổng các số chẵn 2 + 4 + 6 + ... + 20 bằng bao nhiêu?', opts: o4('110', '100', '120', '90'), ans: 'A', why: 'Có 10 số, tổng = (2 + 20) × 10 : 2 = 110.' },
  ],
},

/* ═══════════ ĐỀ 16 — ĐẾM HÌNH ═══════════ */
{
  id: 7706, title: 'Đề 16 · Đếm hình', time: 20,
  questions: [
    { sec: 'Đếm hình vuông', name: 'Câu 1', pts: 1, text: 'Một hình vuông lớn chia thành 4 ô vuông nhỏ (lưới 2×2). Đếm được TẤT CẢ bao nhiêu hình vuông?', opts: o4('5', '4', '6', '9'), ans: 'A', why: 'Có 4 hình vuông nhỏ và 1 hình vuông lớn: 4 + 1 = 5.' },
    { sec: 'Đếm hình vuông', name: 'Câu 2', pts: 1, text: 'Lưới 3×3 ô vuông nhỏ có tất cả bao nhiêu hình vuông (mọi kích cỡ)?', opts: o4('9', '13', '14', '15'), ans: 'C', why: 'Loại 1×1: 9, loại 2×2: 4, loại 3×3: 1; tổng 9 + 4 + 1 = 14.' },
    { sec: 'Đếm tam giác', name: 'Câu 3', pts: 1, text: 'Một tam giác lớn được kẻ một đường thẳng từ đỉnh xuống đáy, chia thành 2 tam giác nhỏ. Đếm được tất cả bao nhiêu tam giác?', opts: o4('2', '3', '4', '5'), ans: 'B', why: '2 tam giác nhỏ và 1 tam giác lớn: 2 + 1 = 3.' },
    { sec: 'Đoạn thẳng', name: 'Câu 4', pts: 1, text: 'Trên một đường thẳng có 5 điểm. Nối hai điểm bất kì thì có bao nhiêu đoạn thẳng?', opts: o4('8', '12', '15', '10'), ans: 'D', why: 'Số đoạn = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Đếm hình chữ nhật', name: 'Câu 5', pts: 1, text: 'Một hình chữ nhật chia thành 4 ô nhỏ bằng nhau xếp một hàng ngang. Đếm được tất cả bao nhiêu hình chữ nhật?', opts: o4('10', '7', '8', '12'), ans: 'A', why: 'Số hình chữ nhật = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Đếm hình chữ nhật', name: 'Câu 6', pts: 1, text: 'Một hình chữ nhật chia thành lưới 2 hàng × 2 cột. Đếm được tất cả bao nhiêu hình chữ nhật?', opts: o4('4', '6', '9', '8'), ans: 'C', why: 'Chọn 2 trong 3 đường ngang và 2 trong 3 đường dọc: 3 × 3 = 9.' },
    { sec: 'Đếm góc', name: 'Câu 7', pts: 1, text: 'Từ một điểm vẽ ra 4 tia. Có tất cả bao nhiêu góc tạo thành?', opts: o4('4', '5', '6', '8'), ans: 'C', why: 'Số góc = 3 + 2 + 1 = 6.' },
    { sec: 'Thi đấu', name: 'Câu 8', pts: 1, text: '6 đội bóng đấu vòng tròn, mỗi cặp gặp nhau đúng 1 trận. Có bao nhiêu trận?', opts: o4('12', '15', '18', '30'), ans: 'B', why: 'Số trận = 5 + 4 + 3 + 2 + 1 = 15.' },
    { sec: 'Đếm tam giác', name: 'Câu 9', pts: 1, text: 'Một tam giác lớn được kẻ 2 đường thẳng từ đỉnh xuống đáy (chia đáy thành 3 phần). Đếm được tất cả bao nhiêu tam giác?', opts: o4('3', '4', '5', '6'), ans: 'D', why: 'Đáy có 4 điểm tạo 3 + 2 + 1 = 6 đoạn, mỗi đoạn cùng đỉnh cho một tam giác: 6 tam giác.' },
    { sec: 'Đếm hình chữ nhật', name: 'Câu 10', pts: 1, text: 'Một hình chữ nhật chia thành 3 ô nhỏ xếp một hàng ngang. Đếm được tất cả bao nhiêu hình chữ nhật?', opts: o4('5', '6', '4', '7'), ans: 'B', why: 'Số hình chữ nhật = 3 + 2 + 1 = 6.' },
  ],
},

/* ═══════════ ĐỀ 17 — SUY LUẬN LOGIC (AI NÓI THẬT) ═══════════ */
{
  id: 7707, title: 'Đề 17 · Suy luận logic', time: 20,
  questions: [
    { sec: 'Suy luận', name: 'Câu 1', pts: 1, text: 'An, Bình, Cường xếp hạng thi. An không cao nhất, Cường không cao nhất. Ai cao nhất?', opts: o4('An', 'Bình', 'Cường', 'Chưa rõ'), ans: 'B', why: 'An và Cường đều không cao nhất nên Bình cao nhất.' },
    { sec: 'Suy luận', name: 'Câu 2', pts: 1, text: 'Ba hộp màu đỏ, xanh, vàng. Kẹo ở hộp không phải đỏ, cũng không phải xanh. Kẹo ở hộp màu gì?', opts: o4('Đỏ', 'Xanh', 'Vàng', 'Không hộp nào'), ans: 'C', why: 'Loại đỏ và xanh, còn lại là vàng.' },
    { sec: 'Suy luận', name: 'Câu 3', pts: 1, text: 'Biết: nếu hôm nay là thứ Ba thì ngày mai là thứ Tư. Hôm nay là thứ Ba, vậy ngày mai là thứ mấy?', opts: o4('Thứ Tư', 'Thứ Hai', 'Thứ Năm', 'Chủ nhật'), ans: 'A', why: 'Áp dụng trực tiếp: ngày mai là thứ Tư.' },
    { sec: 'Ai nói thật', name: 'Câu 4', pts: 1, text: 'Một cái cốc bị vỡ. Lan nói "Tôi làm vỡ", Mai nói "Lan làm vỡ", Hoa nói "Tôi không làm vỡ". Chỉ có ĐÚNG MỘT bạn nói thật. Ai làm vỡ cốc?', opts: o4('Lan', 'Mai', 'Hoa', 'Không ai'), ans: 'B', why: 'Nếu Lan vỡ thì Lan và Mai cùng nói thật (2 người) — sai. Vậy Lan không vỡ, chỉ Hoa nói thật, người làm vỡ là Mai.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'Nam cao hơn Bình, Bình cao hơn Cường. Ai thấp nhất?', opts: o4('Nam', 'Bình', 'Cường', 'Bằng nhau'), ans: 'C', why: 'Cường thấp hơn Bình, mà Bình lại thấp hơn Nam nên Cường thấp nhất.' },
    { sec: 'Ngăn kéo', name: 'Câu 6', pts: 1, text: 'Trong túi có 3 bi đỏ và 2 bi xanh. Lấy đại 3 viên (không nhìn). Chắc chắn có ít nhất mấy viên cùng màu?', opts: o4('2', '3', '1', '4'), ans: 'A', why: 'Chỉ có 2 màu, lấy 3 viên thì chắc chắn có ít nhất 2 viên cùng màu.' },
    { sec: 'Suy luận', name: 'Câu 7', pts: 1, text: 'Trong hộp có bi xanh và bi đỏ. Lấy ra 2 bi bất kì thì luôn có ít nhất 1 bi đỏ. Trong hộp có nhiều nhất mấy bi xanh?', opts: o4('3', '2', '0', '1'), ans: 'D', why: 'Nếu có từ 2 bi xanh trở lên thì có thể lấy 2 bi xanh (không có đỏ). Vậy nhiều nhất 1 bi xanh.' },
    { sec: 'Suy luận', name: 'Câu 8', pts: 1, text: 'Mọi con mèo đều có đuôi. Miu là một con mèo. Vậy Miu thế nào?', opts: o4('Có đuôi', 'Không có đuôi', 'Không rõ', 'Không phải mèo'), ans: 'A', why: 'Miu là mèo, mà mọi con mèo đều có đuôi nên Miu có đuôi.' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'Trong hàng, A đứng trước B, B đứng trước C. Ai đứng đầu hàng?', opts: o4('B', 'C', 'A', 'Không rõ'), ans: 'C', why: 'A đứng trước B, B đứng trước C nên A đứng đầu.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Số nhà của An lớn hơn Bình nhưng nhỏ hơn Cường. Ai có số nhà lớn nhất?', opts: o4('An', 'Cường', 'Bình', 'Bằng nhau'), ans: 'B', why: 'An nhỏ hơn Cường, Bình nhỏ hơn An nên Cường lớn nhất.' },
  ],
},

/* ═══════════ ĐỀ 18 — CHIA HẾT VÀ CHỮ SỐ TẬN CÙNG ═══════════ */
{
  id: 7708, title: 'Đề 18 · Chia hết và chữ số tận cùng', time: 20,
  questions: [
    { sec: 'Chia hết', name: 'Câu 1', pts: 1, text: 'Số nào chia hết cho 9: 234, 123, 345, 181?', opts: o4('234', '123', '345', '181'), ans: 'A', why: '2 + 3 + 4 = 9 chia hết cho 9 nên 234 chia hết cho 9.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 2', pts: 1, text: 'Chữ số tận cùng của tích 2 × 2 × 2 × 2 × 2 là chữ số nào?', opts: o4('4', '2', '8', '6'), ans: 'B', why: '2 × 2 × 2 × 2 × 2 = 32, tận cùng là 2.' },
    { sec: 'Chia hết', name: 'Câu 3', pts: 1, text: 'Số nào chia hết cho cả 2 và 3: 14, 15, 18, 21?', opts: o4('14', '15', '18', '21'), ans: 'C', why: 'Chia hết cho cả 2 và 3 là chia hết cho 6; 18 = 6 × 3.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 4', pts: 1, text: 'Chữ số tận cùng của tích 1 × 2 × 3 × 4 × 5 là chữ số nào?', opts: o4('5', '2', '1', '0'), ans: 'D', why: '1 × 2 × 3 × 4 × 5 = 120, tận cùng là 0.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 5', pts: 1, text: 'Một số vừa chia hết cho 2 vừa chia hết cho 5 thì tận cùng là chữ số nào?', opts: o4('0', '5', '2', '10'), ans: 'A', why: 'Số chia hết cho cả 2 và 5 (tức cho 10) luôn tận cùng bằng 0.' },
    { sec: 'Chia hết', name: 'Câu 6', pts: 1, text: 'Số nhỏ nhất có 3 chữ số chia hết cho 9 là số nào?', opts: o4('100', '108', '117', '126'), ans: 'B', why: '108 có 1 + 0 + 8 = 9 chia hết cho 9, và là số nhỏ nhất có 3 chữ số như vậy.' },
    { sec: 'Chia hết', name: 'Câu 7', pts: 1, text: 'Số nào chia hết cho 6: 31, 32, 30, 33?', opts: o4('31', '32', '30', '33'), ans: 'C', why: '30 chia hết cho cả 2 và 3 nên chia hết cho 6.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 8', pts: 1, text: 'Chữ số tận cùng của tích 7 × 7 là chữ số nào?', opts: o4('7', '1', '4', '9'), ans: 'D', why: '7 × 7 = 49, tận cùng là 9.' },
    { sec: 'Chẵn lẻ', name: 'Câu 9', pts: 1, text: 'Tổng của hai số chẵn là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lẻ', 'Lúc chẵn lúc lẻ', 'Không rõ'), ans: 'A', why: 'Ví dụ 4 + 6 = 10; tổng hai số chẵn luôn là số chẵn.' },
    { sec: 'Chia hết', name: 'Câu 10', pts: 1, text: 'Trong các số 2, 4, 6, 8, ..., 20 có mấy số chia hết cho 4?', opts: o4('4', '5', '6', '10'), ans: 'B', why: 'Các số 4, 8, 12, 16, 20 chia hết cho 4 — có 5 số.' },
  ],
},

/* ═══════════ ĐỀ 19 — TÍNH NHANH ═══════════ */
{
  id: 7709, title: 'Đề 19 · Tính nhanh, tính thông minh', time: 20,
  questions: [
    { sec: 'Tính nhanh', name: 'Câu 1', pts: 1, text: '4 × 25 × 7 = ?', opts: o4('700', '175', '70', '710'), ans: 'A', why: '4 × 25 = 100, 100 × 7 = 700.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: '8 × 125 × 3 = ?', opts: o4('1000', '3000', '2400', '300'), ans: 'B', why: '8 × 125 = 1000, 1000 × 3 = 3000.' },
    { sec: 'Tính nhanh', name: 'Câu 3', pts: 1, text: '36 + 48 + 64 + 52 = ?', opts: o4('180', '190', '200', '210'), ans: 'C', why: '(36 + 64) + (48 + 52) = 100 + 100 = 200.' },
    { sec: 'Tính nhanh', name: 'Câu 4', pts: 1, text: '99 × 4 = ?', opts: o4('400', '404', '360', '396'), ans: 'D', why: '99 × 4 = 100 × 4 − 4 = 400 − 4 = 396.' },
    { sec: 'Tổng dãy', name: 'Câu 5', pts: 1, text: '1 + 3 + 5 + 7 + 9 = ?', opts: o4('25', '20', '24', '30'), ans: 'A', why: '(1 + 9) + (3 + 7) + 5 = 10 + 10 + 5 = 25.' },
    { sec: 'Tính nhanh', name: 'Câu 6', pts: 1, text: '1000 − 1 − 2 − 3 − ... − 9 = ?', opts: o4('945', '955', '950', '900'), ans: 'B', why: '1000 − (1 + 2 + ... + 9) = 1000 − 45 = 955.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: '2 × 5 × 4 × 25 = ?', opts: o4('100', '500', '1000', '2000'), ans: 'C', why: '(2 × 5) × (4 × 25) = 10 × 100 = 1000.' },
    { sec: 'Tính nhanh', name: 'Câu 8', pts: 1, text: '45 + 55 + 45 + 55 = ?', opts: o4('180', '190', '210', '200'), ans: 'D', why: '(45 + 55) + (45 + 55) = 100 + 100 = 200.' },
    { sec: 'Tính nhanh', name: 'Câu 9', pts: 1, text: '17 × 6 = ?', opts: o4('102', '96', '112', '108'), ans: 'A', why: '17 × 6 = 10 × 6 + 7 × 6 = 60 + 42 = 102.' },
    { sec: 'Tính nhanh', name: 'Câu 10', pts: 1, text: '250 × 4 = ?', opts: o4('900', '1000', '800', '1200'), ans: 'B', why: '250 × 4 = 1000.' },
  ],
},

/* ═══════════ ĐỀ 20 — CÂN ĐĨA VÀ SO SÁNH ═══════════ */
{
  id: 7710, title: 'Đề 20 · Cân đĩa và so sánh', time: 20,
  questions: [
    { sec: 'Cân đĩa', name: 'Câu 1', pts: 1, text: '1 quả cam nặng bằng 2 quả quýt. Vậy 3 quả cam nặng bằng mấy quả quýt?', opts: o4('6', '5', '3', '9'), ans: 'A', why: 'Mỗi cam bằng 2 quýt nên 3 cam bằng 3 × 2 = 6 quýt.' },
    { sec: 'Cân đĩa', name: 'Câu 2', pts: 1, text: '1 hộp nặng bằng 3 gói. Vậy 2 hộp nặng bằng mấy gói?', opts: o4('5', '6', '9', '3'), ans: 'B', why: 'Mỗi hộp bằng 3 gói nên 2 hộp bằng 2 × 3 = 6 gói.' },
    { sec: 'So sánh', name: 'Câu 3', pts: 1, text: 'Túi A nặng hơn túi B, túi B nặng hơn túi C. Túi nào nhẹ nhất?', opts: o4('A', 'B', 'C', 'Bằng nhau'), ans: 'C', why: 'C nhẹ hơn B, B lại nhẹ hơn A nên C nhẹ nhất.' },
    { sec: 'Cân đĩa', name: 'Câu 4', pts: 1, text: '2 quả táo cân bằng 3 quả lê. Vậy 4 quả táo cân bằng mấy quả lê?', opts: o4('5', '8', '9', '6'), ans: 'D', why: '2 táo = 3 lê nên 4 táo (gấp đôi) = 6 lê.' },
    { sec: 'So sánh', name: 'Câu 5', pts: 1, text: '1 ki-lô-gam sắt và 1 ki-lô-gam bông, cái nào nặng hơn?', opts: o4('Bằng nhau', 'Sắt', 'Bông', 'Không rõ'), ans: 'A', why: 'Cùng là 1 kg nên nặng bằng nhau.' },
    { sec: 'Cân đĩa', name: 'Câu 6', pts: 1, text: 'Cân thăng bằng: đĩa trái có 5 viên bi và 1 quả cân 20 g, đĩa phải có quả cân 45 g. Mỗi viên bi nặng bao nhiêu?', opts: o4('4 g', '5 g', '9 g', '25 g'), ans: 'B', why: '5 viên bi nặng 45 − 20 = 25 g, mỗi viên = 25 : 5 = 5 g.' },
    { sec: 'Cân đĩa', name: 'Câu 7', pts: 1, text: '3 quyển vở nặng bằng 6 cây bút. Vậy 1 quyển vở nặng bằng mấy cây bút?', opts: o4('3', '6', '2', '1'), ans: 'C', why: '6 : 3 = 2, mỗi quyển vở nặng bằng 2 cây bút.' },
    { sec: 'So sánh', name: 'Câu 8', pts: 1, text: 'An nặng 30 kg, Bình nhẹ hơn An 4 kg. Bình nặng bao nhiêu?', opts: o4('34', '24', '30', '26'), ans: 'D', why: 'Bình = 30 − 4 = 26 kg.' },
    { sec: 'Cân đĩa', name: 'Câu 9', pts: 1, text: '2 quả cam cân bằng 1 quả bưởi, 1 quả bưởi cân bằng 4 quả quýt. Vậy 1 quả cam cân bằng mấy quả quýt?', opts: o4('2', '4', '8', '1'), ans: 'A', why: '1 bưởi = 4 quýt = 2 cam nên 1 cam = 2 quýt.' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'Túi A nặng hơn túi B 2 kg, cả hai túi nặng 10 kg. Túi A nặng bao nhiêu?', opts: o4('8', '6', '4', '5'), ans: 'B', why: 'Túi A = (10 + 2) : 2 = 6 kg.' },
  ],
},

/* ═══════════ ĐỀ 21 — NGUYÊN LÍ NGĂN KÉO (ĐI-RÍCH-LÊ) ═══════════ */
{
  id: 7711, title: 'Đề 21 · Nguyên lí ngăn kéo', time: 20,
  questions: [
    { sec: 'Ngăn kéo', name: 'Câu 1', pts: 1, text: 'Ngăn kéo có tất 3 màu để lẫn lộn. Phải lấy ít nhất mấy chiếc để chắc chắn có 2 chiếc cùng màu?', opts: o4('4', '3', '2', '6'), ans: 'A', why: 'Lấy 3 chiếc có thể mỗi chiếc một màu; lấy thêm 1 (thành 4) thì chắc chắn có 2 chiếc cùng màu.' },
    { sec: 'Ngăn kéo', name: 'Câu 2', pts: 1, text: 'Một lớp có 13 bạn. Có chắc chắn ít nhất 2 bạn sinh cùng tháng không?', opts: o4('Sai', 'Đúng', 'Không rõ', 'Tùy'), ans: 'B', why: 'Chỉ có 12 tháng mà có 13 bạn nên chắc chắn có 2 bạn sinh cùng tháng.' },
    { sec: 'Ngăn kéo', name: 'Câu 3', pts: 1, text: 'Túi có nhiều bi đỏ và bi xanh. Phải lấy ít nhất mấy viên để chắc chắn có 2 viên cùng màu?', opts: o4('2', '4', '3', '5'), ans: 'C', why: 'Có 2 màu, lấy 3 viên thì chắc chắn có 2 viên cùng màu.' },
    { sec: 'Ngăn kéo', name: 'Câu 4', pts: 1, text: 'Nhốt 5 con thỏ vào 4 chuồng. Chắc chắn có một chuồng chứa ít nhất mấy con?', opts: o4('1', '3', '5', '2'), ans: 'D', why: 'Nếu mỗi chuồng ≤ 1 con thì chỉ đủ 4 con; 5 con nên phải có chuồng ≥ 2 con.' },
    { sec: 'Ngăn kéo', name: 'Câu 5', pts: 1, text: 'Có 4 màu bút. Phải lấy ít nhất mấy chiếc để chắc chắn có 2 chiếc cùng màu?', opts: o4('5', '4', '3', '6'), ans: 'A', why: 'Lấy 4 chiếc có thể mỗi màu một chiếc; lấy 5 chiếc thì chắc chắn có 2 cùng màu.' },
    { sec: 'Ngăn kéo', name: 'Câu 6', pts: 1, text: 'Bỏ 10 viên bi vào 3 hộp. Chắc chắn có một hộp chứa ít nhất mấy viên?', opts: o4('3', '4', '5', '10'), ans: 'B', why: 'Nếu mỗi hộp ≤ 3 viên thì tối đa 9 viên; 10 viên nên phải có hộp ≥ 4 viên.' },
    { sec: 'Ngăn kéo', name: 'Câu 7', pts: 1, text: 'Có 3 loại kẹo trong hộp. Phải lấy ít nhất mấy cái để chắc chắn có 2 cái cùng loại?', opts: o4('3', '5', '4', '6'), ans: 'C', why: 'Lấy 3 cái có thể mỗi loại một cái; lấy 4 cái thì chắc chắn có 2 cái cùng loại.' },
    { sec: 'Ngăn kéo', name: 'Câu 8', pts: 1, text: 'Trong 367 người, có chắc chắn hai người có cùng ngày sinh (mỗi năm nhiều nhất 366 ngày) không?', opts: o4('Sai', 'Không rõ', 'Tùy', 'Đúng'), ans: 'D', why: 'Một năm nhiều nhất 366 ngày mà có 367 người nên chắc chắn có 2 người cùng ngày sinh.' },
    { sec: 'Ngăn kéo', name: 'Câu 9', pts: 1, text: 'Bỏ 6 quả bóng vào 5 rổ. Chắc chắn có một rổ chứa ít nhất mấy quả?', opts: o4('2', '1', '3', '6'), ans: 'A', why: 'Nếu mỗi rổ ≤ 1 quả thì chỉ đủ 5 quả; 6 quả nên phải có rổ ≥ 2 quả.' },
    { sec: 'Ngăn kéo', name: 'Câu 10', pts: 1, text: 'Ngăn kéo có tất xanh và tất đen để lẫn. Trong bóng tối phải lấy ít nhất mấy chiếc để chắc chắn được một đôi cùng màu?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Lấy 2 chiếc có thể khác màu; lấy 3 chiếc (2 màu) thì chắc chắn có 2 chiếc cùng màu — một đôi.' },
  ],
},

/* ═══════════ ĐỀ 22 — TRUNG BÌNH CỘNG CÓ ĐIỀU KIỆN ═══════════ */
{
  id: 7712, title: 'Đề 22 · Trung bình cộng có điều kiện', time: 20,
  questions: [
    { sec: 'Trung bình', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 4 và 8 là bao nhiêu?', opts: o4('6', '12', '4', '8'), ans: 'A', why: '(4 + 8) : 2 = 6.' },
    { sec: 'Trung bình', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của ba số là 10. Tổng ba số đó là bao nhiêu?', opts: o4('10', '30', '20', '13'), ans: 'B', why: 'Tổng = trung bình cộng × số số = 10 × 3 = 30.' },
    { sec: 'Trung bình', name: 'Câu 3', pts: 1, text: 'Trung bình cộng hai số là 15, một số là 12. Số kia là bao nhiêu?', opts: o4('13', '30', '18', '15'), ans: 'C', why: 'Tổng = 15 × 2 = 30; số kia = 30 − 12 = 18.' },
    { sec: 'Trung bình', name: 'Câu 4', pts: 1, text: 'Bốn bạn cao trung bình 130 cm. Ba bạn đầu cao 128, 130, 132 cm. Bạn thứ tư cao bao nhiêu?', opts: o4('128', '132', '126', '130'), ans: 'D', why: 'Tổng = 130 × 4 = 520; ba bạn đầu = 390; bạn thứ tư = 520 − 390 = 130 cm.' },
    { sec: 'Trung bình', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của 5 số là 20. Thêm số 26 nữa thì trung bình cộng của 6 số là bao nhiêu?', opts: o4('21', '20', '23', '22'), ans: 'A', why: 'Tổng 5 số = 100; thêm 26 → 126; trung bình 6 số = 126 : 6 = 21.' },
    { sec: 'Trung bình', name: 'Câu 6', pts: 1, text: 'Ba số là 10, 20 và một số nữa. Trung bình cộng ba số bằng 20. Số thứ ba là bao nhiêu?', opts: o4('20', '30', '40', '25'), ans: 'B', why: 'Tổng = 20 × 3 = 60; số thứ ba = 60 − 10 − 20 = 30.' },
    { sec: 'Trung bình', name: 'Câu 7', pts: 1, text: 'Trung bình cộng hai số là 50, hiệu hai số là 20. Số lớn là bao nhiêu?', opts: o4('40', '50', '60', '70'), ans: 'C', why: 'Tổng = 50 × 2 = 100; số lớn = (100 + 20) : 2 = 60.' },
    { sec: 'Trung bình', name: 'Câu 8', pts: 1, text: 'Điểm ba môn của Nam là 8, 9, 10. Điểm trung bình là bao nhiêu?', opts: o4('27', '8', '10', '9'), ans: 'D', why: '(8 + 9 + 10) : 3 = 27 : 3 = 9.' },
    { sec: 'Trung bình', name: 'Câu 9', pts: 1, text: 'Trung bình cộng của bốn số 2, 4, 6, 8 là bao nhiêu?', opts: o4('5', '4', '6', '20'), ans: 'A', why: '(2 + 4 + 6 + 8) : 4 = 20 : 4 = 5.' },
    { sec: 'Trung bình', name: 'Câu 10', pts: 1, text: 'Một tổ có 5 bạn nặng trung bình 30 kg. Tổng cân nặng cả tổ là bao nhiêu?', opts: o4('30', '150', '35', '300'), ans: 'B', why: 'Tổng = 30 × 5 = 150 kg.' },
  ],
},

/* ═══════════ ĐỀ 23 — GIẢ THIẾT TẠM BIẾN THỂ (TIỀN, VÉ, ĐIỂM) ═══════════ */
{
  id: 7713, title: 'Đề 23 · Giả thiết tạm biến thể', time: 20,
  questions: [
    { sec: 'Tiền xu', name: 'Câu 1', pts: 1, text: 'Có các đồng xu loại 2000 đồng và 5000 đồng, tất cả 10 đồng, tổng 41 000 đồng. Có mấy đồng loại 5000?', opts: o4('7', '3', '5', '8'), ans: 'A', why: 'Giả sử toàn xu 2000: 20 000 đồng, thiếu 21 000; mỗi xu 5000 hơn 3000 nên 21 000 : 3000 = 7 đồng.' },
    { sec: 'Vé', name: 'Câu 2', pts: 1, text: 'Vé người lớn 10 000 đồng, vé trẻ em 5000 đồng. 8 vé tốn 55 000 đồng. Có mấy vé trẻ em?', opts: o4('3', '5', '4', '6'), ans: 'B', why: 'Giả sử toàn vé người lớn: 80 000 đồng, thừa 25 000; mỗi vé trẻ em ít hơn 5000 nên 25 000 : 5000 = 5 vé.' },
    { sec: 'Chấm điểm', name: 'Câu 3', pts: 1, text: 'Bài thi 10 câu, mỗi câu đúng được 10 điểm, mỗi câu sai bị trừ 2 điểm (làm hết cả 10 câu). Bạn Nam được 76 điểm. Nam làm đúng mấy câu?', opts: o4('7', '9', '8', '6'), ans: 'C', why: 'Nếu đúng hết: 100 điểm; mỗi câu sai làm mất 12 điểm (10 + 2). (100 − 76) : 12 = 2 câu sai → đúng 8 câu.' },
    { sec: 'Xe cộ', name: 'Câu 4', pts: 1, text: 'Bãi có xe 4 bánh và xe 2 bánh, tất cả 12 xe, 38 bánh. Có mấy xe 4 bánh?', opts: o4('5', '6', '8', '7'), ans: 'D', why: 'Giả sử toàn xe 2 bánh: 24 bánh, thiếu 14; mỗi xe 4 bánh hơn 2 bánh nên 14 : 2 = 7 xe.' },
    { sec: 'Côn trùng', name: 'Câu 5', pts: 1, text: 'Nhện có 8 chân, chuồn chuồn có 6 chân. Có 10 con, tổng 68 chân. Có mấy con nhện?', opts: o4('4', '6', '5', '3'), ans: 'A', why: 'Giả sử toàn chuồn chuồn: 60 chân, thiếu 8; mỗi con nhện hơn 2 chân nên 8 : 2 = 4 con.' },
    { sec: 'Đóng gói', name: 'Câu 6', pts: 1, text: 'Gói to có 5 cái bánh, gói nhỏ có 2 cái. Có 8 gói, tổng 25 cái bánh. Có mấy gói to?', opts: o4('5', '3', '4', '2'), ans: 'B', why: 'Giả sử toàn gói nhỏ: 16 cái, thiếu 9; mỗi gói to hơn 3 cái nên 9 : 3 = 3 gói.' },
    { sec: 'Xe cộ', name: 'Câu 7', pts: 1, text: 'Bãi có xe lam 3 bánh và xe máy 2 bánh, tất cả 9 xe, 24 bánh. Có mấy xe lam?', opts: o4('3', '5', '6', '4'), ans: 'C', why: 'Giả sử toàn xe máy: 18 bánh, thiếu 6; mỗi xe lam hơn 1 bánh nên 6 : 1 = 6 xe.' },
    { sec: 'Gia súc', name: 'Câu 8', pts: 1, text: 'Đàn có trâu (4 chân) và ngỗng (2 chân), tất cả 12 con, 34 chân. Có mấy con trâu?', opts: o4('7', '6', '4', '5'), ans: 'D', why: 'Giả sử toàn ngỗng: 24 chân, thiếu 10; mỗi con trâu hơn 2 chân nên 10 : 2 = 5 con.' },
    { sec: 'Tiền xu', name: 'Câu 9', pts: 1, text: 'Có các đồng xu loại 1000 đồng và 2000 đồng, tất cả 15 đồng, tổng 22 000 đồng. Có mấy đồng loại 2000?', opts: o4('7', '8', '6', '9'), ans: 'A', why: 'Giả sử toàn xu 1000: 15 000 đồng, thiếu 7000; mỗi xu 2000 hơn 1000 nên 7000 : 1000 = 7 đồng.' },
    { sec: 'Bi điểm', name: 'Câu 10', pts: 1, text: 'Hộp có bi 3 điểm và bi 5 điểm, tất cả 10 viên, tổng 38 điểm. Có mấy viên bi 5 điểm?', opts: o4('6', '4', '5', '3'), ans: 'B', why: 'Giả sử toàn bi 3 điểm: 30 điểm, thiếu 8; mỗi bi 5 điểm hơn 2 điểm nên 8 : 2 = 4 viên.' },
  ],
},

/* ═══════════ ĐỀ 24 — TRỒNG CÂY KHÉP KÍN / HAI PHÍA ═══════════ */
{
  id: 7714, title: 'Đề 24 · Trồng cây khép kín và hai phía', time: 20,
  questions: [
    { sec: 'Khép kín', name: 'Câu 1', pts: 1, text: 'Rào quanh vườn hình vuông cạnh 10 m, cọc cách nhau 2 m (kể cả bốn góc). Cần mấy cọc?', opts: o4('20', '21', '19', '40'), ans: 'A', why: 'Chu vi = 10 × 4 = 40 m; đường khép kín nên số cọc = 40 : 2 = 20.' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Đường dài 15 m, trồng cây cách 3 m, chỉ trồng một đầu. Có mấy cây?', opts: o4('6', '5', '4', '15'), ans: 'B', why: 'Chỉ trồng một đầu nên số cây = số khoảng = 15 : 3 = 5.' },
    { sec: 'Hai bên', name: 'Câu 3', pts: 1, text: 'Trồng cây hai bên đường dài 60 m, cây cách 6 m, cả hai đầu. Có tất cả mấy cây?', opts: o4('11', '20', '22', '24'), ans: 'C', why: 'Một bên: 60 : 6 + 1 = 11 cây; hai bên: 11 × 2 = 22 cây.' },
    { sec: 'Trồng cây', name: 'Câu 4', pts: 1, text: 'Hàng rào thẳng dài 18 m, cọc cách 3 m, cắm cả hai đầu. Cần mấy cọc?', opts: o4('6', '8', '9', '7'), ans: 'D', why: 'Số cọc = 18 : 3 + 1 = 7.' },
    { sec: 'Khép kín', name: 'Câu 5', pts: 1, text: 'Trồng cây quanh sân hình tam giác đều cạnh 12 m, cây cách 3 m (kể cả các đỉnh). Có mấy cây?', opts: o4('12', '13', '11', '36'), ans: 'A', why: 'Chu vi = 12 × 3 = 36 m; đường khép kín nên số cây = 36 : 3 = 12.' },
    { sec: 'Hai bên', name: 'Câu 6', pts: 1, text: 'Cắm cờ hai bên đường dài 100 m, cờ cách 10 m, cả hai đầu. Có tất cả mấy lá cờ?', opts: o4('20', '22', '21', '11'), ans: 'B', why: 'Một bên: 100 : 10 + 1 = 11 cờ; hai bên: 11 × 2 = 22 cờ.' },
    { sec: 'Khép kín', name: 'Câu 7', pts: 1, text: 'Trồng cây quanh ao có chu vi 50 m, cây cách nhau 5 m. Có mấy cây?', opts: o4('9', '11', '10', '5'), ans: 'C', why: 'Đường khép kín: số cây = 50 : 5 = 10.' },
    { sec: 'Trồng cây', name: 'Câu 8', pts: 1, text: 'Đóng 25 cọc thành một hàng thẳng, hai cọc liền nhau cách 2 m. Hàng cọc dài bao nhiêu mét?', opts: o4('50', '24', '25', '48'), ans: 'D', why: '25 cọc tạo 24 khoảng, mỗi khoảng 2 m nên dài 24 × 2 = 48 m.' },
    { sec: 'Trồng cây', name: 'Câu 9', pts: 1, text: 'Đường dài 40 m, trồng cây một bên, cách 4 m, cả hai đầu. Có mấy cây?', opts: o4('11', '10', '12', '9'), ans: 'A', why: 'Số cây = 40 : 4 + 1 = 11.' },
    { sec: 'Khép kín', name: 'Câu 10', pts: 1, text: 'Treo đèn quanh một cây thông (đường khép kín) chu vi 24 m, đèn cách 3 m. Có mấy đèn?', opts: o4('9', '8', '7', '24'), ans: 'B', why: 'Đường khép kín: số đèn = 24 : 3 = 8.' },
  ],
},

/* ═══════════ ĐỀ 25 — TỔNG – TỈ, HIỆU – TỈ HỖN HỢP ═══════════ */
{
  id: 7715, title: 'Đề 25 · Tổng – tỉ và hiệu – tỉ hỗn hợp', time: 20,
  questions: [
    { sec: 'Tổng – tỉ', name: 'Câu 1', pts: 1, text: 'Hai số có tổng 55, số bé bằng 2/3 số lớn. Số bé là bao nhiêu?', opts: o4('22', '33', '25', '20'), ans: 'A', why: 'Số bé 2 phần, số lớn 3 phần; tổng 5 phần = 55, số bé = 55 : 5 × 2 = 22.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 2', pts: 1, text: 'Hai số có hiệu 18, số lớn gấp 4 lần số bé. Số lớn là bao nhiêu?', opts: o4('6', '24', '18', '30'), ans: 'B', why: 'Hiệu 3 phần = 18, mỗi phần = 6; số lớn = 6 × 4 = 24.' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Ba số A, B, C có tổng 70. A gấp đôi B, B gấp đôi C. Số A là bao nhiêu?', opts: o4('10', '20', '40', '30'), ans: 'C', why: 'C = 1 phần, B = 2 phần, A = 4 phần; tổng 7 phần = 70, mỗi phần = 10, A = 40.' },
    { sec: 'Tổng – tỉ', name: 'Câu 4', pts: 1, text: 'Lớp có 45 học sinh, số nam gấp đôi số nữ. Có mấy học sinh nữ?', opts: o4('30', '20', '25', '15'), ans: 'D', why: 'Nữ 1 phần, nam 2 phần; tổng 3 phần = 45, nữ = 45 : 3 = 15.' },
    { sec: 'Tổng – tỉ', name: 'Câu 5', pts: 1, text: 'Hai thùng dầu có tổng 48 lít, thùng thứ nhất gấp 3 lần thùng thứ hai. Thùng thứ nhất chứa bao nhiêu lít?', opts: o4('36', '12', '24', '40'), ans: 'A', why: 'Tổng 4 phần = 48, mỗi phần = 12; thùng thứ nhất = 12 × 3 = 36 lít.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 6', pts: 1, text: 'Số gà gấp 3 lần số vịt, gà nhiều hơn vịt 30 con. Có mấy con vịt?', opts: o4('45', '15', '10', '20'), ans: 'B', why: 'Hiệu 2 phần = 30, mỗi phần = 15; số vịt = 15 con.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 7', pts: 1, text: 'Chia kẹo cho anh và em, anh được gấp đôi em, anh nhiều hơn em 20 cái. Em được mấy cái?', opts: o4('40', '30', '20', '15'), ans: 'C', why: 'Hiệu 1 phần = 20, nên em = 20 cái.' },
    { sec: 'Tổng – tỉ', name: 'Câu 8', pts: 1, text: 'Sân trường trồng 100 cây hoa hồng và cúc, số hồng gấp 4 lần số cúc. Có mấy cây cúc?', opts: o4('80', '25', '50', '20'), ans: 'D', why: 'Tổng 5 phần = 100, mỗi phần = 20; số cúc = 20 cây.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 9', pts: 1, text: 'Hai số có tỉ 3/5, hiệu là 10. Số lớn là bao nhiêu?', opts: o4('25', '15', '10', '20'), ans: 'A', why: 'Hiệu 5 − 3 = 2 phần = 10, mỗi phần = 5; số lớn = 5 × 5 = 25.' },
    { sec: 'Tổng – tỉ', name: 'Câu 10', pts: 1, text: 'Ba số có tổng 90. Số thứ nhất gấp đôi số thứ hai, số thứ ba bằng số thứ nhất. Số thứ nhất là bao nhiêu?', opts: o4('18', '36', '30', '45'), ans: 'B', why: 'Số thứ hai 1 phần, số thứ nhất 2 phần, số thứ ba 2 phần; tổng 5 phần = 90, mỗi phần = 18, số thứ nhất = 36.' },
  ],
},

/* ═══════════ ĐỀ 26 — BÀI TOÁN TUỔI HỖN HỢP ═══════════ */
{
  id: 7716, title: 'Đề 26 · Bài toán tuổi hỗn hợp', time: 20,
  questions: [
    { sec: 'Tuổi', name: 'Câu 1', pts: 1, text: 'Hiện nay bố 36 tuổi, con 6 tuổi. Mấy năm nữa tuổi bố gấp 4 lần tuổi con?', opts: o4('4', '5', '3', '6'), ans: 'A', why: 'Sau 4 năm: con 10, bố 40 = 4 × 10. (36 + x = 4(6 + x) → x = 4.)' },
    { sec: 'Tuổi', name: 'Câu 2', pts: 1, text: 'Cha hơn con 25 tuổi, tuổi cha gấp 6 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('6', '5', '4', '7'), ans: 'B', why: 'Tuổi con = 25 : (6 − 1) = 5.' },
    { sec: 'Tuổi', name: 'Câu 3', pts: 1, text: 'Tuổi ông, bố và con cộng lại 84. Ông gấp đôi bố, bố gấp đôi con. Con bao nhiêu tuổi?', opts: o4('24', '48', '12', '14'), ans: 'C', why: 'Con 1 phần, bố 2 phần, ông 4 phần; tổng 7 phần = 84, con = 84 : 7 = 12.' },
    { sec: 'Tuổi', name: 'Câu 4', pts: 1, text: 'Năm nay Lan 8 tuổi, tuổi chị gấp đôi tuổi Lan. Chị bao nhiêu tuổi?', opts: o4('10', '14', '18', '16'), ans: 'D', why: 'Tuổi chị = 8 × 2 = 16.' },
    { sec: 'Tuổi', name: 'Câu 5', pts: 1, text: 'Cách đây 4 năm anh 10 tuổi, em 6 tuổi. Hiện nay tổng số tuổi hai anh em là bao nhiêu?', opts: o4('24', '16', '20', '28'), ans: 'A', why: 'Hiện nay anh 14, em 10; tổng = 14 + 10 = 24 tuổi.' },
    { sec: 'Tuổi', name: 'Câu 6', pts: 1, text: 'Bố 40 tuổi, con 10 tuổi. Tuổi bố gấp mấy lần tuổi con?', opts: o4('3', '4', '5', '30'), ans: 'B', why: '40 : 10 = 4 lần.' },
    { sec: 'Tuổi', name: 'Câu 7', pts: 1, text: '3 năm trước tổng số tuổi hai anh em là 14. Hiện nay tổng số tuổi hai anh em là bao nhiêu?', opts: o4('14', '17', '20', '26'), ans: 'C', why: 'Mỗi người tăng 3 tuổi → tổng tăng 6; hiện nay = 14 + 6 = 20.' },
    { sec: 'Tuổi', name: 'Câu 8', pts: 1, text: 'Bà hơn cháu 56 tuổi, tuổi bà gấp 8 lần tuổi cháu. Cháu bao nhiêu tuổi?', opts: o4('7', '9', '64', '8'), ans: 'D', why: 'Tuổi cháu = 56 : (8 − 1) = 8.' },
    { sec: 'Tuổi', name: 'Câu 9', pts: 1, text: 'Con 7 tuổi. 3 năm nữa tuổi con bằng nửa tuổi mẹ khi đó. Hiện nay mẹ bao nhiêu tuổi?', opts: o4('17', '20', '14', '23'), ans: 'A', why: '3 năm nữa con 10, mẹ khi đó = 10 × 2 = 20, mẹ hiện nay = 20 − 3 = 17 tuổi.' },
    { sec: 'Tuổi', name: 'Câu 10', pts: 1, text: 'Mẹ sinh con năm mẹ 25 tuổi. Khi con 10 tuổi thì mẹ bao nhiêu tuổi?', opts: o4('25', '35', '30', '15'), ans: 'B', why: 'Mẹ luôn hơn con 25 tuổi nên khi con 10 thì mẹ = 10 + 25 = 35 tuổi.' },
  ],
},

/* ═══════════ ĐỀ 27 — DÃY SỐ, ĐẾM SỐ HẠNG, TỔNG DÃY ═══════════ */
{
  id: 7717, title: 'Đề 27 · Dãy số và tổng dãy nâng cao', time: 20,
  questions: [
    { sec: 'Đếm số hạng', name: 'Câu 1', pts: 1, text: 'Dãy 2, 4, 6, ..., 100 có bao nhiêu số?', opts: o4('50', '100', '49', '51'), ans: 'A', why: 'Số số hạng = (100 − 2) : 2 + 1 = 50.' },
    { sec: 'Số thứ n', name: 'Câu 2', pts: 1, text: 'Số thứ 20 của dãy số lẻ 1, 3, 5, 7, ... là số nào?', opts: o4('40', '39', '41', '38'), ans: 'B', why: 'Số lẻ thứ n = 2n − 1; số thứ 20 = 2 × 20 − 1 = 39.' },
    { sec: 'Tổng dãy', name: 'Câu 3', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 50 bằng bao nhiêu?', opts: o4('1250', '1225', '1275', '1300'), ans: 'C', why: 'Tổng = (1 + 50) × 50 : 2 = 51 × 25 = 1275.' },
    { sec: 'Đếm số hạng', name: 'Câu 4', pts: 1, text: 'Dãy 5, 10, 15, ..., 100 có bao nhiêu số?', opts: o4('19', '21', '100', '20'), ans: 'D', why: 'Số số hạng = (100 − 5) : 5 + 1 = 20.' },
    { sec: 'Số thứ n', name: 'Câu 5', pts: 1, text: 'Số hạng thứ 10 của dãy 3, 6, 9, ... là số nào?', opts: o4('30', '27', '33', '10'), ans: 'A', why: 'Số hạng thứ 10 = 3 × 10 = 30.' },
    { sec: 'Tổng dãy', name: 'Câu 6', pts: 1, text: 'Tổng các số lẻ 1 + 3 + 5 + ... + 19 bằng bao nhiêu?', opts: o4('90', '100', '81', '110'), ans: 'B', why: 'Có 10 số, tổng = (1 + 19) × 10 : 2 = 100.' },
    { sec: 'Đếm số hạng', name: 'Câu 7', pts: 1, text: 'Dãy 1, 4, 7, 10, ..., 31 có bao nhiêu số?', opts: o4('10', '12', '11', '9'), ans: 'C', why: 'Số số hạng = (31 − 1) : 3 + 1 = 11.' },
    { sec: 'Số thứ n', name: 'Câu 8', pts: 1, text: 'Số thứ 7 của dãy 1, 2, 4, 8, 16, 32, ... là số nào?', opts: o4('48', '128', '56', '64'), ans: 'D', why: 'Mỗi số gấp đôi số trước: 32 × 2 = 64.' },
    { sec: 'Tổng dãy', name: 'Câu 9', pts: 1, text: 'Tổng 10 + 20 + 30 + ... + 100 bằng bao nhiêu?', opts: o4('550', '500', '450', '600'), ans: 'A', why: 'Có 10 số, tổng = (10 + 100) × 10 : 2 = 550.' },
    { sec: 'Số thứ n', name: 'Câu 10', pts: 1, text: 'Một dãy bắt đầu từ 4, mỗi số hơn số trước 5 đơn vị, có 8 số. Số cuối cùng là bao nhiêu?', opts: o4('40', '39', '35', '44'), ans: 'B', why: 'Số cuối = 4 + 5 × (8 − 1) = 4 + 35 = 39.' },
  ],
},

/* ═══════════ ĐỀ 28 — ĐẾM CÁCH, BẮT TAY, SẮP XẾP ═══════════ */
{
  id: 7718, title: 'Đề 28 · Đếm cách và sắp xếp', time: 20,
  questions: [
    { sec: 'Bắt tay', name: 'Câu 1', pts: 1, text: '6 người gặp nhau, mỗi cặp bắt tay đúng một lần. Có bao nhiêu cái bắt tay?', opts: o4('12', '15', '10', '30'), ans: 'B', why: 'Số bắt tay = 5 + 4 + 3 + 2 + 1 = 15.' },
    { sec: 'Sắp xếp', name: 'Câu 2', pts: 1, text: '4 bạn xếp thành một hàng dọc thì có bao nhiêu cách xếp khác nhau?', opts: o4('12', '8', '24', '16'), ans: 'C', why: 'Số cách = 4 × 3 × 2 × 1 = 24.' },
    { sec: 'Đoạn thẳng', name: 'Câu 3', pts: 1, text: 'Trên một đường thẳng có 6 điểm. Nối hai điểm bất kì được bao nhiêu đoạn thẳng?', opts: o4('12', '20', '10', '15'), ans: 'D', why: 'Số đoạn = 5 + 4 + 3 + 2 + 1 = 15.' },
    { sec: 'Đếm hình', name: 'Câu 4', pts: 1, text: 'Lưới 3×3 ô vuông nhỏ có tất cả bao nhiêu hình vuông (mọi kích cỡ)?', opts: o4('14', '9', '13', '15'), ans: 'A', why: 'Loại 1×1: 9, loại 2×2: 4, loại 3×3: 1; tổng 14.' },
    { sec: 'Đếm cách', name: 'Câu 5', pts: 1, text: 'Từ A đến B có 2 đường, B đến C có 3 đường, C đến D có 2 đường. Đi từ A đến D (qua B, C) có mấy cách?', opts: o4('7', '12', '6', '8'), ans: 'B', why: 'Số cách = 2 × 3 × 2 = 12.' },
    { sec: 'Thi đấu', name: 'Câu 6', pts: 1, text: '5 đội bóng đấu vòng tròn, mỗi cặp gặp nhau đúng một trận. Có bao nhiêu trận?', opts: o4('15', '8', '10', '20'), ans: 'C', why: 'Số trận = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Đếm cách', name: 'Câu 7', pts: 1, text: 'Có 3 chiếc áo và 2 chiếc quần. Có bao nhiêu cách chọn một bộ áo–quần?', opts: o4('5', '3', '2', '6'), ans: 'D', why: 'Mỗi áo ghép được với 2 quần: 3 × 2 = 6 cách.' },
    { sec: 'Đếm hình', name: 'Câu 8', pts: 1, text: 'Một hình chữ nhật chia thành lưới 2 hàng × 3 cột. Đếm được tất cả bao nhiêu hình chữ nhật?', opts: o4('18', '6', '9', '12'), ans: 'A', why: 'Chọn 2 trong 3 đường ngang và 2 trong 4 đường dọc: 3 × 6 = 18.' },
    { sec: 'Đếm cách', name: 'Câu 9', pts: 1, text: 'Chọn 2 bạn trong 5 bạn để đi trực nhật. Có bao nhiêu cách chọn?', opts: o4('20', '10', '5', '8'), ans: 'B', why: 'Số cách = 4 + 3 + 2 + 1 = 10 (mỗi cặp đếm một lần).' },
    { sec: 'Sắp xếp', name: 'Câu 10', pts: 1, text: 'Xếp 3 lá cờ khác màu thành một dải 3 ô, mỗi ô một màu. Có bao nhiêu cách xếp?', opts: o4('9', '3', '6', '27'), ans: 'C', why: 'Số cách = 3 × 2 × 1 = 6.' },
  ],
},

/* ═══════════ ĐỀ 29 — LOGIC VÀ CHẴN LẺ ═══════════ */
{
  id: 7719, title: 'Đề 29 · Logic và chẵn lẻ', time: 20,
  questions: [
    { sec: 'Chẵn lẻ', name: 'Câu 1', pts: 1, text: 'Tổng của hai số lẻ là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lẻ', 'Lúc chẵn lúc lẻ', 'Không rõ'), ans: 'A', why: 'Ví dụ 3 + 5 = 8; tổng hai số lẻ luôn là số chẵn.' },
    { sec: 'Chẵn lẻ', name: 'Câu 2', pts: 1, text: 'Tích của hai số lẻ là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lẻ', 'Lúc chẵn lúc lẻ', 'Không rõ'), ans: 'B', why: 'Ví dụ 3 × 5 = 15; tích hai số lẻ luôn là số lẻ.' },
    { sec: 'Chẵn lẻ', name: 'Câu 3', pts: 1, text: 'Một số chẵn cộng một số lẻ được số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lúc chẵn lúc lẻ', 'Lẻ', 'Không rõ'), ans: 'C', why: 'Ví dụ 4 + 3 = 7; chẵn cộng lẻ luôn là số lẻ.' },
    { sec: 'Nghịch lí', name: 'Câu 4', pts: 1, text: 'Một bạn nói: "Câu tôi đang nói là câu sai." Câu nói đó đúng hay sai?', opts: o4('Đúng', 'Sai', 'Cả đúng lẫn sai', 'Không xác định được'), ans: 'D', why: 'Nếu câu đó đúng thì theo nội dung nó phải sai, và ngược lại — mâu thuẫn, không xác định được đúng hay sai.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'An nói "Trời đang mưa", Bình nói "Trời không mưa". Chắc chắn có ít nhất mấy người nói đúng?', opts: o4('1', '2', '0', 'Cả hai'), ans: 'A', why: 'Hai câu trái ngược nhau, luôn có đúng một câu đúng nên ít nhất 1 người nói đúng.' },
    { sec: 'Chẵn lẻ', name: 'Câu 6', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 9 là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lẻ', 'Không rõ', 'Vừa chẵn vừa lẻ'), ans: 'B', why: 'Tổng = 45, là số lẻ.' },
    { sec: 'Suy luận', name: 'Câu 7', pts: 1, text: 'Ba bạn Lan, Huệ, Mai xếp hàng. Lan không đứng đầu, Mai đứng cuối. Ai đứng đầu?', opts: o4('Mai', 'Lan', 'Huệ', 'Không rõ'), ans: 'C', why: 'Mai đứng cuối, Lan không đứng đầu nên Huệ đứng đầu.' },
    { sec: 'Chẵn lẻ', name: 'Câu 8', pts: 1, text: 'Tích 2 × 2 × 2 × ... (mười thừa số 2) là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Lẻ', 'Không rõ', 'Tùy'), ans: 'A', why: 'Có thừa số 2 nên tích chia hết cho 2, là số chẵn.' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'Biết mọi số chia hết cho 4 đều chia hết cho 2. Số 12 chia hết cho 4, vậy 12 có chia hết cho 2 không?', opts: o4('Không', 'Có', 'Không rõ', 'Tùy'), ans: 'B', why: '12 chia hết cho 4 nên theo quy tắc, 12 cũng chia hết cho 2.' },
    { sec: 'Chẵn lẻ', name: 'Câu 10', pts: 1, text: 'Tổng của ba số lẻ là số chẵn hay số lẻ?', opts: o4('Chẵn', 'Không rõ', 'Tùy', 'Lẻ'), ans: 'D', why: 'Lẻ + lẻ = chẵn, chẵn + lẻ = lẻ; ví dụ 1 + 3 + 5 = 9 là số lẻ.' },
  ],
},

/* ═══════════ ĐỀ 30 — TỔNG HỢP BỒI DƯỠNG HSG ═══════════ */
{
  id: 7720, title: 'Đề 30 · Tổng hợp bồi dưỡng HSG', time: 20,
  questions: [
    { sec: 'Gà và chó', name: 'Câu 1', pts: 1, text: 'Gà và chó có 30 con, 84 chân. Có mấy con chó?', opts: o4('12', '18', '15', '10'), ans: 'A', why: 'Toàn gà: 60 chân, thiếu 24; 24 : 2 = 12 con chó.' },
    { sec: 'Trồng cây', name: 'Câu 2', pts: 1, text: 'Trồng cây trên đường 45 m, cách 5 m, cả hai đầu. Có mấy cây?', opts: o4('9', '10', '11', '8'), ans: 'B', why: 'Số cây = 45 : 5 + 1 = 10.' },
    { sec: 'Tổng – hiệu', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 96, hiệu 14. Số lớn là bao nhiêu?', opts: o4('41', '50', '55', '48'), ans: 'C', why: 'Số lớn = (96 + 14) : 2 = 55.' },
    { sec: 'Dãy số', name: 'Câu 4', pts: 1, text: 'Số tiếp theo: 2, 6, 18, 54, ...?', opts: o4('108', '120', '216', '162'), ans: 'D', why: 'Mỗi số gấp 3 lần số trước: 54 × 3 = 162.' },
    { sec: 'Bắt tay', name: 'Câu 5', pts: 1, text: '7 người bắt tay nhau, mỗi cặp một lần. Có mấy cái bắt tay?', opts: o4('21', '14', '28', '49'), ans: 'A', why: 'Số bắt tay = 6 + 5 + 4 + 3 + 2 + 1 = 21.' },
    { sec: 'Số học', name: 'Câu 6', pts: 1, text: 'Số bé nhất có 4 chữ số khác nhau là số nào?', opts: o4('1000', '1023', '1234', '1032'), ans: 'B', why: 'Chữ số đầu nhỏ nhất khác 0 là 1, rồi 0, 2, 3 → số bé nhất có 4 chữ số khác nhau là 1023.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: '8 × 125 × 9 = ?', opts: o4('1000', '8000', '9000', '900'), ans: 'C', why: '8 × 125 = 1000, 1000 × 9 = 9000.' },
    { sec: 'Tuổi', name: 'Câu 8', pts: 1, text: 'Tuổi bố gấp 3 lần tuổi con, tổng số tuổi hai bố con là 48. Con bao nhiêu tuổi?', opts: o4('36', '16', '9', '12'), ans: 'D', why: 'Tổng số phần = 1 + 3 = 4; tuổi con = 48 : 4 = 12.' },
    { sec: 'Cưa gỗ', name: 'Câu 9', pts: 1, text: 'Cưa một khúc gỗ thành 10 đoạn cần mấy nhát cưa?', opts: o4('9', '10', '8', '11'), ans: 'A', why: 'Số nhát = 10 − 1 = 9.' },
    { sec: 'Tổng dãy', name: 'Câu 10', pts: 1, text: 'Tổng các số từ 1 đến 30 bằng bao nhiêu?', opts: o4('450', '465', '455', '470'), ans: 'B', why: 'Tổng = (1 + 30) × 30 : 2 = 31 × 15 = 465.' },
  ],
},

];

SUBJECTS.push({
  id: 'ttd4', name: 'Toán tư duy', short: 'Tư duy 4', icon: '💡', grade: 4,
  exams: TTD4_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 4 — gà và chó, trồng cây, tổng – hiệu – tỉ, dãy số và suy luận',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; dạng bồi dưỡng HSG (Trung Quốc · Nga · Úc)',
});
