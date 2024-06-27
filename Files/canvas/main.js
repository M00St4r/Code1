"use strict";
document.addEventListener("load", handleLoad);
function handleLoad(ev) {
    const canvas = document.getElementsByTagName("canvas")[0];
    const ctx = canvas.getContext("2d");
    ctx.rect(10, 10, 100, 100);
    //ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "rgb(255, 0, 255)";
    let path = new Path2D();
    path.rect(200, 200, 50, 50);
    ctx.fill(path);
}
