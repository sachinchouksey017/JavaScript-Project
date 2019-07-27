/**
 * purpose     :  Take X and y integer as userinput from command line argument and find the 
 *                Euclidean distance from (0,0) to (X,y). 
 *                
 * @description
 * @file       :  Distance.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility= require('../Functional program/Utility');
function distance() {
    var num1=+process.argv[2];//taking input through command line argument.
    var num2=+process.argv[3];
    utility.distance(num1,num2);//calling of distance method.
    
}
distance();