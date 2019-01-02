var fs=require('fs');
var data=fs.readFileSync('file.json', 'utf8');
var words=JSON.parse(data);
//var bodyparser=require('body-parser');
console.log(words);