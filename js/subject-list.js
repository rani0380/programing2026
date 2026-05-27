const modeForm = document.querySelector("#modeForm");
const examSelect = document.querySelector("#examSelect");
const subjectSelect = document.querySelector("#subjectSelect");

const subjectOrder = ["프로그래밍 언어 활용", "컴퓨터 일반", "데이터베이스", "정보 시스템 일반"];

function getDisplaySubject(item) {
  return item.subject || "기타";
}

function buildExamOptions() {
  const exams = Object.values(questions.reduce((acc, item) => {
    const key = `${item.year}-${item.round}`;
    if (!acc[key]) {
      acc[key] = { year: item.year, round: item.round, count: 0 };
    }
    acc[key].count += 1;
    return acc;
  }, {})).sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.round - a.round;
  });

  examSelect.innerHTML = exams.map((exam) => `
    <option value="${exam.year}-${exam.round}">
      ${exam.year}년 ${String(exam.round).padStart(2, "0")}회 (${exam.count}문항)
    </option>
  `).join("");
}

function buildSubjectOptions() {
  const counts = questions.reduce((acc, item) => {
    const subject = getDisplaySubject(item);
    acc[subject] = (acc[subject] || 0) + 1;
    return acc;
  }, {});

  const subjects = Object.keys(counts).sort((a, b) => {
    const orderA = subjectOrder.indexOf(a);
    const orderB = subjectOrder.indexOf(b);
    return (orderA === -1 ? 99 : orderA) - (orderB === -1 ? 99 : orderB);
  });

  subjectSelect.innerHTML = subjects.map((subject) => `
    <option value="${subject}">${subject} (${counts[subject]}문항)</option>
  `).join("");
}

if (modeForm) {
  buildExamOptions();
  buildSubjectOptions();

  modeForm.addEventListener("change", (event) => {
    if (event.target.name === "mode") {
      examSelect.disabled = event.target.value !== "exam";
      subjectSelect.disabled = event.target.value !== "subject";
    }
  });

  subjectSelect.disabled = true;

  modeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mode = new FormData(modeForm).get("mode");

    if (mode === "exam") {
      const [year, round] = examSelect.value.split("-");
      location.href = `quiz.html?year=${year}&round=${round}`;
      return;
    }

    if (mode === "subject") {
      location.href = `quiz.html?subject=${encodeURIComponent(subjectSelect.value)}`;
      return;
    }

    location.href = "quiz.html?mode=mock";
  });
}
