const text = "Lobo.Alangilan.Mabini.Balayan";
const speed = 150; // typing speed in ms
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("loading-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();

    // After typing + some wait, redirect
    setTimeout(function() {
        window.location.href = "select_campus.html";
    }, 8000); // s for safer timing
};
