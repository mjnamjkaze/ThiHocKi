// TOÁN TƯ DUY — LỚP 5
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Biên soạn theo PHONG CÁCH các bài toán bồi dưỡng HSG quốc tế (Trung Quốc: chuyển động,
// công việc, tỉ lệ; Nga: số học, nguyên lí Đi-rích-lê; Úc/Kangaroo: suy luận, dãy số),
// KHÔNG sao chép nguyên văn. Mức độ HSG cấp trường/huyện Việt Nam.

const TTD5_EXAMS = [

/* ═══════════ ĐỀ 1 — CHUYỂN ĐỘNG ═══════════ */
{
  id: 5821, title: 'Đề 1 · Bài toán chuyển động', time: 20,
  questions: [
    { sec: 'Ngược chiều', name: 'Câu 1', pts: 1, text: 'Hai xe đi ngược chiều từ hai điểm cách nhau 100 km, vận tốc 30 km/giờ và 20 km/giờ. Sau mấy giờ hai xe gặp nhau?', opts: o4('2 giờ', '5 giờ', '4 giờ', '10 giờ'), ans: 'A', why: 'Tổng vận tốc = 30 + 20 = 50; thời gian gặp = 100 : 50 = 2 (giờ).' },
    { sec: 'Cùng chiều', name: 'Câu 2', pts: 1, text: 'Hai xe cùng chiều cách nhau 20 km, xe sau 50 km/giờ đuổi xe trước 40 km/giờ. Sau mấy giờ đuổi kịp?', opts: o4('2 giờ', '1 giờ', '4 giờ', '20 giờ'), ans: 'A', why: 'Hiệu vận tốc = 50 − 40 = 10; thời gian đuổi kịp = 20 : 10 = 2 (giờ).' },
    { sec: 'Quãng đường', name: 'Câu 3', pts: 1, text: 'Xe đi với vận tốc 60 km/giờ trong 2,5 giờ. Quãng đường đi được là bao nhiêu?', opts: o4('150 km', '120 km', '62,5 km', '24 km'), ans: 'A', why: 's = 60 × 2,5 = 150 (km).' },
    { sec: 'Thời gian', name: 'Câu 4', pts: 1, text: 'Quãng đường 180 km, vận tốc 60 km/giờ. Thời gian đi là bao nhiêu?', opts: o4('3 giờ', '2 giờ', '4 giờ', '120 giờ'), ans: 'A', why: 't = 180 : 60 = 3 (giờ).' },
    { sec: 'Ngược chiều', name: 'Câu 5', pts: 1, text: 'Hai người đi bộ ngược chiều từ hai điểm cách 12 km, mỗi người 3 km/giờ. Sau mấy giờ gặp nhau?', opts: o4('2 giờ', '4 giờ', '6 giờ', '3 giờ'), ans: 'A', why: 'Tổng vận tốc = 3 + 3 = 6; thời gian = 12 : 6 = 2 (giờ).' },
    { sec: 'Dòng nước', name: 'Câu 6', pts: 1, text: 'Ca nô xuôi dòng: vận tốc ca nô 12 km/giờ, dòng nước 3 km/giờ. Đi 30 km hết bao lâu?', opts: o4('2 giờ', '3 giờ', '2,5 giờ', '10 giờ'), ans: 'A', why: 'Vận tốc xuôi = 12 + 3 = 15; thời gian = 30 : 15 = 2 (giờ).' },
    { sec: 'Dòng nước', name: 'Câu 7', pts: 1, text: 'Ca nô ngược dòng: vận tốc ca nô 12 km/giờ, dòng nước 3 km/giờ. Đi 18 km hết bao lâu?', opts: o4('2 giờ', '1,5 giờ', '3 giờ', '6 giờ'), ans: 'A', why: 'Vận tốc ngược = 12 − 3 = 9; thời gian = 18 : 9 = 2 (giờ).' },
    { sec: 'Vận tốc', name: 'Câu 8', pts: 1, text: 'Đi 100 km trong 2 giờ. Vận tốc là bao nhiêu?', opts: o4('50 km/giờ', '200 km/giờ', '98 km/giờ', '102 km/giờ'), ans: 'A', why: 'v = 100 : 2 = 50 (km/giờ).' },
    { sec: 'Qua cột', name: 'Câu 9', pts: 1, text: 'Một đoàn tàu dài 100 m chạy qua một cột điện với vận tốc 10 m/giây. Thời gian tàu qua hết cột là bao lâu?', opts: o4('10 giây', '100 giây', '1 giây', '20 giây'), ans: 'A', why: 'Qua cột: quãng đường bằng chiều dài tàu; t = 100 : 10 = 10 (giây).' },
    { sec: 'Cùng chiều', name: 'Câu 10', pts: 1, text: 'Hai xe cùng chiều cách nhau 30 km, vận tốc 60 và 40 km/giờ. Sau mấy giờ xe sau đuổi kịp xe trước?', opts: o4('1,5 giờ', '2 giờ', '3 giờ', '0,5 giờ'), ans: 'A', why: 'Hiệu vận tốc = 60 − 40 = 20; thời gian = 30 : 20 = 1,5 (giờ).' },
  ],
},

/* ═══════════ ĐỀ 2 — CÔNG VIỆC, VÒI NƯỚC ═══════════ */
{
  id: 5822, title: 'Đề 2 · Công việc chung và vòi nước', time: 20,
  questions: [
    { sec: 'Công việc', name: 'Câu 1', pts: 1, text: 'Một người làm xong một công việc trong 6 ngày. Mỗi ngày người đó làm được mấy phần công việc?', opts: o4('1/6', '6', '1/3', '1/2'), ans: 'A', why: 'Làm xong trong 6 ngày nên mỗi ngày làm 1/6 công việc.' },
    { sec: 'Làm chung', name: 'Câu 2', pts: 1, text: 'A làm xong một việc trong 4 ngày, B cũng làm xong việc đó trong 4 ngày. Cả hai cùng làm thì mấy ngày xong?', opts: o4('2 ngày', '4 ngày', '8 ngày', '1 ngày'), ans: 'A', why: 'Mỗi ngày hai người làm 1/4 + 1/4 = 1/2 việc nên xong sau 2 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 3', pts: 1, text: 'Vòi 1 chảy đầy bể trong 3 giờ, vòi 2 chảy đầy bể trong 6 giờ. Mở cả hai vòi thì mấy giờ đầy bể?', opts: o4('2 giờ', '4 giờ', '9 giờ', '3 giờ'), ans: 'A', why: 'Mỗi giờ hai vòi chảy 1/3 + 1/6 = 1/2 bể nên đầy sau 2 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 4', pts: 1, text: '3 người làm xong một việc trong 6 ngày. Hỏi 6 người (cùng năng suất) làm xong trong mấy ngày?', opts: o4('3 ngày', '12 ngày', '2 ngày', '6 ngày'), ans: 'A', why: 'Công việc = 3 × 6 = 18 người-ngày; 6 người làm 18 : 6 = 3 ngày.' },
    { sec: 'Năng suất', name: 'Câu 5', pts: 1, text: '2 máy trong 1 giờ làm được 100 sản phẩm. Vậy 1 máy trong 1 giờ làm được bao nhiêu sản phẩm?', opts: o4('50', '100', '200', '25'), ans: 'A', why: '100 : 2 = 50 sản phẩm.' },
    { sec: 'Người – ngày', name: 'Câu 6', pts: 1, text: '5 công nhân xây xong bức tường trong 10 ngày. Hỏi 10 công nhân xây xong trong mấy ngày?', opts: o4('5 ngày', '20 ngày', '2 ngày', '15 ngày'), ans: 'A', why: 'Công việc = 5 × 10 = 50; 10 công nhân làm 50 : 10 = 5 ngày.' },
    { sec: 'Làm chung', name: 'Câu 7', pts: 1, text: 'A làm một mình xong việc trong 10 ngày. A và B cùng làm thì 6 ngày xong. B làm một mình mất mấy ngày?', opts: o4('15 ngày', '4 ngày', '16 ngày', '60 ngày'), ans: 'A', why: 'Mỗi ngày B làm 1/6 − 1/10 = 1/15 việc nên B làm một mình 15 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 8', pts: 1, text: 'Một vòi mỗi giờ chảy được 1/4 bể. Bao lâu thì đầy bể?', opts: o4('4 giờ', '2 giờ', '1/4 giờ', '8 giờ'), ans: 'A', why: 'Mỗi giờ 1/4 bể nên đầy bể sau 4 giờ.' },
    { sec: 'Ăn gạo', name: 'Câu 9', pts: 1, text: '4 người ăn hết một bao gạo trong 20 ngày. Hỏi 8 người ăn hết bao gạo đó trong mấy ngày?', opts: o4('10 ngày', '40 ngày', '5 ngày', '16 ngày'), ans: 'A', why: 'Số người gấp đôi thì số ngày giảm một nửa: 20 : 2 = 10 ngày.' },
    { sec: 'Công việc', name: 'Câu 10', pts: 1, text: 'Một người gặt 1 sào lúa mất 2 giờ. Người đó gặt 3 sào mất mấy giờ?', opts: o4('6 giờ', '5 giờ', '2 giờ', '3 giờ'), ans: 'A', why: '2 × 3 = 6 giờ.' },
  ],
},

/* ═══════════ ĐỀ 3 — TỈ SỐ PHẦN TRĂM NÂNG CAO ═══════════ */
{
  id: 5823, title: 'Đề 3 · Tỉ số phần trăm nâng cao', time: 20,
  questions: [
    { sec: 'Tìm số', name: 'Câu 1', pts: 1, text: '20% của một số là 10. Số đó là bao nhiêu?', opts: o4('50', '2', '200', '30'), ans: 'A', why: 'Số đó = 10 : 20 × 100 = 50.' },
    { sec: 'Tìm số', name: 'Câu 2', pts: 1, text: 'Lớp có 15 học sinh giỏi, chiếm 30% số học sinh cả lớp. Lớp có bao nhiêu học sinh?', opts: o4('50', '45', '30', '20'), ans: 'A', why: 'Số học sinh = 15 : 30 × 100 = 50.' },
    { sec: 'Giảm giá', name: 'Câu 3', pts: 1, text: 'Một chiếc áo giá 200 000 đồng, giảm 15%. Giá sau khi giảm là bao nhiêu?', opts: o4('170 000 đồng', '30 000 đồng', '185 000 đồng', '150 000 đồng'), ans: 'A', why: 'Giảm 15% của 200 000 = 30 000; còn 200 000 − 30 000 = 170 000 (đồng).' },
    { sec: 'Lãi', name: 'Câu 4', pts: 1, text: 'Bán một món hàng lãi 10% trên vốn 500 000 đồng. Tiền lãi là bao nhiêu?', opts: o4('50 000 đồng', '10 000 đồng', '100 000 đồng', '550 000 đồng'), ans: 'A', why: '10% của 500 000 = 50 000 (đồng).' },
    { sec: 'Cộng %', name: 'Câu 5', pts: 1, text: '25% + 25% bằng bao nhiêu phần trăm?', opts: o4('50%', '25%', '625%', '5%'), ans: 'A', why: '25% + 25% = 50%.' },
    { sec: 'Nửa %', name: 'Câu 6', pts: 1, text: 'Một nửa của 40% là bao nhiêu phần trăm?', opts: o4('20%', '80%', '40%', '10%'), ans: 'A', why: '40% : 2 = 20%.' },
    { sec: 'Tìm số', name: 'Câu 7', pts: 1, text: 'Bể chứa 60% lượng nước tối đa thì được 30 lít. Bể đầy chứa bao nhiêu lít?', opts: o4('50 lít', '90 lít', '18 lít', '36 lít'), ans: 'A', why: 'Bể đầy = 30 : 60 × 100 = 50 (lít).' },
    { sec: 'Tăng %', name: 'Câu 8', pts: 1, text: 'Giá 100 000 đồng tăng thêm 20%. Giá mới là bao nhiêu?', opts: o4('120 000 đồng', '20 000 đồng', '102 000 đồng', '80 000 đồng'), ans: 'A', why: 'Tăng 20% của 100 000 = 20 000; giá mới = 120 000 (đồng).' },
    { sec: 'Bài toán', name: 'Câu 9', pts: 1, text: 'Lớp có 40 bạn, trong đó 60% là nữ. Có bao nhiêu bạn nam?', opts: o4('16', '24', '20', '4'), ans: 'A', why: 'Nữ = 60% → nam = 40% của 40 = 16 bạn.' },
    { sec: 'Tính %', name: 'Câu 10', pts: 1, text: 'Giá một món hàng tăng từ 100 000 đồng lên 120 000 đồng. Giá đã tăng bao nhiêu phần trăm?', opts: o4('20%', '120%', '12%', '2%'), ans: 'A', why: 'Tăng 20 000 so với 100 000 là 20%.' },
  ],
},

/* ═══════════ ĐỀ 4 — TRUNG BÌNH CỘNG NÂNG CAO ═══════════ */
{
  id: 5824, title: 'Đề 4 · Trung bình cộng nâng cao', time: 20,
  questions: [
    { sec: 'Trung bình cộng', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 10, 20, 30 là bao nhiêu?', opts: o4('20', '60', '30', '15'), ans: 'A', why: '(10 + 20 + 30) : 3 = 60 : 3 = 20.' },
    { sec: 'Tìm tổng', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 4 số là 25. Tổng của 4 số đó là bao nhiêu?', opts: o4('100', '25', '29', '625'), ans: 'A', why: 'Tổng = trung bình × số lượng = 25 × 4 = 100.' },
    { sec: 'Tìm số', name: 'Câu 3', pts: 1, text: 'Trung bình cộng của hai số là 15, một số là 12. Số kia là bao nhiêu?', opts: o4('18', '3', '27', '13'), ans: 'A', why: 'Tổng hai số = 30; số kia = 30 − 12 = 18.' },
    { sec: 'Thêm số', name: 'Câu 4', pts: 1, text: 'Trung bình cộng của 3 số là 10. Thêm số thứ tư thì trung bình của cả 4 số là 12. Số thứ tư là bao nhiêu?', opts: o4('18', '12', '2', '48'), ans: 'A', why: 'Tổng 3 số = 30, tổng 4 số = 48; số thứ tư = 48 − 30 = 18.' },
    { sec: 'Điểm số', name: 'Câu 5', pts: 1, text: 'Ba môn được điểm 8, 9 và 7. Điểm trung bình là bao nhiêu?', opts: o4('8', '24', '9', '7'), ans: 'A', why: '(8 + 9 + 7) : 3 = 24 : 3 = 8.' },
    { sec: 'Thêm số', name: 'Câu 6', pts: 1, text: 'Trung bình cộng tuổi của 2 bạn là 10. Thêm một bạn 13 tuổi thì trung bình tuổi 3 bạn là bao nhiêu?', opts: o4('11', '12', '10', '13'), ans: 'A', why: 'Tổng 2 bạn = 20, thêm 13 thành 33; trung bình = 33 : 3 = 11.' },
    { sec: 'Số liên tiếp', name: 'Câu 7', pts: 1, text: 'Trung bình cộng của 5 số liên tiếp 1, 2, 3, 4, 5 là bao nhiêu?', opts: o4('3', '15', '5', '2'), ans: 'A', why: 'Với dãy liên tiếp, trung bình là số ở giữa: 3.' },
    { sec: 'Dãy', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của các số 1, 2, 3, ..., 9 là bao nhiêu?', opts: o4('5', '45', '9', '4'), ans: 'A', why: 'Tổng = 45; trung bình = 45 : 9 = 5.' },
    { sec: 'Ứng dụng', name: 'Câu 9', pts: 1, text: 'Trung bình mỗi ngày đọc 20 trang. 5 ngày đọc được bao nhiêu trang?', opts: o4('100', '25', '15', '4'), ans: 'A', why: '20 × 5 = 100 trang.' },
    { sec: 'Kết hợp', name: 'Câu 10', pts: 1, text: 'Trung bình cộng của hai số là 30, hiệu của chúng là 10. Số lớn là bao nhiêu?', opts: o4('35', '25', '40', '20'), ans: 'A', why: 'Tổng = 60; số lớn = (60 + 10) : 2 = 35.' },
  ],
},

/* ═══════════ ĐỀ 5 — SỐ HỌC (CHIA HẾT, ƯỚC BỘI, NGUYÊN TỐ) ═══════════ */
{
  id: 5825, title: 'Đề 5 · Số học nâng cao', time: 20,
  questions: [
    { sec: 'Số nguyên tố', name: 'Câu 1', pts: 1, text: 'Số nguyên tố nhỏ nhất là số nào?', opts: o4('2', '1', '3', '0'), ans: 'A', why: 'Số nguyên tố nhỏ nhất là 2.' },
    { sec: 'Số nguyên tố', name: 'Câu 2', pts: 1, text: 'Số nguyên tố chẵn duy nhất là số nào?', opts: o4('2', '4', '6', '0'), ans: 'A', why: '2 là số nguyên tố chẵn duy nhất; các số chẵn khác đều chia hết cho 2.' },
    { sec: 'ƯCLN', name: 'Câu 3', pts: 1, text: 'Ước chung lớn nhất của 12 và 18 là bao nhiêu?', opts: o4('6', '3', '2', '36'), ans: 'A', why: 'Ước chung của 12 và 18: 1, 2, 3, 6 → lớn nhất là 6.' },
    { sec: 'BCNN', name: 'Câu 4', pts: 1, text: 'Bội chung nhỏ nhất của 4 và 6 là bao nhiêu?', opts: o4('12', '24', '2', '10'), ans: 'A', why: 'Bội của 4: 4, 8, 12...; bội của 6: 6, 12...; nhỏ nhất chung là 12.' },
    { sec: 'Chia hết cho 9', name: 'Câu 5', pts: 1, text: 'Số nào chia hết cho 9: 123, 234, 345?', opts: o4('234', '123', '345', 'Cả ba'), ans: 'A', why: '2 + 3 + 4 = 9 chia hết cho 9 nên 234 chia hết cho 9.' },
    { sec: 'Chia hết cho 4', name: 'Câu 6', pts: 1, text: '100 có chia hết cho 4 không?', opts: o4('Có', 'Không', 'Chỉ chia hết cho 2', 'Không xác định'), ans: 'A', why: '100 : 4 = 25 (không dư) nên 100 chia hết cho 4.' },
    { sec: 'Số nguyên tố', name: 'Câu 7', pts: 1, text: 'Số nào là số nguyên tố: 15, 21, 17, 25?', opts: o4('17', '15', '21', '25'), ans: 'A', why: '17 chỉ chia hết cho 1 và 17 nên là số nguyên tố.' },
    { sec: 'Ước chung', name: 'Câu 8', pts: 1, text: 'Số nào là ước chung của 8 và 12: 3, 4, 5, 6?', opts: o4('4', '3', '5', '6'), ans: 'A', why: '4 là ước của cả 8 và 12 (8:4=2, 12:4=3).' },
    { sec: 'Luỹ thừa', name: 'Câu 9', pts: 1, text: '2 × 2 × 2 bằng bao nhiêu?', opts: o4('8', '6', '4', '16'), ans: 'A', why: '2 × 2 = 4, 4 × 2 = 8.' },
    { sec: 'Số dư', name: 'Câu 10', pts: 1, text: '17 chia cho 5 được số dư là bao nhiêu?', opts: o4('2', '3', '1', '0'), ans: 'A', why: '17 = 5 × 3 + 2 nên số dư là 2.' },
  ],
},

/* ═══════════ ĐỀ 6 — SUY LUẬN VÀ NGUYÊN LÍ ĐI-RÍCH-LÊ ═══════════ */
{
  id: 5826, title: 'Đề 6 · Suy luận và nguyên lí Đi-rích-lê', time: 20,
  questions: [
    { sec: 'Đi-rích-lê', name: 'Câu 1', pts: 1, text: 'Trong hộp có tất (vớ) 3 màu để lẫn lộn. Phải lấy ít nhất mấy chiếc để chắc chắn có 2 chiếc cùng màu?', opts: o4('4', '3', '2', '6'), ans: 'A', why: 'Có 3 màu, lấy 3 chiếc có thể mỗi màu một chiếc; lấy chiếc thứ 4 chắc chắn trùng màu.' },
    { sec: 'Đi-rích-lê', name: 'Câu 2', pts: 1, text: 'Cần ít nhất bao nhiêu người để chắc chắn có 2 người sinh cùng một tháng?', opts: o4('13', '12', '24', '2'), ans: 'A', why: 'Có 12 tháng; 12 người có thể khác tháng, người thứ 13 chắc chắn trùng tháng.' },
    { sec: 'Bắt tay', name: 'Câu 3', pts: 1, text: '5 bạn, mỗi bạn bắt tay một lần với mỗi bạn khác. Tổng số cái bắt tay là bao nhiêu?', opts: o4('10', '8', '12', '20'), ans: 'A', why: 'Số bắt tay = 4 + 3 + 2 + 1 = 10.' },
    { sec: 'Đi-rích-lê', name: 'Câu 4', pts: 1, text: 'Trong hộp chỉ có bi đỏ và bi xanh. Lấy ít nhất mấy viên để chắc chắn có 2 viên cùng màu?', opts: o4('3', '2', '4', '5'), ans: 'A', why: 'Có 2 màu, lấy 2 viên có thể khác màu; viên thứ 3 chắc chắn trùng màu.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'An thấp hơn Bình, Bình thấp hơn Cường. Ai cao nhất?', opts: o4('Cường', 'Bình', 'An', 'Bằng nhau'), ans: 'A', why: 'Cường cao hơn Bình, Bình cao hơn An nên Cường cao nhất.' },
    { sec: 'Thi đấu', name: 'Câu 6', pts: 1, text: '4 đội thi đấu vòng tròn (mỗi đội gặp mỗi đội khác một lần). Mỗi đội đấu mấy trận?', opts: o4('3', '4', '6', '2'), ans: 'A', why: 'Mỗi đội gặp 3 đội còn lại nên đấu 3 trận.' },
    { sec: 'Tìm số', name: 'Câu 7', pts: 1, text: 'Số tự nhiên nhỏ nhất lớn hơn 1, khi chia cho 3 dư 1 và chia cho 5 cũng dư 1, là số nào?', opts: o4('16', '11', '31', '6'), ans: 'A', why: 'Số chia hết cho cả 3 và 5 nhỏ nhất (khác 0) là 15; thêm 1 dư là 16.' },
    { sec: 'Số liên tiếp', name: 'Câu 8', pts: 1, text: 'Ba số tự nhiên liên tiếp có tổng bằng 30. Số ở giữa là bao nhiêu?', opts: o4('10', '9', '11', '15'), ans: 'A', why: 'Số giữa = tổng : 3 = 30 : 3 = 10.' },
    { sec: 'Đi-rích-lê', name: 'Câu 9', pts: 1, text: 'Xếp 5 bạn vào 2 bàn. Chắc chắn có ít nhất một bàn có bao nhiêu bạn trở lên?', opts: o4('3', '2', '4', '5'), ans: 'A', why: 'Nếu mỗi bàn nhiều nhất 2 bạn thì chỉ 4 bạn; vậy phải có bàn ≥ 3 bạn.' },
    { sec: 'Đi-rích-lê', name: 'Câu 10', pts: 1, text: 'Có 10 quả bóng bỏ vào 3 rổ. Chắc chắn có ít nhất một rổ chứa bao nhiêu quả trở lên?', opts: o4('4', '3', '5', '10'), ans: 'A', why: 'Nếu mỗi rổ nhiều nhất 3 quả thì chỉ 9 quả; vậy phải có rổ ≥ 4 quả.' },
  ],
},

/* ═══════════ ĐỀ 7 — DÃY SỐ VÀ TÍNH TỔNG ═══════════ */
{
  id: 5827, title: 'Đề 7 · Dãy số và tính tổng', time: 20,
  questions: [
    { sec: 'Tổng dãy', name: 'Câu 1', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 50 bằng bao nhiêu?', opts: o4('1275', '1250', '1225', '2550'), ans: 'A', why: 'Có 25 cặp, mỗi cặp bằng 51: 51 × 25 = 1275.' },
    { sec: 'Số hạng', name: 'Câu 2', pts: 1, text: 'Số hạng thứ 10 của dãy 3, 6, 9, ... là bao nhiêu?', opts: o4('30', '27', '33', '10'), ans: 'A', why: 'Dãy bội của 3: số thứ 10 là 3 × 10 = 30.' },
    { sec: 'Số hạng', name: 'Câu 3', pts: 1, text: 'Số hạng thứ 5 của dãy 2, 5, 8, 11, ... là bao nhiêu?', opts: o4('14', '13', '15', '17'), ans: 'A', why: 'Dãy cách 3: 2, 5, 8, 11, 14 — số thứ 5 là 14.' },
    { sec: 'Tổng chẵn', name: 'Câu 4', pts: 1, text: 'Tổng các số chẵn từ 2 đến 20 (2 + 4 + ... + 20) bằng bao nhiêu?', opts: o4('110', '100', '120', '90'), ans: 'A', why: 'Có 10 số, ghép cặp (2+20)+(4+18)+... = 22 × 5 = 110.' },
    { sec: 'Tổng lẻ', name: 'Câu 5', pts: 1, text: '1 + 3 + 5 + 7 + 9 bằng bao nhiêu?', opts: o4('25', '20', '30', '24'), ans: 'A', why: 'Tổng của 5 số lẻ đầu tiên = 5 × 5 = 25.' },
    { sec: 'Đếm số hạng', name: 'Câu 6', pts: 1, text: 'Dãy 100, 95, 90, ..., 0 có bao nhiêu số?', opts: o4('21', '20', '22', '100'), ans: 'A', why: 'Số số hạng = (100 − 0) : 5 + 1 = 21.' },
    { sec: 'Số chính phương', name: 'Câu 7', pts: 1, text: 'Số hạng thứ 6 của dãy 1, 4, 9, 16, 25, ... là bao nhiêu?', opts: o4('36', '30', '32', '49'), ans: 'A', why: 'Đây là các số chính phương: số thứ 6 là 6 × 6 = 36.' },
    { sec: 'Tìm n', name: 'Câu 8', pts: 1, text: 'Nếu 1 + 2 + 3 + ... + n = 55 thì n bằng bao nhiêu?', opts: o4('10', '11', '9', '55'), ans: 'A', why: '1 + 2 + ... + 10 = 55 nên n = 10.' },
    { sec: 'Tổng dãy đều', name: 'Câu 9', pts: 1, text: 'Dãy 5, 10, 15, ..., 100 có 20 số. Tổng của dãy là bao nhiêu?', opts: o4('1050', '1000', '2100', '525'), ans: 'A', why: 'Tổng = (5 + 100) × 20 : 2 = 105 × 10 = 1050.' },
    { sec: 'Số hạng lớn', name: 'Câu 10', pts: 1, text: 'Số hạng thứ 100 của dãy số lẻ 1, 3, 5, 7, ... là bao nhiêu?', opts: o4('199', '200', '201', '100'), ans: 'A', why: 'Số lẻ thứ n là 2n − 1; thứ 100 là 2 × 100 − 1 = 199.' },
  ],
},

/* ═══════════ ĐỀ 8 — HÌNH HỌC NÂNG CAO ═══════════ */
{
  id: 5828, title: 'Đề 8 · Hình học nâng cao', time: 20,
  questions: [
    { sec: 'Chu vi', name: 'Câu 1', pts: 1, text: 'Hình vuông có chu vi 20 cm. Cạnh của nó dài bao nhiêu?', opts: o4('5 cm', '4 cm', '10 cm', '80 cm'), ans: 'A', why: 'Cạnh = chu vi : 4 = 20 : 4 = 5 (cm).' },
    { sec: 'Diện tích', name: 'Câu 2', pts: 1, text: 'Hình vuông cạnh 5 cm có diện tích bao nhiêu?', opts: o4('25 cm²', '20 cm²', '10 cm²', '50 cm²'), ans: 'A', why: 'S = 5 × 5 = 25 (cm²).' },
    { sec: 'Chu vi', name: 'Câu 3', pts: 1, text: 'Hình chữ nhật dài 8 cm, rộng 3 cm có chu vi bao nhiêu?', opts: o4('22 cm', '24 cm', '11 cm', '48 cm'), ans: 'A', why: 'Chu vi = (8 + 3) × 2 = 22 (cm).' },
    { sec: 'Diện tích', name: 'Câu 4', pts: 1, text: 'Hình chữ nhật dài 8 cm, rộng 3 cm có diện tích bao nhiêu?', opts: o4('24 cm²', '22 cm²', '11 cm²', '48 cm²'), ans: 'A', why: 'S = 8 × 3 = 24 (cm²).' },
    { sec: 'Tam giác', name: 'Câu 5', pts: 1, text: 'Tam giác có đáy 10 cm, chiều cao 4 cm có diện tích bao nhiêu?', opts: o4('20 cm²', '40 cm²', '14 cm²', '25 cm²'), ans: 'A', why: 'S = (10 × 4) : 2 = 20 (cm²).' },
    { sec: 'Suy luận', name: 'Câu 6', pts: 1, text: 'Nếu cạnh hình vuông tăng gấp đôi thì diện tích gấp lên mấy lần?', opts: o4('4 lần', '2 lần', '3 lần', '8 lần'), ans: 'A', why: 'Cạnh gấp đôi thì diện tích gấp 2 × 2 = 4 lần.' },
    { sec: 'Thể tích', name: 'Câu 7', pts: 1, text: 'Hình lập phương cạnh 2 cm có thể tích bao nhiêu?', opts: o4('8 cm³', '6 cm³', '4 cm³', '12 cm³'), ans: 'A', why: 'V = 2 × 2 × 2 = 8 (cm³).' },
    { sec: 'Hình tròn', name: 'Câu 8', pts: 1, text: 'Hình tròn bán kính 10 cm có diện tích bao nhiêu (lấy π = 3,14)?', opts: o4('314 cm²', '62,8 cm²', '31,4 cm²', '100 cm²'), ans: 'A', why: 'S = 10 × 10 × 3,14 = 314 (cm²).' },
    { sec: 'Hình tròn', name: 'Câu 9', pts: 1, text: 'Hình tròn có đường kính 10 cm có chu vi bao nhiêu (lấy π = 3,14)?', opts: o4('31,4 cm', '314 cm', '62,8 cm', '15,7 cm'), ans: 'A', why: 'C = đường kính × 3,14 = 10 × 3,14 = 31,4 (cm).' },
    { sec: 'Hình thang', name: 'Câu 10', pts: 1, text: 'Hình thang có hai đáy 6 cm và 4 cm, chiều cao 5 cm có diện tích bao nhiêu?', opts: o4('25 cm²', '50 cm²', '30 cm²', '15 cm²'), ans: 'A', why: 'S = (6 + 4) × 5 : 2 = 50 : 2 = 25 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 9 — TOÁN ĐỐ TỔNG HỢP ═══════════ */
{
  id: 5829, title: 'Đề 9 · Toán đố tổng hợp', time: 20,
  questions: [
    { sec: 'Giá tiền', name: 'Câu 1', pts: 1, text: 'Mua 3 kg gạo hết 45 000 đồng. 1 kg gạo giá bao nhiêu?', opts: o4('15 000 đồng', '45 000 đồng', '48 000 đồng', '135 000 đồng'), ans: 'A', why: '45 000 : 3 = 15 000 (đồng).' },
    { sec: 'Người – ngày', name: 'Câu 2', pts: 1, text: '5 người ăn hết số gạo trong 10 ngày. 10 người ăn hết số gạo đó trong mấy ngày?', opts: o4('5 ngày', '20 ngày', '2 ngày', '15 ngày'), ans: 'A', why: 'Số người gấp đôi thì số ngày giảm một nửa: 10 : 2 = 5 ngày.' },
    { sec: 'Tuổi', name: 'Câu 3', pts: 1, text: 'Bố 40 tuổi, con 10 tuổi. Sau bao nhiêu năm nữa tuổi bố gấp đôi tuổi con?', opts: o4('20 năm', '10 năm', '30 năm', '15 năm'), ans: 'A', why: 'Hiệu tuổi luôn 30. Khi bố gấp đôi con thì con bằng hiệu = 30; vậy 30 − 10 = 20 năm nữa.' },
    { sec: 'Tổng – tỉ', name: 'Câu 4', pts: 1, text: 'Hai số có tỉ số 3 : 5 và tổng bằng 40. Số lớn là bao nhiêu?', opts: o4('25', '15', '24', '30'), ans: 'A', why: 'Tổng số phần = 3 + 5 = 8; số lớn = 40 : 8 × 5 = 25.' },
    { sec: 'Chia tỉ lệ', name: 'Câu 5', pts: 1, text: 'Chia 60 viên bi thành ba phần theo tỉ lệ 1 : 2 : 3. Phần lớn nhất có bao nhiêu viên?', opts: o4('30', '20', '10', '36'), ans: 'A', why: 'Tổng số phần = 1 + 2 + 3 = 6; phần lớn = 60 : 6 × 3 = 30.' },
    { sec: 'Vòi nước', name: 'Câu 6', pts: 1, text: 'Một vòi chảy 5 lít mỗi phút. Cần bao lâu để đầy bể 100 lít?', opts: o4('20 phút', '500 phút', '25 phút', '95 phút'), ans: 'A', why: '100 : 5 = 20 (phút).' },
    { sec: 'Giảm giá', name: 'Câu 7', pts: 1, text: 'Sau khi giảm 20%, một món hàng còn 80 000 đồng. Giá gốc là bao nhiêu?', opts: o4('100 000 đồng', '96 000 đồng', '64 000 đồng', '160 000 đồng'), ans: 'A', why: 'Còn lại 80% = 80 000 → giá gốc = 80 000 : 80 × 100 = 100 000 (đồng).' },
    { sec: 'Tìm số', name: 'Câu 8', pts: 1, text: 'Một số nhân với 4 rồi cộng 3 thì được 23. Số đó là bao nhiêu?', opts: o4('5', '6', '4', '20'), ans: 'A', why: 'Số × 4 = 23 − 3 = 20 → số = 20 : 4 = 5.' },
    { sec: 'Tuổi', name: 'Câu 9', pts: 1, text: 'Tuổi mẹ gấp 3 lần tuổi con, tổng số tuổi là 48. Con bao nhiêu tuổi?', opts: o4('12', '16', '36', '24'), ans: 'A', why: 'Tổng số phần = 1 + 3 = 4; tuổi con = 48 : 4 = 12.' },
    { sec: 'Tổng – tỉ', name: 'Câu 10', pts: 1, text: 'Đàn gà có 20 con, số gà mái gấp 3 lần số gà trống. Có mấy con gà trống?', opts: o4('5', '15', '10', '4'), ans: 'A', why: 'Tổng số phần = 1 + 3 = 4; gà trống = 20 : 4 = 5 con.' },
  ],
},

/* ═══════════ ĐỀ 10 — ĐỀ TỔNG HỢP HSG LỚP 5 ═══════════ */
{
  id: 5830, title: 'Đề 10 · Tổng hợp bồi dưỡng HSG', time: 20,
  questions: [
    { sec: 'Gà và chó', name: 'Câu 1', pts: 1, text: 'Gà và chó có 20 con, 56 chân. Có mấy con chó?', opts: o4('8', '10', '6', '12'), ans: 'A', why: 'Toàn gà: 40 chân, thiếu 16; 16 : 2 = 8 con chó.' },
    { sec: 'Chuyển động', name: 'Câu 2', pts: 1, text: 'Hai xe ngược chiều cách nhau 120 km, vận tốc 40 và 20 km/giờ. Sau mấy giờ gặp nhau?', opts: o4('2 giờ', '3 giờ', '6 giờ', '4 giờ'), ans: 'A', why: 'Tổng vận tốc = 60; thời gian = 120 : 60 = 2 (giờ).' },
    { sec: 'Tổng – tỉ', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 50 và tỉ số 2 : 3. Số lớn là bao nhiêu?', opts: o4('30', '20', '25', '35'), ans: 'A', why: 'Tổng số phần = 5; số lớn = 50 : 5 × 3 = 30.' },
    { sec: 'Phần trăm', name: 'Câu 4', pts: 1, text: '25% của 200 là bao nhiêu?', opts: o4('50', '25', '75', '100'), ans: 'A', why: '25% của 200 = 200 : 4 = 50.' },
    { sec: 'Trung bình cộng', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của 10, 20, 30, 40 là bao nhiêu?', opts: o4('25', '100', '30', '20'), ans: 'A', why: '(10 + 20 + 30 + 40) : 4 = 100 : 4 = 25.' },
    { sec: 'Tổng dãy', name: 'Câu 6', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 100 bằng bao nhiêu?', opts: o4('5050', '5000', '10000', '1000'), ans: 'A', why: 'Có 50 cặp, mỗi cặp bằng 101: 101 × 50 = 5050.' },
    { sec: 'ƯCLN', name: 'Câu 7', pts: 1, text: 'Ước chung lớn nhất của 12 và 8 là bao nhiêu?', opts: o4('4', '2', '24', '6'), ans: 'A', why: 'Ước chung của 12 và 8: 1, 2, 4 → lớn nhất là 4.' },
    { sec: 'Vòi nước', name: 'Câu 8', pts: 1, text: 'Vòi 1 chảy đầy bể trong 3 giờ, vòi 2 trong 6 giờ. Mở cả hai vòi thì mấy giờ đầy?', opts: o4('2 giờ', '9 giờ', '4 giờ', '3 giờ'), ans: 'A', why: 'Mỗi giờ 1/3 + 1/6 = 1/2 bể nên đầy sau 2 giờ.' },
    { sec: 'Diện tích', name: 'Câu 9', pts: 1, text: 'Hình chữ nhật dài 10 cm, rộng 6 cm có diện tích bao nhiêu?', opts: o4('60 cm²', '32 cm²', '16 cm²', '600 cm²'), ans: 'A', why: 'S = 10 × 6 = 60 (cm²).' },
    { sec: 'Tuổi', name: 'Câu 10', pts: 1, text: 'Bố gấp 4 lần tuổi con, bố hơn con 30 tuổi. Con bao nhiêu tuổi?', opts: o4('10', '8', '12', '40'), ans: 'A', why: 'Tuổi con = 30 : (4 − 1) = 10.' },
  ],
},

/* ═══════════ ĐỀ 11 — CHUYỂN ĐỘNG ═══════════ */
{
  id: 8301, title: 'Đề 11 · Chuyển động tổng hợp', time: 20,
  questions: [
    { sec: 'Ngược chiều', name: 'Câu 1', pts: 1, text: 'Hai xe đi ngược chiều từ hai điểm cách nhau 150 km, vận tốc 45 km/giờ và 30 km/giờ. Sau mấy giờ hai xe gặp nhau?', opts: o4('3 giờ', '2 giờ', '5 giờ', '2,5 giờ'), ans: 'B', why: 'Tổng vận tốc = 45 + 30 = 75; thời gian = 150 : 75 = 2 (giờ).' },
    { sec: 'Cùng chiều', name: 'Câu 2', pts: 1, text: 'Hai xe cùng chiều cách nhau 24 km, xe sau 54 km/giờ đuổi xe trước 42 km/giờ. Sau mấy giờ đuổi kịp?', opts: o4('4 giờ', '1 giờ', '2 giờ', '3 giờ'), ans: 'C', why: 'Hiệu vận tốc = 54 − 42 = 12; thời gian = 24 : 12 = 2 (giờ).' },
    { sec: 'Dòng nước', name: 'Câu 3', pts: 1, text: 'Ca nô xuôi dòng: vận tốc ca nô 15 km/giờ, dòng nước 5 km/giờ. Đi 40 km hết bao lâu?', opts: o4('4 giờ', '8 giờ', '2,5 giờ', '2 giờ'), ans: 'D', why: 'Vận tốc xuôi = 15 + 5 = 20; thời gian = 40 : 20 = 2 (giờ).' },
    { sec: 'Dòng nước', name: 'Câu 4', pts: 1, text: 'Ca nô ngược dòng: vận tốc ca nô 15 km/giờ, dòng nước 5 km/giờ. Đi 30 km hết bao lâu?', opts: o4('3 giờ', '2 giờ', '1,5 giờ', '6 giờ'), ans: 'A', why: 'Vận tốc ngược = 15 − 5 = 10; thời gian = 30 : 10 = 3 (giờ).' },
    { sec: 'Qua cầu', name: 'Câu 5', pts: 1, text: 'Đoàn tàu dài 150 m chạy qua một cây cầu dài 350 m với vận tốc 10 m/giây. Thời gian tàu qua hết cầu là bao lâu?', opts: o4('35 giây', '50 giây', '20 giây', '65 giây'), ans: 'B', why: 'Quãng đường = 150 + 350 = 500 m; thời gian = 500 : 10 = 50 (giây).' },
    { sec: 'Cùng chiều', name: 'Câu 6', pts: 1, text: 'Xe máy khởi hành lúc 6 giờ với vận tốc 40 km/giờ. Lúc 7 giờ, một ô tô 60 km/giờ đuổi theo cùng đường. Ô tô đuổi kịp xe máy lúc mấy giờ?', opts: o4('8 giờ', '10 giờ', '9 giờ', '7 giờ 30'), ans: 'C', why: 'Lúc 7 giờ xe máy đã đi trước 40 km; hiệu vận tốc = 20 km/giờ; đuổi kịp sau 40 : 20 = 2 giờ, tức lúc 9 giờ.' },
    { sec: 'Vận tốc', name: 'Câu 7', pts: 1, text: 'Một người đi quãng đường 120 km trong 3 giờ. Vận tốc trung bình là bao nhiêu?', opts: o4('60 km/giờ', '30 km/giờ', '45 km/giờ', '40 km/giờ'), ans: 'D', why: 'v = 120 : 3 = 40 (km/giờ).' },
    { sec: 'Ngược chiều', name: 'Câu 8', pts: 1, text: 'Hai người đi bộ ngược chiều từ hai điểm cách nhau 18 km, một người 4 km/giờ, người kia 5 km/giờ. Sau mấy giờ gặp nhau?', opts: o4('2 giờ', '3 giờ', '1,5 giờ', '9 giờ'), ans: 'A', why: 'Tổng vận tốc = 4 + 5 = 9; thời gian = 18 : 9 = 2 (giờ).' },
    { sec: 'Dòng nước', name: 'Câu 9', pts: 1, text: 'Ca nô có vận tốc xuôi dòng 24 km/giờ và ngược dòng 16 km/giờ. Vận tốc dòng nước là bao nhiêu?', opts: o4('8 km/giờ', '4 km/giờ', '20 km/giờ', '2 km/giờ'), ans: 'B', why: 'Vận tốc dòng nước = (24 − 16) : 2 = 4 (km/giờ).' },
    { sec: 'Vận tốc', name: 'Câu 10', pts: 1, text: 'Một người đi 30 km trong 45 phút. Vận tốc trung bình là bao nhiêu?', opts: o4('30 km/giờ', '45 km/giờ', '40 km/giờ', '35 km/giờ'), ans: 'C', why: '45 phút = 0,75 giờ; v = 30 : 0,75 = 40 (km/giờ).' },
  ],
},

/* ═══════════ ĐỀ 12 — CÔNG VIỆC, VÒI NƯỚC ═══════════ */
{
  id: 8302, title: 'Đề 12 · Công việc chung và vòi nước', time: 20,
  questions: [
    { sec: 'Làm chung', name: 'Câu 1', pts: 1, text: 'A làm xong một việc trong 6 ngày, B làm xong việc đó trong 3 ngày. Cả hai cùng làm thì mấy ngày xong?', opts: o4('3 ngày', '2 ngày', '9 ngày', '4 ngày'), ans: 'B', why: 'Mỗi ngày hai người làm 1/6 + 1/3 = 1/2 việc nên xong sau 2 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 2', pts: 1, text: 'Vòi 1 chảy đầy bể trong 4 giờ, vòi 2 chảy đầy bể trong 12 giờ. Mở cả hai vòi thì mấy giờ đầy bể?', opts: o4('8 giờ', '6 giờ', '3 giờ', '16 giờ'), ans: 'C', why: 'Mỗi giờ hai vòi chảy 1/4 + 1/12 = 4/12 = 1/3 bể nên đầy sau 3 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 3', pts: 1, text: '6 người làm xong một việc trong 8 ngày. Hỏi 4 người (cùng năng suất) làm xong trong mấy ngày?', opts: o4('6 ngày', '5 ngày', '16 ngày', '12 ngày'), ans: 'D', why: 'Công việc = 6 × 8 = 48 người-ngày; 4 người làm 48 : 4 = 12 ngày.' },
    { sec: 'Làm chung', name: 'Câu 4', pts: 1, text: 'A làm một mình xong việc trong 12 ngày. A và B cùng làm thì 4 ngày xong. B làm một mình mất mấy ngày?', opts: o4('6 ngày', '8 ngày', '16 ngày', '3 ngày'), ans: 'A', why: 'Mỗi ngày B làm 1/4 − 1/12 = 2/12 = 1/6 việc nên B làm một mình 6 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 5', pts: 1, text: 'Bể rỗng, vòi chảy vào đầy bể trong 6 giờ, vòi tháo cạn bể đầy trong 12 giờ. Mở cả hai vòi thì mấy giờ đầy bể?', opts: o4('6 giờ', '12 giờ', '4 giờ', '18 giờ'), ans: 'B', why: 'Mỗi giờ mức nước tăng 1/6 − 1/12 = 1/12 bể nên đầy sau 12 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 6', pts: 1, text: '10 công nhân xây xong tường trong 15 ngày. Muốn xây xong trong 10 ngày thì cần bao nhiêu công nhân?', opts: o4('20 người', '25 người', '15 người', '12 người'), ans: 'C', why: 'Công việc = 10 × 15 = 150 người-ngày; cần 150 : 10 = 15 người.' },
    { sec: 'Công việc', name: 'Câu 7', pts: 1, text: 'Một người làm được 1/2 công việc trong 3 giờ. Người đó làm xong cả công việc trong mấy giờ?', opts: o4('3 giờ', '9 giờ', '12 giờ', '6 giờ'), ans: 'D', why: '1/2 việc mất 3 giờ nên cả việc mất 6 giờ.' },
    { sec: 'Vòi nước', name: 'Câu 8', pts: 1, text: 'Ba vòi giống nhau cùng chảy thì đầy bể trong 2 giờ. Một vòi chảy một mình thì đầy bể trong mấy giờ?', opts: o4('6 giờ', '2 giờ', '9 giờ', '3 giờ'), ans: 'A', why: 'Ba vòi mỗi giờ chảy 1/2 bể nên một vòi chảy 1/6 bể, đầy sau 6 giờ.' },
    { sec: 'Năng suất', name: 'Câu 9', pts: 1, text: '8 máy dệt trong 6 giờ dệt được 480 m vải. Hỏi 1 máy trong 1 giờ dệt được bao nhiêu mét vải?', opts: o4('8 m', '10 m', '60 m', '16 m'), ans: 'B', why: '480 : (8 × 6) = 480 : 48 = 10 (m).' },
    { sec: 'Làm chung', name: 'Câu 10', pts: 1, text: 'A và B cùng làm một việc thì 4 ngày xong. A làm một mình mất 6 ngày. B làm một mình mất mấy ngày?', opts: o4('8 ngày', '10 ngày', '12 ngày', '24 ngày'), ans: 'C', why: 'Mỗi ngày B làm 1/4 − 1/6 = 1/12 việc nên B làm một mình 12 ngày.' },
  ],
},

/* ═══════════ ĐỀ 13 — TỈ SỐ PHẦN TRĂM NÂNG CAO ═══════════ */
{
  id: 8303, title: 'Đề 13 · Tỉ số phần trăm nâng cao', time: 20,
  questions: [
    { sec: 'Tìm số', name: 'Câu 1', pts: 1, text: 'Số học sinh nữ là 18 bạn, chiếm 45% số học sinh cả lớp. Lớp có bao nhiêu học sinh?', opts: o4('45 học sinh', '40 học sinh', '36 học sinh', '50 học sinh'), ans: 'B', why: 'Số học sinh = 18 : 45 × 100 = 40.' },
    { sec: 'Tăng – giảm', name: 'Câu 2', pts: 1, text: 'Một số tăng thêm 25% rồi lại giảm đi 20% (của số vừa có). Kết quả so với số ban đầu thế nào?', opts: o4('Tăng 5%', 'Giảm 5%', 'Bằng ban đầu', 'Tăng 45%'), ans: 'C', why: 'Coi số ban đầu là 100: tăng 25% thành 125, giảm 20% còn 125 × 0,8 = 100, đúng bằng ban đầu.' },
    { sec: 'Giảm liên tiếp', name: 'Câu 3', pts: 1, text: 'Một mặt hàng giảm giá 10%, rồi giảm tiếp 10% (của giá đã giảm). So với giá gốc, tổng cộng đã giảm bao nhiêu phần trăm?', opts: o4('20%', '10%', '18%', '19%'), ans: 'D', why: 'Coi giá gốc 100: giảm còn 90, giảm tiếp 10% còn 81; đã giảm 100 − 81 = 19%.' },
    { sec: 'Bài toán', name: 'Câu 4', pts: 1, text: 'Lớp có 40 học sinh: 25% đạt giỏi, 50% đạt khá, còn lại đạt trung bình. Có bao nhiêu bạn trung bình?', opts: o4('10 bạn', '20 bạn', '15 bạn', '5 bạn'), ans: 'A', why: 'Trung bình chiếm 100% − 25% − 50% = 25% của 40 = 10 bạn.' },
    { sec: 'Vốn – lãi', name: 'Câu 5', pts: 1, text: 'Bán một món hàng với giá 120 000 đồng thì lãi 20% so với tiền vốn. Tiền vốn là bao nhiêu?', opts: o4('96 000 đồng', '100 000 đồng', '144 000 đồng', '140 000 đồng'), ans: 'B', why: 'Giá bán bằng 120% vốn; vốn = 120 000 : 120 × 100 = 100 000 (đồng).' },
    { sec: 'Phần trăm kép', name: 'Câu 6', pts: 1, text: 'Tính 30% của 30% của 1000.', opts: o4('300', '180', '90', '600'), ans: 'C', why: '30% của 1000 = 300; 30% của 300 = 90.' },
    { sec: 'Tính %', name: 'Câu 7', pts: 1, text: 'Một lớp có 24 nam và 16 nữ. Nữ chiếm bao nhiêu phần trăm số học sinh cả lớp?', opts: o4('60%', '16%', '24%', '40%'), ans: 'D', why: 'Cả lớp 40 bạn; nữ = 16 : 40 = 40%.' },
    { sec: 'Tăng %', name: 'Câu 8', pts: 1, text: 'Năm ngoái xã có 5000 người, năm nay dân số tăng 4%. Năm nay xã có bao nhiêu người?', opts: o4('5200 người', '5040 người', '4800 người', '5400 người'), ans: 'A', why: 'Tăng 4% của 5000 = 200; năm nay = 5000 + 200 = 5200 (người).' },
    { sec: 'Tìm gốc', name: 'Câu 9', pts: 1, text: 'Tiền lãi bằng 15% tiền vốn và bằng 45 000 đồng. Tiền vốn là bao nhiêu?', opts: o4('270 000 đồng', '300 000 đồng', '315 000 đồng', '450 000 đồng'), ans: 'B', why: 'Vốn = 45 000 : 15 × 100 = 300 000 (đồng).' },
    { sec: 'Tìm gốc', name: 'Câu 10', pts: 1, text: 'Một thùng hàng sau khi giảm 40% còn 90 000 đồng. Giá gốc là bao nhiêu?', opts: o4('126 000 đồng', '120 000 đồng', '150 000 đồng', '225 000 đồng'), ans: 'C', why: 'Còn 60% = 90 000; giá gốc = 90 000 : 60 × 100 = 150 000 (đồng).' },
  ],
},

/* ═══════════ ĐỀ 14 — TRUNG BÌNH CỘNG CÓ ĐIỀU KIỆN ═══════════ */
{
  id: 8304, title: 'Đề 14 · Trung bình cộng có điều kiện', time: 20,
  questions: [
    { sec: 'Tìm số', name: 'Câu 1', pts: 1, text: 'Trung bình cộng của 4 số là 20; ba số đầu là 15, 18, 25. Số thứ tư là bao nhiêu?', opts: o4('20', '18', '24', '22'), ans: 'D', why: 'Tổng 4 số = 20 × 4 = 80; số thứ tư = 80 − (15 + 18 + 25) = 80 − 58 = 22.' },
    { sec: 'Bỏ bớt', name: 'Câu 2', pts: 1, text: 'Trung bình cộng của 5 số là 30. Bỏ đi một số thì trung bình 4 số còn lại là 28. Số bị bỏ là bao nhiêu?', opts: o4('38', '32', '30', '40'), ans: 'A', why: 'Tổng 5 số = 150, tổng 4 số = 112; số bị bỏ = 150 − 112 = 38.' },
    { sec: 'Tỉ số', name: 'Câu 3', pts: 1, text: 'Trung bình cộng của hai số là 40, số này gấp 3 lần số kia. Số lớn là bao nhiêu?', opts: o4('50', '60', '30', '20'), ans: 'B', why: 'Tổng hai số = 80, tỉ số 1 : 3; số lớn = 80 : 4 × 3 = 60.' },
    { sec: 'Thêm số', name: 'Câu 4', pts: 1, text: 'Trung bình cộng tuổi của 3 bạn nam là 12. Thêm một bạn nữ 16 tuổi thì trung bình tuổi cả 4 bạn là bao nhiêu?', opts: o4('14', '15', '13', '12'), ans: 'C', why: 'Tổng 3 bạn nam = 36, thêm 16 thành 52; trung bình = 52 : 4 = 13.' },
    { sec: 'Thêm số', name: 'Câu 5', pts: 1, text: 'Trung bình cộng của 6 số là 10. Thêm hai số 16 và 20 thì trung bình cộng của 8 số là bao nhiêu?', opts: o4('10', '15', '13', '12'), ans: 'D', why: 'Tổng 6 số = 60, thêm 36 thành 96; trung bình = 96 : 8 = 12.' },
    { sec: 'Vận tốc', name: 'Câu 6', pts: 1, text: 'Một xe đi 3 giờ đầu mỗi giờ 40 km, 2 giờ sau mỗi giờ 50 km. Vận tốc trung bình cả quãng đường là bao nhiêu?', opts: o4('44 km/giờ', '45 km/giờ', '40 km/giờ', '50 km/giờ'), ans: 'A', why: 'Tổng đường = 120 + 100 = 220 km trong 5 giờ; v trung bình = 220 : 5 = 44 (km/giờ).' },
    { sec: 'Số lẻ liên tiếp', name: 'Câu 7', pts: 1, text: 'Trung bình cộng của 3 số lẻ liên tiếp là 15. Số lớn nhất là bao nhiêu?', opts: o4('15', '17', '19', '13'), ans: 'B', why: 'Số ở giữa bằng trung bình = 15; ba số là 13, 15, 17 nên số lớn nhất là 17.' },
    { sec: 'Biến đổi', name: 'Câu 8', pts: 1, text: 'Năm số có trung bình cộng là 6. Nếu mỗi số đều tăng thêm 4 thì trung bình cộng mới là bao nhiêu?', opts: o4('6', '24', '10', '14'), ans: 'C', why: 'Mỗi số tăng 4 thì trung bình cũng tăng 4: 6 + 4 = 10.' },
    { sec: 'Điểm số', name: 'Câu 9', pts: 1, text: 'Điểm trung bình 4 bài kiểm tra là 7. Bài thứ năm được 9 điểm. Điểm trung bình cả 5 bài là bao nhiêu?', opts: o4('7,4', '7,5', '8', '7,2'), ans: 'A', why: 'Tổng 4 bài = 28, thêm 9 thành 37; trung bình = 37 : 5 = 7,4.' },
    { sec: 'Hai tổ', name: 'Câu 10', pts: 1, text: 'Tổ A có 5 người trung bình mỗi người trồng 8 cây, tổ B có 5 người trung bình mỗi người trồng 6 cây. Trung bình mỗi người của cả hai tổ trồng bao nhiêu cây?', opts: o4('6', '7', '8', '14'), ans: 'B', why: 'Tổng cây = 40 + 30 = 70, tổng người = 10; trung bình = 70 : 10 = 7 (cây).' },
  ],
},

/* ═══════════ ĐỀ 15 — SỐ HỌC (CHỮ SỐ TẬN CÙNG, CHIA HẾT, TÌM SỐ) ═══════════ */
{
  id: 8305, title: 'Đề 15 · Số học: tận cùng, chia hết, tìm số', time: 20,
  questions: [
    { sec: 'Chữ số tận cùng', name: 'Câu 1', pts: 1, text: 'Tích của mười thừa số 2 (tức 2 × 2 × ... × 2, mười số 2) có chữ số tận cùng là gì?', opts: o4('4', '2', '8', '6'), ans: 'A', why: 'Chữ số tận cùng của luỹ thừa của 2 lặp theo chu kì 2, 4, 8, 6; số mũ 10 chia 4 dư 2 nên tận cùng là 4 (2^10 = 1024).' },
    { sec: 'Chữ số tận cùng', name: 'Câu 2', pts: 1, text: 'Tích 1 × 2 × 3 × ... × 10 có chữ số tận cùng là gì?', opts: o4('2', '0', '5', '8'), ans: 'B', why: 'Tích chứa cả thừa số 2 và 5 nên chia hết cho 10, tận cùng là 0.' },
    { sec: 'Chia hết cho 9', name: 'Câu 3', pts: 1, text: 'Tìm chữ số a để số có ba chữ số 3a5 chia hết cho 9.', opts: o4('4', '7', '1', '0'), ans: 'C', why: 'Tổng chữ số 3 + a + 5 = 8 + a phải chia hết cho 9 nên a = 1.' },
    { sec: 'Tìm số', name: 'Câu 4', pts: 1, text: 'Số nhỏ nhất có ba chữ số chia hết cho cả 2, 3 và 5 là số nào?', opts: o4('100', '105', '150', '120'), ans: 'D', why: 'Số chia hết cho 2, 3, 5 thì chia hết cho 30; bội của 30 đầu tiên có ba chữ số là 120.' },
    { sec: 'Tìm số', name: 'Câu 5', pts: 1, text: 'Số có hai chữ số nhỏ nhất mà chia 5 dư 3 và chia 3 dư 2 là số nào?', opts: o4('23', '28', '38', '13'), ans: 'A', why: '23 chia 5 được 4 dư 3, chia 3 được 7 dư 2; đây là số hai chữ số nhỏ nhất thoả mãn.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 6', pts: 1, text: 'Chữ số tận cùng của 7 × 7 × 7 × 7 là gì?', opts: o4('7', '1', '9', '3'), ans: 'B', why: 'Tận cùng của luỹ thừa của 7 lặp theo 7, 9, 3, 1; 7^4 tận cùng là 1 (2401).' },
    { sec: 'Chia hết', name: 'Câu 7', pts: 1, text: 'Số có bốn chữ số 12ab chia hết cho cả 2 và 5. Chữ số b là bao nhiêu?', opts: o4('5', '2', '0', '4'), ans: 'C', why: 'Số chia hết cho cả 2 và 5 thì tận cùng là 0 nên b = 0.' },
    { sec: 'Đếm số', name: 'Câu 8', pts: 1, text: 'Có bao nhiêu số có hai chữ số chia hết cho 9?', opts: o4('9', '12', '8', '10'), ans: 'D', why: 'Các số 18, 27, ..., 99 có (99 − 18) : 9 + 1 = 10 số.' },
    { sec: 'Tìm số', name: 'Câu 9', pts: 1, text: 'Một số chia cho 7 được thương 6 và dư 3. Số đó là bao nhiêu?', opts: o4('45', '42', '48', '39'), ans: 'A', why: 'Số bị chia = 7 × 6 + 3 = 45.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 10', pts: 1, text: 'Tích của 5 với một số lẻ bất kì luôn có chữ số tận cùng là gì?', opts: o4('0', '5', '1', '25'), ans: 'B', why: '5 nhân số lẻ luôn tận cùng là 5 (ví dụ 5 × 3 = 15, 5 × 7 = 35).' },
  ],
},

/* ═══════════ ĐỀ 16 — DÃY SỐ VÀ TỔNG DÃY ═══════════ */
{
  id: 8306, title: 'Đề 16 · Dãy số và tổng dãy', time: 20,
  questions: [
    { sec: 'Tổng chẵn', name: 'Câu 1', pts: 1, text: 'Tổng 2 + 4 + 6 + ... + 100 bằng bao nhiêu?', opts: o4('2500', '5050', '2550', '1275'), ans: 'C', why: 'Có 50 số; tổng = (2 + 100) × 50 : 2 = 102 × 25 = 2550.' },
    { sec: 'Số hạng', name: 'Câu 2', pts: 1, text: 'Số hạng thứ 20 của dãy 1, 4, 7, 10, ... là bao nhiêu?', opts: o4('60', '61', '55', '58'), ans: 'D', why: 'Dãy cách 3; số thứ 20 = 1 + 19 × 3 = 58.' },
    { sec: 'Tổng lẻ', name: 'Câu 3', pts: 1, text: 'Tổng 1 + 3 + 5 + ... + 99 bằng bao nhiêu?', opts: o4('2500', '2450', '5000', '1250'), ans: 'A', why: 'Đây là tổng 50 số lẻ đầu tiên = 50 × 50 = 2500.' },
    { sec: 'Đếm số hạng', name: 'Câu 4', pts: 1, text: 'Dãy 5, 10, 15, ..., 200 có bao nhiêu số?', opts: o4('39', '40', '41', '20'), ans: 'B', why: 'Số số hạng = 200 : 5 = 40.' },
    { sec: 'Tìm n', name: 'Câu 5', pts: 1, text: 'Nếu 1 + 2 + 3 + ... + n = 210 thì n bằng bao nhiêu?', opts: o4('21', '19', '20', '15'), ans: 'C', why: 'n × (n + 1) = 420 = 20 × 21 nên n = 20.' },
    { sec: 'Quy luật tích', name: 'Câu 6', pts: 1, text: 'Số hạng thứ 8 của dãy 2, 6, 12, 20, 30, ... là bao nhiêu?', opts: o4('56', '64', '80', '72'), ans: 'D', why: 'Số hạng thứ n = n × (n + 1); thứ 8 = 8 × 9 = 72.' },
    { sec: 'Nhân đôi', name: 'Câu 7', pts: 1, text: 'Số hạng thứ 7 của dãy 1, 2, 4, 8, 16, ... là bao nhiêu?', opts: o4('64', '32', '128', '48'), ans: 'A', why: 'Mỗi số gấp đôi số trước: 1, 2, 4, 8, 16, 32, 64 — số thứ 7 là 64.' },
    { sec: 'Tổng chẵn', name: 'Câu 8', pts: 1, text: 'Tổng 10 số chẵn đầu tiên (2 + 4 + ... + 20) bằng bao nhiêu?', opts: o4('100', '110', '120', '90'), ans: 'B', why: 'Tổng = (2 + 20) × 10 : 2 = 22 × 5 = 110.' },
    { sec: 'Dãy giảm', name: 'Câu 9', pts: 1, text: 'Số hạng thứ 10 của dãy 100, 97, 94, ... là bao nhiêu?', opts: o4('70', '76', '73', '79'), ans: 'C', why: 'Dãy giảm 3 mỗi bước; số thứ 10 = 100 − 9 × 3 = 73.' },
    { sec: 'Đếm bội', name: 'Câu 10', pts: 1, text: 'Từ 1 đến 100 có bao nhiêu số chia hết cho 3?', opts: o4('30', '34', '32', '33'), ans: 'D', why: 'Các số 3, 6, ..., 99 có 99 : 3 = 33 số.' },
  ],
},

/* ═══════════ ĐỀ 17 — HÌNH HỌC (DIỆN TÍCH, CẮT – GHÉP, TỈ LỆ) ═══════════ */
{
  id: 8307, title: 'Đề 17 · Hình học: diện tích và tỉ lệ', time: 20,
  questions: [
    { sec: 'Chữ nhật', name: 'Câu 1', pts: 1, text: 'Hình chữ nhật có chiều dài gấp 3 lần chiều rộng và chu vi 48 cm. Chiều rộng là bao nhiêu?', opts: o4('6 cm', '8 cm', '12 cm', '4 cm'), ans: 'A', why: 'Nửa chu vi = 24 = rộng + 3 × rộng = 4 × rộng; rộng = 24 : 4 = 6 (cm).' },
    { sec: 'Hình vuông', name: 'Câu 2', pts: 1, text: 'Hình vuông có diện tích 36 cm². Chu vi của nó là bao nhiêu?', opts: o4('18 cm', '24 cm', '36 cm', '12 cm'), ans: 'B', why: 'Cạnh = 6 cm (vì 6 × 6 = 36); chu vi = 6 × 4 = 24 (cm).' },
    { sec: 'Tam giác', name: 'Câu 3', pts: 1, text: 'Tam giác có diện tích 24 cm² và đáy 8 cm. Chiều cao là bao nhiêu?', opts: o4('3 cm', '4 cm', '6 cm', '12 cm'), ans: 'C', why: 'Chiều cao = 2 × 24 : 8 = 6 (cm).' },
    { sec: 'Chữ nhật', name: 'Câu 4', pts: 1, text: 'Hình chữ nhật có diện tích 60 cm² và chiều dài 12 cm. Chu vi là bao nhiêu?', opts: o4('30 cm', '24 cm', '17 cm', '34 cm'), ans: 'D', why: 'Chiều rộng = 60 : 12 = 5 cm; chu vi = (12 + 5) × 2 = 34 (cm).' },
    { sec: 'Tỉ lệ', name: 'Câu 5', pts: 1, text: 'Nếu cạnh hình vuông tăng gấp 3 lần thì diện tích tăng gấp mấy lần?', opts: o4('9 lần', '3 lần', '6 lần', '12 lần'), ans: 'A', why: 'Diện tích tỉ lệ với bình phương cạnh: 3 × 3 = 9 lần.' },
    { sec: 'Hình thang', name: 'Câu 6', pts: 1, text: 'Hình thang có hai đáy 12 cm và 8 cm, chiều cao 6 cm. Diện tích là bao nhiêu?', opts: o4('50 cm²', '60 cm²', '120 cm²', '40 cm²'), ans: 'B', why: 'S = (12 + 8) × 6 : 2 = 120 : 2 = 60 (cm²).' },
    { sec: 'Cắt – ghép', name: 'Câu 7', pts: 1, text: 'Cắt một hình chữ nhật 8 cm × 6 cm theo một đường chéo được hai tam giác bằng nhau. Diện tích mỗi tam giác là bao nhiêu?', opts: o4('48 cm²', '12 cm²', '24 cm²', '16 cm²'), ans: 'C', why: 'Diện tích chữ nhật = 48 cm²; mỗi tam giác = 48 : 2 = 24 (cm²).' },
    { sec: 'Lập phương', name: 'Câu 8', pts: 1, text: 'Hình lập phương cạnh 3 cm có thể tích bao nhiêu?', opts: o4('9 cm³', '18 cm³', '12 cm³', '27 cm³'), ans: 'D', why: 'V = 3 × 3 × 3 = 27 (cm³).' },
    { sec: 'Hình tròn', name: 'Câu 9', pts: 1, text: 'Hình tròn bán kính 5 cm có diện tích bao nhiêu (lấy π = 3,14)?', opts: o4('78,5 cm²', '31,4 cm²', '15,7 cm²', '25 cm²'), ans: 'A', why: 'S = 5 × 5 × 3,14 = 78,5 (cm²).' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'Một hình vuông có chu vi 24 cm và một hình chữ nhật dài 8 cm rộng 4 cm. Hình nào có diện tích lớn hơn?', opts: o4('Hình vuông', 'Hình chữ nhật', 'Bằng nhau', 'Không so sánh được'), ans: 'A', why: 'Hình vuông cạnh 6 cm có diện tích 36 cm²; hình chữ nhật có 8 × 4 = 32 cm² nên hình vuông lớn hơn.' },
  ],
},

/* ═══════════ ĐỀ 18 — NGUYÊN LÍ ĐI-RÍCH-LÊ VÀ SUY LUẬN ═══════════ */
{
  id: 8308, title: 'Đề 18 · Nguyên lí Đi-rích-lê và suy luận', time: 20,
  questions: [
    { sec: 'Đi-rích-lê', name: 'Câu 1', pts: 1, text: 'Trong hộp có bi 4 màu để lẫn. Phải lấy ít nhất mấy viên để chắc chắn có 2 viên cùng màu?', opts: o4('4', '5', '8', '2'), ans: 'B', why: 'Có 4 màu, lấy 4 viên có thể mỗi màu một viên; viên thứ 5 chắc chắn trùng màu.' },
    { sec: 'Đi-rích-lê', name: 'Câu 2', pts: 1, text: 'Có 4 loại kẹo. Phải lấy ít nhất bao nhiêu cái để chắc chắn có 3 cái cùng loại?', opts: o4('7', '12', '9', '5'), ans: 'C', why: 'Mỗi loại lấy nhiều nhất 2 cái là 8 cái; cái thứ 9 chắc chắn tạo thành 3 cái cùng loại.' },
    { sec: 'Đi-rích-lê', name: 'Câu 3', pts: 1, text: 'Có 13 người. Chắc chắn có ít nhất mấy người sinh cùng một tháng?', opts: o4('2', '3', '12', '13'), ans: 'A', why: 'Có 12 tháng; 13 người thì theo nguyên lí Đi-rích-lê chắc chắn có ít nhất 2 người cùng tháng.' },
    { sec: 'Đi-rích-lê', name: 'Câu 4', pts: 1, text: 'Xếp 25 học sinh vào 6 nhóm. Chắc chắn có một nhóm có ít nhất mấy bạn?', opts: o4('3', '4', '6', '5'), ans: 'D', why: 'Nếu mỗi nhóm nhiều nhất 4 bạn thì chỉ 24 bạn; vậy phải có nhóm ≥ 5 bạn.' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, text: 'An về đích trước Bình, Cường về đích sau Bình. Ai về nhất?', opts: o4('An', 'Bình', 'Cường', 'Chưa rõ'), ans: 'A', why: 'An trước Bình, Bình trước Cường nên An về nhất.' },
    { sec: 'Thi đấu', name: 'Câu 6', pts: 1, text: '6 đội bóng thi đấu vòng tròn một lượt (mỗi cặp gặp nhau một lần). Có tất cả bao nhiêu trận?', opts: o4('12', '15', '30', '6'), ans: 'B', why: 'Số trận = 6 × 5 : 2 = 15.' },
    { sec: 'Logic', name: 'Câu 7', pts: 1, text: 'Lan, Mai, Hoa mặc ba áo đỏ, vàng, xanh khác nhau. Lan không mặc đỏ và không mặc vàng. Lan mặc màu gì?', opts: o4('đỏ', 'vàng', 'xanh', 'chưa rõ'), ans: 'C', why: 'Lan không mặc đỏ và vàng nên Lan mặc áo xanh.' },
    { sec: 'Đi-rích-lê', name: 'Câu 8', pts: 1, text: 'Một năm có 365 ngày. Với 367 người, chắc chắn có ít nhất 2 người sinh cùng một ngày trong năm — đúng hay sai?', opts: o4('Chưa chắc', 'Sai', 'Cần 730 người', 'Đúng'), ans: 'D', why: 'Chỉ có 365 ngày; 366 người đã đủ chắc chắn trùng ngày nên 367 người càng đúng.' },
    { sec: 'Đếm cách', name: 'Câu 9', pts: 1, text: 'Từ nhà đến trường có 3 con đường, từ trường đến thư viện có 2 con đường. Có mấy cách đi từ nhà qua trường tới thư viện?', opts: o4('6', '5', '3', '2'), ans: 'A', why: 'Số cách = 3 × 2 = 6.' },
    { sec: 'Đi-rích-lê', name: 'Câu 10', pts: 1, text: 'Bỏ 10 viên bi vào 4 hộp, mỗi hộp ít nhất 1 viên. Chắc chắn có một hộp chứa ít nhất mấy viên?', opts: o4('2', '3', '4', '5'), ans: 'B', why: 'Nếu mỗi hộp nhiều nhất 2 viên thì chỉ 8 viên; vậy phải có hộp ≥ 3 viên.' },
  ],
},

/* ═══════════ ĐỀ 19 — GÀ – CHÓ, TỔNG – HIỆU – TỈ ═══════════ */
{
  id: 8309, title: 'Đề 19 · Gà – chó và tổng – hiệu – tỉ', time: 20,
  questions: [
    { sec: 'Gà – chó', name: 'Câu 1', pts: 1, text: 'Gà và chó có 36 con, đếm được 100 chân. Có bao nhiêu con chó?', opts: o4('14', '12', '16', '10'), ans: 'A', why: 'Nếu toàn gà thì 72 chân, thiếu 28 chân; mỗi chó hơn gà 2 chân nên số chó = 28 : 2 = 14.' },
    { sec: 'Gà – thỏ', name: 'Câu 2', pts: 1, text: 'Vừa gà vừa thỏ có 12 con, đếm được 40 chân. Có bao nhiêu con thỏ?', opts: o4('6', '8', '4', '10'), ans: 'B', why: 'Nếu toàn gà thì 24 chân, thiếu 16; mỗi thỏ hơn gà 2 chân nên số thỏ = 16 : 2 = 8.' },
    { sec: 'Tổng – hiệu', name: 'Câu 3', pts: 1, text: 'Hai số có tổng 84 và hiệu 12. Số lớn là bao nhiêu?', opts: o4('40', '42', '48', '36'), ans: 'C', why: 'Số lớn = (84 + 12) : 2 = 48.' },
    { sec: 'Tổng – tỉ', name: 'Câu 4', pts: 1, text: 'Hai số có tổng 100 và tỉ số 3 : 7. Số bé là bao nhiêu?', opts: o4('70', '40', '60', '30'), ans: 'D', why: 'Tổng số phần = 10; số bé = 100 : 10 × 3 = 30.' },
    { sec: 'Tổng – hiệu', name: 'Câu 5', pts: 1, text: 'Lớp có 45 học sinh, số nữ hơn số nam 5 bạn. Có bao nhiêu bạn nữ?', opts: o4('25', '20', '30', '22'), ans: 'A', why: 'Số nữ = (45 + 5) : 2 = 25.' },
    { sec: 'Gà – chó', name: 'Câu 6', pts: 1, text: 'Có 20 con vừa gà vừa chó, số chân chó nhiều hơn số chân gà 20 chân. Có bao nhiêu con chó?', opts: o4('8', '10', '12', '6'), ans: 'B', why: 'Gọi số chó là c: 4c − 2(20 − c) = 20 → 6c − 40 = 20 → c = 10.' },
    { sec: 'Tổng – tỉ', name: 'Câu 7', pts: 1, text: 'Tổng hai số là 45, số này gấp 4 lần số kia. Số lớn là bao nhiêu?', opts: o4('9', '30', '36', '40'), ans: 'C', why: 'Tổng số phần = 5; số lớn = 45 : 5 × 4 = 36.' },
    { sec: 'Chia tỉ lệ', name: 'Câu 8', pts: 1, text: 'Ba lớp trồng 120 cây theo tỉ lệ 3 : 4 : 5. Lớp trồng nhiều nhất được bao nhiêu cây?', opts: o4('30', '40', '45', '50'), ans: 'D', why: 'Tổng số phần = 12; lớp nhiều nhất = 120 : 12 × 5 = 50 (cây).' },
    { sec: 'Hiệu – tỉ', name: 'Câu 9', pts: 1, text: 'Hiệu hai số là 24, số lớn gấp 3 lần số bé. Số bé là bao nhiêu?', opts: o4('12', '8', '36', '6'), ans: 'A', why: 'Hiệu ứng với 3 − 1 = 2 phần = 24; một phần = 12 nên số bé = 12.' },
    { sec: 'Gà – chó', name: 'Câu 10', pts: 1, text: 'Sân có gà và chó, đếm được 8 đầu và 22 chân. Có bao nhiêu con gà?', opts: o4('4', '5', '3', '6'), ans: 'B', why: 'Nếu toàn gà thì 16 chân, thừa 6; mỗi chó thêm 2 chân nên có 3 chó, còn 5 gà.' },
  ],
},

/* ═══════════ ĐỀ 20 — BÀI TOÁN TUỔI ═══════════ */
{
  id: 8310, title: 'Đề 20 · Bài toán tuổi', time: 20,
  questions: [
    { sec: 'Hiệu – tỉ', name: 'Câu 1', pts: 1, text: 'Bố hơn con 28 tuổi, tuổi bố gấp 5 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('7', '8', '5', '6'), ans: 'A', why: 'Hiệu ứng với 5 − 1 = 4 phần = 28; tuổi con = 28 : 4 = 7.' },
    { sec: 'Sau n năm', name: 'Câu 2', pts: 1, text: 'Hiện nay mẹ 36 tuổi, con 6 tuổi. Sau bao nhiêu năm nữa tuổi mẹ gấp 3 lần tuổi con?', opts: o4('6 năm', '9 năm', '12 năm', '15 năm'), ans: 'B', why: 'Hiệu tuổi luôn 30; khi mẹ gấp 3 lần con thì con = 30 : 2 = 15, tức sau 15 − 6 = 9 năm.' },
    { sec: 'Tổng – hiệu', name: 'Câu 3', pts: 1, text: 'Tổng tuổi hai anh em là 24, anh hơn em 4 tuổi. Anh bao nhiêu tuổi?', opts: o4('10', '12', '14', '16'), ans: 'C', why: 'Tuổi anh = (24 + 4) : 2 = 14.' },
    { sec: 'Hiện tại', name: 'Câu 4', pts: 1, text: 'Cách đây 3 năm con 7 tuổi. Hiện nay con bao nhiêu tuổi?', opts: o4('4', '7', '13', '10'), ans: 'D', why: 'Tuổi hiện nay = 7 + 3 = 10.' },
    { sec: 'Trước n năm', name: 'Câu 5', pts: 1, text: 'Hiện nay bố 40 tuổi, con 10 tuổi. Cách đây mấy năm tuổi bố gấp 6 lần tuổi con?', opts: o4('4 năm', '5 năm', '6 năm', '3 năm'), ans: 'A', why: 'Hiệu tuổi luôn 30; khi bố gấp 6 lần con thì con = 30 : 5 = 6, tức cách đây 10 − 6 = 4 năm.' },
    { sec: 'Tổng – tỉ', name: 'Câu 6', pts: 1, text: 'Tuổi ông gấp 3 lần tuổi cháu, tổng số tuổi là 80. Cháu bao nhiêu tuổi?', opts: o4('16', '20', '24', '60'), ans: 'B', why: 'Tổng số phần = 4; tuổi cháu = 80 : 4 = 20.' },
    { sec: 'Tổng thay đổi', name: 'Câu 7', pts: 1, text: 'Năm nay An 8 tuổi, mẹ 32 tuổi. Sau bao nhiêu năm nữa tổng số tuổi hai người là 60?', opts: o4('5 năm', '8 năm', '10 năm', '20 năm'), ans: 'C', why: 'Hiện tổng là 40, cần thêm 20; mỗi năm tổng tăng 2 nên cần 20 : 2 = 10 năm.' },
    { sec: 'Tổng – tỉ', name: 'Câu 8', pts: 1, text: 'Tuổi cha và con cộng lại 64, cha gấp 3 lần con. Cha bao nhiêu tuổi?', opts: o4('16', '32', '40', '48'), ans: 'D', why: 'Tổng số phần = 4; tuổi cha = 64 : 4 × 3 = 48.' },
    { sec: 'Tương lai', name: 'Câu 9', pts: 1, text: 'Hai năm nữa tuổi Nam là 12. Hiện nay Nam bao nhiêu tuổi?', opts: o4('10', '12', '14', '8'), ans: 'A', why: 'Tuổi hiện nay = 12 − 2 = 10.' },
    { sec: 'Hiệu không đổi', name: 'Câu 10', pts: 1, text: 'Hiệu số tuổi hai chị em luôn là 6. Khi chị 15 tuổi thì em bao nhiêu tuổi?', opts: o4('21', '9', '6', '12'), ans: 'B', why: 'Em kém chị 6 tuổi nên em = 15 − 6 = 9 (tuổi).' },
  ],
},

/* ═══════════ ĐỀ 21 — CHUYỂN ĐỘNG NÂNG CAO ═══════════ */
{
  id: 8311, title: 'Đề 21 · Chuyển động nâng cao', time: 20,
  questions: [
    { sec: 'Ngược chiều', name: 'Câu 1', pts: 1, text: 'Hai xe khởi hành cùng lúc ngược chiều từ A và B cách nhau 210 km, gặp nhau sau 3 giờ. Tổng vận tốc hai xe là bao nhiêu?', opts: o4('70 km/giờ', '60 km/giờ', '35 km/giờ', '105 km/giờ'), ans: 'A', why: 'Tổng vận tốc = 210 : 3 = 70 (km/giờ).' },
    { sec: 'Quãng đường', name: 'Câu 2', pts: 1, text: 'Xe máy đi từ A lúc 6 giờ với vận tốc 40 km/giờ, đến B lúc 9 giờ. Quãng đường AB dài bao nhiêu?', opts: o4('100 km', '120 km', '80 km', '160 km'), ans: 'B', why: 'Thời gian đi = 3 giờ; quãng đường = 40 × 3 = 120 (km).' },
    { sec: 'Vận tốc TB', name: 'Câu 3', pts: 1, text: 'Một người đi 12 km hết 2 giờ, rồi đi tiếp 18 km hết 2 giờ. Vận tốc trung bình cả quãng đường là bao nhiêu?', opts: o4('6 km/giờ', '9 km/giờ', '7,5 km/giờ', '15 km/giờ'), ans: 'C', why: 'v trung bình = (12 + 18) : (2 + 2) = 30 : 4 = 7,5 (km/giờ).' },
    { sec: 'Dòng nước', name: 'Câu 4', pts: 1, text: 'Ca nô xuôi dòng 4 giờ được 80 km. Biết dòng nước chảy 3 km/giờ, vận tốc thực của ca nô là bao nhiêu?', opts: o4('20 km/giờ', '23 km/giờ', '80 km/giờ', '17 km/giờ'), ans: 'D', why: 'Vận tốc xuôi = 80 : 4 = 20; vận tốc thực = 20 − 3 = 17 (km/giờ).' },
    { sec: 'Cùng chiều', name: 'Câu 5', pts: 1, text: 'Hai xe xuất phát cùng lúc cùng chỗ, cùng chiều, vận tốc 50 km/giờ và 40 km/giờ. Sau 3 giờ hai xe cách nhau bao xa?', opts: o4('30 km', '270 km', '10 km', '90 km'), ans: 'A', why: 'Mỗi giờ cách xa thêm 10 km; sau 3 giờ = 10 × 3 = 30 (km).' },
    { sec: 'Qua cầu', name: 'Câu 6', pts: 1, text: 'Đoàn tàu dài 200 m qua cầu dài 800 m hết 50 giây. Vận tốc tàu là bao nhiêu mét mỗi giây?', opts: o4('16 m/giây', '20 m/giây', '40 m/giây', '25 m/giây'), ans: 'B', why: 'Quãng đường = 200 + 800 = 1000 m; vận tốc = 1000 : 50 = 20 (m/giây).' },
    { sec: 'Quãng đường', name: 'Câu 7', pts: 1, text: 'Đi từ nhà đến trường hết 15 phút với vận tốc 4 km/giờ. Quãng đường dài bao nhiêu?', opts: o4('60 km', '0,5 km', '1 km', '2 km'), ans: 'C', why: '15 phút = 0,25 giờ; quãng đường = 4 × 0,25 = 1 (km).' },
    { sec: 'Ngược chiều', name: 'Câu 8', pts: 1, text: 'Hai người đi ngược chiều từ hai điểm cách 36 km, một người 3 km/giờ, gặp nhau sau 4 giờ. Vận tốc người kia là bao nhiêu?', opts: o4('9 km/giờ', '4 km/giờ', '3 km/giờ', '6 km/giờ'), ans: 'D', why: 'Tổng vận tốc = 36 : 4 = 9; người kia = 9 − 3 = 6 (km/giờ).' },
    { sec: 'Vận tốc thực', name: 'Câu 9', pts: 1, text: 'Ô tô dự định đi 180 km trong 3 giờ nhưng thực tế đi hết 4 giờ. Vận tốc thực tế là bao nhiêu?', opts: o4('45 km/giờ', '60 km/giờ', '36 km/giờ', '40 km/giờ'), ans: 'A', why: 'v thực = 180 : 4 = 45 (km/giờ).' },
    { sec: 'Cùng chiều', name: 'Câu 10', pts: 1, text: 'Xe A cách xe B 15 km về phía sau, cùng chiều, vận tốc 45 km/giờ và 30 km/giờ. Sau mấy giờ xe A đuổi kịp xe B?', opts: o4('0,5 giờ', '1 giờ', '2 giờ', '1,5 giờ'), ans: 'B', why: 'Hiệu vận tốc = 45 − 30 = 15; thời gian = 15 : 15 = 1 (giờ).' },
  ],
},

/* ═══════════ ĐỀ 22 — CÔNG VIỆC NÂNG CAO ═══════════ */
{
  id: 8312, title: 'Đề 22 · Công việc và vòi nước nâng cao', time: 20,
  questions: [
    { sec: 'Công việc', name: 'Câu 1', pts: 1, text: 'Một người làm được 1/3 công việc trong 2 giờ. Người đó làm xong cả công việc trong mấy giờ?', opts: o4('6 giờ', '2 giờ', '9 giờ', '3 giờ'), ans: 'A', why: '1/3 việc mất 2 giờ nên cả việc mất 2 × 3 = 6 giờ.' },
    { sec: 'Vòi nước', name: 'Câu 2', pts: 1, text: 'Hai vòi cùng chảy thì 4 giờ đầy bể. Vòi 1 chảy một mình 6 giờ đầy. Vòi 2 chảy một mình mấy giờ đầy?', opts: o4('8 giờ', '12 giờ', '10 giờ', '24 giờ'), ans: 'B', why: 'Mỗi giờ vòi 2 chảy 1/4 − 1/6 = 1/12 bể nên đầy sau 12 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 3', pts: 1, text: '15 công nhân làm xong đoạn đường trong 12 ngày. Nếu có 20 công nhân thì làm xong trong mấy ngày?', opts: o4('16 ngày', '8 ngày', '9 ngày', '10 ngày'), ans: 'C', why: 'Công việc = 15 × 12 = 180 người-ngày; 20 người làm 180 : 20 = 9 ngày.' },
    { sec: 'Công việc', name: 'Câu 4', pts: 1, text: 'Ba người cùng làm (năng suất bằng nhau) thì xong việc trong 2 giờ. Một người làm một mình xong trong mấy giờ?', opts: o4('2 giờ', '4 giờ', '9 giờ', '6 giờ'), ans: 'D', why: 'Ba người mỗi giờ làm 1/2 việc nên một người làm 1/6 việc mỗi giờ, xong sau 6 giờ.' },
    { sec: 'Làm chung', name: 'Câu 5', pts: 1, text: 'A và B cùng làm thì 6 ngày xong. A làm một mình 10 ngày xong. B làm một mình mất mấy ngày?', opts: o4('15 ngày', '12 ngày', '16 ngày', '30 ngày'), ans: 'A', why: 'Mỗi ngày B làm 1/6 − 1/10 = 1/15 việc nên B làm một mình 15 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 6', pts: 1, text: 'Bể rỗng có vòi chảy vào đầy bể 3 giờ và vòi tháo cạn bể đầy 6 giờ. Mở cả hai vòi thì mấy giờ đầy bể?', opts: o4('3 giờ', '6 giờ', '2 giờ', '9 giờ'), ans: 'B', why: 'Mỗi giờ mức nước tăng 1/3 − 1/6 = 1/6 bể nên đầy sau 6 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 7', pts: 1, text: '4 máy cày cày xong cánh đồng trong 2 ngày. Nếu dùng 8 máy thì cày xong trong mấy ngày?', opts: o4('4 ngày', '2 ngày', '1 ngày', '16 ngày'), ans: 'C', why: 'Công việc = 4 × 2 = 8 máy-ngày; 8 máy làm 8 : 8 = 1 ngày.' },
    { sec: 'Làm chung', name: 'Câu 8', pts: 1, text: 'A làm xong việc trong 8 ngày, B cũng làm xong việc đó trong 8 ngày. Cả hai cùng làm thì mấy ngày xong?', opts: o4('8 ngày', '16 ngày', '2 ngày', '4 ngày'), ans: 'D', why: 'Mỗi ngày hai người làm 1/8 + 1/8 = 1/4 việc nên xong sau 4 ngày.' },
    { sec: 'Vòi nước', name: 'Câu 9', pts: 1, text: 'Một vòi chảy 4 lít mỗi phút vào bể 240 lít. Bao lâu thì đầy bể?', opts: o4('1 giờ', '60 giờ', '30 phút', '2 giờ'), ans: 'A', why: '240 : 4 = 60 phút = 1 giờ.' },
    { sec: 'Người – ngày', name: 'Câu 10', pts: 1, text: '6 người gặt xong ruộng trong 4 giờ. Muốn gặt xong trong 3 giờ thì cần thêm mấy người?', opts: o4('1 người', '2 người', '3 người', '4 người'), ans: 'B', why: 'Công việc = 24 người-giờ; cần 24 : 3 = 8 người, tức thêm 8 − 6 = 2 người.' },
  ],
},

/* ═══════════ ĐỀ 23 — PHẦN TRĂM, VỐN – LÃI ═══════════ */
{
  id: 8313, title: 'Đề 23 · Phần trăm, vốn và lãi', time: 20,
  questions: [
    { sec: 'Tính lãi', name: 'Câu 1', pts: 1, text: 'Vốn 800 000 đồng, lãi 15%. Tiền lãi là bao nhiêu?', opts: o4('120 000 đồng', '80 000 đồng', '15 000 đồng', '920 000 đồng'), ans: 'A', why: '15% của 800 000 = 120 000 (đồng).' },
    { sec: 'Tìm vốn', name: 'Câu 2', pts: 1, text: 'Bán một món hàng 150 000 đồng thì lãi 25% so với vốn. Tiền vốn là bao nhiêu?', opts: o4('112 500 đồng', '120 000 đồng', '125 000 đồng', '187 500 đồng'), ans: 'B', why: 'Giá bán bằng 125% vốn; vốn = 150 000 : 125 × 100 = 120 000 (đồng).' },
    { sec: 'Tiền bán', name: 'Câu 3', pts: 1, text: 'Mua 100 quả trứng giá 2000 đồng một quả, bán hết lãi 20% so với vốn. Tổng tiền bán được là bao nhiêu?', opts: o4('200 000 đồng', '220 000 đồng', '240 000 đồng', '160 000 đồng'), ans: 'C', why: 'Vốn = 200 000; lãi 20% = 40 000; tiền bán = 240 000 (đồng).' },
    { sec: 'Tìm tổng', name: 'Câu 4', pts: 1, text: '45% học sinh của khối là nữ, tương ứng 90 bạn. Khối có bao nhiêu học sinh?', opts: o4('150 học sinh', '180 học sinh', '160 học sinh', '200 học sinh'), ans: 'D', why: 'Số học sinh = 90 : 45 × 100 = 200.' },
    { sec: 'Tìm gốc', name: 'Câu 5', pts: 1, text: 'Một số giảm đi 30% thì còn 140. Số ban đầu là bao nhiêu?', opts: o4('200', '182', '100', '210'), ans: 'A', why: 'Còn 70% = 140; số ban đầu = 140 : 70 × 100 = 200.' },
    { sec: 'Lãi suất', name: 'Câu 6', pts: 1, text: 'Gửi tiết kiệm 5 000 000 đồng, lãi suất 6% một năm. Sau một năm được lãi bao nhiêu?', opts: o4('30 000 đồng', '300 000 đồng', '600 000 đồng', '5 300 000 đồng'), ans: 'B', why: '6% của 5 000 000 = 300 000 (đồng).' },
    { sec: 'Phần trăm', name: 'Câu 7', pts: 1, text: '60% của một số là 240. Vậy 25% của số đó là bao nhiêu?', opts: o4('60', '80', '100', '120'), ans: 'C', why: 'Số đó = 240 : 60 × 100 = 400; 25% của 400 = 100.' },
    { sec: 'Giảm kép', name: 'Câu 8', pts: 1, text: 'Một chiếc áo giá 200 000 đồng giảm 10%, rồi giảm tiếp 20% của giá đã giảm. Giá cuối cùng là bao nhiêu?', opts: o4('140 000 đồng', '160 000 đồng', '150 000 đồng', '144 000 đồng'), ans: 'D', why: 'Sau giảm 10% còn 180 000; giảm tiếp 20% còn 180 000 × 0,8 = 144 000 (đồng).' },
    { sec: 'Tính %', name: 'Câu 9', pts: 1, text: 'Số học sinh giỏi tăng từ 20 bạn lên 25 bạn. Đã tăng bao nhiêu phần trăm?', opts: o4('25%', '20%', '5%', '125%'), ans: 'A', why: 'Tăng 5 bạn so với 20 là 5 : 20 = 25%.' },
    { sec: 'Tìm vốn', name: 'Câu 10', pts: 1, text: 'Bán một mảnh đất lãi 300 000 đồng, bằng 12% tiền vốn. Tiền vốn là bao nhiêu?', opts: o4('2 400 000 đồng', '2 500 000 đồng', '3 600 000 đồng', '360 000 đồng'), ans: 'B', why: 'Vốn = 300 000 : 12 × 100 = 2 500 000 (đồng).' },
  ],
},

/* ═══════════ ĐỀ 24 — SỐ HỌC: CHỮ SỐ TẬN CÙNG VÀ SỐ DƯ ═══════════ */
{
  id: 8314, title: 'Đề 24 · Chữ số tận cùng và số dư', time: 20,
  questions: [
    { sec: 'Chữ số tận cùng', name: 'Câu 1', pts: 1, text: 'Chữ số tận cùng của 3 × 3 × 3 × 3 × 3 là gì?', opts: o4('3', '9', '7', '1'), ans: 'A', why: 'Tận cùng của luỹ thừa của 3 lặp theo 3, 9, 7, 1; số mũ 5 chia 4 dư 1 nên tận cùng là 3.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 2', pts: 1, text: 'Chữ số tận cùng của tích gồm 2018 thừa số 2 (2 × 2 × ... × 2) là gì?', opts: o4('2', '4', '8', '6'), ans: 'B', why: 'Chu kì tận cùng của luỹ thừa 2 là 2, 4, 8, 6; 2018 chia 4 dư 2 nên tận cùng là 4.' },
    { sec: 'Số dư', name: 'Câu 3', pts: 1, text: '100 chia cho 7 được số dư là bao nhiêu?', opts: o4('0', '1', '2', '3'), ans: 'C', why: '100 = 7 × 14 + 2 nên số dư là 2.' },
    { sec: 'Số dư', name: 'Câu 4', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 9 chia cho 5 dư bao nhiêu?', opts: o4('1', '2', '3', '0'), ans: 'D', why: 'Tổng = 45; 45 chia hết cho 5 nên dư 0.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 5', pts: 1, text: 'Chữ số tận cùng của tích 2 × 4 × 6 × 8 là gì?', opts: o4('4', '8', '2', '6'), ans: 'A', why: '2 × 4 × 6 × 8 = 384 nên tận cùng là 4.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 6', pts: 1, text: 'Chữ số tận cùng của tích 100 thừa số 6 (6 × 6 × ... × 6) là gì?', opts: o4('1', '6', '0', '36'), ans: 'B', why: 'Số 6 nhân với 6 luôn cho tận cùng là 6 nên kết quả tận cùng là 6.' },
    { sec: 'Tìm số chia', name: 'Câu 7', pts: 1, text: 'Số 45 chia cho một số được thương 6 và dư 3. Số chia là bao nhiêu?', opts: o4('5', '6', '7', '8'), ans: 'C', why: 'Số chia = (45 − 3) : 6 = 42 : 6 = 7.' },
    { sec: 'Số dư', name: 'Câu 8', pts: 1, text: 'Khi chia một số cho 8, số dư lớn nhất có thể là bao nhiêu?', opts: o4('8', '1', '9', '7'), ans: 'D', why: 'Số dư luôn nhỏ hơn số chia nên dư lớn nhất khi chia cho 8 là 7.' },
    { sec: 'Chữ số tận cùng', name: 'Câu 9', pts: 1, text: 'Chữ số tận cùng của 7 × 7 + 3 × 3 là gì?', opts: o4('8', '2', '6', '0'), ans: 'A', why: '49 + 9 = 58 nên tận cùng là 8.' },
    { sec: 'Tìm số', name: 'Câu 10', pts: 1, text: 'Số tự nhiên nhỏ nhất khác 0 mà chia 4 dư 3 và chia 6 dư 5 là số nào?', opts: o4('7', '11', '23', '5'), ans: 'B', why: 'Số đó thêm 1 chia hết cho cả 4 và 6, tức chia hết 12; số nhỏ nhất là 12 − 1 = 11 (11 chia 4 dư 3, chia 6 dư 5).' },
  ],
},

/* ═══════════ ĐỀ 25 — DÃY SỐ NÂNG CAO ═══════════ */
{
  id: 8315, title: 'Đề 25 · Dãy số theo quy luật', time: 20,
  questions: [
    { sec: 'Quy luật', name: 'Câu 1', pts: 1, text: 'Dãy 2, 5, 10, 17, 26, ... Số tiếp theo là bao nhiêu?', opts: o4('37', '35', '36', '38'), ans: 'A', why: 'Hiệu tăng dần 3, 5, 7, 9, 11; số tiếp = 26 + 11 = 37.' },
    { sec: 'Phi-bô-na-xi', name: 'Câu 2', pts: 1, text: 'Dãy 1, 1, 2, 3, 5, 8, ... (mỗi số bằng tổng hai số liền trước). Số tiếp theo là bao nhiêu?', opts: o4('11', '13', '10', '16'), ans: 'B', why: 'Số tiếp = 5 + 8 = 13.' },
    { sec: 'Tổng dãy', name: 'Câu 3', pts: 1, text: 'Tổng 3 + 6 + 9 + ... + 30 bằng bao nhiêu?', opts: o4('150', '160', '165', '180'), ans: 'C', why: 'Có 10 số; tổng = (3 + 30) × 10 : 2 = 165.' },
    { sec: 'Số hạng', name: 'Câu 4', pts: 1, text: 'Số hạng thứ 15 của dãy 4, 7, 10, 13, ... là bao nhiêu?', opts: o4('43', '49', '40', '46'), ans: 'D', why: 'Dãy cách 3; số thứ 15 = 4 + 14 × 3 = 46.' },
    { sec: 'Số tam giác', name: 'Câu 5', pts: 1, text: 'Dãy 1, 3, 6, 10, 15, ... Số hạng thứ 7 là bao nhiêu?', opts: o4('28', '21', '36', '25'), ans: 'A', why: 'Hiệu tăng 2, 3, 4, ...: 1, 3, 6, 10, 15, 21, 28 — số thứ 7 là 28.' },
    { sec: 'Tổng liên tiếp', name: 'Câu 6', pts: 1, text: 'Tổng các số tự nhiên từ 1 đến 20 bằng bao nhiêu?', opts: o4('200', '210', '190', '220'), ans: 'B', why: 'Tổng = (1 + 20) × 20 : 2 = 210.' },
    { sec: 'Quy luật', name: 'Câu 7', pts: 1, text: 'Dãy 100, 90, 81, 73, ... Số tiếp theo là bao nhiêu?', opts: o4('64', '65', '66', '63'), ans: 'C', why: 'Hiệu giảm dần 10, 9, 8, 7; số tiếp = 73 − 7 = 66.' },
    { sec: 'Đếm số hạng', name: 'Câu 8', pts: 1, text: 'Dãy 7, 14, 21, ..., 140 có bao nhiêu số hạng?', opts: o4('19', '21', '18', '20'), ans: 'D', why: 'Số số hạng = 140 : 7 = 20.' },
    { sec: 'Nhân 3', name: 'Câu 9', pts: 1, text: 'Dãy 2, 6, 18, 54, ... (mỗi số gấp 3 lần số trước). Số hạng thứ 5 là bao nhiêu?', opts: o4('162', '108', '216', '150'), ans: 'A', why: 'Số thứ 5 = 54 × 3 = 162.' },
    { sec: 'Tổng dãy đều', name: 'Câu 10', pts: 1, text: 'Tổng 5 + 10 + 15 + ... + 50 bằng bao nhiêu?', opts: o4('250', '275', '300', '225'), ans: 'B', why: 'Có 10 số; tổng = (5 + 50) × 10 : 2 = 275.' },
  ],
},

/* ═══════════ ĐỀ 26 — HÌNH HỌC TỔNG HỢP ═══════════ */
{
  id: 8316, title: 'Đề 26 · Hình học tổng hợp', time: 20,
  questions: [
    { sec: 'Hình vuông', name: 'Câu 1', pts: 1, text: 'Hình vuông có chu vi 32 cm. Diện tích của nó là bao nhiêu?', opts: o4('64 cm²', '32 cm²', '16 cm²', '128 cm²'), ans: 'A', why: 'Cạnh = 32 : 4 = 8 cm; diện tích = 8 × 8 = 64 (cm²).' },
    { sec: 'Chữ nhật', name: 'Câu 2', pts: 1, text: 'Hình chữ nhật có chu vi 40 cm, chiều dài hơn chiều rộng 4 cm. Chiều dài là bao nhiêu?', opts: o4('10 cm', '12 cm', '8 cm', '16 cm'), ans: 'B', why: 'Nửa chu vi = 20; chiều dài = (20 + 4) : 2 = 12 (cm).' },
    { sec: 'Tam giác', name: 'Câu 3', pts: 1, text: 'Tam giác có diện tích 30 cm² và chiều cao 5 cm. Đáy là bao nhiêu?', opts: o4('6 cm', '10 cm', '12 cm', '15 cm'), ans: 'C', why: 'Đáy = 2 × 30 : 5 = 12 (cm).' },
    { sec: 'Hình hộp', name: 'Câu 4', pts: 1, text: 'Hình hộp chữ nhật có ba kích thước 4 cm, 3 cm, 2 cm. Thể tích là bao nhiêu?', opts: o4('9 cm³', '12 cm³', '18 cm³', '24 cm³'), ans: 'D', why: 'V = 4 × 3 × 2 = 24 (cm³).' },
    { sec: 'Hình vuông', name: 'Câu 5', pts: 1, text: 'Hình vuông có diện tích 49 cm². Chu vi của nó là bao nhiêu?', opts: o4('28 cm', '49 cm', '14 cm', '21 cm'), ans: 'A', why: 'Cạnh = 7 cm (vì 7 × 7 = 49); chu vi = 7 × 4 = 28 (cm).' },
    { sec: 'Hình tròn', name: 'Câu 6', pts: 1, text: 'Hình tròn bán kính 4 cm có chu vi bao nhiêu (lấy π = 3,14)?', opts: o4('12,56 cm', '25,12 cm', '50,24 cm', '16 cm'), ans: 'B', why: 'Chu vi = 2 × 4 × 3,14 = 25,12 (cm).' },
    { sec: 'Hình thang', name: 'Câu 7', pts: 1, text: 'Hình thang có diện tích 40 cm², hai đáy 6 cm và 10 cm. Chiều cao là bao nhiêu?', opts: o4('4 cm', '8 cm', '5 cm', '10 cm'), ans: 'C', why: 'Chiều cao = 2 × 40 : (6 + 10) = 80 : 16 = 5 (cm).' },
    { sec: 'Lập phương', name: 'Câu 8', pts: 1, text: 'Hình lập phương cạnh 5 cm. Diện tích một mặt là bao nhiêu?', opts: o4('125 cm²', '30 cm²', '100 cm²', '25 cm²'), ans: 'D', why: 'Một mặt là hình vuông cạnh 5 cm: 5 × 5 = 25 (cm²).' },
    { sec: 'Tăng cạnh', name: 'Câu 9', pts: 1, text: 'Hình chữ nhật dài 15 cm, rộng 10 cm. Nếu tăng chiều rộng thêm 5 cm thì diện tích tăng thêm bao nhiêu?', opts: o4('75 cm²', '50 cm²', '25 cm²', '150 cm²'), ans: 'A', why: 'Phần tăng thêm là hình chữ nhật 15 cm × 5 cm = 75 (cm²).' },
    { sec: 'Bình hành', name: 'Câu 10', pts: 1, text: 'Hình bình hành có đáy 8 cm và chiều cao 6 cm. Diện tích là bao nhiêu?', opts: o4('24 cm²', '48 cm²', '14 cm²', '28 cm²'), ans: 'B', why: 'S = đáy × chiều cao = 8 × 6 = 48 (cm²).' },
  ],
},

/* ═══════════ ĐỀ 27 — SUY LUẬN VÀ ĐI-RÍCH-LÊ ═══════════ */
{
  id: 8317, title: 'Đề 27 · Suy luận và đếm', time: 20,
  questions: [
    { sec: 'Đi-rích-lê', name: 'Câu 1', pts: 1, text: 'Có bút 5 màu để lẫn. Phải lấy ít nhất mấy chiếc để chắc chắn có 2 chiếc cùng màu?', opts: o4('6', '5', '2', '10'), ans: 'A', why: 'Có 5 màu, lấy 5 chiếc có thể mỗi màu một chiếc; chiếc thứ 6 chắc chắn trùng.' },
    { sec: 'Đi-rích-lê', name: 'Câu 2', pts: 1, text: 'Có 30 học sinh. Chắc chắn có ít nhất mấy bạn sinh cùng một tháng?', opts: o4('2', '3', '4', '12'), ans: 'B', why: 'Nếu mỗi tháng nhiều nhất 2 bạn thì chỉ 24 bạn; vậy phải có tháng có ≥ 3 bạn.' },
    { sec: 'Suy luận', name: 'Câu 3', pts: 1, text: 'Ba bạn A, B, C cao khác nhau. A cao hơn C, C cao hơn B. Ai thấp nhất?', opts: o4('A', 'C', 'B', 'Chưa rõ'), ans: 'C', why: 'A cao hơn C, C cao hơn B nên B thấp nhất.' },
    { sec: 'Đi-rích-lê', name: 'Câu 4', pts: 1, text: 'Nhốt 7 con thỏ vào 3 chuồng. Chắc chắn có một chuồng có ít nhất mấy con?', opts: o4('2', '4', '5', '3'), ans: 'D', why: 'Nếu mỗi chuồng nhiều nhất 2 con thì chỉ 6 con; vậy phải có chuồng ≥ 3 con.' },
    { sec: 'Logic', name: 'Câu 5', pts: 1, text: 'Lan, Hà, Thu đứng thành một hàng. Lan không đứng đầu, Hà đứng giữa. Ai đứng đầu hàng?', opts: o4('Thu', 'Lan', 'Hà', 'Chưa rõ'), ans: 'A', why: 'Hà đứng giữa, Lan không đứng đầu nên Lan đứng cuối, còn Thu đứng đầu.' },
    { sec: 'Thi đấu', name: 'Câu 6', pts: 1, text: '5 đội thi đấu vòng tròn một lượt (mỗi cặp gặp nhau một lần). Có tất cả bao nhiêu trận?', opts: o4('5', '10', '20', '15'), ans: 'B', why: 'Số trận = 5 × 4 : 2 = 10.' },
    { sec: 'Đếm số', name: 'Câu 7', pts: 1, text: 'Từ bốn chữ số 1, 2, 3, 4 lập được bao nhiêu số có hai chữ số khác nhau?', opts: o4('8', '16', '12', '24'), ans: 'C', why: 'Chữ số hàng chục có 4 cách, hàng đơn vị còn 3 cách; 4 × 3 = 12 số.' },
    { sec: 'Đếm cách', name: 'Câu 8', pts: 1, text: 'Có 4 chiếc áo và 3 chiếc quần. Có mấy cách chọn một bộ gồm một áo và một quần?', opts: o4('7', '4', '3', '12'), ans: 'D', why: 'Số cách = 4 × 3 = 12.' },
    { sec: 'Đi-rích-lê', name: 'Câu 9', pts: 1, text: 'Trong túi có 5 bi đỏ và 4 bi xanh. Không nhìn, phải lấy ít nhất mấy viên để chắc chắn có 1 bi xanh?', opts: o4('6', '5', '2', '9'), ans: 'A', why: 'Trường hợp xấu nhất lấy hết 5 bi đỏ trước; viên thứ 6 chắc chắn là bi xanh.' },
    { sec: 'Bắt tay', name: 'Câu 10', pts: 1, text: '4 người bắt tay nhau, mỗi cặp bắt tay đúng một lần. Có tất cả bao nhiêu cái bắt tay?', opts: o4('4', '6', '12', '3'), ans: 'B', why: 'Số bắt tay = 4 × 3 : 2 = 6 (hoặc 3 + 2 + 1 = 6).' },
  ],
},

/* ═══════════ ĐỀ 28 — TOÁN ĐỐ TỔNG HỢP ═══════════ */
{
  id: 8318, title: 'Đề 28 · Toán đố tổng hợp', time: 20,
  questions: [
    { sec: 'Giá tiền', name: 'Câu 1', pts: 1, text: 'Mua 5 quyển vở hết 40 000 đồng. Vậy 8 quyển vở cùng loại hết bao nhiêu tiền?', opts: o4('64 000 đồng', '56 000 đồng', '48 000 đồng', '72 000 đồng'), ans: 'A', why: 'Một quyển = 40 000 : 5 = 8000; 8 quyển = 8 × 8000 = 64 000 (đồng).' },
    { sec: 'Tìm số', name: 'Câu 2', pts: 1, text: 'Một số nhân với 3 rồi trừ đi 5 thì được 25. Số đó là bao nhiêu?', opts: o4('8', '10', '12', '15'), ans: 'B', why: 'Số × 3 = 25 + 5 = 30 nên số = 30 : 3 = 10.' },
    { sec: 'Trung bình cộng', name: 'Câu 3', pts: 1, text: 'Trung bình cộng của 15, 25, 35, 45 là bao nhiêu?', opts: o4('25', '35', '30', '40'), ans: 'C', why: '(15 + 25 + 35 + 45) : 4 = 120 : 4 = 30.' },
    { sec: 'Chia tỉ lệ', name: 'Câu 4', pts: 1, text: 'Chia 48 cái kẹo cho ba bạn theo tỉ lệ 1 : 2 : 3. Bạn được nhiều nhất có bao nhiêu cái?', opts: o4('8', '16', '12', '24'), ans: 'D', why: 'Tổng số phần = 6; phần lớn nhất = 48 : 6 × 3 = 24 (cái).' },
    { sec: 'Vòi nước', name: 'Câu 5', pts: 1, text: 'Hai vòi cùng chảy 4 giờ đầy bể. Vòi 1 chảy một mình 12 giờ đầy. Vòi 2 chảy một mình mấy giờ đầy?', opts: o4('6 giờ', '8 giờ', '3 giờ', '9 giờ'), ans: 'A', why: 'Mỗi giờ vòi 2 chảy 1/4 − 1/12 = 1/6 bể nên đầy sau 6 giờ.' },
    { sec: 'Phần trăm', name: 'Câu 6', pts: 1, text: '20% của 250 là bao nhiêu?', opts: o4('25', '50', '75', '100'), ans: 'B', why: '20% của 250 = 250 : 5 = 50.' },
    { sec: 'Chuyển động', name: 'Câu 7', pts: 1, text: 'Hai xe đi ngược chiều cách nhau 180 km, vận tốc 50 km/giờ và 40 km/giờ. Sau mấy giờ gặp nhau?', opts: o4('3 giờ', '4 giờ', '2 giờ', '1,5 giờ'), ans: 'C', why: 'Tổng vận tốc = 90; thời gian = 180 : 90 = 2 (giờ).' },
    { sec: 'Gà – chó', name: 'Câu 8', pts: 1, text: 'Gà và chó có 15 con, đếm được 40 chân. Có bao nhiêu con gà?', opts: o4('7', '8', '9', '10'), ans: 'D', why: 'Nếu toàn gà thì 30 chân, thừa 10; có 10 : 2 = 5 chó, còn 15 − 5 = 10 gà.' },
    { sec: 'Dãy số', name: 'Câu 9', pts: 1, text: 'Số hạng thứ 12 của dãy 5, 10, 15, ... là bao nhiêu?', opts: o4('60', '55', '65', '50'), ans: 'A', why: 'Dãy bội của 5; số thứ 12 = 5 × 12 = 60.' },
    { sec: 'Tuổi', name: 'Câu 10', pts: 1, text: 'Bố hơn con 25 tuổi, tuổi bố gấp 6 lần tuổi con. Con bao nhiêu tuổi?', opts: o4('4', '5', '6', '25'), ans: 'B', why: 'Hiệu ứng với 6 − 1 = 5 phần = 25; tuổi con = 25 : 5 = 5.' },
  ],
},

/* ═══════════ ĐỀ 29 — TUỔI VÀ TỈ SỐ ═══════════ */
{
  id: 8319, title: 'Đề 29 · Tuổi và tỉ số', time: 20,
  questions: [
    { sec: 'Tổng – tỉ', name: 'Câu 1', pts: 1, text: 'Tổng tuổi bố và con là 50, tỉ số tuổi bố và con là 4 : 1. Bố bao nhiêu tuổi?', opts: o4('40', '35', '30', '45'), ans: 'A', why: 'Tổng số phần = 5; tuổi bố = 50 : 5 × 4 = 40.' },
    { sec: 'Tỉ số', name: 'Câu 2', pts: 1, text: 'Anh 15 tuổi, em 9 tuổi. Tỉ số tuổi anh so với tuổi em là bao nhiêu?', opts: o4('3 : 5', '5 : 3', '2 : 1', '5 : 9'), ans: 'B', why: '15 : 9 = 5 : 3.' },
    { sec: 'Quá khứ', name: 'Câu 3', pts: 1, text: 'Cách đây 5 năm, tuổi mẹ gấp 4 lần tuổi con, khi đó con 6 tuổi. Hiện nay mẹ bao nhiêu tuổi?', opts: o4('24', '30', '29', '34'), ans: 'C', why: 'Cách đây 5 năm mẹ 6 × 4 = 24 tuổi; hiện nay = 24 + 5 = 29 (tuổi).' },
    { sec: 'Tổng – hiệu', name: 'Câu 4', pts: 1, text: 'Tổng tuổi hai chị em là 20, chị hơn em 4 tuổi. Chị bao nhiêu tuổi?', opts: o4('8', '10', '14', '12'), ans: 'D', why: 'Tuổi chị = (20 + 4) : 2 = 12.' },
    { sec: 'Phân số', name: 'Câu 5', pts: 1, text: 'Tuổi con bằng 1/5 tuổi bố, bố 40 tuổi. Con bao nhiêu tuổi?', opts: o4('8', '10', '5', '20'), ans: 'A', why: 'Tuổi con = 40 : 5 = 8.' },
    { sec: 'Tương lai', name: 'Câu 6', pts: 1, text: 'Sau 4 năm nữa, tuổi Nam sẽ gấp đôi tuổi hiện nay. Hiện nay Nam bao nhiêu tuổi?', opts: o4('8', '4', '6', '2'), ans: 'B', why: 'Gọi tuổi Nam là a: a + 4 = 2a nên a = 4.' },
    { sec: 'Tổng thay đổi', name: 'Câu 7', pts: 1, text: 'Tổng tuổi ba người hiện nay là 60. Sau 5 năm nữa tổng tuổi ba người là bao nhiêu?', opts: o4('65', '70', '75', '80'), ans: 'C', why: 'Mỗi người thêm 5 tuổi nên tổng tăng 15: 60 + 15 = 75.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 8', pts: 1, text: 'Hiện nay mẹ 30 tuổi, con 5 tuổi. Sau bao nhiêu năm nữa tuổi mẹ gấp đôi tuổi con?', opts: o4('10', '15', '5', '20'), ans: 'D', why: 'Hiệu tuổi luôn 25; khi mẹ gấp đôi con thì con = 25, tức sau 25 − 5 = 20 năm.' },
    { sec: 'Hiệu – tỉ', name: 'Câu 9', pts: 1, text: 'Tuổi ông gấp 5 lần tuổi cháu, ông hơn cháu 48 tuổi. Cháu bao nhiêu tuổi?', opts: o4('12', '16', '10', '8'), ans: 'A', why: 'Hiệu ứng với 5 − 1 = 4 phần = 48; tuổi cháu = 48 : 4 = 12.' },
    { sec: 'Thời gian', name: 'Câu 10', pts: 1, text: 'Ba năm trước An 7 tuổi. Vậy ba năm nữa (kể từ hiện nay) An bao nhiêu tuổi?', opts: o4('10', '13', '16', '7'), ans: 'B', why: 'Hiện nay An 7 + 3 = 10 tuổi; ba năm nữa = 10 + 3 = 13 (tuổi).' },
  ],
},

/* ═══════════ ĐỀ 30 — TỔNG HỢP BỒI DƯỠNG HSG ═══════════ */
{
  id: 8320, title: 'Đề 30 · Tổng hợp bồi dưỡng HSG', time: 20,
  questions: [
    { sec: 'Tổng dãy', name: 'Câu 1', pts: 1, text: 'Tổng 1 + 2 + 3 + ... + 40 bằng bao nhiêu?', opts: o4('820', '800', '810', '1640'), ans: 'A', why: 'Tổng = (1 + 40) × 40 : 2 = 41 × 20 = 820.' },
    { sec: 'Dòng nước', name: 'Câu 2', pts: 1, text: 'Ca nô xuôi dòng có vận tốc 18 km/giờ, dòng nước chảy 2 km/giờ. Vận tốc thực của ca nô là bao nhiêu?', opts: o4('20 km/giờ', '16 km/giờ', '9 km/giờ', '36 km/giờ'), ans: 'B', why: 'Vận tốc thực = vận tốc xuôi − vận tốc dòng nước = 18 − 2 = 16 (km/giờ).' },
    { sec: 'Phần trăm', name: 'Câu 3', pts: 1, text: '40% của một số là 60. Số đó là bao nhiêu?', opts: o4('24', '100', '150', '120'), ans: 'C', why: 'Số đó = 60 : 40 × 100 = 150.' },
    { sec: 'Tổng – tỉ', name: 'Câu 4', pts: 1, text: 'Hai số có tổng 72 và tỉ số 3 : 5. Số bé là bao nhiêu?', opts: o4('45', '36', '40', '27'), ans: 'D', why: 'Tổng số phần = 8; số bé = 72 : 8 × 3 = 27.' },
    { sec: 'BCNN', name: 'Câu 5', pts: 1, text: 'Bội chung nhỏ nhất của 6 và 8 là bao nhiêu?', opts: o4('24', '48', '2', '12'), ans: 'A', why: 'Bội của 6: 6, 12, 18, 24...; bội của 8: 8, 16, 24...; nhỏ nhất chung là 24.' },
    { sec: 'Tam giác', name: 'Câu 6', pts: 1, text: 'Tam giác có đáy 12 cm và chiều cao 5 cm. Diện tích là bao nhiêu?', opts: o4('60 cm²', '30 cm²', '17 cm²', '35 cm²'), ans: 'B', why: 'S = (12 × 5) : 2 = 30 (cm²).' },
    { sec: 'Đi-rích-lê', name: 'Câu 7', pts: 1, text: 'Bỏ 25 viên bi vào 4 hộp. Chắc chắn có một hộp chứa ít nhất mấy viên?', opts: o4('5', '6', '7', '8'), ans: 'C', why: 'Nếu mỗi hộp nhiều nhất 6 viên thì chỉ 24 viên; vậy phải có hộp ≥ 7 viên.' },
    { sec: 'Trung bình cộng', name: 'Câu 8', pts: 1, text: 'Trung bình cộng của 5 số là 10. Thêm số 22 thì trung bình cộng của 6 số là bao nhiêu?', opts: o4('10', '11', '16', '12'), ans: 'D', why: 'Tổng 5 số = 50, thêm 22 thành 72; trung bình = 72 : 6 = 12.' },
    { sec: 'Làm chung', name: 'Câu 9', pts: 1, text: 'A làm xong việc trong 15 ngày, B làm xong việc đó trong 10 ngày. Cả hai cùng làm thì mấy ngày xong?', opts: o4('6 ngày', '5 ngày', '25 ngày', '12 ngày'), ans: 'A', why: 'Mỗi ngày hai người làm 1/15 + 1/10 = 2/30 + 3/30 = 1/6 việc nên xong sau 6 ngày.' },
    { sec: 'Gà – chó', name: 'Câu 10', pts: 1, text: 'Gà và chó có 24 con, đếm được 68 chân. Có bao nhiêu con chó?', opts: o4('8', '10', '12', '14'), ans: 'B', why: 'Nếu toàn gà thì 48 chân, thiếu 20; mỗi chó hơn gà 2 chân nên số chó = 20 : 2 = 10.' },
  ],
},

];

SUBJECTS.push({
  id: 'ttd5', name: 'Toán tư duy', short: 'Tư duy 5', icon: '💡', grade: 5,
  exams: TTD5_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 5 — chuyển động, công việc, tỉ số phần trăm, số học và suy luận',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; dạng bồi dưỡng HSG (Trung Quốc · Nga · Úc)',
});
