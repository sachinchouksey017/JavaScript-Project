/**
 * purpose     :  Read the Json file having properties Details for Rice, Pulses and Wheats 
 *                with properties name, weight, price per kg.we have to calculate price for every
 *                Inventory. 
 *             
 * @description
 * @file       :  Inventory.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  3-01-19
 * 
 */
var utility = require('../Object Oriented Programs/Utility');
var fs = require('fs');
var flag = true;
try {
    var data = fs.readFileSync('file.json');
    var object = JSON.parse(data);//for converting java script object notation string into an object.
} catch (err) {
    console.log("File not found !! Please check file is present or not ");
    flag = false;
}
function mainInventory() {
    if (flag)
        utility.inventory(object);
}
mainInventory();