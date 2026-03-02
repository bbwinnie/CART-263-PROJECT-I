let user;
let tracker;

document.body.style.margin = "0";
document.body.style.overflow = "hidden";

document.body.style.backgroundImage = "url('3.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center 60px";
document.body.style.backgroundRepeat = "no-repeat";




let rule = document.createElement("div");
rule.innerText = "Evade tracking for 8 seconds.";
rule.style.position = "absolute";
rule.style.top = "50%";
rule.style.left = "50%";
rule.style.transform = "translate(-50%, -50%)";
rule.style.color = "black";
rule.style.fontFamily = "monospace";
rule.style.fontSize = "24px";
rule.style.textAlign = "center";
rule.style.zIndex = "20";

document.body.appendChild(rule);

setTimeout(function () {
    rule.remove();
}, 2000);

window.onload = function () {

    let survived = true;
    let timeLimit = 8000;

    setTimeout(function () {
        if (survived) {
            window.location.href = "page6.html";
        }
    }, timeLimit);

    document.body.style.margin = "0";

    user = new UserDot(200, 200);
    user.render();

    tracker = new TrackerDot(50, 50);
    tracker.render();

    document.addEventListener("mousemove", function (event) {
        user.followMouse(event);
    });

    setInterval(function () {

        tracker.chase(user);

        let dx = user.x - tracker.x;
        let dy = user.y - tracker.y;

        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {

            survived = false;

            document.body.innerHTML =
                "<h1 style='color:black;text-align:center;margin-top:40vh;font-family:monospace;'>IDENTITY CAPTURED</h1>";
        }
    }, 30);
}


class UserDot {
    constructor(x, y) {
        this.x = x
        this.y = y;
        this.size = 10;
        this.lastLightTime = 0;

        this.dotDiv = document.createElement("div");
    }

    render() {
        this.dotDiv.style.width = this.size + "px";
        this.dotDiv.style.height = this.size + "px";
        this.dotDiv.style.background = "yellow";
        this.dotDiv.style.borderRadius = "50%";
        this.dotDiv.style.position = "absolute";

        document.body.appendChild(this.dotDiv);

        this.updatePosition();
    }

    updatePosition() {
        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";
    }

    followMouse(event) {
        this.x = event.clientX;
        this.y = event.clientY;
        this.updatePosition();
        this.leaveTrail();
    }

    leaveTrail() {

        let now = Date.now();

        if (now - this.lastLightTime < 80) {
            return;
        }

        this.lastLightTime = now;

        centeredLight(this.x, this.y, document.body);
    }

}

class TrackerDot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.speed = 0.1;

        this.dotDiv = document.createElement("div");
    }

    render() {
        this.dotDiv.style.width = this.size + "px";
        this.dotDiv.style.height = this.size + "px";
        this.dotDiv.style.background = "red";
        this.dotDiv.style.borderRadius = "50%";
        this.dotDiv.style.position = "absolute";

        document.body.appendChild(this.dotDiv);

        this.updatePosition();
    }

    updatePosition() {
        this.dotDiv.style.left = this.x + "px";
        this.dotDiv.style.top = this.y + "px";
    }

    chase(target) {
        this.x += (target.x - this.x) * this.speed;
        this.y += (target.y - this.y) * this.speed;
        this.updatePosition();
    }
}


function centeredLight(offsetX, offsetY, parentCanvas) {

    let light = document.createElement("div");

    light.style.position = "absolute";
    light.style.left = offsetX - 3 + "px";
    light.style.top = offsetY - 3 + "px";
    light.style.width = "6px";
    light.style.height = "6px";
    light.style.borderRadius = "50%";

    light.style.background = "cyan";
    light.style.boxShadow = "0 0 15px cyan";
    light.style.pointerEvents = "none";

    parentCanvas.appendChild(light);



    light.style.opacity = "0";
    light.style.transition = "none";

    setTimeout(() => {
        light.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        light.style.opacity = "0";
    }, 800);

    setTimeout(() => {
        light.remove();
    }, 900);


}