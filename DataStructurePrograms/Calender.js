/**
 * purpose     :  A program for printing  Calendar takes the month and year as command­line arguments 
 *                and prints the Calendar of the month. 
 * @description
 * @file       :  Calender.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  30-12-18
 * 
 */
var utility=require('../DataStructurePrograms/Utility');
function date() {
  var month=+process.argv[2];//input from command line.
  var year=+process.argv[3];

if(month>0&&month<13&&year>999&&year<10000){

    utility.calender(month,year);
}
    else{
        console.log("Please check your month or year value ");
    }
}
date();
