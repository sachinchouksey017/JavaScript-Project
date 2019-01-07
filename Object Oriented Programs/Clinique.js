var file=require('fs');
var read=require('readline-sync');
var utility=require('../Object Oriented Programs/Utility');
var filedata=file.readFileSync('Clinique.json','utf8');
var dataObj=JSON.parse(filedata);
utility.clinique(dataObj,file);