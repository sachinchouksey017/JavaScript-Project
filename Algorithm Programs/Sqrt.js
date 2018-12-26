var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function  sqrtOfNumber() {
    var number=read.question("Enter number to find  SqureRoot ");
    if(number>0){
    var sqrt=utility.sqrt(number);
    console.log(sqrt);
    }else{
        console.log("please provide correct Number");
    }
}
sqrtOfNumber();