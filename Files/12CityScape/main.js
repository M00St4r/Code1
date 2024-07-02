"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let canvasX = canvas.width;
let canvasY = canvas.height;
let cloudArray = [];
//draw background
ctx.fillStyle = "rgb(13, 13, 13)";
let bg = new Path2D();
bg.rect(0, 0, canvasX, canvasY);
ctx.fill(bg);
//draw sky
let skyGradient = ctx.createRadialGradient(canvasX / 2, 0, 0, canvasX / 2, 0, canvasY / 2);
// ctx.createLinearGradient(0, 0, 0, canvasY / 2);
skyGradient.addColorStop(0, '#4a6e8a');
skyGradient.addColorStop(1, '#1c2331');
ctx.fillStyle = skyGradient;
let sky = new Path2D();
sky.rect(0, 0, canvasX, canvasY / 2);
ctx.fill(sky);
let House1 = {
    hue: 222,
    windowColor: "white",
    strokeColor: 0,
};
function drawMoon(color, yOffset, completion) {
    ctx.fillStyle = color;
    let moon = new Path2D();
    let shadow = new Path2D();
    let moonRad = 50;
    let moonX = canvasX / 2;
    let moonY = (canvasY / 4) - yOffset;
    moon.arc(moonX, moonY, moonRad, 0, Math.PI * 2, false);
    ctx.fill(moon);
    shadow.arc(moonX - (moonRad * 2) * completion, moonY, moonRad + 1, 0, Math.PI * 2, false);
    ctx.fillStyle = skyGradient;
    ctx.fill(shadow);
}
function drawStars(amount) {
    for (let i = 0; i < amount; i++) {
        ctx.fillStyle = "hsl(60, " + Math.floor(Math.random() * 50) + 50 + "%, " + Math.floor(Math.random() * 20) + 80 + "%)";
        let star = new Path2D();
        star.arc(Math.floor(Math.random() * canvasX), Math.floor(Math.random() * (canvasY / 2)), Math.floor(Math.random() * 3), 0, Math.PI * 2, false);
        ctx.fill(star);
    }
}
function drawClouds(amount) {
    createCloudArray(amount);
    for (let i = 0; i < cloudArray.length; i++) {
        let cloud = new Path2D();
        ctx.fillStyle = "rgba(255, 255, 255," + cloudArray[i].opacity * 0.5 + ")";
        cloud.ellipse(cloudArray[i].posX, cloudArray[i].posY, cloudArray[i].radX, cloudArray[i].radY, 0, 0, Math.PI * 2, false);
        ctx.fill(cloud);
    }
}
function drawHouses(houses, count) {
    for (let i = 0; i < canvasY / 2; i = i + 10) {
        let distribution = ((Math.abs(i - canvasY / 2)) * 0.01) * count;
        for (let j = 0; j < distribution; j++) {
            let saturation = 100 * i / (canvasY / 2);
            let lightness = (Math.abs(i - canvasY / 2) / i) * 10;
            let strokeLightness = (Math.abs(i - canvasY / 2) / i) * 10 + 30;
            ctx.fillStyle = "hsl(" + houses.hue + ", " + saturation + "%, " + lightness + "%)";
            ctx.strokeStyle = "hsl(" + houses.strokeColor + ", 0%, " + strokeLightness + "%)";
            let house = new Path2D;
            //scales the houses based of the y Position + an offset
            let distanceFac = (i / (canvasY / 2) + 0.1); //(i / (canvasY / 2))
            let houseH = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            let houseW = (Math.floor(Math.random() * 100 + 100)) * distanceFac;
            let houseX = Math.floor(Math.random() * canvasX);
            let houseY = i + canvasY / 2;
            house.rect(houseX, houseY, houseW, -houseH);
            ctx.lineWidth = 2;
            ctx.fill(house);
            ctx.stroke(house);
            // Adjust window size based on house dimensions
            let windowsPerRow = 10;
            let windowAspect = 1 / 2;
            let windowW = houseW / (windowsPerRow * 1.5);
            let windowH = windowW * windowAspect;
            let windowsPerColumn = houseH / (windowH * 1.5);
            // Calculate window spacing
            let windowSpacingX = windowW * 0.5;
            let windowSpacingY = windowH * 0.5;
            // Calculate offset
            let offsetX = windowSpacingX / 2;
            let offsetY = windowSpacingY / 2;
            for (let w = 0; w < windowsPerRow; w++) {
                for (let h = 0; h < windowsPerColumn; h++) {
                    ctx.strokeStyle = "hsl(" + houses.strokeColor + ", 0%, " + strokeLightness + "%)";
                    ctx.fillStyle = "hsl(60, " + Number(Math.random() < 0.5) * 100 + "%, " + Number(Math.random() < 0.3) * 90 + "%)";
                    let windowX = houseX + offsetX + (w * (windowW + windowSpacingX));
                    let windowY = houseY - houseH + offsetY + (h * (windowH + windowSpacingY));
                    let window = new Path2D();
                    window.rect(windowX, windowY, windowW, windowH);
                    ctx.lineWidth = 1;
                    ctx.fill(window);
                    ctx.stroke(window);
                }
            }
        }
    }
}
function createCloudArray(amount) {
    for (let i = 0; i < amount; i++) {
        let cloud = {
            posX: Math.floor(Math.random() * canvasX),
            posY: Math.floor(Math.random() * (canvasY / 2.5)),
            radX: Math.floor(Math.random() * 200 + 100),
            radY: Math.floor(Math.random() * 40 + 10),
            opacity: Math.floor(Math.random() + 0.5),
        };
        cloudArray.push(cloud);
    }
    return cloudArray;
}
drawStars(500);
drawMoon("#e1ebcc", 150, 0.3);
drawClouds(25);
drawHouses(House1, 2);
//# sourceMappingURL=main.js.map