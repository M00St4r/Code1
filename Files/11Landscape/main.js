var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var Tree1 = {
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
};
var Tree2 = {
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
};
function drawTree(trees) {
    for (var i = 0; i < trees.length; i++) {
        ctx.fillStyle = trees[i].stemColor;
        var tree = new Path2D;
        tree.rect(trees[i].transform.posX, trees[i].transform.posY, trees[i].transform.width, trees[i].transform.height);
        ctx.fill(tree);
        //for(let i = 0)
    }
}
drawTree([Tree1, Tree2]);
