var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function insertion() {
    var arr=utility.insertArray();
    utility.insertionSort(arr);
    console.log("The sorted array is ");
    console.log(arr);
}
insertion();