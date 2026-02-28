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

    let newText = document.createElement("div");
    newText.classList.add("beginningText");
    newText.innerHTML = "<P> save your file <P>"
    newText.style.color = "black";
    newText.style.position = "absolute";
    document.body.appendChild(newText);

    for (let i = 0; i < 4; i++) {
        // ✅ 每个格子
        let cell = document.createElement("div");
        cell.classList.add("bkcell");
        cell.style.overflow = "hidden"; // 防止撑开
        cell.style.justifyContent = "center";

        // ✅ 图片
        let img = document.createElement("img");
        img.classList.add("bkground_img");
        img.src = "image/desktop.jpeg";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";  // 填满格子不变形裁剪
        img.style.display = "block";
        img.style.borderStyle = "outset";

        cell.appendChild(img);
        grid.appendChild(cell);

    }




}

