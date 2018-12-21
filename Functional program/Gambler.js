var utility=require('../Functional program/Utility');
var rl=utility.input();
function gambler() {
    
    rl.question('enter your stack money ',(stack) => {
        rl.question('enter your goal ',(goal) => {
            rl.question('enter no of times you want to play game ',(totalTime) => {
             utility.gambler(goal,stack,totalTime);
             rl.close();
             });
        });
    });
    
}
gambler();