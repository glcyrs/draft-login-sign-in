const text = "Loading LAMB CAMPUSES...";
const speed = 100;
let index = 0;

function typeWriter() {
  const el = document.getElementById("loading-text");
  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // Optional delay then redirect
    setTimeout(() => {
      window.location.href = "land.html";
    }, 1500);
  }
}

window.onload = () => {
  typeWriter();
};
