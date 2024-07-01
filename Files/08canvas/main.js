var canvas = document.getElementsByTagName("canvas")[0];
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
//ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
// Draw Square
ctx.fillStyle = "rgb(255, 0, 255)";
var squawe = new Path2D();
squawe.rect(10, 300, 50, 50);
ctx.fill(squawe);
// Draw Arc
var arc = new Path2D();
arc.arc(300, 105, 100, 0, 180, true);
ctx.stroke(arc);
var posX = 500;
var posY = 0;
var w = 100;
var h = 100;
// gradient
var gradient = ctx.createLinearGradient(0, posY, 0, h);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "black");
var UwU = new Path2D();
UwU.roundRect(posX, posY, w, h, 5);
ctx.fillStyle = gradient;
ctx.fill(UwU);
