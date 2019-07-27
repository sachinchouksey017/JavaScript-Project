var file=require('fs');
var read=require('readline-sync');
var utility=require('../Object Oriented Programs/Utility');
var data=file.readFileSync('StockLL.json','utf8');
var obj=JSON.parse(data);
var LL=require('../DataStructurePrograms/LinkedList');
        var stockLinked=new LL.LinkedList();
        for(var key in obj.stock){
            stockLinked.add(obj.stock[key]);
        }
utility.deleteStockLL(obj,stockLinked);
