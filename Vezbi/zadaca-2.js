console.log("Vtora Zadaca====================================");

let variable1 = 42; 
let variable2 = "Hello"; 
let variable3 = true; 
let variable4 = [1, 2, 3]; 
let variable5 = { name: "John", age: 30 }; 


function printVariableTypes() {
  console.log(`Variable 1 ${variable1} - Type: ${typeof variable1}`);
  console.log(`Variable 2: ${variable2} - Type: ${typeof variable2}`);
  console.log(`Variable 3: ${variable3} - Type: ${typeof variable3}`);
  console.log(`Variable 4: ${variable4} - Type: ${typeof variable4}`);
  console.log(`Variable 5: ${JSON.stringify(variable5)} - Type: ${typeof variable5}`);
}


console.log("Variable types:");
printVariableTypes();
