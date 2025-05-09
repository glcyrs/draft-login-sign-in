
const adminBtn = document.getElementById("adminBtn");
const modal = document.getElementById("adminModal");
const closeBtn = document.querySelector(".close-btn");

adminBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});