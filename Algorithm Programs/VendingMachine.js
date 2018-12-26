var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function vendingMachine() {
    var rupees=read.question("Enter total amount");
    if(rupees>=0)
    utility.vendingMachineRecursion(rupees,0,0);
    else
    console.log("Please enter correct Money value ");
}
vendingMachine();