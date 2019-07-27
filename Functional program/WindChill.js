/**
 * purpose     :  This program takes a command­line argument and print the value of WindChill.
 *               
 * @description
 * @file       :  WindChill.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
function windChill() {
    var temp=+process.argv[2];//command line Argument 
    var vol=+process.argv[3];//command line Argument 
    if(temp>=0&&vol>=0)
    utility.windChill(temp,vol);//calling of windChill method.
    else
    console.log("Please enter correct Values");
}
windChill();