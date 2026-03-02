window.onload = setup

function setup() {
    //set the dafulat margin and background color
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";
    document.body.style.background = "#48484e";

    let dropCount = 0;

    //add div for the files image and gif
    let cell = document.createElement("div");
    cell.classList.add("bkcell");
    cell.style.overflow = "hidden";
    cell.style.width = "100vw";
    cell.style.height = "100vh";
    // cell.style.justifyContent = "left";
    cell.style.position = "relative";
    cell.style.display = "flex";
    document.body.appendChild(cell);

    //add the files imag
    let img = document.createElement("img");
    img.classList.add("files_png");
    img.src = "image/files.png";
    img.style.width = "70%";
    img.style.height = "90%";
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "0";
    cell.appendChild(img);

    // set a drop zone
    let dropZone = document.createElement("div");
    dropZone.id = "dropZone";
    dropZone.style.position = "absolute";
    dropZone.style.width = "70%";
    dropZone.style.height = "90%";
    dropZone.style.top = "50%";
    dropZone.style.left = "50%";
    dropZone.style.transform = "translate(-50%, -50%)";
    dropZone.style.zIndex = "5";
    cell.appendChild(dropZone);

    //add a location file windows
    let location = document.createElement("a");
    location.setAttribute("href", "https://www.deaddrops.com/db/?page=view&id=778");
    location.textContent = "4GB-Concordia: 1439 Ste-Catherine W, Montreal, Quebec, CA 45.49650 N 73.57640 W "
    location.target = '_blank';
    location.style.fontFamily = 'MyCustomFont';
    location.classList.add("location");
    location.style.position = "absolute";
    location.style.left = "52%";
    location.style.top = "87%";
    location.style.color = "#48484e";
    location.style.fontSize = "16px";
    location.style.zIndex = "10";
    location.style.textDecoration = "none";
    cell.appendChild(location);

    //add a dinosaur gif
    let dinosaur = document.createElement("img");
    dinosaur.classList.add("dinosaur_png");
    dinosaur.src = "image/dinosaur.gif";
    dinosaur.style.width = "auto";
    dinosaur.style.height = "auto";
    dinosaur.style.display = "block";
    dinosaur.style.position = "absolute";
    dinosaur.style.top = "780px";
    dinosaur.style.left = "0px";
    //dinosaur.style.transform = "translate(-50%, -50%)";
    dinosaur.style.zIndex = "3";
    cell.appendChild(dinosaur);

    //set the parent for the file box
    let parent = document.createElement("div");
    parent.classList.add("parent");
    cell.appendChild(parent);

    //set the file group with text and img
    let fileAGroup = document.createElement("div");
    fileAGroup.classList.add("box");
    fileAGroup.id = "draggable-box-a";
    fileAGroup.draggable = true;
    fileAGroup.style.position = "absolute";
    fileAGroup.style.top = "150px";
    fileAGroup.style.left = "90%";
    fileAGroup.style.zIndex = "100";
    fileAGroup.style.display = "flex";
    fileAGroup.style.flexDirection = "column";
    fileAGroup.style.alignItems = "center";
    parent.appendChild(fileAGroup);

    let fileAImg = document.createElement("img");
    fileAImg.src = "image/file.png";
    fileAImg.style.width = "175px";
    fileAImg.style.height = "auto";
    fileAImg.style.display = "block";
    fileAImg.style.pointerEvents = "none";
    fileAGroup.appendChild(fileAImg);

    let fileAText = document.createElement("p");
    fileAText.innerHTML = "document";
    fileAText.style.fontFamily = "MyCustomFont";
    fileAText.style.fontSize = "24px";
    fileAText.style.margin = "8px 0 0 0";
    fileAText.style.color = "#fff6e4";
    fileAText.style.pointerEvents = "none";
    fileAGroup.appendChild(fileAText);

    //set the file group B with text and img
    let fileBGroup = document.createElement("div");
    fileBGroup.classList.add("box");
    fileBGroup.id = "draggable-box-b";
    fileBGroup.draggable = true;
    fileBGroup.style.position = "absolute";
    fileBGroup.style.top = "450px";
    fileBGroup.style.left = "90%";
    fileBGroup.style.zIndex = "100";
    fileBGroup.style.display = "flex";
    fileBGroup.style.flexDirection = "column";
    fileBGroup.style.alignItems = "center";
    parent.appendChild(fileBGroup);

    let fileBImg = document.createElement("img");
    fileBImg.src = "image/img.png";
    fileBImg.style.width = "175px";
    fileBImg.style.height = "auto";
    fileBImg.style.display = "block";
    fileBImg.style.pointerEvents = "none";
    fileBGroup.appendChild(fileBImg);

    let fileBText = document.createElement("p");
    fileBText.innerHTML = "ywlo";
    fileBText.style.fontFamily = "MyCustomFont";
    fileBText.style.fontSize = "24px";
    fileBText.style.margin = "8px 0 0 0";
    fileBText.style.color = "#fff6e4";
    fileBText.style.pointerEvents = "none";
    fileBGroup.appendChild(fileBText);

    //set the file group C with text and img
    let fileCGroup = document.createElement("div");
    fileCGroup.classList.add("box");
    fileCGroup.id = "draggable-box-c";
    fileCGroup.draggable = true;
    fileCGroup.style.position = "absolute";
    fileCGroup.style.top = "750px";
    fileCGroup.style.left = "90%";
    fileCGroup.style.zIndex = "100";
    fileCGroup.style.display = "flex";
    fileCGroup.style.flexDirection = "column";
    fileCGroup.style.alignItems = "center";
    parent.appendChild(fileCGroup);

    let fileCImg = document.createElement("img");
    fileCImg.src = "image/doc.png";
    fileCImg.style.width = "175px";
    fileCImg.style.height = "auto";
    fileCImg.style.display = "block";
    fileCImg.style.pointerEvents = "none";
    fileCGroup.appendChild(fileCImg);

    let fileCText = document.createElement("p");
    fileCText.innerHTML = "doc";
    fileCText.style.fontFamily = "MyCustomFont";
    fileCText.style.fontSize = "24px";
    fileCText.style.margin = "8px 0 0 0";
    fileCText.style.color = "#fff6e4";
    fileCText.style.pointerEvents = "none";
    fileCGroup.appendChild(fileCText);

    //save the box data when you drag
    let handleDragging = function (event) {
        //if boxes has been drop to file it can not move again
        if (event.target.classList && event.target.classList.contains("locked")) {
            event.preventDefault();
            return;
        }
        console.log("on drag")
        console.log(event.target.id);

        event.dataTransfer.clearData();
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };
    window.addEventListener("dragstart", handleDragging);

    // //
    // let handleDraggingStop = function (event) {
    //     console.log("on stop")
    //     //HERE :: the event target refers to the object being dragged...
    //     console.log(event.target.id);
    //     // HERE - this refers to the window
    //     console.log(this);
    // };
    // window.addEventListener("dragend", handleDraggingStop);

    //Allow drop and check the if drag over
    dropZone.addEventListener("dragover", function (event) {
        event.preventDefault();
        console.log("dragover");
        console.log(event);
    });

    dropZone.addEventListener("drop", function (event) {

        event.preventDefault();

        let theObjId = event.dataTransfer.getData("objDraggedID");

        let rect = dropZone.getBoundingClientRect();
        let dropX = event.clientX - rect.left;
        let dropY = event.clientY - rect.top;

        let overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.inset = "0";
        overlay.style.zIndex = "999";
        overlay.style.pointerEvents = "auto"; // 必须能点
        dropZone.appendChild(overlay);

        // ✅ 2) 弹窗图片
        let deletWindows = document.createElement("img");
        deletWindows.src = "image/saveWindows.png";
        deletWindows.style.width = "70%";
        deletWindows.style.position = "absolute";
        deletWindows.style.left = "50%";
        deletWindows.style.top = "50%";
        deletWindows.style.transform = "translate(-50%, -50%)";
        deletWindows.style.display = "block";
        deletWindows.style.pointerEvents = "none"; // 图片不挡点击
        overlay.appendChild(deletWindows);

        let okBtn = document.createElement("button");
        okBtn.textContent = "OK";
        okBtn.type = "button";
        okBtn.style.fontFamily = "MyCustomFont";
        okBtn.style.fontSize = "50px";
        okBtn.style.position = "absolute";
        okBtn.style.left = "50%";
        okBtn.style.top = "60%";
        okBtn.style.transform = "translate(-50%, -50%)";
        okBtn.style.background = "#fff6e4";
        okBtn.style.border = "5px solid black";
        okBtn.style.padding = "30px 80px";
        okBtn.style.cursor = "pointer";
        okBtn.style.zIndex = "1000"; // 保证在图片上面
        overlay.appendChild(okBtn);

        okBtn.addEventListener("click", function () {
            // 关弹窗（图片+按钮一起消失）
            overlay.remove();

            // ✅ 现在才真正把文件放进去
            let draggedEl = document.getElementById(theObjId);
            draggedEl.style.position = "absolute";
            draggedEl.classList.add("locked");
            draggedEl.draggable = false;
            draggedEl.removeAttribute("draggable");
            draggedEl.style.cursor = "default";

            let w = draggedEl.offsetWidth;
            let h = draggedEl.offsetHeight;

            draggedEl.style.left = (dropX - w / 2) + "px";
            draggedEl.style.top = (dropY - h / 2) + "px";

            dropZone.appendChild(draggedEl);
            draggedEl.classList.add("inFolder");

            // ✅ 改名逻辑
            if (dropCount < 3) {
                let textEl = draggedEl.querySelector("p");
                if (textEl) {
                    textEl.innerHTML = "unknown_<br>sender_" + (30 + dropCount);
                    textEl.style.color = "black";
                }
                dropCount++;
            }

        })

    });
}