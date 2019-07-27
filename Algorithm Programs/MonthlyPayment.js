var utility=require('../Algorithm Programs/Utility');
function payment() {
    var principle=+process.argv[2];
    var year =+process.argv[3];
    var rate=+process.argv[4];
    if(principle>0&&year>0&&rate>=0)
    utility.monthlyPayment(principle,year,rate);
    else
    console.log("Please provide correct input");
}
payment();