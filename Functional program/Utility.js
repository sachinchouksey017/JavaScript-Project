
var read = require('readline-sync');

module.exports = {
  /**
   * 
   */
  inputreadLineArray() {
    var l = read.question("How many element you want enter in array");
    var arr = new Array(l);

    console.log("Enter " + l + " element in array");
    for (let index = 0; index < l; index++) {

      arr[index] = Number(read.question(""));

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
      console.log("Hello " + userin + " how are you?");
    } else {
      console.log("Please enter correct name")
    }

  },

  // replaceString(user){
  //   if(user.length>=3){
  //   var s1="Hello UserName, How are You ?";
  //   var temp="";

  //   var a1=s1.substring(0,5);
  //   temp=a1;
  //   temp=temp+user;
  //   a1=s1.substring(13,s1.length);
  //   temp=temp+a1;
  //   console.log(temp);
  //   }else{
  //     console.log("please enter correct name");
  //   }

  // }
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
    console.log("Percentage of head occur is " + (headPer));
    console.log("Percentage of tail occur is " + (tailPer));
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
      console.log("Enter 4 digit year number");
    } else {

      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("Year is leap year");
      } else {
        console.log("Year is not a leap year");
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
      console.log("Table of 2 is ");
      while (userNo > 0) {
        total = total * 2;
        console.log(total);
        userNo--;
      }
    } else {
      console.log("Please input less than 31");
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
      console.log("Harmonic number of " + number + " is " + sum);
    } else {
      console.log("Please enter correct number")
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
      if (number % 2 == 0)
        console.log("2 ");
      while (number % 2 == 0) { //print the no. of 2's that divide number
        // console.log("2 ");
        number = number / 2;
      }
      //number must be odd this point
      //
      for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        if (number % i == 0)
          console.log(i);
        while (number % i == 0) {//while i divide number print i and divide number.
          //console.log(i + " ");
          number = number / i;
        }
      }
      if (number > 2) { //this condition is to handle the case when n is prime greater then 2
        console.log(number);
      }

    } else {
      console.log("Enter valid number");
    }
  },
  /*
      * @purpose : a gambler who start with $stake and place fair $1 bets until
      *            he/she goes broke or reach $goal. and display no. of times wins and percentage.
      */

  /*
   * @function : gambler method take 3 input .
   */
  gambler(goal, stack, totaltime) {
    var win = 0;
    var noOfTimes = 0;
    while (stack != goal && stack != 0 && noOfTimes <= totaltime) {//loop works until stack is not
      var rNo = Math.round(Math.random()); //equals to goal or noOfTimes is completed.
      if (rNo == 0) {
        stack--;
      } else {
        stack++;
        win++;
      }
      noOfTimes++;

    }
    var winPercentage = (win / totaltime) * 100;//calculate percentage.
    var lossPercentage = 100 - winPercentage;
    console.log("Total number of win " + win);
    console.log("Win percentage " + winPercentage);
    console.log("Loss percentage " + lossPercentage);

  },

  inputArray(arr, i, n, rl) {
    if (i < n) {
      rl.question('Enter number ', (ans) => {
        var input = Number(ans);
        arr.push(input);
        i++;
        this.inputArray(arr, i, n, rl);

      });

    } else {
      console.log("arr", arr);
      rl.close();

    }


    return arr;
  },
  /**
   * @description: this method is to calculate Euclidean distance.
   * @param  num1 
   * @param  num2 
   * @returns nothing.
   */
  distance(num1, num2) {
    if (num1 > 0 || num2 > 0) {
      var distance = Math.sqrt((num1 * num1) + (num2 * num2));//formula for euclidean.
      console.log("Euclidean distance is " + distance);
    } else {
      console.log("Please provide correct input through command line argument");
    }
  },
  /**
   * @description : this method is use to swap the character in the string .
   * @param {*} s : string.
   * @param {*} f : first index.
   * @param {*} l : last index.
   */
  swapStringChar(s, f, l) {
    var ns = "";
    var ch = [];
    ch = s.split('');//split the string into array.
    var temp = ch[f];//swaping
    ch[f] = ch[l];
    ch[l] = temp;
    for (let index = 0; index < s.length; index++) {//converting array into string.
      ns = ns + ch[index];

    }
    return ns;
  },

  /**
   * @description : to print all the permutation of string.
   * @param {String} str 
   * @param {String} s 
   * @param {first index} f 
   * @param {last index} l 
   */
  stringPermutation(str, s, f, l) {
    if (f == l) {
      console.log(s);
      str = str + s;
    } else {
      for (var i = f; i <= l; i++) {
        s = this.swapStringChar(s, f, i); //swaping character
        str = this.stringPermutation(str, s, f + 1, l); //recursion
        s = this.swapStringChar(s, f, i); //backtracking
      }
    }
    return str;
  },
  /**
   * @description: return the time in seconds from 1970.
   */
  currentSecond() {
    var dt = new Date();
    return (dt.getTime() / 1000);
  },
  /**
   * @description : Print the elapsed time between start time and stop time.
   * @param  rl 
   */
  stopwatch(rl) {
    var start = 0, stop = 0;
    rl.question('Press  1 to start timer', (ans) => {

      start = this.currentSecond();//set current seconds.
      rl.question('Press 2 to stop timer ', (ans1) => {

        stop = this.currentSecond();//set current seconds.
        console.log("elapsed time is " + (stop - start) + " seconds");//print elapsed time.
        rl.close();
      });
    });
  },
  /**
   * @description : Print the roots of Quadratic equation.
   * @param       : a 
   * @param       : b 
   * @param       : c 
   */
  roots(a, b, c) {
    var delta = (b * b) - (4 * a * c);
    console.log(delta);
    if (delta == 0) {
      var root = -b / (2 * a);
      console.log(root)
    } else if (delta > 0) {
      var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
      var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
      console.log("First root " + root1);
      console.log("Second root " + root2);
    } else if (delta < 0) {
      var root1 = -b / 2 * a;
      var root2 = (Math.sqrt(-delta)) / 2 * a;
      console.log("First root : " + root1, "i", root2);
      console.log("Second root : " + root1, "-i", root2);
    } else {
      console.log("Invalid number");
    }

  },
  /**
   * @description : calculate the value of WindChill and print windchill.
   * @param       : temp 
   * @param       : vol 
   */
  windChill(temp, vol) {
    if (temp <= 50 && vol > 3 && vol < 120) {
      var w = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(vol, 0.16);//calculate.
      console.log("Windchill for temperature " + temp + " and wind speed " + vol + " is " + w);
    } else {
      console.log("Wrong temperature or wind speed");
    }
  },
  /**
   * @description : print the distint coupan number on the user requirement and also print number 
   *                of time random method runs.
   * 
   */
  coupan(l) {



    var arr = new Array(l);
    var h = 0;
    var count = 0;
    var flag = true;
    while (l > 0) {
      flag = true;
      var n = Math.floor((Math.random() * 10000) + 1000);//geting randomNumber between 0 to Highest value;
      if (n > 9999) {
        n = Math.floor(n / 10);
      }
      count++;//counting of random number.
      for (let index = 0; index < (h + 1) && flag; index++) {
        if (arr[index] == n) {
          flag = false;
        }

      }
      if (flag == true) {
        arr[h++] = n;
        l--;
      }
    }
    this.display2dArray(arr);//display distinct coupan number.



    console.log("Total number of random number needed to generate coupan number is " + count);

  },
  /**
   * @description : for creating 2 dimensional array and taking input in it.and return the array.
   */
  input2DArray() {
    var row = read.question("Enter number of rows you want");
    var col = read.question("Enter number of coloumn you want");
    var arr = [];
    console.log("Enter the element in the array");
    for (let index = 0; index < row; index++) {
      arr.push([]);
      for (let j = 0; j < col; j++) {
        arr[index][j] = read.question("");

      }

    }
    return arr;
  },
  /**
   * @description : for displaying 2 dimensional array.
   * @param       : array 
   */
  display2dArray(array) {
    for (let index = 0; index < array.length; index++) {
      console.log(array[index]);

    }
  },

  /**
   * @description:taking input in 2 dimensional array and print the 2 d array.
   */
  TwoDArray() {
    var arr = this.input2DArray();
    this.display2dArray(arr);
  },
  /**
   * @description : adding of'_' in every location in array for tic-toe game.
   * @param {*} array 
   */
  addele1(array) {
    for (let index = 0; index < 3; index++) {
      for (let j = 0; j < 3; j++) {
        array[index][j] = '_';

      }

    }
    return array;
  },
  /**
   * @description  :check index (r,c) is filled with '_' or not,return true or false.
   * @param {*} r  :row index
   * @param {*} c  :coloumn index
   * @param {*} arr: array 
   */
  checkIndex(r, c, arr) {
    if (arr[r][c] == '_') {
      return true;

    }
    return false;
  },
  /**
   * @description : method for tic toe game if all the row/coloumn/diagonal match with same element
   *                then return true or false.
   * @param   arr 
   */
  isMatch(arr) {
    if ((arr[0][0] == 'x' && arr[0][1] == 'x') && arr[0][2] == 'x') {//checking first row have 'x' or not.
      return true;
    }
    else if ((arr[0][0] == '0' && arr[0][1] == '0') && arr[0][2] == '0') {// checking first row have '0' or not.
      return true;
    }
    else if ((arr[1][0] == 'x' && arr[1][1] == 'x') && arr[1][2] == 'x') {
      return true;
    }
    else if ((arr[1][0] == '0' && arr[1][1] == '0') && arr[1][2] == '0') {
      return true;
    }
    else if ((arr[2][0] == 'x' && arr[2][1] == 'x') && arr[2][2] == 'x') {
      return true;
    }
    else if ((arr[2][0] == '0' && arr[2][1] == '0') && arr[2][2] == '0') {
      return true;
    }





    //coloumn condition
    else if ((arr[0][0] == 'x' && arr[1][0] == 'x') && arr[2][0] == 'x') {// checking for coloumn also
      return true;
    }
    else if ((arr[0][0] == '0' && arr[1][0] == '0') && arr[2][0] == '0') {
      return true;
    }
    else if ((arr[0][1] == 'x' && arr[1][1] == 'x') && arr[2][1] == 'x') {
      return true;
    }
    else if ((arr[0][1] == '0' && arr[1][1] == '0') && arr[2][1] == '0') {
      return true;
    }
    else if ((arr[0][2] == 'x' && arr[1][2] == 'x') && arr[2][2] == 'x') {
      return true;
    }
    else if ((arr[0][2] == '0' && arr[1][2] == '0') && arr[2][2] == '0') {
      return true;
    }

    //diagonal condition
    else if ((arr[0][0] == 'x' && arr[1][1] == 'x') && arr[2][2] == 'x') {
      return true;
    }
    else if ((arr[0][0] == '0' && arr[1][1] == '0') && arr[2][2] == '0') {
      return true;
    }

    else if ((arr[0][2] == 'x' && arr[1][1] == 'x') && arr[2][0] == 'x') {
      return true;
    }
    else if ((arr[0][2] == '0' && arr[1][1] == '0') && arr[2][0] == '0') {
      return true;
    }
    return false;
  },

  /**
   * @description :  method to play a Cross Game or Tic­Tac­Toe Game. Player 1 is the Computer
   *                 and the Player 2 is the user.method uses 2 d array and random method.
   */
  ticTac() {
    var arr = [[], [], []];
    arr = this.addele1(arr);
    this.display2dArray(arr);//for display array.
    var c1 = 0;
    var user = true;
    var com = true;
    var flag1 = true;
    while (c1 < 9 && user && com) {//work upto 9 chances.

      var flag = true;
      console.log("user chance");


      while (flag) {//take user input .
        console.log("enter index row,coloumn");
        var r = read.question("");
        var c = read.question("");
        if (r < 3 && c < 3) {
          if (this.checkIndex(r, c, arr)) {//check for index is empty or not.if empty then set value else
            //again take input of user.
            arr[r][c] = 'x';
            c1++;
            flag = false;
            this.display2dArray(arr);//display array again.
            console.log("User c" + c1);
          } else {
            console.log("Index is filled re input index");
          }
        } else {
          console.log("Please enter correct row or coloumn index");
        }
      }
      flag = true;
      if (this.isMatch(arr)) {//for checking if row or coloumn match.
        console.log("User win the match");
        user = false;
        flag = false;
        flag1 = false;

      }
      if (flag1 && c1 < 9) {
        console.log();
        console.log();
        console.log("Computer chance");

      }
      while (flag && c1 < 9) {//taking input from computer using random method.

        var r = Math.floor(Math.random() * 3);
        var c = Math.floor(Math.random() * 3);

        if (this.checkIndex(r, c, arr)) {//check index is blank or not .
          arr[r][c] = '0';
          this.display2dArray(arr);//display the array.
          flag = false;
          c1++;
          console.log("comp c " + c1);
        }
      }
      flag = true;
      if (this.isMatch(arr)) {// check if row or coloumn match.
        if (flag1)
          console.log("Computer win the match");
        com = false;
        flag = false;

      }
      console.log();
      console.log();


    }
    if (user == true && com == true) {
      console.log("Draw match ,No win No Loss");
    }

  },

  sumZero(arr) {
    var n = arr.length;  // for storing length of array.
    var brr = [];// to storing distinct numbers whose sum is equals to zero.
    var index = 0;//local variable.
    var sum;// variable to store sum of 3 integers
    var count = 0;
    var flag = true;
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        flag = true;
        for (let k = j + 1; k < n; k++) {
          sum = arr[i] + arr[j] + arr[k];
          if (sum == 0 && flag) { //to check if sum is equals to zero.
            brr[index++] = arr[i];
            brr[index++] = arr[j];
            brr[index++] = arr[k];
            arr[i] = arr[n - 1];  //if sum is equals to zero then storing that numbers to last
            arr[j] = arr[n - 2];  // of array and decreases the size of array to take distinct.
            arr[k] = arr[n - 3];   // elements.
            n = n - 3;
            j--;
            count++;      // for calculating number of triplets
            flag = false;

          }

        }
      }
    }

    console.log("Total number of triplet is " + count);
    for (let i = 0; i < index; i++) {
      console.log(brr[i]);  // for printing the triplets 
    }



  }
}