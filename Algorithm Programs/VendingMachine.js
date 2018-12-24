var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function vendingMachine() {
    var rupees=read.question("Enter total amount");
    utility.vendingMachineRecursion(rupees,0,0);
}
vendingMachine();