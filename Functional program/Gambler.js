/**
 * purpose     :  a gambler who start with $stake and place fair $1 bets until
 *                he/she goes broke or reach $goal. and display no. of times wins and percentage.
 *                
 * @description
 * @file       :  Gambler.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility=require('../Functional program/Utility');
var rl=utility.input();
function gambler() {
    
    rl.question('enter your stack money ',(stack) => {//userinput for stack
        rl.question('enter your goal ',(goal) => {//userinput for goal
            rl.question('enter no of times you want to play game ',(totalTime) => {//no. of times
             utility.gambler(goal,stack,totalTime);//calling of gambler method.
             rl.close();
             });
        });
    });
    
}
gambler();