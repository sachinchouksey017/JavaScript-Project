var read=require('readline-sync');
    var dequeue=require('../DataStructurePrograms/Dequeue');
    var deq=new dequeue.Dequeue();
    var str=read.question("Enter the string to check ");
    if(deq.palimdromecheck(str)){
        console.log("The sring is palindrome ");
    }else{
        console.log("The string is not a Palindrome");
    }