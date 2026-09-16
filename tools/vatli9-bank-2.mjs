// CHƯƠNG II — ÁNH SÁNG (câu viết tay)
import { q } from './vatli9-util.mjs';

// --- Khúc xạ ánh sáng, chiết suất ---
q('as-khuc-xa', 'Hiện tượng khúc xạ ánh sáng là hiện tượng',
  'tia sáng bị đổi hướng (gãy khúc) tại mặt phân cách khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác', ['tia sáng bị hắt trở lại môi trường cũ khi gặp mặt phân cách', 'tia sáng bị hấp thụ hoàn toàn khi vào môi trường mới', 'ánh sáng trắng bị tách thành nhiều màu'],
  'Khúc xạ: đường truyền của ánh sáng bị gãy khúc ở mặt phân cách giữa hai môi trường trong suốt.');
q('as-khuc-xa', 'Trong hiện tượng khúc xạ, tia khúc xạ nằm ở vị trí nào?',
  'Trong mặt phẳng tới, ở phía bên kia pháp tuyến so với tia tới', ['Trong mặt phẳng tới, cùng phía pháp tuyến với tia tới', 'Vuông góc với mặt phẳng tới', 'Trùng với pháp tuyến'],
  'Đó là nội dung của định luật khúc xạ ánh sáng.');
q('as-khuc-xa', 'Chiếu tia sáng từ không khí vào nước với góc tới i ≠ 0. Góc khúc xạ r so với góc tới',
  'nhỏ hơn góc tới (r < i)', ['lớn hơn góc tới (r > i)', 'bằng góc tới', 'bằng 90°'],
  'n<sub>nước</sub> > n<sub>kk</sub> nên sin r = sin i/n < sin i ⇒ r < i.');
q('as-khuc-xa', 'Chiếu tia sáng từ nước ra không khí với góc tới i nhỏ. Góc khúc xạ r so với góc tới',
  'lớn hơn góc tới (r > i)', ['nhỏ hơn góc tới (r < i)', 'bằng góc tới', 'bằng 0'],
  'Ánh sáng đi từ môi trường chiết quang hơn sang kém hơn nên tia khúc xạ lệch xa pháp tuyến: r > i.');
q('as-khuc-xa', 'Chiếu tia sáng vuông góc với mặt phân cách giữa không khí và thuỷ tinh (góc tới bằng 0). Tia sáng',
  'truyền thẳng, không bị đổi hướng', ['bị lệch một góc 45°', 'bị phản xạ toàn phần', 'bị lệch về phía pháp tuyến'],
  'Với i = 0 thì sin r = 0 ⇒ r = 0: tia sáng đi thẳng.');
q('as-khuc-xa', 'Biểu thức của định luật khúc xạ ánh sáng là',
  'n<sub>1</sub>·sin i = n<sub>2</sub>·sin r', ['n<sub>1</sub>·sin r = n<sub>2</sub>·sin i', 'n<sub>1</sub>·i = n<sub>2</sub>·r', 'sin i · sin r = n<sub>1</sub>·n<sub>2</sub>'],
  'n<sub>1</sub> là chiết suất môi trường chứa tia tới, n<sub>2</sub> là chiết suất môi trường chứa tia khúc xạ.');
q('as-khuc-xa', 'Chiết suất tuyệt đối n của một môi trường trong suốt được xác định bằng',
  'n = c/v, với c là tốc độ ánh sáng trong chân không, v là tốc độ ánh sáng trong môi trường', ['n = v/c', 'n = c·v', 'n = c − v'],
  'Vì v ≤ c nên n ≥ 1; không khí n ≈ 1.');
q('as-khuc-xa', 'Môi trường có chiết suất càng lớn thì tốc độ truyền ánh sáng trong môi trường đó',
  'càng nhỏ', ['càng lớn', 'không thay đổi', 'bằng tốc độ ánh sáng trong chân không'],
  'v = c/n: n lớn thì v nhỏ.');
q('as-khuc-xa', 'Nhìn từ trên xuống, đáy bể bơi trông nông hơn thực tế. Hiện tượng này do',
  'khúc xạ ánh sáng khi ánh sáng từ đáy bể truyền từ nước ra không khí', ['phản xạ ánh sáng ở mặt nước', 'tán sắc ánh sáng trong nước', 'ánh sáng bị nước hấp thụ'],
  'Tia sáng từ đáy bể ra không khí bị gãy khúc, mắt thấy ảnh của đáy bể ở gần mặt nước hơn.');
q('as-khuc-xa', 'Nhìn con cá đang bơi trong hồ, ta thấy cá ở vị trí',
  'cao hơn (gần mặt nước hơn) vị trí thật của nó', ['thấp hơn vị trí thật của nó', 'đúng vị trí thật của nó', 'xa bờ hơn vị trí thật'],
  'Ảnh của cá do khúc xạ nằm gần mặt nước hơn vị trí thật.');
q('as-khuc-xa', 'Nhúng một phần chiếc đũa vào cốc nước, nhìn nghiêng ta thấy đũa như bị gãy tại mặt nước. Đó là do',
  'hiện tượng khúc xạ ánh sáng', ['hiện tượng phản xạ ánh sáng', 'hiện tượng tán sắc ánh sáng', 'đũa bị nước làm cong'],
  'Ánh sáng từ phần đũa trong nước ra không khí bị đổi hướng nên ảnh của phần đó lệch so với phần trên.');
q('as-khuc-xa', 'Chiết suất của nước, thuỷ tinh thường và kim cương lần lượt vào khoảng',
  '1,33 – 1,5 – 2,42', ['1 – 1,33 – 1,5', '2,42 – 1,5 – 1,33', '0,75 – 0,67 – 0,41'],
  'Nước ≈ 4/3, thuỷ tinh ≈ 1,5, kim cương ≈ 2,42 (rất lớn).');
q('as-khuc-xa', 'Ánh sáng truyền từ thuỷ tinh (n = 1,5) sang nước (n ≈ 1,33) với góc tới i ≠ 0. Khi đó',
  'góc khúc xạ lớn hơn góc tới', ['góc khúc xạ nhỏ hơn góc tới', 'góc khúc xạ bằng góc tới', 'tia sáng không bị khúc xạ'],
  '1,5·sin i = 1,33·sin r ⇒ sin r > sin i ⇒ r > i.');
q('as-khuc-xa', 'Khi tăng góc tới i (cùng cặp môi trường) thì góc khúc xạ r',
  'tăng theo, nhưng không tỉ lệ thuận với i', ['giảm', 'không thay đổi', 'tăng và luôn bằng 2i'],
  'sin r = (n<sub>1</sub>/n<sub>2</sub>)·sin i: sin i tăng thì sin r tăng, nhưng quan hệ giữa i và r không phải tỉ lệ thuận.');
q('as-khuc-xa', 'Chiếu tia sáng từ không khí xiên góc vào mặt nước. Tại mặt nước',
  'xảy ra đồng thời phản xạ và khúc xạ', ['chỉ xảy ra khúc xạ', 'chỉ xảy ra phản xạ', 'xảy ra phản xạ toàn phần'],
  'Một phần ánh sáng phản xạ trở lại không khí, phần còn lại khúc xạ vào nước.');
q('as-khuc-xa', 'Chiết suất tỉ đối của môi trường 2 đối với môi trường 1 (n<sub>21</sub>) bằng',
  'n<sub>2</sub>/n<sub>1</sub> = v<sub>1</sub>/v<sub>2</sub>', ['n<sub>1</sub>/n<sub>2</sub>', 'n<sub>1</sub>·n<sub>2</sub>', 'v<sub>2</sub>/v<sub>1</sub>'],
  'n<sub>21</sub> = n<sub>2</sub>/n<sub>1</sub> = (c/v<sub>2</sub>)/(c/v<sub>1</sub>) = v<sub>1</sub>/v<sub>2</sub>.');
q('as-khuc-xa', 'Chiết suất của một môi trường trong suốt phụ thuộc vào',
  'bản chất của môi trường (và màu của ánh sáng)', ['góc tới của tia sáng', 'độ sáng của nguồn sáng', 'khoảng cách từ nguồn đến mặt phân cách'],
  'Chiết suất là đặc trưng của môi trường; với cùng môi trường, ánh sáng màu khác nhau có chiết suất hơi khác nhau.');
q('as-khuc-xa', 'Tia tới, tia khúc xạ và pháp tuyến tại điểm tới',
  'cùng nằm trong một mặt phẳng', ['nằm trong ba mặt phẳng khác nhau', 'luôn vuông góc với nhau từng đôi một', 'luôn trùng nhau'],
  'Đây là một nội dung của định luật khúc xạ.');
q('as-khuc-xa', 'Tốc độ ánh sáng trong chân không có giá trị gần bằng',
  '3·10<sup>8</sup> m/s', ['3·10<sup>6</sup> m/s', '340 m/s', '3·10<sup>10</sup> m/s'],
  'c ≈ 300 000 km/s = 3·10<sup>8</sup> m/s.');
q('as-khuc-xa', 'Người đứng trên bờ muốn phóng lao trúng con cá dưới nước thì phải nhắm',
  'thấp hơn (sâu hơn) vị trí nhìn thấy của con cá', ['đúng vị trí nhìn thấy của con cá', 'cao hơn vị trí nhìn thấy của con cá', 'lệch sang trái vị trí nhìn thấy'],
  'Vị trí nhìn thấy là ảnh nằm cao hơn vị trí thật, nên phải nhắm thấp hơn ảnh.');
q('as-khuc-xa', 'Một học sinh vẽ tia khúc xạ nằm cùng phía với tia tới so với pháp tuyến. Hình vẽ đó',
  'sai, vì tia khúc xạ phải nằm ở phía bên kia pháp tuyến', ['đúng khi ánh sáng đi từ không khí vào nước', 'đúng khi ánh sáng đi từ nước ra không khí', 'đúng trong mọi trường hợp'],
  'Theo định luật khúc xạ, tia khúc xạ ở bên kia pháp tuyến so với tia tới.');
q('as-khuc-xa', 'Với một cặp môi trường trong suốt xác định, tỉ số sin i / sin r',
  'là một hằng số bằng n<sub>2</sub>/n<sub>1</sub>', ['tăng khi góc tới tăng', 'giảm khi góc tới tăng', 'luôn bằng 1'],
  'Từ n<sub>1</sub>sin i = n<sub>2</sub>sin r ⇒ sin i/sin r = n<sub>2</sub>/n<sub>1</sub> = hằng số.');
q('as-khuc-xa', 'Trong thí nghiệm khúc xạ với bán trụ thuỷ tinh, một bạn đo được i = 30°, r ≈ 19,5° (sin 19,5° ≈ 0,333). Chiết suất của thuỷ tinh bằng khoảng',
  '1,5', ['0,67', '1,33', '2'],
  'n = sin i / sin r = 0,5/0,333 ≈ 1,5.', 1);
q('as-khuc-xa', 'Chiếu tia sáng từ không khí vào nước (n = 4/3) với góc tới 45°. Lấy sin 45° ≈ 0,71. Sin của góc khúc xạ bằng khoảng',
  '0,53', ['0,95', '0,71', '0,33'],
  'sin r = sin 45°/n = 0,71/1,33 ≈ 0,53 (r ≈ 32°).', 1);
q('as-khuc-xa', 'Chiếu tia sáng từ nước (n = 4/3) ra không khí với góc tới 30°. Sin của góc khúc xạ bằng',
  '2/3 ≈ 0,67', ['3/8 = 0,375', '1/2', '1'],
  'sin r = n·sin i = (4/3)·0,5 = 2/3 (r ≈ 42°).', 1);
q('as-khuc-xa', 'Khi ánh sáng đi từ môi trường chiết quang kém sang môi trường chiết quang hơn, tia khúc xạ',
  'lệch gần pháp tuyến hơn so với tia tới', ['lệch xa pháp tuyến hơn so với tia tới', 'trùng với tia tới', 'vuông góc với tia tới'],
  'n<sub>2</sub> > n<sub>1</sub> ⇒ r < i: tia khúc xạ gần pháp tuyến hơn.');
q('as-khuc-xa', 'Ánh sáng truyền trong thuỷ tinh có chiết suất 1,5 với tốc độ',
  '2·10<sup>8</sup> m/s', ['4,5·10<sup>8</sup> m/s', '3·10<sup>8</sup> m/s', '1,5·10<sup>8</sup> m/s'],
  'v = c/n = 3·10<sup>8</sup>/1,5 = 2·10<sup>8</sup> m/s.');
q('as-khuc-xa', 'Đặt đồng xu dưới đáy cốc rỗng rồi lùi ra xa đến khi vừa không nhìn thấy đồng xu. Đổ nước vào cốc, ta lại nhìn thấy đồng xu vì',
  'ánh sáng từ đồng xu bị khúc xạ khi ra khỏi nước và đi tới mắt', ['nước làm đồng xu nổi lên', 'nước phản xạ ánh sáng như gương', 'ánh sáng bị tán sắc trong nước'],
  'Nhờ khúc xạ, tia sáng từ đồng xu bị bẻ hướng nên tới được mắt người quan sát.');
q('as-khuc-xa', 'Chiết suất của không khí xấp xỉ bằng',
  '1', ['0', '1,33', '1,5'],
  'Tốc độ ánh sáng trong không khí gần bằng trong chân không nên n<sub>kk</sub> ≈ 1,0003 ≈ 1.');

// --- Phản xạ toàn phần ---
q('as-pxtp', 'Điều kiện để xảy ra hiện tượng phản xạ toàn phần là',
  'ánh sáng đi từ môi trường có chiết suất lớn sang môi trường có chiết suất nhỏ hơn và góc tới lớn hơn hoặc bằng góc tới hạn', ['ánh sáng đi từ môi trường có chiết suất nhỏ sang môi trường có chiết suất lớn hơn', 'góc tới bằng 0', 'ánh sáng đi từ không khí vào nước với góc tới lớn'],
  'Cả hai điều kiện phải đồng thời thoả mãn.');
q('as-pxtp', 'Góc tới hạn i<sub>th</sub> khi ánh sáng truyền từ môi trường có chiết suất n ra không khí được xác định bởi',
  'sin i<sub>th</sub> = 1/n', ['sin i<sub>th</sub> = n', 'tan i<sub>th</sub> = n', 'cos i<sub>th</sub> = 1/n'],
  'Khi r = 90°: n·sin i<sub>th</sub> = 1·sin 90° ⇒ sin i<sub>th</sub> = 1/n.');
q('as-pxtp', 'Khi xảy ra phản xạ toàn phần tại mặt phân cách hai môi trường,',
  'không có tia khúc xạ, toàn bộ ánh sáng bị phản xạ', ['tia khúc xạ song song với mặt phân cách', 'tia phản xạ và tia khúc xạ có cường độ bằng nhau', 'chỉ có tia khúc xạ, không có tia phản xạ'],
  'Toàn bộ năng lượng ánh sáng quay lại môi trường tới.');
q('as-pxtp', 'Ứng dụng quan trọng nhất của hiện tượng phản xạ toàn phần là',
  'cáp quang (sợi quang) truyền tín hiệu', ['gương phẳng trong nhà tắm', 'kính lúp', 'đèn pin'],
  'Ánh sáng truyền trong lõi sợi quang nhờ phản xạ toàn phần liên tiếp ở mặt phân cách lõi – vỏ.');
q('as-pxtp', 'Ánh sáng truyền từ không khí vào nước',
  'không thể xảy ra phản xạ toàn phần với bất kì góc tới nào', ['xảy ra phản xạ toàn phần khi góc tới lớn hơn 49°', 'xảy ra phản xạ toàn phần khi góc tới lớn hơn 42°', 'luôn xảy ra phản xạ toàn phần'],
  'Ánh sáng đi từ môi trường chiết suất nhỏ sang lớn thì luôn có tia khúc xạ.');
q('as-pxtp', 'Trong sợi quang, lõi và vỏ phải có chiết suất như thế nào?',
  'Chiết suất lõi lớn hơn chiết suất vỏ', ['Chiết suất lõi nhỏ hơn chiết suất vỏ', 'Chiết suất lõi bằng chiết suất vỏ', 'Vỏ phải là kim loại dẫn điện'],
  'Để xảy ra phản xạ toàn phần ở mặt phân cách lõi – vỏ, ánh sáng phải đi từ lõi (n lớn) sang vỏ (n nhỏ).');
q('as-pxtp', 'Góc tới hạn khi ánh sáng đi từ nước (n ≈ 1,33) ra không khí có giá trị gần',
  '49°', ['42°', '30°', '60°'],
  'sin i<sub>th</sub> = 1/1,33 ≈ 0,75 ⇒ i<sub>th</sub> ≈ 49°.');
q('as-pxtp', 'Góc tới hạn khi ánh sáng đi từ thuỷ tinh (n = 1,5) ra không khí có giá trị gần',
  '42°', ['49°', '30°', '56°'],
  'sin i<sub>th</sub> = 1/1,5 ≈ 0,667 ⇒ i<sub>th</sub> ≈ 42°.');
q('as-pxtp', 'Ánh sáng đi từ thuỷ tinh ra không khí với góc tới nhỏ hơn góc tới hạn. Tại mặt phân cách',
  'có cả tia phản xạ và tia khúc xạ', ['chỉ có tia phản xạ', 'chỉ có tia khúc xạ', 'không có tia nào'],
  'Chưa đạt góc tới hạn nên vẫn có tia khúc xạ, đồng thời có phản xạ một phần.');
q('as-pxtp', 'Khi góc tới đúng bằng góc tới hạn thì góc khúc xạ bằng',
  '90°', ['0°', '45°', 'bằng góc tới'],
  'Đó chính là định nghĩa góc tới hạn: tia khúc xạ đi là là mặt phân cách.');
q('as-pxtp', 'Ưu điểm của cáp quang so với cáp đồng trong truyền thông tin là',
  'truyền được lượng thông tin lớn, đi xa, ít hao phí và không bị nhiễu điện từ', ['dẫn điện tốt hơn', 'nặng hơn nên bền hơn', 'truyền được dòng điện mạnh'],
  'Tín hiệu ánh sáng trong sợi quang hầu như không bị mất do phản xạ toàn phần và không chịu nhiễu điện từ.');
q('as-pxtp', 'Kim cương lấp lánh hơn thuỷ tinh cùng hình dạng vì',
  'kim cương có chiết suất lớn nên góc tới hạn nhỏ, ánh sáng dễ bị phản xạ toàn phần nhiều lần bên trong', ['kim cương có chiết suất nhỏ hơn thuỷ tinh', 'kim cương phát ra ánh sáng', 'kim cương hấp thụ hết ánh sáng'],
  'n<sub>kim cương</sub> ≈ 2,42 ⇒ i<sub>th</sub> ≈ 24°, rất nhỏ.');
q('as-pxtp', 'Chiếu tia sáng từ thuỷ tinh (n = 1,5; i<sub>th</sub> ≈ 42°) ra không khí với góc tới 60°. Hiện tượng xảy ra là',
  'phản xạ toàn phần', ['khúc xạ với góc khúc xạ nhỏ hơn 60°', 'khúc xạ với góc khúc xạ bằng 60°', 'tia sáng truyền thẳng'],
  'i = 60° > i<sub>th</sub> ≈ 42° và ánh sáng đi từ môi trường chiết quang hơn ⇒ phản xạ toàn phần.', 1);
q('as-pxtp', 'Chiếu tia sáng từ nước (n = 4/3; i<sub>th</sub> ≈ 49°) ra không khí với góc tới 30°. Hiện tượng xảy ra là',
  'có tia khúc xạ ra không khí với góc khúc xạ lớn hơn 30°', ['phản xạ toàn phần', 'tia khúc xạ có góc khúc xạ nhỏ hơn 30°', 'tia sáng bị hấp thụ'],
  'i = 30° < i<sub>th</sub> nên vẫn khúc xạ; từ nước ra không khí thì r > i.', 1);
q('as-pxtp', 'Chiết suất của môi trường càng lớn thì góc tới hạn (khi ánh sáng ra không khí)',
  'càng nhỏ', ['càng lớn', 'không đổi', 'luôn bằng 45°'],
  'sin i<sub>th</sub> = 1/n: n tăng thì sin i<sub>th</sub> giảm ⇒ i<sub>th</sub> giảm.');
q('as-pxtp', 'Người thợ lặn dưới nước nhìn lên mặt nước theo phương xiên với góc lớn thấy mặt nước sáng như gương. Đó là do',
  'phản xạ toàn phần của ánh sáng từ trong nước tới mặt nước', ['tán sắc ánh sáng', 'khúc xạ ánh sáng từ không khí vào nước', 'mặt nước phát sáng'],
  'Tia sáng trong nước tới mặt nước với góc tới lớn hơn i<sub>th</sub> ≈ 49° sẽ bị phản xạ toàn phần.');
q('as-pxtp', 'Thiết bị nội soi trong y học truyền hình ảnh từ bên trong cơ thể ra ngoài nhờ',
  'bó sợi quang hoạt động dựa trên phản xạ toàn phần', ['gương cầu lõm', 'thấu kính phân kì', 'dây dẫn điện'],
  'Bó sợi quang mềm, dẫn ánh sáng vào và đưa hình ảnh ra ngoài.');
q('as-pxtp', 'Lăng kính phản xạ toàn phần (tiết diện tam giác vuông cân) được dùng trong ống nhòm để',
  'đổi hướng đường truyền của ánh sáng mà không hao phí như gương', ['tán sắc ánh sáng thành các màu', 'phóng to ảnh của vật', 'lọc bỏ ánh sáng màu đỏ'],
  'Ánh sáng tới mặt huyền với góc 45° > i<sub>th</sub> ≈ 42° nên phản xạ toàn phần, gần như không mất năng lượng.');
q('as-pxtp', 'Một tia sáng truyền từ môi trường có chiết suất 2 ra không khí. Góc tới hạn bằng',
  '30°', ['60°', '45°', '90°'],
  'sin i<sub>th</sub> = 1/2 ⇒ i<sub>th</sub> = 30°.', 1);

// --- Lăng kính, tán sắc, màu sắc ---
q('as-lang-kinh', 'Lăng kính là',
  'một khối chất trong suốt, đồng chất, thường có dạng lăng trụ tam giác', ['một khối trong suốt có hai mặt cầu', 'một tấm kính phẳng mỏng', 'một khối kim loại bóng'],
  'Hai mặt bên của lăng kính là hai mặt phẳng không song song.');
q('as-lang-kinh', 'Tia sáng đơn sắc đi qua lăng kính (đặt trong không khí) sẽ',
  'bị lệch về phía đáy của lăng kính', ['bị lệch về phía đỉnh của lăng kính', 'truyền thẳng không đổi hướng', 'bị tách thành nhiều màu'],
  'Sau hai lần khúc xạ, tia ló luôn lệch về phía đáy lăng kính.');
q('as-lang-kinh', 'Chiếu một chùm sáng trắng hẹp qua lăng kính, trên màn hứng thu được',
  'một dải màu liên tục từ đỏ đến tím', ['một vệt sáng trắng', 'chỉ hai màu đỏ và tím', 'một vệt sáng màu đen'],
  'Đó là hiện tượng tán sắc ánh sáng.');
q('as-lang-kinh', 'Thứ tự các màu trong dải tán sắc (từ phía lệch ít nhất đến lệch nhiều nhất) là',
  'đỏ, cam, vàng, lục, lam, chàm, tím', ['tím, chàm, lam, lục, vàng, cam, đỏ', 'đỏ, vàng, cam, lục, chàm, lam, tím', 'lục, lam, đỏ, cam, vàng, tím, chàm'],
  'Ánh sáng đỏ lệch ít nhất, ánh sáng tím lệch nhiều nhất.');
q('as-lang-kinh', 'Qua lăng kính, ánh sáng màu nào bị lệch nhiều nhất?',
  'Tím', ['Đỏ', 'Vàng', 'Lục'],
  'Chiết suất của lăng kính đối với ánh sáng tím lớn nhất nên tím lệch nhiều nhất.');
q('as-lang-kinh', 'Chiếu ánh sáng đơn sắc đỏ qua lăng kính. Kết quả là',
  'tia ló vẫn là ánh sáng đỏ, chỉ bị lệch hướng', ['tia ló tách thành nhiều màu', 'tia ló chuyển thành màu tím', 'ánh sáng bị lăng kính hấp thụ hết'],
  'Ánh sáng đơn sắc không bị tán sắc khi qua lăng kính.');
q('as-lang-kinh', 'Ánh sáng trắng (ánh sáng Mặt Trời) là',
  'hỗn hợp của nhiều ánh sáng màu khác nhau', ['ánh sáng đơn sắc màu trắng', 'hỗn hợp chỉ của ánh sáng đỏ và lục', 'ánh sáng không có màu nào'],
  'Thí nghiệm tán sắc cho thấy ánh sáng trắng gồm vô số ánh sáng màu từ đỏ đến tím.');
q('as-lang-kinh', 'Cầu vồng xuất hiện sau cơn mưa là do',
  'ánh sáng Mặt Trời bị tán sắc (khúc xạ và phản xạ) trong các giọt nước', ['phản xạ toàn phần trên mặt đường ướt', 'các giọt nước phát sáng', 'ánh sáng bị mây hấp thụ một phần'],
  'Mỗi giọt nước đóng vai trò như một lăng kính nhỏ.');
q('as-lang-kinh', 'Dưới ánh sáng trắng, ta thấy quả cà chua có màu đỏ vì',
  'quả cà chua tán xạ (phản xạ) mạnh ánh sáng đỏ và hấp thụ các ánh sáng màu khác', ['quả cà chua tự phát ra ánh sáng đỏ', 'quả cà chua hấp thụ ánh sáng đỏ', 'quả cà chua cho ánh sáng đỏ truyền qua'],
  'Màu của vật là màu ánh sáng mà vật tán xạ tới mắt ta.');
q('as-lang-kinh', 'Vật có màu trắng dưới ánh sáng trắng là vật',
  'tán xạ hầu hết các ánh sáng màu chiếu vào nó', ['hấp thụ hầu hết các ánh sáng màu chiếu vào nó', 'chỉ tán xạ ánh sáng trắng đơn sắc', 'cho mọi ánh sáng truyền qua'],
  'Tổng hợp mọi ánh sáng màu tán xạ cho ta cảm giác màu trắng.');
q('as-lang-kinh', 'Vật có màu đen là vật',
  'hấp thụ hầu hết ánh sáng chiếu vào nó', ['tán xạ hầu hết ánh sáng chiếu vào nó', 'phát ra ánh sáng màu đen', 'cho ánh sáng truyền qua hoàn toàn'],
  'Không có ánh sáng tán xạ tới mắt nên ta thấy vật màu đen.');
q('as-lang-kinh', 'Chiếu ánh sáng đỏ vào một chiếc lá xanh lục (chỉ tán xạ ánh sáng lục). Ta sẽ thấy chiếc lá có màu',
  'gần như đen', ['đỏ', 'lục', 'vàng'],
  'Lá hấp thụ ánh sáng đỏ, không có ánh sáng tán xạ tới mắt.');
q('as-lang-kinh', 'Chiếu ánh sáng đỏ lên một tờ giấy trắng trong phòng tối. Ta thấy tờ giấy có màu',
  'đỏ', ['trắng', 'đen', 'tím'],
  'Giấy trắng tán xạ mọi ánh sáng, chỉ có ánh sáng đỏ chiếu vào nên tán xạ ánh sáng đỏ.');
q('as-lang-kinh', 'Tấm lọc màu đỏ có tác dụng',
  'cho ánh sáng đỏ truyền qua, hấp thụ phần lớn các ánh sáng màu khác', ['hấp thụ ánh sáng đỏ, cho các màu khác truyền qua', 'biến mọi ánh sáng thành màu đỏ', 'phản xạ toàn bộ ánh sáng'],
  'Vì vậy nhìn qua tấm lọc đỏ ta thấy mọi thứ có màu đỏ hoặc tối.');
q('as-lang-kinh', 'Chiếu ánh sáng trắng qua tấm lọc màu lục, ánh sáng thu được sau tấm lọc là',
  'ánh sáng màu lục', ['ánh sáng trắng', 'ánh sáng đỏ', 'không có ánh sáng'],
  'Tấm lọc lục chỉ cho ánh sáng lục truyền qua.');
q('as-lang-kinh', 'Nhà khoa học đầu tiên dùng lăng kính phân tích ánh sáng trắng thành dải màu (năm 1666) là',
  'Newton', ['Galilei', 'Faraday', 'Ohm'],
  'Isaac Newton thực hiện thí nghiệm tán sắc ánh sáng nổi tiếng.');
q('as-lang-kinh', 'Chiết suất của thuỷ tinh đối với các ánh sáng màu sắp theo thứ tự tăng dần là',
  'đỏ < vàng < lục < tím', ['tím < lục < vàng < đỏ', 'lục < đỏ < tím < vàng', 'chiết suất bằng nhau với mọi màu'],
  'Ánh sáng tím có chiết suất lớn nhất, đỏ nhỏ nhất nên tím lệch nhiều nhất.');
q('as-lang-kinh', 'Lá cây có màu lục dưới ánh sáng Mặt Trời vì',
  'lá tán xạ mạnh ánh sáng lục và hấp thụ mạnh các màu khác', ['lá hấp thụ ánh sáng lục', 'lá phát ra ánh sáng lục', 'ánh sáng Mặt Trời chỉ có màu lục'],
  'Chất diệp lục hấp thụ mạnh ánh sáng đỏ và lam, tán xạ ánh sáng lục.');
q('as-lang-kinh', 'Muốn quan sát cầu vồng, người quan sát phải',
  'quay lưng về phía Mặt Trời và nhìn về phía màn mưa', ['nhìn thẳng về phía Mặt Trời', 'đứng dưới màn mưa', 'quan sát vào lúc giữa trưa nắng gắt'],
  'Ánh sáng Mặt Trời từ phía sau đi vào giọt nước, phản xạ và tán sắc rồi trở lại mắt người.');
q('as-lang-kinh', 'Ánh sáng màu nào truyền trong thuỷ tinh với tốc độ lớn nhất?',
  'Đỏ', ['Tím', 'Lục', 'Lam'],
  'v = c/n; chiết suất với ánh sáng đỏ nhỏ nhất nên tốc độ lớn nhất.');
q('as-lang-kinh', 'Vào mùa hè, mặc áo màu trắng thấy mát hơn áo màu đen vì áo trắng',
  'tán xạ phần lớn ánh sáng chiếu vào, hấp thụ ít năng lượng', ['hấp thụ nhiều ánh sáng hơn', 'cho ánh sáng truyền qua hoàn toàn', 'phát ra ánh sáng trắng làm mát'],
  'Vật màu đen hấp thụ hầu hết ánh sáng nên nóng lên nhiều hơn.');
q('as-lang-kinh', 'Trên sân khấu, chiếu đèn màu lam vào bộ váy trắng. Khán giả thấy bộ váy có màu',
  'lam', ['trắng', 'đen', 'đỏ'],
  'Vật trắng tán xạ mọi ánh sáng chiếu tới; chỉ có ánh sáng lam nên váy có màu lam.');
q('as-lang-kinh', 'Sự tán sắc ánh sáng xảy ra khi ánh sáng trắng đi qua lăng kính vì',
  'chiết suất của lăng kính khác nhau đối với các ánh sáng màu khác nhau', ['lăng kính hấp thụ một số màu', 'lăng kính phát ra ánh sáng màu', 'các mặt lăng kính phản xạ ánh sáng'],
  'Chiết suất khác nhau ⇒ góc lệch khác nhau ⇒ các màu tách rời.');
q('as-lang-kinh', 'Trộn ba chùm ánh sáng đỏ, lục và lam có cường độ thích hợp chiếu vào cùng một chỗ trên màn trắng, ta thu được ánh sáng',
  'trắng', ['đen', 'tím', 'vàng'],
  'Đỏ, lục, lam là ba màu cơ bản của ánh sáng; trộn với cường độ thích hợp cho ánh sáng trắng.');
q('as-lang-kinh', 'Một vật màu vàng (tán xạ mạnh ánh sáng vàng) đặt dưới ánh sáng đơn sắc màu vàng sẽ có màu',
  'vàng', ['trắng', 'đen', 'lục'],
  'Vật tán xạ ánh sáng vàng chiếu tới nên ta vẫn thấy vật màu vàng.');
q('as-lang-kinh', 'Đặt vật màu lam thuần dưới ánh sáng đỏ đơn sắc, ta thấy vật có màu',
  'gần như đen', ['lam', 'đỏ', 'tím'],
  'Vật lam hấp thụ ánh sáng đỏ, không tán xạ được nên ta thấy vật tối đen.');
q('as-lang-kinh', 'Hiện tượng nào sau đây KHÔNG liên quan đến tán sắc ánh sáng?',
  'Bóng của cây đổ trên mặt đất', ['Cầu vồng sau cơn mưa', 'Dải màu khi chiếu ánh sáng trắng qua lăng kính', 'Vệt màu trên bong bóng xà phòng dưới nắng'],
  'Bóng của vật hình thành do ánh sáng truyền thẳng, không liên quan đến tán sắc.');

// --- Thấu kính ---
q('as-thau-kinh', 'Thấu kính hội tụ có đặc điểm hình dạng',
  'phần rìa mỏng hơn phần giữa', ['phần rìa dày hơn phần giữa', 'hai mặt đều là mặt phẳng', 'chỉ có một mặt cầu lõm'],
  'Thấu kính hội tụ (thấu kính lồi) dày ở giữa, mỏng ở rìa.');
q('as-thau-kinh', 'Chùm tia sáng song song với trục chính đi qua thấu kính hội tụ sẽ',
  'hội tụ tại tiêu điểm chính F\' của thấu kính', ['phân kì như từ tiêu điểm phát ra', 'tiếp tục song song', 'hội tụ tại quang tâm O'],
  'Tiêu điểm chính F\' là nơi chùm tia song song với trục chính hội tụ sau thấu kính.');
q('as-thau-kinh', 'Chùm tia sáng song song với trục chính đi qua thấu kính phân kì sẽ',
  'loe rộng ra, có đường kéo dài đi qua tiêu điểm F\' phía trước thấu kính', ['hội tụ tại tiêu điểm phía sau thấu kính', 'tiếp tục song song', 'bị thấu kính hắt trở lại'],
  'Thấu kính phân kì làm chùm song song trở thành chùm phân kì, đường kéo dài các tia ló cắt nhau tại tiêu điểm ảo.');
q('as-thau-kinh', 'Tia sáng đi qua quang tâm O của thấu kính sẽ',
  'truyền thẳng, không bị đổi hướng', ['đi qua tiêu điểm chính', 'song song với trục chính', 'bị phản xạ ngược lại'],
  'Đây là một trong ba tia đặc biệt dùng để dựng ảnh.');
q('as-thau-kinh', 'Đối với thấu kính hội tụ, tia tới đi qua tiêu điểm F thì tia ló',
  'song song với trục chính', ['đi qua tiêu điểm F\'', 'đi qua quang tâm O', 'trùng với trục chính'],
  'Tính thuận nghịch của đường truyền ánh sáng: tia song song → qua F\'; tia qua F → song song.');
q('as-thau-kinh', 'Vật thật đặt ngoài khoảng tiêu cự của thấu kính hội tụ (d > f) cho ảnh',
  'thật, ngược chiều với vật', ['ảo, cùng chiều với vật', 'thật, cùng chiều với vật', 'ảo, ngược chiều với vật'],
  'Với d > f ảnh nằm bên kia thấu kính, hứng được trên màn, ngược chiều vật.');
q('as-thau-kinh', 'Vật thật đặt trong khoảng tiêu cự của thấu kính hội tụ (d < f) cho ảnh',
  'ảo, cùng chiều và lớn hơn vật', ['thật, ngược chiều và lớn hơn vật', 'ảo, cùng chiều và nhỏ hơn vật', 'thật, ngược chiều và nhỏ hơn vật'],
  'Đây là cách dùng thấu kính hội tụ làm kính lúp.');
q('as-thau-kinh', 'Vật thật đặt trước thấu kính phân kì luôn cho ảnh',
  'ảo, cùng chiều, nhỏ hơn vật và nằm trong khoảng tiêu cự', ['thật, ngược chiều, nhỏ hơn vật', 'ảo, cùng chiều, lớn hơn vật', 'thật, cùng chiều, bằng vật'],
  'Với mọi vị trí của vật thật, thấu kính phân kì luôn cho ảnh ảo nhỏ hơn vật.');
q('as-thau-kinh', 'Ảnh thật khác ảnh ảo ở điểm nào?',
  'Ảnh thật hứng được trên màn, ảnh ảo không hứng được trên màn', ['Ảnh thật luôn lớn hơn vật, ảnh ảo luôn nhỏ hơn vật', 'Ảnh thật luôn cùng chiều vật, ảnh ảo luôn ngược chiều vật', 'Ảnh thật chỉ do gương tạo ra, ảnh ảo chỉ do thấu kính tạo ra'],
  'Ảnh thật là giao điểm của các tia ló thực; ảnh ảo là giao của đường kéo dài các tia ló.');
q('as-thau-kinh', 'Vật ở rất xa thấu kính hội tụ (coi như ở vô cực) cho ảnh',
  'thật, rất nhỏ, nằm tại tiêu điểm F\'', ['ảo, rất lớn, ở vô cực', 'thật, bằng vật, cách thấu kính 2f', 'không có ảnh'],
  'Chùm tia từ vật rất xa coi như song song, hội tụ tại tiêu điểm.');
q('as-thau-kinh', 'Đặt vật đúng tại tiêu điểm F của thấu kính hội tụ. Ảnh của vật',
  'ở vô cực (không thu được ảnh)', ['là ảnh thật tại F\'', 'là ảnh ảo bằng vật', 'là ảnh thật cách thấu kính 2f'],
  'Các tia ló song song nhau nên không cắt nhau: ảnh ở vô cực.');
q('as-thau-kinh', 'Tiêu cự của thấu kính là',
  'khoảng cách từ quang tâm O đến tiêu điểm chính', ['khoảng cách giữa hai tiêu điểm', 'khoảng cách từ vật đến thấu kính', 'đường kính của thấu kính'],
  'f = OF = OF\'.');
q('as-thau-kinh', 'Cách nào sau đây KHÔNG dùng để nhận biết thấu kính hội tụ?',
  'Chiếu chùm sáng song song qua thấu kính thấy chùm ló loe rộng ra', ['Sờ thấy phần giữa dày hơn phần rìa', 'Dùng thấu kính hứng ánh sáng Mặt Trời tạo được điểm sáng nhỏ trên giấy', 'Đặt sát chữ viết thấy chữ được phóng to'],
  'Chùm ló loe rộng là dấu hiệu của thấu kính phân kì.');
q('as-thau-kinh', 'Kính đeo mắt của người cận thị là',
  'thấu kính phân kì', ['thấu kính hội tụ', 'gương cầu lõm', 'tấm kính phẳng'],
  'Kính cận là thấu kính phân kì (rìa dày hơn giữa) giúp ảnh của vật ở xa lùi về gần mắt.');
q('as-thau-kinh', 'Vật kính của máy ảnh là thấu kính hội tụ. Ảnh của vật trên cảm biến (phim) là',
  'ảnh thật, ngược chiều, nhỏ hơn vật', ['ảnh ảo, cùng chiều, nhỏ hơn vật', 'ảnh thật, cùng chiều, lớn hơn vật', 'ảnh ảo, ngược chiều, bằng vật'],
  'Vật ở xa (d > 2f) nên ảnh thật, ngược chiều, nhỏ hơn vật, nằm sau thấu kính.');
q('as-thau-kinh', 'Độ phóng đại ảnh (số phóng đại) của thấu kính được tính bằng',
  'k = h\'/h = d\'/d', ['k = h/h\' = d/d\'', 'k = f/d', 'k = d + d\''],
  'h\' là chiều cao ảnh, h là chiều cao vật; d\' khoảng cách ảnh, d khoảng cách vật.');
q('as-thau-kinh', 'Để đo tiêu cự của thấu kính hội tụ, người ta dịch vật và màn đến khi thu được ảnh rõ nét có kích thước bằng vật. Khi đó',
  'f = (d + d\')/4, với d = d\' = 2f', ['f = d + d\'', 'f = (d + d\')/2', 'f = d·d\''],
  'Ảnh bằng vật khi d = d\' = 2f, nên f = d/2 = (d + d\')/4.', 1);
q('as-thau-kinh', 'Dùng thấu kính hội tụ hứng ánh sáng Mặt Trời để đốt cháy tờ giấy. Khoảng cách từ thấu kính đến tờ giấy phải bằng',
  'tiêu cự f của thấu kính', ['2f', 'f/2', 'bất kì'],
  'Ánh sáng Mặt Trời coi như chùm song song, hội tụ tại tiêu điểm cách thấu kính đúng f.');
q('as-thau-kinh', 'Vật AB đặt trước thấu kính hội tụ tiêu cự 10 cm cho ảnh thật cao gấp 2 lần vật. Khoảng cách từ vật đến thấu kính là',
  '15 cm', ['30 cm', '20 cm', '5 cm'],
  'Ảnh thật gấp 2: d\' = 2d; 1/f = 1/d + 1/(2d) = 3/(2d) ⇒ d = 1,5f = 15 cm (ảnh cách 30 cm).', 1);
q('as-thau-kinh', 'Dịch vật từ xa lại gần thấu kính hội tụ nhưng vẫn ở ngoài khoảng tiêu cự. Ảnh thật của vật sẽ',
  'dịch ra xa thấu kính và lớn dần', ['dịch lại gần thấu kính và nhỏ dần', 'đứng yên nhưng lớn dần', 'dịch lại gần thấu kính và lớn dần'],
  'Từ 1/f = 1/d + 1/d\': d giảm thì d\' tăng, k = d\'/d tăng.');
q('as-thau-kinh', 'Đặt vật cách thấu kính hội tụ một khoảng d = 2f. Ảnh thu được',
  'là ảnh thật, ngược chiều, bằng vật và cách thấu kính 2f', ['là ảnh ảo, cùng chiều, bằng vật', 'là ảnh thật, lớn hơn vật, ở vô cực', 'là ảnh thật, nhỏ hơn vật, tại tiêu điểm'],
  '1/d\' = 1/f − 1/(2f) = 1/(2f) ⇒ d\' = 2f, k = 1.');
q('as-thau-kinh', 'Một thấu kính cho ảnh ảo lớn hơn vật. Thấu kính đó là',
  'thấu kính hội tụ, vật đặt trong khoảng tiêu cự', ['thấu kính phân kì', 'thấu kính hội tụ, vật đặt ngoài khoảng tiêu cự', 'thấu kính bất kì'],
  'Chỉ thấu kính hội tụ với d < f mới cho ảnh ảo lớn hơn vật.');
q('as-thau-kinh', 'Đặt một vật trước thấu kính, nhìn qua thấu kính thấy ảnh cùng chiều và nhỏ hơn vật. Thấu kính đó là',
  'thấu kính phân kì', ['thấu kính hội tụ', 'gương phẳng', 'lăng kính'],
  'Ảnh ảo cùng chiều nhỏ hơn vật là đặc trưng của thấu kính phân kì.');
q('as-thau-kinh', 'Mỗi thấu kính mỏng có',
  'hai tiêu điểm chính F và F\' đối xứng nhau qua quang tâm O', ['một tiêu điểm duy nhất', 'hai tiêu điểm nằm cùng một phía', 'vô số tiêu điểm trên trục chính'],
  'F và F\' nằm trên trục chính, cách O một khoảng bằng tiêu cự f.');
q('as-thau-kinh', 'Máy chiếu tạo ảnh lớn trên màn từ một tấm phim (hoặc màn hình) nhỏ. Tấm phim được đặt',
  'trong khoảng từ f đến 2f trước thấu kính hội tụ', ['trong khoảng tiêu cự của thấu kính hội tụ', 'cách thấu kính lớn hơn 2f', 'trước thấu kính phân kì'],
  'Với f < d < 2f, thấu kính hội tụ cho ảnh thật lớn hơn vật (hứng được trên màn).');
q('as-thau-kinh', 'Đối với thấu kính phân kì, tia tới song song với trục chính thì tia ló',
  'có đường kéo dài đi qua tiêu điểm F\' ở cùng phía với tia tới', ['đi qua tiêu điểm F\' ở phía bên kia thấu kính', 'đi qua quang tâm', 'song song với trục chính'],
  'Tiêu điểm của thấu kính phân kì là tiêu điểm ảo.');
q('as-thau-kinh', 'Khi vật dịch chuyển từ rất xa tới tiêu điểm F của thấu kính hội tụ, ảnh thật của vật dịch chuyển',
  'từ tiêu điểm F\' ra xa vô cực', ['từ vô cực về tiêu điểm F\'', 'từ F\' về quang tâm O', 'không thay đổi vị trí'],
  'd giảm từ ∞ tới f thì d\' tăng từ f tới ∞.');
q('as-thau-kinh', 'Công thức thấu kính (với ảnh thật) là',
  '1/f = 1/d + 1/d\'', ['f = d + d\'', '1/f = 1/d − 1/d\'', 'f = d·d\''],
  'd là khoảng cách từ vật, d\' từ ảnh đến thấu kính; với ảnh ảo dùng 1/f = 1/d − 1/d\'.');
q('as-thau-kinh', 'Vật AB cao 2 cm đặt cách thấu kính hội tụ (f = 12 cm) một khoảng 36 cm. Ảnh có chiều cao',
  '1 cm', ['4 cm', '2 cm', '6 cm'],
  '1/d\' = 1/12 − 1/36 = 2/36 ⇒ d\' = 18 cm; h\' = h·d\'/d = 2·18/36 = 1 cm.', 1);
q('as-thau-kinh', 'Vật đặt cách thấu kính phân kì (f = 20 cm) một khoảng 20 cm. Ảnh cách thấu kính',
  '10 cm', ['20 cm', '40 cm', '5 cm'],
  'Thấu kính phân kì cho ảnh ảo: 1/d\' = 1/d + 1/f = 1/20 + 1/20 = 1/10 ⇒ d\' = 10 cm (ảnh ảo, cùng phía với vật).', 1);
q('as-thau-kinh', 'Thấu kính có tiêu cự càng ngắn thì',
  'hội tụ (hoặc phân kì) ánh sáng càng mạnh', ['hội tụ ánh sáng càng yếu', 'không có tiêu điểm', 'cho ảnh luôn bằng vật'],
  'Tiêu cự ngắn ⇒ độ tụ lớn ⇒ làm tia sáng lệch nhiều hơn.');
q('as-thau-kinh', 'Đặt vật trước thấu kính hội tụ, thu được ảnh thật nhỏ hơn vật. Vật đang ở khoảng cách',
  'lớn hơn 2f', ['trong khoảng từ f đến 2f', 'nhỏ hơn f', 'đúng bằng f'],
  'd > 2f ⇒ f < d\' < 2f ⇒ k = d\'/d < 1.');
q('as-thau-kinh', 'Ảnh của vật qua thấu kính hội tụ có độ phóng đại k = 0,5 (ảnh thật). Nhận xét nào đúng?',
  'Ảnh nhỏ bằng nửa vật và cách thấu kính một khoảng bằng nửa khoảng cách vật', ['Ảnh lớn gấp 2 vật', 'Ảnh cách thấu kính gấp 2 lần khoảng cách vật', 'Ảnh bằng vật'],
  'k = h\'/h = d\'/d = 0,5.');

// --- Kính lúp ---
q('as-kinh-lup', 'Kính lúp là',
  'thấu kính hội tụ có tiêu cự ngắn', ['thấu kính phân kì có tiêu cự ngắn', 'thấu kính hội tụ có tiêu cự rất dài', 'gương cầu lồi'],
  'Kính lúp dùng thấu kính hội tụ tiêu cự ngắn để tạo ảnh ảo lớn hơn vật.');
q('as-kinh-lup', 'Số bội giác G của kính lúp liên hệ với tiêu cự f (cm) theo công thức',
  'G = 25/f', ['G = f/25', 'G = 25·f', 'G = 25 − f'],
  'G = 25/f với f tính bằng cm.');
q('as-kinh-lup', 'Kính lúp ghi 5× có tiêu cự bằng',
  '5 cm', ['25 cm', '125 cm', '0,2 cm'],
  'f = 25/G = 25/5 = 5 cm.');
q('as-kinh-lup', 'Muốn quan sát vật qua kính lúp cho ảnh lớn hơn vật, phải đặt vật',
  'trong khoảng tiêu cự của kính (d < f)', ['ngoài khoảng tiêu cự của kính', 'cách kính đúng 2f', 'ở rất xa kính'],
  'Khi đó ảnh là ảnh ảo, cùng chiều, lớn hơn vật.');
q('as-kinh-lup', 'Kính lúp có số bội giác càng lớn thì tiêu cự',
  'càng ngắn', ['càng dài', 'không phụ thuộc', 'luôn bằng 25 cm'],
  'G = 25/f: G lớn ⇔ f nhỏ.');
q('as-kinh-lup', 'Kính lúp KHÔNG được dùng để',
  'quan sát các ngôi sao trên trời', ['đọc chữ nhỏ trên bản đồ', 'quan sát các chi tiết nhỏ của linh kiện điện tử', 'quan sát côn trùng nhỏ'],
  'Kính lúp dùng cho vật nhỏ ở gần; quan sát vật ở xa cần ống nhòm hoặc kính thiên văn.');
q('as-kinh-lup', 'Hai kính lúp có số bội giác 3× và 10×. So sánh hai kính:',
  'kính 10× có tiêu cự ngắn hơn và cho ảnh lớn hơn', ['kính 3× có tiêu cự ngắn hơn', 'hai kính có tiêu cự bằng nhau', 'kính 10× cho ảnh nhỏ hơn'],
  'f<sub>10×</sub> = 2,5 cm < f<sub>3×</sub> ≈ 8,3 cm.');
q('as-kinh-lup', 'Kính lúp ghi 8× có tiêu cự khoảng',
  '3,1 cm', ['8 cm', '200 cm', '0,32 cm'],
  'f = 25/8 = 3,125 cm ≈ 3,1 cm.');
q('as-kinh-lup', 'Một thấu kính hội tụ có tiêu cự 20 cm. Nếu dùng làm kính lúp thì số bội giác bằng',
  '1,25×', ['5×', '20×', '0,8×'],
  'G = 25/20 = 1,25 — quá nhỏ nên không phù hợp làm kính lúp.');
q('as-kinh-lup', 'Muốn nhìn thấy ảnh lớn nhất của một con kiến, nên dùng kính lúp nào?',
  'Kính 5×', ['Kính 2×', 'Kính 3×', 'Kính 1,5×'],
  'Số bội giác càng lớn ảnh càng lớn.');
q('as-kinh-lup', 'Quan sát qua kính lúp thấy ảnh bị mờ hoặc ngược chiều. Cần làm gì?',
  'Dịch kính lại gần vật để vật nằm trong khoảng tiêu cự', ['Dịch kính ra xa vật hơn nữa', 'Đổi sang thấu kính phân kì', 'Nhắm một mắt lại'],
  'Vật phải ở trong khoảng tiêu cự để có ảnh ảo, cùng chiều, rõ nét.');
q('as-kinh-lup', 'Ảnh của vật quan sát qua kính lúp là',
  'ảnh ảo, cùng chiều, lớn hơn vật', ['ảnh thật, ngược chiều, lớn hơn vật', 'ảnh ảo, cùng chiều, nhỏ hơn vật', 'ảnh thật, cùng chiều, bằng vật'],
  'Kính lúp là thấu kính hội tụ, vật đặt trong khoảng tiêu cự.');
q('as-kinh-lup', 'Người thợ sửa đồng hồ dùng kính lúp 5× (f = 5 cm). Vật cần quan sát phải đặt cách kính',
  'nhỏ hơn 5 cm', ['đúng 5 cm', 'từ 5 cm đến 10 cm', 'lớn hơn 10 cm'],
  'Vật phải nằm trong khoảng tiêu cự: d < f = 5 cm.');
q('as-kinh-lup', 'Số bội giác của kính lúp cho biết',
  'ảnh quan sát được qua kính lớn gấp bao nhiêu lần so với khi nhìn trực tiếp vật (ở khoảng cực cận 25 cm)', ['tiêu cự của kính tính bằng cm', 'khoảng cách từ vật đến kính', 'số lần kính phóng to khoảng cách nhìn'],
  'G càng lớn thì ảnh nhìn qua kính càng lớn.');
q('as-kinh-lup', 'Kính lúp có tiêu cự 2,5 cm có số bội giác',
  '10×', ['2,5×', '25×', '5×'],
  'G = 25/2,5 = 10.');
q('as-kinh-lup', 'Khi dùng kính lúp quan sát vật đặt ở khoảng cách d < f, nếu dịch vật lại gần kính hơn nữa (vẫn d < f) thì ảnh ảo',
  'nhỏ đi và dịch lại gần kính', ['lớn lên và dịch ra xa kính', 'không thay đổi', 'trở thành ảnh thật'],
  'Với thấu kính hội tụ, ảnh ảo càng lớn khi vật càng gần tiêu điểm; vật sát kính thì ảnh gần bằng vật.', 1);
