var utility=require('../DataStructurePrograms/Utility');
var read=require('readline-sync');
function bank() {
    var balance=(utility.bankingCash());
   if(balance){
       console.log("The Bank amount is balanced ");
   }else{
       console.log("The Bank amount is not balanced ");
   }
}
bank();