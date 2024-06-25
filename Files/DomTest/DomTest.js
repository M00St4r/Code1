"use strict";
//DOM Manipulation
let newSpan = document.createElement("span");
let blurFactor = 0.25;
let fontList = [
    "Roboto", "Oswald", "Kanit"
];
//Array
let bodyContent = [
    "REDRUM", "CocaCola", "Code1", "ZeroSugar", "Goblin", "Cthulhu"
];
let instanceRange = 50;
for (let i = 0; i < instanceRange; i++) {
    let newSpan = document.createElement("span");
    //Random Text
    const randomText = bodyContent[Math.floor(Math.random() * bodyContent.length)];
    newSpan.textContent = randomText;
    //Random Color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    newSpan.style.color = "#" + randomColor;
    //Random Position
    newSpan.style.position = "absolute";
    newSpan.style.left = Math.random() * window.innerWidth + "px";
    newSpan.style.top = Math.random() * window.innerHeight + "px";
    //Random Size
    newSpan.style.fontSize = Math.random() * window.innerWidth * 0.3 + "px";
    //Random Font
    newSpan.style.font = fontList[Math.floor(Math.random() * 3)];
    newSpan.style.textAlign = "center";
    newSpan.style.filter = "blur(" + (instanceRange - i) * blurFactor + "px)";
    //Append New Span
    document.body.appendChild(newSpan);
}
document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    let target = _event.target;
    if (target == document.body)
        return;
    target.textContent = bodyContent[Math.floor(Math.random() * bodyContent.length)];
    target.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
