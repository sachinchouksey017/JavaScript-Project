var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function prime() {
    var val;
    console.log("Prime number between 0 to 1000 is ");
    for (let index = 0; index < 1000; index++) {
        val=utility.isPrime(index);
        if(val){
            console.log(index);
        }
        
    }
   
}
prime();