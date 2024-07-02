var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var canvasX = canvas.width;
var canvasY = canvas.height;
var cloudArray = [];
var cloudAmount = 25;
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
    hue: 222,
    windowColor: "white",
    strokeColor: 0,
};
function drawMoon(color, yOffset, completion) {
    ctx.fillStyle = color;
    var moon = new Path2D();
    var shadow = new Path2D();
    var moonRad = 50;
    var moonX = canvasX / 2;
    var moonY = (canvasY / 4) - yOffset;
    moon.arc(moonX, moonY, moonRad, 0, Math.PI * 2, false);
    ctx.fill(moon);
    shadow.arc(moonX - (moonRad * 2) * completion, moonY, moonRad + 1, 0, Math.PI * 2, false);
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
function drawClouds() {
    for (var i = 0; i < cloudArray.length; i++) {
        var cloud = new Path2D();
        ctx.fillStyle = "rgba(255, 255, 255," + cloudArray[i].opacity * 0.5 + ")";
        cloud.ellipse(cloudArray[i].posX, cloudArray[i].posY, cloudArray[i].radX, cloudArray[i].radY, 0, 0, Math.PI * 2, false);
        cloudArray[i].posX += cloudArray[i].speed;
        ctx.fill(cloud);
        console.log("draw Clouds");
    }
}
function drawHouses(houses, count) {
    for (var i = 0; i < canvasY / 2; i = i + 10) {
        var distribution = ((Math.abs(i - canvasY / 2)) * 0.01) * count;
        for (var j = 0; j < distribution; j++) {
            var saturation = 100 * i / (canvasY / 2);
            var lightness = (Math.abs(i - canvasY / 2) / i) * 10;
            var strokeLightness = (Math.abs(i - canvasY / 2) / i) * 10 + 30;
            ctx.fillStyle = "hsl(" + houses.hue + ", " + saturation + "%, " + lightness + "%)";
            ctx.strokeStyle = "hsl(" + houses.strokeColor + ", 0%, " + strokeLightness + "%)";
            var house = new Path2D;
            //scales the houses based of the y Position + an offset
            var distanceFac = (i / (canvasY / 2) + 0.1); //(i / (canvasY / 2))
            var houseH = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            var houseW = (Math.floor(Math.random() * 100 + 100)) * distanceFac;
            var houseX = Math.floor(Math.random() * canvasX);
            var houseY = i + canvasY / 2;
            house.rect(houseX, houseY, houseW, -houseH);
            ctx.lineWidth = 2;
            ctx.fill(house);
            ctx.stroke(house);
            // Adjust window size based on house dimensions
            var windowsPerRow = 10;
            var windowAspect = 1 / 2;
            var windowW = houseW / (windowsPerRow * 1.5);
            var windowH = windowW * windowAspect;
            var windowsPerColumn = houseH / (windowH * 1.5);
            // Calculate window spacing
            var windowSpacingX = windowW * 0.5;
            var windowSpacingY = windowH * 0.5;
            // Calculate offset
            var offsetX = windowSpacingX / 2;
            var offsetY = windowSpacingY / 2;
            for (var w = 0; w < windowsPerRow; w++) {
                for (var h = 0; h < windowsPerColumn; h++) {
                    ctx.strokeStyle = "hsl(" + houses.strokeColor + ", 0%, " + strokeLightness + "%)";
                    ctx.fillStyle = "hsl(60, " + Number(Math.random() < 0.5) * 100 + "%, " + Number(Math.random() < 0.3) * 90 + "%)";
                    var windowX = houseX + offsetX + (w * (windowW + windowSpacingX));
                    var windowY = houseY - houseH + offsetY + (h * (windowH + windowSpacingY));
                    var window_1 = new Path2D();
                    window_1.rect(windowX, windowY, windowW, windowH);
                    ctx.lineWidth = 1;
                    ctx.fill(window_1);
                    ctx.stroke(window_1);
                }
            }
        }
    }
}
function createCloudArray(amount) {
    for (var i = 0; i < amount; i++) {
        var cloud = {
            posX: Math.floor(Math.random() * canvasX),
            posY: Math.floor(Math.random() * (canvasY / 2.5)),
            speed: Math.floor(Math.random() * 2),
            radX: Math.floor(Math.random() * 200 + 100),
            radY: Math.floor(Math.random() * 40 + 10),
            opacity: Math.floor(Math.random() + 0.5),
        };
        cloudArray.push(cloud);
    }
}
function animate() {
    drawClouds();
    requestAnimationFrame(animate);
}
drawHouses(House1, 2);
var Foreground = ctx.getImageData;
drawStars(500);
drawMoon("#e1ebcc", 150, 0.3);
var Background = ctx.getImageData;
createCloudArray(cloudAmount);
drawHouses(House1, 2);
//ctx.putImageData
requestAnimationFrame(animate);
