var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function find() {
    var number=+process.argv[2];
    utility.findNumber(number);
}
find();