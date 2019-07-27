var utility =require('../Algorithm Programs/Utility');
function day() {
    var date=+process.argv[2];
    var month=+process.argv[3];
    var year=+process.argv[4];
    var arr = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    if(date>=1&&month>=1&&year>=1&&date<=31&&month<=12){
    var d0=utility.dayOfWeek(date,month,year); 
    console.log(arr[d0] + " is on " + date + "/" + month + "/" + year);
    }else
    console.log("Please enter correct Date through command line arguments")
}
day();
