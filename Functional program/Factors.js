var utility=require('../Functional program/Utility');
var rl=utility.input();
function factors() {
    rl.question('enter the number to find factors? ',(Number) => {
      utility.factor(Number);
      rl.close();
    });

}
factors();