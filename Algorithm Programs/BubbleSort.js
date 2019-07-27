var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function  bubble() {
var arr=utility.insertArray();
var brr;
brr=utility.bubbleSort(arr);
console.log("The sorted array is ");
console.log(brr);
}
bubble();