console.log("hello");
//let spantext = document.getElementById("spanText");
var spantext = document.getElementsByTagName("span")[0];
spantext.textContent = "World";
function clickEvent() {
    alert("dont click me");
}
var newspan = document.createElement("span");
newspan.textContent = "hello";
document.body.appendChild(newspan);
newspan.style.backgroundColor = "red";
/*for (let i: HTMLCollectionOf<HTMLSpanElement> of document.getElementsByTagName("span")){
    i.textContent = "..."
}*/ 
