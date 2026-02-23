window.onload = function () {

    let container = document.createElement("div");
    document.body.appendChild(container);

    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-40%, -20%)";
    container.style.cursor = "pointer";
    container.style.width = "1000px";
    container.style.height = "1000px";



    let leftEarth = document.createElement("img");
    container.appendChild(leftEarth);

    leftEarth.src = "xueyi/1.png";
    leftEarth.style.width = "800px";
    leftEarth.style.position = "absolute";
    leftEarth.style.left = "0";
    leftEarth.style.top = "0";
    leftEarth.style.clipPath = "inset(0 50% 0 0)";
    leftEarth.style.transition = "1s";



    let rightEarth = document.createElement("img");
    container.appendChild(rightEarth);

    rightEarth.src = "xueyi/1.png";
    rightEarth.style.width = "800px";
    rightEarth.style.position = "absolute";
    rightEarth.style.left = "0";
    rightEarth.style.top = "0";
    rightEarth.style.clipPath = "inset(0 0 0 50%)";
    rightEarth.style.transition = "1s";



    let isOpen = false;

    container.onclick = function () {

        leftEarth.style.transform = "translateX(-300px)";
        rightEarth.style.transform = "translateX(300px)";

        setTimeout(() => {
            container.style.display = "none";
            menu.style.visibility = "visible";
        }, 1000);

    };

};

let menu = document.createElement("div");
document.body.appendChild(menu);

menu.style.position = "fixed";
menu.style.top = "0";
menu.style.left = "0";
menu.style.width = "100vw";
menu.style.height = "100vh";
menu.style.background = "rgba(0,0,0,0.8)";
menu.style.display = "none";
menu.style.flexDirection = "column";
menu.style.justifyContent = "center";
menu.style.alignItems = "center";
menu.style.gap = "20px";
menu.style.fontSize = "28px";
menu.style.color = "white";
menu.style.zIndex = "999";
menu.style.display = "none";
menu.style.display = "flex";
menu.style.visibility = "hidden";

function createMenuButton(text, link) {
    let btn = document.createElement("a");
    btn.innerText = text;
    btn.href = link;

    btn.style.color = "white";
    btn.style.textDecoration = "none";
    btn.style.border = "1px solid white";
    btn.style.padding = "12px 40px";
    btn.style.transition = "0.3s";

    btn.onmouseover = () => btn.style.background = "white", btn.style.color = "black";
    btn.onmouseout = () => btn.style.background = "transparent", btn.style.color = "white";

    menu.appendChild(btn);
}
createMenuButton("INDEX", "index.html");
createMenuButton("LIKE", "bio.html");
createMenuButton("SEARCH", "searching.html");
createMenuButton("SCROLLING", "scrolling.html");
createMenuButton("TRACKING", "tracking.html");
createMenuButton("RECOMMENDATION", "recommendation.html");
createMenuButton("DISTORTION", "distortion.html");
createMenuButton("LOSS OF CONTROL", "loss.html");
createMenuButton("REFLECTION", "Reflection.html");
createMenuButton("FINAL", "final.html");