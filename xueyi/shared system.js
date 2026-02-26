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


let v1 = document.createElement("video");
v1.src = "3.mp4";
v1.autoplay = true;
v1.loop = true;
v1.muted = true;
v1.playsInline = true;
v1.style.width = "100%";
v1.style.height = "100%";
v1.style.objectFit = "cover";
panels[0].appendChild(v1);

let v2 = document.createElement("video");
v2.src = "4.mp4";
v2.autoplay = true;
v2.loop = true;
v2.muted = true;
v2.playsInline = true;
v2.style.width = "100%";
v2.style.height = "100%";
v2.style.objectFit = "cover";
panels[1].appendChild(v2);

let v3 = document.createElement("video");
v3.src = "5.mp4";
v3.autoplay = true;
v3.loop = true;
v3.muted = true;
v3.playsInline = true;
v3.style.width = "100%";
v3.style.height = "100%";
v3.style.objectFit = "cover";
panels[2].appendChild(v3);

panels[0].appendChild(createVideo("3.mp4"));
panels[1].appendChild(createVideo("4.mp4"));
panels[2].appendChild(createVideo("5.mp4"));

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

function flashAndGo() {


    setTimeout(function () {
        flash.style.opacity = "1";
    }, 50);


    setTimeout(function () {
        window.location.href = "visibility.html";
    }, 300);

}
setTimeout(function () {
    flashAndGo();
}, 3000);