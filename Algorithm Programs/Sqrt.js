var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function  sqrtOfNumber() {
    var number=read.question("Enter number to find  SqureRoot");
    var sqrt=utility.sqrt(number);
    console.log(sqrt);
}
sqrtOfNumber();