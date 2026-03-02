window.onload = setup

function setup() {
    document.documentElement.style.margin = "0";
    document.body.style.margin = "0";
    document.body.style.background = "#48484e";

    let cell = document.createElement("div");
    cell.classList.add("bkcell");
    cell.style.overflow = "hidden";
    cell.style.width = "100vw";
    cell.style.height = "100vh";
    // cell.style.justifyContent = "left";
    cell.style.position = "relative";
    cell.style.display = "flex";
    document.body.appendChild(cell);

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
    img.style.zIndex = "3";
    cell.appendChild(img);

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


}