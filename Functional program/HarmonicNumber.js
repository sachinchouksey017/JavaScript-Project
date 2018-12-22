/**
 * purpose     :  To generate harmonic value according to userinput and print the harmonic value.
 *                
 * @description
 * @file       :  HarmonicNumber.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();
function harmonic() {
    rl.question('please enter value for harmonic value ',(Number) => {//user input for harmonic
       utility.harmonicNumber(Number);                                //value.
       rl.close();
    });
}
harmonic();