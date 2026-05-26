const examList = document.querySelector("#examList");

function getDisplaySubject(item) {
  if (item.year === 2026 && item.round === 1) {
    const number = item.id - 8;
    if ((number >= 1 && number <= 15) || number === 61) return "프로그래밍 언어 활용";
    if ([16, 21, 50].includes(number)) return "컴퓨터 일반";
    if (number === 17 || number === 22 || (number >= 24 && number <= 45)) return "데이터베이스";
    return "정보 시스템 일반";
  }

  const sampleSubjects = {
    1: "프로그래밍 언어 활용",
    2: "컴퓨터 일반",
    3: "데이터베이스",
    4: "정보 시스템 일반",
    5: "프로그래밍 언어 활용",
    6: "데이터베이스",
    7: "컴퓨터 일반",
    8: "정보 시스템 일반"
  };

  if (sampleSubjects[item.id]) return sampleSubjects[item.id];
  return item.subject || "기타";
}

function groupExams(items) {
  return items.reduce((acc, item) => {
    const key = `${item.year}-${item.round}`;
    if (!acc[key]) {
      acc[key] = { year: item.year, round: item.round, count: 0, subjects: new Set() };
    }
    acc[key].count += 1;
    acc[key].subjects.add(getDisplaySubject(item));
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
