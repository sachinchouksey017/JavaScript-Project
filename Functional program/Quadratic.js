var read=require('readline-sync');
var utility=require('../Functional program/Utility');

function root() {
    console.log("enter the value for find roots of quadratic equation");
    var a=read.question("enter the value of 'a'");
    var b=read.question("enter the value of 'b'");
    var c=read.question("enter the value of 'c'");
     utility.roots(a,b,c);

}

root();