var utility=require('../DataStructurePrograms/Utility');
function date() {
  var month=+process.argv[2];
  var year=+process.argv[3];

if(month>0&&month<13&&year>999&&year<10000){

    utility.calender(month,year);
}
    else{
        console.log("Please check your month or year value ");
    }
}
date();
