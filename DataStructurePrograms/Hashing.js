var linked=require('../DataStructurePrograms/LinkedList');
var filestream=require('fs');
var f=filestream.readFileSync('hashingNumber.txt','utf8');
var brr=f.split(' ');
var arr=new Array(10);
for (let index = 0; index < brr.length; index++) {
    var n= Number(brr[index]);
    var remainder=n%10;
    
    if(arr[remainder]===undefined){
    arr[remainder]=new linked.LinkedList;
    arr[remainder].add(n);
    arr[remainder].display();
     }else{
         console.log("rem ",remainder);
        arr[remainder].add(n);
    
    }
    

    
}
for (let index = 0; index < 10; index++) {
    
    
}



