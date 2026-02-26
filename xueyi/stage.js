window.onload = function () {
    document.body.style.backgroundColor = "black";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.color = "white";

    let question = document.createElement("div");
    document.body.appendChild(question);
    question.innerText = "When a space is shared by many, what happens?";
    question.style.position = "fixed";
    question.style.top = "20px";
    question.style.left = "50%";
    question.style.transform = "translateX(-50%)";
    question.style.fontSize = "14px";
    question.style.opacity = "0.7";


    let live = document.createElement("div");
    document.body.appendChild(live);
    live.innerText = "LIVE";
    live.style.position = "fixed";
    live.style.top = "20px";
    live.style.left = "20px";


    let viewers = document.createElement("div");
    document.body.appendChild(viewers);
    viewers.innerText = "VIEWERS: 37";
    viewers.style.position = "fixed";
    viewers.style.top = "20px";
    viewers.style.right = "20px";
    viewers.style.opacity = "0.8";


    let input = document.createElement("input");
    document.body.appendChild(input);
    input.type = "text";
    input.placeholder = "Type and press Enter...";
    input.style.position = "fixed";
    input.style.top = "40%";
    input.style.left = "50%";
    input.style.transform = "translate(-50%, -50%)";
    input.style.padding = "10px";
    input.style.fontSize = "18px";
    input.style.backgroundColor = "black";
    input.style.color = "white";
    input.style.border = "1px solid white";
    input.style.outline = "none";
    input.focus();

    // 公共 Feed 区域
    let feed = document.createElement("div");
    document.body.appendChild(feed);
    feed.style.position = "fixed";
    feed.style.top = "50%";
    feed.style.left = "50%";
    feed.style.transform = "translateX(-50%)";
    feed.style.width = "80%";
    feed.style.height = "45%";
    feed.style.overflow = "hidden";
    feed.style.fontSize = "14px";
    feed.style.opacity = "0.85";

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            let line = document.createElement("div");
            feed.appendChild(line);

            let id = Math.floor(Math.random() * 100);
            line.innerText = "User_" + id + " searched: " + input.value;

            input.value = "";
        }
    });

    setInterval(function () {
        viewers.innerText = "VIEWERS: " + (20 + Math.floor(Math.random() * 80));
    }, 1200);
};