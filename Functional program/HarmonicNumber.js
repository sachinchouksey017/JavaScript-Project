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
    rl.question('Please enter value for harmonic value ',(Number) => {//user input for harmonic
      if(Number>=0)
        utility.harmonicNumber(Number); 
        else                               //value.
          console.log("Please enter correct input");
        rl.close();
    });
}
harmonic();