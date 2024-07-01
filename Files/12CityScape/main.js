var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
//draw background
ctx.fillStyle = "rgb(18, 17, 29)";
var bg = new Path2D();
bg.rect(0, 0, 1920, 1080);
ctx.fill(bg);
var House1 = {
    color: "black",
    windowColor: "white",
    strokeColor: "rgb(92, 92, 92)",
};
function drawStars(ammount) {
    for (var i = 0; i < ammount; i++) {
        var gradient = ctx.createLinearGradient(0, 0, 1920, 0);
        gradient.addColorStop(0, "rgb(229, 231, 182)");
        ctx.fillStyle = "white";
        ctx.filter = "blur 5px";
        var star = new Path2D();
        star.arc(Math.floor(Math.random() * 1920), Math.floor(Math.random() * 540), Math.floor(Math.random() * 3), 0, 360, false);
        ctx.fill(star);
    }
}
function drawHouses(houses, count) {
    for (var i = 0; i < 540; i = i + 10) {
        ctx.fillStyle = houses[0].color;
        ctx.strokeStyle = houses[0].strokeColor;
        var distribution = (Math.abs(i - 540)) * 0.01;
        for (var j = 0; j < distribution; j++) {
            var house = new Path2D;
            var distanceFac = i / 540;
            var randH = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            var randW = (Math.floor(Math.random() * 100 + 100)) * distanceFac;
            var randX = Math.floor(Math.random() * 1920);
            var PosY = i + 540;
            house.rect(randX, PosY, randW, -randH);
            ctx.fill(house);
            ctx.stroke(house);
        }
    }
}
drawStars(300);
drawHouses([House1], 100);
