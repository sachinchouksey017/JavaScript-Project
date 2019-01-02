var dis = require('util');
var fileStream = require('fs');
var que = require('../DataStructurePrograms/QueueUsingLinkedList');
var dayQue = new que.QueueLinked;
var dateQue = new que.QueueLinked;
var read = require('readline-sync');
var linked = require('../DataStructurePrograms/LinkedList');
var stak = require('../DataStructurePrograms/StackUsingLinkedList');
module.exports = {
    writeFile(fileName, data) {
        const fs = require('fs');
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    },

    /**
    *   purpose   :Read the Text from a file, split it into words and arrange it as Linked List.
    *              Take a user input to search a Word in the List. If the Word is not found then add it
    *              to the list, and if it found then remove the word from the List. In the end save the
    *              list into a file
    */
    /*
     *  @descriptipn: Take User input to search the word and save the file after update
     *  @function:
     */
    unOrdered() {
        var f = fileStream.readFileSync('String.txt', 'utf8');//create string of file data.

        console.log(f);
        var arr = f.split(' ');


        var ll = new linked.LinkedList;// creating of linked list object.
        for (let index = 0; index < arr.length; index++) {
            ll.add(arr[index]);// add the word to linked list.
        }
        var word = read.question('Enter the word to search in list ');
        if (isNaN(word)) {
            if (ll.search(word)) {//searching the word to linked list
                ll.remove(word);
            } else {
                ll.add(word);
            }
            var str = ll.getData();//get linked list data to string.
            console.log("After updating the List ");
            this.writeFile('String.txt', str);//for write the data to file
            ll.display();
        } else {
            console.log("Wrong input");
        }

    },

    /**
    *   purpose   :­ Read a List of Numbers from a file and arrange it ascending Order in a Linked List.
    *               Take user input for a number, if found then pop the number out of the list
    *               else insert the number in appropriate position
    */
    /*
     *  @descriptipn: Take User input to search the Number and save the file after update
     *  @function:
     */
    ordered() {
        var string = fileStream.readFileSync('number.txt', 'utf8');//taking file data in form of string.

        var arr = string.split(' ');//split string in the array.
        var ll = new linked.LinkedList;//creating linked list object.
        for (let index = 0; index < arr.length; index++) {
            ll.add(Number(arr[index]));//add words to linked list.

        }
        ll.addAscending();//arrange linked list in ascending order
        console.log("Linked list elements are ");
        ll.display();//display linked list.
        var num = read.question("Enter the Number you want to search ");
        if (!isNaN(num)) {//check it is number or not.
            if (ll.search(num)) {
                ll.remove(num);

            } else {
                ll.add(num);
                ll.addAscending();

            }
            var str = ll.getData();
            this.writeFile('number.txt', str);
            console.log("The linked list elements are ");
            ll.display();

        } else {
            console.log("please enter correct number");
        }


    },

    /**
    * purpose     :Take an Arithmetic Expression where parentheses are used to order the performance
    *              of operations. Ensure parentheses must appear in a balanced fashion.
    * @description
    * @author     :  Sachin chouksey
    * @version    :  1.0
    * @since      :  28-12-18
    * @returns    :  boolean value
    */

    balancedExpression() {
        var stk = require('../DataStructurePrograms/Stack');
        var stak = new stk.Stack;
        var string = read.question("Enter the arthmetic expression equation ");//user input
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
        if (stak.size != 0) {
            return false;
        }
        return true;



    },
    /**
     * purpose     : Program which creates Banking Cash Counter where people come in to deposit Cash and 
     *               withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw
     *               money and dequeue the people. Maintain the Cash Balance.
     * @description
     * @param      :Nothing
     * @returns    :boolean value.
     * 
     */
    bankingCash() {
        let bankbalance = 100000000;//initialise the bank amount.
        let startingbankbalance = bankbalance;
        var que = require('../DataStructurePrograms/Queue');
        var line = new que.Queue;//creating queue object.
        var amount;
        var flag = false;
        var people = read.question("How many person are in the Queue ");
        if (isNaN(people)) {
            return -1;
        }
        for (let i = 0; i < people; i++) {
            var what = read.question("What you want \n For Deposit : press 1 \n For Withdraw : press 2 \n");
            if (what == 1) {
                amount = Number(read.question("Enter the amount you want to deposit "));
                if(!isNaN(amount)){
                line.enqueue(amount);//enqueue the people in queue.
                flag = true;
                }else{
                    console.log("Please enter correct amount ");
                    console.log("\n\n");
                }
            } else if (what == 2) {
                amount = Number(read.question("Enter the amount you want to Withdraw "));
                if(!isNaN(amount)){
                    line.enqueue(-amount);//enqueue the people in queue.
                    flag = true;
                    }else{
                        console.log("Please enter correct amount ");
                        console.log("\n\n");
                    }
            } else {
                console.log("Wrong Choice ");
            }
            if (flag) {
                amount = line.dequeue();
                bankbalance = bankbalance + amount;
                flag = false;
            }



        }
        if (startingbankbalance == bankbalance)
            return true;
        return false;



    },
    /**
     * @description    : to calculate factorial of a number.
     * @param {Integer} n 
     * @returns        : integer
     */
    factorial(n) {
        let sum = 1;
        while (n > 0) {
            sum = sum * n;
            n--;
        }
        return sum;
    },
    /**
     * purpose     : A method for find how many different binary search tree can be created 
     *               using number of nodes .
     * @description
     * @param      : Nothing
     * @returns    : Nothing
     * 
     */

    BinarySearchTree() {
        var testCases = read.question("How many test cases you want ");
        if(isNaN(testCases)){
            console.log("Please prvide correct input ");
            return;
        }
        var arr = [];
        console.log("Enter the Number of Nodes you want for each test cases");
        for (let i = 0; i < testCases; i++) {
              var n=read.question('');
              if(isNaN(n)){
                console.log("Please prvide correct input ");
                return;
              }
            arr[i] = n;
        } var numinator, denominator;
        for (let i = 0; i < testCases; i++) {
            numinator = this.factorial(2 * arr[i]);
            denominator = (this.factorial(Number(arr[i]) + 1) * this.factorial(arr[i]));
            console.log("Total number of Binary search Tree generated through " + arr[i], " Nodes is ");
            console.log(Math.floor(numinator / denominator));

        }
    },
    /**
 * purpose     : A method for check a year is leap year or not.
 * @description
 * @param      : Year
 * @returns    : Boolean value.
 * 
 */
    checkLeap(year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        return false;
    },
    /**
     * 
     * purpose     :  A method for printing  Calendar takes the month and year as command­line 
     *                arguments and prints the Calendar of the month. 
     * @param {Integer} month 
     * @param {Integer} year 
     * @returns    : Nothing;
     */

    calender(month, year) {
        var utility = require('../Algorithm Programs/Utility');
        var montharr = ["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
        var d = utility.dayOfWeek(1, month, year);
        var dayarr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.checkLeap(year)) {
            dayarr[2] = 29;
        }

        console.log("   " + montharr[month] + "  " + year);

        console.log(" SUN MON TUE WED THU FRI SAT ");//for printing week day

        for (let j = 0; j < (d * 4 + 2); j++) {
            dis.print(" ");

        }


        var n = dayarr[month];
        for (let i = 1; i <= n; i++) {
            if (i < 10)
                dis.print(i, "   ");
            else {
                dis.print(i, "  ");
            }

            if ((d + i) % 7 == 0) {//for changing the line.
                console.log();
                dis.print("  ");
            }
        }
        console.log("\n\n");

    },
    /**
     * 
     * purpose     :  A method for printing  Calendar takes the month and year as command­line 
     *                arguments and prints the Calendar of the month.Using Queue Concept.
     * @param {Integer} month 
     * @param {Integer} year 
     * @returns    : Nothing;
     */
    calenderQueue(month, year) {
        var utility = require('../Algorithm Programs/Utility');


        var d = utility.dayOfWeek(Number(1), Number(month), Number(year));

        var montharr = ["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
        var dayarr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var daybrr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        // var dayQue = new que.QueueLinked;
        // var dateQue = new que.QueueLinked;
        console.log("\n\n     Calender  " + montharr[month] + "  " + year);
        //console.log(" SUN MON TUE WED THU FRI SAT");

        for (let k = 0; k < 7; k++) {
            dayQue.enqueue(daybrr[k]); // Adding day in queue .
        }
        var daystr = dayQue.getelement(); //taking day in string form and split in array form.
        var brr = daystr.split(',');
        for (let l = 0; l < brr.length; l++) {//for display the days 
            dis.print(" ", brr[l]);

        }

        if (this.checkLeap(year)) {   // for checking year is leap or not.
            dayarr[2] = 29;
        }

        for (let i = 1; i <= dayarr[month]; i++) {// for storing dates in queue 
            dateQue.enqueue(i);

        }
        console.log();
        for (let j = 0; j < (d * 4 + 2); j++) {//for printing spaces
            dis.print(" ");

        }
        var datestr = dateQue.getelement();//to take back dates in the form of string from queue
        var arr = datestr.split(',');
        for (let j = 1; j <= dayarr[month]; j++) {
            if (j < 10)
                dis.print(arr[(j - 1)], "   ");
            else {
                dis.print(arr[j - 1], "  ");
            }
            if ((d + j) % 7 == 0) {
                console.log();
                dis.print("  ");
            }

        }
        console.log("\n\n");

    },/**
     *@purpose :  A program to store the Queue in two Stacks. Stack here is also implemented
                 using Linked List and display the calender.
     * @param {*} month 
     * @param {*} year 
     */
    modifyCalender(month, year) {
        var stk = new stak.StackLinkedList;
        var stk1 = new stak.StackLinkedList;
        var utility = require('../Algorithm Programs/Utility');
        var d = utility.dayOfWeek(Number(1), Number(month), Number(year));
        var dis = require('util');
        var montharr = ["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
        var dayarr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var daybrr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var dayQue1 = new que.QueueLinked;
        var dateQue1 = new que.QueueLinked;//creating queue linked list object.
        if (this.checkLeap(year)) {   // for checking year is leap or not.
            dayarr[2] = 29;
        }
        console.log("\n\n     Calender  " + montharr[month] + "  " + year);
        //console.log(" SUN MON TUE WED THU FRI SAT");

        for (let k = 0; k < 7; k++) {
            dayQue1.enqueue(daybrr[k]); // Adding day in queue .
            stk.push(dayQue1.dequeue());
        }
        for (let index = 0; index < dayarr[month]; index++) {
            dateQue1.enqueue(index + 1);
            stk1.push(dateQue1.dequeue());
        }
        var nstk = stk.reveseStack();//for reversing the stack
        var nstk1 = stk1.reveseStack();//for reversing the stack


        for (let k = 0; k < 7; k++) {//pop the elements from stack1
            dis.print(" " + nstk.pop());
        }
        console.log();
        for (let j = 0; j < (d * 4 + 2); j++) {//for printing spaces
            dis.print(" ");

        }
        for (let j = 1; j <= dayarr[month]; j++) {
            var ch = nstk1.pop();//pop the element from stack 2;
            if (ch < 10)
                dis.print(ch, "   ");
            else {
                dis.print(ch, "  ");
            }
            if ((d + ch) % 7 == 0) {
                console.log();
                dis.print("  ");
            }

        }
        console.log("\n\n\n");





    },/**
        *purpose     :  A program for find the Prime numbers. Store the prime numbers 
        *               in a 2D Array, the first dimension represents the range 0-­100,100-­200, and 
        *               so on. While the second dimension represents the prime numbers.
        *
        */
    primeNo2D() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var array = [[" 0-100  "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000"]];
        var i = 0, j = 1, range = 100;
        for (let prime = 2; prime <= 1000; prime++) {
            if (utilityAlgo.isPrime(prime)) {//for checking the number is prime or not 
                if (prime <= range) {        //and store in the array
                    array[i][j] = prime;     //for first dimension 0-100
                    j++;                     //second 100-200,so on
                } else {
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }

            }

        }



        console.log("Prime Number in the range are");

        for (let i = 0; i < array.length; i++) {//for printing prime numbers in the ranges
            for (let j = 0; j < array[i].length; j++) {
                dis.print(array[i][j] + " ");
            }
            console.log();
        }
        console.log("\n");
    },
    /**
     * purpose     :  A program for printing the Prime Number  and store only the numbers
     *               in that range that are Anagrams. Further store in a 2D Array the
     *               numbers that are Anagram.
     */
    primeNoAnagram2D() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var arr = [];
        var array = [[" 0-100   "], ["100-200  "], ["200-300  "], ["300-400  "], ["400-500  "], ["500-600  "], ["600-700  "], ["700-800  "], ["800-900  "], ["900-1000 "]];
        for (let k = 2; k <= 1000; k++) {
            if (utilityAlgo.isPrime(k)) {//store the numbers that are prime in the range. 
                arr.push(k);
            }

        } var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {//for comparing two prime are anagram or not.
            for (let j = i + 1; j < arr.length; j++) {
                if (utilityAlgo.isAnagram(arr[i], arr[j])) {//check two primes angram or not

                    if (arr[i] <= range) {//
                        if (arr[j] <= range) {//store the two anagram in array
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }





                }

            }
        }
        console.log("The Number which are prime and anagram ");
        for (let i = 0; i < array.length; i++) {
            dis.print("   [ ");
            for (let j = 0; j < array[i].length; j++) {
                dis.print(array[i][j]);//for printing the number that are angaram and prime.
                if (j == 0) {
                    dis.print(" ==> ");
                } else {
                    if (j != array[i].length - 1)
                        dis.print(",")
                }


            }
            dis.print("]");
            console.log();
        }
        console.log("\n");

    },
    /**
     *  purpose     :  A program for printing the Prime Number  and store only the numbers
     *                 in that range that are Anagrams. Further store in a 2D Array the
     *                 numbers that are Anagram.Using stack implemented through linked list
     */

    primeNoStack() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var arr = [];
        for (let k = 2; k <= 1000; k++) {
            if (utilityAlgo.isPrime(k)) {//for checking number is prime or not.
                arr.push(k);// and store it into array.
            }

        } var range = 100, k = 0;
        var stk = new stak.StackLinkedList;//stack object create
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utilityAlgo.isAnagram(arr[i], arr[j])) {// if two prime are anagram
                    stk.push(arr[i]);   // then store into array.
                    stk.push(arr[j]);
                    k++;

                }

            }
        }
        console.log("The Numbers which are prime and Anagram ");
        stk.displayAnagram();//display the stack
        console.log("\n\nThe Numbers which are prime and anagram in reverse order ");
        for (let index = 0; index < 2 * k; index++) {
            dis.print(stk.pop());//for printing in reverse order pop one by one elements.
            if (index < (2 * k - 1))
                dis.print(" ==> ");


        }
    },
    /**
     * purpose     : A program for add the Prime Numbers that are Anagram in the Range of 
     *               0 ­-1000 in a Queue using the Linked List and Print the Anagrams from 
     *               the Queue.
     */
    primeNoQueue() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var arr = [];
        for (let k = 2; k <= 1000; k++) {
            if (utilityAlgo.isPrime(k)) {//add the prime number to queue.
                arr.push(k);
            }

        }
        var primeQ = new que.QueueLinked;//creating object of queue.
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utilityAlgo.isAnagram(arr[i], arr[j])) {//checking the two prime number are anagram
                    primeQ.enqueue(arr[i]);//then enqueue to queue.
                    primeQ.enqueue(arr[j]);

                }

            }
        }
        var str = primeQ.getelement();
        console.log("The numbers which are prime and anagram ");
        console.log(str);


    },
}