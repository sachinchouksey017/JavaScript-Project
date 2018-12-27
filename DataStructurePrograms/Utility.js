
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
}