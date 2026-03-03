/*
  SEEN — Hidden Message Interaction
  Move the spotlight to reveal the hidden truth.
*/
let hoverTimer = null;
let hovering = false;
document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.overflow = "hidden";

// 🔎 Spotlight
let spotlight = document.createElement("div");
spotlight.style.position = "fixed";
spotlight.style.width = "320px";
spotlight.style.height = "320px";
spotlight.style.borderRadius = "50%";
spotlight.style.pointerEvents = "none";
spotlight.style.boxShadow =
    "0 0 70px rgba(255,255,255,0.35), 0 0 0 2500px rgba(0,0,0,0.95)";
spotlight.style.transition = "left 0.05s, top 0.05s";
spotlight.style.zIndex = "10";
document.body.appendChild(spotlight);

// ✍ Hidden message
let secretText = document.createElement("div");
secretText.innerText = "YOU ARE NOT INVISIBLE";
secretText.style.position = "fixed";
secretText.style.left = "50%";
secretText.style.top = "50%";
secretText.style.transform = "translate(-50%, -50%)";
secretText.style.fontFamily = "Space Mono";
secretText.style.fontSize = "24px";
secretText.style.letterSpacing = "6px";
secretText.style.color = "white";
secretText.style.opacity = "0";
secretText.style.transition = "opacity 0.4s ease";
secretText.style.zIndex = "2";
document.body.appendChild(secretText);

// 🐛 Bugs
let bugs = [];
let bugImages = ["img/bug1.png", "img/bug2.png", "img/bug3.png", "img/bug4.png", "img/bug5.png", "img/bug6.png", "img/bug7.png", "img/bug8.png", "img/bug.png"];

function placeBugs() {

    bugs.forEach(b => b.remove());
    bugs = [];

    let cols = 3;
    let rows = 3;

    let cellW = window.innerWidth / cols;
    let cellH = window.innerHeight / rows;

    bugImages.forEach(function (src, i) {

        let b = document.createElement("img");
        b.src = src;
        b.classList.add("bug");

        b.style.position = "absolute";
        b.style.pointerEvents = "none";
        b.style.zIndex = "2";


        b.style.width = "450px";


        let col = i % cols;
        let row = Math.floor(i / cols);


        let x = col * cellW + cellW / 2 - 75 + (Math.random() * 40 - 20);
        let y = row * cellH + cellH / 2 - 75 + (Math.random() * 40 - 20);

        b.style.left = x + "px";
        b.style.top = y + "px";

        b.style.opacity = "0";
        b.style.transition = "opacity 0.3s ease";

        b.dataset.rot = (Math.random() * 360).toFixed(1);
        b.style.transform = `rotate(${b.dataset.rot}deg)`;

        document.body.appendChild(b);
        bugs.push(b);
    });
}
placeBugs();
window.addEventListener("resize", placeBugs);

let revealed = false;

document.addEventListener("mousemove", function (e) {

    // move spotlight
    spotlight.style.left = (e.clientX - 160) + "px";
    spotlight.style.top = (e.clientY - 160) + "px";

    // center reveal text
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let dx = e.clientX - centerX;
    let dy = e.clientY - centerY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 140) {

        secretText.style.opacity = "1";

        if (!hovering) {
            hovering = true;

            hoverTimer = setTimeout(function () {
                window.location.href = "document.html";
            }, 3000);
        }

    } else {

        secretText.style.opacity = "0";

        hovering = false;

        if (hoverTimer) {
            clearTimeout(hoverTimer);
            hoverTimer = null;
        }
    }

    // 🐛 reveal bugs near spotlight
    bugs.forEach(function (b) {
        let bx = b.offsetLeft + b.offsetWidth / 2;
        let by = b.offsetTop + b.offsetHeight / 2;

        let ddx = e.clientX - bx;
        let ddy = e.clientY - by;
        let d = Math.sqrt(ddx * ddx + ddy * ddy);

        if (d < 170) {
            b.style.opacity = "1";
            b.style.transform = "scale(1)";
        } else {
            b.style.opacity = "0";
            b.style.transform = "scale(0.96)";
        }
    });

});

window.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
        window.location.href = "../weini/document.html";
    }

});