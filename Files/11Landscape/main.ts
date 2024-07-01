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
    color: string,
    hasLeaves: boolean,
}

interface Cloud {
    transform: Transform,
    type: string,
}

let Tree1: Tree = {
    transform: {
        posX: 0,
        posY: 0,
        width: 10,
        height: 50,
        scale: 1,
    },
    type: "pine",
    color: "green",
    hasLeaves: true,
}