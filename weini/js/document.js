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
        cell.style.justifyContent = "center";
        cell.style.position = "relative";

        let text = document.createElement("div");
        text.innerHTML = "save your file";
        text.style.position = "absolute";
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.transform = "translate(-50%, -50%)";
        text.style.color = "#00FF00";
        text.style.fontSize = "24px";
        text.style.fontFamily = "Space Mono";
        text.style.zIndex = "10";
        cell.appendChild(text);

        // 
        let img = document.createElement("img");
        img.classList.add("bkground_img");
        img.src = "image/desktopScreen.gif";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.borderStyle = "outset";
        cell.appendChild(img);
        grid.appendChild(cell);

    }





}

