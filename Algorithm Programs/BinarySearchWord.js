var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
var fileStream=require('fs');
function findWord() {
var f=fileStream.readFileSync('binaryfile.txt','utf8');
var arr=f.split(' ');
arr.sort();
var word=read.question("enter the word to search in the file");
var value=utility.binarySearch(arr,word);//then
if(value>-1){
    console.log("the word is present in the file at location "+value);
}else{
    console.log("the word is not present in the file");
}
}
findWord();