var read=require('readline-sync');
var utility=require('../Algorithm Programs/Utility');
function anagram() {
    var arr=[];
    console.log("Insert first String");
    var string1=read.question();
    console.log("Insert second String");
    var string2=read.question();
   var val= utility.isAnagram(string1,string2);
   if(val){
      console.log("Strings are Anagram");
   }else{
       console.log("Strings are not Anagram");
   }

}
anagram();