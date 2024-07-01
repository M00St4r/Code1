interface Transform {
    posY: number,
    posX: number,
    width: number,
    height: number,
    size: number,
}

interface Tree {
    transform: Transform,
    type: string,
}

interface Cloud {
    transform: Transform,
    type: string,
}