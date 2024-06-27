console.log("Start");
var chosenCharacter;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    var mail = document.querySelector("div#mail");
    mail.addEventListener("click", placeLetter);
    document.addEventListener("keydown", choseCharacter);
}
function placeLetter(_event) {
    var mouseX = _event.offsetX;
    var mouseY = _event.offsetY;
    var letter = document.createElement("span");
    var mail = _event.target;
    mail.appendChild(letter);
    letter.textContent = chosenCharacter;
    letter.style.aspectRatio = "1/1";
    letter.style.left = mouseX.toString() + "px";
    letter.style.top = mouseY.toString() + "px";
    letter.addEventListener("click", deleteLetter);
}
function choseCharacter(_event) {
    chosenCharacter = _event.key;
}
function deleteLetter(_event) {
    var target = _event.target;
    var targetParent = target.parentNode;
    targetParent.removeChild(target);
}
