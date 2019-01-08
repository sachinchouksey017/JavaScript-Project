
var utility=require('../Object Oriented Programs/Utility');
var read=require('readline-sync');
var file=require('fs');
var filedata=file.readFileSync('Address.json','utf8');
var obj=JSON.parse(filedata);
utility.addressMain(obj,file);
// add personal
// edit personal
// delete person. \n 4. Sort By lastname. \n 5. Sort by zip code. \n 6. Display \n 7. Save into file.');
// var response = await switchControl();

