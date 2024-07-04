var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
var Boxes = [];
var score = 0;
function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(255, 255, 255)";
    var bg = new Path2D();
    bg.rect(0, 0, canvasX, canvasY);
    ctx.fill(bg);
}
window.addEventListener("click", function (_event) {
    //console.log(_event);
    console.log(Boxes[0].posX, Boxes[0].posY);
    var Box = Boxes[0];
    if (_event.clientX < Box.posX + Box.width && _event.clientX > Box.posX && _event.clientY < Box.posY + Box.height && _event.clientY > Box.posY) {
        Boxes.pop();
        score++;
        //console.log(score);
        var scoreCounter = document.getElementById("score");
        scoreCounter.textContent = score.toString();
        generateBox();
    }
});
function generateBox() {
    var box = {
        posX: Math.floor(Math.random() * canvasX),
        posY: Math.floor(Math.random() * canvasY),
        velocity: Math.random() * 2,
        direction: {
            x: Math.random(),
            y: Math.random()
        },
        height: Math.floor(Math.random() * 100 + 100),
        width: Math.floor(Math.random() * 100 + 100),
        color: {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        }
    };
    Boxes.push(box);
}
function drawBoxes() {
    for (var i = 0; i < Boxes.length; i++) {
        var Box = Boxes[i];
        ctx.fillStyle = "rgb(" + Box.color.r + "," + Box.color.g + "," + Box.color.b + ")";
        var box = new Path2D;
        box.rect(Box.posX, Box.posY, Box.width, Box.height);
        ctx.fill(box);
        // Move boxes position
        Box.posX = Box.posX + Box.velocity * Box.direction.x;
        Box.posY = Box.posY + (Box.velocity * Box.direction.y);
        // Collision
        if (Box.posX + Box.width > canvasX) {
            Box.posX = canvasX - Box.width;
            Box.direction.x = -Box.direction.x;
        }
        else if (Box.posX < 0) {
            Box.posX = 0;
            Box.direction.x = -Box.direction.x;
        }
        if (Box.posY + Box.height > canvasY) {
            Box.posY = canvasY - Box.height;
            Box.direction.y = -Box.direction.y;
        }
        else if (Box.posY < 0) {
            Box.posY = 0;
            Box.direction.y = -Box.direction.y;
        }
    }
}
generateBox();
function animate() {
    drawBackground();
    drawBoxes();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
