var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function binarySearch() {
    var arr=utility.insertArray();
    let ele=read.question('enter element you want to search');
 var index= utility.binarySearch(arr,0,arr.length,ele);
 console.log(index);
 while(index==undefined){
     console.log("hello");
    if(index>-1){
        console.log("element found at position "+index);
    }else if(index==-1){
        console.log("element not found");
    }
 }
 

}
binarySearch();