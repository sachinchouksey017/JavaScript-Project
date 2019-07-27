/**
 * purpose     :  To find the factors of userInput and print them.
 *                
 * @description
 * @file       :  Factors.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();
function factors() {
    rl.question('Enter the number to find factors? ',(Number) => {//userinput for factors.
      utility.factor(Number);//calling of factor method.
      rl.close();
    });

}
factors();