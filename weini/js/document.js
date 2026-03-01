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

        grid.appendChild(cell);


        let overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.inset = "0";
        overlay.style.zIndex = "10";
        overlay.style.pointerEvents = "auto"; // overlay 不挡点击（input 例外下面会开）
        cell.appendChild(overlay);

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
        text.style.left = "25%";
        text.style.top = "18%";
        text.style.transform = "translateY(0)";
        text.style.fontSize = "clamp(4px, 0.7vw, 10px)";
        text.style.color = "#00FF00";
        text.style.fontSize = "4px";
        text.style.fontFamily = "Space Mono";
        text.style.zIndex = "10";
        text.style.textAlign = "left";
        text.style.justifyContent = "left";
        text.style.pointerEvents = "none";
        overlay.appendChild(text);

        // 
        let img = document.createElement("img");
        img.classList.add("bkground_img");
        img.src = "image/desktopScreen.gif";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.position = "absolute";
        img.style.inset = "0";
        img.style.zIndex = "1";
        cell.appendChild(img);




        const boxesWithQuestion = [0, 1, 2];

        if (boxesWithQuestion.includes(i)) {
            let questionsText = [
                "What is your name?",
                "How are you feeling today?",
                "What are you doing right now?"
            ];

            let currentQuestion = 0;

            let question = document.createElement("div");
            question.innerHTML = questionsText[currentQuestion];
            question.style.position = "absolute";
            question.style.left = "25%";
            question.style.top = "25%";
            question.style.transform = "translateY(0)";
            question.style.color = "#00FF00";
            question.style.fontSize = "4.5px";
            question.style.fontFamily = "Space Mono";
            question.style.zIndex = "15";
            question.style.textAlign = "left";
            question.style.justifyContent = "left";
            question.style.pointerEvents = "none";
            overlay.appendChild(question);

            let inputText = document.createElement("div");
            inputText.classList.add("inputText");
            overlay.appendChild(inputText);

            let inputAnswer = document.createElement("input");
            inputAnswer.setAttribute("type", "text");
            inputAnswer.setAttribute("id", `inputField_${i}`);
            inputAnswer.style.position = "absolute";
            inputAnswer.style.pointerEvents = "auto";
            inputAnswer.style.left = "24%";
            inputAnswer.style.top = "75%";
            inputAnswer.style.transform = "translateY(0)";
            inputAnswer.style.width = "45%";
            inputAnswer.style.border = "none";
            inputAnswer.style.background = "rgba(212, 212, 212, 0.3)";
            inputAnswer.style.color = "#00FF00";
            inputAnswer.style.fontFamily = "Space Mono";
            inputAnswer.style.fontSize = "clamp(5px, 0.8vw, 12px)";
            inputAnswer.style.caretColor = "#00FF00";
            inputAnswer.style.zIndex = "20"
            overlay.appendChild(inputAnswer);


            inputAnswer.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    const typed = inputAnswer.value;
                    console.log("user typed:", typed);

                    currentQuestion++;

                    if (currentQuestion < questionsText.length) {
                        question.innerHTML += "<br><br>" + questionsText[currentQuestion];
                    } else {
                        if (!question.innerHTML.includes("All data received.")) {
                            question.innerHTML += "<br><br>All data received.";
                        }

                        inputAnswer.disabled = true;
                    }

                    inputAnswer.value = "";
                }
            });

        }

    }

    console.log(document.querySelectorAll(".text"));




}

