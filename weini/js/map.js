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
    cell.appendChild(img);


    let dotP = {
        dot: [],
        numDot: 100,
    }

    for (let i = 0; i < dotP.numDot; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth);
        let y = Math.random() * (window.innerHeight) - 100;
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
        let targets = pickRandom(dotP.dot, 20);

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


}


class Dot {
    constructor(x, y, size, parentEl) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.parentEl = parentEl;
        this.dotDiv = document.createElement("div");

        this.type = "normal" // normal | blink15 | targetYellow | caughtRed
        this.isLocked = false;
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    canMove() {
        return this.type !== "caughtRed";
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
        // this.dotDiv.style.backgroundColor = 'yellow';
        this.dotDiv.style.backgroundColor = this.randomColor();
        this.parentEl.appendChild(this.dotDiv);
    }

    setType(newType) {
        this.type = newType;

        // 
        this.dotDiv.classList.remove("blink");
        this.dotDiv.style.opacity = "1";

        if (newType === "normal") {
            this.dotDiv.style.backgroundColor = this.randomColor();
        }
        if (newType === "blink15") {
            this.dotDiv.style.backgroundColor = this.randomColor();
            this.dotDiv.classList.add("blink");
        }
        if (newType === "targetYellow") {
            this.dotDiv.style.backgroundColor = "yellow";
        }
        if (newType === "caughtRed") {
            this.dotDiv.style.backgroundColor = "red";
        }
    }

    moveRandom(maxW, maxH) {
        if (!this.canMove()) return;
        this.x = Math.random() * (maxW - this.size);
        this.y = Math.random() * (maxH - this.size);
        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";
    }


}



