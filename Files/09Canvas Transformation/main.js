var canvas = document.getElementsByTagName("canvas")[0];
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(255, 0, 0)";
ctx.lineWidth = 1;
var Xaxis = new Path2D();
Xaxis.rect(0, 0, 200, 0);
ctx.stroke(Xaxis);
var xNotch = new Path2D();
for (var i = 0; i <= 200; i = i + 10) {
    xNotch.rect(i, 0, 0, 5);
    ctx.stroke(xNotch);
}
ctx.strokeStyle = "rgb(0, 255, 0)";
var Yaxis = new Path2D();
Yaxis.rect(0, 0, 0, 200);
ctx.stroke(Yaxis);
var yNotch = new Path2D();
for (var i = 10; i <= 200; i = i + 10) {
    yNotch.rect(0, i, 5, 0);
    ctx.stroke(yNotch);
}
var posX = 100;
var posY = 100;
var w = 100;
var h = 100;
// gradient
var gradient = ctx.createLinearGradient(0, posY, 0, posY + h);
var radialGradient = ctx.createRadialGradient(posX, posY, 0, posX + w, posY + h, 360);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "black");
var UwU = new Path2D();
UwU.roundRect(posX, posY, w, h, 5);
ctx.fillStyle = gradient;
ctx.fill(UwU);
console.log(ctx.getTransform());
gradient.addColorStop(0, "cyan");
gradient.addColorStop(0.5, "magenta");
gradient.addColorStop(0.999, "cyan");
ctx.rotate(20 * Math.PI / 180);
ctx.fill(UwU);
console.log(ctx.getTransform());
radialGradient.addColorStop(0, "green");
radialGradient.addColorStop(0.1, "white");
radialGradient.addColorStop(0.2, "black");
ctx.transform(1, 0.5, 0, 1, 0, 0);
ctx.fillStyle = radialGradient;
ctx.fill(UwU);
console.log(ctx.getTransform());
