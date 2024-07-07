interface HSL {
    h: number,
    s: number,
    l: number
}

interface direction {
    x: number,
    y: number
}

interface Tree {
    posX: number,
    posY: number,
    radius: number,
    color: HSL,
}

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let canvasX: number = canvas.width;
let canvasY: number = canvas.height;
let worldWith: number = 7680;
let worldHeigth: number = 999;
let worldPosX: number = 0;
let worldPosY: number = 0;
let Trees: Tree[] = [];
let score: number = 0;
let movementSpeed = 5;

function drawBackground() {
    //draw background
    ctx.fillStyle = "rgb(255, 255, 255)";
    let bg: Path2D = new Path2D();
    bg.rect(worldPosX, worldPosY, worldWith, worldHeigth);
    ctx.fill(bg);
}

function generateTrees(amount: number) {
    for (let i = 0; i < amount; i++) {
        let tree: Tree = {
            posX: Math.floor(Math.random() * worldWith),
            posY: Math.floor(Math.random() * worldHeigth),
            radius: Math.floor(Math.random() * 100 + 100),
            color: {
                h: Math.floor(Math.random() * 255),
                s: Math.floor(Math.random() * 20 + 80),
                l: Math.floor(Math.random() * 20 + 50)
            }
        }
        Trees.push(tree);
    }
}

function drawTrees() {
    for (let i = 0; i < Trees.length; i++) {
        let Tree = Trees[i];
        if (Tree.posX + worldPosX > -Tree.radius &&
            Tree.posX + worldPosX < canvasX + Tree.radius &&
            Tree.posY + worldPosY > -Tree.radius &&
            Tree.posY + worldPosY < canvasY + Tree.radius) {
            ctx.fillStyle = `hsl(100, ${Tree.color.s}%, ${Tree.color.l}%)`;
            ctx.beginPath();
            ctx.ellipse(worldPosX + Tree.posX, worldPosY + Tree.posY, Tree.radius, Tree.radius, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

window.addEventListener("keypress", _event => {
    if (_event.key == "d") {
        worldPosX -= movementSpeed;
    }

    if (_event.key == "a") {
        worldPosX += movementSpeed;
    }

    if (_event.key == "w") {
    }

    if (_event.key == "s") {
    }
});

generateTrees(100);

function animate() {
    drawBackground();
    drawTrees();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);