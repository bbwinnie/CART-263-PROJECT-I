window.onload = function () {


    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = "-1";

    let stars = [];

    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2
        });
    }

    function animateStars() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";

        stars.forEach(s => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();

            s.y += 0.3;
            if (s.y > canvas.height) s.y = 0;
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();



    let container = document.createElement("div");
    document.body.appendChild(container);

    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.cursor = "pointer";



    let leftEarth = document.createElement("img");
    container.appendChild(leftEarth);

    leftEarth.src = "xueyi/2.png";
    leftEarth.style.width = "1000px";
    leftEarth.style.clipPath = "inset(0 50% 0 0)";
    leftEarth.style.transition = "1s";


    let rightEarth = document.createElement("img");
    container.appendChild(rightEarth);

    rightEarth.src = "xueyi/2.png";
    rightEarth.style.width = "1000px";
    rightEarth.style.position = "absolute";
    rightEarth.style.left = "0";
    rightEarth.style.clipPath = "inset(0 0 0 50%)";
    rightEarth.style.transition = "1s";



    let menu = document.createElement("div");
    document.body.appendChild(menu);

    menu.style.position = "fixed";
    menu.style.top = "50%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)";
    menu.style.display = "none";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
    menu.style.gap = "10px";


    function createMenuButton(text, link) {

        let btn = document.createElement("a");
        btn.innerText = text;
        btn.href = link;

        btn.style.color = "white";
        btn.style.textDecoration = "none";

        menu.appendChild(btn);
    }



    createMenuButton("NETWORK", "index.html");
    createMenuButton("SHARED", "xueyi/shared.html");
    createMenuButton("SHARED SYSTEM", "xueyi/shared system.html");
    createMenuButton("VISIBILITY", "xueyi/visibility.html");
    createMenuButton("SEEN", "xueyi/seen.html");
    createMenuButton("RECOMMENDATION", "recommendation.html");
    createMenuButton("DISTORTION", "distortion.html");
    createMenuButton("LOSS OF CONTROL", "loss.html");
    createMenuButton("REFLECTION", "Reflection.html");
    createMenuButton("FINAL", "final.html");

    container.onclick = function () {

        leftEarth.style.transform = "translateX(-150px)";
        rightEarth.style.transform = "translateX(150px)";

        setTimeout(() => {
            menu.style.display = "flex";
            container.style.pointerEvents = "none";
        }, 1000);
    };

};








