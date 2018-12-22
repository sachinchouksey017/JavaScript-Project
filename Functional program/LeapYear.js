/**
 * purpose     :  Taking input as a fourdigit number check whether the given number is a leap year
   *              or not.
 * @description
 * @file       :  LeapYear.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();//calling of input method.
function leapYear() {
    rl.question('enter the year to check leap or not',(year)=>{//user input.
        utility.leapYear(year);// calling of leapYear method.
        rl.close();
        });
}
leapYear();
