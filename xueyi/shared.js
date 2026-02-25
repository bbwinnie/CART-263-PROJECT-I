btn.addEventListener("click", function () {

    document.body.innerHTML = "";

    let text = document.createElement("h1");
    document.body.appendChild(text);
    text.innerText = "You have been categorized.";
    text.style.color = "white";

    setTimeout(function () {
        window.location.href = "page3.html";
    }, 1500);

});