
  const logoTrigger = document.getElementById("logoTrigger");
  const campusGrid = document.querySelector(".campus-grid");

  logoTrigger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bubbling
    campusGrid.classList.toggle("active");
  });

  // Optional: Close grid when clicking outside
  document.addEventListener("click", (e) => {
    if (!logoTrigger.contains(e.target) && !campusGrid.contains(e.target)) {
      campusGrid.classList.remove("active");
    }
  });

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

