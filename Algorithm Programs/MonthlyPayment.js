var utility=require('../Algorithm Programs/Utility');
function payment() {
    var principle=+process.argv[2];
    var year =+process.argv[3];
    var rate=+process.argv[4];
    utility.monthlyPayment(principle,year,rate);
}
payment();