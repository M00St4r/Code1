interface Transform {
    posY: number,
    posX: number,
    width: number,
    height: number,
    scale: number,
}

interface House {
    color: string,
    windowColor: string,
    strokeColor: string,
}

interface Cloud {
    transform: Transform,
    type: string,
}

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

//draw background
ctx.fillStyle = "rgb(18, 17, 29)";
let bg: Path2D = new Path2D();
bg.rect(0, 0, 1920, 1080);
ctx.fill(bg);

let House1: House = {
    color: "black",
    windowColor: "white",
    strokeColor: "rgb(92, 92, 92)",
}

function drawStars(ammount: number) {

    for (let i: number = 0; i < ammount; i++) {
        let gradient = ctx.createLinearGradient(0, 0, 1920, 0);
        gradient.addColorStop(0, "rgb(229, 231, 182)");
        ctx.fillStyle = "white";
        ctx.filter = "blur 5px";
        let star: Path2D = new Path2D();
        star.arc(Math.floor(Math.random() * 1920), Math.floor(Math.random() * 540), Math.floor(Math.random() * 3), 0, 360, false);
        ctx.fill(star);
    }
}

function drawHouses(houses: House[], count: number) {

    for (let i = 0; i < 540; i = i + 10) {
        ctx.fillStyle = houses[0].color;
        ctx.strokeStyle = houses[0].strokeColor;
        let distribution = (Math.abs(i - 540)) * 0.01;

        for (let j: number = 0; j < distribution; j++) {
            let house: Path2D = new Path2D;
            let distanceFac: number = i / 540;
            let randH: number = (Math.floor(Math.random() * 500 + 300)) * distanceFac;
            let randW: number = (Math.floor(Math.random() * 100 + 100)) * distanceFac;

            let randX: number = Math.floor(Math.random() * 1920);
            let PosY: number = i + 540;

            house.rect(randX, PosY, randW, -randH);
            ctx.fill(house);
            ctx.stroke(house);
        }
    }
}
drawStars(300);
drawHouses([House1], 100);