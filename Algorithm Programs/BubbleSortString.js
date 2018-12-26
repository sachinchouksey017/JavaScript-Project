var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function  bubbleString() {
var arr=utility.insertArrayString();
var brr;
brr=utility.bubbleSort(arr);
console.log("The sorted array of string is  ");
console.log(brr);
}
bubbleString();