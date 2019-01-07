var file=require('fs');
var read=require('readline-sync');
var utility=require('../Object Oriented Programs/Utility');
var filedata=file.readFileSync('Clinique.json','utf8');
var dataObj=JSON.parse(filedata);
var choice=read.question("What You want \n Press 1 for Search doctor \n Press 2 for Search patient \n press 3 for Exit ");
utility.clinique(choice,dataObj,file);