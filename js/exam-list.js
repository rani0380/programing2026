const examList = document.querySelector("#examList");

function groupExams(items) {
  return items.reduce((acc, item) => {
    const key = `${item.year}-${item.round}`;
    if (!acc[key]) {
      acc[key] = { year: item.year, round: item.round, count: 0, subjects: new Set() };
    }
    acc[key].count += 1;
    acc[key].subjects.add(item.subject);
    return acc;
  }, {});
}

if (examList) {
  const grouped = Object.values(groupExams(questions)).sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.round - a.round;
  });

  examList.innerHTML = grouped.map((exam) => `
    <article class="exam-card">
      <div>
        <span class="exam-label">${exam.year}년 ${exam.round}회</span>
        <h2>프로그래밍기능사 필기 CBT</h2>
        <p>${Array.from(exam.subjects).join(" · ")}</p>
      </div>
      <div class="exam-meta">
        <strong>${exam.count}</strong>
        <span>수록 문제</span>
      </div>
      <a class="button primary" href="quiz.html?year=${exam.year}&round=${exam.round}">풀기</a>
    </article>
  `).join("");
}
