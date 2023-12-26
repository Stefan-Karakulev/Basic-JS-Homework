
console.log("Homework-5-2 zad");
let niza=[1,2,7,4,5];
let numbers=0;
function sum(){
    for(let i=0;i<niza.length;i++){ 
numbers+=niza[i];

}
console.log(numbers);

}
sum();

console.log("------------------");
console.log("3-zadaca------------------------------------");
function joinn(){
let array=["Hello","There","students","of","Sedc","!"];
let strings=array.join(" ");
console.log(strings);
}
joinn();

console.log("------------------");
console.log("4-zadaca--------------------------------------------");

for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i);
        console.log("\n");
    }
    else{
         console.log('');   //neznam dali treba da e vaka prazno.....///
    }
    
}



console.log("5-Zadaca------------------------------------");

let nizi = [8, 2, 4, 5, 11, 19];

function MinMax(nizi) {

  let min = nizi[0]; 
  let max = nizi[0]; 

  for (let i = 0; i < nizi.length; i++) {
    if (nizi[i] < min) {
      min = nizi[i]; 
    }
    else if (nizi[i] > max) {
      max = nizi[i]; 
    }
    
  }

  let sum = min + max;

  return {min,max,sum};
}

let result = MinMax(nizi);
console.log("The minimum is ", result.min);
console.log("The maximum is", result.max);
console.log("Sum of min and max is", result.sum);

