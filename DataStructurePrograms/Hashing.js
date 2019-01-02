/**
 * purpose     :A program to implement hashing function to search a number in a slot.
 * @description
 * @file       :  Hashing.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  30-12-18
 * 
 */
var linked = require('../DataStructurePrograms/LinkedList');
var utility = require('../DataStructurePrograms/Utility');
var filestream = require('fs');
var dis = require('util');
var read = require('readline-sync');
var f = filestream.readFileSync('hashingNumber.txt', 'utf8');//read the file data in string
var brr = f.split(' ');//split in the array form
var arr = new Array(10);
var n, remainder;
for (let index = 0; index < brr.length; index++) {
    n = Number(brr[index]);
    remainder = n % 10;//calculate the remainder

    if (arr[remainder] === undefined) {//if array does not contain any item in it means it has undefined
        arr[remainder] = new linked.LinkedList;//create a new linked list to that index add item.
        arr[remainder].add(n);
    } else {
        arr[remainder].add(n);//add item to older linked list

    }



} var str = "";
for (let index = 0; index < 10; index++) {//for printing the item of hash function
    dis.print(index + " index elements are,   ");
    try {
        arr[index].display();

    } catch (err) {
        console.log("empty index");
    }

}
var number = read.question(' Enter the number you want to search \n');
if(!isNaN(number)){//for check it is number or not
remainder = Number(number % 10);
console.log(arr[1]);
if (arr[remainder] === undefined) {//if array does not contain any item in it means it has undefined
    arr[remainder] = new linked.LinkedList;//create a new linked list to that index add item.
} 
if (arr[remainder].search(Number(number))) {
    console.log("The number is found in file");
    arr[remainder].remove(number);

} else {
    console.log("Number is not found in file");
    arr[remainder].add(number);
} var flag;
for (let index = 0; index < 10; index++) {
    flag = true;
    dis.print(index + " index elements are,   ");
    try {
        arr[index].display();
        str = str + arr[index].getData();
        if (arr[index] !== 'undefined' && index < arr.length - 2) {
            str = str + " ";
        }
    } catch (err) {
        console.log(" Empty index");

    }

} console.log(str);
utility.writeFile('hashingNumber.txt', str);//for saving the file.

console.log("\n\n");
}else{
    console.log("Wrong input ");
}



