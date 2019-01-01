/**
 * purpose     :  By using random function flip the coin no of times from user input
 *            and print the percentage of head vs tails.
 * @description
 * @file       :  FlipCoin.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
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
