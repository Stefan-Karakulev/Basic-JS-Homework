console.log("Zadaca 4----=================================================");
function nearest(a,b){
let a1=100-a;
let b1=100-b;

if(a1>b1){
  return b + " is nearest"
}else{
  return a + " is nearest"
}
}
console.log(nearest(10,9));