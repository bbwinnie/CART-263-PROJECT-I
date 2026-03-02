document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "monospace";
document.body.style.color = "white";
document.body.style.overflow = "hidden";

let text = document.createElement("div");
text.innerText = "YOU ARE NOW SYNCHRONIZED";
text.style.fontSize = "28px";
text.style.opacity = "0";
text.style.transition = "2s";
document.body.appendChild(text);


setTimeout(function () {
    text.style.opacity = "1";
}, 500);


setTimeout(function () {
    text.innerText = "WHO ARE YOU WITHOUT YOUR DATA?";
}, 4000);


setTimeout(function () {
    text.style.opacity = "0";
}, 7000);


setTimeout(function () {
    document.body.style.background = "black";
}, 9000);

setTimeout(function () {
    window.location.href = "Seen.html";
}, 1000);
