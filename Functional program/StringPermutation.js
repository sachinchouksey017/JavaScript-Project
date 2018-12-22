/**
 * purpose     :  Take userinput as String and print all the permutation of String . 
 *                
 * @description
 * @file       :  StringPermutation.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();
function stringRep() {
    

rl.question('enter the string', (ans) => {
var ss;
ss=utility.stringPermutation("",ans,0,ans.length-1);
console.log(ss);
rl.close();
});
}
stringRep();