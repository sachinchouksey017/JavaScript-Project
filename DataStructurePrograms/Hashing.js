var linked=require('../DataStructurePrograms/LinkedList');
var utility=require('../DataStructurePrograms/Utility');
var filestream=require('fs');
var dis=require('util');
var read=require('readline-sync');
var f=filestream.readFileSync('hashingNumber.txt','utf8');
var brr=f.split(' ');
var arr=new Array(10);
var n,remainder;
for (let index = 0; index < brr.length; index++) {
    n= Number(brr[index]);
    remainder=n%10;
    
    if(arr[remainder]===undefined){
    arr[remainder]=new linked.LinkedList;
    arr[remainder].add(n);
     }else{
        arr[remainder].add(n);
    
    }
    

    
}var str="";
for (let index = 0; index < 10; index++) {
    dis.print(index+" index elements are,   "); 
    try{
     arr[index].display();
     
    }catch(err){
        console.log("empty index");
    }
    
}
var number=read.question(' Enter the number you want to search \n');
remainder=number%10;
if(arr[remainder].search(number)){
    console.log("The number is found in file");
    arr[remainder].remove(number);

}else{
    console.log("Number is not found in file");
    arr[remainder].add(number);
}var flag;
for (let index = 0; index < 10; index++) {
    flag=true;
    dis.print(index+" index elements are,   "); 
    try{
     arr[index].display();
     str=str+arr[index].getData();
     if(arr[index]!=='undefined'&&index<arr.length-2){
         str=str+" ";
     }
    }catch(err){
        console.log(" Empty index");
    
    }
    
}console.log(str);
utility.writeFile('hashingNumber.txt',str);

console.log("\n\n");



