window.onload = function () {

    // Create a canvas element for drawing the animated star background
    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    // Get the 2D drawing context
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = "-1";

    // Create an array to store the stars
    let stars = [];

    // Generate 150 random stars
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2
        });
    }

    // Function to animate the star background
    function animateStars() {

        // Clear the canvas each frame
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";

        // Loop through each star and draw it
        stars.forEach(s => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();

            // Move the stars downward slowly
            s.y += 0.3;

            // Reset star to top when it leaves the screen
            if (s.y > canvas.height) s.y = 0;
        });

        // Loop the animation
        requestAnimationFrame(animateStars);
    }

    // Start the animation
    animateStars();

    // Create a container for the Earth images
    let container = document.createElement("div");
    document.body.appendChild(container);

    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.cursor = "pointer";

    // Create the left half of the Earth
    let leftEarth = document.createElement("img");
    container.appendChild(leftEarth);

    leftEarth.src = "../xueyi/img/2.png";
    leftEarth.style.width = "1000px";
    leftEarth.style.clipPath = "inset(0 50% 0 0)";
    leftEarth.style.transition = "1s";

    // Create the right half of the Earth
    let rightEarth = document.createElement("img");
    container.appendChild(rightEarth);

    rightEarth.src = "../xueyi/img/2.png";
    rightEarth.style.width = "1000px";
    rightEarth.style.position = "absolute";
    rightEarth.style.left = "0";
    rightEarth.style.clipPath = "inset(0 0 0 50%)";
    rightEarth.style.transition = "1s";

    // Create a container for the navigation menu
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

    // Function for generating menu links
    function createMenuButton(text, link) {

        let btn = document.createElement("a");
        btn.innerText = text;
        btn.href = link;

        btn.style.color = "white";
        btn.style.textDecoration = "none";
        menu.appendChild(btn);
    }

    // Create navigation buttons for different pages
    createMenuButton("NETWORK", "../xueyi/script.html");
    createMenuButton("SHARED", "../xueyi/shard.html");
    createMenuButton("SHARED SYSTEM", "../xueyi/shared.system.html");
    createMenuButton("VISIBILITY", "../xueyi/visibility.html");
    createMenuButton("SEEN", "../xueyi/seen.html");
    createMenuButton("INPUT or TRACE", "../weini/document.html");
    createMenuButton("STORAGE or LOSS", "../weini/file.html");
    createMenuButton("CAN YOU SEE ME NOW?", "../weini/map.html");
    createMenuButton("STAY WITH ME", "../weini/click.html");
    createMenuButton("NO OFFLINE", "final.html");

    // Split Earth animation after the page loads
    setTimeout(() => {
        leftEarth.style.transform = "translateX(-150px)";
        rightEarth.style.transform = "translateX(150px)";
    }, 100);

    // Show the menu after the animation finishes
    setTimeout(() => {
        menu.style.display = "flex";
    }, 1100);

    // Interaction when the Earth is clicked
    container.onclick = function () {

        // Earth halves move back together
        leftEarth.style.transform = "translateX(0)";
        rightEarth.style.transform = "translateX(0)";

        //Hide the menu
        menu.style.display = "none";

        // after 1sec
        setTimeout(() => {

            //Merge into a single Earth
            leftEarth.style.clipPath = "none";
            rightEarth.style.display = "none";

            //  Shrink the Earth
            leftEarth.style.width = "200px";

            // Move the Earth to the bottom right corner
            container.style.transform = "none";
            container.style.top = "auto";
            container.style.left = "auto";
            container.style.right = "30px";
            container.style.bottom = "30px";

        }, 1000);

        //Display the final message
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








