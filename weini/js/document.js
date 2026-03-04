window.onload = setup

function setup() {

    //set the default browser margin
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";

    // Create a 2×2 grid container
    let grid = document.createElement("div");
    grid.classList.add("bkgrid");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "1fr 1fr";
    grid.style.gridTemplateRows = "1fr 1fr";
    grid.style.height = "100vh";
    grid.style.width = "100vw";
    document.body.appendChild(grid);

    // logBox will store the logging terminal (screen 4)
    let logBox = null;

    // Random integer helper
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // set the fake IP adress
    function fakeIP() {
        return `${rand(10, 255)}.${rand(0, 255)}.${rand(0, 255)}.${rand(1, 254)}`;
    }

    // get the timer
    function timeStamp() {
        return new Date().toLocaleTimeString([], { hour12: false });
    }

    // Push answers into the log screen
    function pushToLog(screenIndex, questionText, answerText) {
        // Do nothing if log screen not ready
        if (!logBox) return;

        // Create a log entry
        const entry = document.createElement("div");
        entry.textContent =
            `[${timeStamp()}] ${fakeIP()} :: SCREEN_${screenIndex + 1}\n` +
            `> ${questionText}\n` +
            `> ${answerText}\n\n`;

        // Append to log
        logBox.appendChild(entry);

        // Auto-scroll to bottom
        logBox.scrollTop = logBox.scrollHeight;
    }

    // ----------- Create 4 screens -----------
    for (let i = 0; i < 4; i++) {
        // Create each grid cell
        let cell = document.createElement("div");
        cell.classList.add("bkcell");
        cell.style.overflow = "hidden";
        cell.style.justifyContent = "left";
        cell.style.position = "relative";
        cell.style.display = "flex";
        grid.appendChild(cell);

        // Create overlay layer
        let overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.inset = "0";
        overlay.style.zIndex = "10";
        overlay.style.pointerEvents = "auto";
        cell.appendChild(overlay);

        //Creat fake OS header text
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
        text.style.color = "#00FF00";
        text.style.fontSize = "10px";
        text.style.fontFamily = "Space Mono";
        text.style.zIndex = "10";
        text.style.textAlign = "left";
        text.style.justifyContent = "left";
        text.style.pointerEvents = "none";
        overlay.appendChild(text);

        // set background image
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

        //  set the array for three screen
        const boxesWithQuestion = [0, 1, 2];

        //Screen 4 = Log terminal
        if (i === 3) {

            //set the logBox 
            logBox = document.createElement("div");
            logBox.style.position = "absolute";
            logBox.style.left = "25%";
            logBox.style.top = "25%";
            logBox.style.width = "80%";
            logBox.style.height = "63%";
            logBox.style.color = "#00FF00";
            logBox.style.fontFamily = "Space Mono";
            logBox.style.fontSize = "10px";
            logBox.style.zIndex = "20";
            logBox.style.overflowY = "auto";
            logBox.style.overflowX = "hidden";
            logBox.style.wordBreak = "break-word";
            logBox.style.whiteSpace = "pre-wrap";
            overlay.appendChild(logBox);
        }

        //First 3 screens = Question system
        if (boxesWithQuestion.includes(i)) {

            // Questions list
            let questionsText = [
                "What is your name?",
                "Where are you located right now?",
                "How long have you been online?",
                "What are you thinking about?",
                "Do you feel observed?"
            ];

            // Auto answers (simulate AI takeover)
            let autoAnswersByBox = {
                0: ["Alex", "Toronto.", "5 mins", "Just trying to finish what I started.", "Not really… maybe a little."],

                1: ["Billy", "Montreal.", "1 hours", "I'm thinking about why these questions are being asked.",
                    "Yes. It feels like this is not random."],

                2: ["Vicky", "New York.", "15 mins",
                    "Thought patterns detected. Logging cognitive activity.",
                    "Observation confirmed. Monitoring will continue."]
            };

            let autoAnswers = autoAnswersByBox[i]

            //set the default setting
            let currentQuestion = 0;
            let idleTimer;
            let finished = false;
            let userTookOver = false;

            //Create question display
            let question = document.createElement("div");
            question.innerHTML = questionsText[currentQuestion];
            question.style.position = "absolute";
            question.style.left = "25%";
            question.style.top = "25%";
            question.style.transform = "translateY(0)";
            question.style.color = "#00FF00";
            question.style.fontSize = "12px";
            question.style.fontFamily = "Space Mono";
            question.style.zIndex = "15";
            question.style.textAlign = "left";
            question.style.justifyContent = "left";
            question.style.pointerEvents = "none";
            overlay.appendChild(question);

            let inputText = document.createElement("div");
            inputText.classList.add("inputText");
            overlay.appendChild(inputText);

            // Create input field
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

            // If idle 8s → auto answer 
            function startIdleTimer() {
                clearTimeout(idleTimer);
                if (finished || userTookOver) return;

                idleTimer = setTimeout(() => {
                    if (finished || userTookOver) return;
                    inputAnswer.value = autoAnswers[currentQuestion] ?? "…";
                    submitAnswer();
                }, 8000);
            }

            //Submit answer
            function submitAnswer() {
                if (finished) return;

                const typed = inputAnswer.value.trim();
                if (typed === "") return;

                const currentQ = questionsText[currentQuestion];

                //// Show answer locally
                question.innerHTML += `<br><span style="color:#00FF00">> ${typed}</span>`;

                // Also send to log screen
                pushToLog(i, currentQ, typed);

                currentQuestion++;

                // Move to next question
                if (currentQuestion < questionsText.length) {
                    question.innerHTML += "<br><br>" + questionsText[currentQuestion];
                    inputAnswer.value = "";
                    startIdleTimer();
                } else {
                    if (!question.innerHTML.includes("All data received.")) {
                        question.innerHTML += "<br><br>All data received.";
                    }
                    finished = true;
                    inputAnswer.value = "";
                    inputAnswer.disabled = true;
                    clearTimeout(idleTimer);
                }
            }


            // Press Enter to submit
            inputAnswer.addEventListener("keydown", (e) => {

                userTookOver = true;
                clearTimeout(idleTimer);

                if (e.key === "Enter") {
                    submitAnswer();
                }
            });

            startIdleTimer();
        }

        console.log(document.querySelectorAll(".text"));

    }

    // Keyboard event: press right arrow to go to the next page
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowRight") {

            window.location.href = "file.html";
        }

    });


}




