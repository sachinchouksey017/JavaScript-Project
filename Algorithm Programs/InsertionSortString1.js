var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function stringForm() {
    var string=read.question("Enter the string");
    var arr=string.split(' ');
    utility.insertionSort(arr);
    console.log(arr);
}
stringForm();