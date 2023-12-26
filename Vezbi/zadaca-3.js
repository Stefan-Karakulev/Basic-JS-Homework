console.log("Treta Zadaca====================================");
let userInput = 20;
function calculateDifference(num) {
    let difference = num - 13;
  
    if (num > 13) {
      return difference * 2;
    } else {
      return difference;
    }
  }
  
  
  let result = calculateDifference(userInput);
  
  console.log(`Input: ${userInput} ==> Output: ${result}`);
