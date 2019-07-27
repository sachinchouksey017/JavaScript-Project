/**
 * purpose     :  This program is to find roots of Quadratic equation.user input value of a,b,c. 
 *               
 * @description
 * @file       :  Quadratic.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var read=require('readline-sync');
var utility=require('../Functional program/Utility');

function root() {
    console.log("Enter the value for find roots of quadratic equation");
    var a=read.question("Enter the value of 'a'");
    var b=read.question("Enter the value of 'b'");
    var c=read.question("Enter the value of 'c'");
    if(a>=0&&b>=0&&c>=0)
     utility.roots(a,b,c);//calling of roots method.
     else
     console.log("Please enter correct values");

}

root();