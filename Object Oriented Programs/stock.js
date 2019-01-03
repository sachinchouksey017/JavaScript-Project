var utility=require('../Object Oriented Programs/Utility');
var read=require('readline-sync');
var file=require('fs');
var filedata=file.readFileSync('stock.json','utf8');
var object=JSON.parse(filedata);
function mainstack() {
    utility.stock(object);
}
mainstack();