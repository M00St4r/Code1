const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

document.body.appendChild(canvas);
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.rect(10, 10, 100, 100);
//ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

// Draw Square
ctx.fillStyle = "rgb(255, 0, 255)";
let squawe: Path2D = new Path2D();
squawe.rect(10, 300, 50, 50);
ctx.fill(squawe);

// Draw Arc
let arc: Path2D = new Path2D();
arc.arc(300, 105, 100, 0, 180, true);
ctx.stroke(arc);

let posX = 500;
let posY = 0;

let w = 100;
let h = 100;

// gradient
let gradient = ctx.createLinearGradient(0, posY, 0, h);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "black");

let UwU: Path2D = new Path2D();
UwU.roundRect(posX, posY, w, h, 5);

ctx.fillStyle = gradient;
ctx.fill(UwU);
