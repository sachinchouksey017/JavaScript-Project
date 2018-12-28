var dis=require('util');
var fileStream = require('fs');
var read = require('readline-sync');
var linked = require('../DataStructurePrograms/LinkedList');
module.exports = {
    unOrdered() {
        var f = fileStream.readFileSync('String.txt', 'utf8');

        console.log(f);
        var arr = f.split(' ');


        var ll = new linked.LinkedList;
        for (let index = 0; index < arr.length; index++) {
            ll.add(arr[index]);
        }
        var word = read.question('Enter the word to search in list ');
        if (ll.search(word)) {
            ll.remove(word);
        } else {
            ll.add(word);
        }
        ll.display();

    },
    ordered() {
        var string = fileStream.readFileSync('number.txt', 'utf8');
        var arr = string.split(' ');
        var ll = new linked.LinkedList;
        for (let index = 0; index < arr.length; index++) {
            ll.add(Number(arr[index]));

        }
        ll.addAscending();
        ll.display();
        var num = read.question("Enter the Number you want to search ");
        if (num >= 0) {
            if (ll.search(num)) {
                ll.remove(num);
            } else {
                ll.add(num);
                ll.addAscending();
            }
            console.log("The linked list elements are ");
            ll.display();
        } else {
            console.log("please enter correct number");
        }


    },

    balancedExpression() {
        var stk = require('../DataStructurePrograms/Stack');
        var stak = new stk.Stack;
        var string = read.question("Enter the arthmetic expression equation ");
        var ch, popch;
        for (let index = 0; index < string.length; index++) {
            ch = string.charAt(index);
            if (ch == '{' || ch == '[' || ch == '(') {
                stak.push(ch);
            } else {
                switch (ch) {
                    case '}': popch = stak.pop();
                        if (popch != '{') {
                            return false;
                        }
                        break;
                    case ']': popch = stak.pop();
                        if (popch != '[') {
                            return false;
                        }
                        break;
                    case ')': popch = stak.pop();
                        if (popch != '(') {
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }

        }

        return true;



    },

   bankingCash(){
       let bankbalance=100000000;
       let startingbankbalance=bankbalance;
       var que=require('../DataStructurePrograms/Queue');
       var line=new que.Queue;
       var amount;
       var flag=false;
       var people=read.question("How many person are in the Queue ");
       for (let i = 0; i < people;i++) {
       var what=read.question("What you want \n For Deposit : press 1 \n For Withdraw : press 2 \n");
          if(what==1){
             amount= Number(read.question("Enter the amount you want to deposit "));
             line.enqueue(amount);
             flag=true;
          }else if(what==2){
              amount=Number(read.question("Enter the amount you want to Withdraw "));
              line.enqueue((-amount));
              flag=true;
          }else{
              console.log("Wrong Choice ");
          }
          if(flag){
              amount=line.dequeue();
              bankbalance=bankbalance+amount;
              flag=false;
          }



    }
    if(startingbankbalance==bankbalance)
        return true;
        return false;


   },
 factorial(n){
    let sum=1;
     while(n>0){
         sum=sum*n;
         n--;
     }
     return sum;
 },


   BinarySearchTree(){
       var testCases=read.question("How many test cases you want ");
       var arr=[];
       console.log("Enter the Number of Nodes you want for each test cases");
       for (let i = 0; i < testCases; i++) {
           arr[i]=read.question('');
       }var numinator,denominator,num1,num2;
       for (let i = 0; i < testCases; i++) {
           numinator=this.factorial(2*arr[i]);
           denominator=(this.factorial(Number(arr[i])+1)*this.factorial(arr[i]));
           console.log("Total number of Binary search Tree generated through "+arr[i]," Nodes is ");
           console.log(Math.floor(numinator/denominator));
           
       }
   },

   calender(month,year){
   var utility=require('../Algorithm Programs/Utility');
   var String=["SU","M","T","W","Th","F","S"];
   var montharr=["","Jan","Feb","March","April","May","Jun","July","Augest","Sept","Oct","Nov","Dec"];
    var d=utility.dayOfWeek(1,month,year);
     var dayarr=[0,31,28,31,30,31,30,31,31,30,31,30,31];
     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
         dayarr[2]=29;
     }
     
     console.log("   "+montharr[month]+"  "+year);

console.log(" SUN MON TUE WED THU FRI SAT ");

for (let j = 0; j < (d*4+2); j++) {
    dis.print(" ");
  
}


var n=dayarr[month];
for (let i = 1; i <=n; i++) {
    if(i<10)
      dis.print(i,"   ");
     else{
       dis.print(i,"  ");
     }
     
      if((d+i)%7==0){
        console.log();
        // for (let j = 0; j < (d*4+2); j++) {
        //     dis.print(" ");
          
        // }
          
          dis.print("  ");
      }
}
console.log("\n\n");

   }

}