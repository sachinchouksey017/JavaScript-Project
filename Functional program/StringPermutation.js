var utility=require('../Functional program/Utility');
var rl=utility.input();
function stringRep() {
    

rl.question('enter the string', (ans) => {
var ss;
ss=utility.stringPermutation("",ans,0,ans.length-1);
console.log(ss);

//utility.stringPermutation("",ans,0,ans.length-1);


});
}
stringRep();