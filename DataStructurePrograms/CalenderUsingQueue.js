var utility=require('../DataStructurePrograms/Utility');
var read=require('readline-sync');
function calenderQue() {
    var month=read.question("Enter the month in number  ");
    var year=read.question("Enter the Year in Number ");
    
    if(month>0&&month<13&&year>999&&year<10000){

        utility.calenderQueue(month,year);   
    }
        else{
            console.log("Please check your month or year value ");
        }
     
}
calenderQue();
