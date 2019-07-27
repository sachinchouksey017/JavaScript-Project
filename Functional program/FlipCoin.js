/**
 * purpose     :  By using random function flip the coin no of times from user input
 *            and print the percentage of head vs tails.
 * @description
 * @file       :  FlipCoin.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();//calling of input method.
function flipcoin() {
    rl.question('How many time you want to flip the coin? ', (answer) => {//user input.
        if(answer>=0)
        utility.flipcoin(answer);// calling of flipCoin method.
        else
        console.log("Please enter correct input ");
        rl.close();
      });
}
flipcoin();