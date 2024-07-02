function runlater() {
    console.log("run me now");
    setTimeout(runlater, 1000);
}
setTimeout(runlater, 1000);
