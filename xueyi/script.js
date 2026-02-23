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

    leftEarth.src = "xueyi/2.png";
    leftEarth.style.width = "800px";
    leftEarth.style.position = "absolute";
    leftEarth.style.left = "0";
    leftEarth.style.top = "0";
    leftEarth.style.clipPath = "inset(0 50% 0 0)";
    leftEarth.style.transition = "1s";



    let rightEarth = document.createElement("img");
    container.appendChild(rightEarth);

    rightEarth.src = "xueyi/2.png";
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
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
        }, 1000);

    };



    let menu = document.createElement("div");
    document.body.appendChild(menu);

    menu.style.position = "absolute";
    menu.style.top = "50%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)";

    menu.style.display = "flex";
    menu.style.width = "600px";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
    menu.style.gap = "20px";

    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menu.style.transition = "0.8s";

    function createMenuButton(text, link) {
        let btn = document.createElement("a");
        btn.style.textDecoration = "none";
        btn.innerText = text;
        btn.href = link;

        btn.style.background = "rgba(0, 157, 255, 0.67)";
        btn.style.backdropFilter = "blur(6px)";
        btn.style.border = "1px solid rgba(200,220,255,0.4)";


        btn.style.boxShadow = "0 0 15px rgba(120,160,255,0.3)";


        btn.onmouseover = () => {
            btn.style.background = "linear-gradient(90deg, #7aa6ff, #caa8ff)";
            btn.style.color = "white";
            btn.style.boxShadow = "0 0 25px rgba(180,200,255,0.9)";
            btn.style.transform = "scale(1.05)";
        };

        btn.onmouseout = () => {
            btn.style.background = "rgb(0, 157, 255)";
            btn.style.color = "#d8e9ff";
            btn.style.boxShadow = "0 0 15px rgba(17, 191, 254, 0.82)";
            btn.style.transform = "scale(1)";
        };

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




}
