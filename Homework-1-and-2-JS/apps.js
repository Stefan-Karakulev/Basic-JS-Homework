console.log("First HOMEWORK");
let CenaTel = 119.95; 
let BrojTel = 30; 
let tax = 0.05; 

let CenaPredTax = CenaTel * BrojTel;

let SoTax = CenaPredTax * tax;

let total = CenaPredTax + SoTax;

console.log(`Cena na ${BrojTel} telefoni pred tax: $${CenaPredTax.toFixed(2)}`);
console.log(` tax 5%: $${SoTax.toFixed(2)}`);
console.log(`Cena na  ${BrojTel} telefoni so tax: $${total.toFixed(2)}`);
// -------------//
console.log("--------");
console.log("HomeWork 2");
let zodiac;
let year=prompt("enter year");
let months=12;
let number=4;
zodiac=(year-number)% months;

console.log("Your zodiac number is ");
console.log(zodiac);

if(zodiac===0){
 console.log("Rat");
 }else if(zodiac===1){
    console.log("Ox");
 }
 else if(zodiac===2){
    console.log("Tiger");
 }
 else if(zodiac===3){
    console.log("Rabbit");
 }
 else if(zodiac===4){
    console.log("Dragon");
 }
 else if(zodiac===5){
    console.log("Snake");
 }
 else if(zodiac===6){
    console.log("Horse");
 }
 else if(zodiac===7){
    console.log("Goat");
 }
 else if(zodiac===8){
    console.log("Monkey");
 }
 else if(zodiac===9){
    console.log("Rooster");
 }
 else if(zodiac===10){
    console.log("Dog");
 }
 else if(zodiac===11){
    console.log("Pig");
 }
 else{
    console.log("invalid number");
 }
 console.log("--------");
 console.log("Homework 2 with Swtich");
console.log(`Your zodiac number is ${zodiac}`);
 switch (zodiac){
    case 0:
    console.log("Rat");
    break;
    case 1:
    console.log("Ox");
    break;
    case 2:
    console.log("Tiger");
    break;
    case 3:
    console.log("Rabbit");
    break;
    case 4:
    console.log("Dragon");
    break;
    case 5:
    console.log("Snake");
    break;
    case 6:
    console.log("Horse");
    break;
    case 7:
    console.log("Goat");
    break;
    case 8:
    console.log("Monkey");
    break;
    case 9:
    console.log("Rooster");
    break;
    case 10:
    console.log("Dog");
    break;
    case 11:
    console.log("Pig");
    break;
    default:
        console.log("INvalid value");
        break;
}





