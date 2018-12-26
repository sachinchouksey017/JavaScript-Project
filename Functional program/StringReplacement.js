/**
 * purpose     :  By ensuring username with minimum 3 characters,replacing USERNAME with userinput
 *                and print the string.
 * @description
 * @file       :  StringReplacement.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
 var rl=utility.input();//calling of input method

 function stringReplace() {
  rl.question('Enter your name? ', (answer) => {//user input.
    if(answer>=0)
    console.log("Enter correct input");
    else
    utility.hello(answer);//calling of hello method.
    rl.close();
  });
 }
stringReplace();