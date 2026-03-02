document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.overflow = "hidden";
document.body.style.fontFamily = "monospace";

let grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "1fr 1fr";
grid.style.gridTemplateRows = "1fr 1fr";
grid.style.height = "100vh";
document.body.appendChild(grid);

let panels = [];

for (let i = 0; i < 4; i++) {

    let panel = document.createElement("div");


    panel.style.position = "relative";
    panel.style.border = "1px solid rgba(255,255,255,0.2)";
    panel.style.overflow = "hidden";
    grid.appendChild(panel);
    panels.push(panel);

    let live = document.createElement("div");
    live.innerText = "LIVE";
    live.style.position = "absolute";
    live.style.top = "10px";
    live.style.left = "10px";
    live.style.color = "red";
    panel.appendChild(live);

    let viewers = document.createElement("div");
    let count = 1000;
    viewers.innerText = count + " watching";
    viewers.style.position = "absolute";
    viewers.style.top = "30px";
    viewers.style.left = "10px";
    panel.appendChild(viewers);

    setInterval(function () {
        count += Math.floor(Math.random() * 20);
        viewers.innerText = count + " watching";
    }, 1000);
}



function createVideo(src) {
    let v = document.createElement("video");
    v.src = src;
    v.autoplay = true;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.style.width = "100%";
    v.style.height = "100%";
    v.style.objectFit = "cover";
    return v;
}



let v1 = createVideo("./3.mp4");
let v2 = createVideo("./4.mp4");
let v3 = createVideo("./5.mp4");

panels[0].appendChild(v1);
panels[1].appendChild(v2);
panels[2].appendChild(v3);


let camera = document.createElement("video");
camera.autoplay = true;
camera.muted = true;
camera.playsInline = true;
camera.style.width = "100%";
camera.style.height = "100%";
camera.style.objectFit = "cover";
panels[3].appendChild(camera);

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        camera.srcObject = stream;
    });



let flash = document.createElement("div");
flash.style.position = "fixed";
flash.style.inset = "0";
flash.style.background = "white";
flash.style.opacity = "0";
flash.style.transition = "opacity 0.2s";
flash.style.pointerEvents = "none";
document.body.appendChild(flash);

function flashAndGo() {
    flash.style.opacity = "1";
    setTimeout(function () {
        window.location.href = "visibility.html";
    }, 300);
}

// setTimeout(flashAndGo, 3000);