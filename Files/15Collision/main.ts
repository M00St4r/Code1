interface RGB {
    r: number,
    g: number,
    b: number
}

interface direction {
    x: number,
    y: number
}

interface Box {
    posX: number,
    posY: number,
    velocity: number,
    direction: direction,
    height: number,
    width: number,
    color: RGB,
}

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let canvasX = canvas.width;
let canvasY = canvas.height;
let Boxes: Box[] = [];
let BoxAmount: number = 100;

function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(255, 255, 255)";
    let bg: Path2D = new Path2D();
    bg.rect(0, 0, canvasX, canvasY);
    ctx.fill(bg);
}


function generateBoxes(ammount: number) {

    for (let i = 0; i < ammount; i++) {
        let box: Box = {
            posX: Math.floor(Math.random() * canvasX),
            posY: Math.floor(Math.random() * canvasY),
            velocity: Math.random() * 2,
            direction: {
                x: Math.random(),
                y: Math.random()
            },
            height: Math.floor(Math.random() * 50),
            width: Math.floor(Math.random() * 50),
            color: {
                r: Math.floor(Math.random() * 255),
                g: Math.floor(Math.random() * 255),
                b: Math.floor(Math.random() * 255)
            }
        }
        Boxes.push(box);
    }

}

function drawBoxes() {
    for (let i = 0; i < Boxes.length; i++) {
        let Box = Boxes[i];

        ctx.fillStyle = "rgb(" + Box.color.r + "," + Box.color.g + "," + Box.color.b + ")"
        let box: Path2D = new Path2D;
        box.rect(Box.posX, Box.posY, Box.width, Box.height);
        ctx.fill(box);

        // Move boxes position
        Box.posX = Box.posX + Box.velocity * Box.direction.x;
        Box.posY = Box.posY + Box.velocity * Box.direction.y;

        // Wrap around horizontally
        if (Box.posX > canvasX) {
            Box.posX = -Box.width;
        } else if (Box.posX + Box.width < 0) {
            Box.posX = canvasX;
        }

        // Wrap around vertically
        if (Box.posY > canvasY) {
            Box.posY = -Box.height;
        } else if (Box.posY + Box.height < 0) {
            Box.posY = canvasY;
        }
    }
}

generateBoxes(10);

function animate() {
    drawBackground();
    drawBoxes();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);