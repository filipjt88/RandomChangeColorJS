let colors = ["#123","#456","#098","#987","red","purple","blue","silver","skyblue","yellow","#fff","#000"]; // Niz  sa bojama
// Array with colors


let color = document.querySelector("#color"); // Color varijabla za ispis na stranci
// Color variable for printing on the page
let btn   = document.querySelector("#btn"); // Btn varijabla za klik na dugme 
// Btn variable for button click

btn.addEventListener("click", () => { // Klikom na btn dugme  addEvenetListnera ce se svaki put pokrenuti
    // Clicking the btn button of addEvenetListner will start it every time
    let counter = getRandomColor(); // Varijabla counter sluzi da preuzme iz funkcije getRandomColor neku random boju koja ce se dodeljivati svaki put 
    // The counter variable is used to retrieve a random color from the getRandomColor function that will be assigned each time
    let chanegeBackgroundColor = document.body.style.backgroundColor = colors[counter];
    document.body.style.transition = "1s";
    color.innerHTML = chanegeBackgroundColor;
});


function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
