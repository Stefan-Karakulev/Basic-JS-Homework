console.log("Homework=========4-1");
function Types(parametar) {
    let type = typeof parametar;
    console.log(`Type of '${parametar}' is ${type}`);
    return type;
}
Types(5);
Types({});
Types(false);
Types('Str');
Types(undefined);
console.log("---------------------");
console.log("Homework-2");

function Years() {
    let HumanYears = prompt("Enter human age");
    let Dogyears = HumanYears * 7;
    console.log(`Your dog is ${Dogyears} Years Old`);
}
Years();
console.log("---------------------");

console.log("Homework-3");

function Atm() {
    let money =800;
    let withdraw = prompt("Enter the number of money you want to withdraw");
    if (money<withdraw) {
        console.log("Not enough Money");

    }
     else 
    {
        remaining = money - withdraw;
        console.log(`Withdraw successfull you have ${remaining} left`);
    }
}
Atm();
