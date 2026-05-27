const params = new URLSearchParams(location.search);
const selectedYear = Number(params.get("year"));
const selectedRound = Number(params.get("round"));
const selectedSubject = params.get("subject");
const isRandom = params.get("mode") === "random";
const isMock = params.get("mode") === "mock";

let quizQuestions = [...questions];

if (selectedYear && selectedRound) {
  quizQuestions = quizQuestions.filter((item) => item.year === selectedYear && item.round === selectedRound);
}

if (selectedSubject) {
  quizQuestions = quizQuestions.filter((item) => item.subject === selectedSubject);
}

if (isRandom || isMock) {
  quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);
}

if (isMock) {
  quizQuestions = quizQuestions.slice(0, Math.min(60, quizQuestions.length));
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
const scorePoint = document.querySelector("#scorePoint");
const correctCount = document.querySelector("#correctCount");
const wrongLiveCount = document.querySelector("#wrongLiveCount");
const numberBoard = document.querySelector("#numberBoard");
const subjectBadge = document.querySelector("#subjectBadge");
const examBadge = document.querySelector("#examBadge");
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const choiceList = document.querySelector("#choiceList");
const answerBox = document.querySelector("#answerBox");
const prevBtn = document.querySelector("#prevBtn");
const checkBtn = document.querySelector("#checkBtn");
const nextBtn = document.querySelector("#nextBtn");
const saveWrongBtn = document.querySelector("#saveWrongBtn");
const gradeBtn = document.querySelector("#gradeBtn");

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
  } else if (isMock) {
    quizTitle.textContent = "모의고사";
  } else if (isRandom) {
    quizTitle.textContent = "랜덤 문제";
  }
}

function renderNumbers() {
  numberBoard.innerHTML = quizQuestions.map((_, index) => `
    <button
      class="${getNumberButtonClass(index)}"
      type="button"
      data-index="${index}"
      title="${getNumberButtonLabel(index)}"
      aria-label="${index + 1}번 ${getNumberButtonLabel(index)}"
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

function getNumberButtonClass(index) {
  const classes = [index === currentIndex ? "active" : ""];
  const result = solved.get(index);

  if (result) {
    classes.push(result.correct ? "correct" : "wrong");
  } else {
    classes.push(selectedAnswers.has(index) ? "solved" : "unsolved");
  }

  return classes.filter(Boolean).join(" ");
}

function getNumberButtonLabel(index) {
  const result = solved.get(index);
  if (result) return result.correct ? "정답" : "오답";
  return selectedAnswers.has(index) ? "푼 문제" : "안 푼 문제";
}

function renderQuestion() {
  const item = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const previous = solved.get(currentIndex);

  questionCounter.textContent = `${currentIndex + 1} / ${quizQuestions.length}`;
  meterBar.style.width = `${progress}%`;
  subjectBadge.textContent = item.subject;
  examBadge.textContent = `${item.year}년 ${item.round}회`;
  questionText.textContent = item.question;
  if (item.image) {
    questionImage.innerHTML = `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || "문제 그림")}" />`;
    questionImage.classList.remove("hidden");
  } else {
    questionImage.innerHTML = "";
    questionImage.classList.add("hidden");
  }
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
  const correct = values.filter((item) => item.correct).length;
  const wrong = values.filter((item) => !item.correct).length;
  const score = quizQuestions.length ? Math.round((correct / quizQuestions.length) * 100) : 0;

  scorePoint.textContent = `${score}점`;
  correctCount.textContent = correct;
  wrongLiveCount.textContent = wrong;
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
    saved.push(item);
    localStorage.setItem("wrongNotes", JSON.stringify(saved));
  }
  alert("오답노트에 저장했습니다.");
}

setTitle();
renderQuestion();

checkBtn.addEventListener("click", () => showAnswer(true));
saveWrongBtn.addEventListener("click", saveWrongNote);
gradeBtn.addEventListener("click", gradeAll);
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
