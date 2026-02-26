document.body.style.margin = "0";
document.body.style.backgroundColor = "black";
document.body.style.overflow = "hidden";
document.body.style.height = "100vh";

let sharedLoad = 0;
let nodes = [];
let lines = [];

function createControlPanel() {

    let panel = document.createElement("div");
    panel.style.position = "absolute";
    panel.style.top = "20px";
    panel.style.left = "20px";
    panel.style.color = "cyan";
    panel.style.fontFamily = "monospace";
    panel.style.fontSize = "20px";

    panel.innerHTML = `
        SHARED LOAD: <span id="load">0</span>%
    `;

    document.body.appendChild(panel);
}

function updateSharedState() {

    sharedLoad += 10;
    if (sharedLoad > 100) sharedLoad = 100;

    document.getElementById("load").innerText = sharedLoad;

    if (sharedLoad >= 100) {
        setTimeout(() => {
            window.location.href = "shared system.html";
        }, 800);
    }
}

class Node {

    constructor(x, y, size) {

        this.x = x;
        this.y = y;
        this.size = size;

        this.nodeDiv = document.createElement("div");

        let self = this;

        this.nodeDiv.addEventListener("click", function () {

            self.nodeDiv.style.transform = "translate(-50%,-50%) scale(1.3)";
            self.nodeDiv.style.opacity = "0.3";

            setTimeout(() => {
                self.nodeDiv.style.transform = "translate(-50%,-50%) scale(1)";
            }, 200);

            updateSharedState();
        });
    }

    render() {

        document.body.appendChild(this.nodeDiv);

        this.nodeDiv.style.position = "absolute";
        this.nodeDiv.style.left = this.x + "px";
        this.nodeDiv.style.top = this.y + "px";
        this.nodeDiv.style.transform = "translate(-50%,-50%) scale(0)";
        this.nodeDiv.style.transition = "all 0.4s ease";

        this.nodeDiv.style.width = this.size + "px";
        this.nodeDiv.style.height = this.size + "px";
        this.nodeDiv.style.borderRadius = "50%";
        this.nodeDiv.style.backgroundColor = "cyan";


        setTimeout(() => {
            this.nodeDiv.style.transform = "translate(-50%,-50%) scale(1)";
        }, 50);
    }
}

class Line {

    constructor(startNode, endNode) {

        this.startNode = startNode;
        this.endNode = endNode;

        this.lineDiv = document.createElement("div");
    }

    render() {

        document.body.appendChild(this.lineDiv);

        let dx = this.endNode.x - this.startNode.x;
        let dy = this.endNode.y - this.startNode.y;

        let distance = Math.sqrt(dx * dx + dy * dy);
        let angle = Math.atan2(dy, dx) * 180 / Math.PI;

        this.lineDiv.style.position = "absolute";
        this.lineDiv.style.left = this.startNode.x + "px";
        this.lineDiv.style.top = this.startNode.y + "px";
        this.lineDiv.style.width = "0px";
        this.lineDiv.style.height = "2px";
        this.lineDiv.style.backgroundColor = "rgba(0,255,255,0.5)";
        this.lineDiv.style.transformOrigin = "0 0";
        this.lineDiv.style.transform = `rotate(${angle}deg)`;
        this.lineDiv.style.transition = "width 0.4s ease";


        setTimeout(() => {
            this.lineDiv.style.width = distance + "px";
        }, 50);
    }
}

function createNetwork() {

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let center = new Node(centerX, centerY, 80);
    center.render();
    nodes.push(center);

    center.nodeDiv.addEventListener("click", function () {

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let newNode = new Node(x, y, 40);
        newNode.render();
        nodes.push(newNode);

        let newLine = new Line(center, newNode);
        newLine.render();
        lines.push(newLine);
    });
}

createNetwork();
createControlPanel();