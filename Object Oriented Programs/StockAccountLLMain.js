/**
 * purpose     :  A program  used by a financial institution to keep track of customer information
 *                in this we can buy stock or sell the stock.using linked list
 *             
 * @description
 * @file       :  StockAccountLLMain.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  8-01-19
 * 
 */
var file=require('fs');
var stkLL=require('../Object Oriented Programs/Utility');
var read=require('readline-sync');
try{
var data=file.readFileSync('StockLL.json','utf8');
var obj=JSON.parse(data);//parsing the data
var LL=require('../DataStructurePrograms/LinkedList');

        var stockLinked=new LL.LinkedList();
        for(var key in obj.stock){//first add all data of file to linked list
            stockLinked.add(obj.stock[key]);
        }
  
stkLL.stockLinkedList(file,obj,stockLinked );//calling of method
}catch(err){
    console.log("Error Occured ");
}