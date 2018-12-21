var utility=require('../Functional program/Utility');
 var rl=utility.input();//calling of input method

 function stringReplace() {
  rl.question('enter your name? ', (answer) => {
    utility.hello(answer);
    rl.close();
  });
 }
stringReplace();