// TOÁN — LỚP 5 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: số thập phân (đọc – viết – so sánh – bốn phép tính); tỉ số phần trăm;
// đơn vị đo diện tích (ha, km²) và thể tích (cm³, dm³, m³); diện tích tam giác, hình thang,
// hình tròn; thể tích hình hộp chữ nhật, hình lập phương; vận tốc – quãng đường – thời gian.

const TOAN5_EXAMS = [

/* ═══════════ ĐỀ 1 — SỐ THẬP PHÂN ═══════════ */
{
  id: 6701, title: 'Đề 1 · Số thập phân', time: 20,
  questions: [
    { sec: 'Đọc số', name: 'Câu 1', pts: 1, text: 'Số thập phân 3,5 đọc là:', opts: o4('Ba phẩy năm', 'Ba mươi lăm', 'Ba năm', 'Ba phần năm'), ans: 'A', why: '3,5 đọc là "ba phẩy năm".' },
    { sec: 'Cấu tạo', name: 'Câu 2', pts: 1, text: 'Trong số 12,34 phần nguyên là bao nhiêu?', opts: o4('12', '34', '1234', '0'), ans: 'A', why: 'Phần đứng trước dấu phẩy là phần nguyên: 12.' },
    { sec: 'Hàng', name: 'Câu 3', pts: 1, text: 'Trong số 12,34 chữ số ở hàng phần mười là chữ số nào?', opts: o4('3', '4', '2', '1'), ans: 'A', why: 'Chữ số ngay sau dấu phẩy là hàng phần mười: chữ số 3.' },
    { sec: 'Viết số', name: 'Câu 4', pts: 1, text: '"Bảy phẩy hai" viết là:', opts: o4('7,2', '72', '2,7', '7,02'), ans: 'A', why: 'Bảy phẩy hai viết là 7,2.' },
    { sec: 'Đổi phân số', name: 'Câu 5', pts: 1, text: 'Phân số 3/10 viết dưới dạng số thập phân là:', opts: o4('0,3', '3,0', '0,03', '30'), ans: 'A', why: '3/10 = 0,3 (ba phần mười).' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'So sánh: 0,5 ... 0,45', opts: o4('>', '<', '=', 'Không so sánh được'), ans: 'A', why: '0,5 = 0,50 mà 0,50 > 0,45 nên 0,5 > 0,45.' },
    { sec: 'Lớn nhất', name: 'Câu 7', pts: 1, text: 'Số lớn nhất trong 2,5 ; 2,05 ; 2,15 là:', opts: o4('2,5', '2,05', '2,15', 'Bằng nhau'), ans: 'A', why: 'So phần phần mười: 5 > 1 > 0 nên 2,5 lớn nhất.' },
    { sec: 'Đổi phân số', name: 'Câu 8', pts: 1, text: 'Số thập phân 0,25 bằng phân số nào (rút gọn)?', opts: o4('1/4', '1/2', '2/5', '1/25'), ans: 'A', why: '0,25 = 25/100 = 1/4.' },
    { sec: 'Làm tròn', name: 'Câu 9', pts: 1, text: 'Làm tròn 5,7 đến số tự nhiên gần nhất được:', opts: o4('6', '5', '7', '5,5'), ans: 'A', why: 'Phần thập phân 0,7 ≥ 0,5 nên làm tròn lên thành 6.' },
    { sec: 'Đọc số', name: 'Câu 10', pts: 1, text: 'Số 0,1 đọc là:', opts: o4('Không phẩy một', 'Một phẩy không', 'Mười', 'Một trăm'), ans: 'A', why: '0,1 đọc là "không phẩy một" (một phần mười).' },
  ],
},

/* ═══════════ ĐỀ 2 — CỘNG, TRỪ SỐ THẬP PHÂN ═══════════ */
{
  id: 6702, title: 'Đề 2 · Cộng, trừ số thập phân', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '1,2 + 3,4 = ?', opts: o4('4,6', '4,4', '5,6', '3,6'), ans: 'A', why: '1,2 + 3,4 = 4,6.' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '5,7 + 2,3 = ?', opts: o4('8', '7,9', '8,1', '7'), ans: 'A', why: '5,7 + 2,3 = 8,0 = 8.' },
    { sec: 'Trừ', name: 'Câu 3', pts: 1, text: '6,5 − 2,1 = ?', opts: o4('4,4', '4,6', '3,4', '8,6'), ans: 'A', why: '6,5 − 2,1 = 4,4.' },
    { sec: 'Trừ', name: 'Câu 4', pts: 1, text: '10 − 3,5 = ?', opts: o4('6,5', '7,5', '6', '13,5'), ans: 'A', why: '10 − 3,5 = 6,5.' },
    { sec: 'Cộng', name: 'Câu 5', pts: 1, text: '0,25 + 0,75 = ?', opts: o4('1', '0,9', '1,1', '0,1'), ans: 'A', why: '0,25 + 0,75 = 1,00 = 1.' },
    { sec: 'Cộng', name: 'Câu 6', pts: 1, text: '12,34 + 1,66 = ?', opts: o4('14', '13', '14,1', '13,9'), ans: 'A', why: '12,34 + 1,66 = 14,00 = 14.' },
    { sec: 'Trừ', name: 'Câu 7', pts: 1, text: '7,8 − 0,8 = ?', opts: o4('7', '7,6', '6,8', '8'), ans: 'A', why: '7,8 − 0,8 = 7,0 = 7.' },
    { sec: 'Cộng', name: 'Câu 8', pts: 1, text: '3,25 + 4,5 = ?', opts: o4('7,75', '7,3', '8,25', '7,7'), ans: 'A', why: '3,25 + 4,50 = 7,75.' },
    { sec: 'Cộng', name: 'Câu 9', pts: 1, text: '9,9 + 0,1 = ?', opts: o4('10', '9,10', '9', '10,1'), ans: 'A', why: '9,9 + 0,1 = 10,0 = 10.' },
    { sec: 'Trừ', name: 'Câu 10', pts: 1, text: '15,5 − 5,5 = ?', opts: o4('10', '11', '20', '10,1'), ans: 'A', why: '15,5 − 5,5 = 10.' },
  ],
},

/* ═══════════ ĐỀ 3 — NHÂN, CHIA SỐ THẬP PHÂN ═══════════ */
{
  id: 6703, title: 'Đề 3 · Nhân, chia số thập phân', time: 20,
  questions: [
    { sec: 'Nhân', name: 'Câu 1', pts: 1, text: '2,5 × 2 = ?', opts: o4('5', '4,5', '5,5', '4'), ans: 'A', why: '2,5 × 2 = 5.' },
    { sec: 'Nhân', name: 'Câu 2', pts: 1, text: '1,2 × 3 = ?', opts: o4('3,6', '3,2', '4,2', '3,5'), ans: 'A', why: '1,2 × 3 = 3,6.' },
    { sec: 'Nhân', name: 'Câu 3', pts: 1, text: '0,5 × 4 = ?', opts: o4('2', '0,20', '2,5', '4,5'), ans: 'A', why: '0,5 × 4 = 2,0 = 2.' },
    { sec: 'Chia', name: 'Câu 4', pts: 1, text: '6,4 : 2 = ?', opts: o4('3,2', '3,4', '2,3', '4,2'), ans: 'A', why: '6,4 : 2 = 3,2.' },
    { sec: 'Chia', name: 'Câu 5', pts: 1, text: '4,5 : 5 = ?', opts: o4('0,9', '9', '0,09', '1,5'), ans: 'A', why: '4,5 : 5 = 0,9.' },
    { sec: 'Nhân 10', name: 'Câu 6', pts: 1, text: '2,5 × 10 = ?', opts: o4('25', '2,50', '250', '0,25'), ans: 'A', why: 'Nhân 10 thì dời dấu phẩy sang phải một chữ số: 25.' },
    { sec: 'Nhân 100', name: 'Câu 7', pts: 1, text: '3,7 × 100 = ?', opts: o4('370', '37', '3700', '3,70'), ans: 'A', why: 'Nhân 100 thì dời dấu phẩy sang phải hai chữ số: 370.' },
    { sec: 'Chia 10', name: 'Câu 8', pts: 1, text: '45 : 10 = ?', opts: o4('4,5', '450', '0,45', '4,05'), ans: 'A', why: 'Chia 10 thì dời dấu phẩy sang trái một chữ số: 4,5.' },
    { sec: 'Nhân', name: 'Câu 9', pts: 1, text: '12,5 × 4 = ?', opts: o4('50', '48', '52', '5'), ans: 'A', why: '12,5 × 4 = 50.' },
    { sec: 'Nhân', name: 'Câu 10', pts: 1, text: '0,2 × 0,3 = ?', opts: o4('0,06', '0,6', '0,5', '6'), ans: 'A', why: '2 × 3 = 6, đếm hai chữ số ở phần thập phân: 0,06.' },
  ],
},

/* ═══════════ ĐỀ 4 — TỈ SỐ PHẦN TRĂM ═══════════ */
{
  id: 6704, title: 'Đề 4 · Tỉ số phần trăm', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Tỉ số phần trăm của 25 và 100 là:', opts: o4('25%', '2,5%', '250%', '75%'), ans: 'A', why: '25 : 100 = 25/100 = 25%.' },
    { sec: 'Tính phần trăm', name: 'Câu 2', pts: 1, text: '50% của 200 là bao nhiêu?', opts: o4('100', '50', '150', '250'), ans: 'A', why: '50% của 200 = 200 : 2 = 100.' },
    { sec: 'Tính phần trăm', name: 'Câu 3', pts: 1, text: '10% của 50 là bao nhiêu?', opts: o4('5', '10', '15', '0,5'), ans: 'A', why: '10% của 50 = 50 : 10 = 5.' },
    { sec: 'Đổi phân số', name: 'Câu 4', pts: 1, text: 'Phân số 1/2 bằng bao nhiêu phần trăm?', opts: o4('50%', '25%', '20%', '5%'), ans: 'A', why: '1/2 = 50/100 = 50%.' },
    { sec: 'Đổi phân số', name: 'Câu 5', pts: 1, text: 'Phân số 1/4 bằng bao nhiêu phần trăm?', opts: o4('25%', '14%', '40%', '75%'), ans: 'A', why: '1/4 = 25/100 = 25%.' },
    { sec: 'Tính phần trăm', name: 'Câu 6', pts: 1, text: '20% của 60 là bao nhiêu?', opts: o4('12', '20', '6', '120'), ans: 'A', why: '20% của 60 = 60 × 20 : 100 = 12.' },
    { sec: 'Bài toán', name: 'Câu 7', pts: 1, text: 'Lớp có 40 bạn, 25% là học sinh giỏi. Có bao nhiêu học sinh giỏi?', opts: o4('10', '25', '15', '4'), ans: 'A', why: '25% của 40 = 40 : 4 = 10 (học sinh).' },
    { sec: 'Bài toán', name: 'Câu 8', pts: 1, text: 'Một chiếc áo giá 200 000 đồng, giảm 10%. Số tiền được giảm là:', opts: o4('20 000 đồng', '10 000 đồng', '2 000 đồng', '180 000 đồng'), ans: 'A', why: '10% của 200 000 = 20 000 (đồng).' },
    { sec: 'Tính phần trăm', name: 'Câu 9', pts: 1, text: '75% của 80 là bao nhiêu?', opts: o4('60', '75', '40', '20'), ans: 'A', why: '75% của 80 = 80 × 75 : 100 = 60.' },
    { sec: 'Đổi phân số', name: 'Câu 10', pts: 1, text: 'Phân số 3/4 bằng bao nhiêu phần trăm?', opts: o4('75%', '34%', '43%', '25%'), ans: 'A', why: '3/4 = 75/100 = 75%.' },
  ],
},

/* ═══════════ ĐỀ 5 — ĐƠN VỊ ĐO DIỆN TÍCH, THỂ TÍCH ═══════════ */
{
  id: 6705, title: 'Đề 5 · Đơn vị đo diện tích và thể tích', time: 20,
  questions: [
    { sec: 'Diện tích', name: 'Câu 1', pts: 1, text: '1 ha = ? m²', opts: o4('10 000 m²', '1 000 m²', '100 m²', '100 000 m²'), ans: 'A', why: '1 héc-ta (ha) = 10 000 m².' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: '1 km² = ? ha', opts: o4('100 ha', '10 ha', '1 000 ha', '1 ha'), ans: 'A', why: '1 km² = 100 ha.' },
    { sec: 'Diện tích', name: 'Câu 3', pts: 1, text: '1 m² = ? cm²', opts: o4('10 000 cm²', '100 cm²', '1 000 cm²', '1 000 000 cm²'), ans: 'A', why: '1 m² = 10 000 cm².' },
    { sec: 'Thể tích', name: 'Câu 4', pts: 1, text: '1 dm³ = ? cm³', opts: o4('1 000 cm³', '100 cm³', '10 cm³', '10 000 cm³'), ans: 'A', why: '1 dm³ = 1 000 cm³.' },
    { sec: 'Thể tích', name: 'Câu 5', pts: 1, text: '1 m³ = ? dm³', opts: o4('1 000 dm³', '100 dm³', '10 dm³', '1 000 000 dm³'), ans: 'A', why: '1 m³ = 1 000 dm³.' },
    { sec: 'Diện tích', name: 'Câu 6', pts: 1, text: '5 m² = ? dm²', opts: o4('500 dm²', '50 dm²', '5 000 dm²', '5 dm²'), ans: 'A', why: '1 m² = 100 dm² nên 5 m² = 500 dm².' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: '1 lít = ? dm³', opts: o4('1 dm³', '10 dm³', '100 dm³', '1 000 dm³'), ans: 'A', why: '1 lít = 1 dm³.' },
    { sec: 'Diện tích', name: 'Câu 8', pts: 1, text: '2 ha = ? m²', opts: o4('20 000 m²', '2 000 m²', '200 m²', '200 000 m²'), ans: 'A', why: '2 × 10 000 = 20 000 m².' },
    { sec: 'Thể tích', name: 'Câu 9', pts: 1, text: '1 m³ = ? lít', opts: o4('1 000 lít', '100 lít', '10 lít', '1 lít'), ans: 'A', why: '1 m³ = 1 000 dm³ = 1 000 lít.' },
    { sec: 'Thể tích', name: 'Câu 10', pts: 1, text: '3 dm³ = ? cm³', opts: o4('3 000 cm³', '300 cm³', '30 cm³', '30 000 cm³'), ans: 'A', why: '3 × 1 000 = 3 000 cm³.' },
  ],
},

/* ═══════════ ĐỀ 6 — DIỆN TÍCH TAM GIÁC, HÌNH THANG ═══════════ */
{
  id: 6706, title: 'Đề 6 · Diện tích tam giác và hình thang', time: 20,
  questions: [
    { sec: 'Tam giác', name: 'Câu 1', pts: 1, text: 'Diện tích tam giác được tính bằng:', opts: o4('(đáy × chiều cao) : 2', 'đáy × chiều cao', 'đáy + chiều cao', 'cạnh × cạnh'), ans: 'A', why: 'Diện tích tam giác = (đáy × chiều cao) : 2.' },
    { sec: 'Tam giác', name: 'Câu 2', pts: 1, text: 'Tam giác có đáy 6 cm, chiều cao 4 cm. Diện tích là:', opts: o4('12 cm²', '24 cm²', '10 cm²', '20 cm²'), ans: 'A', why: 'S = (6 × 4) : 2 = 24 : 2 = 12 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 3', pts: 1, text: 'Diện tích hình thang được tính bằng:', opts: o4('(đáy lớn + đáy bé) × chiều cao : 2', 'đáy × chiều cao', '(đáy lớn − đáy bé) × chiều cao', 'cạnh × cạnh : 2'), ans: 'A', why: 'Diện tích hình thang = (đáy lớn + đáy bé) × chiều cao : 2.' },
    { sec: 'Hình thang', name: 'Câu 4', pts: 1, text: 'Hình thang có đáy lớn 5 cm, đáy bé 3 cm, chiều cao 4 cm. Diện tích là:', opts: o4('16 cm²', '32 cm²', '12 cm²', '20 cm²'), ans: 'A', why: 'S = (5 + 3) × 4 : 2 = 32 : 2 = 16 (cm²).' },
    { sec: 'Tam giác', name: 'Câu 5', pts: 1, text: 'Tam giác có đáy 10 cm, chiều cao 6 cm. Diện tích là:', opts: o4('30 cm²', '60 cm²', '16 cm²', '15 cm²'), ans: 'A', why: 'S = (10 × 6) : 2 = 30 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 6', pts: 1, text: 'Hình thang có hai đáy 8 cm và 6 cm, chiều cao 5 cm. Diện tích là:', opts: o4('35 cm²', '70 cm²', '30 cm²', '40 cm²'), ans: 'A', why: 'S = (8 + 6) × 5 : 2 = 70 : 2 = 35 (cm²).' },
    { sec: 'Tam giác', name: 'Câu 7', pts: 1, text: 'Tam giác vuông có hai cạnh góc vuông 3 cm và 4 cm. Diện tích là:', opts: o4('6 cm²', '12 cm²', '7 cm²', '10 cm²'), ans: 'A', why: 'S = (3 × 4) : 2 = 6 (cm²).' },
    { sec: 'Lí thuyết', name: 'Câu 8', pts: 1, text: 'Muốn tính diện tích tam giác cần biết những gì?', opts: o4('Độ dài đáy và chiều cao', 'Ba cạnh', 'Chỉ một cạnh', 'Chu vi'), ans: 'A', why: 'Cần biết độ dài đáy và chiều cao tương ứng.' },
    { sec: 'Lí thuyết', name: 'Câu 9', pts: 1, text: 'Hình thang có mấy cạnh đáy?', opts: o4('2 (đáy lớn và đáy bé)', '1', '3', '4'), ans: 'A', why: 'Hình thang có hai cạnh đáy song song: đáy lớn và đáy bé.' },
    { sec: 'Tam giác', name: 'Câu 10', pts: 1, text: 'Tam giác có đáy 12 cm, chiều cao 5 cm. Diện tích là:', opts: o4('30 cm²', '60 cm²', '17 cm²', '35 cm²'), ans: 'A', why: 'S = (12 × 5) : 2 = 60 : 2 = 30 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 7 — CHU VI, DIỆN TÍCH HÌNH TRÒN ═══════════ */
{
  id: 6707, title: 'Đề 7 · Chu vi và diện tích hình tròn', time: 20,
  questions: [
    { sec: 'Chu vi', name: 'Câu 1', pts: 1, text: 'Chu vi hình tròn được tính bằng:', opts: o4('đường kính × 3,14', 'bán kính × 3,14', 'đường kính × 2', 'bán kính × bán kính'), ans: 'A', why: 'Chu vi C = đường kính × 3,14 (hay 2 × bán kính × 3,14).' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: 'Diện tích hình tròn được tính bằng:', opts: o4('bán kính × bán kính × 3,14', 'đường kính × 3,14', 'bán kính × 3,14', 'đường kính × đường kính'), ans: 'A', why: 'Diện tích S = bán kính × bán kính × 3,14.' },
    { sec: 'Chu vi', name: 'Câu 3', pts: 1, text: 'Hình tròn bán kính 2 cm có chu vi là:', opts: o4('12,56 cm', '6,28 cm', '12,56 cm²', '4 cm'), ans: 'A', why: 'C = 2 × 2 × 3,14 = 12,56 (cm).' },
    { sec: 'Diện tích', name: 'Câu 4', pts: 1, text: 'Hình tròn bán kính 2 cm có diện tích là:', opts: o4('12,56 cm²', '6,28 cm²', '12,56 cm', '4 cm²'), ans: 'A', why: 'S = 2 × 2 × 3,14 = 12,56 (cm²).' },
    { sec: 'Quan hệ', name: 'Câu 5', pts: 1, text: 'Đường kính gấp mấy lần bán kính?', opts: o4('2 lần', '3 lần', '4 lần', 'Bằng nhau'), ans: 'A', why: 'Đường kính = 2 × bán kính.' },
    { sec: 'Quan hệ', name: 'Câu 6', pts: 1, text: 'Hình tròn có bán kính 5 cm thì đường kính là:', opts: o4('10 cm', '5 cm', '15 cm', '2,5 cm'), ans: 'A', why: 'Đường kính = 5 × 2 = 10 (cm).' },
    { sec: 'Chu vi', name: 'Câu 7', pts: 1, text: 'Hình tròn có đường kính 4 cm có chu vi là:', opts: o4('12,56 cm', '6,28 cm', '25,12 cm', '16 cm'), ans: 'A', why: 'C = 4 × 3,14 = 12,56 (cm).' },
    { sec: 'Diện tích', name: 'Câu 8', pts: 1, text: 'Hình tròn bán kính 3 cm có diện tích là:', opts: o4('28,26 cm²', '18,84 cm²', '9,42 cm²', '28,26 cm'), ans: 'A', why: 'S = 3 × 3 × 3,14 = 28,26 (cm²).' },
    { sec: 'Số pi', name: 'Câu 9', pts: 1, text: 'Số pi (π) được lấy gần đúng bằng bao nhiêu?', opts: o4('3,14', '3,41', '2,14', '31,4'), ans: 'A', why: 'Số pi thường lấy gần đúng bằng 3,14.' },
    { sec: 'Diện tích', name: 'Câu 10', pts: 1, text: 'Hình tròn bán kính 1 cm có diện tích là:', opts: o4('3,14 cm²', '6,28 cm²', '1 cm²', '3,14 cm'), ans: 'A', why: 'S = 1 × 1 × 3,14 = 3,14 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 8 — HÌNH HỘP CHỮ NHẬT, HÌNH LẬP PHƯƠNG ═══════════ */
{
  id: 6708, title: 'Đề 8 · Hình hộp chữ nhật và hình lập phương', time: 20,
  questions: [
    { sec: 'Thể tích', name: 'Câu 1', pts: 1, text: 'Thể tích hình hộp chữ nhật được tính bằng:', opts: o4('dài × rộng × cao', 'dài + rộng + cao', 'dài × rộng', 'cạnh × cạnh × cạnh'), ans: 'A', why: 'Thể tích hình hộp chữ nhật = chiều dài × chiều rộng × chiều cao.' },
    { sec: 'Thể tích', name: 'Câu 2', pts: 1, text: 'Hình hộp chữ nhật dài 4 cm, rộng 3 cm, cao 2 cm có thể tích là:', opts: o4('24 cm³', '9 cm³', '12 cm³', '48 cm³'), ans: 'A', why: 'V = 4 × 3 × 2 = 24 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 3', pts: 1, text: 'Thể tích hình lập phương được tính bằng:', opts: o4('cạnh × cạnh × cạnh', 'cạnh × 6', 'cạnh × cạnh', 'cạnh × 4'), ans: 'A', why: 'Thể tích hình lập phương = cạnh × cạnh × cạnh.' },
    { sec: 'Thể tích', name: 'Câu 4', pts: 1, text: 'Hình lập phương cạnh 3 cm có thể tích là:', opts: o4('27 cm³', '9 cm³', '18 cm³', '54 cm³'), ans: 'A', why: 'V = 3 × 3 × 3 = 27 (cm³).' },
    { sec: 'Diện tích', name: 'Câu 5', pts: 1, text: 'Diện tích xung quanh hình hộp chữ nhật được tính bằng:', opts: o4('chu vi đáy × chiều cao', 'dài × rộng × cao', 'diện tích đáy × 2', 'cạnh × cạnh'), ans: 'A', why: 'Diện tích xung quanh = chu vi mặt đáy × chiều cao.' },
    { sec: 'Diện tích', name: 'Câu 6', pts: 1, text: 'Hình lập phương cạnh 2 cm có diện tích xung quanh là:', opts: o4('16 cm²', '24 cm²', '8 cm²', '4 cm²'), ans: 'A', why: 'Chu vi đáy = 2 × 4 = 8; Sxq = 8 × 2 = 16 (cm²).' },
    { sec: 'Diện tích', name: 'Câu 7', pts: 1, text: 'Hình lập phương cạnh 2 cm có diện tích toàn phần là:', opts: o4('24 cm²', '16 cm²', '8 cm²', '12 cm²'), ans: 'A', why: 'Stp = 6 × (2 × 2) = 6 × 4 = 24 (cm²).' },
    { sec: 'Thể tích', name: 'Câu 8', pts: 1, text: 'Hình hộp chữ nhật dài 5 cm, rộng 4 cm, cao 3 cm có thể tích là:', opts: o4('60 cm³', '12 cm³', '20 cm³', '47 cm³'), ans: 'A', why: 'V = 5 × 4 × 3 = 60 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 9', pts: 1, text: 'Hình lập phương cạnh 1 cm có thể tích là:', opts: o4('1 cm³', '3 cm³', '6 cm³', '0 cm³'), ans: 'A', why: 'V = 1 × 1 × 1 = 1 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 10', pts: 1, text: 'Hình lập phương cạnh 4 cm có thể tích là:', opts: o4('64 cm³', '16 cm³', '48 cm³', '12 cm³'), ans: 'A', why: 'V = 4 × 4 × 4 = 64 (cm³).' },
  ],
},

/* ═══════════ ĐỀ 9 — VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN ═══════════ */
{
  id: 6709, title: 'Đề 9 · Vận tốc, quãng đường, thời gian', time: 20,
  questions: [
    { sec: 'Công thức', name: 'Câu 1', pts: 1, text: 'Công thức tính vận tốc là:', opts: o4('v = s : t', 'v = s × t', 'v = t : s', 'v = s + t'), ans: 'A', why: 'Vận tốc = quãng đường : thời gian (v = s : t).' },
    { sec: 'Công thức', name: 'Câu 2', pts: 1, text: 'Công thức tính quãng đường là:', opts: o4('s = v × t', 's = v : t', 's = t : v', 's = v + t'), ans: 'A', why: 'Quãng đường = vận tốc × thời gian (s = v × t).' },
    { sec: 'Công thức', name: 'Câu 3', pts: 1, text: 'Công thức tính thời gian là:', opts: o4('t = s : v', 't = s × v', 't = v : s', 't = v − s'), ans: 'A', why: 'Thời gian = quãng đường : vận tốc (t = s : v).' },
    { sec: 'Tính vận tốc', name: 'Câu 4', pts: 1, text: 'Đi 60 km trong 2 giờ, vận tốc là:', opts: o4('30 km/giờ', '120 km/giờ', '62 km/giờ', '58 km/giờ'), ans: 'A', why: 'v = 60 : 2 = 30 (km/giờ).' },
    { sec: 'Tính quãng đường', name: 'Câu 5', pts: 1, text: 'Vận tốc 40 km/giờ, đi trong 3 giờ, quãng đường là:', opts: o4('120 km', '43 km', '13 km', '37 km'), ans: 'A', why: 's = 40 × 3 = 120 (km).' },
    { sec: 'Tính thời gian', name: 'Câu 6', pts: 1, text: 'Quãng đường 100 km, vận tốc 50 km/giờ, thời gian là:', opts: o4('2 giờ', '50 giờ', '150 giờ', '0,5 giờ'), ans: 'A', why: 't = 100 : 50 = 2 (giờ).' },
    { sec: 'Đơn vị', name: 'Câu 7', pts: 1, text: 'Đơn vị của vận tốc thường là:', opts: o4('km/giờ (hoặc m/giây)', 'km', 'giờ', 'kg'), ans: 'A', why: 'Vận tốc thường đo bằng km/giờ hoặc m/giây.' },
    { sec: 'Tính vận tốc', name: 'Câu 8', pts: 1, text: 'Xe đi 150 km trong 3 giờ, vận tốc là:', opts: o4('50 km/giờ', '450 km/giờ', '153 km/giờ', '147 km/giờ'), ans: 'A', why: 'v = 150 : 3 = 50 (km/giờ).' },
    { sec: 'Tính quãng đường', name: 'Câu 9', pts: 1, text: 'Người đi bộ với vận tốc 5 km/giờ, trong 2 giờ đi được:', opts: o4('10 km', '7 km', '3 km', '2,5 km'), ans: 'A', why: 's = 5 × 2 = 10 (km).' },
    { sec: 'Tính thời gian', name: 'Câu 10', pts: 1, text: 'Ô tô vận tốc 60 km/giờ đi 180 km hết bao lâu?', opts: o4('3 giờ', '2 giờ', '4 giờ', '120 giờ'), ans: 'A', why: 't = 180 : 60 = 3 (giờ).' },
  ],
},

/* ═══════════ ĐỀ 10 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 6710, title: 'Đề 10 · Ôn tập tổng hợp', time: 20,
  questions: [
    { sec: 'Số thập phân', name: 'Câu 1', pts: 1, text: '2,5 + 1,5 = ?', opts: o4('4', '3,10', '4,10', '3'), ans: 'A', why: '2,5 + 1,5 = 4.' },
    { sec: 'Số thập phân', name: 'Câu 2', pts: 1, text: '0,5 × 4 = ?', opts: o4('2', '0,20', '2,5', '20'), ans: 'A', why: '0,5 × 4 = 2.' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: '50% của 100 là bao nhiêu?', opts: o4('50', '100', '25', '500'), ans: 'A', why: '50% của 100 = 50.' },
    { sec: 'Đơn vị', name: 'Câu 4', pts: 1, text: '1 ha = ? m²', opts: o4('10 000 m²', '1 000 m²', '100 m²', '100 000 m²'), ans: 'A', why: '1 ha = 10 000 m².' },
    { sec: 'Diện tích', name: 'Câu 5', pts: 1, text: 'Tam giác đáy 6 cm, cao 4 cm có diện tích:', opts: o4('12 cm²', '24 cm²', '10 cm²', '20 cm²'), ans: 'A', why: 'S = (6 × 4) : 2 = 12 (cm²).' },
    { sec: 'Hình tròn', name: 'Câu 6', pts: 1, text: 'Hình tròn bán kính 2 cm có chu vi:', opts: o4('12,56 cm', '6,28 cm', '4 cm', '12,56 cm²'), ans: 'A', why: 'C = 2 × 2 × 3,14 = 12,56 (cm).' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: 'Hình lập phương cạnh 3 cm có thể tích:', opts: o4('27 cm³', '9 cm³', '18 cm³', '6 cm³'), ans: 'A', why: 'V = 3 × 3 × 3 = 27 (cm³).' },
    { sec: 'Chuyển động', name: 'Câu 8', pts: 1, text: 'Đi 100 km trong 2 giờ, vận tốc là:', opts: o4('50 km/giờ', '200 km/giờ', '98 km/giờ', '102 km/giờ'), ans: 'A', why: 'v = 100 : 2 = 50 (km/giờ).' },
    { sec: 'Phần trăm', name: 'Câu 9', pts: 1, text: 'Phân số 3/4 bằng bao nhiêu phần trăm?', opts: o4('75%', '34%', '43%', '25%'), ans: 'A', why: '3/4 = 75/100 = 75%.' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'So sánh: 0,7 ... 0,70', opts: o4('=', '>', '<', 'Không so sánh được'), ans: 'A', why: '0,7 = 0,70 nên hai số bằng nhau.' },
  ],
},

];

SUBJECTS.push({
  id: 'toan5', name: 'Toán', short: 'Toán 5', icon: '🔢', grade: 5,
  exams: TOAN5_EXAMS, ready: true,
  heroTitle: 'Toán lớp 5 — số thập phân, tỉ số phần trăm, hình học và chuyển động đều',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
