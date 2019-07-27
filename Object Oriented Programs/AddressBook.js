/**
 * purpose     :  A program that can be used to maintain an address book. An address book holds
 *                a collection of entries, each recording a person's first and last names, 
 *                address, city, state, zip, and phone number.
 *             
 * @description
 * @file       :  Address.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  6-01-19
 * 
 */
var utility=require('../Object Oriented Programs/Utility');
var read=require('readline-sync');
var file=require('fs');
try{
var filedata=file.readFileSync('Address.json','utf8');
var obj=JSON.parse(filedata);//parsing the data
utility.addressMain(obj,file);
}catch(err){
    console.log("Error found in code ");
}