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
}


class Dot {
    constructor(x, y, size, parentEl) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.parentEl = parentEl;
        this.dotDiv = document.createElement("div");
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
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
}