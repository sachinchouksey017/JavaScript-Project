var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function find() {
    var number=+process.argv[2];
    if(number>=0)
    utility.findNumber(number);
    else
    console.log("Please enter correct Number");
}
find();