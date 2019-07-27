/**
 * purpose     : Program which creates Banking Cash Counter where people come in to deposit Cash and 
 *               withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw
 *               money and dequeue the people. Maintain the Cash Balance.
 * @description
 * @file       :  BankingCounter.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  29-12-18
 * 
 */
var utility=require('../DataStructurePrograms/Utility');//requiring properties of utility
var read=require('readline-sync');
function bank() {
    var balance=(utility.bankingCash());//calling of banking cash method.
  if(balance==-1){
        console.log("Error !!!!  Please enter in number formate");
    }else if(balance){
        console.log("The Bank amount is balanced ");
     }else {
       console.log("The Bank amount is not balanced ");
   }
}
bank();