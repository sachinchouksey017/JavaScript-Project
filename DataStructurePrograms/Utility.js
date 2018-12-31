var dis = require('util');
var fileStream = require('fs');
var que = require('../DataStructurePrograms/QueueUsingLinkedList');
var dayQue = new que.QueueLinked;
var dateQue = new que.QueueLinked;
var read = require('readline-sync');
var linked = require('../DataStructurePrograms/LinkedList');
var stak = require('../DataStructurePrograms/StackUsingLinkedList');
module.exports = {
    writeFile(fileName,data){
        const fs = require('fs');
fs.writeFile(fileName, data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
    },
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
        var str=ll.getData();
        this.writeFile('String.txt',str);
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
            var str=ll.getData();
            this.writeFile('number.txt',str);
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
if(stak.size!=0){
    return false;
}
        return true;



    },

    bankingCash() {
        let bankbalance = 100000000;
        let startingbankbalance = bankbalance;
        var que = require('../DataStructurePrograms/Queue');
        var line = new que.Queue;
        var amount;
        var flag = false;
        var people = read.question("How many person are in the Queue ");
        for (let i = 0; i < people; i++) {
            var what = read.question("What you want \n For Deposit : press 1 \n For Withdraw : press 2 \n");
            if (what == 1) {
                amount = Number(read.question("Enter the amount you want to deposit "));
                line.enqueue(amount);
                flag = true;
            } else if (what == 2) {
                amount = Number(read.question("Enter the amount you want to Withdraw "));
                line.enqueue((-amount));
                flag = true;
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
    factorial(n) {
        let sum = 1;
        while (n > 0) {
            sum = sum * n;
            n--;
        }
        return sum;
    },


    BinarySearchTree() {
        var testCases = read.question("How many test cases you want ");
        var arr = [];
        console.log("Enter the Number of Nodes you want for each test cases");
        for (let i = 0; i < testCases; i++) {
            arr[i] = read.question('');
        } var numinator, denominator, num1, num2;
        for (let i = 0; i < testCases; i++) {
            numinator = this.factorial(2 * arr[i]);
            denominator = (this.factorial(Number(arr[i]) + 1) * this.factorial(arr[i]));
            console.log("Total number of Binary search Tree generated through " + arr[i], " Nodes is ");
            console.log(Math.floor(numinator / denominator));

        }
    },
    checkLeap(year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        return false;
    },

    calender(month, year) {
        var utility = require('../Algorithm Programs/Utility');
        var montharr = ["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
        var d = utility.dayOfWeek(1, month, year);
        var dayarr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.checkLeap(year)) {
            dayarr[2] = 29;
        }

        console.log("   " + montharr[month] + "  " + year);

        console.log(" SUN MON TUE WED THU FRI SAT ");

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

            if ((d + i) % 7 == 0) {
                console.log();
                // for (let j = 0; j < (d*4+2); j++) {
                //     dis.print(" ");

                // }

                dis.print("  ");
            }
        }
        console.log("\n\n");

    },
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
        var datestr = dateQue.getelement();//to take back date from queue
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

    },
    modifyCalender() {
        var stk = new stak.StackLinkedList;
        stk.push(dayQue);
        stk.push(dateQue);
        var str = stk.pop();
        var h = str.getelement();
        console.log(h);
        //  stk.display();
        //  stk.push(dateQue);
        //  stk.display();




    },
    primeNo2D() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var array = [[" 0-100  "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000"]];
        var i = 0, j = 1, range = 100;
        for (let prime = 2; prime <= 1000; prime++) {
            if (utilityAlgo.isPrime(prime)) {
                if (prime <= range) {
                    array[i][j] = prime;
                    j++;
                } else {
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }

            }

        }



        console.log("Prime Number in the range are");

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                dis.print(array[i][j] + " ");
            }
            console.log();
        }
        console.log("\n");
    },

    primeNoAnagram2D() {
        var utilityAlgo = require('../Algorithm Programs/Utility');
        var arr = [];
        var array = [[" 0-100   "], ["100-200  "], ["200-300  "], ["300-400  "], ["400-500  "], ["500-600  "], ["600-700  "], ["700-800  "], ["800-900  "], ["900-1000 "]];
        for (let k = 2; k <= 1000; k++) {
            if (utilityAlgo.isPrime(k)) {
                arr.push(k);
            }

        } var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utilityAlgo.isAnagram(arr[i], arr[j])) {

                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
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
                dis.print(array[i][j]);
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

primeNoStack(){
    var utilityAlgo = require('../Algorithm Programs/Utility');
    var arr=[];
    for (let k = 2; k <= 1000; k++) {
        if (utilityAlgo.isPrime(k)) {
            arr.push(k);
        }

    } var range = 100, k = 0;
    var stk=new stak.StackLinkedList;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (utilityAlgo.isAnagram(arr[i], arr[j])) {
               stk.push(arr[i]);
               stk.push(arr[j]);
               k++;
                 
            }

}
}
console.log("The Numbers which are prime and Anagram ");
stk.displayAnagram();
console.log("\n\nThe Numbers which are prime and anagram in reverse order ");
for (let index = 0; index <2*k; index++) {
    dis.print(stk.pop());
    if(index<(2*k-1))
    dis.print(" ==> ");

    
}
},
primeNoQueue(){
    var utilityAlgo = require('../Algorithm Programs/Utility');
    var arr=[];
    for (let k = 2; k <= 1000; k++) {
        if (utilityAlgo.isPrime(k)) {
            arr.push(k);
        }

    } var range = 100, k = 0;
    var primeQ=new que.QueueLinked;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (utilityAlgo.isAnagram(arr[i], arr[j])) {
               primeQ.enqueue(arr[i]);
               primeQ.enqueue(arr[j]);
                 
            }

}
}
primeQ.displayAnagram();

},
hashingFunction(){

}
}