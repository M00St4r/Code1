interface Transform {
    posY: number,
    posX: number,
    width: number,
    height: number,
    scale: number,
}

interface Tree {
    transform: Transform,
    type: string,
    stemColor: string,
    leaveColor: string,
}

interface Cloud {
    transform: Transform,
    type: string,
}

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let Tree1: Tree = {
    transform: {
        posX: 0,
        posY: 500,
        width: 10,
        height: 50,
        scale: 1,
    },
    type: "pine",
    stemColor: "brown",
    leaveColor: "green",
}

let Tree2: Tree = {
    transform: {
        posX: 1000,
        posY: 500,
        width: 10,
        height: 50,
        scale: 1,
    },
    type: "pine",
    stemColor: "brown",
    leaveColor: "green",
}

function drawTree(trees: Tree[]){

    for(let i = 0; i < trees.length;  i++){
        ctx.fillStyle = trees[i].stemColor;
        let tree: Path2D = new Path2D;
        tree.rect(trees[i].transform.posX, trees[i].transform.posY, trees[i].transform.width, trees[i].transform.height);

        //for(let i = 0)
    }
}

drawTree([Tree1, Tree2]);