
var read=require('readline-sync');

module.exports = {
  /**
   * 
   */
  inputreadLineArray(){
    var l=read.question("how many element you want enter in array");
    var arr=new Array(l);

    console.log("enter "+l+" element in array");
    for (let index = 0; index < l; index++) {
    
      arr[index]=Number(read.question(""));
      
    }
    return arr;
  },
  input() {
    const readline = require('readline');

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return rl;
  },

 /*
  * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
  *             and print the string.
  */

 /*
  *  @descriptipn: Declaring the function and passing the userinput as argument.
  *  @function: diplayname takes the userinput and print it with some sentence.
  */
  hello(userin) {
    if (userin.length >= 3) {
      console.log("hello " + userin + " how are you?");
    } else {
      console.log("please enter correct name")
    }

  },
  /*
 * @purpose : By using random function flip the coin no of times from user input
 *            and print the percentage of head vs tails
 */

/*
 * @description : Declaring a function and passing the userinput for fliping the coin
 *                no of times
 * @function: coinflip takes the no of times to flip coin and print the percentage of
 *            head and tail
 */

  flipcoin(noOfTimes) {
    var head = 0, tail = 0;
    for (let index = 0; index < noOfTimes; index++) {
      var n = Math.random();
      if (n > 0.5) {
        head++;
      } else {
        tail++;
      }

    }
    var headPer = (head / noOfTimes) * 100;
    var tailPer = (tail / noOfTimes) * 100;
    console.log("percentage of head occur is " + (headPer));
    console.log("percentage of tail occur is " + (tailPer));
  },
/*
   * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
   *            or not.
   */

  /*
   * @description : Declaring the function and passing a four digit number from userinput
   * @function:  Function compares the length of given number and prints the number
   *             is a leap year or not
   */
  leapYear(year) {
    if (year < 999 || year > 10000) {
      console.log("enter 4 digit year number");
    } else {

      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("year is leap year");
      } else {
        console.log("year is not a leap year");
      }
    }
  },
  power(base, pow) {
    var total = 1;
    while (pow > 0) {
      total = total * base;
      pow--;
    }
    return total;
  },
 /*
    * @purpose : By taking power values as input and display the given power value
    *            is a leapyear or not , the given power value doesnt exceed 31
    */

   /*
    * @description : Declaring a function and giving power value N as argument 
    * @function : power function takes the value N,checks the given number is less than 31
    *             and prints the given value is a leap year or not
    */
  powerOf2(userNo) {
    total = 1;
    if (userNo >= 0 && userNo < 31) {
      console.log("table of 2 is ");
      while (userNo > 0) {
        total = total * 2;
        console.log(total);
        userNo--;
      }
    } else {
      console.log("please input less than 31");
    }
  },
 /*
    * @purpose : To genarate harmonic value according to the userinput
    */

   /*
    * @description : To generate the sum of harmonic numbers by taking input from user
    * @function : Harmonic function takes user input and sum it no of times that user given
    */
  harmonicNumber(number) {
    if (number != 0) {
      var sum = 0;
      for (let index = 1; index <= number; index++) {
        sum = sum + 1 / index;

      }
      console.log("harmonic number of " + number + " is " + sum);
    } else {
      console.log("please enter correct number")
    }
  },
  /**
   * @purpose : To find the factors of the number.
   * @param number : 
   * @returns : nothing.
   */
/* @description : Finding the primefactors of a given number */
  factor(number) {
    if (number > 0) {
      while (number % 2 == 0) { //print the no. of 2's that divide number
        console.log("2 ");
        number = number / 2;
      }
      //number must be odd this point
      //
      for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i == 0) {//while i divide number print i and divide number.
          console.log(i + " ");
          number = number / i;
        }
      }
      if (number > 2) { //this condition is to handle the case when n is prime greater then 2
        console.log(number);
      }

    } else {
      console.log("enter valid number");
    }
  },

  gambler(goal, stack, totaltime) {
    var win = 0;
    var noOfTimes = 0;
    while (stack != goal && stack != 0 && noOfTimes <= totaltime) {
      var rNo = Math.round(Math.random());
      if (rNo == 0) {
        stack--;
      } else {
        stack++;
        win++;
      }
      noOfTimes++;

    }
    var winPercentage = (win / totaltime) * 100;
    var lossPercentage = 100 - winPercentage;
    console.log("total number of win " + win);
    console.log("win percentage " + winPercentage);
    console.log("los percentage " + lossPercentage);

  },

  inputArray(arr,i,n,rl){
    if(i<n){
      rl.question('enter number ',(ans) => {
        var input = Number(ans);
        arr.push(input);
        i++;
          this.inputArray(arr,i,n,rl);
          
      });

    }else{
      console.log("arr", arr);
      rl.close();
     
    }
    
    
    return arr;
  },

  distance(num1,num2){
    if(num1>0||num2>0){
    var distance=Math.sqrt((num1*num1)+(num2*num2));
    console.log("Euclidean distance is "+distance);
  }else{
    console.log("provide input through command line argument");
  }},

swapStringChar(s,f,l) {
  var ns="";  
  var ch=[];
    ch=s.split('');
		var temp=ch[f];
		ch[f]=ch[l];
    ch[l]=temp;
    for (let index = 0; index < s.length; index++) {
      ns=ns+ch[index];
      
    }
		return ns;
	},


stringPermutation(str,s,f,l){
  		if(f==l) {
			console.log(s);
			str=str+s;
		}else {
			for (var i = f; i <=l; i++) {
				s=this.swapStringChar(s,f,i); //swaping character
				str=this.stringPermutation(str,s,f+1,l); //recursion
				s=this.swapStringChar(s,f,i); //backtracking
			}
		}
		return str;
  },
  currentSecond(){
    var dt=new Date();
    return dt.getSeconds();
  },
  stopwatch(rl){
    var start=0,stop=0;
    var dt=new Date();
      rl.question('press any key to start timer',(ans) => {
        
            start=this.currentSecond();
            rl.question('press any key to stop timer ',(ans1)=>{
               
              stop=this.currentSecond();
               console.log("elapsed time is "+(stop-start)+" seconds");
               rl.close();
            });
      });
  },

roots(a,b,c){
  var delta=(b*b)-(4*a*c);
  console.log(delta);
  if(delta==0){
    var root=-b/(2*a);
    console.log(root)
  }else if(delta>0){
     var root1=(-b+(Math.sqrt(delta)))/2*a;
     var root2=(-b-(Math.sqrt(delta)))/2*a;
     console.log("first root "+root1);
     console.log("second root "+root2);
  }else if(delta<0){
    var root1=-b/2*a;
    var root2=(Math.sqrt(-delta))/2*a;
    console.log("first root : "+root1,"i",root2);
    console.log("second root : "+root1,"-i",root2);
  }else{
    console.log("invalid number");
  }

},

windChill(temp,vol){
if(temp<=50&&vol>3&&vol<120){
  var w=35.74+0.6215*temp+(0.4275*temp-35.75)*Math.pow(vol,0.16);
  console.log("Windchill for temperature "+temp+" and wind speed "+vol+" is "+w);
}else{
  console.log("Wrong temperature or wind speed");
}
},

coupan(){
 
	console.log("how many coupan number you wants");
  var l=read.question();
  var arr=new Array(l);
  var h=0;
  var c=0;
  var flag=true;
  while(l>0){
    flag=true;
    var n=Math.floor((Math.random() *10000) + 1000);//geting randomNumber between 0 to Highest value;
 
    c++;
    for (let index = 0; index < (h+1)&&flag; index++) {
            if(arr[index]==n){
                flag=false;
            }
       
     }
     if(flag==true){
       arr[h++]=n;
       l--;
     }
  }
  this.display2dArray(arr);
  
  

  console.log("total number of random number needed to generate coupan number is "+c);
  // for (var i = 0; i < result.length; i++) {
  //   console.log(arr[i]+" ");  // for printing the triplets 
    
  // }
},

input2DArray(){
  var row=read.question("enter number of rows you want");
  var col=read.question("enter number of coloumn you want");
  var arr=[];
  console.log("enter the element in the array");
  for (let index = 0; index < row; index++) {
      arr.push([]);
      for (let j = 0; j < col; j++) {
         arr[index][j]=read.question("");
        
      }
    
  }
  return arr;
},

display2dArray(array){
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  
}
},


TwoDArray(){
var arr=this.input2DArray();
this.display2dArray(arr);
},

addele1(array){
for (let index = 0; index < 3; index++) {
  for (let j = 0; j < 3; j++) {
    array[index][j] = '_';
    
  }
  
}
return array;
},
checkIndex(r,c,arr){
if(arr[r][c]=='_'){
  return true;

}
return false;
},
isMatch(arr) {
  if((arr[0][0]=='x'&&arr[0][1]=='x')&&arr[0][2]=='x') {//checking first row have 'x' or not.
    return true;
  }
  else if((arr[0][0]=='0'&&arr[0][1]=='0')&&arr[0][2]=='0') {// checking first row have '0' or not.
    return true;
  }
  else if((arr[1][0]=='x'&&arr[1][1]=='x')&&arr[1][2]=='x') {
    return true;
  }
  else if((arr[1][0]=='0'&&arr[1][1]=='0')&&arr[1][2]=='0') {
    return true;
  }
  else if((arr[2][0]=='x'&&arr[2][1]=='x')&&arr[2][2]=='x') {
    return true;
  }
  else if((arr[2][0]=='0'&&arr[2][1]=='0')&&arr[2][2]=='0') {
    return true;
  }





  //coloumn condition
  else if((arr[0][0]=='x'&&arr[1][0]=='x')&&arr[2][0]=='x') {// checking for coloumn also
    return true;
  }
  else if((arr[0][0]=='0'&&arr[1][0]=='0')&&arr[2][0]=='0') {
    return true;
  }
  else if((arr[0][1]=='x'&&arr[1][1]=='x')&&arr[2][1]=='x') {
    return true;
  }
  else if((arr[0][1]=='0'&&arr[1][1]=='0')&&arr[2][1]=='0') {
    return true;
  }
  else if((arr[0][2]=='x'&&arr[1][2]=='x')&&arr[2][2]=='x') {
    return true;
  }
  else if((arr[0][2]=='0'&&arr[1][2]=='0')&&arr[2][2]=='0') {
    return true;
  }

  //diagonal condition
  else if((arr[0][0]=='x'&&arr[1][1]=='x')&&arr[2][2]=='x') {
    return true;
  }
  else if((arr[0][0]=='0'&&arr[1][1]=='0')&&arr[2][2]=='0') {
    return true;
  }

  else if((arr[0][2]=='x'&&arr[1][1]=='x')&&arr[2][0]=='x') {
    return true;
  }
  else if((arr[0][2]=='0'&&arr[1][1]=='0')&&arr[2][0]=='0') {
    return true;
  }
  return false;
},


ticTac(){
var arr=[[],[],[]];
arr=this.addele1(arr);
this.display2dArray(arr);
var c1=0;
var user=true;
var com=true;
var flag1=true;
while(c1<9&&user&&com){
  console.log("c is "+c1);
  var flag=true;
  console.log("user chance");
 
 
  while(flag){
  console.log("enter index i,j");
var r=read.question("");
var c=read.question("");
if(this.checkIndex(r,c,arr)){

arr[r][c]='x';
c1++;
flag=false;
this.display2dArray(arr);
console.log("user c"+c1);
}else{
  console.log("index is filled re input index");
}

  }
  flag=true;
  if(this.isMatch(arr)){
     console.log("user win the match");
     user=false;
     flag=false;
     flag1=false;
     
  }
  if(flag1&&c1<9){
    console.log();
    console.log();
    console.log("computer chance");
    
  }
  while(flag&&c1<9){
     
  var r=Math.floor(Math.random()*3);
  var c=Math.floor(Math.random()*3);

  if(this.checkIndex(r,c,arr)){
  arr[r][c]='0';
this.display2dArray(arr);
  flag=false;
  c1++;
  console.log("comp c "+c1);
  }
    }
    flag=true;
    if(this.isMatch(arr)){
      if(flag1)
      console.log("Computer win the match");
      com=false;
      flag=false;
     
   }
   console.log();
    console.log();


}
if(user==true&&com==true){
  console.log("Draw match ,No win No Loss");
}

},


}