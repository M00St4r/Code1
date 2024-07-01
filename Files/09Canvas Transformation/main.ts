const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

document.body.appendChild(canvas);
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.strokeStyle = "rgb(255, 0, 0)";
ctx.lineWidth = 1;
let Xaxis: Path2D = new Path2D();
Xaxis.rect(0, 0, 200, 0);
ctx.stroke(Xaxis);

let xNotch: Path2D = new Path2D();
for(let i:number = 0; i <= 200; i = i + 10){
    xNotch.rect(i, 0, 0, 5);
    ctx.stroke(xNotch);
}
ctx.strokeStyle = "rgb(0, 255, 0)";
let Yaxis: Path2D = new Path2D();
Yaxis.rect(0, 0, 0, 200);
ctx.stroke(Yaxis);

let yNotch: Path2D = new Path2D();
for(let i:number = 10; i <= 200; i = i + 10){
    yNotch.rect(0, i, 5, 0);
    ctx.stroke(yNotch);
}

let posX = 100;
let posY = 100;

let w = 100;
let h = 100;

// gradient
let gradient = ctx.createLinearGradient(0, posY, 0, posY + h);
let radialGradient = ctx.createRadialGradient(posX, posY, 0, posX + w, posY + h, 360);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "black");

let UwU: Path2D = new Path2D();
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
ctx.transform(1,0.5,0,1,0,0);
ctx.fillStyle = radialGradient;
ctx.fill(UwU);

console.log(ctx.getTransform());