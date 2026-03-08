// --- Basic page setup ---
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "black";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Space Mono";
// --- Background image (unstable visual field) ---
let img = document.createElement("img");
img.src = "img/11.png";

img.style.position = "fixed";
img.style.top = "50%";
img.style.left = "50%";

img.style.width = "200vw";
img.style.height = "200vh";
img.style.objectFit = "cover";


let baseX = -50;
let baseY = -44;

img.style.transform = `translate(${baseX}%, ${baseY}%)`;
document.body.appendChild(img);

// --- Interaction state variables ---
let lastX = 0;
let lastY = 0;
let triggered = false;     // whether collapse is triggered
let instability = 0;       // visual instability level
let stayTimer = null;
// --- Mouse movement detection ---
document.addEventListener("mousemove", function (e) {

    if (triggered) return;

    let speed =
        Math.abs(e.clientX - lastX) +
        Math.abs(e.clientY - lastY);
    // fast movement triggers instability
    if (speed > 120) {
        triggered = true;
        instability = 15;

        // delay before cinematic break
        stayTimer = setTimeout(function () {
            triggered = true;
            cinematicBreak();
        }, 2000);
    }

    lastX = e.clientX;
    lastY = e.clientY;
});
// --- Visual collapse effect ---
function cinematicBreak() {


    // flash effect
    document.body.style.transition = "filter 0.15s";
    document.body.style.filter = "brightness(2)";

    setTimeout(() => {
        document.body.style.filter = "brightness(0)";
    }, 120);

    // slight shake
    document.body.style.transform = "translate(5px, -5px)";

    setTimeout(() => {
        document.body.style.transform = "none";
    }, 150);


    setTimeout(() => {
        window.location.href = "seen.html";
    }, 600);
}

// --- Continuous instability animation ---
setInterval(function () {

    instability *= 0.9;

    if (instability < 0.5) {
        img.style.transform =
            `translate(${baseX}%, ${baseY}%)`;
        img.style.filter = "none";
        return;
    }

    let dx = Math.random() * instability - instability / 2;
    let dy = Math.random() * instability / 2 - instability / 4;

    img.style.transform =
        `translate(${baseX}%, ${baseY}%) translate(${dx}px, ${dy}px)`;

    img.style.filter =
        `contrast(${1 + instability / 20}) brightness(${1 + instability / 30})`;

}, 40);

