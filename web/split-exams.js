/* Chia nhỏ đề — mỗi đề khoảng 10 câu.
   Chạy sau tất cả các file data-*.js: đề nào dài hơn MAX câu sẽ được cắt thành
   nhiều phần liên tiếp (giữ nguyên toàn bộ câu hỏi gốc, chỉ tăng số lượng đề).
   - điểm từng câu được quy đổi lại để mỗi phần vẫn đủ thang điểm 10
   - thời gian làm bài chia theo tỉ lệ số câu (làm tròn 5 phút, tối thiểu 10)
   - phần 1 giữ nguyên id cũ (không mất điểm cao đã lưu), các phần sau có id mới */
'use strict';

(() => {
  const MAX = 12;          // quá 12 câu thì cắt
  const ID_BASE = 100000;  // vùng id dành cho các phần cắt thêm (id gốc đều < 10000)

  /* "Câu 7a" / "Câu 7b" là hai ý của cùng một bài (thường dùng chung một hình)
     → tránh cắt ngay giữa chúng. */
  const groupOf = (q) => String(q.name || '').replace(/\s*[a-zA-Z]\s*$/, '').trim();
  const canCut = (qs, i) => i <= 0 || i >= qs.length || groupOf(qs[i - 1]) !== groupOf(qs[i]);
  const bestCut = (qs, i) => {
    for (let d = 0; d <= 2; d++) {
      if (canCut(qs, i - d)) return i - d;
      if (canCut(qs, i + d)) return i + d;
    }
    return i;
  };

  /* Chia n câu thành k khoảng bằng nhau nhất, rồi nắn lại theo nhóm câu a/b/c */
  function cutPoints(qs, k) {
    const n = qs.length, pts = [0];
    for (let i = 1; i < k; i++) {
      const c = bestCut(qs, Math.round(n * i / k));
      pts.push(Math.max(pts[pts.length - 1] + 1, Math.min(c, n - (k - i))));
    }
    pts.push(n);
    return pts;
  }

  /* Quy đổi điểm: giữ tỉ lệ nặng/nhẹ giữa các câu, tổng đúng bằng 10 */
  function rescale(qs) {
    const sum = qs.reduce((t, q) => t + (Number(q.pts) || 0), 0) || qs.length;
    let acc = 0;
    return qs.map((q, i) => {
      const w = (Number(q.pts) || 0) || 1;
      let p = i === qs.length - 1 ? Math.round((10 - acc) * 100) / 100
                                 : Math.round(w / sum * 1000) / 100;
      acc = Math.round((acc + p) * 100) / 100;
      return Object.assign({}, q, {
        pts: p,
        // bỏ chú thích điểm trong tên phần ("Phần I: Trắc nghiệm (4 điểm)") vì đã đổi thang
        sec: String(q.sec || '').replace(/\s*\(\s*[\d.,]+\s*điểm\s*\)/gi, ''),
      });
    });
  }

  const splitTime = (t, part, all) => Math.max(10, Math.round((t || 30) * part / all / 5) * 5);

  function splitExam(exam) {
    const qs = exam.questions;
    if (qs.length <= MAX) return [exam];
    const k = Math.ceil(qs.length / MAX);
    const cuts = cutPoints(qs, k);
    const out = [];
    for (let i = 0; i < k; i++) {
      const part = qs.slice(cuts[i], cuts[i + 1]);
      out.push(Object.assign({}, exam, {
        id: i === 0 ? exam.id : ID_BASE + exam.id * 10 + i,
        title: `${exam.title} · Phần ${i + 1}/${k}`,
        time: splitTime(exam.time, part.length, qs.length),
        questions: rescale(part),
      }));
    }
    return out;
  }

  for (const sub of SUBJECTS) {
    if (!sub.exams || !sub.exams.length) continue;
    const list = sub.exams.flatMap(splitExam);
    if (list.length !== sub.exams.length) {
      sub.exams.splice(0, sub.exams.length, ...list);  // sửa tại chỗ để giữ các tham chiếu cũ (EXAMS…)
    }
    // đồng bộ lại các con số trong dòng giới thiệu của môn
    if (sub.heroMeta) {
      const nQ = sub.exams.reduce((t, e) => t + e.questions.length, 0);
      const avg = Math.round(sub.exams.reduce((t, e) => t + e.time, 0) / sub.exams.length);
      sub.heroMeta = sub.heroMeta
        .replace(/📚\s*\d+\s*(chuyên\s*)?đề/, `📚 ${sub.exams.length} đề`)
        .replace(/(?<!\d)\d+\s*câu(?!\s*hỏi)/, `${nQ} câu`)
        .replace(/⏱\s*\d+\s*phút\s*(mỗi đề|\/đề)/, `⏱ ~${avg} phút mỗi đề`);
    }
  }
})();
