// TOÁN TƯ DUY — LỚP 1
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
//
// Biên soạn theo PHONG CÁCH các đề tư duy quốc tế cho lứa 6-7 tuổi (Math Kangaroo
// Pre-Ecolier và tương tự), KHÔNG sao chép nguyên văn: quy luật, đếm thông minh, so sánh,
// suy luận đơn giản, hình học trực quan, toán đố vui. Số trong phạm vi 20 (đôi chỗ tới 100).

const TTD1_EXAMS = [

/* ═══════════ ĐỀ 1 — QUY LUẬT ═══════════ */
{
  id: 5801, title: 'Đề 1 · Tìm quy luật', time: 15,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 2, 4, 6, 8, ...?', opts: o4('9', '10', '11', '12'), ans: 'B', why: 'Dãy cách nhau 2: sau 8 là 10.' },
    { sec: 'Quy luật', name: 'Câu 2', pts: 1, text: 'Số tiếp theo: 1, 3, 5, 7, ...?', opts: o4('8', '9', '10', '11'), ans: 'B', why: 'Dãy số lẻ cách nhau 2: sau 7 là 9.' },
    { sec: 'Quy luật', name: 'Câu 3', pts: 1, text: 'Số tiếp theo: 5, 10, 15, ...?', opts: o4('16', '18', '20', '25'), ans: 'C', why: 'Dãy cách nhau 5: sau 15 là 20.' },
    { sec: 'Quy luật', name: 'Câu 4', pts: 1, text: 'Hình tiếp theo: 🔴🔵🔴🔵🔴 ...?', opts: o4('🔵', '🔴', '🟢', '🟡'), ans: 'A', why: 'Đỏ – xanh xen kẽ, sau 🔴 là 🔵.' },
    { sec: 'Quy luật', name: 'Câu 5', pts: 1, text: 'Số tiếp theo: 10, 20, 30, ...?', opts: o4('31', '35', '40', '50'), ans: 'C', why: 'Dãy cách nhau 10: sau 30 là 40.' },
    { sec: 'Quy luật', name: 'Câu 6', pts: 1, text: 'Hình tiếp theo: 🔺⚫🔺⚫🔺 ...?', opts: o4('⚫', '🔺', '🔵', '⭐'), ans: 'A', why: 'Tam giác – tròn đen xen kẽ, sau 🔺 là ⚫.' },
    { sec: 'Quy luật', name: 'Câu 7', pts: 1, text: 'Số tiếp theo: 3, 6, 9, ...?', opts: o4('10', '11', '12', '13'), ans: 'C', why: 'Dãy cách nhau 3: sau 9 là 12.' },
    { sec: 'Quy luật', name: 'Câu 8', pts: 1, text: 'Đếm ngược: 20, 18, 16, ...?', opts: o4('15', '14', '13', '12'), ans: 'B', why: 'Dãy giảm 2: sau 16 là 14.' },
    { sec: 'Quy luật', name: 'Câu 9', pts: 1, text: 'Chữ tiếp theo: A, B, A, B, A, ...?', opts: o4('A', 'B', 'C', 'D'), ans: 'B', why: 'A – B xen kẽ, sau A là B.' },
    { sec: 'Quy luật', name: 'Câu 10', pts: 1, text: 'Số tiếp theo: 1, 1, 2, 2, 3, 3, ...?', opts: o4('3', '4', '5', '6'), ans: 'B', why: 'Mỗi số lặp 2 lần: sau cặp 3, 3 là 4.' },
  ],
},

/* ═══════════ ĐỀ 2 — ĐẾM THÔNG MINH ═══════════ */
{
  id: 5802, title: 'Đề 2 · Đếm thông minh', time: 15,
  questions: [
    { sec: 'Đếm', name: 'Câu 1', pts: 1, text: 'Có mấy hình tam giác? 🔺🔺🔺', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Đếm được 3 hình tam giác.' },
    { sec: 'Đếm chân', name: 'Câu 2', pts: 1, text: '2 con gà có tất cả mấy chân?', opts: o4('2', '4', '6', '8'), ans: 'B', why: 'Mỗi con gà 2 chân, 2 con là 2 + 2 = 4 chân.' },
    { sec: 'Đếm tai', name: 'Câu 3', pts: 1, text: '3 con mèo có tất cả mấy cái tai?', opts: o4('3', '5', '6', '9'), ans: 'C', why: 'Mỗi con 2 tai, 3 con là 2 + 2 + 2 = 6 tai.' },
    { sec: 'Đếm', name: 'Câu 4', pts: 1, text: 'Hai bàn tay có tất cả mấy ngón?', opts: o4('5', '8', '10', '12'), ans: 'C', why: 'Mỗi bàn tay 5 ngón, hai bàn là 5 + 5 = 10 ngón.' },
    { sec: 'Đếm ngày', name: 'Câu 5', pts: 1, text: 'Một tuần có mấy ngày?', opts: o4('5', '6', '7', '10'), ans: 'C', why: 'Một tuần có 7 ngày.' },
    { sec: 'Đếm bánh', name: 'Câu 6', pts: 1, text: 'Mỗi ô tô có 4 bánh xe. 2 ô tô có mấy bánh xe?', opts: o4('6', '8', '4', '10'), ans: 'B', why: '4 + 4 = 8 bánh xe.' },
    { sec: 'Đếm kẹo', name: 'Câu 7', pts: 1, text: 'Có 3 hộp, mỗi hộp 2 viên kẹo. Tất cả mấy viên?', opts: o4('5', '6', '8', '3'), ans: 'B', why: '2 + 2 + 2 = 6 viên kẹo.' },
    { sec: 'Bớt', name: 'Câu 8', pts: 1, text: '10 ngón tay, gập lại 3 ngón. Còn mấy ngón thẳng?', opts: o4('6', '7', '8', '13'), ans: 'B', why: '10 − 3 = 7 ngón.' },
    { sec: 'Gộp', name: 'Câu 9', pts: 1, text: 'Có 2 con chó và 3 con gà. Tất cả mấy con vật?', opts: o4('4', '5', '6', '23'), ans: 'B', why: '2 + 3 = 5 con vật.' },
    { sec: 'Đếm chân', name: 'Câu 10', pts: 1, text: '2 con chó (4 chân mỗi con) và 2 con gà (2 chân mỗi con) có mấy chân?', opts: o4('8', '10', '12', '14'), ans: 'C', why: 'Chó: 4 + 4 = 8; gà: 2 + 2 = 4; tất cả 8 + 4 = 12 chân.' },
  ],
},

/* ═══════════ ĐỀ 3 — SO SÁNH, NHIỀU – ÍT ═══════════ */
{
  id: 5803, title: 'Đề 3 · So sánh nhiều hơn, ít hơn', time: 15,
  questions: [
    { sec: 'So sánh', name: 'Câu 1', pts: 1, text: 'Nam có 5 kẹo, Lan có 3 kẹo. Ai có nhiều kẹo hơn?', opts: o4('Nam', 'Lan', 'Bằng nhau', 'Không biết'), ans: 'A', why: '5 > 3 nên Nam nhiều hơn.' },
    { sec: 'So sánh', name: 'Câu 2', pts: 1, text: 'Nam có 5 kẹo, Lan có 3 kẹo. Nam nhiều hơn Lan mấy kẹo?', opts: o4('1', '2', '3', '8'), ans: 'B', why: '5 − 3 = 2 kẹo.' },
    { sec: 'Xếp thứ tự', name: 'Câu 3', pts: 1, text: 'An cao hơn Bình, Bình cao hơn Cường. Ai cao nhất?', opts: o4('An', 'Bình', 'Cường', 'Bằng nhau'), ans: 'A', why: 'An cao hơn Bình, Bình cao hơn Cường nên An cao nhất.' },
    { sec: 'Xếp thứ tự', name: 'Câu 4', pts: 1, text: 'An cao hơn Bình, Bình cao hơn Cường. Ai thấp nhất?', opts: o4('An', 'Bình', 'Cường', 'Bằng nhau'), ans: 'C', why: 'Cường thấp hơn Bình, Bình thấp hơn An nên Cường thấp nhất.' },
    { sec: 'Tìm số', name: 'Câu 5', pts: 1, text: 'Số nào lớn hơn 5 và bé hơn 7?', opts: o4('5', '6', '7', '8'), ans: 'B', why: 'Số ở giữa 5 và 7 là 6.' },
    { sec: 'Lớn nhất', name: 'Câu 6', pts: 1, text: 'Số lớn nhất trong 9, 5, 7 là số nào?', opts: o4('9', '5', '7', '3'), ans: 'A', why: '9 lớn nhất.' },
    { sec: 'Ước lượng', name: 'Câu 7', pts: 1, text: 'Con voi và con kiến, con nào nặng hơn?', opts: o4('Con voi', 'Con kiến', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'Con voi rất to nên nặng hơn con kiến.' },
    { sec: 'So sánh', name: 'Câu 8', pts: 1, text: '3 + 2 và 2 + 3 có kết quả thế nào?', opts: o4('Bằng nhau', '3 + 2 lớn hơn', '2 + 3 lớn hơn', 'Không so được'), ans: 'A', why: '3 + 2 = 5 và 2 + 3 = 5 nên bằng nhau.' },
    { sec: 'So sánh', name: 'Câu 9', pts: 1, text: 'So sánh: 4 + 1 ... 5 − 1', opts: o4('>', '<', '=', 'Không so được'), ans: 'A', why: '4 + 1 = 5 và 5 − 1 = 4; 5 > 4 nên dấu >.' },
    { sec: 'Cân bằng', name: 'Câu 10', pts: 1, text: 'Rổ A có 6 quả, rổ B có 4 quả. Chuyển mấy quả từ A sang B để hai rổ bằng nhau?', opts: o4('1', '2', '3', '4'), ans: 'A', why: 'Chuyển 1 quả: A còn 5, B thành 5, bằng nhau.' },
  ],
},

/* ═══════════ ĐỀ 4 — SUY LUẬN ĐƠN GIẢN ═══════════ */
{
  id: 5804, title: 'Đề 4 · Suy luận đơn giản', time: 15,
  questions: [
    { sec: 'Thứ trong tuần', name: 'Câu 1', pts: 1, text: 'Hôm nay là thứ Hai. Ngày mai là thứ mấy?', opts: o4('Chủ nhật', 'Thứ Ba', 'Thứ Tư', 'Thứ Hai'), ans: 'B', why: 'Sau thứ Hai là thứ Ba.' },
    { sec: 'Thứ trong tuần', name: 'Câu 2', pts: 1, text: 'Hôm nay là thứ Tư. Hôm qua là thứ mấy?', opts: o4('Thứ Ba', 'Thứ Năm', 'Thứ Hai', 'Thứ Sáu'), ans: 'A', why: 'Trước thứ Tư là thứ Ba.' },
    { sec: 'Khác nhóm', name: 'Câu 3', pts: 1, text: 'Vật nào không cùng nhóm: táo, cam, chuối, bàn?', opts: o4('táo', 'cam', 'chuối', 'bàn'), ans: 'D', why: 'Táo, cam, chuối là quả; "bàn" là đồ vật nên khác nhóm.' },
    { sec: 'Khác nhóm', name: 'Câu 4', pts: 1, text: 'Con nào không biết bay: chim, ong, bướm, cá?', opts: o4('chim', 'ong', 'bướm', 'cá'), ans: 'D', why: 'Chim, ong, bướm biết bay; cá sống dưới nước, không bay.' },
    { sec: 'Tuổi', name: 'Câu 5', pts: 1, text: 'Bố, con và em bé — ai lớn tuổi nhất?', opts: o4('Bố', 'Con', 'Em bé', 'Bằng nhau'), ans: 'A', why: 'Bố là người lớn tuổi nhất.' },
    { sec: 'Thứ tự', name: 'Câu 6', pts: 1, text: 'Nam đứng trước Lan, Lan đứng trước Hoa. Ai đứng cuối?', opts: o4('Nam', 'Lan', 'Hoa', 'Không rõ'), ans: 'C', why: 'Thứ tự: Nam, Lan, Hoa nên Hoa đứng cuối.' },
    { sec: 'Cộng 0', name: 'Câu 7', pts: 1, text: '0 + 8 = ?', opts: o4('0', '8', '80', '18'), ans: 'B', why: 'Cộng với 0 giữ nguyên: 0 + 8 = 8.' },
    { sec: 'Chia đều', name: 'Câu 8', pts: 1, text: 'Có 3 quả táo chia đều cho 3 bạn. Mỗi bạn mấy quả?', opts: o4('1', '2', '3', '0'), ans: 'A', why: '3 quả chia 3 bạn, mỗi bạn 1 quả.' },
    { sec: 'Cắt bánh', name: 'Câu 9', pts: 1, text: 'Một cái bánh cắt 1 nhát thẳng thì được mấy phần?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Một nhát cắt thẳng chia bánh thành 2 phần.' },
    { sec: 'Số liền trước', name: 'Câu 10', pts: 1, text: 'Số đứng ngay trước số 1 là số nào?', opts: o4('0', '2', '1', '9'), ans: 'A', why: 'Số liền trước 1 là 0.' },
  ],
},

/* ═══════════ ĐỀ 5 — HÌNH HỌC TƯ DUY ═══════════ */
{
  id: 5805, title: 'Đề 5 · Hình học tư duy', time: 15,
  questions: [
    { sec: 'Hình', name: 'Câu 1', pts: 1, text: 'Hình vuông có mấy cạnh?', opts: o4('3', '4', '5', '6'), ans: 'B', why: 'Hình vuông có 4 cạnh.' },
    { sec: 'Hình', name: 'Câu 2', pts: 1, text: 'Hình tam giác có mấy cạnh?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Hình tam giác có 3 cạnh.' },
    { sec: 'Ghép hình', name: 'Câu 3', pts: 1, text: 'Ghép 2 hình tam giác vuông bằng nhau có thể được hình gì?', opts: o4('Hình vuông', 'Hình tròn', 'Hình bầu dục', 'Khối cầu'), ans: 'A', why: 'Hai tam giác vuông bằng nhau ghép lại có thể tạo thành hình vuông (hoặc chữ nhật).' },
    { sec: 'Đếm hình', name: 'Câu 4', pts: 1, text: 'Có mấy hình tròn? ⚪⚪⚪⚪', opts: o4('2', '3', '4', '5'), ans: 'C', why: 'Đếm được 4 hình tròn.' },
    { sec: 'Khối', name: 'Câu 5', pts: 1, text: 'Khối nào lăn được: khối cầu hay khối hộp?', opts: o4('Khối cầu', 'Khối hộp', 'Cả hai', 'Không khối nào'), ans: 'A', why: 'Khối cầu tròn nên lăn được; khối hộp có mặt phẳng nên không lăn.' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'Hình nào có nhiều cạnh hơn: hình tam giác hay hình vuông?', opts: o4('Hình vuông', 'Hình tam giác', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'Hình vuông 4 cạnh, tam giác 3 cạnh nên hình vuông nhiều cạnh hơn.' },
    { sec: 'Góc', name: 'Câu 7', pts: 1, text: 'Hình vuông có mấy góc?', opts: o4('2', '3', '4', '5'), ans: 'C', why: 'Hình vuông có 4 góc.' },
    { sec: 'Gấp giấy', name: 'Câu 8', pts: 1, text: 'Gấp đôi một tờ giấy hình vuông (theo đường giữa) thường được hình gì?', opts: o4('Hình chữ nhật', 'Hình tròn', 'Khối cầu', 'Tam giác đều'), ans: 'A', why: 'Gấp đôi hình vuông theo đường giữa được hình chữ nhật.' },
    { sec: 'Nhận dạng', name: 'Câu 9', pts: 1, text: 'Bánh xe có dạng hình gì?', opts: o4('Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'), ans: 'A', why: 'Bánh xe có dạng hình tròn.' },
    { sec: 'Khối', name: 'Câu 10', pts: 1, text: 'Viên gạch (viên gạch xây nhà) có dạng khối gì?', opts: o4('Khối hộp chữ nhật', 'Khối cầu', 'Khối trụ', 'Khối nón'), ans: 'A', why: 'Viên gạch có dạng khối hộp chữ nhật.' },
  ],
},

/* ═══════════ ĐỀ 6 — TOÁN ĐỐ VUI ═══════════ */
{
  id: 5806, title: 'Đề 6 · Toán đố vui', time: 15,
  questions: [
    { sec: 'Bớt', name: 'Câu 1', pts: 1, text: 'Có 6 con chim đậu trên cây, 2 con bay đi. Còn mấy con?', opts: o4('3', '4', '5', '8'), ans: 'B', why: '6 − 2 = 4 con.' },
    { sec: 'Bớt', name: 'Câu 2', pts: 1, text: 'Có 4 con chim, cả 4 con bay đi. Còn mấy con?', opts: o4('0', '1', '4', '8'), ans: 'A', why: '4 − 4 = 0 con.' },
    { sec: 'Chia', name: 'Câu 3', pts: 1, text: 'Mẹ có 10 quả, cho 2 con mỗi con 3 quả. Mẹ còn mấy quả?', opts: o4('3', '4', '5', '6'), ans: 'B', why: 'Cho đi 3 + 3 = 6 quả; còn 10 − 6 = 4 quả.' },
    { sec: 'Gộp', name: 'Câu 4', pts: 1, text: 'Hai anh em, mỗi người có 2 cái kẹo. Tất cả mấy cái?', opts: o4('2', '3', '4', '5'), ans: 'C', why: '2 + 2 = 4 cái kẹo.' },
    { sec: 'Đố', name: 'Câu 5', pts: 1, text: 'Có 5 quả trứng, 1 quả bị vỡ. Còn mấy quả nguyên?', opts: o4('3', '4', '5', '6'), ans: 'B', why: '5 − 1 = 4 quả nguyên.' },
    { sec: 'Gộp', name: 'Câu 6', pts: 1, text: 'Lan gấp 3 con hạc, Mai gấp 4 con. Cả hai gấp mấy con?', opts: o4('6', '7', '8', '12'), ans: 'B', why: '3 + 4 = 7 con hạc.' },
    { sec: 'Chia đều', name: 'Câu 7', pts: 1, text: 'Chia 6 cái kẹo cho 2 bạn bằng nhau. Mỗi bạn mấy cái?', opts: o4('2', '3', '4', '6'), ans: 'B', why: '6 chia 2 bằng 3, mỗi bạn 3 cái.' },
    { sec: 'Chia đều', name: 'Câu 8', pts: 1, text: 'Có 8 bông hoa cắm vào 2 lọ bằng nhau. Mỗi lọ mấy bông?', opts: o4('2', '3', '4', '6'), ans: 'C', why: '8 chia 2 bằng 4, mỗi lọ 4 bông.' },
    { sec: 'Chục', name: 'Câu 9', pts: 1, text: 'Một chục quả trứng, ăn 2 quả. Còn mấy quả?', opts: o4('6', '7', '8', '10'), ans: 'C', why: 'Một chục là 10; 10 − 2 = 8 quả.' },
    { sec: 'Gấp', name: 'Câu 10', pts: 1, text: 'Có 3 xe, mỗi xe chở 2 bạn. Chở được tất cả mấy bạn?', opts: o4('5', '6', '8', '3'), ans: 'B', why: '2 + 2 + 2 = 6 bạn.' },
  ],
},

/* ═══════════ ĐỀ 7 — SỐ VÀ CHỮ SỐ ═══════════ */
{
  id: 5807, title: 'Đề 7 · Số và chữ số', time: 15,
  questions: [
    { sec: 'Số', name: 'Câu 1', pts: 1, text: 'Số lớn nhất có 1 chữ số là số nào?', opts: o4('8', '9', '10', '0'), ans: 'B', why: 'Số lớn nhất có 1 chữ số là 9.' },
    { sec: 'Số', name: 'Câu 2', pts: 1, text: 'Số bé nhất có 2 chữ số là số nào?', opts: o4('9', '10', '11', '99'), ans: 'B', why: 'Số bé nhất có 2 chữ số là 10.' },
    { sec: 'Chục', name: 'Câu 3', pts: 1, text: 'Số 15 có mấy chục?', opts: o4('1', '5', '15', '0'), ans: 'A', why: '15 có 1 chục và 5 đơn vị.' },
    { sec: 'Đếm', name: 'Câu 4', pts: 1, text: 'Từ 1 đến 5 có mấy số?', opts: o4('4', '5', '6', '3'), ans: 'B', why: 'Các số 1, 2, 3, 4, 5 — có 5 số.' },
    { sec: 'Số giữa', name: 'Câu 5', pts: 1, text: 'Số ở giữa 4 và 6 là số nào?', opts: o4('3', '5', '7', '2'), ans: 'B', why: 'Số ở giữa 4 và 6 là 5.' },
    { sec: 'Số chẵn', name: 'Câu 6', pts: 1, text: 'Số nào là số chẵn: 3, 5, 6, 7?', opts: o4('3', '5', '6', '7'), ans: 'C', why: 'Số chẵn chia hết cho 2; trong các số trên chỉ có 6.' },
    { sec: 'Số lẻ', name: 'Câu 7', pts: 1, text: 'Số nào là số lẻ: 2, 4, 5, 8?', opts: o4('2', '4', '5', '8'), ans: 'C', why: '5 là số lẻ; 2, 4, 8 là số chẵn.' },
    { sec: 'Đếm số lẻ', name: 'Câu 8', pts: 1, text: 'Từ 1 đến 10 có mấy số lẻ?', opts: o4('4', '5', '6', '10'), ans: 'B', why: 'Các số lẻ: 1, 3, 5, 7, 9 — có 5 số.' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Số nào bé hơn 3?', opts: o4('3', '4', '2', '5'), ans: 'C', why: '2 bé hơn 3.' },
    { sec: 'Bớt', name: 'Câu 10', pts: 1, text: 'Số 9 lùi lại 2 là số nào?', opts: o4('6', '7', '8', '11'), ans: 'B', why: '9 − 2 = 7.' },
  ],
},

/* ═══════════ ĐỀ 8 — SUY LUẬN THỨ TỰ VÀ CÂN ═══════════ */
{
  id: 5808, title: 'Đề 8 · Nặng nhẹ, cao thấp, nhanh chậm', time: 15,
  questions: [
    { sec: 'Cân', name: 'Câu 1', pts: 1, text: 'A nặng hơn B, B nặng hơn C. Ai nhẹ nhất?', opts: o4('A', 'B', 'C', 'Bằng nhau'), ans: 'C', why: 'C nhẹ hơn B, B nhẹ hơn A nên C nhẹ nhất.' },
    { sec: 'Cân', name: 'Câu 2', pts: 1, text: '1 quả cam cân bằng 2 quả quýt. Vậy 2 quả cam cân bằng mấy quả quýt?', opts: o4('2', '3', '4', '6'), ans: 'C', why: 'Mỗi quả cam = 2 quýt, 2 cam = 2 + 2 = 4 quýt.' },
    { sec: 'Cao thấp', name: 'Câu 3', pts: 1, text: 'Tháp cao hơn nhà, nhà cao hơn cây. Cái gì cao nhất?', opts: o4('Tháp', 'Nhà', 'Cây', 'Bằng nhau'), ans: 'A', why: 'Tháp cao hơn nhà, nhà cao hơn cây nên tháp cao nhất.' },
    { sec: 'Nhanh chậm', name: 'Câu 4', pts: 1, text: 'Nam nhanh hơn Bình, Bình nhanh hơn Cường. Ai chậm nhất?', opts: o4('Nam', 'Bình', 'Cường', 'Bằng nhau'), ans: 'C', why: 'Cường chậm hơn Bình, Bình chậm hơn Nam nên Cường chậm nhất.' },
    { sec: 'Thứ hạng', name: 'Câu 5', pts: 1, text: 'Chạy thi: Nam về trước Lan, Lan về trước Hoa. Nam về thứ mấy?', opts: o4('Thứ nhất', 'Thứ hai', 'Thứ ba', 'Cuối cùng'), ans: 'A', why: 'Nam về trước tất cả nên Nam về thứ nhất.' },
    { sec: 'Thứ tự', name: 'Câu 6', pts: 1, text: 'Có 4 bạn xếp hàng, Lan đứng thứ 2. Trước Lan có mấy bạn?', opts: o4('0', '1', '2', '3'), ans: 'B', why: 'Đứng thứ 2 thì phía trước có 1 bạn.' },
    { sec: 'Nhanh chậm', name: 'Câu 7', pts: 1, text: 'Con sên bò chậm, con thỏ chạy nhanh. Con nào tới đích trước?', opts: o4('Con thỏ', 'Con sên', 'Cùng lúc', 'Không con nào'), ans: 'A', why: 'Thỏ chạy nhanh hơn nên tới đích trước.' },
    { sec: 'Cân', name: 'Câu 8', pts: 1, text: '1 quả táo cân bằng 3 quả mận. Vậy 1 quả táo và 1 quả mận cân bằng mấy quả mận?', opts: o4('3', '4', '5', '6'), ans: 'B', why: '1 táo = 3 mận, thêm 1 mận nữa là 3 + 1 = 4 mận.' },
    { sec: 'Xếp thứ tự', name: 'Câu 9', pts: 1, text: 'Bạn cao 1 m, cây cao 2 m, nhà cao 5 m. Xếp từ thấp đến cao là:', opts: o4('bạn, cây, nhà', 'nhà, cây, bạn', 'cây, bạn, nhà', 'bạn, nhà, cây'), ans: 'A', why: '1 m < 2 m < 5 m nên: bạn, cây, nhà.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Nếu A cao hơn B và B cao hơn C thì A và C thế nào?', opts: o4('A cao hơn C', 'C cao hơn A', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'A cao hơn B, B cao hơn C nên A cao hơn C.' },
  ],
},

/* ═══════════ ĐỀ 9 — TÁCH GỘP, GẤP ĐÔI, MỘT NỬA ═══════════ */
{
  id: 5809, title: 'Đề 9 · Gấp đôi và một nửa', time: 15,
  questions: [
    { sec: 'Thứ tự', name: 'Câu 1', pts: 1, text: '3 con vịt đứng thành hàng dọc. Con ở giữa đứng thứ mấy?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Hàng 3 con thì con giữa đứng thứ 2.' },
    { sec: 'Đổi', name: 'Câu 2', pts: 1, text: '2 bạn, mỗi bạn có 1 quả bóng, đổi bóng cho nhau. Mỗi bạn còn mấy quả?', opts: o4('0', '1', '2', '4'), ans: 'B', why: 'Đổi bóng thì mỗi bạn vẫn có 1 quả.' },
    { sec: 'Một nửa', name: 'Câu 3', pts: 1, text: 'Một nửa của 10 là mấy?', opts: o4('2', '5', '8', '20'), ans: 'B', why: '10 chia 2 bằng 5.' },
    { sec: 'Một nửa', name: 'Câu 4', pts: 1, text: 'Một nửa của 6 là mấy?', opts: o4('2', '3', '4', '12'), ans: 'B', why: '6 chia 2 bằng 3.' },
    { sec: 'Gấp đôi', name: 'Câu 5', pts: 1, text: 'Gấp đôi của 4 là mấy?', opts: o4('2', '6', '8', '4'), ans: 'C', why: '4 + 4 = 8.' },
    { sec: 'Gấp đôi', name: 'Câu 6', pts: 1, text: 'Gấp đôi của 5 là mấy?', opts: o4('7', '10', '15', '25'), ans: 'B', why: '5 + 5 = 10.' },
    { sec: 'Đôi', name: 'Câu 7', pts: 1, text: 'Một đôi dép có mấy chiếc?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Một đôi gồm 2 chiếc.' },
    { sec: 'Đôi', name: 'Câu 8', pts: 1, text: 'Hai đôi đũa có mấy chiếc đũa?', opts: o4('2', '3', '4', '8'), ans: 'C', why: 'Mỗi đôi 2 chiếc, hai đôi là 2 + 2 = 4 chiếc.' },
    { sec: 'Chục', name: 'Câu 9', pts: 1, text: 'Một chục là mấy?', opts: o4('5', '9', '10', '12'), ans: 'C', why: 'Một chục là 10.' },
    { sec: 'Nửa chục', name: 'Câu 10', pts: 1, text: 'Nửa chục là mấy?', opts: o4('2', '5', '10', '15'), ans: 'B', why: 'Một chục là 10, nửa chục là 5.' },
  ],
},

/* ═══════════ ĐỀ 10 — TỔNG HỢP ═══════════ */
{
  id: 5810, title: 'Đề 10 · Ôn tập tổng hợp', time: 15,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 2, 4, 6, ...?', opts: o4('7', '8', '9', '10'), ans: 'B', why: 'Dãy cách 2: sau 6 là 8.' },
    { sec: 'Đếm chân', name: 'Câu 2', pts: 1, text: '2 con gà có mấy chân?', opts: o4('2', '4', '6', '8'), ans: 'B', why: '2 + 2 = 4 chân.' },
    { sec: 'Số', name: 'Câu 3', pts: 1, text: 'Số bé nhất có 2 chữ số là số nào?', opts: o4('9', '10', '11', '99'), ans: 'B', why: 'Số bé nhất có 2 chữ số là 10.' },
    { sec: 'Suy luận', name: 'Câu 4', pts: 1, text: 'A cao hơn B, B cao hơn C. Ai thấp nhất?', opts: o4('A', 'B', 'C', 'Bằng nhau'), ans: 'C', why: 'C thấp nhất.' },
    { sec: 'Một nửa', name: 'Câu 5', pts: 1, text: 'Một nửa của 8 là mấy?', opts: o4('2', '3', '4', '16'), ans: 'C', why: '8 chia 2 bằng 4.' },
    { sec: 'Bớt', name: 'Câu 6', pts: 1, text: 'Có 5 con chim, bay đi 2 con. Còn mấy con?', opts: o4('2', '3', '4', '7'), ans: 'B', why: '5 − 2 = 3 con.' },
    { sec: 'Hình', name: 'Câu 7', pts: 1, text: 'Hình tam giác có mấy cạnh?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Tam giác có 3 cạnh.' },
    { sec: 'Số lẻ', name: 'Câu 8', pts: 1, text: 'Số nào là số lẻ: 2, 4, 7, 8?', opts: o4('2', '4', '7', '8'), ans: 'C', why: '7 là số lẻ.' },
    { sec: 'Thứ trong tuần', name: 'Câu 9', pts: 1, text: 'Hôm nay thứ Ba, ngày mai thứ mấy?', opts: o4('Thứ Hai', 'Thứ Tư', 'Thứ Năm', 'Chủ nhật'), ans: 'B', why: 'Sau thứ Ba là thứ Tư.' },
    { sec: 'Gấp đôi', name: 'Câu 10', pts: 1, text: 'Gấp đôi của 6 là mấy?', opts: o4('3', '8', '12', '16'), ans: 'C', why: '6 + 6 = 12.' },
  ],
},

/* ═══════════ ĐỀ 11 — QUY LUẬT HÌNH VÀ SỐ ═══════════ */
{
  id: 8761, title: 'Đề 11 · Quy luật hình và số', time: 20,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Hình tiếp theo: ⭐🌙⭐🌙⭐ ...?', opts: o4('⭐', '🌙', '☀️', '☁️'), ans: 'B', why: 'Sao – trăng xen kẽ, sau ⭐ là 🌙.' },
    { sec: 'Quy luật', name: 'Câu 2', pts: 1, text: 'Số tiếp theo: 4, 8, 12, ...?', opts: o4('14', '15', '16', '20'), ans: 'C', why: 'Dãy cách nhau 4: sau 12 là 16.' },
    { sec: 'Quy luật', name: 'Câu 3', pts: 1, text: 'Đếm ngược: 15, 12, 9, ...?', opts: o4('8', '7', '6', '5'), ans: 'C', why: 'Dãy giảm 3: sau 9 là 6.' },
    { sec: 'Quy luật', name: 'Câu 4', pts: 1, text: 'Hình tiếp theo: 🍎🍎🍌🍎🍎🍌 ...?', opts: o4('🍌', '🍎', '🍇', '🍊'), ans: 'B', why: 'Cứ 2 táo rồi 1 chuối lặp lại; sau nhóm là 🍎.' },
    { sec: 'Quy luật', name: 'Câu 5', pts: 1, text: 'Số tiếp theo: 20, 18, 16, 14, ...?', opts: o4('13', '12', '11', '10'), ans: 'B', why: 'Dãy giảm 2: sau 14 là 12.' },
    { sec: 'Quy luật', name: 'Câu 6', pts: 1, text: 'Chữ tiếp theo: A, B, C, A, B, C, A, ...?', opts: o4('A', 'B', 'C', 'D'), ans: 'B', why: 'Nhóm A–B–C lặp lại; sau A là B.' },
    { sec: 'Quy luật', name: 'Câu 7', pts: 1, text: 'Số tiếp theo: 1, 2, 4, 8, ...?', opts: o4('10', '12', '16', '9'), ans: 'C', why: 'Mỗi số gấp đôi số trước: sau 8 là 16.' },
    { sec: 'Quy luật', name: 'Câu 8', pts: 1, text: 'Hình tiếp theo: 🔺🔺🔻🔺🔺🔻 ...?', opts: o4('🔺', '🔻', '⬜', '⭕'), ans: 'A', why: 'Cứ 2 tam giác lên rồi 1 tam giác xuống; sau nhóm là 🔺.' },
    { sec: 'Quy luật', name: 'Câu 9', pts: 1, text: 'Số còn thiếu: 2, 4, __, 8, 10?', opts: o4('5', '6', '7', '9'), ans: 'B', why: 'Dãy cách 2, giữa 4 và 8 là 6.' },
    { sec: 'Quy luật', name: 'Câu 10', pts: 1, text: 'Kích thước tiếp theo: nhỏ, to, nhỏ, to, nhỏ, ...?', opts: o4('nhỏ', 'to', 'bằng', 'không rõ'), ans: 'B', why: 'Nhỏ – to xen kẽ, sau "nhỏ" là "to".' },
  ],
},

/* ═══════════ ĐỀ 12 — ĐẾM VÀ GỘP ═══════════ */
{
  id: 8762, title: 'Đề 12 · Đếm và gộp', time: 20,
  questions: [
    { sec: 'Đếm', name: 'Câu 1', pts: 1, text: 'Có mấy ngôi sao? ⭐⭐⭐⭐⭐', opts: o4('3', '4', '5', '6'), ans: 'C', why: 'Đếm được 5 ngôi sao.' },
    { sec: 'Đếm chân', name: 'Câu 2', pts: 1, text: '3 con chó có tất cả mấy chân?', opts: o4('6', '8', '10', '12'), ans: 'D', why: 'Mỗi con 4 chân, 3 con là 4 + 4 + 4 = 12 chân.' },
    { sec: 'Đếm cánh', name: 'Câu 3', pts: 1, text: '4 con bướm, mỗi con 2 cánh. Tất cả mấy cánh?', opts: o4('6', '8', '4', '10'), ans: 'B', why: '2 + 2 + 2 + 2 = 8 cánh.' },
    { sec: 'Gộp', name: 'Câu 4', pts: 1, text: 'Có 4 quả cam và 5 quả táo. Tất cả mấy quả?', opts: o4('8', '9', '10', '45'), ans: 'B', why: '4 + 5 = 9 quả.' },
    { sec: 'Đếm', name: 'Câu 5', pts: 1, text: 'Bàn tay trái có mấy ngón?', opts: o4('4', '5', '6', '10'), ans: 'B', why: 'Một bàn tay có 5 ngón.' },
    { sec: 'Đếm bánh', name: 'Câu 6', pts: 1, text: 'Mỗi xe đạp có 2 bánh. 3 xe đạp có mấy bánh?', opts: o4('4', '5', '6', '8'), ans: 'C', why: '2 + 2 + 2 = 6 bánh.' },
    { sec: 'Đếm kẹo', name: 'Câu 7', pts: 1, text: 'Có 4 túi, mỗi túi 2 viên kẹo. Tất cả mấy viên?', opts: o4('6', '7', '8', '10'), ans: 'C', why: '2 + 2 + 2 + 2 = 8 viên kẹo.' },
    { sec: 'Đếm', name: 'Câu 8', pts: 1, text: 'Có mấy trái tim? ❤️❤️❤️❤️❤️❤️', opts: o4('4', '5', '6', '7'), ans: 'C', why: 'Đếm được 6 trái tim.' },
    { sec: 'Gộp', name: 'Câu 9', pts: 1, text: 'Trên cây có 3 con chim, bay đến thêm 4 con. Có mấy con?', opts: o4('5', '6', '7', '8'), ans: 'C', why: '3 + 4 = 7 con chim.' },
    { sec: 'Đếm chân', name: 'Câu 10', pts: 1, text: '1 con mèo (4 chân) và 3 con gà (2 chân mỗi con) có mấy chân?', opts: o4('8', '10', '12', '14'), ans: 'B', why: 'Mèo 4 chân; gà 2 + 2 + 2 = 6 chân; tất cả 4 + 6 = 10 chân.' },
  ],
},

/* ═══════════ ĐỀ 13 — SO SÁNH NHIỀU – ÍT – BẰNG ═══════════ */
{
  id: 8763, title: 'Đề 13 · Nhiều hơn, ít hơn, bằng nhau', time: 20,
  questions: [
    { sec: 'So sánh', name: 'Câu 1', pts: 1, text: 'Hoa có 7 bút, Mai có 4 bút. Ai ít bút hơn?', opts: o4('Hoa', 'Mai', 'Bằng nhau', 'Không biết'), ans: 'B', why: '4 < 7 nên Mai ít bút hơn.' },
    { sec: 'So sánh', name: 'Câu 2', pts: 1, text: 'Hoa có 7 bút, Mai có 4 bút. Hoa nhiều hơn Mai mấy bút?', opts: o4('2', '3', '4', '11'), ans: 'B', why: '7 − 4 = 3 bút.' },
    { sec: 'So sánh', name: 'Câu 3', pts: 1, text: 'Nam có 5 bi, Lan cũng có 5 bi. Hai bạn thế nào?', opts: o4('Nam nhiều hơn', 'Lan nhiều hơn', 'Bằng nhau', 'Không biết'), ans: 'C', why: '5 = 5 nên hai bạn bằng nhau.' },
    { sec: 'Lớn nhất', name: 'Câu 4', pts: 1, text: 'Số lớn nhất trong 6, 8, 3, 5 là số nào?', opts: o4('6', '8', '3', '5'), ans: 'B', why: '8 lớn nhất.' },
    { sec: 'Bé nhất', name: 'Câu 5', pts: 1, text: 'Số bé nhất trong 4, 2, 7, 9 là số nào?', opts: o4('4', '2', '7', '9'), ans: 'B', why: '2 bé nhất.' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'So sánh: 3 + 3 ... 2 + 5', opts: o4('>', '<', '=', 'Không so được'), ans: 'B', why: '3 + 3 = 6 và 2 + 5 = 7; 6 < 7 nên dấu <.' },
    { sec: 'Ước lượng', name: 'Câu 7', pts: 1, text: 'Con chuột và con trâu, con nào nặng hơn?', opts: o4('Con chuột', 'Con trâu', 'Bằng nhau', 'Không biết'), ans: 'B', why: 'Con trâu to lớn nên nặng hơn con chuột.' },
    { sec: 'Tìm số', name: 'Câu 8', pts: 1, text: 'Số nào lớn hơn 8 và bé hơn 10?', opts: o4('8', '9', '10', '11'), ans: 'B', why: 'Số ở giữa 8 và 10 là 9.' },
    { sec: 'So sánh', name: 'Câu 9', pts: 1, text: 'Rổ A có 5 quả, rổ B có 5 quả. Muốn A nhiều hơn B 2 quả thì thêm mấy quả vào A?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Thêm 2 quả: A thành 7, hơn B đúng 2 quả.' },
    { sec: 'Cân bằng', name: 'Câu 10', pts: 1, text: 'Đĩa A có 8 quả, đĩa B có 2 quả. Chuyển mấy quả từ A sang B để bằng nhau?', opts: o4('2', '3', '4', '6'), ans: 'B', why: 'Chuyển 3 quả: A còn 5, B thành 5, bằng nhau.' },
  ],
},

/* ═══════════ ĐỀ 14 — SUY LUẬN VÀ TÌM KHÁC NHÓM ═══════════ */
{
  id: 8764, title: 'Đề 14 · Suy luận và tìm hình khác nhóm', time: 20,
  questions: [
    { sec: 'Khác nhóm', name: 'Câu 1', pts: 1, text: 'Con nào không cùng nhóm: chó, mèo, gà, ô tô?', opts: o4('chó', 'mèo', 'gà', 'ô tô'), ans: 'D', why: 'Chó, mèo, gà là con vật; ô tô là đồ vật nên khác nhóm.' },
    { sec: 'Khác nhóm', name: 'Câu 2', pts: 1, text: 'Vật nào không cùng nhóm: 🔴🔴🔵🔴?', opts: o4('cái đỏ thứ nhất', 'cái đỏ thứ hai', 'cái xanh', 'cái đỏ thứ ba'), ans: 'C', why: 'Ba cái màu đỏ, chỉ cái xanh khác màu nên khác nhóm.' },
    { sec: 'Khác nhóm', name: 'Câu 3', pts: 1, text: 'Số nào khác nhóm: 2, 4, 5, 6?', opts: o4('2', '4', '5', '6'), ans: 'C', why: '2, 4, 6 là số chẵn; 5 là số lẻ nên khác nhóm.' },
    { sec: 'Thứ trong tuần', name: 'Câu 4', pts: 1, text: 'Hôm nay là thứ Sáu. Ngày mai là thứ mấy?', opts: o4('Thứ Năm', 'Thứ Bảy', 'Chủ nhật', 'Thứ Sáu'), ans: 'B', why: 'Sau thứ Sáu là thứ Bảy.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'Lan lớn hơn Mai, Mai lớn hơn Hoa. Ai nhỏ tuổi nhất?', opts: o4('Lan', 'Mai', 'Hoa', 'Bằng nhau'), ans: 'C', why: 'Hoa nhỏ hơn Mai, Mai nhỏ hơn Lan nên Hoa nhỏ nhất.' },
    { sec: 'Suy luận', name: 'Câu 6', pts: 1, text: 'Trong hộp chỉ có bi đỏ. Lấy 1 viên bất kì thì viên đó màu gì?', opts: o4('Xanh', 'Đỏ', 'Vàng', 'Không biết'), ans: 'B', why: 'Hộp chỉ có bi đỏ nên viên lấy ra chắc chắn màu đỏ.' },
    { sec: 'Cộng 0', name: 'Câu 7', pts: 1, text: '7 + 0 = ?', opts: o4('0', '7', '70', '17'), ans: 'B', why: 'Cộng với 0 giữ nguyên: 7 + 0 = 7.' },
    { sec: 'Trừ hết', name: 'Câu 8', pts: 1, text: '6 − 6 = ?', opts: o4('0', '1', '6', '12'), ans: 'A', why: 'Trừ đi chính nó bằng 0.' },
    { sec: 'Số liền sau', name: 'Câu 9', pts: 1, text: 'Số đứng ngay sau số 9 là số nào?', opts: o4('8', '10', '11', '19'), ans: 'B', why: 'Số liền sau 9 là 10.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Mèo thích ăn cá, cá sống dưới nước. Muốn bắt cá, mèo tới đâu?', opts: o4('Lên cây', 'Xuống ao', 'Vào tủ', 'Lên trời'), ans: 'B', why: 'Cá sống dưới nước nên muốn bắt cá phải tới ao (chỗ có nước).' },
  ],
},

/* ═══════════ ĐỀ 15 — HÌNH HỌC VÀ ĐẾM CẠNH ═══════════ */
{
  id: 8765, title: 'Đề 15 · Hình học và đếm cạnh', time: 20,
  questions: [
    { sec: 'Hình', name: 'Câu 1', pts: 1, text: 'Hình chữ nhật có mấy cạnh?', opts: o4('3', '4', '5', '6'), ans: 'B', why: 'Hình chữ nhật có 4 cạnh.' },
    { sec: 'Hình', name: 'Câu 2', pts: 1, text: 'Hình tròn có mấy góc?', opts: o4('0', '1', '3', '4'), ans: 'A', why: 'Hình tròn không có góc nào.' },
    { sec: 'Đếm hình', name: 'Câu 3', pts: 1, text: 'Có mấy hình vuông? ⬜⬜⬜', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Đếm được 3 hình vuông.' },
    { sec: 'Đếm cạnh', name: 'Câu 4', pts: 1, text: 'Một hình tam giác và một hình vuông có tất cả mấy cạnh?', opts: o4('6', '7', '8', '9'), ans: 'B', why: 'Tam giác 3 cạnh, vuông 4 cạnh; 3 + 4 = 7 cạnh.' },
    { sec: 'Khối', name: 'Câu 5', pts: 1, text: 'Quả bóng có dạng khối gì?', opts: o4('Khối cầu', 'Khối hộp', 'Khối trụ', 'Khối nón'), ans: 'A', why: 'Quả bóng tròn nên có dạng khối cầu.' },
    { sec: 'Nhận dạng', name: 'Câu 6', pts: 1, text: 'Mặt đồng hồ tròn có dạng hình gì?', opts: o4('Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'), ans: 'B', why: 'Mặt đồng hồ tròn có dạng hình tròn.' },
    { sec: 'So sánh', name: 'Câu 7', pts: 1, text: 'Hình nào có ít cạnh hơn: tam giác hay chữ nhật?', opts: o4('Tam giác', 'Chữ nhật', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'Tam giác 3 cạnh < chữ nhật 4 cạnh nên tam giác ít cạnh hơn.' },
    { sec: 'Ghép hình', name: 'Câu 8', pts: 1, text: 'Ghép 2 hình vuông nhỏ bằng nhau đặt cạnh nhau được hình gì?', opts: o4('Hình tròn', 'Hình chữ nhật', 'Tam giác', 'Khối cầu'), ans: 'B', why: 'Hai hình vuông bằng nhau đặt cạnh nhau tạo thành hình chữ nhật.' },
    { sec: 'Góc', name: 'Câu 9', pts: 1, text: 'Hình tam giác có mấy góc?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Hình tam giác có 3 góc.' },
    { sec: 'Đếm hình', name: 'Câu 10', pts: 1, text: 'Trong dãy ⬜🔺⬜🔺🔺 có mấy hình tam giác?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Đếm 🔺 được 3 hình tam giác.' },
  ],
},

/* ═══════════ ĐỀ 16 — CỘNG TRỪ VUI ═══════════ */
{
  id: 8766, title: 'Đề 16 · Cộng trừ vui trong phạm vi 20', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: 'Có 6 bông hoa, hái thêm 3 bông. Tất cả mấy bông?', opts: o4('8', '9', '10', '3'), ans: 'B', why: '6 + 3 = 9 bông.' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: 'Có 12 quả táo, ăn 4 quả. Còn mấy quả?', opts: o4('6', '7', '8', '16'), ans: 'C', why: '12 − 4 = 8 quả.' },
    { sec: 'Cộng', name: 'Câu 3', pts: 1, text: '9 + 5 = ?', opts: o4('13', '14', '15', '4'), ans: 'B', why: '9 + 5 = 14.' },
    { sec: 'Trừ', name: 'Câu 4', pts: 1, text: '15 − 6 = ?', opts: o4('8', '9', '10', '21'), ans: 'B', why: '15 − 6 = 9.' },
    { sec: 'Tìm số', name: 'Câu 5', pts: 1, text: '5 + __ = 8. Số cần điền là mấy?', opts: o4('2', '3', '4', '13'), ans: 'B', why: '8 − 5 = 3 nên điền 3.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: '10 − __ = 6. Số cần điền là mấy?', opts: o4('3', '4', '5', '16'), ans: 'B', why: '10 − 6 = 4 nên điền 4.' },
    { sec: 'Đố', name: 'Câu 7', pts: 1, text: 'Nam có 7 viên bi, cho bạn 3 viên, được cho lại 2 viên. Nam còn mấy viên?', opts: o4('5', '6', '7', '12'), ans: 'B', why: '7 − 3 + 2 = 6 viên.' },
    { sec: 'Cộng ba số', name: 'Câu 8', pts: 1, text: '2 + 3 + 4 = ?', opts: o4('8', '9', '10', '7'), ans: 'B', why: '2 + 3 = 5, rồi 5 + 4 = 9.' },
    { sec: 'Đố', name: 'Câu 9', pts: 1, text: 'Trên xe có 8 bạn, xuống 3 bạn, lên 2 bạn. Trên xe còn mấy bạn?', opts: o4('6', '7', '8', '13'), ans: 'B', why: '8 − 3 + 2 = 7 bạn.' },
    { sec: 'Đố', name: 'Câu 10', pts: 1, text: 'Lan có 4 kẹo, mẹ cho gấp đôi số kẹo Lan đang có. Lan được cho mấy kẹo?', opts: o4('6', '8', '4', '2'), ans: 'B', why: 'Gấp đôi 4 là 4 + 4 = 8 kẹo.' },
  ],
},

/* ═══════════ ĐỀ 17 — SỐ, THỨ TỰ, TRƯỚC – SAU – GIỮA ═══════════ */
{
  id: 8767, title: 'Đề 17 · Số và thứ tự trước – sau – giữa', time: 20,
  questions: [
    { sec: 'Số', name: 'Câu 1', pts: 1, text: 'Số liền sau của 14 là số nào?', opts: o4('13', '15', '16', '41'), ans: 'B', why: 'Số liền sau 14 là 15.' },
    { sec: 'Số', name: 'Câu 2', pts: 1, text: 'Số liền trước của 20 là số nào?', opts: o4('18', '19', '21', '10'), ans: 'B', why: 'Số liền trước 20 là 19.' },
    { sec: 'Số giữa', name: 'Câu 3', pts: 1, text: 'Số ở giữa 11 và 13 là số nào?', opts: o4('10', '12', '14', '11'), ans: 'B', why: 'Số ở giữa 11 và 13 là 12.' },
    { sec: 'Thứ tự', name: 'Câu 4', pts: 1, text: 'Xếp hàng: An, Bình, Cường, Dũng. Ai đứng giữa Bình và Dũng?', opts: o4('An', 'Bình', 'Cường', 'Dũng'), ans: 'C', why: 'Giữa Bình và Dũng là Cường.' },
    { sec: 'Thứ tự', name: 'Câu 5', pts: 1, text: 'Có 5 bạn xếp hàng, Hoa đứng thứ 3. Sau Hoa còn mấy bạn?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Đứng thứ 3 trong 5 bạn thì sau Hoa còn 2 bạn.' },
    { sec: 'Chục đơn vị', name: 'Câu 6', pts: 1, text: 'Số 18 gồm mấy chục và mấy đơn vị?', opts: o4('1 chục 8 đơn vị', '8 chục 1 đơn vị', '18 chục', '1 đơn vị 8 chục'), ans: 'A', why: '18 gồm 1 chục và 8 đơn vị.' },
    { sec: 'Đếm', name: 'Câu 7', pts: 1, text: 'Từ 6 đến 10 có mấy số?', opts: o4('4', '5', '6', '10'), ans: 'B', why: 'Các số 6, 7, 8, 9, 10 — có 5 số.' },
    { sec: 'Số chẵn', name: 'Câu 8', pts: 1, text: 'Số nào là số chẵn: 11, 13, 14, 15?', opts: o4('11', '13', '14', '15'), ans: 'C', why: '14 chia hết cho 2 nên là số chẵn.' },
    { sec: 'So sánh', name: 'Câu 9', pts: 1, text: 'Số nào lớn hơn: 17 hay 13?', opts: o4('17', '13', 'Bằng nhau', 'Không biết'), ans: 'A', why: '17 > 13.' },
    { sec: 'Thứ tự', name: 'Câu 10', pts: 1, text: 'Xếp 12, 8, 15 từ bé đến lớn là:', opts: o4('8, 12, 15', '15, 12, 8', '12, 8, 15', '8, 15, 12'), ans: 'A', why: '8 < 12 < 15 nên: 8, 12, 15.' },
  ],
},

/* ═══════════ ĐỀ 18 — NẶNG NHẸ, CAO THẤP, DÀI NGẮN ═══════════ */
{
  id: 8768, title: 'Đề 18 · Nặng nhẹ, cao thấp, dài ngắn', time: 20,
  questions: [
    { sec: 'Cân', name: 'Câu 1', pts: 1, text: 'X nặng hơn Y, Y nặng hơn Z. Ai nặng nhất?', opts: o4('X', 'Y', 'Z', 'Bằng nhau'), ans: 'A', why: 'X nặng hơn Y, Y nặng hơn Z nên X nặng nhất.' },
    { sec: 'Dài ngắn', name: 'Câu 2', pts: 1, text: 'Bút chì dài 10 cm, cục tẩy dài 3 cm. Cái nào dài hơn?', opts: o4('Bút chì', 'Cục tẩy', 'Bằng nhau', 'Không biết'), ans: 'A', why: '10 cm > 3 cm nên bút chì dài hơn.' },
    { sec: 'Cân', name: 'Câu 3', pts: 1, text: '1 quả dưa cân bằng 2 quả cam. Vậy 3 quả dưa cân bằng mấy quả cam?', opts: o4('3', '4', '5', '6'), ans: 'D', why: 'Mỗi quả dưa = 2 cam, 3 dưa = 2 + 2 + 2 = 6 cam.' },
    { sec: 'Cao thấp', name: 'Câu 4', pts: 1, text: 'Núi cao hơn cây, cây cao hơn cỏ. Cái gì thấp nhất?', opts: o4('Núi', 'Cây', 'Cỏ', 'Bằng nhau'), ans: 'C', why: 'Cỏ thấp hơn cây, cây thấp hơn núi nên cỏ thấp nhất.' },
    { sec: 'Dài ngắn', name: 'Câu 5', pts: 1, text: 'Con rắn dài, con sâu ngắn. Con nào dài hơn?', opts: o4('Con rắn', 'Con sâu', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'Con rắn dài hơn con sâu.' },
    { sec: 'Cân', name: 'Câu 6', pts: 1, text: 'Cân thăng bằng: một bên 1 quả bóng, bên kia 5 viên bi. 1 quả bóng nặng bằng mấy viên bi?', opts: o4('3', '4', '5', '6'), ans: 'C', why: 'Cân thăng bằng nên 1 quả bóng = 5 viên bi.' },
    { sec: 'Thứ hạng', name: 'Câu 7', pts: 1, text: 'Thi chạy: Hoa về nhất, Lan về nhì, Mai về ba. Ai về sau cùng?', opts: o4('Hoa', 'Lan', 'Mai', 'Bằng nhau'), ans: 'C', why: 'Mai về thứ ba (cuối trong ba bạn) nên về sau cùng.' },
    { sec: 'Cao thấp', name: 'Câu 8', pts: 1, text: 'Bạn cao 1 m, bố cao 2 m. Bố cao hơn bạn mấy mét?', opts: o4('1 m', '2 m', '3 m', '0 m'), ans: 'A', why: '2 − 1 = 1 m.' },
    { sec: 'Nặng nhẹ', name: 'Câu 9', pts: 1, text: '1 kg bông và 1 kg sắt, cái nào nặng hơn?', opts: o4('Bông', 'Sắt', 'Bằng nhau', 'Không biết'), ans: 'C', why: 'Cùng 1 kg nên nặng bằng nhau.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Nếu A nhẹ hơn B và B nhẹ hơn C thì A và C thế nào?', opts: o4('A nặng hơn C', 'A nhẹ hơn C', 'Bằng nhau', 'Không biết'), ans: 'B', why: 'A nhẹ hơn B, B nhẹ hơn C nên A nhẹ hơn C.' },
  ],
},

/* ═══════════ ĐỀ 19 — PHƯƠNG HƯỚNG TRÁI – PHẢI – TRÊN – DƯỚI ═══════════ */
{
  id: 8769, title: 'Đề 19 · Trái, phải, trên, dưới', time: 20,
  questions: [
    { sec: 'Phương hướng', name: 'Câu 1', pts: 1, text: 'Bàn tay em cầm bút viết (đa số các bạn) là tay nào?', opts: o4('Tay trái', 'Tay phải', 'Cả hai', 'Không tay nào'), ans: 'B', why: 'Đa số các bạn cầm bút bằng tay phải.' },
    { sec: 'Phương hướng', name: 'Câu 2', pts: 1, text: 'Ông mặt trời ở trên cao, mặt đất ở đâu?', opts: o4('Ở trên', 'Ở dưới', 'Bên trái', 'Bên phải'), ans: 'B', why: 'Mặt trời ở trên, mặt đất ở dưới.' },
    { sec: 'Phương hướng', name: 'Câu 3', pts: 1, text: 'Xếp hàng: 🐰🐱🐶. Con mèo (🐱) ở bên trái của con nào?', opts: o4('Con thỏ', 'Con chó', 'Con mèo', 'Không con nào'), ans: 'B', why: 'Con mèo đứng ngay bên trái con chó.' },
    { sec: 'Phương hướng', name: 'Câu 4', pts: 1, text: 'Chim bay ở trên trời, cá bơi ở dưới nước. Con nào ở phía trên?', opts: o4('Con cá', 'Con chim', 'Cả hai', 'Không con nào'), ans: 'B', why: 'Chim bay trên trời nên ở phía trên.' },
    { sec: 'Phương hướng', name: 'Câu 5', pts: 1, text: 'Trong dãy ⭐🌙☀️, hình nào ở giữa?', opts: o4('⭐', '🌙', '☀️', 'Không có'), ans: 'B', why: 'Hình ở giữa là 🌙 (trăng).' },
    { sec: 'Phương hướng', name: 'Câu 6', pts: 1, text: 'Quyển sách nằm trên bàn. Cái bàn ở đâu so với quyển sách?', opts: o4('Ở trên', 'Ở dưới', 'Bên trái', 'Bên phải'), ans: 'B', why: 'Sách ở trên bàn nên bàn ở dưới sách.' },
    { sec: 'Phương hướng', name: 'Câu 7', pts: 1, text: 'Trong dãy 🍎🍌🍇🍊, quả cuối cùng bên phải là quả gì?', opts: o4('🍎', '🍌', '🍇', '🍊'), ans: 'D', why: 'Quả cuối cùng bên phải là 🍊 (cam).' },
    { sec: 'Phương hướng', name: 'Câu 8', pts: 1, text: 'Mắt em ở trên, miệng em ở đâu?', opts: o4('Ở trên mắt', 'Ở dưới mắt', 'Bên trái mắt', 'Bên phải mắt'), ans: 'B', why: 'Trên khuôn mặt, miệng ở dưới mắt.' },
    { sec: 'Phương hướng', name: 'Câu 9', pts: 1, text: 'Trong dãy 🔴🔵🟢🟡🟣, hình thứ nhất bên trái là màu gì?', opts: o4('Đỏ', 'Xanh dương', 'Xanh lá', 'Tím'), ans: 'A', why: 'Hình đầu tiên bên trái là 🔴 màu đỏ.' },
    { sec: 'Phương hướng', name: 'Câu 10', pts: 1, text: 'Chân em ở dưới, đầu em ở đâu?', opts: o4('Ở trên', 'Ở dưới', 'Bên trái', 'Bên phải'), ans: 'A', why: 'Đầu ở trên cùng, chân ở dưới cùng.' },
  ],
},

/* ═══════════ ĐỀ 20 — GHÉP CẶP VÀ LOGIC TRANH ═══════════ */
{
  id: 8770, title: 'Đề 20 · Ghép cặp và logic tranh', time: 20,
  questions: [
    { sec: 'Ghép cặp', name: 'Câu 1', pts: 1, text: 'Con gà con thì kêu "chíp chíp". Con vịt thì kêu thế nào?', opts: o4('Gâu gâu', 'Cạc cạc', 'Meo meo', 'Ò ó o'), ans: 'B', why: 'Con vịt kêu "cạc cạc".' },
    { sec: 'Ghép cặp', name: 'Câu 2', pts: 1, text: 'Bút để viết. Kéo dùng để làm gì?', opts: o4('Để ăn', 'Để cắt', 'Để uống', 'Để ngủ'), ans: 'B', why: 'Kéo dùng để cắt.' },
    { sec: 'Ghép cặp', name: 'Câu 3', pts: 1, text: 'Chim ở trong tổ. Cá ở đâu?', opts: o4('Trên cây', 'Dưới nước', 'Trên trời', 'Trong hang'), ans: 'B', why: 'Cá sống dưới nước.' },
    { sec: 'Logic tranh', name: 'Câu 4', pts: 1, text: 'Trời mưa thì em cần mang theo cái gì?', opts: o4('Cái quạt', 'Cái ô (dù)', 'Cái mũ len', 'Kính râm'), ans: 'B', why: 'Trời mưa cần cái ô (dù) để che mưa.' },
    { sec: 'Logic tranh', name: 'Câu 5', pts: 1, text: 'Buổi tối muốn nhìn rõ trong phòng, em cần bật cái gì?', opts: o4('Quạt', 'Đèn', 'Tivi', 'Tủ lạnh'), ans: 'B', why: 'Buổi tối cần bật đèn cho sáng.' },
    { sec: 'Ghép cặp', name: 'Câu 6', pts: 1, text: 'Ban ngày có ông mặt trời. Ban đêm trên trời có gì?', opts: o4('Mặt trời', 'Mặt trăng', 'Cầu vồng', 'Bông hoa'), ans: 'B', why: 'Ban đêm có mặt trăng (và các ngôi sao).' },
    { sec: 'Logic tranh', name: 'Câu 7', pts: 1, text: 'Muốn cây lớn nhanh, em cần làm gì cho cây?', opts: o4('Tưới nước', 'Bẻ cành', 'Giẫm lên', 'Nhổ đi'), ans: 'A', why: 'Cây cần được tưới nước để lớn.' },
    { sec: 'Ghép cặp', name: 'Câu 8', pts: 1, text: 'Con chó giữ nhà. Con mèo thường bắt con gì?', opts: o4('Con voi', 'Con chuột', 'Con trâu', 'Con cá voi'), ans: 'B', why: 'Con mèo thường bắt chuột.' },
    { sec: 'Logic tranh', name: 'Câu 9', pts: 1, text: 'Mùa hè trời nóng, em nên mặc áo thế nào?', opts: o4('Áo len dày', 'Áo mỏng mát', 'Áo bông', 'Áo mưa'), ans: 'B', why: 'Mùa hè nóng nên mặc áo mỏng cho mát.' },
    { sec: 'Logic tranh', name: 'Câu 10', pts: 1, text: 'Đèn giao thông màu đỏ thì người đi đường phải làm gì?', opts: o4('Đi tiếp', 'Dừng lại', 'Chạy nhanh', 'Quay đầu'), ans: 'B', why: 'Đèn đỏ thì phải dừng lại.' },
  ],
},

/* ═══════════ ĐỀ 21 — QUY LUẬT NÂNG CAO ═══════════ */
{
  id: 8771, title: 'Đề 21 · Quy luật nâng cao', time: 20,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 1, 2, 3, 5, 8, ...?', opts: o4('11', '12', '13', '10'), ans: 'C', why: 'Mỗi số bằng tổng hai số trước: 3 + 5 = 8, rồi 5 + 8 = 13.' },
    { sec: 'Quy luật', name: 'Câu 2', pts: 1, text: 'Số tiếp theo: 10, 9, 7, 4, ...?', opts: o4('0', '1', '2', '3'), ans: 'A', why: 'Trừ dần 1, 2, 3, 4: 4 − 4 = 0.' },
    { sec: 'Quy luật', name: 'Câu 3', pts: 1, text: 'Hình tiếp theo: 🟦🟥🟥🟦🟥🟥🟦 ...?', opts: o4('🟦', '🟥', '🟩', '🟨'), ans: 'B', why: 'Cứ 1 xanh rồi 2 đỏ lặp lại; sau 🟦 là 🟥.' },
    { sec: 'Quy luật', name: 'Câu 4', pts: 1, text: 'Số còn thiếu: 3, 6, __, 12, 15?', opts: o4('8', '9', '10', '11'), ans: 'B', why: 'Dãy cách 3; giữa 6 và 12 là 9.' },
    { sec: 'Quy luật', name: 'Câu 5', pts: 1, text: 'Chữ tiếp theo: A, C, E, G, ...?', opts: o4('H', 'I', 'J', 'K'), ans: 'B', why: 'Cách 1 chữ: A, (B), C, (D), E, (F), G, (H), I.' },
    { sec: 'Quy luật', name: 'Câu 6', pts: 1, text: 'Số tiếp theo: 100, 90, 80, ...?', opts: o4('75', '70', '60', '50'), ans: 'B', why: 'Dãy giảm 10: sau 80 là 70.' },
    { sec: 'Quy luật', name: 'Câu 7', pts: 1, text: 'Hình tiếp theo: 🔵🔵🔴🔵🔵🔴🔵 ...?', opts: o4('🔵', '🔴', '🟢', '🟡'), ans: 'A', why: 'Cứ 2 xanh rồi 1 đỏ; sau 🔴 lại bắt đầu 🔵.' },
    { sec: 'Quy luật', name: 'Câu 8', pts: 1, text: 'Số tiếp theo: 2, 4, 8, 16, ...?', opts: o4('18', '24', '32', '20'), ans: 'C', why: 'Mỗi số gấp đôi số trước: 16 + 16 = 32.' },
    { sec: 'Quy luật', name: 'Câu 9', pts: 1, text: 'Số còn thiếu: 1, __, 5, 7, 9?', opts: o4('2', '3', '4', '6'), ans: 'B', why: 'Dãy số lẻ cách 2; giữa 1 và 5 là 3.' },
    { sec: 'Quy luật', name: 'Câu 10', pts: 1, text: 'Hướng mũi tên tiếp theo: →, ↓, →, ↓, →, ...?', opts: o4('→', '↓', '←', '↑'), ans: 'B', why: 'Phải – xuống xen kẽ; sau → là ↓.' },
  ],
},

/* ═══════════ ĐỀ 22 — ĐẾM TINH VÀ SUY LUẬN ═══════════ */
{
  id: 8772, title: 'Đề 22 · Đếm tinh và suy luận', time: 20,
  questions: [
    { sec: 'Đếm', name: 'Câu 1', pts: 1, text: 'Có mấy hình mặt cười? 😀😀😀😀😀😀😀', opts: o4('5', '6', '7', '8'), ans: 'C', why: 'Đếm được 7 mặt cười.' },
    { sec: 'Đếm', name: 'Câu 2', pts: 1, text: 'Trong dãy 🐱🐶🐱🐶🐱, có mấy con mèo (🐱)?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Đếm 🐱 được 3 con mèo.' },
    { sec: 'Đếm chân', name: 'Câu 3', pts: 1, text: '1 con nhện có 8 chân. Hỏi con nhện có nhiều chân hơn con mèo (4 chân) mấy chân?', opts: o4('2', '3', '4', '5'), ans: 'C', why: '8 − 4 = 4 chân.' },
    { sec: 'Suy luận', name: 'Câu 4', pts: 1, text: 'Có 3 quả táo và 3 cái đĩa. Đặt mỗi đĩa 1 quả thì thừa hay thiếu?', opts: o4('Thừa 1 quả', 'Thiếu 1 quả', 'Vừa đủ', 'Thừa 2 quả'), ans: 'C', why: '3 quả cho 3 đĩa, mỗi đĩa 1 quả là vừa đủ.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'Có 5 cái cốc và 4 cái nắp. Đậy mỗi cốc 1 nắp thì thiếu mấy nắp?', opts: o4('1', '2', '3', '0'), ans: 'A', why: '5 − 4 = 1 nên thiếu 1 nắp.' },
    { sec: 'Đếm', name: 'Câu 6', pts: 1, text: 'Một bàn tay có 5 ngón. Hai bàn tay và một bàn chân (5 ngón) có mấy ngón?', opts: o4('10', '12', '15', '20'), ans: 'C', why: '5 + 5 + 5 = 15 ngón.' },
    { sec: 'Suy luận', name: 'Câu 7', pts: 1, text: 'Mỗi bạn cần 2 chiếc bánh. 3 bạn cần mấy chiếc bánh?', opts: o4('5', '6', '8', '3'), ans: 'B', why: '2 + 2 + 2 = 6 chiếc bánh.' },
    { sec: 'Đếm cửa sổ', name: 'Câu 8', pts: 1, text: 'Ngôi nhà có 2 tầng, mỗi tầng 3 cửa sổ. Tất cả mấy cửa sổ?', opts: o4('4', '5', '6', '9'), ans: 'C', why: '3 + 3 = 6 cửa sổ.' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'Có 6 chiếc tất (vớ). Ghép thành mấy đôi?', opts: o4('2', '3', '4', '6'), ans: 'B', why: 'Mỗi đôi 2 chiếc; 6 chia 2 = 3 đôi.' },
    { sec: 'Đếm', name: 'Câu 10', pts: 1, text: 'Có 10 con cá, 3 con bơi đi chỗ khác. Còn mấy con ở lại?', opts: o4('6', '7', '8', '13'), ans: 'B', why: '10 − 3 = 7 con.' },
  ],
},

/* ═══════════ ĐỀ 23 — SO SÁNH VÀ TÌM SỐ ═══════════ */
{
  id: 8773, title: 'Đề 23 · So sánh và tìm số', time: 20,
  questions: [
    { sec: 'So sánh', name: 'Câu 1', pts: 1, text: 'Số nào bé nhất: 12, 9, 15, 7?', opts: o4('12', '9', '15', '7'), ans: 'D', why: '7 bé nhất.' },
    { sec: 'So sánh', name: 'Câu 2', pts: 1, text: 'Số nào lớn nhất: 11, 18, 14, 10?', opts: o4('11', '18', '14', '10'), ans: 'B', why: '18 lớn nhất.' },
    { sec: 'Tìm số', name: 'Câu 3', pts: 1, text: 'Số nào vừa lớn hơn 6 vừa bé hơn 8?', opts: o4('6', '7', '8', '9'), ans: 'B', why: 'Số ở giữa 6 và 8 là 7.' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'So sánh: 6 + 4 ... 10', opts: o4('>', '<', '=', 'Không so được'), ans: 'C', why: '6 + 4 = 10 nên hai bên bằng nhau.' },
    { sec: 'So sánh', name: 'Câu 5', pts: 1, text: 'So sánh: 8 − 2 ... 3 + 2', opts: o4('>', '<', '=', 'Không so được'), ans: 'A', why: '8 − 2 = 6 và 3 + 2 = 5; 6 > 5 nên dấu >.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: 'Số nào cộng với 2 thì bằng 9?', opts: o4('5', '6', '7', '11'), ans: 'C', why: '9 − 2 = 7 nên số đó là 7.' },
    { sec: 'So sánh', name: 'Câu 7', pts: 1, text: 'An hái 8 quả, Bình hái 6 quả, Cường hái 10 quả. Ai hái nhiều nhất?', opts: o4('An', 'Bình', 'Cường', 'Bằng nhau'), ans: 'C', why: '10 > 8 > 6 nên Cường hái nhiều nhất.' },
    { sec: 'So sánh', name: 'Câu 8', pts: 1, text: 'An hái 8 quả, Bình hái 6 quả, Cường hái 10 quả. Ai hái ít nhất?', opts: o4('An', 'Bình', 'Cường', 'Bằng nhau'), ans: 'B', why: '6 < 8 < 10 nên Bình hái ít nhất.' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Số nào lớn hơn 13 một đơn vị?', opts: o4('12', '14', '15', '31'), ans: 'B', why: '13 + 1 = 14.' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'Xếp 7, 4, 11, 9 từ lớn đến bé là:', opts: o4('11, 9, 7, 4', '4, 7, 9, 11', '11, 7, 9, 4', '9, 11, 7, 4'), ans: 'A', why: '11 > 9 > 7 > 4 nên: 11, 9, 7, 4.' },
  ],
},

/* ═══════════ ĐỀ 24 — CỘNG TRỪ VÀ TOÁN ĐỐ ═══════════ */
{
  id: 8774, title: 'Đề 24 · Cộng trừ và toán đố', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '7 + 6 = ?', opts: o4('12', '13', '14', '1'), ans: 'B', why: '7 + 6 = 13.' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: '14 − 5 = ?', opts: o4('8', '9', '10', '19'), ans: 'B', why: '14 − 5 = 9.' },
    { sec: 'Đố', name: 'Câu 3', pts: 1, text: 'Lan có 8 bông hoa, cho Mai 5 bông. Lan còn mấy bông?', opts: o4('2', '3', '4', '13'), ans: 'B', why: '8 − 5 = 3 bông.' },
    { sec: 'Đố', name: 'Câu 4', pts: 1, text: 'Có 9 con vịt dưới ao, lên bờ 4 con. Dưới ao còn mấy con?', opts: o4('4', '5', '6', '13'), ans: 'B', why: '9 − 4 = 5 con.' },
    { sec: 'Cộng ba số', name: 'Câu 5', pts: 1, text: '3 + 3 + 3 = ?', opts: o4('6', '9', '12', '3'), ans: 'B', why: '3 + 3 = 6, rồi 6 + 3 = 9.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: '__ + 4 = 11. Số cần điền là mấy?', opts: o4('6', '7', '8', '15'), ans: 'B', why: '11 − 4 = 7 nên điền 7.' },
    { sec: 'Đố', name: 'Câu 7', pts: 1, text: 'Trong giỏ có 6 quả trứng, mẹ bỏ thêm 6 quả. Trong giỏ có mấy quả?', opts: o4('10', '11', '12', '13'), ans: 'C', why: '6 + 6 = 12 quả.' },
    { sec: 'Đố', name: 'Câu 8', pts: 1, text: 'Hùng có 15 viên bi, cho em 5 viên, cho bạn 3 viên. Hùng còn mấy viên?', opts: o4('6', '7', '8', '10'), ans: 'B', why: '15 − 5 − 3 = 7 viên.' },
    { sec: 'Đố', name: 'Câu 9', pts: 1, text: 'Một sợi dây cắt 1 nhát được mấy đoạn?', opts: o4('1', '2', '3', '4'), ans: 'B', why: 'Cắt 1 nhát chia sợi dây thành 2 đoạn.' },
    { sec: 'Đố', name: 'Câu 10', pts: 1, text: 'Có 4 bạn, mỗi bạn bắt tay từng bạn còn lại một lần thì... đơn giản hơn: mỗi bạn có 2 tay, 4 bạn có mấy tay?', opts: o4('6', '8', '10', '4'), ans: 'B', why: 'Mỗi bạn 2 tay, 4 bạn là 2 + 2 + 2 + 2 = 8 tay.' },
  ],
},

/* ═══════════ ĐỀ 25 — HÌNH HỌC VÀ KHỐI ═══════════ */
{
  id: 8775, title: 'Đề 25 · Hình học và khối', time: 20,
  questions: [
    { sec: 'Hình', name: 'Câu 1', pts: 1, text: 'Hình nào có 3 cạnh?', opts: o4('Hình vuông', 'Hình tam giác', 'Hình tròn', 'Hình chữ nhật'), ans: 'B', why: 'Hình tam giác có 3 cạnh.' },
    { sec: 'Hình', name: 'Câu 2', pts: 1, text: 'Hình nào không có góc?', opts: o4('Hình vuông', 'Hình tam giác', 'Hình tròn', 'Hình chữ nhật'), ans: 'C', why: 'Hình tròn không có góc.' },
    { sec: 'Đếm cạnh', name: 'Câu 3', pts: 1, text: 'Hai hình vuông có tất cả mấy cạnh?', opts: o4('4', '6', '8', '10'), ans: 'C', why: 'Mỗi hình vuông 4 cạnh; 4 + 4 = 8 cạnh.' },
    { sec: 'Khối', name: 'Câu 4', pts: 1, text: 'Cái hộp quà vuông vức có dạng khối gì?', opts: o4('Khối hộp', 'Khối cầu', 'Khối trụ', 'Khối nón'), ans: 'A', why: 'Hộp quà vuông vức có dạng khối hộp.' },
    { sec: 'Khối', name: 'Câu 5', pts: 1, text: 'Khối nào lăn được?', opts: o4('Khối hộp', 'Khối cầu', 'Viên gạch', 'Quyển sách'), ans: 'B', why: 'Khối cầu tròn nên lăn được.' },
    { sec: 'Đếm hình', name: 'Câu 6', pts: 1, text: 'Trong dãy 🔺⬜⬜🔺⬜, có mấy hình vuông?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Đếm ⬜ được 3 hình vuông.' },
    { sec: 'Đếm góc', name: 'Câu 7', pts: 1, text: 'Hình chữ nhật có mấy góc?', opts: o4('2', '3', '4', '5'), ans: 'C', why: 'Hình chữ nhật có 4 góc.' },
    { sec: 'Nhận dạng', name: 'Câu 8', pts: 1, text: 'Cái nón lá (mũ hình chóp) gần giống khối gì?', opts: o4('Khối nón', 'Khối cầu', 'Khối hộp', 'Khối trụ'), ans: 'A', why: 'Cái nón lá có dạng khối nón.' },
    { sec: 'Ghép hình', name: 'Câu 9', pts: 1, text: 'Ghép 4 hình tam giác vuông bằng nhau có thể tạo thành hình gì?', opts: o4('Hình vuông', 'Hình tròn', 'Khối cầu', 'Đường thẳng'), ans: 'A', why: 'Bốn tam giác vuông bằng nhau có thể ghép thành hình vuông lớn.' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'Hình nào có nhiều cạnh nhất: tam giác, vuông, hay tròn?', opts: o4('Tam giác', 'Vuông', 'Tròn', 'Bằng nhau'), ans: 'B', why: 'Vuông 4 cạnh, tam giác 3 cạnh, tròn 0 cạnh nên vuông nhiều nhất.' },
  ],
},

/* ═══════════ ĐỀ 26 — THỜI GIAN VÀ THỨ TỰ ═══════════ */
{
  id: 8776, title: 'Đề 26 · Thời gian và thứ tự', time: 20,
  questions: [
    { sec: 'Thứ trong tuần', name: 'Câu 1', pts: 1, text: 'Sau Chủ nhật là thứ mấy?', opts: o4('Thứ Bảy', 'Thứ Hai', 'Thứ Ba', 'Thứ Sáu'), ans: 'B', why: 'Sau Chủ nhật là thứ Hai (đầu tuần mới).' },
    { sec: 'Thứ trong tuần', name: 'Câu 2', pts: 1, text: 'Trước thứ Năm là thứ mấy?', opts: o4('Thứ Tư', 'Thứ Sáu', 'Thứ Ba', 'Thứ Bảy'), ans: 'A', why: 'Trước thứ Năm là thứ Tư.' },
    { sec: 'Buổi', name: 'Câu 3', pts: 1, text: 'Em ăn sáng vào buổi nào?', opts: o4('Buổi sáng', 'Buổi trưa', 'Buổi tối', 'Ban đêm'), ans: 'A', why: 'Bữa sáng được ăn vào buổi sáng.' },
    { sec: 'Buổi', name: 'Câu 4', pts: 1, text: 'Ông mặt trời lặn, trời tối dần là vào buổi nào?', opts: o4('Buổi sáng', 'Buổi trưa', 'Buổi tối', 'Giữa trưa'), ans: 'C', why: 'Mặt trời lặn, trời tối là buổi tối.' },
    { sec: 'Thứ tự thời gian', name: 'Câu 5', pts: 1, text: 'Việc nào làm trước: đánh răng hay đi ngủ (buổi tối)?', opts: o4('Đánh răng', 'Đi ngủ', 'Cùng lúc', 'Không biết'), ans: 'A', why: 'Buổi tối ta đánh răng trước rồi mới đi ngủ.' },
    { sec: 'Tháng', name: 'Câu 6', pts: 1, text: 'Một năm có mấy tháng?', opts: o4('7', '10', '12', '365'), ans: 'C', why: 'Một năm có 12 tháng.' },
    { sec: 'Giờ', name: 'Câu 7', pts: 1, text: 'Kim ngắn chỉ số 3, kim dài chỉ số 12 thì là mấy giờ?', opts: o4('12 giờ', '3 giờ', '6 giờ', '9 giờ'), ans: 'B', why: 'Kim dài chỉ 12, kim ngắn chỉ 3 là đúng 3 giờ.' },
    { sec: 'Thứ tự', name: 'Câu 8', pts: 1, text: 'Buổi trong ngày theo thứ tự đúng là:', opts: o4('sáng, trưa, tối', 'tối, trưa, sáng', 'trưa, sáng, tối', 'tối, sáng, trưa'), ans: 'A', why: 'Trong ngày lần lượt là: sáng, trưa, tối.' },
    { sec: 'Mùa', name: 'Câu 9', pts: 1, text: 'Mùa nào nóng nhất trong năm?', opts: o4('Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'), ans: 'B', why: 'Mùa hè là mùa nóng nhất.' },
    { sec: 'Thứ tự thời gian', name: 'Câu 10', pts: 1, text: 'Việc nào xảy ra sau: gieo hạt hay cây ra hoa?', opts: o4('Gieo hạt', 'Cây ra hoa', 'Cùng lúc', 'Không biết'), ans: 'B', why: 'Gieo hạt trước, cây lớn lên rồi mới ra hoa.' },
  ],
},

/* ═══════════ ĐỀ 27 — LOGIC VÀ SUY LUẬN TRANH ═══════════ */
{
  id: 8777, title: 'Đề 27 · Logic và suy luận qua tranh', time: 20,
  questions: [
    { sec: 'Suy luận', name: 'Câu 1', pts: 1, text: 'Tất cả các con mèo đều có đuôi. Con Mi là mèo. Con Mi có đuôi không?', opts: o4('Có', 'Không', 'Không biết', 'Nửa cái'), ans: 'A', why: 'Mọi con mèo đều có đuôi, Mi là mèo nên Mi có đuôi.' },
    { sec: 'Suy luận', name: 'Câu 2', pts: 1, text: 'Trong túi chỉ có bi xanh và bi đỏ. Lấy ra không phải bi xanh thì là bi màu gì?', opts: o4('Xanh', 'Đỏ', 'Vàng', 'Tím'), ans: 'B', why: 'Túi chỉ có xanh và đỏ; không phải xanh thì là đỏ.' },
    { sec: 'Suy luận', name: 'Câu 3', pts: 1, text: 'Nam cao hơn Bình. Bình cao bằng Cường. Vậy Nam so với Cường thế nào?', opts: o4('Nam cao hơn', 'Cường cao hơn', 'Bằng nhau', 'Không biết'), ans: 'A', why: 'Bình bằng Cường mà Nam cao hơn Bình nên Nam cao hơn Cường.' },
    { sec: 'Logic tranh', name: 'Câu 4', pts: 1, text: 'Sân ướt và có ô (dù) mở. Chuyện gì vừa xảy ra?', opts: o4('Trời nắng to', 'Trời vừa mưa', 'Có tuyết rơi', 'Trời nhiều gió'), ans: 'B', why: 'Sân ướt và người dùng ô cho thấy trời vừa mưa.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'Hoa nhiều tuổi hơn Lan. Ai sinh ra trước?', opts: o4('Hoa', 'Lan', 'Cùng lúc', 'Không biết'), ans: 'A', why: 'Nhiều tuổi hơn nghĩa là sinh ra trước, nên Hoa sinh trước.' },
    { sec: 'Suy luận', name: 'Câu 6', pts: 1, text: 'Có 3 hộp: 1 hộp đựng táo, 1 hộp đựng cam, 1 hộp rỗng. Có mấy hộp có quả?', opts: o4('1', '2', '3', '0'), ans: 'B', why: 'Hộp táo và hộp cam có quả, hộp rỗng không; vậy 2 hộp có quả.' },
    { sec: 'Logic tranh', name: 'Câu 7', pts: 1, text: 'Bàn có 4 cái ghế, đang có 4 bạn ngồi. Còn ghế trống không?', opts: o4('Còn 1', 'Còn 2', 'Không còn', 'Còn 3'), ans: 'C', why: '4 ghế có 4 bạn ngồi nên không còn ghế trống.' },
    { sec: 'Suy luận', name: 'Câu 8', pts: 1, text: 'Con nào vừa biết bơi vừa sống dưới nước?', opts: o4('Con gà', 'Con cá', 'Con mèo', 'Con chim sẻ'), ans: 'B', why: 'Con cá sống dưới nước và biết bơi.' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'An, Bình, Cường xếp hàng. An không đứng đầu, Cường đứng cuối. Ai đứng đầu?', opts: o4('An', 'Bình', 'Cường', 'Không rõ'), ans: 'B', why: 'Cường cuối, An không đầu nên đầu hàng là Bình.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Một số cộng với chính nó bằng 8. Số đó là mấy?', opts: o4('2', '3', '4', '8'), ans: 'C', why: '4 + 4 = 8 nên số đó là 4.' },
  ],
},

/* ═══════════ ĐỀ 28 — GẤP ĐÔI, MỘT NỬA, CHIA ĐỀU ═══════════ */
{
  id: 8778, title: 'Đề 28 · Gấp đôi, một nửa, chia đều', time: 20,
  questions: [
    { sec: 'Gấp đôi', name: 'Câu 1', pts: 1, text: 'Gấp đôi của 7 là mấy?', opts: o4('12', '13', '14', '9'), ans: 'C', why: '7 + 7 = 14.' },
    { sec: 'Một nửa', name: 'Câu 2', pts: 1, text: 'Một nửa của 12 là mấy?', opts: o4('4', '5', '6', '24'), ans: 'C', why: '12 chia 2 bằng 6.' },
    { sec: 'Gấp đôi', name: 'Câu 3', pts: 1, text: 'Gấp đôi của 8 là mấy?', opts: o4('10', '14', '16', '4'), ans: 'C', why: '8 + 8 = 16.' },
    { sec: 'Một nửa', name: 'Câu 4', pts: 1, text: 'Một nửa của 14 là mấy?', opts: o4('6', '7', '8', '28'), ans: 'B', why: '14 chia 2 bằng 7.' },
    { sec: 'Chia đều', name: 'Câu 5', pts: 1, text: 'Chia 10 cái kẹo cho 2 bạn bằng nhau. Mỗi bạn mấy cái?', opts: o4('4', '5', '6', '10'), ans: 'B', why: '10 chia 2 bằng 5, mỗi bạn 5 cái.' },
    { sec: 'Chia đều', name: 'Câu 6', pts: 1, text: 'Có 9 quả cam chia đều cho 3 bạn. Mỗi bạn mấy quả?', opts: o4('2', '3', '4', '6'), ans: 'B', why: '9 chia 3 bằng 3, mỗi bạn 3 quả.' },
    { sec: 'Đôi', name: 'Câu 7', pts: 1, text: 'Ba đôi tất (vớ) có mấy chiếc?', opts: o4('3', '4', '5', '6'), ans: 'D', why: 'Mỗi đôi 2 chiếc, ba đôi là 2 + 2 + 2 = 6 chiếc.' },
    { sec: 'Chục', name: 'Câu 8', pts: 1, text: 'Hai chục là mấy?', opts: o4('12', '20', '22', '2'), ans: 'B', why: 'Một chục là 10, hai chục là 20.' },
    { sec: 'Chia đều', name: 'Câu 9', pts: 1, text: 'Có 8 chiếc bánh xếp đều vào 4 đĩa. Mỗi đĩa mấy chiếc?', opts: o4('1', '2', '3', '4'), ans: 'B', why: '8 chia 4 bằng 2, mỗi đĩa 2 chiếc.' },
    { sec: 'Một nửa', name: 'Câu 10', pts: 1, text: 'Cắt đôi một cái bánh, em được một phần. Đó là mấy phần của cái bánh?', opts: o4('Một nửa', 'Cả cái', 'Một phần ba', 'Hai cái'), ans: 'A', why: 'Cắt đôi thì mỗi phần là một nửa cái bánh.' },
  ],
},

/* ═══════════ ĐỀ 29 — SUY LUẬN AI – CON NÀO ═══════════ */
{
  id: 8779, title: 'Đề 29 · Suy luận ai, con nào', time: 20,
  questions: [
    { sec: 'Suy luận', name: 'Câu 1', pts: 1, text: 'Voi nặng hơn ngựa, ngựa nặng hơn chó. Con nào nặng nhất?', opts: o4('Voi', 'Ngựa', 'Chó', 'Bằng nhau'), ans: 'A', why: 'Voi nặng hơn ngựa, ngựa nặng hơn chó nên voi nặng nhất.' },
    { sec: 'Suy luận', name: 'Câu 2', pts: 1, text: 'Voi nặng hơn ngựa, ngựa nặng hơn chó. Con nào nhẹ nhất?', opts: o4('Voi', 'Ngựa', 'Chó', 'Bằng nhau'), ans: 'C', why: 'Chó nhẹ hơn ngựa, ngựa nhẹ hơn voi nên chó nhẹ nhất.' },
    { sec: 'Suy luận', name: 'Câu 3', pts: 1, text: 'Mai nhiều kẹo hơn Lan, Lan nhiều kẹo hơn Hoa. Ai ít kẹo nhất?', opts: o4('Mai', 'Lan', 'Hoa', 'Bằng nhau'), ans: 'C', why: 'Hoa ít hơn Lan, Lan ít hơn Mai nên Hoa ít nhất.' },
    { sec: 'Suy luận', name: 'Câu 4', pts: 1, text: 'Hươu cao cổ cao hơn ngựa vằn, ngựa vằn cao hơn thỏ. Con nào cao nhất?', opts: o4('Hươu cao cổ', 'Ngựa vằn', 'Thỏ', 'Bằng nhau'), ans: 'A', why: 'Hươu cao cổ cao hơn cả nên cao nhất.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'Thỏ chạy nhanh hơn rùa, rùa nhanh hơn ốc sên. Con nào chậm nhất?', opts: o4('Thỏ', 'Rùa', 'Ốc sên', 'Bằng nhau'), ans: 'C', why: 'Ốc sên chậm hơn rùa, rùa chậm hơn thỏ nên ốc sên chậm nhất.' },
    { sec: 'Suy luận', name: 'Câu 6', pts: 1, text: 'Anh lớn hơn em, em lớn hơn bé. Ai bé nhất?', opts: o4('Anh', 'Em', 'Bé', 'Bằng nhau'), ans: 'C', why: 'Bé nhỏ hơn em, em nhỏ hơn anh nên bé nhỏ nhất.' },
    { sec: 'Suy luận', name: 'Câu 7', pts: 1, text: 'Dây A dài hơn dây B, dây B dài hơn dây C. Dây nào ngắn nhất?', opts: o4('Dây A', 'Dây B', 'Dây C', 'Bằng nhau'), ans: 'C', why: 'Dây C ngắn hơn B, B ngắn hơn A nên dây C ngắn nhất.' },
    { sec: 'Suy luận', name: 'Câu 8', pts: 1, text: 'Trong nhà: ông, bố, con. Ai nhiều tuổi nhất?', opts: o4('Ông', 'Bố', 'Con', 'Bằng nhau'), ans: 'A', why: 'Ông sinh trước bố, bố sinh trước con nên ông nhiều tuổi nhất.' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'Quả dưa hấu to hơn quả cam, quả cam to hơn quả nho. Quả nào nhỏ nhất?', opts: o4('Dưa hấu', 'Cam', 'Nho', 'Bằng nhau'), ans: 'C', why: 'Nho nhỏ hơn cam, cam nhỏ hơn dưa hấu nên nho nhỏ nhất.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Bể A đầy hơn bể B, bể B đầy hơn bể C. Bể nào ít nước nhất?', opts: o4('Bể A', 'Bể B', 'Bể C', 'Bằng nhau'), ans: 'C', why: 'Bể C ít hơn B, B ít hơn A nên bể C ít nước nhất.' },
  ],
},

/* ═══════════ ĐỀ 30 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 8780, title: 'Đề 30 · Ôn tập tổng hợp', time: 20,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Số tiếp theo: 5, 10, 15, 20, ...?', opts: o4('21', '22', '25', '30'), ans: 'C', why: 'Dãy cách 5: sau 20 là 25.' },
    { sec: 'Đếm chân', name: 'Câu 2', pts: 1, text: '3 con vịt có tất cả mấy chân?', opts: o4('4', '5', '6', '9'), ans: 'C', why: 'Mỗi con 2 chân; 2 + 2 + 2 = 6 chân.' },
    { sec: 'So sánh', name: 'Câu 3', pts: 1, text: 'Số lớn nhất trong 13, 8, 16, 11 là số nào?', opts: o4('13', '8', '16', '11'), ans: 'C', why: '16 lớn nhất.' },
    { sec: 'Suy luận', name: 'Câu 4', pts: 1, text: 'X nặng hơn Y, Y nặng hơn Z. Ai nhẹ nhất?', opts: o4('X', 'Y', 'Z', 'Bằng nhau'), ans: 'C', why: 'Z nhẹ nhất.' },
    { sec: 'Cộng', name: 'Câu 5', pts: 1, text: '8 + 7 = ?', opts: o4('14', '15', '16', '1'), ans: 'B', why: '8 + 7 = 15.' },
    { sec: 'Một nửa', name: 'Câu 6', pts: 1, text: 'Một nửa của 16 là mấy?', opts: o4('6', '7', '8', '32'), ans: 'C', why: '16 chia 2 bằng 8.' },
    { sec: 'Hình', name: 'Câu 7', pts: 1, text: 'Hình vuông có mấy góc?', opts: o4('2', '3', '4', '5'), ans: 'C', why: 'Hình vuông có 4 góc.' },
    { sec: 'Số chẵn', name: 'Câu 8', pts: 1, text: 'Số nào là số chẵn: 9, 11, 12, 15?', opts: o4('9', '11', '12', '15'), ans: 'C', why: '12 chia hết cho 2 nên là số chẵn.' },
    { sec: 'Thứ trong tuần', name: 'Câu 9', pts: 1, text: 'Hôm nay thứ Bảy, ngày mai là thứ mấy?', opts: o4('Thứ Sáu', 'Chủ nhật', 'Thứ Hai', 'Thứ Bảy'), ans: 'B', why: 'Sau thứ Bảy là Chủ nhật.' },
    { sec: 'Gấp đôi', name: 'Câu 10', pts: 1, text: 'Gấp đôi của 9 là mấy?', opts: o4('16', '17', '18', '19'), ans: 'C', why: '9 + 9 = 18.' },
  ],
},

];

SUBJECTS.push({
  id: 'ttd1', name: 'Toán tư duy', short: 'Tư duy 1', icon: '💡', grade: 1,
  exams: TTD1_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 1 — quy luật, đếm thông minh, so sánh, suy luận và hình học',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; phong cách Math Kangaroo (biên soạn lại)',
});
