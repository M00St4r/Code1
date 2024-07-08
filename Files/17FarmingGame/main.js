var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
var worldWith = 7680;
var worldHeigth = 4320;
var worldPosX = 0;
var worldPosY = 0;
var Trees = [];
var score = 0;
var movementSpeed = 5;
function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(28, 84, 40)";
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
            ctx.fillStyle = "hsl(130, " + Tree.color.s + "%, " + Tree.color.l + "%)";
            ctx.strokeStyle = "rgb(0, 0, 0)";
            ctx.lineWidth = 3;
            var tree = new Path2D;
            tree.ellipse(worldPosX + Tree.posX, worldPosY + Tree.posY, Tree.radius, Tree.radius, 0, 0, Math.PI * 2);
            ctx.fill(tree);
            ctx.stroke(tree);
        }
    }
}
window.addEventListener("keypress", function (_event) {
    if (_event.key == "w") {
        worldPosY -= movementSpeed;
    }
    if (_event.key == "a") {
        worldPosX += movementSpeed;
    }
    if (_event.key == "s") {
        worldPosY += movementSpeed;
    }
    if (_event.key == "d") {
        worldPosX -= movementSpeed;
    }
});
function drawPlayer() {
    ctx.fillStyle = "rgb(230, 186, 162)";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 3;
    var player = new Path2D();
    player.ellipse(canvasX / 2, canvasY / 2, 50, 50, 0, 0, Math.PI * 2, false);
    ctx.fill(player);
    ctx.stroke(player);
}
generateTrees(50);
function animate() {
    ctx.clearRect(0, 0, canvasX, canvasY);
    drawBackground();
    drawPlayer();
    drawTrees();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
