var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
var Boxes = [];
var BoxAmount = 100;
function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(255, 255, 255)";
    var bg = new Path2D();
    bg.rect(0, 0, canvasX, canvasY);
    ctx.fill(bg);
}
function generateBoxes(ammount) {
    for (var i = 0; i < ammount; i++) {
        var box = {
            posX: Math.floor(Math.random() * canvasX),
            posY: Math.floor(Math.random() * canvasY),
            velocity: Math.random() * 2,
            direction: {
                x: Math.random(),
                y: Math.random()
            },
            height: Math.floor(Math.random() * 50),
            width: Math.floor(Math.random() * 50),
            color: {
                r: Math.floor(Math.random() * 255),
                g: Math.floor(Math.random() * 255),
                b: Math.floor(Math.random() * 255)
            }
        };
        Boxes.push(box);
    }
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
        Box.posY = Box.posY + Box.velocity * Box.direction.y;
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
generateBoxes(10);
function animate() {
    drawBackground();
    drawBoxes();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
