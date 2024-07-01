var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
//draw background
ctx.fillStyle = "rgb(13, 13, 13)";
var bg = new Path2D();
bg.rect(0, 0, canvasX, canvasY);
ctx.fill(bg);
//draw sky
var skyGradient = ctx.createRadialGradient(canvasX / 2, 0, 0, canvasX / 2, 0, canvasY / 2);
// ctx.createLinearGradient(0, 0, 0, canvasY / 2);
skyGradient.addColorStop(0, '#4a6e8a');
skyGradient.addColorStop(1, '#1c2331');
ctx.fillStyle = skyGradient;
var sky = new Path2D();
sky.rect(0, 0, canvasX, canvasY / 2);
ctx.fill(sky);
var House1 = {
    hue: 300,
    windowColor: "white",
    strokeColor: "rgb(92, 92, 92)",
};
function drawMoon(color) {
    ctx.fillStyle = color;
    var moon = new Path2D();
    var shadow = new Path2D();
    moon.arc(canvasX / 2, canvasY / 4, 50, 0, Math.PI * 2, false);
    ctx.fill(moon);
    shadow.arc(canvasX / 2 - 20, canvasY / 4, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = skyGradient;
    ctx.fill(shadow);
}
function drawStars(amount) {
    for (var i = 0; i < amount; i++) {
        ctx.fillStyle = "hsl(60, " + Math.floor(Math.random() * 50) + 50 + "%, " + Math.floor(Math.random() * 20) + 80 + "%)";
        var star = new Path2D();
        star.arc(Math.floor(Math.random() * canvasX), Math.floor(Math.random() * (canvasY / 2)), Math.floor(Math.random() * 3), 0, Math.PI * 2, false);
        ctx.fill(star);
    }
}
function drawClouds(amount) {
    for (var i = 0; i < amount; i++) {
        var cloud = new Path2D();
        var opacity = Math.floor(Math.random() + 0.5);
        ctx.fillStyle = "rgba(255, 255, 255," + opacity * 0.5 + ")";
        var cloudX = Math.floor(Math.random() * canvasX);
        var cloudY = Math.floor(Math.random() * (canvasY / 2.5));
        var cloudRX = Math.floor(Math.random() * 200 + 100);
        var cloudRY = Math.floor(Math.random() * 40 + 10);
        cloud.ellipse(cloudX, cloudY, cloudRX, cloudRY, 0, 0, Math.PI * 2, false);
        ctx.fill(cloud);
    }
}
function drawHouses(houses, count) {
    for (var i = 0; i < canvasY / 2; i = i + 10) {
        //ctx.fillStyle = houses[0].color;
        ctx.strokeStyle = houses.strokeColor;
        var distribution = (Math.abs(i - canvasY / 2)) * 0.01;
        for (var j = 0; j < distribution; j++) {
            var saturation = 100 * i / (canvasY / 2);
            var lightness = (Math.abs(i - canvasY / 2) / i);
            ctx.fillStyle = "hsl(" + houses.hue + ", " + saturation + "%, " + lightness + "%)";
            var house = new Path2D;
            var distanceFac = (i / (canvasY / 2)) * 0.9;
            var randH = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            var randW = (Math.floor(Math.random() * 100 + 100)) * distanceFac;
            var randX = Math.floor(Math.random() * canvasX);
            var PosY = i + canvasY / 2;
            house.rect(randX, PosY, randW, -randH);
            ctx.fill(house);
            ctx.stroke(house);
            // Adjust window size based on house dimensions
            var windowsPerRow = 5;
            var windowsPerColumn = 10;
            var windowW = randW / (windowsPerRow * 1.5);
            var windowH = randH / (windowsPerColumn * 1.5);
            // Calculate window spacing
            var windowSpacingX = windowW * 0.5;
            var windowSpacingY = windowH * 0.5;
            // Calculate offset
            var offsetX = windowSpacingX / 2;
            var offsetY = windowSpacingY / 2;
            for (var w = 0; w < windowsPerRow; w++) {
                for (var h = 0; h < windowsPerColumn; h++) {
                    ctx.strokeStyle = houses.strokeColor;
                    ctx.fillStyle = "hsl(60, " + Math.floor(Math.random() * 50) + 50 + "%, " + Number(Math.random() < 0.5) * 100 + "%)";
                    var windowX = randX + offsetX + (w * (windowW + windowSpacingX));
                    var windowY = PosY - randH + offsetY + (h * (windowH + windowSpacingY));
                    var window_1 = new Path2D();
                    window_1.rect(windowX, windowY, windowW, windowH);
                    ctx.fill(window_1);
                    ctx.stroke(window_1);
                }
            }
        }
    }
}
drawStars(300);
drawMoon("#e1ebcc");
drawClouds(50);
drawHouses(House1, 100);
