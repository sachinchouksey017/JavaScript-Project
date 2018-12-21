var utility=require('../Functional program/Utility');
var rl=utility.input();
function flipcoin() {
    rl.question('how many time you want to flip the coin? ', (answer) => {
        utility.flipcoin(answer);
        rl.close();
      });
}
flipcoin();