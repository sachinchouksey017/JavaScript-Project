/**
 * purpose     :  Read the Json file having properties Details for stock with properties
 *                stockname, noOfShares, shareprice.we have to calculate total share price for
 *                every stock.
 *             
 * @description
 * @file       :  stock.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  4-01-19
 * 
 */
var utility=require('../Object Oriented Programs/Utility');
var file=require('fs');
var flag=true;
try{//for check file is exist or not.
var filedata=file.readFileSync('stock.json','utf8');
var object=JSON.parse(filedata);//parse the string to object form
}catch(err){
    console.log("File not found ...please check your file ");
    flag=false;
}
function mainstack() {
   if(flag)
    utility.stock(object);//calling of stack method.
}
mainstack();