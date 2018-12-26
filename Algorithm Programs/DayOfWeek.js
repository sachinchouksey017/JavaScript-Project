var utility =require('../Algorithm Programs/Utility');
function day(params) {
    var date=+process.argv[2];
    var month=+process.argv[3];
    var year=+process.argv[4];
    if(date>=1&&month>=1&&year>=1&&date<=31&&month<=12)
    utility.dayOfWeek(date,month,year);    
    else
    console.log("Please enter correct Date through command line arguments")
}
day();
