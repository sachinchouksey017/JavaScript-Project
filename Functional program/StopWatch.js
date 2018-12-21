var read=require('readline-sync');
var utility =require('../Functional program/Utility');
var rl=utility.input();
var as=0;
function stopwatchMain() {
    var value=read.question("what is your name");
    console.log(value);
    utility.stopwatch(rl);
}
stopwatchMain();
