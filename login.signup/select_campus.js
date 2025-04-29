const wrapper = document.getElementById('wrapper');
const adminLoginLink = document.getElementById('adminLoginLink');
const closePopup = document.getElementById('closePopup');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const selectCampusBtn = document.getElementById('select-campus-btn');
const campusModal = document.getElementById('campus-modal');
const campuses = document.querySelectorAll('.campus');
const proceedBtn = document.getElementById('proceed-btn');
const signupPrompt = document.getElementById('signupPrompt');

let selectedCampus = null;

// Image slider
const images = document.querySelectorAll(".image-slider img");
let currentImageIndex = 0;
setInterval(() => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}, 3000);

// Smooth scroll navigation
document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Open campus modal
selectCampusBtn.addEventListener("click", () => {
  campusModal.style.display = "flex";
});

// Select campus
campuses.forEach(campus => {
  campus.addEventListener("click", () => {
    campuses.forEach(c => c.classList.remove("selected"));
    campus.classList.add("selected");
    selectedCampus = campus.dataset.campus;
    proceedBtn.disabled = false;
  });
});

// Proceed to login/signup after selecting campus
proceedBtn.addEventListener("click", () => {
  if (selectedCampus) {
    campusModal.style.display = "none";
    wrapper.classList.add('active-popup');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    signupPrompt.style.display = 'block'; // signup visible when user selects campus
  }
});

document.getElementById("cancel-btn").addEventListener("click", function() {
    document.getElementById("campus-modal").style.display = "none";
});

// Admin login - login only
adminLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  selectedCampus = null;
  wrapper.classList.add('active-popup');
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  signupPrompt.style.display = 'none'; // HIDE signup prompt
});

// Close popup and clear forms
closePopup.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  document.getElementById('loginActualForm').reset();
  document.getElementById('registerActualForm').reset();
});

// Switch to register
showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// Switch to login
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

// Toggle Password Visibility with Icon
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const targetInput = document.querySelector(this.getAttribute('toggle'));
      const icon = this.querySelector('i');
      
      if (targetInput.type === 'password') {
        targetInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash'); // eye with slash when visible
      } else {
        targetInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });