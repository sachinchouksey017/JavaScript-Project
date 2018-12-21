var utility=require('../Functional program/Utility');
var rl=utility.input();
function leapYear() {
    rl.question('enter the year to check leap or not',(year)=>{
        utility.leapYear(year);
        rl.close();
        });
}
leapYear();
