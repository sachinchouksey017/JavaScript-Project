var read=require("readline-sync");
var que=require('../DataStructurePrograms/QueueUsingLinkedList');
var file=require('fs');
var data=file.readFileSync('stockAccount.json','utf8');
var obj=JSON.parse(data);
var sym=read.question("Enter the Symbol you want to see transaction");
var flag=true;
while(flag){
if(isNaN(sym)){
    flag=false;
}else{
    sym=read.question("please Enter the Symbol you want to see transaction");
}
}