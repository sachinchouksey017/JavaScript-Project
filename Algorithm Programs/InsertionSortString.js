var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function insertionString() {
    var arr=utility.insertArrayString();
    utility.insertionSort(arr);
    console.log("The sorted array of String");
    console.log(arr);
}
insertionString();