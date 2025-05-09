const text = "LAMB CAMPUSES";
const speed = 300;
let index = 0;

function typeWriter() {
  const textElement = document.getElementById("loading-text");

  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    animateLogo();
  }
}

function animateLogo() {
  const logo = document.getElementById("logo");
  const text = document.getElementById("loading-text");

  // Stop bounce animation
  logo.style.animation = 'none';

  // Hide text
  text.style.opacity = 0;

  // Expand and fade logo
  setTimeout(() => {
    logo.classList.add("expand-fade");
  }, 100);

  // Redirect after animation
  setTimeout(() => {
    window.location.href = "land.html";
  }, 2200);
}

window.onload = () => {
  typeWriter();
};
