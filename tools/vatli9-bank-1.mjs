// CHƯƠNG I — NĂNG LƯỢNG CƠ HỌC (câu viết tay)
import { q } from './vatli9-util.mjs';

// --- Động năng, thế năng ---
q('cn-dong-the', 'Động năng của một vật phụ thuộc vào những yếu tố nào?',
  'Khối lượng và tốc độ của vật', ['Chỉ khối lượng của vật', 'Khối lượng và độ cao của vật', 'Hình dạng và màu sắc của vật'],
  'W<sub>đ</sub> = ½mv<sup>2</sup>: động năng phụ thuộc khối lượng m và tốc độ v.');
q('cn-dong-the', 'Công thức tính động năng của một vật khối lượng m chuyển động với tốc độ v là',
  'W<sub>đ</sub> = ½mv<sup>2</sup>', ['W<sub>đ</sub> = mv<sup>2</sup>', 'W<sub>đ</sub> = ½mv', 'W<sub>đ</sub> = m·v'],
  'Động năng W<sub>đ</sub> = ½mv<sup>2</sup>, đơn vị jun (J) khi m tính bằng kg, v tính bằng m/s.');
q('cn-dong-the', 'Khi tốc độ của một vật tăng gấp đôi (khối lượng không đổi) thì động năng của vật',
  'tăng 4 lần', ['tăng 2 lần', 'tăng 8 lần', 'không thay đổi'],
  'Động năng tỉ lệ với v<sup>2</sup>, v tăng 2 lần thì W<sub>đ</sub> tăng 2<sup>2</sup> = 4 lần.');
q('cn-dong-the', 'Một ô tô tăng tốc từ 10 m/s lên 30 m/s. Động năng của ô tô đã tăng bao nhiêu lần?',
  '9 lần', ['3 lần', '6 lần', '20 lần'],
  'v tăng 3 lần nên W<sub>đ</sub> tăng 3<sup>2</sup> = 9 lần.');
q('cn-dong-the', 'Hai vật chuyển động cùng tốc độ, vật thứ nhất có khối lượng gấp 2 lần vật thứ hai. So sánh động năng hai vật.',
  'Động năng vật thứ nhất gấp 2 lần vật thứ hai', ['Động năng vật thứ nhất gấp 4 lần vật thứ hai', 'Hai vật có động năng bằng nhau', 'Động năng vật thứ nhất bằng nửa vật thứ hai'],
  'Cùng v, W<sub>đ</sub> tỉ lệ thuận với m nên gấp 2 lần.');
q('cn-dong-the', 'Hai viên bi cùng khối lượng, viên A lăn với tốc độ 3 m/s, viên B lăn với tốc độ 1 m/s. Tỉ số động năng W<sub>A</sub>/W<sub>B</sub> bằng',
  '9', ['3', '6', '1,5'],
  'W<sub>A</sub>/W<sub>B</sub> = (v<sub>A</sub>/v<sub>B</sub>)<sup>2</sup> = 3<sup>2</sup> = 9.');
q('cn-dong-the', 'Đơn vị đo động năng trong hệ SI là',
  'jun (J)', ['niutơn (N)', 'oát (W)', 'kilôgam (kg)'],
  'Động năng là một dạng năng lượng, đơn vị là jun (J).');
q('cn-dong-the', 'Thế năng trọng trường của một vật phụ thuộc vào',
  'trọng lượng của vật và độ cao của vật so với mốc', ['tốc độ và khối lượng của vật', 'hình dạng và thể tích của vật', 'nhiệt độ và khối lượng của vật'],
  'W<sub>t</sub> = P·h: phụ thuộc trọng lượng P và độ cao h so với vị trí chọn làm mốc.');
q('cn-dong-the', 'Công thức tính thế năng trọng trường của vật có trọng lượng P ở độ cao h so với mốc là',
  'W<sub>t</sub> = P·h', ['W<sub>t</sub> = P/h', 'W<sub>t</sub> = ½P·h', 'W<sub>t</sub> = P·h<sup>2</sup>'],
  'Thế năng trọng trường W<sub>t</sub> = P·h (P tính bằng N, h tính bằng m thì W<sub>t</sub> tính bằng J).');
q('cn-dong-the', 'Chọn mặt đất làm mốc thế năng. Một quyển sách nằm yên trên mặt đất có thế năng trọng trường bằng',
  '0', ['giá trị lớn nhất', 'một giá trị âm', 'trọng lượng của quyển sách'],
  'Tại mốc thế năng h = 0 nên W<sub>t</sub> = P·0 = 0.');
q('cn-dong-the', 'Nâng một vật từ độ cao h lên độ cao 2h (so với mặt đất làm mốc). Thế năng trọng trường của vật',
  'tăng gấp 2 lần', ['tăng gấp 4 lần', 'không thay đổi', 'giảm đi một nửa'],
  'W<sub>t</sub> = P·h tỉ lệ thuận với h nên tăng gấp 2.');
q('cn-dong-the', 'Một xe đồ chơi chạy thẳng đều trên mặt bàn nằm ngang. Nhận xét nào đúng về động năng của xe?',
  'Động năng không đổi vì tốc độ không đổi', ['Động năng tăng dần vì xe đi được quãng đường dài hơn', 'Động năng giảm dần vì xe mất dần năng lượng', 'Động năng bằng 0 vì xe không đổi độ cao'],
  'Chuyển động thẳng đều có tốc độ không đổi, m không đổi nên W<sub>đ</sub> = ½mv<sup>2</sup> không đổi.');
q('cn-dong-the', 'Vật nào sau đây có động năng?',
  'Ô tô đang chạy trên đường', ['Quyển sách nằm yên trên bàn', 'Quả táo treo yên trên cây', 'Hòn đá nằm yên trên đỉnh dốc'],
  'Chỉ vật đang chuyển động mới có động năng.');
q('cn-dong-the', 'Chọn mặt đất làm mốc. Vật nào sau đây có thế năng trọng trường lớn nhất? (lấy P = 10m)',
  'Vật 2 kg ở độ cao 3 m', ['Vật 3 kg ở độ cao 1 m', 'Vật 1 kg ở độ cao 5 m', 'Vật 5 kg ở độ cao 1 m'],
  'W<sub>t</sub> = 10m·h: 2 kg ở 3 m cho 60 J; các vật còn lại lần lượt 30 J, 50 J, 50 J.', 1);
q('cn-dong-the', 'Thế năng trọng trường của một vật có giá trị âm khi',
  'vật ở vị trí thấp hơn mốc thế năng', ['vật đứng yên', 'khối lượng của vật rất nhỏ', 'vật ở đúng vị trí mốc thế năng'],
  'Với h < 0 (dưới mốc) thì W<sub>t</sub> = P·h < 0. Giá trị thế năng phụ thuộc cách chọn mốc.');
q('cn-dong-the', 'Một ô tô khối lượng 1000 kg chạy với tốc độ 36 km/h. Động năng của ô tô là',
  '50 000 J', ['648 000 J', '18 000 J', '5000 J'],
  '36 km/h = 10 m/s. W<sub>đ</sub> = ½·1000·10<sup>2</sup> = 50 000 J. Nếu quên đổi đơn vị sẽ ra 648 000 J (sai).', 1);
q('cn-dong-the', 'Một bạn nói: "Vật đứng yên thì không có năng lượng". Nhận xét nào đúng?',
  'Sai, vì vật đứng yên vẫn có thể có thế năng', ['Đúng, vì năng lượng luôn gắn với chuyển động', 'Đúng, nếu vật ở trên mặt đất', 'Sai, vì vật đứng yên vẫn có động năng'],
  'Vật đứng yên trên cao có thế năng trọng trường (và có thể có thế năng đàn hồi, nhiệt năng...).');
q('cn-dong-the', 'Một vật đang rơi tự do (bỏ qua sức cản không khí). Trong quá trình rơi',
  'động năng tăng, thế năng giảm', ['động năng giảm, thế năng tăng', 'động năng và thế năng đều tăng', 'động năng và thế năng đều giảm'],
  'Tốc độ tăng nên W<sub>đ</sub> tăng; độ cao giảm nên W<sub>t</sub> giảm.');
q('cn-dong-the', 'Ném một quả bóng thẳng đứng lên cao. Trong lúc bóng đi lên (bỏ qua sức cản)',
  'động năng giảm, thế năng tăng', ['động năng tăng, thế năng giảm', 'động năng không đổi, thế năng tăng', 'động năng và thế năng đều tăng'],
  'Bóng chậm dần khi lên cao: W<sub>đ</sub> giảm, W<sub>t</sub> tăng.');
q('cn-dong-the', 'Con lắc đang dao động. Tại vị trí thấp nhất (vị trí cân bằng) của quỹ đạo',
  'động năng lớn nhất, thế năng nhỏ nhất', ['động năng nhỏ nhất, thế năng lớn nhất', 'động năng và thế năng đều lớn nhất', 'động năng và thế năng đều bằng 0'],
  'Ở vị trí thấp nhất con lắc chuyển động nhanh nhất và có độ cao nhỏ nhất.');
q('cn-dong-the', 'Con lắc đang dao động. Tại hai vị trí biên (cao nhất) của quỹ đạo',
  'thế năng lớn nhất, động năng bằng 0', ['động năng lớn nhất, thế năng bằng 0', 'thế năng và động năng bằng nhau', 'cơ năng bằng 0'],
  'Ở biên con lắc dừng lại tức thời (v = 0) nên W<sub>đ</sub> = 0, độ cao lớn nhất nên W<sub>t</sub> cực đại.');
q('cn-dong-the', 'Động năng là năng lượng mà vật có được do',
  'vật đang chuyển động', ['vật ở trên cao so với mặt đất', 'vật bị biến dạng', 'vật có nhiệt độ cao'],
  'Động năng gắn với chuyển động của vật.');
q('cn-dong-the', 'Thế năng trọng trường là năng lượng mà vật có được do',
  'vị trí của vật ở độ cao so với mốc (do lực hút của Trái Đất)', ['vật đang chuyển động nhanh', 'vật bị nén hoặc kéo dãn', 'vật có tốc độ lớn'],
  'Thế năng trọng trường phụ thuộc độ cao của vật trong trọng trường Trái Đất.');
q('cn-dong-the', 'Cùng một quả táo treo trên cây, bạn An chọn mốc ở mặt đất, bạn Bình chọn mốc ở ngọn cây. Giá trị thế năng hai bạn tính được',
  'khác nhau vì thế năng phụ thuộc mốc được chọn', ['luôn bằng nhau vì cùng một quả táo', 'đều bằng 0', 'luôn trái dấu nhau và có cùng độ lớn'],
  'Thế năng có giá trị phụ thuộc vào vị trí mốc: An tính được giá trị dương, Bình tính được giá trị âm (độ lớn nói chung khác nhau).');
q('cn-dong-the', 'Một vật khối lượng 2 kg được đặt ở độ cao 5 m so với mặt đất. Lấy trọng lượng P = 10m (N). Thế năng trọng trường của vật (mốc ở mặt đất) là',
  '100 J', ['10 J', '50 J', '1000 J'],
  'P = 10·2 = 20 N; W<sub>t</sub> = P·h = 20·5 = 100 J.');
q('cn-dong-the', 'Đơn vị nào sau đây KHÔNG phải là đơn vị của năng lượng?',
  'oát (W)', ['jun (J)', 'kilôoát giờ (kWh)', 'calo (cal)'],
  'Oát là đơn vị công suất; J, kWh, cal đều là đơn vị năng lượng.');
q('cn-dong-the', 'Một vật tăng tốc từ 2 m/s lên 6 m/s. Động năng của vật tăng',
  '9 lần', ['3 lần', '4 lần', '12 lần'],
  'W<sub>đ</sub> tỉ lệ với v<sup>2</sup>: (6/2)<sup>2</sup> = 9.');
q('cn-dong-the', 'Nếu độ cao của vật tăng 2 lần còn khối lượng giảm 2 lần thì thế năng trọng trường của vật',
  'không thay đổi', ['tăng 4 lần', 'tăng 2 lần', 'giảm 4 lần'],
  'W<sub>t</sub> = 10m·h; m giảm nửa và h gấp đôi thì tích m·h không đổi.');
q('cn-dong-the', 'Một máy bay đang bay thẳng đều ở độ cao 10 km (mốc thế năng ở mặt đất). Máy bay',
  'có cả động năng và thế năng', ['chỉ có động năng', 'chỉ có thế năng', 'không có động năng cũng không có thế năng'],
  'Máy bay vừa chuyển động (có W<sub>đ</sub>) vừa ở độ cao lớn (có W<sub>t</sub>).');
q('cn-dong-the', 'Một xe tải nặng 5 tấn và một xe con nặng 1 tấn chạy cùng tốc độ. Tỉ số động năng xe tải / xe con là',
  '5', ['25', '1', '0,2'],
  'Cùng v, động năng tỉ lệ thuận với khối lượng: 5000/1000 = 5.');
q('cn-dong-the', 'Một người khối lượng 50 kg đứng trên tầng 5 của toà nhà, cách mặt đất 15 m. Lấy P = 10m. Thế năng của người so với mặt đất là',
  '7500 J', ['750 J', '75 J', '75 000 J'],
  'W<sub>t</sub> = 10·50·15 = 7500 J.');
q('cn-dong-the', 'Để động năng của một vật tăng 16 lần (khối lượng không đổi) thì tốc độ của vật phải',
  'tăng 4 lần', ['tăng 16 lần', 'tăng 8 lần', 'tăng 2 lần'],
  'W<sub>đ</sub> ∝ v<sup>2</sup> nên v tăng √16 = 4 lần.');
q('cn-dong-the', 'Hai vật có động năng bằng nhau, vật A có khối lượng gấp 4 lần vật B. So sánh tốc độ hai vật.',
  'Tốc độ vật B gấp 2 lần vật A', ['Tốc độ vật B gấp 4 lần vật A', 'Tốc độ vật A gấp 2 lần vật B', 'Hai vật có tốc độ bằng nhau'],
  '½m<sub>A</sub>v<sub>A</sub><sup>2</sup> = ½m<sub>B</sub>v<sub>B</sub><sup>2</sup> ⇒ v<sub>B</sub><sup>2</sup>/v<sub>A</sub><sup>2</sup> = m<sub>A</sub>/m<sub>B</sub> = 4 ⇒ v<sub>B</sub> = 2v<sub>A</sub>.', 1);

// --- Cơ năng và sự chuyển hoá ---
q('cn-bao-toan', 'Cơ năng của một vật bằng',
  'tổng động năng và thế năng của vật', ['hiệu động năng và thế năng của vật', 'tích động năng và thế năng của vật', 'động năng của vật khi ở độ cao lớn nhất'],
  'W = W<sub>đ</sub> + W<sub>t</sub>.');
q('cn-bao-toan', 'Cơ năng của vật được bảo toàn khi',
  'vật chỉ chịu tác dụng của trọng lực, bỏ qua ma sát và lực cản', ['vật chuyển động trong không khí có lực cản đáng kể', 'vật trượt trên mặt sàn có ma sát', 'vật chịu tác dụng của lực ma sát lớn'],
  'Khi không có ma sát/lực cản, động năng và thế năng chuyển hoá qua lại nhưng tổng của chúng không đổi.');
q('cn-bao-toan', 'Thả một hòn đá rơi tự do (bỏ qua sức cản không khí). Trong quá trình rơi',
  'thế năng chuyển hoá thành động năng, cơ năng không đổi', ['động năng chuyển hoá thành thế năng, cơ năng không đổi', 'cơ năng tăng dần vì tốc độ tăng', 'cơ năng giảm dần vì độ cao giảm'],
  'Độ giảm thế năng bằng độ tăng động năng nên cơ năng được bảo toàn.');
q('cn-bao-toan', 'Một quả bóng lăn trên sàn rồi dừng lại. Cơ năng của quả bóng đã',
  'chuyển hoá thành nhiệt năng do ma sát', ['biến mất hoàn toàn', 'chuyển hoá thành thế năng', 'được bảo toàn'],
  'Ma sát làm cơ năng chuyển thành nhiệt năng (sàn và bóng nóng lên) và một phần thành năng lượng âm; năng lượng không tự mất đi.');
q('cn-bao-toan', 'Quả bóng cao su thả từ độ cao 2 m, sau khi nảy lên chỉ đạt độ cao 1,5 m. Nguyên nhân là',
  'một phần cơ năng đã chuyển hoá thành nhiệt năng và năng lượng âm khi va chạm', ['trọng lực tác dụng vào quả bóng giảm', 'khối lượng của quả bóng giảm sau va chạm', 'động năng của bóng tăng lên sau va chạm'],
  'Va chạm với sàn và lực cản không khí làm mất một phần cơ năng dưới dạng nhiệt và âm thanh.');
q('cn-bao-toan', 'Ném một vật thẳng đứng lên cao. Tại điểm cao nhất của quỹ đạo (bỏ qua sức cản)',
  'động năng bằng 0, thế năng lớn nhất', ['động năng lớn nhất, thế năng bằng 0', 'động năng bằng thế năng', 'cơ năng bằng 0'],
  'Tại điểm cao nhất vật dừng lại tức thời (v = 0) nên toàn bộ cơ năng là thế năng.');
q('cn-bao-toan', 'Một vật trượt không ma sát từ đỉnh dốc xuống chân dốc. Nhận xét nào đúng?',
  'Động năng ở chân dốc bằng thế năng ở đỉnh dốc (mốc ở chân dốc)', ['Động năng ở chân dốc nhỏ hơn thế năng ở đỉnh dốc', 'Cơ năng ở chân dốc lớn hơn cơ năng ở đỉnh dốc', 'Thế năng ở chân dốc lớn hơn ở đỉnh dốc'],
  'Không ma sát nên cơ năng bảo toàn: W<sub>t(đỉnh)</sub> = W<sub>đ(chân)</sub>.');
q('cn-bao-toan', 'Bỏ qua ma sát, tốc độ của vật khi trượt tới chân dốc phụ thuộc vào',
  'độ cao của đỉnh dốc so với chân dốc', ['khối lượng của vật', 'độ dài của mặt dốc', 'hình dạng cong hay thẳng của dốc'],
  'Từ ½mv<sup>2</sup> = 10m·h suy ra v = √(20h), không phụ thuộc m hay hình dạng dốc.', 1);
q('cn-bao-toan', 'Thả hai vật có khối lượng 1 kg và 5 kg từ cùng một độ cao (bỏ qua sức cản không khí). Khi chạm đất',
  'hai vật có tốc độ bằng nhau, vật 5 kg có động năng lớn hơn', ['vật 5 kg có tốc độ lớn hơn', 'vật 1 kg có tốc độ lớn hơn', 'hai vật có động năng bằng nhau'],
  '½mv<sup>2</sup> = 10m·h nên v = √(20h) không phụ thuộc m; động năng thì tỉ lệ với m.', 1);
q('cn-bao-toan', 'Một vật rơi tự do từ độ cao h (bỏ qua sức cản, mốc ở mặt đất). Động năng bằng thế năng khi vật ở độ cao',
  'h/2', ['h/3', '2h/3', 'h/4'],
  'W<sub>đ</sub> = W<sub>t</sub> nên mỗi phần bằng nửa cơ năng; W<sub>t</sub> = ½·10m·h ⇒ độ cao h/2.', 1);
q('cn-bao-toan', 'Một vật rơi tự do từ độ cao h (bỏ qua sức cản, mốc ở mặt đất). Khi ở độ cao h/3, tỉ số động năng/thế năng bằng',
  '2', ['1/2', '3', '1/3'],
  'W<sub>t</sub> = 10m·h/3 = W/3 nên W<sub>đ</sub> = 2W/3, tỉ số = 2.', 1);
q('cn-bao-toan', 'Ném thẳng đứng lên một vật với động năng ban đầu 100 J (bỏ qua sức cản, mốc tại điểm ném). Thế năng của vật tại điểm cao nhất bằng',
  '100 J', ['50 J', '200 J', '0 J'],
  'Toàn bộ động năng ban đầu chuyển hoá thành thế năng ở điểm cao nhất.');
q('cn-bao-toan', 'Trong tàu lượn siêu tốc (bỏ qua ma sát), tại vị trí nào tốc độ của tàu lớn nhất?',
  'Vị trí thấp nhất của đường ray', ['Vị trí cao nhất của đường ray', 'Vị trí giữa đường ray', 'Tốc độ như nhau ở mọi vị trí'],
  'Thế năng nhỏ nhất ở vị trí thấp nhất, nên động năng (và tốc độ) lớn nhất ở đó.');
q('cn-bao-toan', 'Vật rơi tự do (bỏ qua sức cản). So với lúc bắt đầu rơi, cơ năng của vật ở giữa quãng đường rơi',
  'bằng cơ năng lúc bắt đầu rơi', ['bằng nửa cơ năng lúc bắt đầu rơi', 'gấp đôi cơ năng lúc bắt đầu rơi', 'bằng 0'],
  'Cơ năng được bảo toàn trong suốt quá trình rơi tự do.');
q('cn-bao-toan', 'Khi cơ năng được bảo toàn, phát biểu nào đúng?',
  'Động năng tăng bao nhiêu thì thế năng giảm bấy nhiêu', ['Động năng và thế năng cùng tăng', 'Động năng luôn bằng thế năng', 'Thế năng luôn lớn hơn động năng'],
  'W = W<sub>đ</sub> + W<sub>t</sub> = hằng số nên ΔW<sub>đ</sub> = −ΔW<sub>t</sub>.');
q('cn-bao-toan', 'Con lắc đơn dao động trong không khí, biên độ giảm dần rồi dừng lại vì',
  'cơ năng chuyển hoá dần thành nhiệt năng do lực cản không khí và ma sát ở điểm treo', ['trọng lực tác dụng lên con lắc giảm dần', 'thế năng chuyển hết thành động năng', 'khối lượng con lắc giảm dần'],
  'Lực cản làm cơ năng giảm dần, chuyển thành nhiệt năng.');
q('cn-bao-toan', 'Búa máy được nâng lên cao rồi thả rơi đóng vào đầu cọc. Chuỗi chuyển hoá năng lượng chủ yếu là',
  'thế năng → động năng → công đóng cọc (biến dạng và nhiệt)', ['động năng → thế năng → nhiệt năng', 'nhiệt năng → động năng → thế năng', 'thế năng → nhiệt năng → động năng'],
  'Búa ở trên cao có thế năng, rơi xuống thành động năng, va chạm thực hiện công làm cọc lún và toả nhiệt.');
q('cn-bao-toan', 'Ở nhà máy thuỷ điện, nước từ hồ chứa trên cao chảy xuống làm quay tuabin. Chuỗi chuyển hoá năng lượng là',
  'thế năng → động năng → điện năng', ['điện năng → động năng → thế năng', 'nhiệt năng → động năng → điện năng', 'động năng → thế năng → điện năng'],
  'Nước trên cao có thế năng, chảy xuống thành động năng làm quay tuabin và máy phát tạo ra điện.');
q('cn-bao-toan', 'Một vật ở độ cao h có cơ năng 60 J (chỉ có thế năng). Khi rơi tới độ cao h/2 (bỏ qua sức cản) thì động năng bằng',
  '30 J', ['60 J', '15 J', '0 J'],
  'Ở h/2 thế năng còn 30 J, nên động năng = 60 − 30 = 30 J.', 1);
q('cn-bao-toan', 'Một vật có cơ năng 200 J, trong đó thế năng là 80 J. Động năng của vật bằng',
  '120 J', ['280 J', '80 J', '160 J'],
  'W<sub>đ</sub> = W − W<sub>t</sub> = 200 − 80 = 120 J.');
q('cn-bao-toan', 'Ném thẳng đứng lên một vật với tốc độ v thì đạt độ cao cực đại H. Nếu ném với tốc độ 2v (bỏ qua sức cản) thì độ cao cực đại là',
  '4H', ['2H', '8H', 'H/2'],
  '½mv<sup>2</sup> = 10m·H ⇒ H ∝ v<sup>2</sup>; v gấp đôi thì H gấp 4.', 1);
q('cn-bao-toan', 'Trường hợp nào sau đây cơ năng của vật KHÔNG được bảo toàn?',
  'Viên bi lăn trên mặt sàn nhám rồi dừng lại', ['Vật rơi tự do trong chân không', 'Vật ném lên trong điều kiện bỏ qua sức cản', 'Con lắc dao động khi bỏ qua mọi lực cản'],
  'Ma sát với mặt sàn làm cơ năng chuyển thành nhiệt năng.');
q('cn-bao-toan', 'Thả viên bi từ độ cao h ở một bên của máng cong nhẵn (không ma sát). Viên bi sẽ lên tới độ cao nào ở phía bên kia?',
  'Đúng bằng h', ['Thấp hơn h', 'Cao hơn h', 'Không lên được'],
  'Không ma sát thì cơ năng bảo toàn: thế năng ban đầu = thế năng khi dừng lại ⇒ cùng độ cao.');
q('cn-bao-toan', 'Khi bắn cung, mũi tên nhận được động năng từ',
  'thế năng đàn hồi của dây cung bị kéo căng', ['thế năng trọng trường của mũi tên', 'nhiệt năng của dây cung', 'động năng của người bắn'],
  'Dây cung biến dạng dự trữ thế năng đàn hồi, khi buông dây thế năng chuyển thành động năng của mũi tên.');
q('cn-bao-toan', 'Khi ô tô hãm phanh gấp và dừng lại trên đường nằm ngang, động năng của ô tô chủ yếu chuyển thành',
  'nhiệt năng ở phanh và mặt đường (do ma sát)', ['thế năng trọng trường', 'điện năng', 'thế năng đàn hồi của lốp xe'],
  'Ma sát giữa má phanh – đĩa phanh và lốp – mặt đường làm chúng nóng lên.');
q('cn-bao-toan', 'Một vật rơi tự do từ độ cao 20 m (bỏ qua sức cản, lấy P = 10m). Tốc độ của vật lúc chạm đất là',
  '20 m/s', ['10 m/s', '200 m/s', '40 m/s'],
  '½mv<sup>2</sup> = 10m·20 ⇒ v<sup>2</sup> = 400 ⇒ v = 20 m/s.', 1);
q('cn-bao-toan', 'Xe đạp xuống dốc dù không đạp nhưng tốc độ vẫn tăng dần vì',
  'thế năng của xe và người chuyển hoá thành động năng', ['động năng chuyển hoá thành thế năng', 'nhiệt năng chuyển hoá thành động năng', 'lực ma sát đẩy xe đi nhanh hơn'],
  'Độ cao giảm nên thế năng giảm, phần thế năng đó chuyển thành động năng.');
q('cn-bao-toan', 'Một vật được ném thẳng đứng lên từ mặt đất với tốc độ 10 m/s (bỏ qua sức cản, lấy P = 10m). Độ cao lớn nhất vật đạt được là',
  '5 m', ['10 m', '20 m', '2,5 m'],
  '½mv<sup>2</sup> = 10m·h ⇒ h = v<sup>2</sup>/20 = 100/20 = 5 m.', 1);
q('cn-bao-toan', 'Vật rơi tự do từ độ cao h, mốc ở mặt đất. Tại độ cao nào thì thế năng gấp 3 lần động năng?',
  '3h/4', ['h/4', 'h/3', '2h/3'],
  'W<sub>t</sub> = 3W<sub>đ</sub> nên W<sub>t</sub> = 3W/4 ⇒ độ cao = 3h/4.', 1);
q('cn-bao-toan', 'Một vận động viên nhảy cầu từ ván nhảy cao 10 m xuống nước. Khi chạm mặt nước (bỏ qua sức cản), động năng của vận động viên',
  'bằng thế năng lúc đứng trên ván (mốc ở mặt nước)', ['bằng 0', 'bằng nửa thế năng lúc đứng trên ván', 'lớn hơn thế năng lúc đứng trên ván'],
  'Cơ năng bảo toàn: toàn bộ thế năng trên ván chuyển thành động năng khi chạm nước.');

// --- Công, công suất ---
q('cn-cong', 'Công cơ học A của lực F làm vật dịch chuyển quãng đường s theo hướng của lực được tính bằng',
  'A = F·s', ['A = F/s', 'A = F·s<sup>2</sup>', 'A = s/F'],
  'A = F·s với F (N), s (m), A (J).');
q('cn-cong', 'Đơn vị của công cơ học là jun (J). 1 J bằng',
  '1 N·m', ['1 N/m', '1 kg·m', '1 W·h'],
  '1 J = 1 N·1 m = 1 N·m.');
q('cn-cong', 'Công suất là đại lượng đặc trưng cho',
  'tốc độ thực hiện công (công thực hiện trong một đơn vị thời gian)', ['độ lớn của công thực hiện', 'độ lớn của lực tác dụng', 'quãng đường vật dịch chuyển'],
  'P = A/t: công thực hiện trong 1 giây.');
q('cn-cong', 'Đơn vị của công suất là oát (W). 1 W bằng',
  '1 J/s', ['1 J·s', '1 N·m', '1 kg/s'],
  'P = A/t nên 1 W = 1 J/1 s.');
q('cn-cong', '1 kW và 1 MW lần lượt bằng',
  '1000 W và 1 000 000 W', ['100 W và 10 000 W', '1000 W và 100 000 W', '10 W và 1000 W'],
  'k = 10<sup>3</sup>, M = 10<sup>6</sup>.');
q('cn-cong', 'Trường hợp nào sau đây lực KHÔNG thực hiện công cơ học?',
  'Trọng lực tác dụng lên vali khi người kéo vali đi đều trên sàn nằm ngang', ['Lực kéo của đầu tàu làm đoàn tàu chuyển động', 'Trọng lực làm quả táo rơi xuống đất', 'Lực của tay nâng thùng hàng lên cao'],
  'Trọng lực vuông góc với phương chuyển động nằm ngang nên không sinh công.');
q('cn-cong', 'Một người kéo xô nước có trọng lượng 50 N lên cao 10 m. Công của lực kéo (tối thiểu) là',
  '500 J', ['5 J', '60 J', '5000 J'],
  'A = F·s = 50·10 = 500 J.');
q('cn-cong', 'Một máy thực hiện công 600 J trong 3 s. Công suất của máy là',
  '200 W', ['1800 W', '600 W', '2 W'],
  'P = A/t = 600/3 = 200 W.');
q('cn-cong', 'Hai máy thực hiện cùng một công. Máy nào có công suất lớn hơn?',
  'Máy thực hiện công đó trong thời gian ngắn hơn', ['Máy thực hiện công đó trong thời gian dài hơn', 'Hai máy có công suất bằng nhau', 'Máy có khối lượng lớn hơn'],
  'P = A/t, cùng A thì t nhỏ hơn cho P lớn hơn.');
q('cn-cong', 'Cần cẩu nâng đều một kiện hàng 1000 kg lên cao 10 m trong 20 s (lấy P = 10m). Công suất của cần cẩu là',
  '5000 W', ['100 000 W', '500 W', '2000 W'],
  'A = 10 000 N·10 m = 100 000 J; P = 100 000/20 = 5000 W = 5 kW.', 1);
q('cn-cong', 'Một học sinh có trọng lượng 500 N đi lên cầu thang cao 4 m. Công của học sinh thắng trọng lực là',
  '2000 J', ['125 J', '504 J', '200 J'],
  'A = P·h = 500·4 = 2000 J.');
q('cn-cong', 'Con ngựa kéo xe với lực 200 N đi được 1 km trên đường nằm ngang. Công của lực kéo là',
  '200 kJ', ['200 J', '2 kJ', '20 kJ'],
  'A = 200 N·1000 m = 200 000 J = 200 kJ.');
q('cn-cong', 'Một động cơ có công suất 2 kW hoạt động trong 10 phút thực hiện công bằng',
  '1 200 000 J', ['20 000 J', '120 000 J', '12 000 J'],
  'A = P·t = 2000 W·600 s = 1 200 000 J = 1200 kJ.', 1);
q('cn-cong', 'Khi vật rơi từ độ cao h xuống đất, công của trọng lực',
  'bằng độ giảm thế năng trọng trường của vật', ['bằng độ tăng thế năng trọng trường của vật', 'bằng 0', 'phụ thuộc vào tốc độ ban đầu của vật'],
  'A = P·h chính là thế năng ở độ cao h so với mặt đất.');
q('cn-cong', 'Một vật chuyển động thẳng đều với tốc độ v dưới tác dụng của lực kéo F cùng hướng chuyển động. Công suất của lực kéo được tính bằng',
  'P = F·v', ['P = F/v', 'P = F·v<sup>2</sup>', 'P = v/F'],
  'A = F·s, P = A/t = F·(s/t) = F·v.');
q('cn-cong', 'Ô tô chuyển động đều với tốc độ 20 m/s, lực kéo của động cơ là 2000 N. Công suất của động cơ là',
  '40 kW', ['100 W', '4 kW', '400 kW'],
  'P = F·v = 2000·20 = 40 000 W = 40 kW.', 1);
q('cn-cong', 'Hiệu suất của một máy được tính bằng',
  'tỉ số giữa công có ích và công toàn phần', ['tỉ số giữa công toàn phần và công có ích', 'tích của công có ích và công toàn phần', 'hiệu giữa công toàn phần và công có ích'],
  'H = A<sub>ích</sub>/A<sub>tp</sub>·100%, luôn nhỏ hơn 100% vì có hao phí.');
q('cn-cong', 'Máy nâng thực hiện công có ích 1000 J trong khi tiêu thụ 1250 J năng lượng. Hiệu suất của máy là',
  '80%', ['125%', '20%', '75%'],
  'H = 1000/1250 = 0,8 = 80%.');
q('cn-cong', 'Kilôoát giờ (kWh) là đơn vị của',
  'công (năng lượng)', ['công suất', 'lực', 'thời gian'],
  'kWh = kW × h = công suất × thời gian = công (năng lượng).');
q('cn-cong', '1 kWh bằng bao nhiêu jun?',
  '3 600 000 J', ['3600 J', '1000 J', '60 000 J'],
  '1 kWh = 1000 W × 3600 s = 3,6·10<sup>6</sup> J.');
q('cn-cong', 'Hai bạn có cùng trọng lượng chạy lên cùng một cầu thang: bạn An hết 10 s, bạn Bình hết 15 s. Nhận xét nào đúng?',
  'Công hai bạn bằng nhau, công suất của An lớn hơn', ['Công của An lớn hơn, công suất bằng nhau', 'Công và công suất của Bình đều lớn hơn', 'Công của Bình lớn hơn vì đi lâu hơn'],
  'Cùng trọng lượng và độ cao nên A bằng nhau; P = A/t nên An (t nhỏ hơn) có công suất lớn hơn.');
q('cn-cong', 'Một thang máy đưa 10 người, mỗi người nặng 60 kg, lên cao 30 m trong 15 s (lấy P = 10m). Công suất tối thiểu của động cơ là',
  '12 kW', ['1,2 kW', '120 kW', '180 kW'],
  'A = 10·600·30 = 180 000 J; P = 180 000/15 = 12 000 W = 12 kW.', 1);
q('cn-cong', 'Một máy bơm có công suất 1,5 kW bơm nước lên cao. Trong 1 giờ, máy thực hiện công bằng',
  '5,4·10<sup>6</sup> J', ['1500 J', '90 000 J', '5400 J'],
  'A = 1500 W × 3600 s = 5 400 000 J = 5,4·10<sup>6</sup> J (= 1,5 kWh).', 1);
q('cn-cong', 'Một máy bơm đưa 3 m<sup>3</sup> nước (3000 kg) lên độ cao 5 m trong 2 phút (lấy P = 10m). Công suất có ích của máy bơm là',
  '1250 W', ['75 000 W', '150 000 W', '125 W'],
  'A = 30 000 N·5 m = 150 000 J; P = 150 000/120 = 1250 W.', 1);
q('cn-cong', 'Một xe đẩy được kéo bằng lực 40 N đi 15 m theo hướng lực kéo trong 10 s. Công suất của lực kéo là',
  '60 W', ['600 W', '6 W', '400 W'],
  'A = 40·15 = 600 J; P = 600/10 = 60 W.');
