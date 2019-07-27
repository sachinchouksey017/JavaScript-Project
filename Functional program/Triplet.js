/**
 * purpose     :  Take N integers as userinput and counts the number of triples that sum
 *                to exactly 0. 
 *                
 * @description
 * @file       :  Triplet.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
function triplet() {
    var arr=[];
    arr=utility.inputreadLineArray();
    utility.sumZero(arr);//calling of sumZero method.
}
triplet();