// CHƯƠNG III — ĐIỆN (câu viết tay)
import { q } from './vatli9-util.mjs';

// --- Định luật Ohm, điện trở, biến trở ---
q('di-ohm', 'Nội dung định luật Ohm: cường độ dòng điện chạy qua dây dẫn',
  'tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây', ['tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở', 'tỉ lệ thuận với cả hiệu điện thế và điện trở', 'không phụ thuộc hiệu điện thế'],
  'I = U/R.');
q('di-ohm', 'Đơn vị của điện trở là ôm (Ω). 1 Ω bằng',
  '1 V/A', ['1 A/V', '1 V·A', '1 W/A'],
  'R = U/I nên 1 Ω = 1 V/1 A.');
q('di-ohm', '1 kΩ và 1 MΩ lần lượt bằng',
  '1000 Ω và 1 000 000 Ω', ['100 Ω và 1000 Ω', '1000 Ω và 100 000 Ω', '10 Ω và 1000 Ω'],
  'k = 10<sup>3</sup>, M = 10<sup>6</sup>.');
q('di-ohm', 'Điện trở của một dây dẫn đặc trưng cho',
  'mức độ cản trở dòng điện của dây dẫn', ['khả năng tích điện của dây dẫn', 'độ lớn của hiệu điện thế hai đầu dây', 'tốc độ chuyển động của điện tích'],
  'R càng lớn thì dòng điện qua dây càng nhỏ với cùng U.');
q('di-ohm', 'Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện I vào hiệu điện thế U của một dây dẫn kim loại (nhiệt độ không đổi) là',
  'đường thẳng đi qua gốc toạ độ', ['đường cong parabol', 'đường thẳng song song với trục U', 'đường thẳng không đi qua gốc toạ độ'],
  'I = U/R với R không đổi: I tỉ lệ thuận với U.');
q('di-ohm', 'Khi hiệu điện thế giữa hai đầu dây dẫn tăng gấp 2 lần thì',
  'cường độ dòng điện tăng gấp 2 lần, điện trở không đổi', ['cường độ dòng điện và điện trở đều tăng gấp 2', 'điện trở tăng gấp 2, cường độ dòng điện không đổi', 'cường độ dòng điện giảm 2 lần'],
  'R là đặc trưng của dây, không phụ thuộc U; I = U/R tăng theo U.');
q('di-ohm', 'Điện trở của dây dẫn phụ thuộc vào',
  'chiều dài, tiết diện và vật liệu làm dây', ['chỉ chiều dài của dây', 'hiệu điện thế đặt vào hai đầu dây', 'cường độ dòng điện chạy qua dây'],
  'R = ρl/S (và còn phụ thuộc nhiệt độ).');
q('di-ohm', 'Công thức tính điện trở của dây dẫn dài l, tiết diện S, làm bằng vật liệu có điện trở suất ρ là',
  'R = ρl/S', ['R = ρS/l', 'R = ρlS', 'R = l/(ρS)'],
  'R tỉ lệ thuận với l, tỉ lệ nghịch với S.');
q('di-ohm', 'Đơn vị của điện trở suất là',
  'Ω·m', ['Ω/m', 'Ω·m<sup>2</sup>', 'Ω'],
  'ρ = RS/l có đơn vị Ω·m<sup>2</sup>/m = Ω·m.');
q('di-ohm', 'Hai dây dẫn cùng vật liệu, cùng tiết diện, dây thứ hai dài gấp 3 lần dây thứ nhất. Điện trở dây thứ hai',
  'gấp 3 lần dây thứ nhất', ['bằng 1/3 dây thứ nhất', 'gấp 9 lần dây thứ nhất', 'bằng dây thứ nhất'],
  'R tỉ lệ thuận với chiều dài.');
q('di-ohm', 'Hai dây dẫn cùng vật liệu, cùng chiều dài, dây thứ hai có tiết diện gấp 2 lần dây thứ nhất. Điện trở dây thứ hai',
  'bằng nửa dây thứ nhất', ['gấp 2 lần dây thứ nhất', 'gấp 4 lần dây thứ nhất', 'bằng 1/4 dây thứ nhất'],
  'R tỉ lệ nghịch với tiết diện S.');
q('di-ohm', 'Hai dây dẫn tròn cùng vật liệu, cùng chiều dài, dây thứ hai có đường kính gấp 2 lần dây thứ nhất. Điện trở dây thứ hai',
  'bằng 1/4 dây thứ nhất', ['bằng 1/2 dây thứ nhất', 'gấp 4 lần dây thứ nhất', 'gấp 2 lần dây thứ nhất'],
  'Đường kính gấp 2 ⇒ tiết diện S = πd<sup>2</sup>/4 gấp 4 ⇒ R giảm 4 lần.', 1);
q('di-ohm', 'Trong các kim loại sau, kim loại nào dẫn điện tốt nhất (điện trở suất nhỏ nhất)?',
  'Bạc', ['Đồng', 'Nhôm', 'Vonfram'],
  'ρ<sub>bạc</sub> ≈ 1,6·10<sup>−8</sup> Ω·m < ρ<sub>đồng</sub> ≈ 1,7·10<sup>−8</sup> Ω·m < ρ<sub>nhôm</sub> ≈ 2,8·10<sup>−8</sup> Ω·m < ρ<sub>vonfram</sub> ≈ 5,5·10<sup>−8</sup> Ω·m.');
q('di-ohm', 'Dây dẫn điện trong nhà thường làm bằng đồng vì đồng',
  'có điện trở suất nhỏ (dẫn điện tốt), dẻo, giá thành hợp lí', ['có điện trở suất lớn nhất trong các kim loại', 'chịu được nhiệt độ rất cao', 'là chất cách điện tốt'],
  'Bạc dẫn điện tốt hơn nhưng quá đắt.');
q('di-ohm', 'Dây đốt nóng (dây may so) của bếp điện, bàn là thường làm bằng nicrom vì nicrom',
  'có điện trở suất lớn và chịu được nhiệt độ cao', ['có điện trở suất rất nhỏ', 'rất rẻ và dễ nóng chảy', 'không dẫn điện'],
  'ρ<sub>nicrom</sub> ≈ 1,1·10<sup>−6</sup> Ω·m, lớn gấp hàng chục lần đồng, nên toả nhiều nhiệt.');
q('di-ohm', 'Biến trở là',
  'điện trở có thể thay đổi được trị số, dùng để điều chỉnh cường độ dòng điện trong mạch', ['điện trở có trị số rất lớn', 'dụng cụ đo điện trở', 'điện trở dùng để biến đổi dòng xoay chiều thành một chiều'],
  'Biến trở con chạy, biến trở tay quay, chiết áp... là các loại biến trở thường gặp.');
q('di-ohm', 'Biến trở con chạy thay đổi điện trở bằng cách',
  'thay đổi chiều dài phần dây dẫn có dòng điện chạy qua', ['thay đổi tiết diện của dây dẫn', 'thay đổi vật liệu làm dây', 'thay đổi nhiệt độ của dây'],
  'Dịch con chạy làm thay đổi chiều dài l của đoạn dây tham gia mạch ⇒ R = ρl/S thay đổi.');
q('di-ohm', 'Trên một biến trở có ghi (50 Ω – 2 A). Ý nghĩa các con số đó là',
  'điện trở lớn nhất của biến trở là 50 Ω, cường độ dòng điện lớn nhất cho phép là 2 A', ['điện trở nhỏ nhất là 50 Ω, dòng điện nhỏ nhất là 2 A', 'hiệu điện thế định mức là 50 V, dòng điện định mức 2 A', 'biến trở có 50 vòng dây, mỗi vòng chịu 2 A'],
  'Vượt quá 2 A dây biến trở có thể bị nóng chảy.');
q('di-ohm', 'Ứng dụng nào sau đây KHÔNG phải của biến trở?',
  'Đo cường độ dòng điện', ['Điều chỉnh âm lượng của loa', 'Điều chỉnh độ sáng của đèn', 'Điều chỉnh tốc độ quay của quạt'],
  'Đo cường độ dòng điện dùng ampe kế.');
q('di-ohm', 'Để đo điện trở của một dây dẫn bằng ampe kế và vôn kế, ta mắc',
  'ampe kế nối tiếp với dây dẫn, vôn kế song song với dây dẫn', ['ampe kế song song với dây dẫn, vôn kế nối tiếp với dây dẫn', 'cả hai dụng cụ nối tiếp với dây dẫn', 'cả hai dụng cụ song song với dây dẫn'],
  'Sau đó tính R = U/I.');
q('di-ohm', 'Trên cùng một hệ trục, đồ thị I–U của dây dẫn thứ nhất dốc hơn (gần trục I hơn) đồ thị của dây dẫn thứ hai. Kết luận:',
  'R<sub>1</sub> < R<sub>2</sub>', ['R<sub>1</sub> > R<sub>2</sub>', 'R<sub>1</sub> = R<sub>2</sub>', 'không so sánh được'],
  'Cùng U, dây 1 cho I lớn hơn ⇒ R<sub>1</sub> = U/I<sub>1</sub> nhỏ hơn.');
q('di-ohm', 'Điện trở suất của một vật liệu có trị số bằng điện trở của một đoạn dây dẫn hình trụ làm bằng vật liệu đó có',
  'chiều dài 1 m và tiết diện 1 m<sup>2</sup>', ['chiều dài 1 m và tiết diện 1 mm<sup>2</sup>', 'chiều dài 1 cm và tiết diện 1 cm<sup>2</sup>', 'chiều dài 1 km và tiết diện 1 m<sup>2</sup>'],
  'Từ R = ρl/S, với l = 1 m, S = 1 m<sup>2</sup> thì R = ρ.');
q('di-ohm', 'Hai dây dẫn bằng đồng và nhôm có cùng chiều dài và tiết diện. So sánh điện trở:',
  'dây nhôm có điện trở lớn hơn dây đồng', ['dây đồng có điện trở lớn hơn dây nhôm', 'hai dây có điện trở bằng nhau', 'không so sánh được'],
  'ρ<sub>nhôm</sub> ≈ 2,8·10<sup>−8</sup> Ω·m > ρ<sub>đồng</sub> ≈ 1,7·10<sup>−8</sup> Ω·m.');
q('di-ohm', 'Dây đồng (ρ = 1,7·10<sup>−8</sup> Ω·m) dài 100 m, tiết diện 1,7 mm<sup>2</sup> có điện trở',
  '1 Ω', ['1000 Ω', '10<sup>−6</sup> Ω', '100 Ω'],
  'R = ρl/S = 1,7·10<sup>−8</sup>·100 / (1,7·10<sup>−6</sup>) = 1 Ω. Nhớ đổi 1,7 mm<sup>2</sup> = 1,7·10<sup>−6</sup> m<sup>2</sup>.', 1);
q('di-ohm', 'Một dây dẫn có điện trở 2 Ω được cắt thành hai đoạn bằng nhau rồi chập lại (mắc song song). Điện trở của bó dây là',
  '0,5 Ω', ['1 Ω', '2 Ω', '4 Ω'],
  'Mỗi nửa có R = 1 Ω; hai nửa song song: R = 1/2 = 0,5 Ω.', 1);
q('di-ohm', 'Kéo một dây dẫn để chiều dài tăng gấp 2 (thể tích không đổi). Điện trở của dây',
  'tăng 4 lần', ['tăng 2 lần', 'không đổi', 'giảm 2 lần'],
  'l gấp 2 thì S giảm nửa (thể tích không đổi) ⇒ R = ρl/S tăng 4 lần.', 1);
q('di-ohm', 'Đặt hiệu điện thế 12 V vào hai đầu điện trở thì cường độ dòng điện là 0,4 A. Điện trở có giá trị',
  '30 Ω', ['4,8 Ω', '0,033 Ω', '48 Ω'],
  'R = U/I = 12/0,4 = 30 Ω.');
q('di-ohm', 'Khi bóng đèn sợi đốt sáng, dây tóc nóng lên thì điện trở của dây tóc',
  'tăng lên', ['giảm xuống', 'không thay đổi', 'bằng 0'],
  'Điện trở của kim loại tăng khi nhiệt độ tăng.');
q('di-ohm', 'Phát biểu nào đúng về điện trở của một dây dẫn (nhiệt độ không đổi)?',
  'Điện trở không phụ thuộc vào hiệu điện thế đặt vào và dòng điện chạy qua dây', ['Điện trở tăng khi hiệu điện thế tăng', 'Điện trở giảm khi cường độ dòng điện tăng', 'Điện trở bằng 0 khi không có dòng điện chạy qua'],
  'Tỉ số U/I là hằng số với mỗi dây dẫn; R chỉ phụ thuộc bản chất dây.');
q('di-ohm', 'Biến trở con chạy mắc nối tiếp với một bóng đèn. Dịch con chạy để phần dây có dòng điện chạy qua dài hơn thì',
  'điện trở biến trở tăng, dòng điện giảm, đèn tối hơn', ['điện trở biến trở giảm, dòng điện tăng, đèn sáng hơn', 'dòng điện không đổi, đèn sáng như cũ', 'đèn sáng hơn vì hiệu điện thế nguồn tăng'],
  'R tăng ⇒ R<sub>mạch</sub> tăng ⇒ I = U/R giảm.');
q('di-ohm', 'Chất nào sau đây có điện trở suất rất lớn (chất cách điện)?',
  'Sứ', ['Đồng', 'Nhôm', 'Nicrom'],
  'Sứ, nhựa, cao su, thuỷ tinh... có điện trở suất lớn hơn kim loại hàng tỉ tỉ lần.');
q('di-ohm', 'Dây tóc bóng đèn sợi đốt làm bằng vonfram vì vonfram',
  'có nhiệt độ nóng chảy rất cao (khoảng 3400 °C)', ['có điện trở suất nhỏ nhất', 'rất rẻ và nhẹ', 'không dẫn điện'],
  'Dây tóc nóng tới hơn 2500 °C khi phát sáng nên cần kim loại khó nóng chảy.');
q('di-ohm', 'Một dây nicrom (ρ = 1,1·10<sup>−6</sup> Ω·m) dài 5 m, tiết diện 0,5 mm<sup>2</sup> có điện trở',
  '11 Ω', ['1,1 Ω', '110 Ω', '11·10<sup>6</sup> Ω'],
  'R = 1,1·10<sup>−6</sup>·5/(0,5·10<sup>−6</sup>) = 11 Ω.', 1);
q('di-ohm', 'Đặt vào hai đầu một điện trở hiệu điện thế 6 V thì dòng điện là 0,3 A. Nếu tăng hiệu điện thế lên 10 V thì dòng điện là',
  '0,5 A', ['0,3 A', '1 A', '0,18 A'],
  'R = 6/0,3 = 20 Ω; I = 10/20 = 0,5 A.');
q('di-ohm', 'Cường độ dòng điện qua một dây dẫn là 1,5 A khi hiệu điện thế là 12 V. Muốn dòng điện giảm còn 0,5 A thì hiệu điện thế phải',
  'giảm còn 4 V', ['tăng lên 36 V', 'giảm còn 6 V', 'giữ nguyên 12 V'],
  'I giảm 3 lần thì U cũng giảm 3 lần (R không đổi): U = 12/3 = 4 V.');

// --- Đoạn mạch nối tiếp, song song, hỗn hợp ---
q('di-mach', 'Trong đoạn mạch gồm hai điện trở mắc nối tiếp, phát biểu nào đúng?',
  'Cường độ dòng điện qua hai điện trở bằng nhau: I = I<sub>1</sub> = I<sub>2</sub>', ['Hiệu điện thế hai đầu mỗi điện trở bằng nhau', 'Điện trở tương đương nhỏ hơn mỗi điện trở thành phần', 'Cường độ dòng điện mạch chính bằng tổng cường độ qua mỗi điện trở'],
  'Nối tiếp: I chung; U = U<sub>1</sub> + U<sub>2</sub>; R = R<sub>1</sub> + R<sub>2</sub>.');
q('di-mach', 'Trong đoạn mạch gồm hai điện trở mắc song song, phát biểu nào đúng?',
  'Hiệu điện thế hai đầu mỗi điện trở bằng nhau: U = U<sub>1</sub> = U<sub>2</sub>', ['Cường độ dòng điện qua mỗi điện trở bằng nhau', 'Điện trở tương đương bằng tổng hai điện trở', 'Hiệu điện thế mạch chính bằng tổng hiệu điện thế hai đầu mỗi điện trở'],
  'Song song: U chung; I = I<sub>1</sub> + I<sub>2</sub>; 1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub>.');
q('di-mach', 'Với hai điện trở mắc nối tiếp, tỉ số hiệu điện thế U<sub>1</sub>/U<sub>2</sub> bằng',
  'R<sub>1</sub>/R<sub>2</sub>', ['R<sub>2</sub>/R<sub>1</sub>', '1', 'R<sub>1</sub>·R<sub>2</sub>'],
  'U = IR với I chung ⇒ U<sub>1</sub>/U<sub>2</sub> = R<sub>1</sub>/R<sub>2</sub>.');
q('di-mach', 'Với hai điện trở mắc song song, tỉ số cường độ dòng điện I<sub>1</sub>/I<sub>2</sub> bằng',
  'R<sub>2</sub>/R<sub>1</sub>', ['R<sub>1</sub>/R<sub>2</sub>', '1', 'R<sub>1</sub> + R<sub>2</sub>'],
  'I = U/R với U chung ⇒ I<sub>1</sub>/I<sub>2</sub> = R<sub>2</sub>/R<sub>1</sub>: dòng điện lớn hơn qua nhánh có điện trở nhỏ hơn.');
q('di-mach', 'n điện trở giống nhau, mỗi cái R, mắc song song thì điện trở tương đương là',
  'R/n', ['n·R', 'R', 'n/R'],
  '1/R<sub>tđ</sub> = n/R ⇒ R<sub>tđ</sub> = R/n.');
q('di-mach', 'Điện trở tương đương của đoạn mạch song song luôn',
  'nhỏ hơn mỗi điện trở thành phần', ['lớn hơn mỗi điện trở thành phần', 'bằng tổng các điện trở thành phần', 'bằng điện trở lớn nhất trong mạch'],
  '1/R<sub>tđ</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> > 1/R<sub>1</sub> ⇒ R<sub>tđ</sub> < R<sub>1</sub> (và < R<sub>2</sub>).');
q('di-mach', 'Các thiết bị điện trong gia đình (đèn, quạt, tủ lạnh...) được mắc song song với nhau vì',
  'mỗi thiết bị hoạt động độc lập và đều nhận đúng hiệu điện thế định mức 220 V', ['để tiết kiệm dây dẫn', 'để dòng điện qua các thiết bị bằng nhau', 'để khi một thiết bị hỏng thì tất cả cùng ngừng'],
  'Mắc song song: U chung, thiết bị này tắt không ảnh hưởng thiết bị khác.');
q('di-mach', 'Dây đèn trang trí kiểu cũ gồm nhiều bóng nhỏ mắc nối tiếp. Khi một bóng bị cháy thì',
  'tất cả các bóng đều tắt vì mạch bị hở', ['các bóng khác sáng hơn', 'chỉ bóng đó tắt, các bóng khác vẫn sáng', 'các bóng khác sáng yếu hơn'],
  'Mạch nối tiếp chỉ có một đường dẫn; hở tại một điểm là hở toàn mạch.');
q('di-mach', 'Hai điện trở 6 Ω và 3 Ω mắc song song có điện trở tương đương là',
  '2 Ω', ['9 Ω', '4,5 Ω', '18 Ω'],
  'R = 6·3/(6 + 3) = 2 Ω.');
q('di-mach', 'Hai bóng đèn có điện trở R<sub>1</sub> > R<sub>2</sub> mắc nối tiếp vào một nguồn điện. Đèn nào sáng hơn?',
  'Đèn R<sub>1</sub>, vì cùng I mà P = I<sup>2</sup>R lớn hơn', ['Đèn R<sub>2</sub>, vì điện trở nhỏ cho dòng điện lớn', 'Hai đèn sáng như nhau', 'Không xác định được'],
  'Nối tiếp thì I bằng nhau; công suất P = I<sup>2</sup>R lớn hơn ở điện trở lớn hơn.', 1);
q('di-mach', 'Hai bóng đèn có điện trở R<sub>1</sub> > R<sub>2</sub> mắc song song vào một nguồn điện. Đèn nào sáng hơn?',
  'Đèn R<sub>2</sub>, vì cùng U mà P = U<sup>2</sup>/R lớn hơn', ['Đèn R<sub>1</sub>, vì điện trở lớn toả nhiệt nhiều', 'Hai đèn sáng như nhau', 'Không xác định được'],
  'Song song thì U bằng nhau; P = U<sup>2</sup>/R lớn hơn ở điện trở nhỏ hơn.', 1);
q('di-mach', 'Ba điện trở giống nhau, mỗi cái 6 Ω, mắc song song. Điện trở tương đương là',
  '2 Ω', ['18 Ω', '3 Ω', '12 Ω'],
  'R = 6/3 = 2 Ω.');
q('di-mach', 'R<sub>1</sub> = 2 Ω mắc nối tiếp R<sub>2</sub> = 4 Ω, hiệu điện thế hai đầu R<sub>1</sub> là 4 V. Hiệu điện thế hai đầu đoạn mạch là',
  '12 V', ['4 V', '8 V', '6 V'],
  'I = 4/2 = 2 A; U<sub>2</sub> = 2·4 = 8 V; U = 4 + 8 = 12 V.', 1);
q('di-mach', 'Trong mạch điện nối tiếp, số chỉ của ampe kế',
  'như nhau tại mọi vị trí trong mạch', ['lớn nhất khi đặt gần cực dương của nguồn', 'lớn nhất khi đặt gần cực âm của nguồn', 'giảm dần theo chiều dòng điện'],
  'Cường độ dòng điện trong mạch nối tiếp có giá trị như nhau tại mọi điểm.');
q('di-mach', 'Mắc thêm một điện trở song song với đoạn mạch đang có thì điện trở tương đương của đoạn mạch',
  'giảm và cường độ dòng điện mạch chính tăng', ['tăng và cường độ dòng điện mạch chính giảm', 'không đổi', 'tăng và cường độ dòng điện mạch chính tăng'],
  'Thêm nhánh song song mở thêm đường cho dòng điện ⇒ R<sub>tđ</sub> giảm, I tăng (U không đổi).');
q('di-mach', 'Mắc thêm một điện trở nối tiếp vào đoạn mạch đang có (U không đổi) thì cường độ dòng điện trong mạch',
  'giảm vì điện trở tương đương tăng', ['tăng vì điện trở tương đương tăng', 'không đổi', 'tăng vì có thêm đường dẫn'],
  'R<sub>tđ</sub> = R + R<sub>thêm</sub> lớn hơn ⇒ I = U/R<sub>tđ</sub> nhỏ hơn.');
q('di-mach', 'R<sub>1</sub> và R<sub>2</sub> mắc song song, R<sub>1</sub> = 2R<sub>2</sub>. Cường độ dòng điện qua R<sub>1</sub>',
  'bằng nửa cường độ qua R<sub>2</sub>', ['gấp đôi cường độ qua R<sub>2</sub>', 'bằng cường độ qua R<sub>2</sub>', 'gấp 4 lần cường độ qua R<sub>2</sub>'],
  'I<sub>1</sub>/I<sub>2</sub> = R<sub>2</sub>/R<sub>1</sub> = 1/2.');
q('di-mach', 'Mạch gồm R<sub>1</sub> = 4 Ω mắc nối tiếp với đoạn (R<sub>2</sub> = 12 Ω song song R<sub>3</sub> = 12 Ω). Điện trở tương đương của mạch là',
  '10 Ω', ['28 Ω', '16 Ω', '6 Ω'],
  'R<sub>23</sub> = 12/2 = 6 Ω; R = 4 + 6 = 10 Ω.', 1);
q('di-mach', 'Mạch gồm (R<sub>1</sub> = 3 Ω nối tiếp R<sub>2</sub> = 3 Ω) rồi mắc song song với R<sub>3</sub> = 6 Ω. Điện trở tương đương của mạch là',
  '3 Ω', ['12 Ω', '2 Ω', '4 Ω'],
  'R<sub>12</sub> = 6 Ω; R = 6·6/(6 + 6) = 3 Ω.', 1);
q('di-mach', 'Cầu chì được mắc như thế nào trong mạch điện?',
  'Nối tiếp với thiết bị cần bảo vệ', ['Song song với thiết bị cần bảo vệ', 'Song song với nguồn điện', 'Ở bất kì vị trí nào'],
  'Mắc nối tiếp để khi dòng quá lớn, dây chì nóng chảy làm hở toàn mạch.');
q('di-mach', 'Ba bóng đèn giống nhau: đèn 1 và đèn 2 mắc nối tiếp với nhau, rồi cả cụm mắc song song với đèn 3, tất cả nối vào nguồn. Đèn nào sáng nhất?',
  'Đèn 3', ['Đèn 1', 'Đèn 2', 'Ba đèn sáng như nhau'],
  'Đèn 3 chịu toàn bộ U của nguồn; đèn 1 và 2 mỗi đèn chỉ chịu U/2.', 1);
q('di-mach', 'Hai điện trở mắc song song. Ampe kế mạch chính chỉ 3 A, ampe kế ở nhánh R<sub>1</sub> chỉ 1 A. Dòng điện qua R<sub>2</sub> là',
  '2 A', ['4 A', '3 A', '1 A'],
  'I = I<sub>1</sub> + I<sub>2</sub> ⇒ I<sub>2</sub> = 3 − 1 = 2 A.');
q('di-mach', 'Hai điện trở mắc nối tiếp, hiệu điện thế hai đầu R<sub>1</sub> gấp 3 lần hiệu điện thế hai đầu R<sub>2</sub>. Kết luận:',
  'R<sub>1</sub> = 3R<sub>2</sub>', ['R<sub>2</sub> = 3R<sub>1</sub>', 'R<sub>1</sub> = R<sub>2</sub>', 'R<sub>1</sub> = 9R<sub>2</sub>'],
  'Nối tiếp: U<sub>1</sub>/U<sub>2</sub> = R<sub>1</sub>/R<sub>2</sub> = 3.');
q('di-mach', 'Có nhiều điện trở loại 12 Ω. Muốn có điện trở tương đương 4 Ω ta mắc',
  '3 điện trở song song', ['3 điện trở nối tiếp', '2 điện trở song song', '4 điện trở song song'],
  '12/3 = 4 Ω.');
q('di-mach', 'Mắc điện trở 20 Ω song song với điện trở R thì được điện trở tương đương 4 Ω. Giá trị của R là',
  '5 Ω', ['16 Ω', '24 Ω', '80 Ω'],
  '1/R = 1/4 − 1/20 = 4/20 ⇒ R = 5 Ω.', 1);
q('di-mach', 'Mắc điện trở R nối tiếp với điện trở 8 Ω thì điện trở tương đương là 20 Ω. Giá trị của R là',
  '12 Ω', ['28 Ω', '2,5 Ω', '160 Ω'],
  'R = 20 − 8 = 12 Ω.');
q('di-mach', 'Có hai bóng đèn giống nhau loại 6 V và một nguồn 12 V. Để hai đèn sáng bình thường, phải mắc',
  'hai đèn nối tiếp với nhau rồi nối vào nguồn', ['hai đèn song song với nhau rồi nối vào nguồn', 'mỗi đèn trực tiếp vào nguồn', 'một đèn nối tiếp, một đèn song song'],
  'Nối tiếp hai đèn giống nhau, mỗi đèn nhận 12/2 = 6 V đúng định mức.', 1);
q('di-mach', 'Điện trở 30 Ω mắc song song với 60 Ω, rồi cả cụm nối tiếp với 10 Ω; đặt vào hai đầu mạch hiệu điện thế 12 V. Cường độ dòng điện mạch chính là',
  '0,4 A', ['0,12 A', '1,2 A', '0,3 A'],
  'R<sub>ss</sub> = 30·60/90 = 20 Ω; R = 20 + 10 = 30 Ω; I = 12/30 = 0,4 A.', 1);
q('di-mach', 'Hai điện trở giống nhau. Tỉ số điện trở tương đương khi mắc nối tiếp so với khi mắc song song là',
  '4', ['2', '1', '1/2'],
  'R<sub>nt</sub> = 2R, R<sub>ss</sub> = R/2 ⇒ tỉ số = 4.');
q('di-mach', 'Vôn kế dùng để đo hiệu điện thế được chế tạo có điện trở rất lớn để',
  'khi mắc song song vào mạch, dòng điện qua vôn kế rất nhỏ, không làm thay đổi đáng kể mạch cần đo', ['đo được dòng điện lớn', 'không bị cháy khi mắc nối tiếp', 'tăng hiệu điện thế của mạch'],
  'Ngược lại, ampe kế có điện trở rất nhỏ để không làm giảm dòng điện khi mắc nối tiếp.');
q('di-mach', 'Trong mạch có hai nhánh song song, nếu một nhánh bị đứt dây thì',
  'nhánh còn lại vẫn hoạt động bình thường', ['nhánh còn lại cũng ngừng hoạt động', 'nhánh còn lại nhận hiệu điện thế gấp đôi', 'cả mạch bị chập'],
  'Các nhánh song song độc lập với nhau về dòng điện.');
q('di-mach', 'Điện trở R<sub>1</sub> = 10 Ω, R<sub>2</sub> = 15 Ω mắc song song vào hiệu điện thế 6 V. Cường độ dòng điện mạch chính là',
  '1 A', ['0,24 A', '0,6 A', '2,5 A'],
  'I<sub>1</sub> = 6/10 = 0,6 A; I<sub>2</sub> = 6/15 = 0,4 A; I = 1 A (hoặc R<sub>tđ</sub> = 6 Ω, I = 6/6 = 1 A).', 1);
q('di-mach', 'Đoạn mạch gồm R<sub>1</sub> = 5 Ω nối tiếp R<sub>2</sub> = 15 Ω đặt vào hiệu điện thế 12 V. Hiệu điện thế hai đầu R<sub>2</sub> là',
  '9 V', ['3 V', '12 V', '6 V'],
  'I = 12/20 = 0,6 A; U<sub>2</sub> = 0,6·15 = 9 V (U<sub>2</sub> chiếm 15/20 của U).', 1);

// --- Năng lượng điện, công suất điện, an toàn điện ---
q('di-cong-suat', 'Công suất điện của một đoạn mạch được tính bằng',
  'P = U·I', ['P = U/I', 'P = I/U', 'P = U + I'],
  'P = UI; với điện trở thuần còn có P = I<sup>2</sup>R = U<sup>2</sup>/R.');
q('di-cong-suat', 'Trên bóng đèn có ghi 220 V – 100 W. Các số đó cho biết',
  'hiệu điện thế định mức 220 V và công suất định mức 100 W của đèn', ['hiệu điện thế 220 V và điện năng 100 W tiêu thụ mỗi giờ', 'đèn luôn tiêu thụ 100 W ở mọi hiệu điện thế', 'điện trở của đèn là 220 Ω'],
  'Khi dùng ở đúng 220 V đèn sáng bình thường và tiêu thụ đúng 100 W.');
q('di-cong-suat', 'Điện năng tiêu thụ A của một đoạn mạch được tính bằng',
  'A = P·t = U·I·t', ['A = P/t', 'A = U·I', 'A = U·t'],
  'Điện năng = công suất × thời gian.');
q('di-cong-suat', '1 kWh (một "số điện") bằng',
  '3 600 000 J', ['1000 J', '3600 J', '1 000 000 J'],
  '1 kWh = 1000 W × 3600 s = 3,6·10<sup>6</sup> J.');
q('di-cong-suat', 'Công tơ điện trong gia đình dùng để đo',
  'điện năng tiêu thụ (tính bằng kWh)', ['công suất tiêu thụ', 'cường độ dòng điện', 'hiệu điện thế'],
  'Mỗi số trên công tơ là 1 kWh.');
q('di-cong-suat', 'Bóng đèn 100 W thắp sáng liên tục trong 10 giờ tiêu thụ điện năng',
  '1 kWh', ['10 kWh', '1000 kWh', '0,1 kWh'],
  'A = 0,1 kW × 10 h = 1 kWh.');
q('di-cong-suat', 'Bếp điện 1000 W dùng 2 giờ mỗi ngày. Trong 30 ngày, bếp tiêu thụ',
  '60 kWh', ['2000 kWh', '30 kWh', '600 kWh'],
  'A = 1 kW × 2 h × 30 = 60 kWh.');
q('di-cong-suat', 'Quạt điện đang quay chuyển hoá điện năng chủ yếu thành',
  'cơ năng (và một phần nhỏ nhiệt năng)', ['quang năng', 'hoá năng', 'thế năng'],
  'Động cơ quạt biến điện năng thành cơ năng làm cánh quạt quay; dây quấn nóng lên là phần hao phí.');
q('di-cong-suat', 'Thiết bị nào chuyển hoá điện năng thành nhiệt năng là chủ yếu?',
  'Bàn là điện', ['Quạt điện', 'Đèn LED', 'Máy bơm nước'],
  'Bàn là, bếp điện, ấm điện dùng tác dụng nhiệt của dòng điện.');
q('di-cong-suat', 'Đèn LED 10 W cho độ sáng tương đương đèn sợi đốt 60 W. Điều này cho thấy',
  'đèn LED có hiệu suất phát sáng cao hơn, tiết kiệm điện hơn', ['đèn sợi đốt sáng hơn đèn LED', 'đèn LED tiêu thụ nhiều điện hơn', 'hai đèn có hiệu suất bằng nhau'],
  'Đèn sợi đốt biến phần lớn điện năng thành nhiệt (chỉ ~5% thành ánh sáng).');
q('di-cong-suat', 'Việc nào sau đây KHÔNG an toàn khi sử dụng điện?',
  'Dùng tay ướt cắm, rút phích điện', ['Ngắt nguồn điện trước khi sửa chữa thiết bị', 'Dùng dây dẫn có vỏ cách điện còn tốt', 'Lắp aptomat (cầu dao tự động) cho mạch điện gia đình'],
  'Nước dẫn điện, tay ướt làm tăng nguy cơ bị điện giật.');
q('di-cong-suat', 'Khi thấy người bị điện giật, việc đầu tiên cần làm là',
  'ngắt nguồn điện (rút phích, ngắt cầu dao) hoặc dùng vật cách điện khô tách người đó khỏi nguồn', ['dùng tay kéo ngay người đó ra', 'đổ nước lên người bị giật', 'gọi to và chờ người khác đến'],
  'Tuyệt đối không chạm trực tiếp vào người đang bị điện giật.');
q('di-cong-suat', 'Cầu chì và aptomat bảo vệ mạch điện bằng cách',
  'tự động ngắt mạch khi cường độ dòng điện vượt quá giá trị cho phép', ['tăng hiệu điện thế khi dòng điện yếu', 'giảm điện trở của mạch khi quá tải', 'làm mát dây dẫn'],
  'Dòng quá lớn làm dây chì nóng chảy (cầu chì) hoặc kích hoạt cơ cấu ngắt (aptomat).');
q('di-cong-suat', 'Một thiết bị có dòng điện định mức 5 A. Nên chọn cầu chì loại',
  '6 A (hơi lớn hơn dòng định mức)', ['1 A', '20 A', '50 A'],
  'Cầu chì phải chịu được dòng định mức nhưng ngắt kịp khi quá tải; chọn quá lớn thì không bảo vệ được.');
q('di-cong-suat', 'Hiệu điện thế được coi là an toàn với cơ thể người (trong điều kiện bình thường) là dưới',
  '40 V', ['220 V', '110 V', '1000 V'],
  'Thông thường U < 40 V được coi là an toàn; mạng điện 220 V rất nguy hiểm.');
q('di-cong-suat', 'Nhiệt lượng toả ra trên dây dẫn có điện trở R khi dòng điện I chạy qua trong thời gian t là',
  'Q = I<sup>2</sup>Rt', ['Q = IRt', 'Q = I<sup>2</sup>R/t', 'Q = U<sup>2</sup>Rt'],
  'Định luật Joule – Lenz: Q = I<sup>2</sup>Rt (J).');
q('di-cong-suat', 'Ấm điện ghi 220 V – 1100 W. Cường độ dòng điện định mức và điện trở của ấm là',
  '5 A và 44 Ω', ['0,2 A và 1100 Ω', '5 A và 220 Ω', '2 A và 110 Ω'],
  'I = P/U = 1100/220 = 5 A; R = U/I = 220/5 = 44 Ω.', 1);
q('di-cong-suat', 'Hai đèn 220 V – 40 W và 220 V – 100 W mắc song song vào 220 V. Đèn nào sáng hơn?',
  'Đèn 100 W', ['Đèn 40 W', 'Hai đèn sáng như nhau', 'Cả hai đèn đều không sáng'],
  'Mắc song song vào đúng hiệu điện thế định mức nên mỗi đèn đạt công suất định mức; 100 W > 40 W.');
q('di-cong-suat', 'Hai đèn 220 V – 40 W và 220 V – 100 W mắc nối tiếp vào 220 V. Đèn nào sáng hơn?',
  'Đèn 40 W, vì có điện trở lớn hơn (P = I<sup>2</sup>R)', ['Đèn 100 W, vì công suất định mức lớn hơn', 'Hai đèn sáng như nhau', 'Cả hai đèn sáng bình thường'],
  'R<sub>40</sub> = 220<sup>2</sup>/40 = 1210 Ω > R<sub>100</sub> = 484 Ω; nối tiếp cùng I nên đèn có R lớn toả nhiều công suất hơn.', 1);
q('di-cong-suat', 'Biện pháp nào sau đây KHÔNG giúp tiết kiệm điện năng?',
  'Để đèn, quạt hoạt động khi ra khỏi phòng', ['Chọn thiết bị có nhãn năng lượng nhiều sao', 'Dùng đèn LED thay đèn sợi đốt', 'Tận dụng ánh sáng tự nhiên ban ngày'],
  'Tắt thiết bị khi không dùng là cách tiết kiệm điện đơn giản nhất.');
q('di-cong-suat', 'Cắm quá nhiều thiết bị công suất lớn vào một ổ cắm có thể gây cháy vì',
  'dòng điện qua ổ cắm và dây dẫn rất lớn, toả nhiệt mạnh (Q = I<sup>2</sup>Rt)', ['hiệu điện thế của ổ cắm tăng lên', 'điện trở của dây dẫn tăng đột ngột', 'các thiết bị bị giảm công suất'],
  'Mắc song song nhiều thiết bị làm I mạch chính tăng; nhiệt lượng tăng theo I<sup>2</sup>.');
q('di-cong-suat', 'Dây dẫn điện trong nhà cần có tiết diện đủ lớn để',
  'điện trở nhỏ, ít toả nhiệt và không bị nóng quá mức khi dòng điện lớn', ['tăng hiệu điện thế cho thiết bị', 'dây nặng hơn, dễ đi dây', 'tăng điện trở, giảm dòng điện'],
  'R = ρl/S nhỏ khi S lớn ⇒ Q = I<sup>2</sup>Rt nhỏ.');
q('di-cong-suat', 'Số chỉ công tơ điện đầu tháng là 1250, cuối tháng là 1400. Điện năng tiêu thụ trong tháng là',
  '150 kWh', ['2650 kWh', '150 kW', '1400 kWh'],
  'A = 1400 − 1250 = 150 số = 150 kWh.');
q('di-cong-suat', 'Một bóng đèn 220 V – 100 W được mắc vào hiệu điện thế 110 V (coi điện trở không đổi). Công suất của đèn khi đó là',
  '25 W', ['50 W', '100 W', '200 W'],
  'P = U<sup>2</sup>/R: U giảm 2 lần ⇒ P giảm 4 lần: 100/4 = 25 W.', 1);
q('di-cong-suat', 'Trước khi sửa chữa điện trong nhà, việc cần làm đầu tiên là',
  'ngắt cầu dao (aptomat) tổng', ['đeo kính bảo hộ', 'dùng dây dẫn mới', 'lau sạch bụi các thiết bị'],
  'Đảm bảo không còn điện trong mạch trước khi chạm vào dây dẫn.');
q('di-cong-suat', 'Tủ lạnh, máy giặt thường có dây nối đất (tiếp đất) để',
  'khi vỏ máy bị rò điện, dòng điện truyền xuống đất thay vì qua người chạm vào', ['tăng công suất của thiết bị', 'giảm điện năng tiêu thụ', 'giữ cho vỏ máy luôn sạch'],
  'Dây tiếp đất là biện pháp an toàn điện quan trọng.');
q('di-cong-suat', 'Đèn sợi đốt chỉ biến khoảng 5% điện năng thành ánh sáng, phần còn lại thành',
  'nhiệt năng', ['cơ năng', 'hoá năng', 'năng lượng âm'],
  'Dây tóc nóng lên tới hàng nghìn độ, toả nhiệt ra môi trường.');
q('di-cong-suat', 'Điện trở 10 Ω có dòng điện 2 A chạy qua. Công suất toả nhiệt trên điện trở là',
  '40 W', ['20 W', '5 W', '400 W'],
  'P = I<sup>2</sup>R = 4·10 = 40 W.');
q('di-cong-suat', 'Một thiết bị 2 kW hoạt động trong 30 phút tiêu thụ điện năng',
  '1 kWh', ['60 kWh', '2 kWh', '0,5 kWh'],
  'A = 2 kW × 0,5 h = 1 kWh.');
q('di-cong-suat', 'Công suất điện của một đoạn mạch chỉ có điện trở R, hiệu điện thế U, còn được tính bằng',
  'P = U<sup>2</sup>/R', ['P = U<sup>2</sup>·R', 'P = R/U<sup>2</sup>', 'P = U·R'],
  'P = UI = U·(U/R) = U<sup>2</sup>/R.');
q('di-cong-suat', 'Điện trở của bóng đèn 220 V – 100 W khi sáng bình thường là',
  '484 Ω', ['2,2 Ω', '22 000 Ω', '220 Ω'],
  'R = U<sup>2</sup>/P = 220<sup>2</sup>/100 = 484 Ω.', 1);
q('di-cong-suat', 'Đun 1 kg nước (c = 4200 J/kg·K) từ 20 °C lên 100 °C bằng ấm điện 1000 W trong 400 s. Hiệu suất của ấm là',
  '84%', ['100%', '42%', '16%'],
  'Q = 4200·1·80 = 336 000 J; A = 1000·400 = 400 000 J; H = 336/400 = 84%.', 1);
q('di-cong-suat', 'Điện năng 1 kWh đủ để làm việc nào sau đây?',
  'Thắp một bóng đèn 50 W trong 20 giờ', ['Chạy một bếp điện 2000 W trong 2 giờ', 'Chạy điều hoà 1000 W trong 5 giờ', 'Thắp bóng đèn 100 W trong 100 giờ'],
  '50 W × 20 h = 1000 Wh = 1 kWh; các trường hợp còn lại cần 4 kWh, 5 kWh, 10 kWh.', 1);
q('di-cong-suat', 'Tại sao không nên dùng dây đồng hoặc dây sắt thay cho dây chì trong cầu chì?',
  'Vì đồng, sắt có nhiệt độ nóng chảy cao, khi quá tải dây không đứt kịp nên không bảo vệ được mạch', ['vì đồng, sắt không dẫn điện', 'vì đồng, sắt quá đắt', 'vì đồng, sắt làm giảm hiệu điện thế'],
  'Dây chì nóng chảy ở ~327 °C nên đứt ngay khi dòng quá lớn.');
q('di-cong-suat', 'Bàn là 220 V – 1000 W dùng đúng định mức trong 15 phút. Nhiệt lượng toả ra là',
  '900 kJ', ['15 kJ', '900 J', '15 000 kJ'],
  'Q = A = P·t = 1000 W × 900 s = 900 000 J = 900 kJ.', 1);
q('di-cong-suat', 'Khi dây dẫn bị hở lớp vỏ cách điện, cách xử lí an toàn là',
  'ngắt điện rồi bọc lại bằng băng keo cách điện hoặc thay dây mới', ['dùng băng keo giấy quấn khi mạch vẫn có điện', 'đặt dây lên cao cho khô', 'tiếp tục dùng nếu chưa thấy tia lửa điện'],
  'Không sửa chữa khi mạch đang có điện.');
