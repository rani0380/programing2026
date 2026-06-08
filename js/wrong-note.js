const wrongList = document.querySelector("#wrongList");
const saved = JSON.parse(localStorage.getItem("wrongNotes") || "[]");

function removeWrong(id) {
  const next = saved.filter((item) => item.id !== id);
  localStorage.setItem("wrongNotes", JSON.stringify(next));
  location.reload();
}

if (wrongList) {
  if (saved.length === 0) {
    wrongList.innerHTML = `
      <div class="empty-state">
        <h2>아직 저장된 오답이 없습니다.</h2>
        <p>문제풀이 화면에서 어려운 문제를 오답노트에 저장해보세요.</p>
        <a class="button primary" href="quiz.html">문제 풀러 가기</a>
      </div>
    `;
  } else {
    wrongList.innerHTML = saved.map((item) => `
      <article class="wrong-card">
        <div>
          <span>${item.subject} · ${item.year}년 ${item.round}회</span>
          <h2>${item.question}</h2>
          <p>정답: ${item.answer + 1}번 ${item.choices[item.answer]}</p>
          <p>${item.explanation}</p>
        </div>
        <button class="button secondary" type="button" data-id="${item.id}">삭제</button>
      </article>
    `).join("");

    wrongList.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => removeWrong(Number(button.dataset.id)));
    });
  }
}
