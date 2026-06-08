const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

const wrongCount = document.querySelector("#wrongCount");
if (wrongCount) {
  const saved = JSON.parse(localStorage.getItem("wrongNotes") || "[]");
  wrongCount.textContent = saved.length;
}
