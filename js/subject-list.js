const subjectList = document.querySelector("#subjectList");

const subjectMeta = {
  "프로그래밍 언어 활용": {
    order: 1,
    description: "Python, Java, JavaScript, 자료형, 연산자, 실행 결과 문제를 집중 풀이합니다."
  },
  "컴퓨터 일반": {
    order: 2,
    description: "진법, 자료구조, 정렬, 스택, 디스크 용량 계산 등 기본 개념을 확인합니다."
  },
  "데이터베이스": {
    order: 3,
    description: "SQL, DBMS, 트랜잭션, 릴레이션, NULL, 권한 관리 문제를 풉니다."
  },
  "정보 시스템 일반": {
    order: 4,
    description: "네트워크, 운영체제, 테스트, 보안, 개발 방법론 문제를 정리합니다."
  }
};

function getDisplaySubject(item) {
  if (item.year === 2026 && item.round === 1) {
    const number = item.id - 8;
    if ((number >= 1 && number <= 15) || number === 61) return "프로그래밍 언어 활용";
    if ([16, 21, 50].includes(number)) return "컴퓨터 일반";
    if (number === 17 || number === 22 || (number >= 24 && number <= 45)) return "데이터베이스";
    return "정보 시스템 일반";
  }
  return item.subject || "기타";
}

if (subjectList) {
  const grouped = questions.reduce((acc, item) => {
    const subject = getDisplaySubject(item);
    if (!acc[subject]) {
      acc[subject] = { subject, count: 0, years: new Set() };
    }
    acc[subject].count += 1;
    acc[subject].years.add(item.year);
    return acc;
  }, {});

  const subjects = Object.values(grouped).sort((a, b) => {
    const orderA = subjectMeta[a.subject]?.order || 99;
    const orderB = subjectMeta[b.subject]?.order || 99;
    return orderA - orderB;
  });

  subjectList.innerHTML = subjects.map((item) => {
    const meta = subjectMeta[item.subject] || { description: "해당 과목 문제를 모아서 풉니다." };
    return `
      <article class="subject-practice-card">
        <div>
          <span class="exam-label">${item.subject}</span>
          <h2>${item.subject}</h2>
          <p>${meta.description}</p>
          <small>${Array.from(item.years).sort((a, b) => b - a).join(", ")}년 문제 포함</small>
        </div>
        <div class="exam-meta">
          <strong>${item.count}</strong>
          <span>수록 문제</span>
        </div>
        <a class="button primary" href="quiz.html?subject=${encodeURIComponent(item.subject)}">풀기</a>
      </article>
    `;
  }).join("");
}
