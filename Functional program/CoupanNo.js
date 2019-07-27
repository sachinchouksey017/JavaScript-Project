/**
 * purpose     :  Take user input N,And find distinct Coupan Number using random method.
 *                and print number of time random method generate random number. 
 *             
 * @description
 * @file       :  CoupanNo.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var read=require('readline-sync');
function coupan() {
    console.log("How many coupan number you wants");
    var l = read.question();
    if(l>=0)
    utility.coupan(l);//calling of Coupan method.
    else
    console.log("Please enter correct Number");
}
coupan();