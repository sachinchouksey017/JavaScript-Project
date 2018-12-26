var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function binarySearch() {
    var arr=utility.insertArray();
    let ele=read.question('Enter element you want to search');
 var index=utility.binarySearch(arr,ele);
 if(index>-1){
     console.log("Element present at location "+index);
 }else{
     console.log("Element not present in array");
 }


}
binarySearch();