// ===== 基础设置 =====
document.body.style.margin = "0";
document.body.style.backgroundColor = "black";
document.body.style.overflow = "hidden";
document.body.style.fontFamily = "monospace";
document.body.style.color = "white";

// ===== 创建网格 =====
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

    // LIVE
    let live = document.createElement("div");
    live.innerText = "🔴 LIVE";
    live.style.position = "absolute";
    live.style.top = "10px";
    live.style.left = "10px";
    live.style.color = "red";
    panel.appendChild(live);

    // viewers
    let viewers = document.createElement("div");
    let count = 1200;
    viewers.innerText = count + " watching";
    viewers.style.position = "absolute";
    viewers.style.top = "30px";
    viewers.style.left = "10px";
    panel.appendChild(viewers);


    setInterval(function () {
        count += Math.floor(Math.random() * 50);
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

let videoA = createVideo("3.mp4");
let videoB = createVideo("4.mp4");
let videoC = createVideo("5.mp4");

panels[0].appendChild(videoA);
panels[1].appendChild(videoB);
panels[2].appendChild(videoC);

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



function createHeart() {
    let heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = "20px";
    document.body.appendChild(heart);

    let pos = 0;
    let move = setInterval(function () {
        pos += 5;
        heart.style.bottom = pos + "px";
        if (pos > window.innerHeight) {
            clearInterval(move);
            heart.remove();
        }
    }, 20);
}



let heartInterval = setInterval(createHeart, 1000);


setTimeout(function () {

    clearInterval(heartInterval);
    heartInterval = setInterval(createHeart, 150);

}, 2000);


setTimeout(function () {

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";

    let text = document.createElement("div");
    text.innerText = "YOU ARE PERFORMING.";
    text.style.position = "absolute";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%,-50%)";
    text.style.fontSize = "36px";
    text.style.textAlign = "center";
    document.body.appendChild(text);

}, 4000);


setTimeout(function () {

    let flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.backgroundColor = "white";
    flash.style.zIndex = "9999";
    document.body.appendChild(flash);

    setTimeout(function () {
        window.location.href = "page4.html";
    }, 200);

}, 4800);