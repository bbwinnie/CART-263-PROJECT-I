
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "black";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

let img = document.createElement("img");
img.src = "11.png";

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

let lastX = 0;
let lastY = 0;
let triggered = false;
let instability = 0;
let collapseArmed = false;
let stayTimer = null;

document.addEventListener("mousemove", function (e) {

    if (triggered) return;

    let speed =
        Math.abs(e.clientX - lastX) +
        Math.abs(e.clientY - lastY);

    if (speed > 120) {
        triggered = true;
        instability = 15;


        stayTimer = setTimeout(function () {
            triggered = true;
            cinematicBreak();
        }, 2000);
    }
    if (speed < 20 && collapseArmed) {
        collapseArmed = false;
        clearTimeout(stayTimer);
    }
    lastX = e.clientX;
    lastY = e.clientY;
});

function cinematicBreak() {


    document.body.style.setProperty("--crack-opacity", 1);
    document.body.style.setProperty("--crack-size", "1200px");


    document.body.style.transition = "filter 0.15s";
    document.body.style.filter = "brightness(2)";

    setTimeout(() => {
        document.body.style.filter = "brightness(0)";
    }, 120);


    document.body.style.transform = "translate(5px, -5px)";

    setTimeout(() => {
        document.body.style.transform = "none";
    }, 150);


    setTimeout(() => {
        window.location.href = "seen.html";
    }, 600);
}
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