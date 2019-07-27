var read=require('readline-sync');
var Utility=require('../Algorithm Programs/Utility');
function nibble() {
    var number=read.question("enter number to convert in binary ");
    var str=Utility.toBinary(number);
    console.log(str);
    str=Utility.swapNibble(str);
    console.log("After swapping the Nibbles ")
    console.log(str);
    console.log("Decimal formate of the "+str +" is " );
    console.log(Utility.binaryToDecimal(str));
}
nibble();