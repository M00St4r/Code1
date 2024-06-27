console.log("Start");
let chosenCharacter: string;

window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
    let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
    mail.addEventListener("click", placeLetter);
    document.addEventListener("keydown", choseCharacter);
}

function placeLetter(_event: MouseEvent): void {
    let mouseX: number = _event.offsetX;
    let mouseY: number = _event.offsetY;

    let letter: HTMLSpanElement = document.createElement("span");
    let mail: HTMLElement = <HTMLElement>_event.target;
    mail.appendChild(letter);

    letter.textContent = chosenCharacter;
    letter.style.aspectRatio = "1/1";
    letter.style.left = mouseX.toString() + "px";
    letter.style.top = mouseY.toString() + "px";

    letter.addEventListener("click", deleteLetter);
}

function choseCharacter(_event: KeyboardEvent): void {
    chosenCharacter = _event.key;
}

function deleteLetter(_event: MouseEvent): void {
    let target: Node = <Node>_event.target;
    let targetParent: Node = <Node>target.parentNode;
    targetParent.removeChild(target);
}