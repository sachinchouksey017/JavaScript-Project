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
    console.log("enter the value for find roots of quadratic equation");
    var a=read.question("enter the value of 'a'");
    var b=read.question("enter the value of 'b'");
    var c=read.question("enter the value of 'c'");
     utility.roots(a,b,c);//calling of roots method.

}

root();