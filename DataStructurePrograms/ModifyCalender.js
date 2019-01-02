/**
 * purpose     :  A program to store the Queue in two Stacks. Stack here is also implemented using 
 *                Linked List and display the calender.
 * @description
 * @file       :  ModifyCalender.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  31-12-18
 * 
 */
var utility=require('../DataStructurePrograms/Utility');
var read=require('readline-sync');
function modify(params) {
    var month=read.question("Enter the month in number  ");
    var year=read.question("Enter the Year in Number ");
    
    if(month>0&&month<13&&year>999&&year<10000){

        utility.modifyCalender(month,year);   
    }
    
        else{
            console.log("Please check your month or year value ");
        }
     
}
modify();