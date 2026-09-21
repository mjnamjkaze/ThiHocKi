// TOÁN — LỚP 6 (THCS, GDPT 2018)
// Mục tiêu bank: 50 đề × 30 câu = 1 500 câu — 60 phút mỗi đề.
// Ma trận mỗi đề: 9 Nhận biết · 9 Thông hiểu · 3 Vận dụng · 9 Nâng cao.
//
// Khung 50 đề (xem de-thi/thcs/MA-TRAN-PHU-CHUONG-TRINH.md):
//   đề 1–30  : theo từng chương/chủ đề — bảo đảm phủ kín chương trình
//   đề 31–40 : giữa kì I, cuối kì I, giữa kì II, cuối kì II
//   đề 41–50 : tổng hợp cuối năm, ôn tập, chuyên đề, nâng cao/HSG
//
// Mỗi câu mang thêm `lvl` (NB/TH/VD/NC) và `sec` (chủ đề) để sinh thống kê
// và xuất bản in .md bằng tools/export-de-thcs-md.mjs.

const TOAN6_EXAMS = [

/* ═══════════ ĐỀ 1 — TẬP HỢP. GHI SỐ TỰ NHIÊN ═══════════ */
{
  id: 10601, title: 'Đề 1 · Tập hợp. Ghi số tự nhiên', time: 60,
  questions: [
    { sec: 'Tập hợp', lvl: 'NB', name: 'Câu 1', pts: 1, text: 'Cho tập hợp A = {1; 2; 3; 4}. Khẳng định nào sau đây đúng?', opts: o4('5 ∈ A', '3 ∈ A', '0 ∈ A', '6 ∈ A'), ans: 'B', why: 'Số 3 là một phần tử của A nên viết 3 ∈ A. Các số 0; 5; 6 đều không có trong A.' },
    { sec: 'Tập hợp', lvl: 'TH', name: 'Câu 2', pts: 1, text: 'Tập hợp các số tự nhiên lớn hơn 5 và nhỏ hơn 10 là:', opts: o4('{6; 7; 8; 9}', '{5; 6; 7; 8; 9; 10}', '{6; 7; 8; 9; 10}', '{5; 6; 7; 8; 9}'), ans: 'A', why: '"Lớn hơn 5" nên không lấy 5; "nhỏ hơn 10" nên không lấy 10. Còn lại {6; 7; 8; 9}.' },
    { sec: 'Tập hợp con', lvl: 'NC', name: 'Câu 3', pts: 1, text: 'Tập hợp A = {2; 4; 6} có bao nhiêu tập hợp con?', opts: o4('3', '6', '7', '8'), ans: 'D', why: 'Mỗi phần tử có 2 khả năng: có mặt hoặc không có mặt trong tập con, nên số tập con là 2³ = 8 (kể cả tập rỗng và chính A).' },
    { sec: 'Số La Mã', lvl: 'NB', name: 'Câu 4', pts: 1, text: 'Số La Mã XIV biểu diễn số tự nhiên nào?', opts: o4('16', '15', '14', '9'), ans: 'C', why: 'X = 10, IV = 4 nên XIV = 10 + 4 = 14.' },
    { sec: 'Giá trị chữ số', lvl: 'TH', name: 'Câu 5', pts: 1, text: 'Giá trị của chữ số 7 trong số 47 152 là:', opts: o4('7 000', '700', '70 000', '7'), ans: 'A', why: 'Chữ số 7 đứng ở hàng nghìn nên có giá trị 7 × 1 000 = 7 000.' },
    { sec: 'Ghi số tự nhiên', lvl: 'VD', name: 'Câu 6', pts: 1, text: 'Dùng ba chữ số 0; 3; 5, viết được bao nhiêu số tự nhiên có ba chữ số khác nhau?', opts: o4('6', '3', '4', '2'), ans: 'C', why: 'Chữ số hàng trăm không được là 0 nên có 2 cách chọn (3 hoặc 5); hai chữ số còn lại xếp được 2 cách. Vậy 2 × 2 = 4 số: 305; 350; 503; 530.' },
    { sec: 'Tập hợp', lvl: 'NC', name: 'Câu 7', pts: 1, text: 'Cho tập hợp M = {x ∈ ℕ | 12 < x ≤ 17}. Số phần tử của M là:', opts: o4('4', '5', '6', '3'), ans: 'B', why: 'Dấu "<" ở đầu nên bỏ 12; dấu "≤" ở cuối nên lấy cả 17. M = {13; 14; 15; 16; 17}, có 5 phần tử.' },
    { sec: 'Tập hợp ℕ và ℕ*', lvl: 'NB', name: 'Câu 8', pts: 1, text: 'Tập hợp ℕ* gồm:', opts: o4('các số tự nhiên kể cả số 0', 'các số tự nhiên chẵn', 'các số tự nhiên lẻ', 'các số tự nhiên khác 0'), ans: 'D', why: 'ℕ* = {1; 2; 3; …} là tập hợp các số tự nhiên khác 0.' },
    { sec: 'Ghi số tự nhiên', lvl: 'NC', name: 'Câu 9', pts: 1, text: 'Số tự nhiên nhỏ nhất có 4 chữ số khác nhau là:', opts: o4('1 000', '1 234', '1 023', '1 203'), ans: 'C', why: 'Hàng nghìn phải nhỏ nhất và khác 0 nên chọn 1; các hàng sau lần lượt lấy số nhỏ nhất còn lại: 0; 2; 3. Vậy số đó là 1 023 (1 000 có ba chữ số 0 giống nhau nên loại).' },
    { sec: 'Thứ tự trong ℕ', lvl: 'TH', name: 'Câu 10', pts: 1, text: 'Cho ba số tự nhiên liên tiếp, số lớn nhất là 2 025. Số nhỏ nhất là:', opts: o4('2 023', '2 024', '2 022', '2 026'), ans: 'A', why: 'Ba số liên tiếp đó là 2 023; 2 024; 2 025 nên số nhỏ nhất là 2 023.' },
    { sec: 'Kí hiệu ∈, ⊂', lvl: 'NB', name: 'Câu 11', pts: 1, text: 'Cách viết nào sau đây là đúng?', opts: o4('3 ⊂ {1; 2; 3}', '{3} ∈ {1; 2; 3}', '3 ∈ 3', '3 ∈ {1; 2; 3}'), ans: 'D', why: 'Kí hiệu ∈ dùng giữa một phần tử và một tập hợp; kí hiệu ⊂ dùng giữa hai tập hợp. Số 3 là phần tử nên viết 3 ∈ {1; 2; 3}.' },
    { sec: 'Tập hợp con', lvl: 'NC', name: 'Câu 12', pts: 1, text: 'Cho A = {a; b; c} và B = {a; b; c; d; e}. Số tập hợp X thỏa mãn A ⊂ X ⊂ B là:', opts: o4('2', '4', '3', '5'), ans: 'B', why: 'X bắt buộc chứa a, b, c; hai phần tử d và e mỗi phần tử có 2 khả năng (lấy hoặc không). Vậy có 2² = 4 tập hợp X.' },
    { sec: 'Số La Mã', lvl: 'TH', name: 'Câu 13', pts: 1, text: 'Số La Mã nào sau đây viết SAI?', opts: o4('IIX', 'XXIV', 'XIX', 'XXVII'), ans: 'A', why: 'Không được đặt hai chữ số I liền nhau ở phía trước để trừ. Số 8 phải viết là VIII, không viết IIX.' },
    { sec: 'Tập hợp ℕ và ℕ*', lvl: 'NB', name: 'Câu 14', pts: 1, text: 'Trong các số 0; 1; 2; 3, số nào KHÔNG thuộc tập hợp ℕ*?', opts: o4('1', '2', '0', '3'), ans: 'C', why: 'ℕ* không chứa số 0.' },
    { sec: 'Ghi số tự nhiên', lvl: 'VD', name: 'Câu 15', pts: 1, text: 'Để đánh số trang một quyển sách từ trang 1 đến trang 20, cần dùng bao nhiêu chữ số?', opts: o4('20', '31', '29', '40'), ans: 'B', why: 'Từ trang 1 đến 9 có 9 trang, mỗi trang 1 chữ số: 9 chữ số. Từ trang 10 đến 20 có 11 trang, mỗi trang 2 chữ số: 22 chữ số. Tổng cộng 9 + 22 = 31 chữ số.' },
    { sec: 'Tập hợp', lvl: 'NC', name: 'Câu 16', pts: 1, text: 'Cho tập hợp A = {x ∈ ℕ | x là số chẵn và x < 10}. Tổng các phần tử của A là:', opts: o4('30', '25', '12', '20'), ans: 'D', why: 'A = {0; 2; 4; 6; 8} (số 0 cũng là số chẵn). Tổng = 0 + 2 + 4 + 6 + 8 = 20.' },
    { sec: 'Ghi số tự nhiên', lvl: 'TH', name: 'Câu 17', pts: 1, text: 'Số lớn nhất có ba chữ số khác nhau là:', opts: o4('999', '990', '987', '978'), ans: 'C', why: 'Muốn lớn nhất thì các chữ số từ trái sang phải phải lớn nhất có thể và đôi một khác nhau: 9; 8; 7 → 987. Số 999 có ba chữ số giống nhau nên loại.' },
    { sec: 'Tập hợp', lvl: 'NB', name: 'Câu 18', pts: 1, text: 'Tập hợp các chữ cái trong từ "TOAN" là:', opts: o4('{T; O; A; N}', '{T; O; A}', '{T; A; N}', '{O; A; N}'), ans: 'A', why: 'Từ TOAN gồm 4 chữ cái khác nhau là T, O, A, N.' },
    { sec: 'Ghi số tự nhiên', lvl: 'NC', name: 'Câu 19', pts: 1, text: 'Có bao nhiêu số tự nhiên có hai chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?', opts: o4('36', '40', '54', '45'), ans: 'D', why: 'Gọi số đó là ab với a > b. Nếu a = 1 thì b chỉ có 1 cách (b = 0); a = 2 có 2 cách; …; a = 9 có 9 cách. Tổng cộng 1 + 2 + … + 9 = 45 số.' },
    { sec: 'Tập hợp', lvl: 'TH', name: 'Câu 20', pts: 1, text: 'Viết tập hợp B các số tự nhiên x thỏa mãn x + 3 = 3.', opts: o4('B = ∅', 'B = {0}', 'B = {3}', 'B = {6}'), ans: 'B', why: 'Từ x + 3 = 3 suy ra x = 0. Tập hợp có đúng một phần tử nên B = {0}, không phải tập rỗng.' },
    { sec: 'Ghi số tự nhiên', lvl: 'NC', name: 'Câu 21', pts: 1, text: 'Có bao nhiêu số tự nhiên có dạng 3a7b (trong đó a và b là các chữ số)?', opts: o4('100', '90', '81', '10'), ans: 'A', why: 'Chữ số a có 10 cách chọn (0 đến 9), chữ số b cũng có 10 cách. Vậy có 10 × 10 = 100 số. (Chữ số hàng nghìn đã là 3 nên không bị ràng buộc khác 0.)' },
    { sec: 'Tập hợp', lvl: 'NB', name: 'Câu 22', pts: 1, text: 'Số phần tử của tập hợp C = {5} là:', opts: o4('5', '0', '1', '2'), ans: 'C', why: 'Tập hợp C chỉ có duy nhất một phần tử là số 5.' },
    { sec: 'Thứ tự trong ℕ', lvl: 'TH', name: 'Câu 23', pts: 1, text: 'Sắp xếp các số 3 507; 3 570; 3 057; 3 750 theo thứ tự tăng dần:', opts: o4('3 057; 3 570; 3 507; 3 750', '3 057; 3 507; 3 570; 3 750', '3 507; 3 057; 3 570; 3 750', '3 750; 3 570; 3 507; 3 057'), ans: 'B', why: 'Bốn số cùng có 4 chữ số, chữ số hàng nghìn đều là 3 nên so sánh tiếp hàng trăm: 0 < 5 < 5 < 7. Hai số có hàng trăm bằng 5 thì so hàng chục: 0 < 7. Kết quả: 3 057 < 3 507 < 3 570 < 3 750.' },
    { sec: 'Ghi số tự nhiên', lvl: 'NC', name: 'Câu 24', pts: 1, text: 'Tìm số tự nhiên có hai chữ số, biết rằng nếu viết thêm chữ số 0 vào giữa hai chữ số của nó thì được số mới gấp 7 lần số ban đầu.', opts: o4('12', '18', '45', '15'), ans: 'D', why: 'Gọi số đó là ab = 10a + b; số mới là a0b = 100a + b. Ta có 100a + b = 7(10a + b) ⇒ 100a + b = 70a + 7b ⇒ 30a = 6b ⇒ b = 5a. Chọn a = 1 thì b = 5, được số 15. Thử lại: 105 = 7 × 15 ✔.' },
    { sec: 'Ghi số tự nhiên', lvl: 'VD', name: 'Câu 25', pts: 1, text: 'Một hội trường có 12 hàng ghế, mỗi hàng 25 ghế. Số ghế của hội trường là:', opts: o4('300', '37', '250', '312'), ans: 'A', why: 'Số ghế = 12 × 25 = 300 (ghế).' },
    { sec: 'Tập hợp ℕ và ℕ*', lvl: 'NB', name: 'Câu 26', pts: 1, text: 'Số 0 là:', opts: o4('số tự nhiên nhỏ nhất khác 0', 'không phải là số tự nhiên', 'số tự nhiên nhỏ nhất', 'số tự nhiên lớn nhất'), ans: 'C', why: 'Tập hợp ℕ bắt đầu từ 0 nên 0 là số tự nhiên nhỏ nhất. Không có số tự nhiên lớn nhất.' },
    { sec: 'Giá trị chữ số', lvl: 'TH', name: 'Câu 27', pts: 1, text: 'Trong số 58 306, chữ số nào đứng ở hàng trăm?', opts: o4('8', '0', '5', '3'), ans: 'D', why: 'Đếm từ phải sang: 6 là hàng đơn vị, 0 là hàng chục, 3 là hàng trăm.' },
    { sec: 'Tập hợp', lvl: 'NC', name: 'Câu 28', pts: 1, text: 'Cho A là tập hợp các số tự nhiên chia hết cho 3 và nhỏ hơn 30; B là tập hợp các số tự nhiên chia hết cho 5 và nhỏ hơn 30. Số phần tử vừa thuộc A vừa thuộc B là:', opts: o4('1', '2', '3', '0'), ans: 'B', why: 'Số vừa chia hết cho 3 vừa chia hết cho 5 thì chia hết cho 15. Các số đó nhỏ hơn 30 là 0 và 15, tức là 2 phần tử.' },
    { sec: 'Thứ tự trong ℕ', lvl: 'NB', name: 'Câu 29', pts: 1, text: 'Số liền trước của 1 000 là:', opts: o4('999', '1 001', '990', '100'), ans: 'A', why: 'Số liền trước của một số tự nhiên là số đó trừ đi 1: 1 000 − 1 = 999.' },
    { sec: 'Tập hợp', lvl: 'TH', name: 'Câu 30', pts: 1, text: 'Cho tập hợp D = {x ∈ ℕ* | x < 5}. Viết tập hợp D bằng cách liệt kê các phần tử:', opts: o4('{0; 1; 2; 3; 4}', '{1; 2; 3; 4; 5}', '{1; 2; 3; 4}', '{0; 1; 2; 3; 4; 5}'), ans: 'C', why: 'Vì x thuộc ℕ* nên x ≠ 0; lại có x < 5 nên x ∈ {1; 2; 3; 4}.' },
  ],
},

/* ═══════════ ĐỀ 2 — BỐN PHÉP TÍNH VỚI SỐ TỰ NHIÊN ═══════════ */
{
  id: 10602, title: 'Đề 2 · Bốn phép tính với số tự nhiên', time: 60,
  questions: [
    { sec: 'Nhân số tự nhiên', lvl: 'TH', name: 'Câu 1', pts: 1, text: 'Kết quả của phép tính 125 × 8 × 4 là:', opts: o4('3 000', '400', '4 000', '1 000'), ans: 'C', why: 'Nhóm hợp lí: (125 × 8) × 4 = 1 000 × 4 = 4 000.' },
    { sec: 'Phép chia', lvl: 'NB', name: 'Câu 2', pts: 1, text: 'Trong phép chia 45 : 5 = 9, số 45 được gọi là:', opts: o4('số chia', 'số bị chia', 'thương', 'số dư'), ans: 'B', why: 'Trong phép chia a : b = c, số a là số bị chia, b là số chia, c là thương.' },
    { sec: 'Tính nhanh', lvl: 'NC', name: 'Câu 3', pts: 1, text: 'Tính nhanh giá trị của biểu thức 37 × 25 + 37 × 75.', opts: o4('3 700', '3 600', '2 775', '4 000'), ans: 'A', why: 'Áp dụng tính chất phân phối: 37 × 25 + 37 × 75 = 37 × (25 + 75) = 37 × 100 = 3 700.' },
    { sec: 'Phép chia', lvl: 'TH', name: 'Câu 4', pts: 1, text: 'Kết quả của phép tính 1 200 : 24 là:', opts: o4('60', '40', '48', '50'), ans: 'D', why: '1 200 : 24 = 50 vì 24 × 50 = 1 200.' },
    { sec: 'Tìm x', lvl: 'NC', name: 'Câu 5', pts: 1, text: 'Tìm x, biết (x − 15) : 5 = 12.', opts: o4('60', '75', '72', '45'), ans: 'B', why: 'Từ (x − 15) : 5 = 12 ⇒ x − 15 = 12 × 5 = 60 ⇒ x = 60 + 15 = 75. Thử lại: (75 − 15) : 5 = 60 : 5 = 12 ✔.' },
    { sec: 'Tính chất phép tính', lvl: 'NB', name: 'Câu 6', pts: 1, text: 'Đẳng thức nào thể hiện tính chất giao hoán của phép cộng?', opts: o4('(a + b) + c = a + (b + c)', 'a × b = b × a', 'a + 0 = a', 'a + b = b + a'), ans: 'D', why: 'Tính chất giao hoán của phép cộng: đổi chỗ các số hạng thì tổng không đổi, tức a + b = b + a. Đáp án B là giao hoán của phép nhân.' },
    { sec: 'Toán có lời văn', lvl: 'VD', name: 'Câu 7', pts: 1, text: 'Một cửa hàng có 1 250 kg gạo, đã bán trong 3 ngày, mỗi ngày 180 kg. Số gạo còn lại là:', opts: o4('710 kg', '1 070 kg', '890 kg', '610 kg'), ans: 'A', why: 'Số gạo đã bán: 180 × 3 = 540 (kg). Số gạo còn lại: 1 250 − 540 = 710 (kg).' },
    { sec: 'Phép chia có dư', lvl: 'TH', name: 'Câu 8', pts: 1, text: 'Khi chia một số tự nhiên cho 7, số dư có thể nhận nhiều nhất bao nhiêu giá trị khác nhau?', opts: o4('6', '8', '7', '5'), ans: 'C', why: 'Số dư luôn nhỏ hơn số chia và không âm nên số dư thuộc {0; 1; 2; 3; 4; 5; 6}, tức là 7 giá trị.' },
    { sec: 'Phép chia có dư', lvl: 'NC', name: 'Câu 9', pts: 1, text: 'Tìm số tự nhiên a, biết a chia cho 9 được thương là 12 và số dư là 5.', opts: o4('108', '113', '117', '105'), ans: 'B', why: 'Công thức phép chia có dư: a = (số chia) × (thương) + (số dư) = 9 × 12 + 5 = 108 + 5 = 113.' },
    { sec: 'Tính chất phép tính', lvl: 'NB', name: 'Câu 10', pts: 1, text: 'Kết quả của phép tính 0 × 2 025 là:', opts: o4('0', '2 025', '1', '2 024'), ans: 'A', why: 'Mọi số nhân với 0 đều bằng 0.' },
    { sec: 'Phép trừ', lvl: 'TH', name: 'Câu 11', pts: 1, text: 'Kết quả của phép tính 2 000 − 1 234 là:', opts: o4('876', '756', '766', '866'), ans: 'C', why: '2 000 − 1 234 = 766. Kiểm tra lại: 1 234 + 766 = 2 000 ✔.' },
    { sec: 'Tính nhanh', lvl: 'NC', name: 'Câu 12', pts: 1, text: 'Tính nhanh tổng S = 1 + 2 + 3 + … + 100.', opts: o4('5 500', '10 100', '5 000', '5 050'), ans: 'D', why: 'Ghép cặp từ hai đầu: (1 + 100) + (2 + 99) + … mỗi cặp bằng 101, có 50 cặp. Vậy S = 101 × 50 = 5 050.' },
    { sec: 'Phép chia', lvl: 'NB', name: 'Câu 13', pts: 1, text: 'Số bị chia là 0, số chia là 9. Thương của phép chia đó là:', opts: o4('9', '0', '1', 'không xác định'), ans: 'B', why: '0 : 9 = 0 vì 9 × 0 = 0. (Chỉ phép chia cho 0 mới không thực hiện được.)' },
    { sec: 'Toán có lời văn', lvl: 'VD', name: 'Câu 14', pts: 1, text: 'Một ô tô chở 48 thùng hàng, mỗi thùng nặng 25 kg. Xe đã dỡ xuống 12 thùng. Khối lượng hàng còn lại trên xe là:', opts: o4('900 kg', '1 200 kg', '300 kg', '800 kg'), ans: 'A', why: 'Số thùng còn lại: 48 − 12 = 36 (thùng). Khối lượng còn lại: 36 × 25 = 900 (kg).' },
    { sec: 'Tính nhanh', lvl: 'TH', name: 'Câu 15', pts: 1, text: 'Giá trị của biểu thức 156 + 244 + 344 + 56 khi tính bằng cách hợp lí là:', opts: o4('700', '900', '800', '850'), ans: 'C', why: 'Nhóm các số có tổng tròn trăm: (156 + 244) + (344 + 56) = 400 + 400 = 800.' },
    { sec: 'Tìm x', lvl: 'NC', name: 'Câu 16', pts: 1, text: 'Tìm x, biết 5x − 3x + 12 = 30.', opts: o4('6', '21', '12', '9'), ans: 'D', why: 'Thu gọn vế trái: 5x − 3x = 2x, ta có 2x + 12 = 30 ⇒ 2x = 18 ⇒ x = 9.' },
    { sec: 'Phép trừ', lvl: 'NB', name: 'Câu 17', pts: 1, text: 'Phép trừ a − b thực hiện được trong tập hợp số tự nhiên khi:', opts: o4('a ≥ b', 'a < b', 'a = 0', 'b = 0'), ans: 'A', why: 'Trong tập hợp số tự nhiên, phép trừ a − b chỉ thực hiện được khi số bị trừ không nhỏ hơn số trừ, tức a ≥ b.' },
    { sec: 'Phép chia có dư', lvl: 'NC', name: 'Câu 18', pts: 1, text: 'Khi chia số tự nhiên a cho 12 được số dư là 8. Hỏi a chia cho 4 thì được số dư bằng bao nhiêu?', opts: o4('8', '0', '2', '4'), ans: 'B', why: 'Viết a = 12k + 8 = 4·(3k) + 4·2 = 4·(3k + 2). Vì a viết được dưới dạng 4 nhân với một số tự nhiên nên a chia hết cho 4, số dư bằng 0.' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 19', pts: 1, text: 'Giá trị của biểu thức 306 × 0 + 306 : 306 là:', opts: o4('306', '0', '1', '307'), ans: 'C', why: 'Thực hiện nhân, chia trước: 306 × 0 = 0 và 306 : 306 = 1. Sau đó 0 + 1 = 1.' },
    { sec: 'Tính chất phép tính', lvl: 'NB', name: 'Câu 20', pts: 1, text: 'Đẳng thức a + 0 = a thể hiện tính chất nào của phép cộng?', opts: o4('tính chất giao hoán', 'tính chất kết hợp', 'tính chất phân phối', 'cộng với số 0'), ans: 'D', why: 'Số 0 là phần tử trung hòa của phép cộng: cộng bất kì số nào với 0 cũng được chính số đó.' },
    { sec: 'Toán có lời văn', lvl: 'NC', name: 'Câu 21', pts: 1, text: 'Tổng của hai số là 96. Nếu thêm 8 đơn vị vào số thứ nhất và bớt 5 đơn vị ở số thứ hai thì tổng mới bằng:', opts: o4('96', '99', '109', '93'), ans: 'B', why: 'Tổng tăng thêm 8 rồi giảm đi 5, tức là tăng thêm 8 − 5 = 3. Tổng mới = 96 + 3 = 99. (Không cần biết từng số là bao nhiêu.)' },
    { sec: 'Tính nhanh', lvl: 'TH', name: 'Câu 22', pts: 1, text: 'Giá trị của biểu thức 8 × 17 × 125 là:', opts: o4('17 000', '1 700', '16 000', '1 360'), ans: 'A', why: 'Nhóm hợp lí: (8 × 125) × 17 = 1 000 × 17 = 17 000.' },
    { sec: 'Tính chất phép tính', lvl: 'NB', name: 'Câu 23', pts: 1, text: 'Trong phép nhân, số 1 có tính chất nào sau đây?', opts: o4('a × 1 = 0', 'a × 1 = 1', 'a × 1 = a + 1', 'a × 1 = a'), ans: 'D', why: 'Số 1 là phần tử trung hòa của phép nhân: nhân bất kì số nào với 1 cũng được chính số đó.' },
    { sec: 'Toán có lời văn', lvl: 'VD', name: 'Câu 24', pts: 1, text: 'Một trường có 945 học sinh, mỗi lớp có 45 học sinh. Trường đó có bao nhiêu lớp?', opts: o4('20', '25', '21', '19'), ans: 'C', why: 'Số lớp = 945 : 45 = 21 (lớp). Thử lại: 45 × 21 = 945 ✔.' },
    { sec: 'Phép chia', lvl: 'TH', name: 'Câu 25', pts: 1, text: 'Kết quả của phép tính 1 000 : 8 : 5 là:', opts: o4('25', '40', '200', '125'), ans: 'A', why: 'Thực hiện từ trái sang phải: 1 000 : 8 = 125, rồi 125 : 5 = 25.' },
    { sec: 'Tính nhanh', lvl: 'NC', name: 'Câu 26', pts: 1, text: 'Trong biểu thức 2 * 3 * 4 * 5, mỗi dấu * được thay bởi dấu + hoặc dấu × (không dùng thêm dấu ngoặc). Giá trị lớn nhất có thể nhận được là:', opts: o4('100', '120', '62', '14'), ans: 'B', why: 'Vì các số đều lớn hơn 1 nên thay tất cả bằng dấu nhân cho kết quả lớn nhất: 2 × 3 × 4 × 5 = 120. So sánh: 2 + 3 × 4 × 5 = 62; (2 + 3) rồi nhân không thực hiện được vì không có ngoặc.' },
    { sec: 'Phép chia có dư', lvl: 'NB', name: 'Câu 27', pts: 1, text: 'Số dư trong phép chia 37 cho 5 là:', opts: o4('7', '5', '2', '0'), ans: 'C', why: '37 = 5 × 7 + 2 nên thương là 7, số dư là 2.' },
    { sec: 'Phép chia có dư', lvl: 'NC', name: 'Câu 28', pts: 1, text: 'Tìm số tự nhiên x nhỏ nhất, biết x chia cho 6 dư 4 và x > 20.', opts: o4('24', '26', '28', '22'), ans: 'D', why: 'Các số chia 6 dư 4 là 4; 10; 16; 22; 28; … Số nhỏ nhất trong dãy đó mà lớn hơn 20 là 22. Thử lại: 22 : 6 = 3 dư 4 ✔.' },
    { sec: 'Tính chất phép tính', lvl: 'NB', name: 'Câu 29', pts: 1, text: 'Kết quả của phép tính 2 025 : 1 là:', opts: o4('2 025', '1', '0', '2 024'), ans: 'A', why: 'Chia một số cho 1 thì được chính số đó.' },
    { sec: 'Phép chia có dư', lvl: 'TH', name: 'Câu 30', pts: 1, text: 'Một phép chia có số chia là 8, thương là 15, số dư là 7. Số bị chia là:', opts: o4('120', '127', '130', '113'), ans: 'B', why: 'Số bị chia = 8 × 15 + 7 = 120 + 7 = 127. (Kiểm tra: số dư 7 < số chia 8 ✔.)' },
  ],
},

/* ═══════════ ĐỀ 3 — LŨY THỪA. THỨ TỰ THỰC HIỆN PHÉP TÍNH ═══════════ */
{
  id: 10603, title: 'Đề 3 · Lũy thừa. Thứ tự thực hiện phép tính', time: 60,
  questions: [
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 1', pts: 1, text: 'Kết quả của 5³ là:', opts: o4('15', '8', '53', '125'), ans: 'D', why: '5³ = 5 × 5 × 5 = 125. Lưu ý 5³ không phải là 5 × 3.' },
    { sec: 'Chữ số tận cùng', lvl: 'NC', name: 'Câu 2', pts: 1, text: 'Chữ số tận cùng của 3²⁰²⁵ là:', opts: o4('9', '1', '3', '7'), ans: 'C', why: 'Chữ số tận cùng của lũy thừa của 3 lặp theo chu kì 4: 3 → 9 → 7 → 1 → 3 → … Vì 2 025 : 4 = 506 dư 1 nên 3²⁰²⁵ có chữ số tận cùng giống 3¹, tức là 3.' },
    { sec: 'Lũy thừa', lvl: 'TH', name: 'Câu 3', pts: 1, text: 'Viết gọn tích 2 · 2 · 2 · 3 · 3 dưới dạng lũy thừa:', opts: o4('2² · 3³', '2³ · 3²', '6⁵', '2 · 3⁵'), ans: 'B', why: 'Có ba thừa số 2 và hai thừa số 3 nên tích bằng 2³ · 3².' },
    { sec: 'Nhân lũy thừa', lvl: 'NB', name: 'Câu 4', pts: 1, text: 'Kết quả của a⁵ · a³ (với a ≠ 0) là:', opts: o4('a⁸', 'a¹⁵', 'a²', '2a⁸'), ans: 'A', why: 'Nhân hai lũy thừa cùng cơ số: giữ nguyên cơ số và cộng các số mũ, a⁵ · a³ = a⁵⁺³ = a⁸.' },
    { sec: 'So sánh lũy thừa', lvl: 'NC', name: 'Câu 5', pts: 1, text: 'So sánh hai số 2³⁰ và 3²⁰.', opts: o4('2³⁰ > 3²⁰', '2³⁰ = 3²⁰', '2³⁰ < 3²⁰', 'không so sánh được'), ans: 'C', why: 'Đưa về cùng số mũ 10: 2³⁰ = (2³)¹⁰ = 8¹⁰ và 3²⁰ = (3²)¹⁰ = 9¹⁰. Vì 8 < 9 nên 8¹⁰ < 9¹⁰, tức 2³⁰ < 3²⁰.' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 6', pts: 1, text: 'Giá trị của biểu thức 3² + 4² là:', opts: o4('25', '49', '14', '24'), ans: 'A', why: '3² = 9 và 4² = 16 nên 3² + 4² = 9 + 16 = 25. Lưu ý 3² + 4² khác (3 + 4)² = 49.' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 7', pts: 1, text: 'Trong lũy thừa 7⁴, số 7 được gọi là:', opts: o4('số mũ', 'cơ số mũ', 'thừa số', 'cơ số'), ans: 'D', why: 'Trong lũy thừa aⁿ, a là cơ số và n là số mũ.' },
    { sec: 'Thứ tự phép tính', lvl: 'VD', name: 'Câu 8', pts: 1, text: 'Giá trị của biểu thức 100 − 3 · (5² − 4 · 3) là:', opts: o4('39', '61', '71', '91'), ans: 'B', why: 'Trong ngoặc trước: 5² = 25 và 4 · 3 = 12 nên 25 − 12 = 13. Tiếp theo 3 · 13 = 39. Cuối cùng 100 − 39 = 61.' },
    { sec: 'Chia lũy thừa', lvl: 'TH', name: 'Câu 9', pts: 1, text: 'Kết quả của 12⁶ : 12⁴ là:', opts: o4('144', '12', '24', '1'), ans: 'A', why: 'Chia hai lũy thừa cùng cơ số: giữ nguyên cơ số và trừ các số mũ, 12⁶ : 12⁴ = 12² = 144.' },
    { sec: 'Lũy thừa', lvl: 'NC', name: 'Câu 10', pts: 1, text: 'Tìm số tự nhiên n, biết 2ⁿ = 64.', opts: o4('8', '32', '6', '5'), ans: 'C', why: 'Phân tích 64 thành lũy thừa của 2: 64 = 2 · 2 · 2 · 2 · 2 · 2 = 2⁶. Vậy n = 6.' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 11', pts: 1, text: 'Giá trị của 10⁰ là:', opts: o4('0', '1', '10', 'không xác định'), ans: 'B', why: 'Quy ước: mọi số khác 0 nâng lên lũy thừa 0 đều bằng 1.' },
    { sec: 'Tính nhanh', lvl: 'NC', name: 'Câu 12', pts: 1, text: 'Tổng S = 1 + 2 + 2² + 2³ + … + 2⁹ bằng:', opts: o4('512', '1 024', '511', '1 023'), ans: 'D', why: 'Nhân hai vế với 2: 2S = 2 + 2² + … + 2¹⁰. Trừ theo vế: 2S − S = 2¹⁰ − 1, tức S = 1 024 − 1 = 1 023.' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 13', pts: 1, text: 'Giá trị của biểu thức 2³ · 5 − 2² · 3 là:', opts: o4('34', '24', '28', '40'), ans: 'C', why: 'Tính lũy thừa trước: 2³ = 8 và 2² = 4. Sau đó nhân: 8 · 5 = 40 và 4 · 3 = 12. Cuối cùng 40 − 12 = 28.' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 14', pts: 1, text: 'Số 81 viết dưới dạng lũy thừa của 3 là:', opts: o4('3⁴', '3³', '9³', '3⁸'), ans: 'A', why: '3 · 3 · 3 · 3 = 81 nên 81 = 3⁴. (3³ = 27 và 9³ = 729.)' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 15', pts: 1, text: 'Trong một biểu thức KHÔNG có dấu ngoặc, thứ tự thực hiện các phép tính là:', opts: o4('cộng trừ → nhân chia → lũy thừa', 'nhân chia → lũy thừa → cộng trừ', 'lũy thừa → cộng trừ → nhân chia', 'lũy thừa → nhân chia → cộng trừ'), ans: 'D', why: 'Quy tắc: thực hiện lũy thừa trước, rồi đến nhân và chia, cuối cùng là cộng và trừ (mỗi nhóm thực hiện từ trái sang phải).' },
    { sec: 'Tìm x', lvl: 'NC', name: 'Câu 16', pts: 1, text: 'Tìm số tự nhiên x, biết 3ˣ · 3² = 3⁷.', opts: o4('9', '5', '14', '3'), ans: 'B', why: 'Vế trái bằng 3ˣ⁺². Hai lũy thừa cùng cơ số bằng nhau thì số mũ bằng nhau: x + 2 = 7 ⇒ x = 5.' },
    { sec: 'Ứng dụng lũy thừa', lvl: 'VD', name: 'Câu 17', pts: 1, text: 'Một hình lập phương có cạnh 6 cm. Thể tích của hình lập phương đó là:', opts: o4('216 cm³', '36 cm³', '18 cm³', '72 cm³'), ans: 'A', why: 'Thể tích hình lập phương bằng cạnh nhân cạnh nhân cạnh: V = 6³ = 216 (cm³).' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 18', pts: 1, text: 'Kết quả của 1¹⁰⁰ là:', opts: o4('100', '0', '1', '10'), ans: 'C', why: 'Số 1 nhân với chính nó bao nhiêu lần cũng bằng 1.' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 19', pts: 1, text: 'Giá trị của biểu thức 45 : [15 − (4 + 8)] là:', opts: o4('3', '15', '9', '5'), ans: 'B', why: 'Thực hiện ngoặc tròn trước: 4 + 8 = 12. Tiếp theo ngoặc vuông: 15 − 12 = 3. Cuối cùng 45 : 3 = 15.' },
    { sec: 'Thứ tự phép tính', lvl: 'NC', name: 'Câu 20', pts: 1, text: 'Cho A = 5 · 4² − 18 : 3². Giá trị của A là:', opts: o4('74', '26', '34', '78'), ans: 'D', why: 'Tính lũy thừa trước: 4² = 16 và 3² = 9. Rồi nhân, chia: 5 · 16 = 80 và 18 : 9 = 2. Cuối cùng 80 − 2 = 78.' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 21', pts: 1, text: 'Lũy thừa bậc 3 của 2 là:', opts: o4('6', '9', '8', '5'), ans: 'C', why: 'Lũy thừa bậc 3 của 2 là 2³ = 2 × 2 × 2 = 8.' },
    { sec: 'Nhân chia lũy thừa', lvl: 'TH', name: 'Câu 22', pts: 1, text: 'Viết kết quả của 5⁴ · 5³ : 5² dưới dạng một lũy thừa:', opts: o4('5⁵', '5⁹', '5⁶', '5²⁴'), ans: 'A', why: 'Cộng số mũ khi nhân, trừ số mũ khi chia: 5⁴⁺³⁻² = 5⁵.' },
    { sec: 'Tìm x', lvl: 'NC', name: 'Câu 23', pts: 1, text: 'Tìm số tự nhiên x, biết (x − 3)² = 49.', opts: o4('7', '10', '52', '4'), ans: 'B', why: 'Vì 49 = 7² nên x − 3 = 7 (trong tập số tự nhiên, x − 3 không âm), suy ra x = 10. Thử lại: (10 − 3)² = 7² = 49 ✔.' },
    { sec: 'Lũy thừa của 10', lvl: 'NB', name: 'Câu 24', pts: 1, text: 'Kết quả của 10³ là:', opts: o4('30', '100', '10 000', '1 000'), ans: 'D', why: '10³ = 10 × 10 × 10 = 1 000. Mẹo: 10ⁿ là số 1 kèm theo n chữ số 0.' },
    { sec: 'Ứng dụng lũy thừa', lvl: 'VD', name: 'Câu 25', pts: 1, text: 'Một khu vườn hình vuông có cạnh 25 m. Diện tích khu vườn viết dưới dạng lũy thừa là:', opts: o4('25 · 2 m²', '50² m²', '25² m²', '2²⁵ m²'), ans: 'C', why: 'Diện tích hình vuông bằng cạnh nhân cạnh: 25 × 25 = 25² (m²). Lưu ý 25² khác 25 · 2.' },
    { sec: 'Thứ tự phép tính', lvl: 'TH', name: 'Câu 26', pts: 1, text: 'Giá trị của biểu thức (3 + 5)² − 3² − 5² là:', opts: o4('30', '0', '15', '64'), ans: 'A', why: '(3 + 5)² = 8² = 64; 3² = 9; 5² = 25. Vậy biểu thức bằng 64 − 9 − 25 = 30. Kết quả khác 0 cho thấy (a + b)² ≠ a² + b².' },
    { sec: 'Lũy thừa', lvl: 'NC', name: 'Câu 27', pts: 1, text: 'Số 2¹⁰ có bao nhiêu chữ số?', opts: o4('2', '10', '3', '4'), ans: 'D', why: '2¹⁰ = 1 024, là số có 4 chữ số. (Có thể nhẩm: 2¹⁰ = (2⁵)² = 32² = 1 024.)' },
    { sec: 'Chia lũy thừa', lvl: 'TH', name: 'Câu 28', pts: 1, text: 'Kết quả của 7⁵ : 7⁵ là:', opts: o4('0', '1', '7', '7²⁵'), ans: 'B', why: 'Trừ số mũ: 7⁵⁻⁵ = 7⁰ = 1. (Cũng thấy ngay vì một số chia cho chính nó bằng 1.)' },
    { sec: 'Chia hết', lvl: 'NC', name: 'Câu 29', pts: 1, text: 'Cho A = 2 + 2² + 2³ + … + 2²⁰. Số dư khi chia A cho 3 là:', opts: o4('1', '2', '0', '3'), ans: 'C', why: 'Ghép hai số hạng liền nhau: (2 + 2²) + (2³ + 2⁴) + … = 2·3 + 2³·3 + … Mỗi nhóm đều chia hết cho 3, và 20 số hạng chia được đúng 10 nhóm nên A chia hết cho 3, số dư bằng 0.' },
    { sec: 'Lũy thừa', lvl: 'NB', name: 'Câu 30', pts: 1, text: 'Trong lũy thừa 2⁸, số 8 được gọi là:', opts: o4('số mũ', 'cơ số', 'thương', 'tích'), ans: 'A', why: 'Trong lũy thừa aⁿ, a là cơ số còn n là số mũ. Ở đây 8 là số mũ.' },
  ],
},

];

SUBJECTS.push({
  id: 'toan6', name: 'Toán', short: 'Toán 6', icon: '📐', grade: 6,
  exams: TOAN6_EXAMS, ready: true,
  heroTitle: 'Toán lớp 6 — số tự nhiên, số nguyên, phân số, hình học và thống kê',
  heroMeta: '📚 ' + TOAN6_EXAMS.length + '/50 đề &nbsp;•&nbsp; 30 câu mỗi đề &nbsp;•&nbsp; ⏱ 60 phút &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
