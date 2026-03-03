/*
  SEEN — Hidden Message Interaction
  Move the spotlight to reveal the hidden truth.
*/

document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.overflow = "hidden";


// 🔎 Create spotlight
let spotlight = document.createElement("div");
spotlight.style.position = "fixed";
spotlight.style.width = "300px";
spotlight.style.height = "300px";
spotlight.style.borderRadius = "50%";
spotlight.style.pointerEvents = "none";
spotlight.style.boxShadow =
    "0 0 60px rgba(255,255,255,0.4), 0 0 0 2000px rgba(0,0,0,0.95)";
spotlight.style.transition = "left 0.05s, top 0.05s";
spotlight.style.zIndex = "10";

document.body.appendChild(spotlight);


// ✍ Hidden message
let secretText = document.createElement("div");
secretText.innerText = "YOU ARE NOT INVISIBLE";
secretText.style.position = "absolute";
secretText.style.left = "50%";
secretText.style.top = "50%";
secretText.style.transform = "translate(-50%, -50%)";
secretText.style.fontFamily = "monospace";
secretText.style.fontSize = "24px";
secretText.style.letterSpacing = "6px";
secretText.style.color = "white";
secretText.style.opacity = "0";
secretText.style.transition = "opacity 0.6s ease, letter-spacing 0.6s ease";

document.body.appendChild(secretText);


let revealed = false;


// 🎯 Move spotlight with mouse
document.addEventListener("mousemove", function (e) {

    spotlight.style.left = e.clientX - 150 + "px";
    spotlight.style.top = e.clientY - 150 + "px";

    // Calculate distance to center text
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let dx = e.clientX - centerX;
    let dy = e.clientY - centerY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 140) {
        secretText.style.opacity = "1";

        if (!revealed) {
            revealed = true;

            // small cinematic pause
            setTimeout(() => {
                window.location.href = "visibility.html";
            }, 1200);
        }

    } else {
        secretText.style.opacity = "0";
    }

});