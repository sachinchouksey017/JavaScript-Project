var utility=require('../Functional program/Utility');
function windChill() {
    var temp=+process.argv[2];
    var vol=+process.argv[3];
    utility.windChill(temp,vol);
}
windChill();