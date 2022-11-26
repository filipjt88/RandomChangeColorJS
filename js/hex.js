let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; // Ovo je hex Array iz kog ce se izvlaciti svaki element i dodeljivati u hexColor varijabli nasumicno -- This is a hex Array from which each element will be extracted and assigned to the hexColor variable randomly


let color = document.querySelector(".color"); // selektovana je varijabla color radi kasnijeg ispisivanja nasumicne boje na stranici -- color variable is selected for later printing of a random color on the page

let btn   = document.querySelector(".btn"); // Selektovana je varijabla btn koja sluzi za promenu boje svaki put kada korisnik klikne na to dugme
// The btn variable is selected, which is used to change the color every time the user clicks on that button


btn.addEventListener("click", () => { // Klikom na dugme addEventListener ce se opaliti svaki put i preko for petlje ce se dodeliti nasumicni random broj i slovo iz hex niza koji ide do broja 6
// By clicking on the addEventListener button, it will be fired every time and a random random number and letter from the hex string up to the number 6 will be assigned through the for loop.

    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomChangeColor()];
    }
    document.body.style.background = hexColor; // Promena boje na stranici
    // Changing the color on the page
    document.body.style.transition = "1s"; // Boja ce se menjati blagim prelazom nakon jedne sekunde
    // The color will change with a slight transition after one second
    color.innerHTML = hexColor; // Boja ce se ispisivati na stranici
    // The color will be written on the page`
});


function randomChangeColor() { // Ova funkcija sluzi za random dodelu boja iz niza- areja hex
    // This function serves for random assignment of colors from the hex array
    return Math.floor(Math.random() * hex.length);
}

