var utility=require('../Algorithm Programs/Utility');
var read=require('readline-sync');
function binary(){
    str="";
    var number=read.question("Enter the number to convert in binary form ");
    if(number>=0){
    str=utility.toBinary(number);
    console.log("The binary form of "+number+" is ",str);
    }
    else
    console.log("Please enter correct number ");
}
binary();