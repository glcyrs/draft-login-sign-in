// Select DOM elements
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const showSignup = document.getElementById('showSignup'); // Show signup form link
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Open the Auth Modal and show login form by default
loginBtn.addEventListener('click', () => {
  authModal.style.display = 'flex';
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});

// Show login form
showLogin.addEventListener('click', () => {
  showLogin.classList.add('active');
  showSignup.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});

// Show signup form
showSignup.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

// Close the Auth Modal and clear input fields
function closeAuthForm() {
  // Reset input fields for both login and signup forms
  const loginInputs = loginForm.querySelectorAll('input');
  const signupInputs = signupForm.querySelectorAll('input');
  
  // Clear all input fields
  loginInputs.forEach(input => input.value = '');
  signupInputs.forEach(input => input.value = '');
  
  // Hide the modal
  authModal.style.display = 'none';
}

// Handle Sign Up form submission
signupForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting
  
  // Get the password and confirm password values
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  // Validate if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return; // Stop form submission if passwords don't match
  }

  // Proceed with the form submission (e.g., send data to server)
  alert("Sign Up successful!");
  
  // Optionally, clear the form after submission
  signupForm.reset();
  closeAuthForm(); // Close the modal after successful signup
});
