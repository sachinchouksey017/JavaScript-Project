var utility =require('../Algorithm Programs/Utility');
function day(params) {
    var date=+process.argv[2];
    var month=+process.argv[3];
    var year=+process.argv[4];
    utility.dayOfWeek(date,month,year);    
}
day();
