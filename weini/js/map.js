let message = null;

function showCollectedMessage() {
    if (!message) return;

    message.style.display = "block";
    clearTimeout(showCollectedMessage._t);

    showCollectedMessage._t = setTimeout(function () {
        message.style.display = "none";
    }, 1000);
}

window.onload = setup

function setup() {
    //set the dafulat margin and background color
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";

    //add div for the files image and gif
    let cell = document.createElement("div");
    cell.classList.add("bkcell");
    // cell.style.overflow = "hidden";
    cell.style.width = "100vw";
    cell.style.height = "100vh";
    // cell.style.justifyContent = "left";
    cell.style.position = "relative";
    cell.style.display = "flex";
    document.body.appendChild(cell);

    //add the files imag
    let img = document.createElement("img");
    img.classList.add("files_png");
    img.src = "image/map.png";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "0";
    img.style.opacity = "0.7";
    cell.appendChild(img);



    let dotP = {
        dot: [],
        numDot: 100,
    }

    for (let i = 0; i < dotP.numDot; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth);
        let y = Math.random() * (window.innerHeight) - 150;
        let size = 20;

        // Create a new flower using the arguments
        let dot = new Dot(x, y, size, cell);

        //dot.renderDot();

        // Add the flower to the array of flowers
        dotP.dot.push(dot);
    }

    for (let i = 0; i < dotP.numDot; i++) {
        // Add the flower to the array of flowers
        dotP.dot[i].renderDot();
        // garden.birds[i].animate();
    }

    function pickRandom(arr, n) {
        let copy = arr.slice();
        let picked = [];
        if (n > copy.length) n = copy.length;

        for (let i = 0; i < n; i++) {
            let idx = Math.floor(Math.random() * copy.length);
            picked.push(copy[idx]);
            copy.splice(idx, 1);
        }
        return picked;
    }

    function cycleBlinkMove() {
        let free = dotP.dot.filter(function (d) {
            return d.type !== "targetYellow" && d.type !== "caughtRed";
        });
        let targets = pickRandom(free, 20);

        for (let i = 0; i < targets.length; i++) {
            targets[i].setType("blink20");
        }

        setTimeout(function () {
            for (var j = 0; j < targets.length; j++) {
                targets[j].moveRandom(window.innerWidth, window.innerHeight);
                targets[j].setType("normal");
            }
        }, 800);
    }

    cycleBlinkMove();
    setInterval(function () {
        cycleBlinkMove();
    }, 3000);

    function dotBeCatch() {
        let targets = pickRandom(dotP.dot, 20);

        for (let i = 0; i < targets.length; i++) {
            targets[i].setType("caughtRed");
        }

    }

    dotBeCatch();

    function dotYellow() {
        let targets = pickRandom(dotP.dot, 20);

        for (let i = 0; i < targets.length; i++) {
            targets[i].setType("targetYellow");
        }


    }

    dotYellow();

    message = document.createElement("div");
    message.innerText = "You have been collected.";
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.color = "red";
    message.style.display = "none";
    message.style.zIndex = "999999";
    message.style.fontSize = "28px";
    message.style.fontFamily = "Space Mono";
    message.style.letterSpacing = "2px";
    message.style.textTransform = "uppercase";
    message.style.background = "#5a5a5a";
    message.style.padding = "8px 12px";
    message.style.borderRadius = "8px";

    cell.appendChild(message);

    function animateYellow() {
        for (let i = 0; i < dotP.dot.length; i++) {
            if (dotP.dot[i].type === "targetYellow") {
                dotP.dot[i].moveYellowDot();
            }
        }
        requestAnimationFrame(animateYellow);
    }
    animateYellow();


    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowRight") {

            window.location.href = "click.html";
        }

    });


}


class Dot {
    constructor(x, y, size, parentEl) {
        this.x = x;
        this.y = y;
        this.vx = 0.1;
        this.vy = 0.1;
        this.size = size;
        this.parentEl = parentEl;
        this.dotDiv = document.createElement("div");

        this.type = "normal" // normal | blink15 | targetYellow | caughtRed
        this.isLocked = false;

        this.fakeX = (Math.random() * 180 - 90).toFixed(2);
        this.fakeY = (Math.random() * 360 - 180).toFixed(2);
    }

    // randomColor() {
    //     let r = Math.floor(Math.random() * 256);
    //     let g = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     return `rgb(${r}, ${g}, ${b})`;
    // }

    canMove() {
        return !this.isLocked;
    }

    renderDot() {
        this.dotDiv.classList.add("dot");
        this.dotDiv.style.width = this.size + "px";
        this.dotDiv.style.height = this.size + "px";
        this.dotDiv.style.zIndex = 99999;
        this.dotDiv.style.position = "absolute";
        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";
        this.dotDiv.style.borderRadius = "50%";
        this.dotDiv.style.backgroundColor = '#87c7ec';
        // this.dotDiv.style.backgroundColor = this.randomColor();
        this.parentEl.appendChild(this.dotDiv);
    }

    setType(newType) {

        if (this.isLocked && newType !== "caughtRed") return;

        this.type = newType;

        // 
        this.dotDiv.classList.remove("blink");
        this.dotDiv.style.opacity = "1";
        this.dotDiv.classList.remove("caughtHover");

        if (newType === "normal") {
            this.dotDiv.style.backgroundColor = '#87c7ec';
        }
        if (newType === "blink20") {
            this.dotDiv.style.backgroundColor = '#87c7ec';
            this.dotDiv.classList.add("blink");
        }
        if (newType === "targetYellow") {
            this.dotDiv.style.backgroundColor = "yellow";
            this.dotDiv.title = "Click to catch";

            // 
            if (!this._hasClickHandler) {
                this._hasClickHandler = true;

                let self = this; //
                this.dotDiv.addEventListener("click", function () {
                    if (self.type === "targetYellow" && !self.isLocked) {
                        self.setType("caughtRed");
                        showCollectedMessage();
                    }
                });
            }
        }

        if (newType === "caughtRed") {
            this.dotDiv.style.backgroundColor = "red";
            this.isLocked = true;

            this.dotDiv.classList.add("caughtHover");
            this.dotDiv.title = "COORD: X=" + this.fakeX + "  Y=" + this.fakeY;
            this.dotDiv.style.width = "25px"
            this.dotDiv.style.height = "25px"

        }
    }



    moveRandom(maxW, maxH) {
        if (!this.canMove()) return;
        this.x = Math.random() * (maxW - this.size);
        this.y = Math.random() * (maxH - this.size);
        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";
    }


    moveYellowDot() {
        this.x += this.vx;
        this.y += this.vy;

        const screenW = window.innerWidth;
        const screenH = window.innerHeight;


        // LEFT or RIGHT edge
        if (this.x <= 0 || this.x >= screenW - this.size) {
            this.vx *= -1; // reverse horizontal direction
        }

        // TOP or BOTTOM edge
        if (this.y <= 0 || this.y >= screenH - this.size) {
            this.vy *= -1; // reverse vertical direction
        }

        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";

    }


}



