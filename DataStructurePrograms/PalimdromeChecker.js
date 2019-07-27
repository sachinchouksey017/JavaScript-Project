/**
 * purpose     :A program to check String is palindrome or not .using Dequeue concept.
 * @description
 * @file       :  PalimdromeChecker.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  29-12-18
 * 
 */
function palimdrome() {
    var read=require('readline-sync');
    var dequeue=require('../DataStructurePrograms/Dequeue');
    var deq=new dequeue.Dequeue();//creating of dequeue object
    var str=read.question("Enter the string to check ");
    if(deq.palimdromecheck(str)){      // calling of palimdromecheck Method.
        console.log("The sring is palindrome ");
    }else{
        console.log("The string is not a Palindrome");
    }
}
palimdrome();
