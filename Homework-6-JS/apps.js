console.log("Prva Zadaca==================================================");
let firstParagraph = document.querySelector('.paragraph');
firstParagraph.textContent = 'New text for first paragraph';

let secondParagraph = document.querySelector('.paragraph.second');
secondParagraph.textContent = 'New text for second paragraph';


let header = document.querySelector('h1');
header.textContent = 'New text for header';

let textElement = document.querySelector('.anotherDiv text');
textElement.textContent = 'New text for text element';

let lastDivs = document.querySelectorAll('div:last-of-type h1, div:last-of-type h3');// Ako moze da mi kazete dali ima nekoj drug nacin ovoj del da se napravi....

lastDivs[0].textContent = 'New text for  h1';
lastDivs[1].textContent = 'New text for  h3';


