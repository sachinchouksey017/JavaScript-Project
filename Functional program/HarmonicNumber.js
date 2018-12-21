var utility=require('../Functional program/Utility');
var rl=utility.input();
function harmonic() {
    rl.question('please enter value for harmonic value ',(Number) => {
       utility.harmonicNumber(Number);
       rl.close();
    });
}
harmonic();