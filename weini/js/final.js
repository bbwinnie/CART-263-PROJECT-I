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

    leftEarth.src = "../xueyi/img/2.png";
    leftEarth.style.width = "1000px";
    leftEarth.style.clipPath = "inset(0 50% 0 0)";
    leftEarth.style.transition = "1s";


    let rightEarth = document.createElement("img");
    container.appendChild(rightEarth);

    rightEarth.src = "../xueyi/img/2.png";
    rightEarth.style.width = "1000px";
    rightEarth.style.position = "absolute";
    rightEarth.style.left = "0";
    rightEarth.style.clipPath = "inset(0 0 0 50%)";
    rightEarth.style.transition = "1s";

    let menu = document.createElement("div");
    document.body.appendChild(menu);

    menu.style.position = "fixed";
    menu.style.top = "53%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)";
    menu.style.display = "none";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
    menu.style.gap = "10px";
    menu.style.fontFamily = "Space Mono";
    menu.style.fontWeight = "normal";


    function createMenuButton(text, link) {

        let btn = document.createElement("a");
        btn.innerText = text;
        btn.href = link;

        btn.style.color = "white";
        btn.style.textDecoration = "none";
        menu.appendChild(btn);
    }

    createMenuButton("NETWORK", "script.html");
    createMenuButton("SHARED", "shard.html");
    createMenuButton("SHARED SYSTEM", "shared.system.html");
    createMenuButton("VISIBILITY", "visibility.html");
    createMenuButton("SEEN", "seen.html");
    createMenuButton("INPUT or TRACE", "../weini/document.html");
    createMenuButton("STORAGE or LOSS", "../weini/file.html");
    createMenuButton("CAN YOU SEE ME NOW?", "../weini/map.html");
    createMenuButton("STAY WITH ME", "../weini/click.html");
    createMenuButton("FINAL", "final.html");

    setTimeout(() => {
        leftEarth.style.transform = "translateX(-150px)";
        rightEarth.style.transform = "translateX(150px)";
    }, 100);

    setTimeout(() => {
        menu.style.display = "flex";
    }, 1100);

    container.onclick = function () {

        // 
        leftEarth.style.transform = "translateX(0)";
        rightEarth.style.transform = "translateX(0)";

        menu.style.display = "none";

        // 
        setTimeout(() => {

            // 
            leftEarth.style.clipPath = "none";
            rightEarth.style.display = "none";

            // 
            leftEarth.style.width = "200px";

            // 
            container.style.transform = "none";
            container.style.top = "auto";
            container.style.left = "auto";
            container.style.right = "30px";
            container.style.bottom = "30px";

        }, 1000);

        setTimeout(() => {

            let text = document.createElement("div");
            text.innerHTML = "<p> A network does not guarantee sharing.<br> It only guarantees transmission.</p>"
            text.style.position = "absolute";
            text.style.color = "white";
            text.style.fontFamily = "Space Mono";
            text.style.fontSize = "30px";
            text.style.textAlign = "center"
            text.style.fontWeight = "bold";
            text.style.textTransform = "uppercase";
            text.style.top = "50%";
            text.style.left = "50%";
            text.style.transform = "translate(-50%, -50%)";
            text.style.zIndex = "999";
            document.body.appendChild(text);

        }, 2000);

    };


};








