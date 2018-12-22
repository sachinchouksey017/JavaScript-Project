/**
 * purpose     :  This program takes a command­line argument N and prints a table of the
 *                powers of 2 upto that number. 
 *               
 * @description
 * @file       :  powerOf2.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
function powerOf2() {
    var number=+process.argv[2];//input from command line argument.
    utility.powerOf2(number);// calling of powerOf2 method.    
}
powerOf2();

