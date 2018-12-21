


module.exports = {
  input() {
    const readline = require('readline');

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return rl;
  },

  hello(userin) {
    if (userin.length >= 3) {
      console.log("hello " + userin + " how are you?");
    } else {
      console.log("please enter correct name")
    }

  },
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

  coupan() {
    var rl = this.input();
    rl.question('how many distinct number you want to enter', (number) => {
      var arr = [];
      for (var i = 0; i < 10; i++) {

      }
      console.log(arr);
      rl.close();
    });
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

}




