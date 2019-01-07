/**
 * purpose     :  Read the Json file and replace the words from file using regex
 *             
 * @description
 * @file       :  RegularExpression.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  3-01-19
 * 
 */
var utility = require('../Object Oriented Programs/Utility');
var read = require('readline-sync');
function regEx() {
    var flag = true;
    var name = read.question("Please enter your name ");
    while (flag) {

        if (isNaN(name)) {//for validate the name 
            flag = false;
        } else {
            var name = read.question("Wrong input !!!...Please enter your correct name   ");
        }
    }
    var flag = true;
    var fullname = read.question("Please enter your fullname ");
    while (flag) {

        if (isNaN(fullname)) {//for validate full name
            flag = false;
        } else {
            var fullname = read.question("Wrong input !!!...Please enter your correct full name   ");
        }
    }
    var flag = true;
    var Mobile = read.question("Please enter your Mobile Number ");
    while (flag) {

        if (!isNaN(Mobile) && (Mobile.length == 10)) {
            flag = false;
        } else {
            var Mobile = read.question("Wrong input !!!...Please enter your correct Mobile Number  ");
        }
    }
    var ds = new Date;
    dt = ds.getDate() + "/" + (ds.getMonth() + 1) + "/" + ds.getFullYear();
    utility.regex(name, fullname, Mobile, dt);//calling of regex method.





}
regEx();