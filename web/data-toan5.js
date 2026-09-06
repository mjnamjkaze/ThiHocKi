// TOÁN — LỚP 5 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

/* ═══════════ ĐỀ 11 — SỐ THẬP PHÂN (NÂNG CAO) ═══════════ */
{
  id: 8001, title: 'Đề 11 · Số thập phân nâng cao', time: 20,
  questions: [
    { sec: 'Viết số', name: 'Câu 1', pts: 1, text: '"Mười hai phẩy không năm" viết là:', opts: o4('12,5', '12,05', '120,5', '1,205'), ans: 'B', why: 'Mười hai phẩy không năm viết là 12,05.' },
    { sec: 'Hàng', name: 'Câu 2', pts: 1, text: 'Trong số 3,725 chữ số 7 thuộc hàng nào?', opts: o4('Phần trăm', 'Phần nghìn', 'Phần mười', 'Đơn vị'), ans: 'C', why: 'Chữ số ngay sau dấu phẩy là hàng phần mười: chữ số 7.' },
    { sec: 'Cấu tạo', name: 'Câu 3', pts: 1, text: 'Số gồm 5 đơn vị, 3 phần mười và 8 phần trăm viết là:', opts: o4('5,38', '5,038', '53,8', '5,83'), ans: 'A', why: '5 đơn vị, 3 phần mười, 8 phần trăm là 5,38.' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'So sánh: 8,09 ... 8,1', opts: o4('>', '<', '=', 'Không so được'), ans: 'B', why: '8,1 = 8,10 mà 8,09 < 8,10 nên 8,09 < 8,1.' },
    { sec: 'Sắp thứ tự', name: 'Câu 5', pts: 1, text: 'Sắp xếp tăng dần: 4,5 ; 4,05 ; 4,15', opts: o4('4,05 < 4,15 < 4,5', '4,5 < 4,15 < 4,05', '4,15 < 4,05 < 4,5', '4,05 < 4,5 < 4,15'), ans: 'A', why: 'So phần phần mười: 4,05 < 4,15 < 4,5.' },
    { sec: 'Đọc số', name: 'Câu 6', pts: 1, text: 'Số 0,08 đọc là:', opts: o4('Không phẩy tám', 'Không phẩy không tám', 'Tám phần mười', 'Tám'), ans: 'B', why: '0,08 đọc là "không phẩy không tám" (tám phần trăm).' },
    { sec: 'Đổi phân số', name: 'Câu 7', pts: 1, text: 'Phân số 7/100 viết dưới dạng số thập phân là:', opts: o4('0,7', '7,0', '0,07', '0,007'), ans: 'C', why: '7/100 = 0,07 (bảy phần trăm).' },
    { sec: 'Hỗn số', name: 'Câu 8', pts: 1, text: 'Hỗn số 3 1/2 viết thành số thập phân là:', opts: o4('3,5', '3,12', '3,2', '35'), ans: 'A', why: '3 1/2 = 3,5 (một nửa là 0,5).' },
    { sec: 'Lớn nhất', name: 'Câu 9', pts: 1, text: 'Số lớn nhất trong 9,9 ; 9,89 ; 9,91 là:', opts: o4('9,9', '9,89', '9,91', 'Bằng nhau'), ans: 'C', why: '9,91 = 9,91 ; 9,9 = 9,90 ; nên 9,91 lớn nhất.' },
    { sec: 'Đổi phân số', name: 'Câu 10', pts: 1, text: 'Phân số 6/1000 viết dưới dạng số thập phân là:', opts: o4('0,006', '0,06', '0,6', '6,000'), ans: 'A', why: '6/1000 = 0,006 (sáu phần nghìn).' },
  ],
},

/* ═══════════ ĐỀ 12 — CỘNG, TRỪ SỐ THẬP PHÂN (CÓ LỜI VĂN) ═══════════ */
{
  id: 8002, title: 'Đề 12 · Cộng, trừ số thập phân có lời văn', time: 20,
  questions: [
    { sec: 'Cộng', name: 'Câu 1', pts: 1, text: '3,45 + 2,55 = ?', opts: o4('6', '5,9', '6,1', '5,10'), ans: 'A', why: '3,45 + 2,55 = 6,00 = 6.' },
    { sec: 'Trừ', name: 'Câu 2', pts: 1, text: '12,7 − 4,8 = ?', opts: o4('7,9', '8,1', '7,1', '8,9'), ans: 'A', why: '12,7 − 4,8 = 7,9.' },
    { sec: 'Cộng', name: 'Câu 3', pts: 1, text: '5,6 + 3,45 = ?', opts: o4('9,05', '8,05', '9,5', '9,15'), ans: 'A', why: '5,60 + 3,45 = 9,05.' },
    { sec: 'Trừ', name: 'Câu 4', pts: 1, text: '20 − 7,35 = ?', opts: o4('12,65', '13,65', '12,75', '13,35'), ans: 'A', why: '20,00 − 7,35 = 12,65.' },
    { sec: 'Lời văn', name: 'Câu 5', pts: 1, text: 'Mua 2,5 kg gạo và 1,75 kg đường. Tổng khối lượng là:', opts: o4('4,25 kg', '4,15 kg', '3,25 kg', '4,75 kg'), ans: 'A', why: '2,5 + 1,75 = 4,25 (kg).' },
    { sec: 'Cộng', name: 'Câu 6', pts: 1, text: '8,25 + 1,75 = ?', opts: o4('9,9', '10', '10,1', '9'), ans: 'B', why: '8,25 + 1,75 = 10,00 = 10.' },
    { sec: 'Lời văn', name: 'Câu 7', pts: 1, text: 'Sợi dây dài 6,5 m, cắt đi 2,8 m. Còn lại bao nhiêu?', opts: o4('4,7 m', '3,3 m', '3,7 m', '9,3 m'), ans: 'C', why: '6,5 − 2,8 = 3,7 (m).' },
    { sec: 'Cộng', name: 'Câu 8', pts: 1, text: '0,9 + 0,99 = ?', opts: o4('1,89', '1,99', '1,09', '1,8'), ans: 'A', why: '0,90 + 0,99 = 1,89.' },
    { sec: 'Trừ', name: 'Câu 9', pts: 1, text: '15,04 − 3,04 = ?', opts: o4('12', '12,08', '18,08', '11'), ans: 'A', why: '15,04 − 3,04 = 12,00 = 12.' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Can một có 4,5 lít, can hai có 3,75 lít. Cả hai can có:', opts: o4('7,25 lít', '8,15 lít', '8,75 lít', '8,25 lít'), ans: 'D', why: '4,5 + 3,75 = 8,25 (lít).' },
  ],
},

/* ═══════════ ĐỀ 13 — NHÂN, CHIA SỐ THẬP PHÂN (NÂNG CAO) ═══════════ */
{
  id: 8003, title: 'Đề 13 · Nhân, chia số thập phân nâng cao', time: 20,
  questions: [
    { sec: 'Nhân', name: 'Câu 1', pts: 1, text: '3,4 × 5 = ?', opts: o4('17', '15,20', '17,2', '16'), ans: 'A', why: '3,4 × 5 = 17,0 = 17.' },
    { sec: 'Nhân', name: 'Câu 2', pts: 1, text: '2,5 × 2,5 = ?', opts: o4('6,25', '5', '4,25', '6,5'), ans: 'A', why: '2,5 × 2,5 = 6,25.' },
    { sec: 'Chia', name: 'Câu 3', pts: 1, text: '7,5 : 3 = ?', opts: o4('2,5', '2,3', '3,5', '2,15'), ans: 'A', why: '7,5 : 3 = 2,5.' },
    { sec: 'Chia', name: 'Câu 4', pts: 1, text: '4,8 : 4 = ?', opts: o4('1,2', '1,4', '2,1', '1,3'), ans: 'A', why: '4,8 : 4 = 1,2.' },
    { sec: 'Nhân', name: 'Câu 5', pts: 1, text: '1,25 × 8 = ?', opts: o4('9', '10', '12', '1'), ans: 'B', why: '1,25 × 8 = 10.' },
    { sec: 'Nhân', name: 'Câu 6', pts: 1, text: '0,6 × 0,5 = ?', opts: o4('0,3', '0,03', '3', '0,11'), ans: 'A', why: '6 × 5 = 30, đếm hai chữ số phần thập phân: 0,30 = 0,3.' },
    { sec: 'Chia', name: 'Câu 7', pts: 1, text: '9,6 : 8 = ?', opts: o4('12', '1,02', '1,2', '0,12'), ans: 'C', why: '9,6 : 8 = 1,2.' },
    { sec: 'Nhân', name: 'Câu 8', pts: 1, text: '12,5 × 0,4 = ?', opts: o4('5', '50', '0,5', '4'), ans: 'A', why: '12,5 × 0,4 = 5,00 = 5.' },
    { sec: 'Chia', name: 'Câu 9', pts: 1, text: '6 : 0,5 = ?', opts: o4('12', '3', '1,2', '30'), ans: 'A', why: 'Chia cho 0,5 là gấp đôi: 6 : 0,5 = 12.' },
    { sec: 'Nhân 100', name: 'Câu 10', pts: 1, text: '2,4 × 100 = ?', opts: o4('240', '24', '2400', '24,0'), ans: 'A', why: 'Nhân 100 dời dấu phẩy sang phải hai chữ số: 240.' },
  ],
},

/* ═══════════ ĐỀ 14 — ÔN PHÂN SỐ ═══════════ */
{
  id: 8004, title: 'Đề 14 · Ôn tập phân số', time: 20,
  questions: [
    { sec: 'Rút gọn', name: 'Câu 1', pts: 1, text: 'Rút gọn phân số 6/8 được:', opts: o4('3/4', '2/4', '6/8', '1/2'), ans: 'A', why: '6/8 = (6:2)/(8:2) = 3/4.' },
    { sec: 'Cộng', name: 'Câu 2', pts: 1, text: '1/2 + 1/4 = ?', opts: o4('3/4', '2/6', '1/6', '2/8'), ans: 'A', why: '1/2 = 2/4 nên 2/4 + 1/4 = 3/4.' },
    { sec: 'Cộng', name: 'Câu 3', pts: 1, text: '3/5 + 1/5 = ?', opts: o4('4/5', '4/10', '2/5', '3/25'), ans: 'A', why: 'Cùng mẫu số: 3/5 + 1/5 = 4/5.' },
    { sec: 'Nhân', name: 'Câu 4', pts: 1, text: '2/3 × 3/4 = ?', opts: o4('1/2', '5/7', '6/7', '5/12'), ans: 'A', why: '2/3 × 3/4 = 6/12 = 1/2.' },
    { sec: 'Trừ', name: 'Câu 5', pts: 1, text: '5/6 − 1/6 = ?', opts: o4('2/3', '4/12', '1', '6/6'), ans: 'A', why: '5/6 − 1/6 = 4/6 = 2/3.' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'So sánh: 2/3 ... 3/4', opts: o4('>', '<', '=', 'Không so được'), ans: 'B', why: '2/3 = 8/12, 3/4 = 9/12 nên 2/3 < 3/4.' },
    { sec: 'Chia', name: 'Câu 7', pts: 1, text: '1/2 : 1/4 = ?', opts: o4('1/8', '1/2', '2', '4'), ans: 'C', why: '1/2 : 1/4 = 1/2 × 4 = 2.' },
    { sec: 'Nhận biết', name: 'Câu 8', pts: 1, text: 'Phân số nào bằng 1/2?', opts: o4('4/8', '2/6', '3/8', '1/4'), ans: 'A', why: '4/8 = 1/2 (chia cả tử và mẫu cho 4).' },
    { sec: 'Tìm giá trị', name: 'Câu 9', pts: 1, text: '3/4 của 20 là bao nhiêu?', opts: o4('15', '5', '12', '16'), ans: 'A', why: '20 : 4 × 3 = 5 × 3 = 15.' },
    { sec: 'Hỗn số', name: 'Câu 10', pts: 1, text: 'Hỗn số 2 3/4 chuyển thành phân số là:', opts: o4('11/4', '8/4', '5/4', '23/4'), ans: 'A', why: '2 3/4 = (2 × 4 + 3)/4 = 11/4.' },
  ],
},

/* ═══════════ ĐỀ 15 — TỈ SỐ PHẦN TRĂM (TÌM %) ═══════════ */
{
  id: 8005, title: 'Đề 15 · Tỉ số phần trăm — tìm phần trăm', time: 20,
  questions: [
    { sec: 'Tìm tỉ số %', name: 'Câu 1', pts: 1, text: 'Tỉ số phần trăm của 3 và 4 là:', opts: o4('75%', '34%', '43%', '80%'), ans: 'A', why: '3 : 4 = 0,75 = 75%.' },
    { sec: 'Tính %', name: 'Câu 2', pts: 1, text: '30% của 150 là bao nhiêu?', opts: o4('45', '30', '50', '15'), ans: 'A', why: '150 × 30 : 100 = 45.' },
    { sec: 'Tìm số', name: 'Câu 3', pts: 1, text: 'Biết 25% của một số là 20. Số đó là:', opts: o4('80', '5', '100', '40'), ans: 'A', why: '20 : 25 × 100 = 80.' },
    { sec: 'Tìm tỉ số %', name: 'Câu 4', pts: 1, text: 'Tỉ số phần trăm của 15 và 25 là:', opts: o4('40%', '60%', '15%', '75%'), ans: 'B', why: '15 : 25 = 0,6 = 60%.' },
    { sec: 'Tính %', name: 'Câu 5', pts: 1, text: '40% của 250 là bao nhiêu?', opts: o4('100', '40', '60', '150'), ans: 'A', why: '250 × 40 : 100 = 100.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: 'Biết 50% của một số là 30. Số đó là:', opts: o4('60', '15', '30', '120'), ans: 'A', why: '30 : 50 × 100 = 60 (hoặc 30 × 2).' },
    { sec: 'Bài toán', name: 'Câu 7', pts: 1, text: 'Lớp có 30 bạn, 20% là học sinh giỏi. Số học sinh giỏi là:', opts: o4('6', '20', '10', '5'), ans: 'A', why: '30 × 20 : 100 = 6 (bạn).' },
    { sec: 'Tìm tỉ số %', name: 'Câu 8', pts: 1, text: 'Tỉ số phần trăm của 45 và 50 là:', opts: o4('45%', '50%', '90%', '95%'), ans: 'C', why: '45 : 50 = 0,9 = 90%.' },
    { sec: 'Tính %', name: 'Câu 9', pts: 1, text: '15% của 200 là bao nhiêu?', opts: o4('30', '15', '20', '45'), ans: 'A', why: '200 × 15 : 100 = 30.' },
    { sec: 'Tìm số', name: 'Câu 10', pts: 1, text: 'Biết 10% của một số là 7. Số đó là:', opts: o4('7', '17', '0,7', '70'), ans: 'D', why: '7 : 10 × 100 = 70.' },
  ],
},

/* ═══════════ ĐỀ 16 — TỈ SỐ PHẦN TRĂM (BÀI TOÁN) ═══════════ */
{
  id: 8006, title: 'Đề 16 · Bài toán tỉ số phần trăm', time: 20,
  questions: [
    { sec: 'Giảm giá', name: 'Câu 1', pts: 1, text: 'Áo giá 300 000 đồng, giảm 20%. Số tiền được giảm là:', opts: o4('60 000 đồng', '30 000 đồng', '20 000 đồng', '240 000 đồng'), ans: 'A', why: '300 000 × 20 : 100 = 60 000 (đồng).' },
    { sec: 'Giảm giá', name: 'Câu 2', pts: 1, text: 'Áo giá 300 000 đồng, giảm 20%. Giá sau khi giảm là:', opts: o4('240 000 đồng', '60 000 đồng', '280 000 đồng', '250 000 đồng'), ans: 'A', why: '300 000 − 60 000 = 240 000 (đồng).' },
    { sec: 'Lãi suất', name: 'Câu 3', pts: 1, text: 'Gửi 1 000 000 đồng lãi 6% một năm. Sau một năm được lãi:', opts: o4('60 000 đồng', '6 000 đồng', '600 000 đồng', '66 000 đồng'), ans: 'A', why: '1 000 000 × 6 : 100 = 60 000 (đồng).' },
    { sec: 'Bài toán', name: 'Câu 4', pts: 1, text: 'Vườn có 200 cây, 60% là cây cam. Số cây cam là:', opts: o4('60 cây', '120 cây', '80 cây', '140 cây'), ans: 'B', why: '200 × 60 : 100 = 120 (cây).' },
    { sec: 'Bài toán', name: 'Câu 5', pts: 1, text: 'Xưởng dự định làm 500 sản phẩm, đã làm 80%. Số sản phẩm đã làm là:', opts: o4('400', '80', '100', '450'), ans: 'A', why: '500 × 80 : 100 = 400 (sản phẩm).' },
    { sec: 'Bài toán', name: 'Câu 6', pts: 1, text: 'Trường có 800 học sinh, 52% là nữ. Số học sinh nữ là:', opts: o4('384', '520', '416', '448'), ans: 'C', why: '800 × 52 : 100 = 416 (học sinh).' },
    { sec: 'Tìm số ban đầu', name: 'Câu 7', pts: 1, text: 'Một số sau khi tăng thêm 25% thì được 250. Số ban đầu là:', opts: o4('200', '225', '300', '125'), ans: 'A', why: '250 ứng với 125%, số ban đầu = 250 : 125 × 100 = 200.' },
    { sec: 'Tìm số ban đầu', name: 'Câu 8', pts: 1, text: 'Cửa hàng bán 40 kg, bằng 80% số gạo dự định bán. Số gạo dự định là:', opts: o4('32 kg', '48 kg', '60 kg', '50 kg'), ans: 'D', why: '40 : 80 × 100 = 50 (kg).' },
    { sec: 'Tìm số ban đầu', name: 'Câu 9', pts: 1, text: 'Học sinh giỏi có 12 bạn, chiếm 30% lớp. Sĩ số lớp là:', opts: o4('40', '36', '30', '42'), ans: 'A', why: '12 : 30 × 100 = 40 (bạn).' },
    { sec: 'Lãi bán hàng', name: 'Câu 10', pts: 1, text: 'Vốn 400 000 đồng, bán lãi 25% so với vốn. Giá bán là:', opts: o4('500 000 đồng', '425 000 đồng', '480 000 đồng', '300 000 đồng'), ans: 'A', why: 'Lãi = 400 000 × 25 : 100 = 100 000; giá bán = 400 000 + 100 000 = 500 000 (đồng).' },
  ],
},

/* ═══════════ ĐỀ 17 — DIỆN TÍCH TAM GIÁC ═══════════ */
{
  id: 8007, title: 'Đề 17 · Diện tích tam giác', time: 20,
  questions: [
    { sec: 'Tam giác', name: 'Câu 1', pts: 1, text: 'Tam giác đáy 8 cm, chiều cao 5 cm. Diện tích là:', opts: o4('20 cm²', '40 cm²', '13 cm²', '20 cm'), ans: 'A', why: 'S = (8 × 5) : 2 = 40 : 2 = 20 (cm²).' },
    { sec: 'Tam giác', name: 'Câu 2', pts: 1, text: 'Tam giác đáy 12 cm, chiều cao 8 cm. Diện tích là:', opts: o4('48 cm²', '96 cm²', '20 cm²', '24 cm²'), ans: 'A', why: 'S = (12 × 8) : 2 = 96 : 2 = 48 (cm²).' },
    { sec: 'Tam giác vuông', name: 'Câu 3', pts: 1, text: 'Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Diện tích là:', opts: o4('48 cm²', '24 cm²', '14 cm²', '28 cm²'), ans: 'B', why: 'S = (6 × 8) : 2 = 48 : 2 = 24 (cm²).' },
    { sec: 'Tìm chiều cao', name: 'Câu 4', pts: 1, text: 'Tam giác diện tích 30 cm², đáy 10 cm. Chiều cao là:', opts: o4('6 cm', '3 cm', '6 cm²', '12 cm'), ans: 'A', why: 'Chiều cao = 30 × 2 : 10 = 6 (cm).' },
    { sec: 'Tìm đáy', name: 'Câu 5', pts: 1, text: 'Tam giác diện tích 24 cm², chiều cao 6 cm. Đáy là:', opts: o4('8 cm', '4 cm', '8 cm²', '12 cm'), ans: 'A', why: 'Đáy = 24 × 2 : 6 = 8 (cm).' },
    { sec: 'Tam giác', name: 'Câu 6', pts: 1, text: 'Tam giác đáy 15 cm, chiều cao 6 cm. Diện tích là:', opts: o4('90 cm²', '21 cm²', '45 cm²', '30 cm²'), ans: 'C', why: 'S = (15 × 6) : 2 = 90 : 2 = 45 (cm²).' },
    { sec: 'Tam giác', name: 'Câu 7', pts: 1, text: 'Tam giác đáy 2,5 dm, chiều cao 4 dm. Diện tích là:', opts: o4('5 dm²', '10 dm²', '6,5 dm²', '5 dm'), ans: 'A', why: 'S = (2,5 × 4) : 2 = 10 : 2 = 5 (dm²).' },
    { sec: 'Tam giác', name: 'Câu 8', pts: 1, text: 'Tam giác đáy 7 cm, chiều cao 4 cm. Diện tích là:', opts: o4('14 cm²', '28 cm²', '11 cm²', '14 cm'), ans: 'A', why: 'S = (7 × 4) : 2 = 28 : 2 = 14 (cm²).' },
    { sec: 'Suy luận', name: 'Câu 9', pts: 1, text: 'Giữ nguyên đáy, chiều cao gấp 2 lần thì diện tích tam giác:', opts: o4('Gấp 4 lần', 'Không đổi', 'Gấp 3 lần', 'Gấp 2 lần'), ans: 'D', why: 'Diện tích tỉ lệ với chiều cao nên cũng gấp 2 lần.' },
    { sec: 'Tam giác', name: 'Câu 10', pts: 1, text: 'Tam giác đáy 9 cm, chiều cao 10 cm. Diện tích là:', opts: o4('45 cm²', '90 cm²', '19 cm²', '45 cm'), ans: 'A', why: 'S = (9 × 10) : 2 = 90 : 2 = 45 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 18 — DIỆN TÍCH HÌNH THANG ═══════════ */
{
  id: 8008, title: 'Đề 18 · Diện tích hình thang', time: 20,
  questions: [
    { sec: 'Hình thang', name: 'Câu 1', pts: 1, text: 'Hình thang đáy lớn 10 cm, đáy bé 6 cm, chiều cao 4 cm. Diện tích là:', opts: o4('32 cm²', '64 cm²', '20 cm²', '32 cm'), ans: 'A', why: 'S = (10 + 6) × 4 : 2 = 64 : 2 = 32 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 2', pts: 1, text: 'Hình thang đáy lớn 12 cm, đáy bé 8 cm, chiều cao 5 cm. Diện tích là:', opts: o4('50 cm²', '100 cm²', '25 cm²', '50 cm'), ans: 'A', why: 'S = (12 + 8) × 5 : 2 = 100 : 2 = 50 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 3', pts: 1, text: 'Hình thang hai đáy 9 cm và 7 cm, chiều cao 6 cm. Diện tích là:', opts: o4('96 cm²', '48 cm²', '24 cm²', '22 cm²'), ans: 'B', why: 'S = (9 + 7) × 6 : 2 = 96 : 2 = 48 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 4', pts: 1, text: 'Hình thang hai đáy 15 cm và 11 cm, chiều cao 8 cm. Diện tích là:', opts: o4('104 cm²', '208 cm²', '52 cm²', '120 cm²'), ans: 'A', why: 'S = (15 + 11) × 8 : 2 = 208 : 2 = 104 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 5', pts: 1, text: 'Hình thang đáy lớn 6,5 cm, đáy bé 3,5 cm, chiều cao 4 cm. Diện tích là:', opts: o4('40 cm²', '10 cm²', '20 cm²', '14 cm²'), ans: 'C', why: 'S = (6,5 + 3,5) × 4 : 2 = 40 : 2 = 20 (cm²).' },
    { sec: 'Tìm chiều cao', name: 'Câu 6', pts: 1, text: 'Hình thang diện tích 60 cm², tổng hai đáy 20 cm. Chiều cao là:', opts: o4('6 cm', '3 cm', '12 cm', '6 cm²'), ans: 'A', why: 'Chiều cao = 60 × 2 : 20 = 6 (cm).' },
    { sec: 'Hình thang', name: 'Câu 7', pts: 1, text: 'Hình thang hai đáy 20 cm và 16 cm, chiều cao 10 cm. Diện tích là:', opts: o4('180 cm²', '360 cm²', '90 cm²', '36 cm²'), ans: 'A', why: 'S = (20 + 16) × 10 : 2 = 360 : 2 = 180 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 8', pts: 1, text: 'Hình thang đáy lớn 8 dm, đáy bé 4 dm, chiều cao 5 dm. Diện tích là:', opts: o4('60 dm²', '17 dm²', '30 dm', '30 dm²'), ans: 'D', why: 'S = (8 + 4) × 5 : 2 = 60 : 2 = 30 (dm²).' },
    { sec: 'Hình thang vuông', name: 'Câu 9', pts: 1, text: 'Hình thang vuông hai đáy 5 cm và 3 cm, chiều cao 4 cm. Diện tích là:', opts: o4('16 cm²', '32 cm²', '8 cm²', '12 cm²'), ans: 'A', why: 'S = (5 + 3) × 4 : 2 = 32 : 2 = 16 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 10', pts: 1, text: 'Hình thang hai đáy 14 cm và 10 cm, chiều cao 6 cm. Diện tích là:', opts: o4('72 cm²', '144 cm²', '36 cm²', '30 cm²'), ans: 'A', why: 'S = (14 + 10) × 6 : 2 = 144 : 2 = 72 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 19 — CHU VI, DIỆN TÍCH HÌNH TRÒN ═══════════ */
{
  id: 8009, title: 'Đề 19 · Chu vi và diện tích hình tròn', time: 20,
  questions: [
    { sec: 'Chu vi', name: 'Câu 1', pts: 1, text: 'Hình tròn bán kính 4 cm có chu vi là:', opts: o4('25,12 cm', '12,56 cm', '50,24 cm', '25,12 cm²'), ans: 'A', why: 'C = 2 × 4 × 3,14 = 25,12 (cm).' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: 'Hình tròn bán kính 4 cm có diện tích là:', opts: o4('50,24 cm²', '25,12 cm²', '16 cm²', '50,24 cm'), ans: 'A', why: 'S = 4 × 4 × 3,14 = 50,24 (cm²).' },
    { sec: 'Chu vi', name: 'Câu 3', pts: 1, text: 'Hình tròn đường kính 10 cm có chu vi là:', opts: o4('15,7 cm', '31,4 cm', '78,5 cm', '62,8 cm'), ans: 'B', why: 'C = 10 × 3,14 = 31,4 (cm).' },
    { sec: 'Diện tích', name: 'Câu 4', pts: 1, text: 'Hình tròn bán kính 5 cm có diện tích là:', opts: o4('78,5 cm²', '31,4 cm²', '25 cm²', '78,5 cm'), ans: 'A', why: 'S = 5 × 5 × 3,14 = 78,5 (cm²).' },
    { sec: 'Diện tích', name: 'Câu 5', pts: 1, text: 'Hình tròn đường kính 6 cm có diện tích là:', opts: o4('18,84 cm²', '9,42 cm²', '28,26 cm²', '36 cm²'), ans: 'C', why: 'Bán kính = 3 cm; S = 3 × 3 × 3,14 = 28,26 (cm²).' },
    { sec: 'Chu vi', name: 'Câu 6', pts: 1, text: 'Hình tròn bán kính 10 cm có chu vi là:', opts: o4('62,8 cm', '31,4 cm', '314 cm', '62,8 cm²'), ans: 'A', why: 'C = 2 × 10 × 3,14 = 62,8 (cm).' },
    { sec: 'Diện tích', name: 'Câu 7', pts: 1, text: 'Hình tròn bán kính 2 cm có diện tích là:', opts: o4('6,28 cm²', '4 cm²', '12,56 cm', '12,56 cm²'), ans: 'D', why: 'S = 2 × 2 × 3,14 = 12,56 (cm²).' },
    { sec: 'Chu vi', name: 'Câu 8', pts: 1, text: 'Hình tròn đường kính 8 cm có chu vi là:', opts: o4('25,12 cm', '12,56 cm', '50,24 cm', '16 cm'), ans: 'A', why: 'C = 8 × 3,14 = 25,12 (cm).' },
    { sec: 'Tìm đường kính', name: 'Câu 9', pts: 1, text: 'Hình tròn có chu vi 31,4 cm thì đường kính là:', opts: o4('10 cm', '5 cm', '20 cm', '15,7 cm'), ans: 'A', why: 'Đường kính = 31,4 : 3,14 = 10 (cm).' },
    { sec: 'Chu vi', name: 'Câu 10', pts: 1, text: 'Hình tròn bán kính 6 cm có chu vi là:', opts: o4('18,84 cm', '37,68 cm', '75,36 cm', '36 cm'), ans: 'B', why: 'C = 2 × 6 × 3,14 = 37,68 (cm).' },
  ],
},

/* ═══════════ ĐỀ 20 — THỂ TÍCH HÌNH HỘP CHỮ NHẬT ═══════════ */
{
  id: 8010, title: 'Đề 20 · Thể tích hình hộp chữ nhật', time: 20,
  questions: [
    { sec: 'Thể tích', name: 'Câu 1', pts: 1, text: 'Hình hộp chữ nhật dài 5 cm, rộng 3 cm, cao 2 cm. Thể tích là:', opts: o4('30 cm³', '10 cm³', '15 cm³', '60 cm³'), ans: 'A', why: 'V = 5 × 3 × 2 = 30 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 2', pts: 1, text: 'Hình hộp chữ nhật dài 6 cm, rộng 4 cm, cao 5 cm. Thể tích là:', opts: o4('120 cm³', '60 cm³', '15 cm³', '24 cm³'), ans: 'A', why: 'V = 6 × 4 × 5 = 120 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 3', pts: 1, text: 'Hình hộp chữ nhật dài 10 cm, rộng 2 cm, cao 3 cm. Thể tích là:', opts: o4('15 cm³', '60 cm³', '30 cm³', '120 cm³'), ans: 'B', why: 'V = 10 × 2 × 3 = 60 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 4', pts: 1, text: 'Hình hộp chữ nhật dài 8 cm, rộng 5 cm, cao 2 cm. Thể tích là:', opts: o4('80 cm³', '40 cm³', '15 cm³', '160 cm³'), ans: 'A', why: 'V = 8 × 5 × 2 = 80 (cm³).' },
    { sec: 'Tìm chiều cao', name: 'Câu 5', pts: 1, text: 'Hình hộp có thể tích 60 cm³, đáy dài 5 cm rộng 3 cm. Chiều cao là:', opts: o4('2 cm', '12 cm', '4 cm', '8 cm'), ans: 'C', why: 'Diện tích đáy = 15; chiều cao = 60 : 15 = 4 (cm).' },
    { sec: 'Lời văn', name: 'Câu 6', pts: 1, text: 'Bể hình hộp chữ nhật dài 2 m, rộng 1 m, cao 1,5 m. Thể tích là:', opts: o4('3 m³', '4,5 m³', '1,5 m³', '6 m³'), ans: 'A', why: 'V = 2 × 1 × 1,5 = 3 (m³).' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: 'Hình hộp chữ nhật dài 4 dm, rộng 3 dm, cao 2 dm. Thể tích là:', opts: o4('9 dm³', '12 dm³', '48 dm³', '24 dm³'), ans: 'D', why: 'V = 4 × 3 × 2 = 24 (dm³).' },
    { sec: 'Tìm chiều cao', name: 'Câu 8', pts: 1, text: 'Hình hộp thể tích 100 cm³, diện tích đáy 20 cm². Chiều cao là:', opts: o4('5 cm', '4 cm', '80 cm', '5 cm³'), ans: 'A', why: 'Chiều cao = 100 : 20 = 5 (cm).' },
    { sec: 'Thể tích', name: 'Câu 9', pts: 1, text: 'Hình hộp chữ nhật dài 7 cm, rộng 2 cm, cao 5 cm. Thể tích là:', opts: o4('70 cm³', '14 cm³', '35 cm³', '140 cm³'), ans: 'A', why: 'V = 7 × 2 × 5 = 70 (cm³).' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Bể cá dài 8 dm, rộng 5 dm, cao 4 dm chứa đầy nước. Lượng nước là:', opts: o4('80 lít', '160 lít', '17 lít', '320 lít'), ans: 'B', why: 'V = 8 × 5 × 4 = 160 (dm³) = 160 lít.' },
  ],
},

/* ═══════════ ĐỀ 21 — HÌNH LẬP PHƯƠNG ═══════════ */
{
  id: 8011, title: 'Đề 21 · Thể tích, diện tích hình lập phương', time: 20,
  questions: [
    { sec: 'Thể tích', name: 'Câu 1', pts: 1, text: 'Hình lập phương cạnh 5 cm có thể tích là:', opts: o4('125 cm³', '25 cm³', '15 cm³', '150 cm³'), ans: 'A', why: 'V = 5 × 5 × 5 = 125 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 2', pts: 1, text: 'Hình lập phương cạnh 2 cm có thể tích là:', opts: o4('8 cm³', '6 cm³', '4 cm³', '12 cm³'), ans: 'A', why: 'V = 2 × 2 × 2 = 8 (cm³).' },
    { sec: 'Diện tích toàn phần', name: 'Câu 3', pts: 1, text: 'Hình lập phương cạnh 3 cm có diện tích toàn phần là:', opts: o4('27 cm²', '54 cm²', '36 cm²', '9 cm²'), ans: 'B', why: 'Stp = 6 × (3 × 3) = 6 × 9 = 54 (cm²).' },
    { sec: 'Diện tích xung quanh', name: 'Câu 4', pts: 1, text: 'Hình lập phương cạnh 4 cm có diện tích xung quanh là:', opts: o4('64 cm²', '96 cm²', '16 cm²', '64 cm³'), ans: 'A', why: 'Sxq = 4 × (4 × 4) = 4 × 16 = 64 (cm²).' },
    { sec: 'Diện tích toàn phần', name: 'Câu 5', pts: 1, text: 'Hình lập phương cạnh 5 cm có diện tích toàn phần là:', opts: o4('125 cm²', '25 cm²', '150 cm²', '100 cm²'), ans: 'C', why: 'Stp = 6 × (5 × 5) = 6 × 25 = 150 (cm²).' },
    { sec: 'Thể tích', name: 'Câu 6', pts: 1, text: 'Hình lập phương cạnh 6 cm có thể tích là:', opts: o4('216 cm³', '36 cm³', '18 cm³', '196 cm³'), ans: 'A', why: 'V = 6 × 6 × 6 = 216 (cm³).' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: 'Hình lập phương cạnh 10 cm có thể tích là:', opts: o4('1 000 cm³', '100 cm³', '30 cm³', '300 cm³'), ans: 'A', why: 'V = 10 × 10 × 10 = 1 000 (cm³).' },
    { sec: 'Tìm cạnh', name: 'Câu 8', pts: 1, text: 'Hình lập phương có diện tích toàn phần 24 cm². Cạnh là:', opts: o4('4 cm', '6 cm', '3 cm', '2 cm'), ans: 'D', why: 'Một mặt = 24 : 6 = 4 (cm²); cạnh × cạnh = 4 nên cạnh = 2 cm.' },
    { sec: 'Thể tích', name: 'Câu 9', pts: 1, text: 'Hình lập phương cạnh 1 dm có thể tích là:', opts: o4('1 dm³', '3 dm³', '6 dm³', '1 dm²'), ans: 'A', why: 'V = 1 × 1 × 1 = 1 (dm³).' },
    { sec: 'Diện tích xung quanh', name: 'Câu 10', pts: 1, text: 'Hình lập phương cạnh 7 cm có diện tích xung quanh là:', opts: o4('196 cm²', '294 cm²', '49 cm²', '28 cm²'), ans: 'A', why: 'Sxq = 4 × (7 × 7) = 4 × 49 = 196 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 22 — ĐƠN VỊ ĐO DIỆN TÍCH, THỂ TÍCH ═══════════ */
{
  id: 8012, title: 'Đề 22 · Đơn vị đo diện tích và thể tích', time: 20,
  questions: [
    { sec: 'Diện tích', name: 'Câu 1', pts: 1, text: '1 ha = ? m²', opts: o4('10 000 m²', '1 000 m²', '100 m²', '100 000 m²'), ans: 'A', why: '1 ha = 10 000 m².' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: '2,5 km² = ? ha', opts: o4('25 ha', '250 ha', '2 500 ha', '2,5 ha'), ans: 'B', why: '1 km² = 100 ha nên 2,5 km² = 250 ha.' },
    { sec: 'Diện tích', name: 'Câu 3', pts: 1, text: '3 m² 5 dm² = ? dm²', opts: o4('305 dm²', '35 dm²', '350 dm²', '3,5 dm²'), ans: 'A', why: '3 m² = 300 dm²; 300 + 5 = 305 (dm²).' },
    { sec: 'Thể tích', name: 'Câu 4', pts: 1, text: '1 m³ = ? cm³', opts: o4('1 000 cm³', '10 000 cm³', '1 000 000 cm³', '100 cm³'), ans: 'C', why: '1 m³ = 1 000 dm³ = 1 000 000 cm³.' },
    { sec: 'Thể tích', name: 'Câu 5', pts: 1, text: '4,5 dm³ = ? cm³', opts: o4('4 500 cm³', '450 cm³', '45 cm³', '45 000 cm³'), ans: 'A', why: '1 dm³ = 1 000 cm³ nên 4,5 dm³ = 4 500 cm³.' },
    { sec: 'Diện tích', name: 'Câu 6', pts: 1, text: '7 000 m² = ? ha', opts: o4('7 ha', '70 ha', '0,07 ha', '0,7 ha'), ans: 'D', why: '1 ha = 10 000 m² nên 7 000 m² = 0,7 ha.' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: '2 m³ 50 dm³ = ? dm³', opts: o4('2 050 dm³', '250 dm³', '2 500 dm³', '2 005 dm³'), ans: 'A', why: '2 m³ = 2 000 dm³; 2 000 + 50 = 2 050 (dm³).' },
    { sec: 'Diện tích', name: 'Câu 8', pts: 1, text: '500 cm² = ? dm²', opts: o4('5 dm²', '50 dm²', '0,5 dm²', '500 dm²'), ans: 'A', why: '1 dm² = 100 cm² nên 500 cm² = 5 dm².' },
    { sec: 'Thể tích', name: 'Câu 9', pts: 1, text: '6 m³ = ? lít', opts: o4('600 lít', '6 000 lít', '60 lít', '6 lít'), ans: 'B', why: '1 m³ = 1 000 lít nên 6 m³ = 6 000 lít.' },
    { sec: 'Diện tích', name: 'Câu 10', pts: 1, text: '8 ha = ? m²', opts: o4('80 000 m²', '8 000 m²', '800 000 m²', '800 m²'), ans: 'A', why: '8 × 10 000 = 80 000 (m²).' },
  ],
},

/* ═══════════ ĐỀ 23 — VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN ═══════════ */
{
  id: 8013, title: 'Đề 23 · Vận tốc, quãng đường, thời gian', time: 20,
  questions: [
    { sec: 'Vận tốc', name: 'Câu 1', pts: 1, text: 'Đi 120 km trong 3 giờ, vận tốc là:', opts: o4('40 km/giờ', '360 km/giờ', '30 km/giờ', '123 km/giờ'), ans: 'A', why: 'v = 120 : 3 = 40 (km/giờ).' },
    { sec: 'Quãng đường', name: 'Câu 2', pts: 1, text: 'Vận tốc 50 km/giờ, đi 4 giờ, quãng đường là:', opts: o4('200 km', '54 km', '12,5 km', '150 km'), ans: 'A', why: 's = 50 × 4 = 200 (km).' },
    { sec: 'Thời gian', name: 'Câu 3', pts: 1, text: 'Quãng đường 90 km, vận tốc 45 km/giờ, thời gian là:', opts: o4('45 giờ', '2 giờ', '135 giờ', '0,5 giờ'), ans: 'B', why: 't = 90 : 45 = 2 (giờ).' },
    { sec: 'Vận tốc', name: 'Câu 4', pts: 1, text: 'Người đi bộ 12 km trong 3 giờ, vận tốc là:', opts: o4('4 km/giờ', '36 km/giờ', '9 km/giờ', '15 km/giờ'), ans: 'A', why: 'v = 12 : 3 = 4 (km/giờ).' },
    { sec: 'Quãng đường', name: 'Câu 5', pts: 1, text: 'Vận tốc 60 km/giờ, đi 2,5 giờ, quãng đường là:', opts: o4('120 km', '24 km', '150 km', '62,5 km'), ans: 'C', why: 's = 60 × 2,5 = 150 (km).' },
    { sec: 'Thời gian', name: 'Câu 6', pts: 1, text: 'Xe máy 40 km/giờ đi 100 km hết thời gian:', opts: o4('2,5 giờ', '2 giờ', '4 giờ', '0,4 giờ'), ans: 'A', why: 't = 100 : 40 = 2,5 (giờ).' },
    { sec: 'Đổi đơn vị', name: 'Câu 7', pts: 1, text: 'Vận tốc 15 m/giây bằng bao nhiêu km/giờ?', opts: o4('15 km/giờ', '150 km/giờ', '5,4 km/giờ', '54 km/giờ'), ans: 'D', why: '15 × 3,6 = 54 (km/giờ).' },
    { sec: 'Quãng đường', name: 'Câu 8', pts: 1, text: 'Máy bay 800 km/giờ bay 2 giờ, quãng đường là:', opts: o4('1 600 km', '400 km', '802 km', '1 000 km'), ans: 'A', why: 's = 800 × 2 = 1 600 (km).' },
    { sec: 'Vận tốc', name: 'Câu 9', pts: 1, text: 'Đi 210 km trong 3 giờ, vận tốc là:', opts: o4('70 km/giờ', '630 km/giờ', '63 km/giờ', '207 km/giờ'), ans: 'A', why: 'v = 210 : 3 = 70 (km/giờ).' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Xe khởi hành 7 giờ, đến nơi 9 giờ 30 phút, vận tốc 100 km/giờ. Quãng đường là:', opts: o4('200 km', '250 km', '225 km', '102,5 km'), ans: 'B', why: 'Thời gian = 2,5 giờ; s = 100 × 2,5 = 250 (km).' },
  ],
},

/* ═══════════ ĐỀ 24 — TOÁN CHUYỂN ĐỘNG ═══════════ */
{
  id: 8014, title: 'Đề 24 · Toán chuyển động', time: 20,
  questions: [
    { sec: 'Ngược chiều', name: 'Câu 1', pts: 1, text: 'Hai xe cách nhau 100 km đi ngược chiều, vận tốc 30 và 20 km/giờ. Gặp nhau sau:', opts: o4('2 giờ', '5 giờ', '2,5 giờ', '1 giờ'), ans: 'A', why: 'Thời gian = 100 : (30 + 20) = 100 : 50 = 2 (giờ).' },
    { sec: 'Cùng chiều', name: 'Câu 2', pts: 1, text: 'Hai xe cách nhau 20 km đi cùng chiều, xe nhanh 50, xe chậm 40 km/giờ. Đuổi kịp sau:', opts: o4('20 giờ', '2 giờ', '0,2 giờ', '1 giờ'), ans: 'B', why: 'Thời gian = 20 : (50 − 40) = 20 : 10 = 2 (giờ).' },
    { sec: 'Nhiều chặng', name: 'Câu 3', pts: 1, text: 'Ô tô đi 2 giờ đầu 50 km/giờ, 2 giờ sau 60 km/giờ. Tổng quãng đường là:', opts: o4('220 km', '110 km', '200 km', '440 km'), ans: 'A', why: '50 × 2 + 60 × 2 = 100 + 120 = 220 (km).' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Xe khởi hành 6 giờ, đến nơi 10 giờ, vận tốc 45 km/giờ. Quãng đường là:', opts: o4('45 km', '160 km', '180 km', '200 km'), ans: 'C', why: 'Thời gian = 4 giờ; s = 45 × 4 = 180 (km).' },
    { sec: 'Vận tốc', name: 'Câu 5', pts: 1, text: 'Đi 60 km trong 1,5 giờ, vận tốc là:', opts: o4('40 km/giờ', '90 km/giờ', '30 km/giờ', '61,5 km/giờ'), ans: 'A', why: 'v = 60 : 1,5 = 40 (km/giờ).' },
    { sec: 'Ngược chiều', name: 'Câu 6', pts: 1, text: 'Hai người cách nhau 6 km đi ngược chiều, tổng vận tốc 12 km/giờ. Gặp nhau sau:', opts: o4('2 giờ', '1 giờ', '15 phút', '30 phút'), ans: 'D', why: 'Thời gian = 6 : 12 = 0,5 giờ = 30 phút.' },
    { sec: 'Quãng đường', name: 'Câu 7', pts: 1, text: 'Đi 30 phút với vận tốc 40 km/giờ, quãng đường là:', opts: o4('20 km', '80 km', '40 km', '20,5 km'), ans: 'A', why: '30 phút = 0,5 giờ; s = 40 × 0,5 = 20 (km).' },
    { sec: 'Vận tốc TB', name: 'Câu 8', pts: 1, text: 'Đi 150 km hết tất cả 3 giờ. Vận tốc trung bình là:', opts: o4('50 km/giờ', '75 km/giờ', '150 km/giờ', '30 km/giờ'), ans: 'A', why: 'v = 150 : 3 = 50 (km/giờ).' },
    { sec: 'Thời gian', name: 'Câu 9', pts: 1, text: 'Xe đạp 12 km/giờ đi 18 km hết thời gian:', opts: o4('1 giờ', '1 giờ 30 phút', '2 giờ', '1 giờ 15 phút'), ans: 'B', why: 't = 18 : 12 = 1,5 giờ = 1 giờ 30 phút.' },
    { sec: 'Ngược chiều', name: 'Câu 10', pts: 1, text: 'Hai thành phố cách 180 km, hai xe khởi hành cùng lúc đi ngược chiều 40 và 50 km/giờ. Gặp nhau sau:', opts: o4('2 giờ', '1,8 giờ', '4 giờ', '3 giờ'), ans: 'A', why: 'Thời gian = 180 : (40 + 50) = 180 : 90 = 2 (giờ).' },
  ],
},

/* ═══════════ ĐỀ 25 — TRUNG BÌNH CỘNG ═══════════ */
{
  id: 8015, title: 'Đề 25 · Trung bình cộng', time: 20,
  questions: [
    { sec: 'TBC', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 4 và 6 là:', opts: o4('5', '10', '2', '24'), ans: 'A', why: '(4 + 6) : 2 = 10 : 2 = 5.' },
    { sec: 'TBC', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 10, 20 và 30 là:', opts: o4('60', '20', '15', '10'), ans: 'B', why: '(10 + 20 + 30) : 3 = 60 : 3 = 20.' },
    { sec: 'TBC', name: 'Câu 3', pts: 1, text: 'Trung bình cộng của 5, 7 và 9 là:', opts: o4('7', '21', '6', '8'), ans: 'A', why: '(5 + 7 + 9) : 3 = 21 : 3 = 7.' },
    { sec: 'Lời văn', name: 'Câu 4', pts: 1, text: 'Ba bạn có 12, 15 và 18 viên bi. Trung bình mỗi bạn có:', opts: o4('45', '12', '15', '18'), ans: 'C', why: '(12 + 15 + 18) : 3 = 45 : 3 = 15 (viên).' },
    { sec: 'TBC', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của 2,5 và 3,5 là:', opts: o4('3', '6', '2,5', '1'), ans: 'A', why: '(2,5 + 3,5) : 2 = 6 : 2 = 3.' },
    { sec: 'Tìm số', name: 'Câu 6', pts: 1, text: 'Hai số có trung bình cộng là 10, một số là 8. Số kia là:', opts: o4('12', '2', '18', '20'), ans: 'A', why: 'Tổng = 10 × 2 = 20; số kia = 20 − 8 = 12.' },
    { sec: 'TBC', name: 'Câu 7', pts: 1, text: 'Trung bình cộng của 100 và 200 là:', opts: o4('300', '100', '50', '150'), ans: 'D', why: '(100 + 200) : 2 = 300 : 2 = 150.' },
    { sec: 'Lời văn', name: 'Câu 8', pts: 1, text: 'Điểm bốn môn là 8, 9, 7 và 8. Điểm trung bình là:', opts: o4('8', '32', '7', '9'), ans: 'A', why: '(8 + 9 + 7 + 8) : 4 = 32 : 4 = 8.' },
    { sec: 'Tìm tổng', name: 'Câu 9', pts: 1, text: 'Trung bình cộng của ba số là 6. Tổng ba số là:', opts: o4('18', '6', '9', '2'), ans: 'A', why: 'Tổng = 6 × 3 = 18.' },
    { sec: 'Lời văn', name: 'Câu 10', pts: 1, text: 'Ô tô giờ đầu đi 40 km, giờ sau đi 50 km. Trung bình mỗi giờ đi:', opts: o4('90 km', '45 km', '40 km', '50 km'), ans: 'B', why: '(40 + 50) : 2 = 90 : 2 = 45 (km).' },
  ],
},

/* ═══════════ ĐỀ 26 — BÀI TOÁN CÓ LỜI VĂN ═══════════ */
{
  id: 8016, title: 'Đề 26 · Bài toán có lời văn', time: 20,
  questions: [
    { sec: 'Mua bán', name: 'Câu 1', pts: 1, text: 'Mua 3 kg táo giá 25 000 đồng một ki-lô-gam. Số tiền phải trả là:', opts: o4('75 000 đồng', '28 000 đồng', '22 000 đồng', '75 kg'), ans: 'A', why: '3 × 25 000 = 75 000 (đồng).' },
    { sec: 'Mua bán', name: 'Câu 2', pts: 1, text: '5 quyển vở giá 60 000 đồng. Một quyển giá:', opts: o4('12 000 đồng', '65 000 đồng', '300 000 đồng', '55 000 đồng'), ans: 'A', why: '60 000 : 5 = 12 000 (đồng).' },
    { sec: 'Diện tích', name: 'Câu 3', pts: 1, text: 'Mảnh đất chữ nhật dài 20 m, rộng 15 m. Diện tích là:', opts: o4('35 m²', '300 m²', '70 m²', '300 m'), ans: 'B', why: 'S = 20 × 15 = 300 (m²).' },
    { sec: 'Chu vi', name: 'Câu 4', pts: 1, text: 'Mảnh đất chữ nhật dài 20 m, rộng 15 m. Chu vi là:', opts: o4('70 m', '35 m', '300 m', '70 m²'), ans: 'A', why: 'P = (20 + 15) × 2 = 35 × 2 = 70 (m).' },
    { sec: 'Chia đều', name: 'Câu 5', pts: 1, text: 'Có 240 kg gạo chia đều vào 8 bao. Mỗi bao có:', opts: o4('232 kg', '248 kg', '30 kg', '32 kg'), ans: 'C', why: '240 : 8 = 30 (kg).' },
    { sec: 'Vòi nước', name: 'Câu 6', pts: 1, text: 'Một giờ vòi chảy 200 lít nước. Ba giờ chảy được:', opts: o4('600 lít', '203 lít', '66 lít', '300 lít'), ans: 'A', why: '200 × 3 = 600 (lít).' },
    { sec: 'Bớt đi', name: 'Câu 7', pts: 1, text: 'Đàn gà 50 con, có 30 con gà mái. Số gà trống là:', opts: o4('80 con', '30 con', '25 con', '20 con'), ans: 'D', why: '50 − 30 = 20 (con).' },
    { sec: 'Đổi đơn vị', name: 'Câu 8', pts: 1, text: 'Thu 5 tạ thóc, đã bán 300 kg. Số thóc còn lại là:', opts: o4('200 kg', '800 kg', '2 kg', '250 kg'), ans: 'A', why: '5 tạ = 500 kg; 500 − 300 = 200 (kg).' },
    { sec: 'Bù đủ', name: 'Câu 9', pts: 1, text: 'Bể chứa 1 000 lít đã có 350 lít. Cần thêm bao nhiêu lít cho đầy?', opts: o4('650 lít', '1 350 lít', '700 lít', '450 lít'), ans: 'A', why: '1 000 − 350 = 650 (lít).' },
    { sec: 'Nhân', name: 'Câu 10', pts: 1, text: 'Mỗi hộp có 12 cái bánh. Mua 5 hộp có tất cả:', opts: o4('17 cái', '60 cái', '7 cái', '50 cái'), ans: 'B', why: '12 × 5 = 60 (cái).' },
  ],
},

/* ═══════════ ĐỀ 27 — ÔN TẬP TỔNG HỢP (1) ═══════════ */
{
  id: 8017, title: 'Đề 27 · Ôn tập tổng hợp (1)', time: 20,
  questions: [
    { sec: 'Số thập phân', name: 'Câu 1', pts: 1, text: '4,5 + 3,5 = ?', opts: o4('8', '7,10', '8,10', '7'), ans: 'A', why: '4,5 + 3,5 = 8,0 = 8.' },
    { sec: 'Số thập phân', name: 'Câu 2', pts: 1, text: '6,4 : 2 = ?', opts: o4('3,2', '3,4', '2,3', '4,2'), ans: 'A', why: '6,4 : 2 = 3,2.' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: '25% của 80 là bao nhiêu?', opts: o4('25', '20', '16', '40'), ans: 'B', why: '80 × 25 : 100 = 20.' },
    { sec: 'Diện tích', name: 'Câu 4', pts: 1, text: 'Tam giác đáy 10 cm, chiều cao 4 cm có diện tích:', opts: o4('20 cm²', '40 cm²', '14 cm²', '20 cm'), ans: 'A', why: 'S = (10 × 4) : 2 = 20 (cm²).' },
    { sec: 'Thể tích', name: 'Câu 5', pts: 1, text: 'Hình lập phương cạnh 2 cm có thể tích:', opts: o4('6 cm³', '4 cm³', '8 cm³', '12 cm³'), ans: 'C', why: 'V = 2 × 2 × 2 = 8 (cm³).' },
    { sec: 'Đơn vị', name: 'Câu 6', pts: 1, text: '1 km² = ? ha', opts: o4('100 ha', '10 ha', '1 000 ha', '1 ha'), ans: 'A', why: '1 km² = 100 ha.' },
    { sec: 'Chuyển động', name: 'Câu 7', pts: 1, text: 'Đi 90 km trong 2 giờ, vận tốc là:', opts: o4('45 km/giờ', '180 km/giờ', '92 km/giờ', '30 km/giờ'), ans: 'A', why: 'v = 90 : 2 = 45 (km/giờ).' },
    { sec: 'Trung bình cộng', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của 8 và 12 là:', opts: o4('20', '4', '96', '10'), ans: 'D', why: '(8 + 12) : 2 = 20 : 2 = 10.' },
    { sec: 'Hình tròn', name: 'Câu 9', pts: 1, text: 'Hình tròn bán kính 3 cm có diện tích:', opts: o4('28,26 cm²', '18,84 cm²', '9,42 cm²', '28,26 cm'), ans: 'A', why: 'S = 3 × 3 × 3,14 = 28,26 (cm²).' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'So sánh: 3,6 ... 3,60', opts: o4('>', '=', '<', 'Không so được'), ans: 'B', why: '3,6 = 3,60 nên hai số bằng nhau.' },
  ],
},

/* ═══════════ ĐỀ 28 — ÔN TẬP TỔNG HỢP (2) ═══════════ */
{
  id: 8018, title: 'Đề 28 · Ôn tập tổng hợp (2)', time: 20,
  questions: [
    { sec: 'Số thập phân', name: 'Câu 1', pts: 1, text: '12,5 × 4 = ?', opts: o4('50', '48', '52', '5'), ans: 'A', why: '12,5 × 4 = 50.' },
    { sec: 'Số thập phân', name: 'Câu 2', pts: 1, text: '7,2 : 8 = ?', opts: o4('9', '0,9', '0,09', '1,2'), ans: 'B', why: '7,2 : 8 = 0,9.' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: '20% của 350 là bao nhiêu?', opts: o4('70', '35', '20', '140'), ans: 'A', why: '350 × 20 : 100 = 70.' },
    { sec: 'Hình thang', name: 'Câu 4', pts: 1, text: 'Hình thang hai đáy 8 cm và 6 cm, chiều cao 5 cm có diện tích:', opts: o4('70 cm²', '30 cm²', '35 cm²', '40 cm²'), ans: 'C', why: 'S = (8 + 6) × 5 : 2 = 70 : 2 = 35 (cm²).' },
    { sec: 'Thể tích', name: 'Câu 5', pts: 1, text: 'Hình hộp chữ nhật 5 × 4 × 2 (cm) có thể tích:', opts: o4('40 cm³', '11 cm³', '20 cm³', '80 cm³'), ans: 'A', why: 'V = 5 × 4 × 2 = 40 (cm³).' },
    { sec: 'Đơn vị', name: 'Câu 6', pts: 1, text: '3 dm³ = ? cm³', opts: o4('3 000 cm³', '300 cm³', '30 cm³', '30 000 cm³'), ans: 'A', why: '1 dm³ = 1 000 cm³ nên 3 dm³ = 3 000 cm³.' },
    { sec: 'Chuyển động', name: 'Câu 7', pts: 1, text: 'Quãng đường 60 km, vận tốc 40 km/giờ, thời gian là:', opts: o4('2 giờ', '1 giờ', '2,5 giờ', '1,5 giờ'), ans: 'D', why: 't = 60 : 40 = 1,5 (giờ).' },
    { sec: 'Phân số', name: 'Câu 8', pts: 1, text: 'Rút gọn phân số 8/12 được:', opts: o4('2/3', '4/6', '8/12', '1/2'), ans: 'A', why: '8/12 = (8:4)/(12:4) = 2/3.' },
    { sec: 'Trung bình cộng', name: 'Câu 9', pts: 1, text: 'Trung bình cộng của 15, 25 và 20 là:', opts: o4('60', '20', '18', '30'), ans: 'B', why: '(15 + 25 + 20) : 3 = 60 : 3 = 20.' },
    { sec: 'Số thập phân', name: 'Câu 10', pts: 1, text: '5,6 − 2,8 = ?', opts: o4('2,8', '3,2', '2,2', '8,4'), ans: 'A', why: '5,6 − 2,8 = 2,8.' },
  ],
},

/* ═══════════ ĐỀ 29 — ÔN TẬP TỔNG HỢP (3) — HSG ═══════════ */
{
  id: 8019, title: 'Đề 29 · Ôn tập tổng hợp (3) — nâng cao', time: 20,
  questions: [
    { sec: 'Số thập phân', name: 'Câu 1', pts: 1, text: '2,5 × 2,4 = ?', opts: o4('6', '6,25', '5', '4,9'), ans: 'A', why: '2,5 × 2,4 = 6,00 = 6.' },
    { sec: 'Số thập phân', name: 'Câu 2', pts: 1, text: '15 : 0,5 = ?', opts: o4('7,5', '30', '1,5', '3'), ans: 'B', why: 'Chia cho 0,5 là gấp đôi: 15 : 0,5 = 30.' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: 'Một số sau khi tăng thêm 50% thì được 90. Số ban đầu là:', opts: o4('60', '45', '135', '40'), ans: 'A', why: '90 ứng với 150%, số ban đầu = 90 : 150 × 100 = 60.' },
    { sec: 'Diện tích', name: 'Câu 4', pts: 1, text: 'Hình vuông cạnh 5 cm có diện tích:', opts: o4('20 cm²', '10 cm²', '25 cm²', '50 cm²'), ans: 'C', why: 'S = 5 × 5 = 25 (cm²).' },
    { sec: 'Thể tích', name: 'Câu 5', pts: 1, text: 'Hình lập phương cạnh 4 cm có thể tích:', opts: o4('64 cm³', '16 cm³', '48 cm³', '12 cm³'), ans: 'A', why: 'V = 4 × 4 × 4 = 64 (cm³).' },
    { sec: 'Chuyển động', name: 'Câu 6', pts: 1, text: 'Hai xe cách nhau 150 km đi ngược chiều, tổng vận tốc 75 km/giờ. Gặp nhau sau:', opts: o4('75 giờ', '1,5 giờ', '3 giờ', '2 giờ'), ans: 'D', why: 'Thời gian = 150 : 75 = 2 (giờ).' },
    { sec: 'Phần trăm', name: 'Câu 7', pts: 1, text: 'Biết 40% của một số là 60. Số đó là:', opts: o4('150', '24', '100', '200'), ans: 'A', why: '60 : 40 × 100 = 150.' },
    { sec: 'Hình tròn', name: 'Câu 8', pts: 1, text: 'Hình tròn bán kính 5 cm có diện tích:', opts: o4('31,4 cm²', '78,5 cm²', '25 cm²', '78,5 cm'), ans: 'B', why: 'S = 5 × 5 × 3,14 = 78,5 (cm²).' },
    { sec: 'Trung bình cộng', name: 'Câu 9', pts: 1, text: 'Hai số có trung bình cộng là 45, một số là 50. Số kia là:', opts: o4('40', '95', '5', '90'), ans: 'A', why: 'Tổng = 45 × 2 = 90; số kia = 90 − 50 = 40.' },
    { sec: 'Phân số', name: 'Câu 10', pts: 1, text: '3/5 của 150 là bao nhiêu?', opts: o4('60', '30', '90', '250'), ans: 'C', why: '150 : 5 × 3 = 30 × 3 = 90.' },
  ],
},

/* ═══════════ ĐỀ 30 — ÔN TẬP CUỐI NĂM — HSG ═══════════ */
{
  id: 8020, title: 'Đề 30 · Ôn tập cuối năm — nâng cao', time: 20,
  questions: [
    { sec: 'Số thập phân', name: 'Câu 1', pts: 1, text: '0,25 × 40 = ?', opts: o4('10', '100', '1', '16'), ans: 'A', why: '0,25 × 40 = 10.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: '2,5 × 4 × 10 = ?', opts: o4('10', '100', '1 000', '25'), ans: 'B', why: '2,5 × 4 = 10; 10 × 10 = 100.' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: '60% của 250 là bao nhiêu?', opts: o4('150', '60', '100', '200'), ans: 'A', why: '250 × 60 : 100 = 150.' },
    { sec: 'Thể tích', name: 'Câu 4', pts: 1, text: 'Bể hình hộp chữ nhật dài 3 m, rộng 2 m, cao 1,5 m có thể tích:', opts: o4('6 m³', '6,5 m³', '9 m³', '18 m³'), ans: 'C', why: 'V = 3 × 2 × 1,5 = 9 (m³).' },
    { sec: 'Đổi đơn vị', name: 'Câu 5', pts: 1, text: 'Bể trên chứa đầy nước thì được bao nhiêu lít?', opts: o4('9 000 lít', '900 lít', '90 lít', '9 lít'), ans: 'A', why: '9 m³ = 9 000 dm³ = 9 000 lít.' },
    { sec: 'Diện tích', name: 'Câu 6', pts: 1, text: 'Tam giác diện tích 24 cm², đáy 8 cm. Chiều cao là:', opts: o4('3 cm', '12 cm', '16 cm', '6 cm'), ans: 'D', why: 'Chiều cao = 24 × 2 : 8 = 6 (cm).' },
    { sec: 'Chuyển động', name: 'Câu 7', pts: 1, text: 'Xe đi từ A lúc 7 giờ, đến B lúc 11 giờ, quãng đường 200 km. Vận tốc là:', opts: o4('50 km/giờ', '200 km/giờ', '40 km/giờ', '800 km/giờ'), ans: 'A', why: 'Thời gian = 4 giờ; v = 200 : 4 = 50 (km/giờ).' },
    { sec: 'Sắp thứ tự', name: 'Câu 8', pts: 1, text: 'Sắp xếp giảm dần: 8,1 ; 8,01 ; 8,11', opts: o4('8,11 > 8,1 > 8,01', '8,01 > 8,1 > 8,11', '8,1 > 8,11 > 8,01', '8,11 > 8,01 > 8,1'), ans: 'A', why: '8,11 > 8,10 > 8,01 nên 8,11 > 8,1 > 8,01.' },
    { sec: 'Lãi suất', name: 'Câu 9', pts: 1, text: 'Lãi suất 0,5% một tháng, gửi 2 000 000 đồng. Lãi một tháng là:', opts: o4('100 000 đồng', '10 000 đồng', '1 000 đồng', '20 000 đồng'), ans: 'B', why: '2 000 000 × 0,5 : 100 = 10 000 (đồng).' },
    { sec: 'Hình thang', name: 'Câu 10', pts: 1, text: 'Hình thang đáy lớn 12 cm, đáy bé 8 cm, chiều cao 6 cm có diện tích:', opts: o4('60 cm²', '120 cm²', '30 cm²', '40 cm²'), ans: 'A', why: 'S = (12 + 8) × 6 : 2 = 120 : 2 = 60 (cm²).' },
  ],
},

];

SUBJECTS.push({
  id: 'toan5', name: 'Toán', short: 'Toán 5', icon: '🔢', grade: 5,
  exams: TOAN5_EXAMS, ready: true,
  heroTitle: 'Toán lớp 5 — số thập phân, tỉ số phần trăm, hình học và chuyển động đều',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
