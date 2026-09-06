// TOÁN TƯ DUY — LỚP 1
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'ttd1', name: 'Toán tư duy', short: 'Tư duy 1', icon: '💡', grade: 1,
  exams: TTD1_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 1 — quy luật, đếm thông minh, so sánh, suy luận và hình học',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; phong cách Math Kangaroo (biên soạn lại)',
});
