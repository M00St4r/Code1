const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

document.body.appendChild(canvas);
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.strokeStyle = "rgb(255, 0, 0)";
ctx.lineWidth = 1;
let Xaxis: Path2D = new Path2D();
Xaxis.rect(0, 0, 200, 0);
ctx.stroke(Xaxis);
ctx.strokeStyle = "rgb(0, 255, 0)";
let Yaxis: Path2D = new Path2D();
Yaxis.rect(0, 0, 0, 200);
ctx.stroke(Yaxis);

let posX = 100;
let posY = 100;

let w = 100;
let h = 100;

// gradient
let gradient = ctx.createLinearGradient(0, posY, 0, posY + h);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "black");

let UwU: Path2D = new Path2D();
UwU.roundRect(posX, posY, w, h, 5);

ctx.fillStyle = gradient;
ctx.fill(UwU);

console.log(ctx.getTransform());

gradient.addColorStop(0, "cyan");
ctx.rotate(20 * Math.PI / 180);
ctx.fill(UwU);

console.log(ctx.getTransform());

gradient.addColorStop(0, "magenta");
ctx.transform(1,0.5,0,1,0,0);
ctx.fill(UwU);

console.log(ctx.getTransform());