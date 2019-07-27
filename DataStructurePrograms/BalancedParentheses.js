/**
 * purpose     :Take an Arithmetic Expression where parentheses are used to order the performance 
 *              of operations. Ensure parentheses must appear in a balanced fashion.
 * @description
 * @file       :  BalancedParentheses.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  28-12-18
 * 
 */
function balanced() {
    var utility=require('../DataStructurePrograms/Utility');
var boo=utility.balancedExpression();
if(boo){
    console.log("string is balanced ");
}else{
    console.log("String is not balanced");
}
}
balanced();
