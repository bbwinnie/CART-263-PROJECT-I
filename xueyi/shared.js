document.body.style.margin = "0";
document.body.style.backgroundColor = "black";
document.body.style.overflow = "hidden";
document.body.style.height = "100vh";
document.body.style.position = "relative";
document.body.style.backgroundImage =
    "radial-gradient(circle at center, rgba(0,255,255,0.05) 1px, transparent 1px)";
document.body.style.backgroundSize = "40px 40px";


let sharedLoad = 0;
let usersOnline = 128;

let nodes = [];
let lines = [];

function createControlPanel() {

    let topBar = document.createElement("div");
    topBar.style.position = "absolute";
    topBar.style.top = "0";
    topBar.style.width = "100%";
    topBar.style.padding = "20px";
    topBar.style.color = "cyan";
    topBar.style.fontFamily = "monospace";
    topBar.style.fontSize = "20px";
    topBar.style.lineHeight = "32px";
    topBar.style.letterSpacing = "2px";
    topBar.style.background = "rgba(0,0,0,0.7)";

    topBar.innerHTML = `
        USERS ONLINE: <span id="users">128</span><br>
        SHARED LOAD: <span id="load">0</span>%
    `;

    document.body.appendChild(topBar);


    let log = document.createElement("div");
    log.id = "systemLog";
    log.style.position = "absolute";
    log.style.bottom = "0";
    log.style.width = "100%";
    log.style.padding = "20px";
    log.style.color = "lime";
    log.style.fontFamily = "monospace";
    log.style.background = "rgba(0,0,0,0.8)";
    log.innerText = "SYSTEM LOG\n";

    document.body.appendChild(log);
}

function updateSharedState() {

    sharedLoad += 12;
    if (sharedLoad > 100) sharedLoad = 100;

    usersOnline += Math.floor(Math.random() * 5 - 2);

    document.getElementById("load").innerText = sharedLoad;
    document.getElementById("users").innerText = usersOnline;

    let messages = [
        "Connection established.",
        "Signal replicated.",
        "Individual input absorbed.",
        "Collective identity forming.",
        "Synchronization near completion."
    ];

    addLog(messages[Math.floor(sharedLoad / 20) - 1]);

    if (sharedLoad >= 100) {
        addLog("System fully synchronized.");
        setTimeout(() => {
            window.location.href = "shared system.html";
        }, 1000);
    }
}

function addLog(text) {

    let log = document.getElementById("systemLog");
    let time = new Date().toLocaleTimeString();

    log.innerText += `\n[${time}] ${text}`;
}

class Node {

    constructor(x, y, size, color) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        this.nodeDiv = document.createElement("div");

        let self = this;

        this.nodeDiv.addEventListener("click", function () {

            self.sendData();
            updateSharedState();
        });
    }

    render() {

        document.body.appendChild(this.nodeDiv);
        this.updateDiv();
    }

    updateDiv() {

        this.nodeDiv.style.position = "absolute";
        this.nodeDiv.style.left = this.x + "px";
        this.nodeDiv.style.top = this.y + "px";
        this.nodeDiv.style.transform = "translate(-50%,-50%)";

        this.nodeDiv.style.width = this.size + "px";
        this.nodeDiv.style.height = this.size + "px";
        this.nodeDiv.style.borderRadius = "50%";
        this.nodeDiv.style.backgroundColor =
            `rgb(${this.color.r},${this.color.g},${this.color.b})`;
        this.nodeDiv.style.boxShadow =
            `0 0 15px rgb(${this.color.r},${this.color.g},${this.color.b})`;
    }

    sendData() {

        lines.forEach(line => {
            if (line.startNode === this) {
                line.sendPulse();
            }
        });
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
        this.lineDiv.style.width = distance + "px";
        this.lineDiv.style.height = "2px";
        this.lineDiv.style.backgroundColor = "rgba(0,255,255,0.5)";
        this.lineDiv.style.transformOrigin = "0 0";
        this.lineDiv.style.transform = `rotate(${angle}deg)`;
    }

    sendPulse() {

        let pulse = document.createElement("div");

        pulse.style.position = "absolute";
        pulse.style.width = "6px";
        pulse.style.height = "6px";
        pulse.style.borderRadius = "50%";
        pulse.style.backgroundColor = "white";

        document.body.appendChild(pulse);

        let progress = 0;
        let self = this;

        function animate() {

            progress += 0.02;

            let x = self.startNode.x +
                (self.endNode.x - self.startNode.x) * progress;
            let y = self.startNode.y +
                (self.endNode.y - self.startNode.y) * progress;

            pulse.style.left = x + "px";
            pulse.style.top = y + "px";

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                pulse.remove();
            }
        }

        animate();
    }
}

function createNetwork() {

    nodes = [];
    lines = [];

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let center = new Node(centerX, centerY, 90, { r: 0, g: 200, b: 255 });
    center.render();
    nodes.push(center);


    center.nodeDiv.addEventListener("click", function () {
        expandNetwork(center);
    });
}

function expandNetwork(center) {


    let angle = Math.random() * Math.PI * 2;


    let radius = 200 + Math.random() * 200;

    let x = center.x + Math.cos(angle) * radius;
    let y = center.y + Math.sin(angle) * radius;

    let size = 35 + Math.random() * 20;

    let newNode = new Node(x, y, size, { r: 0, g: 255, b: 200 });
    newNode.render();

    nodes.push(newNode);

    let newLine = new Line(center, newNode);
    newLine.render();
    lines.push(newLine);

    newLine.sendPulse();
}
createNetwork();
createControlPanel();
