window.onload = setup

function setup() {
    //set the dafulat margin and background color
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";
    document.body.style.background = "#000000";

    //add div for the files image and gif
    let cell = document.createElement("div");
    cell.classList.add("bkcell");
    cell.style.overflow = "hidden";
    cell.style.width = "100vw";
    cell.style.height = "100vh";
    // cell.style.justifyContent = "left";
    cell.style.position = "relative";
    cell.style.display = "flex";
    document.body.appendChild(cell);

    //add the files imag
    let img = document.createElement("img");
    img.classList.add("sad_png");
    img.src = "image/sad.gif";
    img.style.width = "auto";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.position = "absolute";
    // img.style.backgroundPosition = "bottom";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "0";
    cell.appendChild(img);

    // Create the text message
    let text = document.createElement("div");
    text.innerHTML = "<p> I'm so lonely.<br> Please stay with me.</p>"
    text.style.position = "absolute";
    text.style.color = "white";
    text.style.fontFamily = "Space Mono";
    text.style.fontSize = "30px";
    text.style.textAlign = "center"
    text.style.fontWeight = "bold";
    text.style.top = "95%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.zIndex = "999";
    cell.appendChild(text);

    // When the image is clicked, create a mouse cursor
    img.addEventListener("click", createMouse);

    // Counter for how many mouse cursors have been created
    let mouseCount = 0;

    function createMouse() {
        // Create a mouse cursor image
        let mouse = document.createElement("img");

        // Generate a random starting position
        let clientX = Math.random() * window.innerWidth;
        let clientY = Math.random() * window.innerHeight;

        // Generate random velocity for movement
        let vx = (Math.random() - 0.5) * 6;
        let vy = (Math.random() - 0.5) * 6;

        mouse.src = "image/mouse.png";
        mouse.style.width = "24px";
        mouse.style.position = "fixed";
        mouse.style.left = clientX + "px";
        mouse.style.top = clientY + "px";
        mouse.style.pointerEvents = "none";
        mouse.style.zIndex = "9999";
        document.body.appendChild(mouse);

        // Update mouse movement when the real mouse moves
        window.addEventListener("mousemove", moveMouse);

        function moveMouse() {

            // Update position
            clientX += vx;
            clientY += vy;

            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            const size = 24;

            // Bounce when hitting left or right edges
            if (clientX <= 0 || clientX >= screenW - size) {
                vx *= -1;
            }

            // Bounce when hitting top or bottom edges
            if (clientY <= 0 || clientY >= screenH - size) {
                vy *= -1;
            }

            mouse.style.left = clientX + "px";
            mouse.style.top = clientY + "px";
        }

        // Increase mouse counter
        mouseCount++;

        // When 15 cursors appear, change the character's emotion
        if (mouseCount === 15) {
            img.src = "image/smile.png";

            text.innerHTML = "<p> They’re all here now. <br> I don't feel empty anymore.</p>"
        }
    };

    // Keyboard event: press right arrow to go to the next page
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowRight") {

            window.location.href = "final.html";
        }

    });

}


