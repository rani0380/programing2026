const params = new URLSearchParams(location.search);
const selectedYear = Number(params.get("year"));
const selectedRound = Number(params.get("round"));
const selectedSubject = params.get("subject");
const isRandom = params.get("mode") === "random";

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

let quizQuestions = [...questions];
if (selectedYear && selectedRound) {
  quizQuestions = quizQuestions.filter((item) => item.year === selectedYear && item.round === selectedRound);
}
if (selectedSubject) {
  quizQuestions = quizQuestions.filter((item) => getDisplaySubject(item) === selectedSubject);
}
if (isRandom) {
  quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);
}
if (quizQuestions.length === 0) {
  quizQuestions = [...questions];
}

let currentIndex = 0;
let selectedChoice = null;
const selectedAnswers = new Map();
const solved = new Map();

const quizTitle = document.querySelector("#quizTitle");
const questionCounter = document.querySelector("#questionCounter");
const meterBar = document.querySelector("#meterBar");
const correctCount = document.querySelector("#correctCount");
const wrongLiveCount = document.querySelector("#wrongLiveCount");
const numberBoard = document.querySelector("#numberBoard");
const subjectBadge = document.querySelector("#subjectBadge");
const examBadge = document.querySelector("#examBadge");
const questionText = document.querySelector("#questionText");
const choiceList = document.querySelector("#choiceList");
const answerBox = document.querySelector("#answerBox");
const prevBtn = document.querySelector("#prevBtn");
const checkBtn = document.querySelector("#checkBtn");
const nextBtn = document.querySelector("#nextBtn");
const saveWrongBtn = document.querySelector("#saveWrongBtn");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setTitle() {
  if (selectedYear && selectedRound) {
    quizTitle.textContent = `${selectedYear}년 ${selectedRound}회`;
  } else if (selectedSubject) {
    quizTitle.textContent = selectedSubject;
  } else if (isRandom) {
    quizTitle.textContent = "랜덤 문제";
  }
}

function renderNumbers() {
  numberBoard.innerHTML = quizQuestions.map((_, index) => `
    <button
      class="${index === currentIndex ? "active" : ""} ${selectedAnswers.has(index) ? "solved" : "unsolved"}"
      type="button"
      data-index="${index}"
      title="${selectedAnswers.has(index) ? "푼 문제" : "안 푼 문제"}"
      aria-label="${index + 1}번 ${selectedAnswers.has(index) ? "푼 문제" : "안 푼 문제"}"
    >
      ${index + 1}
    </button>
  `).join("");

  numberBoard.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = Number(button.dataset.index);
      selectedChoice = null;
      renderQuestion();
    });
  });
}

function renderQuestion() {
  const item = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const previous = solved.get(currentIndex);

  questionCounter.textContent = `${currentIndex + 1} / ${quizQuestions.length}`;
  meterBar.style.width = `${progress}%`;
  subjectBadge.textContent = getDisplaySubject(item);
  examBadge.textContent = `${item.year}년 ${item.round}회`;
  questionText.textContent = item.question;
  answerBox.classList.add("hidden");
  answerBox.innerHTML = "";
  selectedChoice = selectedAnswers.has(currentIndex) ? selectedAnswers.get(currentIndex) : null;

  choiceList.innerHTML = item.choices.map((choice, index) => `
    <button class="choice ${selectedChoice === index ? "selected" : ""}" type="button" data-index="${index}">
      <span>${index + 1}</span>
      <strong>${escapeHtml(choice)}</strong>
    </button>
  `).join("");

  choiceList.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      selectedChoice = Number(button.dataset.index);
      selectedAnswers.set(currentIndex, selectedChoice);
      solved.delete(currentIndex);
      choiceList.querySelectorAll(".choice").forEach((choice) => choice.classList.remove("selected"));
      button.classList.add("selected");
      answerBox.classList.add("hidden");
      answerBox.innerHTML = "";
      renderNumbers();
    });
  });

  if (previous) {
    showAnswer(false);
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === quizQuestions.length - 1 ? "완료" : "다음";
  renderNumbers();
  updateScore();
}

function showAnswer(markSolved = true) {
  const item = quizQuestions[currentIndex];
  const answer = selectedAnswers.has(currentIndex) ? selectedAnswers.get(currentIndex) : selectedChoice;
  if (answer === null || answer === undefined) {
    alert("답안을 먼저 선택하세요.");
    return;
  }

  selectedChoice = answer;
  const isCorrect = answer === item.answer;
  if (markSolved) {
    solved.set(currentIndex, { selected: answer, correct: isCorrect });
  }

  choiceList.querySelectorAll(".choice").forEach((button) => {
    const index = Number(button.dataset.index);
    button.classList.toggle("correct", index === item.answer);
    button.classList.toggle("wrong", index === answer && !isCorrect);
  });

  answerBox.classList.remove("hidden");
  answerBox.innerHTML = `
    <strong>${isCorrect ? "정답입니다." : "오답입니다."}</strong>
    <p>정답: ${item.answer + 1}번 ${escapeHtml(item.choices[item.answer])}</p>
    <p>${escapeHtml(item.explanation)}</p>
  `;

  updateScore();
  renderNumbers();
}

function updateScore() {
  const values = Array.from(solved.values());
  correctCount.textContent = values.filter((item) => item.correct).length;
  wrongLiveCount.textContent = values.filter((item) => !item.correct).length;
}

function gradeAll() {
  quizQuestions.forEach((item, index) => {
    if (!selectedAnswers.has(index)) return;
    const answer = selectedAnswers.get(index);
    solved.set(index, { selected: answer, correct: answer === item.answer });
  });

  updateScore();
  renderNumbers();

  const answered = selectedAnswers.size;
  const correct = Array.from(solved.values()).filter((item) => item.correct).length;
  const wrong = answered - correct;
  const score = Math.round((correct / quizQuestions.length) * 100);
  const blank = quizQuestions.length - answered;

  alert(`채점 완료!\n점수: ${score}점\n정답: ${correct}개\n오답: ${wrong}개\n미응답: ${blank}개`);
}

function saveWrongNote() {
  const item = quizQuestions[currentIndex];
  const saved = JSON.parse(localStorage.getItem("wrongNotes") || "[]");
  const exists = saved.some((note) => note.id === item.id);
  if (!exists) {
    saved.push({ ...item, subject: getDisplaySubject(item) });
    localStorage.setItem("wrongNotes", JSON.stringify(saved));
  }
  alert("오답노트에 저장했습니다.");
}

setTitle();
renderQuestion();

checkBtn.addEventListener("click", () => showAnswer(true));
saveWrongBtn.addEventListener("click", saveWrongNote);
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    selectedChoice = null;
    renderQuestion();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex += 1;
    selectedChoice = null;
    renderQuestion();
  } else {
    gradeAll();
  }
});
