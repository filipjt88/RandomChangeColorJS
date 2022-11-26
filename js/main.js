let colors = ["#123","#456","#098","#987","red","purple","blue","silver","skyblue","yellow","#fff","#000"];


let color = document.querySelector("#color");
let btn   = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let counter = getRandomColor();
    let chanegeBackgroundColor = document.body.style.backgroundColor = colors[counter];
    document.body.style.transition = "1s";
    color.innerHTML = chanegeBackgroundColor;
});


function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
