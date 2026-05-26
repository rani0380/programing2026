const params = new URLSearchParams(location.search);
const selectedYear = Number(params.get("year"));
const selectedRound = Number(params.get("round"));
const selectedSubject = params.get("subject");
const isRandom = params.get("mode") === "random";

let quizQuestions = [...questions];
if (selectedYear && selectedRound) {
  quizQuestions = quizQuestions.filter((item) => item.year === selectedYear && item.round === selectedRound);
}
if (selectedSubject) {
  quizQuestions = quizQuestions.filter((item) => item.subject === selectedSubject);
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
    <button class="${index === currentIndex ? "active" : ""} ${selectedAnswers.has(index) ? "solved" : ""}" type="button" data-index="${index}">
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

  questionCounter.textContent = `${currentIndex + 1} / ${quizQuestions.length}`;
  meterBar.style.width = `${progress}%`;
  subjectBadge.textContent = item.subject;
  examBadge.textContent = `${item.year}년 ${item.round}회`;
  questionText.textContent = item.question;
  answerBox.classList.add("hidden");
  answerBox.innerHTML = "";

  const previous = solved.get(currentIndex);
  selectedChoice = selectedAnswers.has(currentIndex) ? selectedAnswers.get(currentIndex) : null;

  choiceList.innerHTML = item.choices.map((choice, index) => `
    <button class="choice ${selectedChoice === index ? "selected" : ""}" type="button" data-index="${index}">
      <span>${index + 1}</span>
      <strong>${choice}</strong>
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
    <p>정답: ${item.answer + 1}번 ${item.choices[item.answer]}</p>
    <p>${item.explanation}</p>
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
    saved.push(item);
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
