var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
var worldWith = 7680;
var worldHeigth = 999;
var worldPosX = 0;
var worldPosY = 0;
var Trees = [];
var score = 0;
var movementSpeed = 5;
function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(255, 255, 255)";
    var bg = new Path2D();
    bg.rect(worldPosX, worldPosY, worldWith, worldHeigth);
    ctx.fill(bg);
}
function generateTrees(amount) {
    for (var i = 0; i < amount; i++) {
        var tree = {
            posX: Math.floor(Math.random() * worldWith),
            posY: Math.floor(Math.random() * worldHeigth),
            radius: Math.floor(Math.random() * 100 + 100),
            color: {
                h: Math.floor(Math.random() * 255),
                s: Math.floor(Math.random() * 20 + 80),
                l: Math.floor(Math.random() * 20 + 50)
            }
        };
        Trees.push(tree);
    }
}
function drawTrees() {
    for (var i = 0; i < Trees.length; i++) {
        var Tree = Trees[i];
        if (Tree.posX + worldPosX > -Tree.radius &&
            Tree.posX + worldPosX < canvasX + Tree.radius &&
            Tree.posY + worldPosY > -Tree.radius &&
            Tree.posY + worldPosY < canvasY + Tree.radius) {
            ctx.fillStyle = "hsl(100, ".concat(Tree.color.s, "%, ").concat(Tree.color.l, "%)");
            ctx.beginPath();
            ctx.ellipse(worldPosX + Tree.posX, worldPosY + Tree.posY, Tree.radius, Tree.radius, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
window.addEventListener("keypress", function (_event) {
    if (_event.key == "d") {
        worldPosX -= movementSpeed;
    }
    if (_event.key == "a") {
        worldPosX += movementSpeed;
    }
    if (_event.key == "w") {
    }
    if (_event.key == "s") {
    }
});
generateTrees(100);
function animate() {
    drawBackground();
    drawTrees();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
