// TOÁN NÂNG CAO LỚP 5 — BỒI DƯỠNG HSG · 10 đề × 10 câu = 100 câu.
// Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề. Viết tay, sửa trực tiếp được.
//
// Phong cách MathX / HSG (biên soạn lại, không mạo nhận): khó hơn SGK nhưng vẫn
// đúng phạm vi lớp 5. Các dạng khai thác:
//   • Tính nhanh phân số & số thập phân, dãy số và tổng dãy số.
//   • Toán chuyển động: ngược chiều · cùng chiều · dòng nước.
//   • Toán công việc / vòi nước (tỉ lệ nghịch, phần công việc mỗi giờ).
//   • Tỉ số phần trăm nâng cao: lãi – vốn, tăng – giảm liên tiếp, lãi tiết kiệm.
//   • Hình học: diện tích tam giác – hình thang – hình tròn; thể tích hình hộp,
//     hình lập phương; cắt – ghép, tỉ lệ diện tích.
//   • Trung bình cộng có điều kiện, số học (chia hết, chữ số tận cùng), suy luận.
//
// o4() và SUBJECTS lấy từ data.js (nạp trước). Đáp án đã kiểm tra thủ công 100%.

const NANGCAO5_EXAMS = [

/* ═══════════ ĐỀ 1 — TÍNH NHANH PHÂN SỐ & SỐ THẬP PHÂN ═══════════ */
{
  id: 9101, title: 'Đề 1 · Tính nhanh phân số & số thập phân', time: 20,
  questions: [
    { sec: 'Tính nhanh', name: 'Câu 1', pts: 1, text: 'Tính nhanh: <b>1/2 + 1/4 + 1/8 + 1/16</b>', opts: o4('15/16', '1', '7/8', '16/15'), ans: 'A', why: 'Quy về mẫu số 16: 8/16 + 4/16 + 2/16 + 1/16 = 15/16.' },
    { sec: 'Tính nhanh', name: 'Câu 2', pts: 1, text: 'Tính nhanh: <b>2,5 × 7,9 + 2,5 × 2,1</b>', opts: o4('20', '27', '25', '30'), ans: 'C', why: 'Đặt 2,5 làm thừa số chung: 2,5 × (7,9 + 2,1) = 2,5 × 10 = 25.' },
    { sec: 'Dãy phân số', name: 'Câu 3', pts: 1, text: 'Tính: <b>1/(1×2) + 1/(2×3) + 1/(3×4) + 1/(4×5)</b>', opts: o4('3/4', '4/5', '1/5', '5/4'), ans: 'B', why: 'Mỗi số hạng tách thành hiệu: tổng = 1 − 1/5 = 4/5.' },
    { sec: 'Tính nhanh', name: 'Câu 4', pts: 1, text: 'Tính nhanh: <b>3,6 × 4,5 + 3,6 × 5,5</b>', opts: o4('32,4', '30', '40', '36'), ans: 'D', why: '3,6 × (4,5 + 5,5) = 3,6 × 10 = 36.' },
    { sec: 'Chia số thập phân', name: 'Câu 5', pts: 1, text: 'Tính: <b>7,2 : 0,8</b>', opts: o4('9', '8', '0,9', '90'), ans: 'A', why: 'Nhân cả hai số với 10: 72 : 8 = 9.' },
    { sec: 'Tính nhanh', name: 'Câu 6', pts: 1, text: 'Tính: <b>1 − 1/2 − 1/4 − 1/8 − 1/16</b>', opts: o4('1/8', '0', '1/16', '1/32'), ans: 'C', why: 'Trừ dần: 1 − 1/2 = 1/2; − 1/4 = 1/4; − 1/8 = 1/8; − 1/16 = 1/16.' },
    { sec: 'Tính nhanh', name: 'Câu 7', pts: 1, text: 'Tính nhanh: <b>9,8 × 99 + 9,8</b>', opts: o4('882', '980', '970,2', '990'), ans: 'B', why: '9,8 × 99 + 9,8 × 1 = 9,8 × (99 + 1) = 9,8 × 100 = 980.' },
    { sec: 'Trung bình cộng', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của hai phân số <b>1/2</b> và <b>1/3</b> là:', opts: o4('5/12', '5/6', '2/5', '1/2'), ans: 'A', why: '(1/2 + 1/3) : 2 = 5/6 : 2 = 5/12.' },
    { sec: 'Số thập phân', name: 'Câu 9', pts: 1, text: 'Tính: <b>0,5 × 0,5 × 0,5</b>', opts: o4('0,15', '1,5', '0,25', '0,125'), ans: 'D', why: '0,5 × 0,5 = 0,25; 0,25 × 0,5 = 0,125.' },
    { sec: 'Dãy phân số', name: 'Câu 10', pts: 1, text: 'Tính: <b>2/(1×3) + 2/(3×5) + 2/(5×7) + 2/(7×9)</b>', opts: o4('1/9', '7/9', '8/9', '9/8'), ans: 'C', why: 'Mỗi số hạng = 1/(số trước) − 1/(số sau): tổng = 1 − 1/9 = 8/9.' },
  ],
},

/* ═══════════ ĐỀ 2 — DÃY SỐ VÀ TỔNG DÃY SỐ ═══════════ */
{
  id: 9102, title: 'Đề 2 · Dãy số và tổng dãy số', time: 20,
  questions: [
    { sec: 'Tổng dãy', name: 'Câu 1', pts: 1, text: 'Tính tổng: <b>1 + 2 + 3 + ... + 100</b>', opts: o4('5000', '5050', '5100', '10100'), ans: 'B', why: 'Tổng = (1 + 100) × 100 : 2 = 101 × 50 = 5050.' },
    { sec: 'Tổng dãy', name: 'Câu 2', pts: 1, text: 'Tính tổng các số lẻ: <b>1 + 3 + 5 + ... + 99</b>', opts: o4('2500', '2450', '2550', '5000'), ans: 'A', why: 'Có 50 số. Tổng = (1 + 99) × 50 : 2 = 100 × 25 = 2500.' },
    { sec: 'Đếm số hạng', name: 'Câu 3', pts: 1, text: 'Dãy <b>2 ; 4 ; 6 ; ... ; 100</b> có bao nhiêu số hạng?', opts: o4('49', '51', '100', '50'), ans: 'D', why: 'Số số hạng = (100 − 2) : 2 + 1 = 49 + 1 = 50.' },
    { sec: 'Số hạng thứ n', name: 'Câu 4', pts: 1, text: 'Số hạng thứ <b>20</b> của dãy <b>3 ; 7 ; 11 ; 15 ; ...</b> (công sai 4) là:', opts: o4('79', '83', '75', '80'), ans: 'A', why: 'Số hạng thứ 20 = 3 + (20 − 1) × 4 = 3 + 76 = 79.' },
    { sec: 'Tổng dãy', name: 'Câu 5', pts: 1, text: 'Tính tổng: <b>2 + 4 + 6 + ... + 50</b>', opts: o4('625', '675', '650', '600'), ans: 'C', why: 'Có 25 số. Tổng = (2 + 50) × 25 : 2 = 52 × 25 : 2 = 650.' },
    { sec: 'Quy luật', name: 'Câu 6', pts: 1, text: 'Số thứ 7 của dãy <b>1 ; 4 ; 9 ; 16 ; 25 ; ...</b> (các số chính phương) là:', opts: o4('36', '49', '64', '42'), ans: 'B', why: 'Dãy là bình phương: 1², 2², ... Số thứ 7 = 7 × 7 = 49.' },
    { sec: 'Đếm số hạng', name: 'Câu 7', pts: 1, text: 'Dãy <b>5 ; 10 ; 15 ; ... ; 205</b> có bao nhiêu số hạng?', opts: o4('41', '40', '42', '205'), ans: 'A', why: 'Số số hạng = (205 − 5) : 5 + 1 = 40 + 1 = 41.' },
    { sec: 'Tìm số hạng', name: 'Câu 8', pts: 1, text: 'Biết <b>1 + 2 + 3 + ... + n = 210</b>. Tìm n.', opts: o4('21', '19', '22', '20'), ans: 'D', why: 'n × (n + 1) = 420 = 20 × 21 nên n = 20.' },
    { sec: 'Quy luật', name: 'Câu 9', pts: 1, text: 'Tìm số tiếp theo của dãy: <b>1 ; 2 ; 4 ; 7 ; 11 ; 16 ; ...</b>', opts: o4('22', '21', '23', '20'), ans: 'A', why: 'Khoảng cách tăng dần 1, 2, 3, 4, 5, 6. Số tiếp = 16 + 6 = 22.' },
    { sec: 'Tổng dãy', name: 'Câu 10', pts: 1, text: 'Tính tổng 100 số lẻ đầu tiên: <b>1 + 3 + 5 + ... + 199</b>', opts: o4('9900', '10100', '10000', '20000'), ans: 'C', why: 'Tổng n số lẻ đầu tiên = n × n = 100 × 100 = 10000.' },
  ],
},

/* ═══════════ ĐỀ 3 — TOÁN CHUYỂN ĐỘNG (NGƯỢC / CÙNG CHIỀU) ═══════════ */
{
  id: 9103, title: 'Đề 3 · Chuyển động ngược chiều & cùng chiều', time: 20,
  questions: [
    { sec: 'Ngược chiều', name: 'Câu 1', pts: 1, text: 'Hai xe khởi hành cùng lúc, đi ngược chiều từ hai điểm cách nhau <b>180 km</b>, vận tốc <b>50 km/h</b> và <b>40 km/h</b>. Sau bao lâu hai xe gặp nhau?', opts: o4('2 giờ', '2,5 giờ', '3 giờ', '1,8 giờ'), ans: 'A', why: 'Thời gian gặp nhau = 180 : (50 + 40) = 180 : 90 = 2 (giờ).' },
    { sec: 'Thời gian', name: 'Câu 2', pts: 1, text: 'Quãng đường dài <b>150 km</b>, ô tô đi với vận tốc <b>60 km/h</b>. Thời gian đi hết quãng đường?', opts: o4('2 giờ', '2,5 giờ', '3 giờ', '2,25 giờ'), ans: 'B', why: 'Thời gian = 150 : 60 = 2,5 (giờ).' },
    { sec: 'Quãng đường', name: 'Câu 3', pts: 1, text: 'Xe máy đi trong <b>3 giờ</b> với vận tốc <b>40 km/h</b>. Quãng đường đi được?', opts: o4('120 km', '130 km', '43 km', '12 km'), ans: 'A', why: 'Quãng đường = 40 × 3 = 120 (km).' },
    { sec: 'Cùng chiều', name: 'Câu 4', pts: 1, text: 'Xe A ở sau xe B <b>20 km</b>, đuổi theo cùng chiều. Vận tốc xe A <b>55 km/h</b>, xe B <b>45 km/h</b>. Sau bao lâu xe A đuổi kịp xe B?', opts: o4('1 giờ', '4 giờ', '0,5 giờ', '2 giờ'), ans: 'D', why: 'Thời gian đuổi kịp = 20 : (55 − 45) = 20 : 10 = 2 (giờ).' },
    { sec: 'Quãng đường', name: 'Câu 5', pts: 1, text: 'Ô tô đi từ A lúc <b>7 giờ</b>, đến B lúc <b>10 giờ 30 phút</b> với vận tốc <b>48 km/h</b>. Quãng đường AB dài?', opts: o4('168 km', '160 km', '150 km', '165 km'), ans: 'A', why: 'Thời gian đi = 3 giờ 30 phút = 3,5 giờ. Quãng đường = 48 × 3,5 = 168 (km).' },
    { sec: 'Thời gian', name: 'Câu 6', pts: 1, text: 'Người đi xe đạp với vận tốc <b>12 km/h</b>. Đi quãng đường <b>18 km</b> hết bao nhiêu phút?', opts: o4('60 phút', '120 phút', '90 phút', '75 phút'), ans: 'C', why: 'Thời gian = 18 : 12 = 1,5 giờ = 90 (phút).' },
    { sec: 'Ngược chiều', name: 'Câu 7', pts: 1, text: 'Hai xe đi ngược chiều gặp nhau sau <b>3 giờ</b>, tổng vận tốc hai xe là <b>90 km/h</b>. Khoảng cách ban đầu giữa hai xe?', opts: o4('90 km', '270 km', '30 km', '180 km'), ans: 'B', why: 'Khoảng cách = 90 × 3 = 270 (km).' },
    { sec: 'Vận tốc trung bình', name: 'Câu 8', pts: 1, text: 'Một người đi 60 km với vận tốc 30 km/h, rồi về 60 km với vận tốc 60 km/h. Vận tốc trung bình cả đi lẫn về?', opts: o4('40 km/h', '45 km/h', '50 km/h', '35 km/h'), ans: 'A', why: 'Thời gian đi = 2 giờ, về = 1 giờ. Vận tốc TB = (60 + 60) : (2 + 1) = 120 : 3 = 40 (km/h).' },
    { sec: 'Tàu qua cầu', name: 'Câu 9', pts: 1, text: 'Tàu hỏa dài <b>200 m</b> chạy qua cây cầu dài <b>800 m</b> với vận tốc <b>20 m/giây</b>. Thời gian tàu qua hết cầu?', opts: o4('40 giây', '45 giây', '60 giây', '50 giây'), ans: 'D', why: 'Quãng đường tàu đi = 800 + 200 = 1000 (m). Thời gian = 1000 : 20 = 50 (giây).' },
    { sec: 'Đến sớm', name: 'Câu 10', pts: 1, text: 'Ô tô dự định đi hết quãng đường trong <b>4 giờ</b> với vận tốc <b>45 km/h</b>. Muốn đến sớm 1 giờ thì phải đi với vận tốc?', opts: o4('60 km/h', '55 km/h', '50 km/h', '65 km/h'), ans: 'A', why: 'Quãng đường = 45 × 4 = 180 km. Đi trong 3 giờ: 180 : 3 = 60 (km/h).' },
  ],
},

/* ═══════════ ĐỀ 4 — TOÁN DÒNG NƯỚC ═══════════ */
{
  id: 9104, title: 'Đề 4 · Chuyển động trên dòng nước', time: 20,
  questions: [
    { sec: 'Xuôi dòng', name: 'Câu 1', pts: 1, text: 'Ca nô có vận tốc thực (nước lặng) <b>15 km/h</b>, vận tốc dòng nước <b>3 km/h</b>. Vận tốc xuôi dòng là:', opts: o4('18 km/h', '12 km/h', '45 km/h', '5 km/h'), ans: 'A', why: 'Vận tốc xuôi = vận tốc thực + vận tốc dòng = 15 + 3 = 18 (km/h).' },
    { sec: 'Ngược dòng', name: 'Câu 2', pts: 1, text: 'Vẫn ca nô ở Câu 1 (thực 15 km/h, dòng 3 km/h). Vận tốc ngược dòng là:', opts: o4('12 km/h', '18 km/h', '15 km/h', '3 km/h'), ans: 'A', why: 'Vận tốc ngược = vận tốc thực − vận tốc dòng = 15 − 3 = 12 (km/h).' },
    { sec: 'Vận tốc dòng', name: 'Câu 3', pts: 1, text: 'Vận tốc xuôi dòng <b>24 km/h</b>, ngược dòng <b>16 km/h</b>. Vận tốc dòng nước là:', opts: o4('8 km/h', '4 km/h', '20 km/h', '40 km/h'), ans: 'B', why: 'Vận tốc dòng = (xuôi − ngược) : 2 = (24 − 16) : 2 = 4 (km/h).' },
    { sec: 'Vận tốc thực', name: 'Câu 4', pts: 1, text: 'Vẫn số liệu Câu 3 (xuôi 24 km/h, ngược 16 km/h). Vận tốc thực của ca nô là:', opts: o4('20 km/h', '4 km/h', '40 km/h', '8 km/h'), ans: 'A', why: 'Vận tốc thực = (xuôi + ngược) : 2 = (24 + 16) : 2 = 20 (km/h).' },
    { sec: 'Thời gian xuôi', name: 'Câu 5', pts: 1, text: 'Ca nô xuôi dòng quãng đường <b>36 km</b> với vận tốc xuôi <b>18 km/h</b>. Thời gian đi?', opts: o4('3 giờ', '1,5 giờ', '2 giờ', '2,5 giờ'), ans: 'C', why: 'Thời gian = 36 : 18 = 2 (giờ).' },
    { sec: 'Thời gian xuôi', name: 'Câu 6', pts: 1, text: 'Ca nô có vận tốc thực <b>12 km/h</b>, dòng nước <b>2 km/h</b>. Đi xuôi dòng <b>42 km</b> hết bao lâu?', opts: o4('3 giờ', '3,5 giờ', '2,5 giờ', '4 giờ'), ans: 'A', why: 'Vận tốc xuôi = 12 + 2 = 14 km/h. Thời gian = 42 : 14 = 3 (giờ).' },
    { sec: 'Vật trôi', name: 'Câu 7', pts: 1, text: 'Một khúc gỗ trôi tự do theo dòng nước có vận tốc <b>5 km/h</b>. Khúc gỗ trôi <b>20 km</b> hết bao lâu?', opts: o4('5 giờ', '3 giờ', '100 giờ', '4 giờ'), ans: 'D', why: 'Khúc gỗ trôi bằng đúng vận tốc dòng nước: 20 : 5 = 4 (giờ).' },
    { sec: 'Ngược dòng', name: 'Câu 8', pts: 1, text: 'Vận tốc xuôi dòng <b>30 km/h</b>, vận tốc dòng nước <b>5 km/h</b>. Vận tốc ngược dòng là:', opts: o4('20 km/h', '25 km/h', '35 km/h', '15 km/h'), ans: 'A', why: 'Vận tốc thực = 30 − 5 = 25 km/h. Vận tốc ngược = 25 − 5 = 20 (km/h).' },
    { sec: 'Vận tốc ngược', name: 'Câu 9', pts: 1, text: 'Ca nô đi ngược dòng quãng đường <b>48 km</b> mất <b>4 giờ</b>. Vận tốc ngược dòng là:', opts: o4('16 km/h', '12 km/h', '192 km/h', '8 km/h'), ans: 'B', why: 'Vận tốc ngược dòng = 48 : 4 = 12 (km/h).' },
    { sec: 'Thời gian xuôi', name: 'Câu 10', pts: 1, text: 'Ca nô vận tốc riêng <b>22 km/h</b>, dòng nước <b>2 km/h</b>, đi xuôi dòng <b>48 km</b>. Thời gian đi xuôi?', opts: o4('2 giờ', '2,4 giờ', '3 giờ', '1,5 giờ'), ans: 'A', why: 'Vận tốc xuôi = 22 + 2 = 24 km/h. Thời gian = 48 : 24 = 2 (giờ).' },
  ],
},

/* ═══════════ ĐỀ 5 — TOÁN CÔNG VIỆC / VÒI NƯỚC ═══════════ */
{
  id: 9105, title: 'Đề 5 · Công việc & vòi nước', time: 20,
  questions: [
    { sec: 'Phần công việc', name: 'Câu 1', pts: 1, text: 'Một vòi chảy đầy bể trong <b>4 giờ</b>. Mỗi giờ vòi chảy được mấy phần bể?', opts: o4('1/4 bể', '4 bể', '1/2 bể', '1/8 bể'), ans: 'A', why: 'Mỗi giờ chảy được 1 : 4 = 1/4 (bể).' },
    { sec: 'Hai vòi', name: 'Câu 2', pts: 1, text: 'Vòi A chảy đầy bể trong <b>3 giờ</b>, vòi B trong <b>6 giờ</b>. Cả hai cùng chảy thì mỗi giờ được mấy phần bể?', opts: o4('1/9 bể', '2/9 bể', '1/2 bể', '1/3 bể'), ans: 'C', why: 'Mỗi giờ: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 (bể).' },
    { sec: 'Hai vòi', name: 'Câu 3', pts: 1, text: 'Vẫn số liệu Câu 2. Cả hai vòi cùng chảy thì bao lâu đầy bể?', opts: o4('9 giờ', '2 giờ', '4,5 giờ', '3 giờ'), ans: 'B', why: 'Mỗi giờ được 1/2 bể nên đầy bể sau 2 giờ.' },
    { sec: 'Tỉ lệ nghịch', name: 'Câu 4', pts: 1, text: '<b>6 người</b> làm xong một công việc trong <b>8 ngày</b>. Hỏi <b>12 người</b> (làm như nhau) làm xong trong mấy ngày?', opts: o4('16 ngày', '4 ngày', '6 ngày', '2 ngày'), ans: 'B', why: 'Số người gấp đôi thì thời gian giảm một nửa: 6 × 8 : 12 = 4 (ngày).' },
    { sec: 'Tỉ lệ nghịch', name: 'Câu 5', pts: 1, text: '<b>4 máy cày</b> cày xong ruộng trong <b>12 giờ</b>. Muốn cày xong trong <b>8 giờ</b> cần bao nhiêu máy như thế?', opts: o4('8 máy', '3 máy', '6 máy', '24 máy'), ans: 'C', why: 'Tổng công = 4 × 12 = 48 (máy·giờ). Số máy = 48 : 8 = 6 (máy).' },
    { sec: 'Phần công việc', name: 'Câu 6', pts: 1, text: 'Một người làm xong công việc trong <b>10 giờ</b>. Sau <b>4 giờ</b> người đó làm được mấy phần công việc?', opts: o4('3/5', '2/5', '1/4', '4/5'), ans: 'B', why: 'Mỗi giờ làm 1/10; sau 4 giờ làm được 4/10 = 2/5 (công việc).' },
    { sec: 'Vòi chảy - tháo', name: 'Câu 7', pts: 1, text: 'Vòi chảy vào <b>1/5 bể</b> mỗi giờ, vòi tháo ra <b>1/10 bể</b> mỗi giờ. Mở cả hai thì mỗi giờ nước trong bể tăng thêm?', opts: o4('1/10 bể', '3/10 bể', '1/5 bể', '1/15 bể'), ans: 'A', why: 'Mỗi giờ tăng: 1/5 − 1/10 = 2/10 − 1/10 = 1/10 (bể).' },
    { sec: 'Vòi chảy - tháo', name: 'Câu 8', pts: 1, text: 'Vẫn số liệu Câu 7, bể đang cạn. Hỏi sau bao lâu thì đầy bể?', opts: o4('5 giờ', '15 giờ', '2 giờ', '10 giờ'), ans: 'D', why: 'Mỗi giờ tăng 1/10 bể nên đầy bể sau 10 giờ.' },
    { sec: 'Một người', name: 'Câu 9', pts: 1, text: '<b>3 người</b> cùng sơn xong một ngôi nhà trong <b>6 ngày</b>. Hỏi <b>1 người</b> sơn xong ngôi nhà đó trong mấy ngày?', opts: o4('2 ngày', '18 ngày', '9 ngày', '6 ngày'), ans: 'B', why: 'Tổng công = 3 × 6 = 18 (người·ngày). Một người cần 18 ngày.' },
    { sec: 'Tìm vòi còn lại', name: 'Câu 10', pts: 1, text: 'Hai vòi cùng chảy đầy bể trong <b>6 giờ</b>. Riêng vòi A chảy đầy trong <b>10 giờ</b>. Riêng vòi B chảy đầy trong bao lâu?', opts: o4('4 giờ', '16 giờ', '15 giờ', '8 giờ'), ans: 'C', why: 'Mỗi giờ vòi B chảy: 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15 (bể), nên đầy sau 15 giờ.' },
  ],
},

/* ═══════════ ĐỀ 6 — TỈ SỐ PHẦN TRĂM NÂNG CAO ═══════════ */
{
  id: 9106, title: 'Đề 6 · Tỉ số phần trăm nâng cao', time: 20,
  questions: [
    { sec: 'Lãi - vốn', name: 'Câu 1', pts: 1, text: 'Cửa hàng mua một chiếc áo giá <b>200 000đ</b>, bán lãi <b>20%</b> so với giá mua. Giá bán chiếc áo?', opts: o4('240 000đ', '220 000đ', '250 000đ', '160 000đ'), ans: 'A', why: 'Tiền lãi = 200 000 × 20% = 40 000đ. Giá bán = 200 000 + 40 000 = 240 000đ.' },
    { sec: 'Tìm vốn', name: 'Câu 2', pts: 1, text: 'Bán một món hàng được <b>360 000đ</b> thì lãi <b>20%</b> so với vốn. Vốn của món hàng đó là:', opts: o4('288 000đ', '300 000đ', '320 000đ', '340 000đ'), ans: 'B', why: 'Giá bán = 120% vốn, nên vốn = 360 000 : 120 × 100 = 300 000đ.' },
    { sec: 'Tăng - giảm', name: 'Câu 3', pts: 1, text: 'Một số tăng thêm <b>10%</b> rồi lại giảm đi <b>10%</b>. So với ban đầu, số mới thay đổi thế nào?', opts: o4('Giảm 1%', 'Không đổi', 'Giảm 10%', 'Tăng 1%'), ans: 'A', why: 'Coi số đầu là 100: tăng 10% thành 110; giảm 10% của 110 là 11, còn 99 — tức giảm 1%.' },
    { sec: 'Tìm số phần trăm', name: 'Câu 4', pts: 1, text: 'Lớp có <b>40 học sinh</b>, trong đó <b>25%</b> là học sinh giỏi. Số học sinh giỏi của lớp là:', opts: o4('15', '25', '10', '8'), ans: 'C', why: 'Số học sinh giỏi = 40 × 25% = 40 : 4 = 10 (học sinh).' },
    { sec: 'Tìm tổng', name: 'Câu 5', pts: 1, text: '<b>12 học sinh giỏi</b> chiếm <b>30%</b> số học sinh cả lớp. Cả lớp có bao nhiêu học sinh?', opts: o4('40', '36', '30', '42'), ans: 'A', why: 'Cả lớp = 12 : 30 × 100 = 40 (học sinh).' },
    { sec: 'Tăng bao nhiêu %', name: 'Câu 6', pts: 1, text: 'Giá xăng tăng từ <b>20 000đ</b> lên <b>25 000đ</b> một lít. Giá xăng đã tăng bao nhiêu phần trăm?', opts: o4('20%', '5%', '125%', '25%'), ans: 'D', why: 'Tăng thêm 5 000đ. Tỉ số phần trăm tăng = 5 000 : 20 000 = 0,25 = 25%.' },
    { sec: 'Lãi tiết kiệm', name: 'Câu 7', pts: 1, text: 'Gửi tiết kiệm <b>10 000 000đ</b>, lãi suất <b>6% một năm</b>. Sau 1 năm cả gốc lẫn lãi được?', opts: o4('10 600 000đ', '600 000đ', '16 000 000đ', '10 060 000đ'), ans: 'A', why: 'Tiền lãi = 10 000 000 × 6% = 600 000đ. Cả gốc lẫn lãi = 10 600 000đ.' },
    { sec: 'Tìm giá gốc', name: 'Câu 8', pts: 1, text: 'Một sản phẩm giảm giá <b>15%</b> thì còn <b>170 000đ</b>. Giá gốc của sản phẩm là:', opts: o4('195 500đ', '200 000đ', '185 000đ', '220 000đ'), ans: 'B', why: 'Giá còn lại là 85% giá gốc, nên giá gốc = 170 000 : 85 × 100 = 200 000đ.' },
    { sec: 'Phần trăm khối lượng', name: 'Câu 9', pts: 1, text: 'Nước chiếm <b>90%</b> khối lượng quả dưa hấu. Một quả dưa nặng <b>5 kg</b> có bao nhiêu ki-lô-gam nước?', opts: o4('0,5 kg', '9 kg', '4,5 kg', '45 kg'), ans: 'C', why: 'Khối lượng nước = 5 × 90% = 5 × 0,9 = 4,5 (kg).' },
    { sec: 'Lỗ - vốn', name: 'Câu 10', pts: 1, text: 'Một người bán hàng bị <b>lỗ 10%</b> so với vốn, thu về <b>270 000đ</b>. Vốn ban đầu là:', opts: o4('297 000đ', '243 000đ', '330 000đ', '300 000đ'), ans: 'D', why: 'Số tiền thu là 90% vốn, nên vốn = 270 000 : 90 × 100 = 300 000đ.' },
  ],
},

/* ═══════════ ĐỀ 7 — HÌNH HỌC: TAM GIÁC, HÌNH THANG, HÌNH TRÒN ═══════════ */
{
  id: 9107, title: 'Đề 7 · Diện tích tam giác, hình thang, hình tròn', time: 20,
  questions: [
    { sec: 'Tam giác', name: 'Câu 1', pts: 1, text: 'Tam giác có đáy <b>12 cm</b>, chiều cao <b>5 cm</b>. Diện tích tam giác là:', opts: o4('30 cm²', '60 cm²', '17 cm²', '35 cm²'), ans: 'A', why: 'Diện tích = 12 × 5 : 2 = 60 : 2 = 30 (cm²).' },
    { sec: 'Hình thang', name: 'Câu 2', pts: 1, text: 'Hình thang có đáy lớn <b>10 cm</b>, đáy bé <b>6 cm</b>, chiều cao <b>4 cm</b>. Diện tích là:', opts: o4('64 cm²', '32 cm²', '40 cm²', '28 cm²'), ans: 'B', why: 'Diện tích = (10 + 6) × 4 : 2 = 16 × 4 : 2 = 32 (cm²).' },
    { sec: 'Hình tròn', name: 'Câu 3', pts: 1, text: 'Hình tròn bán kính <b>5 cm</b> (lấy π = 3,14). Diện tích hình tròn là:', opts: o4('78,5 cm²', '31,4 cm²', '15,7 cm²', '25 cm²'), ans: 'A', why: 'Diện tích = 5 × 5 × 3,14 = 25 × 3,14 = 78,5 (cm²).' },
    { sec: 'Hình tròn', name: 'Câu 4', pts: 1, text: 'Hình tròn đường kính <b>10 cm</b> (lấy π = 3,14). Chu vi hình tròn là:', opts: o4('78,5 cm', '62,8 cm', '31,4 cm', '15,7 cm'), ans: 'C', why: 'Chu vi = đường kính × 3,14 = 10 × 3,14 = 31,4 (cm).' },
    { sec: 'Tìm chiều cao', name: 'Câu 5', pts: 1, text: 'Tam giác có diện tích <b>24 cm²</b>, đáy <b>8 cm</b>. Chiều cao của tam giác là:', opts: o4('6 cm', '3 cm', '12 cm', '4 cm'), ans: 'A', why: 'Chiều cao = 24 × 2 : 8 = 48 : 8 = 6 (cm).' },
    { sec: 'Tìm đáy', name: 'Câu 6', pts: 1, text: 'Hình thang có diện tích <b>40 cm²</b>, chiều cao <b>5 cm</b>, đáy bé <b>6 cm</b>. Đáy lớn là:', opts: o4('8 cm', '14 cm', '6 cm', '10 cm'), ans: 'D', why: 'Tổng hai đáy = 40 × 2 : 5 = 16 cm. Đáy lớn = 16 − 6 = 10 (cm).' },
    { sec: 'Tỉ lệ diện tích', name: 'Câu 7', pts: 1, text: 'Hai tam giác có chiều cao bằng nhau, đáy tam giác A gấp <b>3 lần</b> đáy tam giác B. Diện tích tam giác A so với B?', opts: o4('Gấp 3 lần', 'Gấp 9 lần', 'Bằng nhau', 'Gấp 6 lần'), ans: 'A', why: 'Cùng chiều cao thì diện tích tỉ lệ với đáy, nên diện tích A gấp 3 lần B.' },
    { sec: 'Hình tròn', name: 'Câu 8', pts: 1, text: 'Hình tròn bán kính <b>4 cm</b> (lấy π = 3,14). Diện tích hình tròn là:', opts: o4('25,12 cm²', '50,24 cm²', '12,56 cm²', '16 cm²'), ans: 'B', why: 'Diện tích = 4 × 4 × 3,14 = 16 × 3,14 = 50,24 (cm²).' },
    { sec: 'Bài toán thực tế', name: 'Câu 9', pts: 1, text: 'Mảnh vườn hình tam giác vuông có hai cạnh góc vuông là <b>30 m</b> và <b>40 m</b>. Diện tích mảnh vườn?', opts: o4('600 m²', '1200 m²', '700 m²', '350 m²'), ans: 'A', why: 'Hai cạnh góc vuông là đáy và chiều cao: diện tích = 30 × 40 : 2 = 600 (m²).' },
    { sec: 'Hình thang', name: 'Câu 10', pts: 1, text: 'Hình thang có đáy lớn <b>18 cm</b>, đáy bé bằng <b>2/3</b> đáy lớn, chiều cao <b>8 cm</b>. Diện tích là:', opts: o4('240 cm²', '108 cm²', '120 cm²', '100 cm²'), ans: 'C', why: 'Đáy bé = 18 × 2 : 3 = 12 cm. Diện tích = (18 + 12) × 8 : 2 = 30 × 8 : 2 = 120 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 8 — HÌNH HỌC: THỂ TÍCH, CẮT - GHÉP, TỈ LỆ ═══════════ */
{
  id: 9108, title: 'Đề 8 · Thể tích, cắt - ghép, tỉ lệ diện tích', time: 20,
  questions: [
    { sec: 'Hình lập phương', name: 'Câu 1', pts: 1, text: 'Hình lập phương cạnh <b>3 cm</b>. Thể tích của nó là:', opts: o4('9 cm³', '27 cm³', '54 cm³', '18 cm³'), ans: 'B', why: 'Thể tích = 3 × 3 × 3 = 27 (cm³).' },
    { sec: 'Hình hộp', name: 'Câu 2', pts: 1, text: 'Hình hộp chữ nhật dài <b>5 cm</b>, rộng <b>4 cm</b>, cao <b>3 cm</b>. Thể tích là:', opts: o4('47 cm³', '60 cm³', '12 cm³', '120 cm³'), ans: 'B', why: 'Thể tích = 5 × 4 × 3 = 60 (cm³).' },
    { sec: 'Diện tích toàn phần', name: 'Câu 3', pts: 1, text: 'Hình lập phương cạnh <b>4 cm</b>. Diện tích toàn phần là:', opts: o4('64 cm²', '16 cm²', '48 cm²', '96 cm²'), ans: 'D', why: 'Diện tích một mặt = 4 × 4 = 16 cm². Toàn phần = 16 × 6 = 96 (cm²).' },
    { sec: 'Diện tích xung quanh', name: 'Câu 4', pts: 1, text: 'Hình hộp chữ nhật dài <b>6 cm</b>, rộng <b>4 cm</b>, cao <b>5 cm</b>. Diện tích xung quanh là:', opts: o4('120 cm²', '48 cm²', '100 cm²', '148 cm²'), ans: 'C', why: 'Chu vi đáy = (6 + 4) × 2 = 20 cm. Diện tích xung quanh = 20 × 5 = 100 (cm²).' },
    { sec: 'Tỉ lệ thể tích', name: 'Câu 5', pts: 1, text: 'Cạnh hình lập phương tăng gấp <b>2 lần</b> thì thể tích tăng gấp bao nhiêu lần?', opts: o4('Gấp 2 lần', 'Gấp 4 lần', 'Gấp 8 lần', 'Gấp 6 lần'), ans: 'C', why: 'Thể tích = cạnh × cạnh × cạnh, nên tăng gấp 2 × 2 × 2 = 8 lần.' },
    { sec: 'Bể nước', name: 'Câu 6', pts: 1, text: 'Bể hình hộp chữ nhật dài <b>2 m</b>, rộng <b>1,5 m</b>, cao <b>1 m</b>. Thể tích nước khi bể đầy là:', opts: o4('3 m³', '2,5 m³', '4 m³', '3,5 m³'), ans: 'A', why: 'Thể tích = 2 × 1,5 × 1 = 3 (m³).' },
    { sec: 'Đổi đơn vị', name: 'Câu 7', pts: 1, text: 'Một khối nước có thể tích <b>1 m³</b> thì bằng bao nhiêu lít nước?', opts: o4('100 lít', '10000 lít', '1000 lít', '1 lít'), ans: 'C', why: '1 m³ = 1000 dm³ = 1000 lít.' },
    { sec: 'Cắt - ghép', name: 'Câu 8', pts: 1, text: 'Tam giác ABC có M là <b>trung điểm</b> cạnh BC. Diện tích tam giác ABM so với tam giác ABC?', opts: o4('1/4', '1/3', '2/3', '1/2'), ans: 'D', why: 'ABM và ABC cùng chiều cao hạ từ A; đáy BM = 1/2 BC nên diện tích bằng 1/2.' },
    { sec: 'Tỉ lệ diện tích', name: 'Câu 9', pts: 1, text: 'Hai hình vuông có cạnh <b>6 cm</b> và <b>3 cm</b>. Diện tích hình lớn gấp mấy lần hình nhỏ?', opts: o4('Gấp 2 lần', 'Gấp 4 lần', 'Gấp 3 lần', 'Gấp 9 lần'), ans: 'B', why: 'Diện tích: 36 cm² và 9 cm². 36 : 9 = 4, nên gấp 4 lần.' },
    { sec: 'Tìm chiều cao', name: 'Câu 10', pts: 1, text: 'Hình hộp chữ nhật có thể tích <b>48 cm³</b>, diện tích đáy <b>12 cm²</b>. Chiều cao của nó là:', opts: o4('6 cm', '3 cm', '4 cm', '36 cm'), ans: 'C', why: 'Chiều cao = thể tích : diện tích đáy = 48 : 12 = 4 (cm).' },
  ],
},

/* ═══════════ ĐỀ 9 — TRUNG BÌNH CỘNG & SỐ HỌC ═══════════ */
{
  id: 9109, title: 'Đề 9 · Trung bình cộng, chia hết, chữ số tận cùng', time: 20,
  questions: [
    { sec: 'Trung bình cộng', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của ba số <b>12 ; 15 ; 18</b> là:', opts: o4('15', '16', '14', '45'), ans: 'A', why: 'Trung bình cộng = (12 + 15 + 18) : 3 = 45 : 3 = 15.' },
    { sec: 'Tìm tổng', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của ba số là <b>20</b>. Tổng của ba số đó là:', opts: o4('20', '60', '40', '23'), ans: 'B', why: 'Tổng = trung bình cộng × số số hạng = 20 × 3 = 60.' },
    { sec: 'Chia hết', name: 'Câu 3', pts: 1, text: 'Số tự nhiên nhỏ nhất khác 0 chia hết cho cả <b>2, 3 và 5</b> là:', opts: o4('15', '60', '30', '10'), ans: 'C', why: 'Số chia hết cho cả 2, 3, 5 là bội của 30; nhỏ nhất là 30.' },
    { sec: 'Chia hết', name: 'Câu 4', pts: 1, text: 'Trong các số <b>24 ; 35 ; 51 ; 40</b>, số nào chia hết cho cả <b>2 và 5</b>?', opts: o4('24', '35', '51', '40'), ans: 'D', why: 'Số chia hết cho cả 2 và 5 có tận cùng là 0: đó là 40.' },
    { sec: 'Trung bình cộng', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của hai số là <b>25</b>, một số là <b>30</b>. Số còn lại là:', opts: o4('20', '25', '22', '30'), ans: 'A', why: 'Tổng hai số = 25 × 2 = 50. Số còn lại = 50 − 30 = 20.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 6', pts: 1, text: 'Chữ số tận cùng của tích <b>2 × 3 × 5 × 7</b> là:', opts: o4('5', '0', '2', '1'), ans: 'B', why: 'Tích có thừa số 2 và 5 nên chia hết cho 10; chữ số tận cùng là 0.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 7', pts: 1, text: 'Chữ số tận cùng của tích <b>1 × 2 × 3 × ... × 10</b> là:', opts: o4('2', '5', '0', '8'), ans: 'C', why: 'Tích có cả thừa số 2, 5 (và 10) nên chia hết cho 10; tận cùng là 0.' },
    { sec: 'Số liên tiếp', name: 'Câu 8', pts: 1, text: 'Tổng của <b>5 số tự nhiên liên tiếp</b> bằng <b>100</b>. Số ở giữa (số thứ ba) là:', opts: o4('18', '22', '25', '20'), ans: 'D', why: 'Với 5 số liên tiếp, số giữa = tổng : 5 = 100 : 5 = 20.' },
    { sec: 'Chia hết cho 9', name: 'Câu 9', pts: 1, text: 'Tìm chữ số <b>a</b> để số <b>3a5</b> (chữ số hàng chục là a) chia hết cho <b>9</b>.', opts: o4('1', '0', '4', '6'), ans: 'A', why: 'Cần 3 + a + 5 = 8 + a chia hết cho 9, nên a = 1 (số 315: 3+1+5 = 9).' },
    { sec: 'Trung bình cộng', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của <b>4 số</b> là <b>10</b>. Thêm số thứ năm thì trung bình cộng của 5 số là <b>12</b>. Số thứ năm là:', opts: o4('12', '20', '16', '22'), ans: 'B', why: 'Tổng 4 số = 40, tổng 5 số = 12 × 5 = 60. Số thứ năm = 60 − 40 = 20.' },
  ],
},

/* ═══════════ ĐỀ 10 — SUY LUẬN & TOÁN CÓ LỜI VĂN NHIỀU BƯỚC ═══════════ */
{
  id: 9110, title: 'Đề 10 · Suy luận & bài toán nhiều bước', time: 20,
  questions: [
    { sec: 'Tổng - hiệu', name: 'Câu 1', pts: 1, text: 'Hai số có tổng <b>100</b>, hiệu <b>20</b>. Số lớn là:', opts: o4('60', '40', '50', '80'), ans: 'A', why: 'Số lớn = (tổng + hiệu) : 2 = (100 + 20) : 2 = 60.' },
    { sec: 'Tổng - hiệu', name: 'Câu 2', pts: 1, text: 'Vẫn hai số ở Câu 1 (tổng 100, hiệu 20). Số bé là:', opts: o4('60', '40', '50', '20'), ans: 'B', why: 'Số bé = (tổng − hiệu) : 2 = (100 − 20) : 2 = 40.' },
    { sec: 'Tổng - tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tổng <b>63</b>, số này gấp <b>đôi</b> số kia. Số lớn là:', opts: o4('21', '31', '42', '40'), ans: 'C', why: 'Tổng gồm 3 phần bằng nhau: 1 phần = 63 : 3 = 21. Số lớn = 21 × 2 = 42.' },
    { sec: 'Hiệu - tỉ', name: 'Câu 4', pts: 1, text: 'Số lớn hơn số bé <b>24 đơn vị</b> và gấp <b>3 lần</b> số bé. Số bé là:', opts: o4('24', '36', '8', '12'), ans: 'D', why: 'Hiệu là 2 phần bằng nhau (3 − 1): 1 phần = 24 : 2 = 12. Số bé = 12.' },
    { sec: 'Trồng cây', name: 'Câu 5', pts: 1, text: 'Trồng cây dọc một đoạn đường dài <b>100 m</b>, cứ <b>5 m</b> trồng một cây, hai đầu đường đều có cây. Số cây cần trồng là:', opts: o4('21', '20', '22', '25'), ans: 'A', why: 'Số khoảng = 100 : 5 = 20. Trồng cả hai đầu nên số cây = 20 + 1 = 21.' },
    { sec: 'Cưa gỗ', name: 'Câu 6', pts: 1, text: 'Cưa một khúc gỗ thành <b>5 đoạn</b>, mỗi lần cưa mất <b>4 phút</b>. Tổng thời gian cưa là:', opts: o4('20 phút', '16 phút', '12 phút', '24 phút'), ans: 'B', why: 'Cưa thành 5 đoạn cần 4 nhát cưa. Thời gian = 4 × 4 = 16 (phút).' },
    { sec: 'Tính tuổi', name: 'Câu 7', pts: 1, text: 'Hiện nay mẹ <b>30 tuổi</b>, con <b>6 tuổi</b>. Sau bao nhiêu năm nữa tuổi mẹ gấp <b>3 lần</b> tuổi con?', opts: o4('4 năm', '12 năm', '6 năm', '3 năm'), ans: 'C', why: 'Hiệu tuổi luôn là 24. Khi mẹ gấp 3 lần con, hiệu = 2 phần con → con = 12 tuổi, tức sau 12 − 6 = 6 (năm).' },
    { sec: 'Gà và chó', name: 'Câu 8', pts: 1, text: 'Vừa gà vừa chó có tất cả <b>36 con</b>, đếm được <b>100 chân</b>. Số con chó là:', opts: o4('22', '18', '12', '14'), ans: 'D', why: 'Giả sử toàn gà: 36 × 2 = 72 chân, thiếu 100 − 72 = 28 chân; mỗi chó hơn gà 2 chân → chó = 28 : 2 = 14 (con).' },
    { sec: 'Gà và chó', name: 'Câu 9', pts: 1, text: 'Vẫn số liệu Câu 8 (36 con, 100 chân). Số con gà là:', opts: o4('22', '14', '18', '24'), ans: 'A', why: 'Đã có 14 con chó nên số gà = 36 − 14 = 22 (con).' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, text: 'Ba thùng dầu: thùng 1 và 2 có <b>48 lít</b>, thùng 2 và 3 có <b>50 lít</b>, thùng 1 và 3 có <b>46 lít</b>. Thùng thứ hai có bao nhiêu lít?', opts: o4('24 lít', '26 lít', '22 lít', '28 lít'), ans: 'B', why: 'Cộng ba tổng = 144 lít = 2 lần cả ba thùng → ba thùng = 72 lít. Thùng 2 = 72 − 46 = 26 (lít).' },
  ],
},

];

SUBJECTS.push({ id:'nc5', name:'Toán nâng cao', short:'Nâng cao 5', icon:'🥇', grade:5, exams:NANGCAO5_EXAMS, ready:true, heroTitle:'Toán nâng cao lớp 5 — bồi dưỡng HSG: chuyển động, tỉ số phần trăm, hình học và suy luận', heroMeta:'📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; phong cách MathX/HSG, biên soạn lại' });
