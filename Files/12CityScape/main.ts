interface Transform {
    posY: number,
    posX: number,
    width: number,
    height: number,
    scale: number,
}

interface House {
    hue: number,
    windowColor: string,
    strokeColor: string,
}

interface Cloud {
    transform: Transform,
    type: string,
}

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let canvasX = canvas.width;
let canvasY = canvas.height;

//draw background
ctx.fillStyle = "rgb(13, 13, 13)";
let bg: Path2D = new Path2D();
bg.rect(0, 0, canvasX, canvasY);
ctx.fill(bg);

//draw sky
let skyGradient = ctx.createRadialGradient(canvasX / 2, 0, 0, canvasX / 2, 0, canvasY / 2);

// ctx.createLinearGradient(0, 0, 0, canvasY / 2);
skyGradient.addColorStop(0, '#4a6e8a');
skyGradient.addColorStop(1, '#1c2331');

ctx.fillStyle = skyGradient;
let sky: Path2D = new Path2D();
sky.rect(0, 0, canvasX, canvasY / 2);
ctx.fill(sky);

let House1: House = {
    hue: 300,
    windowColor: "white",
    strokeColor: "rgb(92, 92, 92)",
}

function drawMoon(color: string) {
    ctx.fillStyle = color;
    let moon: Path2D = new Path2D();
    let shadow: Path2D = new Path2D();
    moon.arc(canvasX / 2, canvasY / 4, 50, 0, Math.PI * 2, false);
    ctx.fill(moon);

    shadow.arc(canvasX / 2 - 20, canvasY / 4, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = skyGradient;
    ctx.fill(shadow);
}

function drawStars(amount: number) {

    for (let i: number = 0; i < amount; i++) {
        ctx.fillStyle = "hsl(60, " + Math.floor(Math.random() * 50) + 50 + "%, " + Math.floor(Math.random() * 20) + 80 + "%)";
        let star: Path2D = new Path2D();
        star.arc(Math.floor(Math.random() * canvasX), Math.floor(Math.random() * (canvasY / 2)), Math.floor(Math.random() * 3), 0, Math.PI * 2, false);
        ctx.fill(star);
    }
}

function drawClouds(amount: number) {
    for (let i: number = 0; i < amount; i++) {
        let cloud: Path2D = new Path2D();
        let opacity = Math.floor(Math.random() + 0.5);
        ctx.fillStyle = "rgba(255, 255, 255," + opacity * 0.5 + ")";

        let cloudX: number = Math.floor(Math.random() * canvasX);
        let cloudY: number = Math.floor(Math.random() * (canvasY / 2.5));

        let cloudRX: number = Math.floor(Math.random() * 200 + 100);
        let cloudRY: number = Math.floor(Math.random() * 40 + 10);

        cloud.ellipse(cloudX, cloudY, cloudRX, cloudRY, 0, 0, Math.PI * 2, false);
        ctx.fill(cloud);
    }
}

function drawHouses(houses: House, count: number) {

    for (let i = 0; i < canvasY / 2; i = i + 10) {
        //ctx.fillStyle = houses[0].color;
        ctx.strokeStyle = houses.strokeColor;
        let distribution = (Math.abs(i - canvasY / 2)) * 0.01;

        for (let j: number = 0; j < distribution; j++) {
            let saturation = 100 * i / (canvasY / 2);
            let lightness = (Math.abs(i - canvasY / 2) / i);

            ctx.fillStyle = "hsl(" + houses.hue + ", " + saturation + "%, " + lightness + "%)";

            let house: Path2D = new Path2D;
            let distanceFac: number = (i / (canvasY / 2)) * 0.9;
            let randH: number = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            let randW: number = (Math.floor(Math.random() * 100 + 100)) * distanceFac;

            let randX: number = Math.floor(Math.random() * canvasX);
            let PosY: number = i + canvasY / 2;

            house.rect(randX, PosY, randW, -randH);
            ctx.fill(house);
            ctx.stroke(house);

            // Adjust window size based on house dimensions
            let windowsPerRow: number = 5;
            let windowsPerColumn: number = 10;
            let windowW: number = randW / (windowsPerRow * 1.5);
            let windowH: number = randH / (windowsPerColumn * 1.5);

            // Calculate window spacing
            let windowSpacingX: number = windowW * 0.5;
            let windowSpacingY: number = windowH * 0.5;

            // Calculate offset
            let offsetX: number = windowSpacingX / 2;
            let offsetY: number = windowSpacingY / 2;

            for (let w: number = 0; w < windowsPerRow; w++) {
                for (let h: number = 0; h < windowsPerColumn; h++) {
                    ctx.strokeStyle = houses.strokeColor;
                    ctx.fillStyle = "hsl(60, " + Math.floor(Math.random() * 50) + 50 + "%, " + Number(Math.random() < 0.5) * 100 + "%)";

                    let windowX: number = randX + offsetX + (w * (windowW + windowSpacingX));
                    let windowY: number = PosY - randH + offsetY + (h * (windowH + windowSpacingY));

                    let window: Path2D = new Path2D();
                    window.rect(windowX, windowY, windowW, windowH);
                    ctx.fill(window);
                    ctx.stroke(window);
                }
            }
        }
    }
}

drawStars(300);
drawMoon("#e1ebcc");
drawClouds(50);
drawHouses(House1, 100);