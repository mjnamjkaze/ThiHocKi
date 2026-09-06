// TOÁN TƯ DUY — LỚP 5
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'ttd5', name: 'Toán tư duy', short: 'Tư duy 5', icon: '💡', grade: 5,
  exams: TTD5_EXAMS, ready: true,
  heroTitle: 'Toán tư duy lớp 5 — chuyển động, công việc, tỉ số phần trăm, số học và suy luận',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; dạng bồi dưỡng HSG (Trung Quốc · Nga · Úc)',
});
