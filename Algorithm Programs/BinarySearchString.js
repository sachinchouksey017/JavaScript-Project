var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function binarySearchString() {
    var arr=utility.insertArrayString();
    let ele=read.question('Enter element you want to search');
 var index=utility.binarySearch(arr,ele);
 if(index>-1){
     console.log("String present at location "+index);
 }else{
     console.log("String not present in array");
 }


}
binarySearchString();