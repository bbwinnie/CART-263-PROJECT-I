window.onload = setup

function setup() {
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";

    let grid = document.createElement("div");
    grid.classList.add("bkgrid");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "1fr 1fr";
    grid.style.gridTemplateRows = "1fr 1fr";
    grid.style.height = "100vh";
    grid.style.width = "100vw";
    document.body.appendChild(grid);

    for (let i = 0; i < 4; i++) {
        // 
        let cell = document.createElement("div");
        cell.classList.add("bkcell");
        cell.style.overflow = "hidden";
        cell.style.justifyContent = "left";
        cell.style.position = "relative";
        cell.style.display = "flex";

        let text = document.createElement("div");
        let windowText = [
            "Private Windows [Version  10.0.26200.7922] <br> Copyright(c) Velo Corporation. All rights reseerved.",
            "Private Windows [Version  10.0.26200.7922] <br> Copyright(c) Velo Corporation. All rights reseerved.",
            "Private Windows [Version  10.0.26200.7922] <br> Copyright(c) Velo Corporation. All rights reseerved.",
            "Receiving data stream...<br>connected to shared_server"
        ];
        text.innerHTML = windowText[i]
        text.classList.add("text");
        text.style.position = "absolute";
        text.style.top = "50px";
        text.style.left = "120px";
        text.style.transform = "translateY(-50%)";
        text.style.color = "#00FF00";
        text.style.fontSize = "4px";
        text.style.fontFamily = "Space Mono";
        text.style.zIndex = "10";
        text.style.textAlign = "left";
        text.style.justifyContent = "left";
        cell.appendChild(text);

        // 
        let img = document.createElement("img");
        img.classList.add("bkground_img");
        img.src = "image/desktopScreen.gif";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        cell.appendChild(img);
        grid.appendChild(cell);


        let question = document.createElement("div");
        question.style.position = "absolute";
        question.style.left = "120px";
        question.style.top = "70px";
        question.style.transform = "translateY(-50%)";
        question.style.color = "#00FF00";
        question.style.fontSize = "5px";
        question.style.fontFamily = "Space Mono";
        question.style.zIndex = "15";
        question.style.textAlign = "left";
        question.style.justifyContent = "left";
        cell.appendChild(question);

        let questionsText = [
            "What is your name?",
            "How are you feeling today?",
            "What are you doing right now?"
        ];

        let currentQuestion = 0;

        question.innerHTML = questionsText[currentQuestion];

        // input.addEventListener("keydown", function (event) {
        //     if (event.key === "Enter") {
        //         let answer = input.value;

        //         currentQuestion++;

        //         if (currentQuestion < questions.length) {
        //             text.innerHTML += "<br><br>" + questions[currentQuestion];
        //         } else {
        //             text.innerHTML += "<br><br>All data received.";
        //             input.disabled = true;
        //         }
        //     }
        // })
    }

    console.log(document.querySelectorAll(".text"));







}

