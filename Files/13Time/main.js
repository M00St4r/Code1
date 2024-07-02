function runlater() {
    console.log("run me now");
}
//setTimeout(runlater, 1000);
var intervalId = setInterval(runEverySecond, 1000);
var runs = 0;
function runEverySecond() {
    runs++;
    console.log("I'm running every second, this is run no", runs);
    if (runs >= 5) {
        clearInterval(intervalId);
    }
}
function frame() {
    console.log("every Frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
