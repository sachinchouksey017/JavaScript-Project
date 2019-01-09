var dt = new Date;
var read = require('readline-sync');
module.exports = {
    /**
     * purpose:In this method we have to calculate price for every inventory read from json file.
     * @param {*} object 
     * @returns : Nothing
     */

    inventory(object) {
        //converting every string inventory to object
        try{
        var rice = object.Rice;
        var wheats = object.Wheats;
        var pulse = object.Pulse;
        for (key in rice) {
            console.log("\n");
            console.log(rice[key]);
            //total price for rice
            console.log("Total price for  " + rice[key].name + " is " + rice[key].price * rice[key].weight);
        }
        for (key in wheats) {
            console.log("\n");
            console.log(wheats[key]);//printing the inventory object by using key 
            //total price for wheats
            console.log("Total price for  " + wheats[key].name + " is " + wheats[key].price * wheats[key].weight);
        }
        for (key in pulse) {
            console.log("\n");
            console.log(pulse[key]);
            //total price for pulse;
            console.log("Total price for  " + pulse[key].name + " is " + pulse[key].price * pulse[key].weight);
        }
    }catch(err){
        console.log("Error in inventory ");
    }

    },
    /**
     * purpose  :  Read the Json file and replace the words from file using regex and display it.
     * @param {string} name 
     * @param {string} fullname 
     * @param {number} mobilenumber 
     * @param {number} date 
     */
    regex(name, fullname, mobilenumber, date) {
        var file = require('fs');//require the file
        try {
            var data = file.readFileSync('regex.txt', 'utf8');//read the file in form string.
            data = data.replace(/"<<name>>"/g, name);//replace the name
            data = data.replace(/"<<fullname>>"/g, fullname);
            data = data.replace(/"91-xxxxxxxxxx"/g, mobilenumber);
            data = data.replace("xx/xx/xxxx", date);
            console.log();
            console.log(data);
        } catch (err) {
            console.log("Error !!!");
        }
    },
    /**
     * purpose     :  Read the Json file having properties Details for stock with properties
     *                stockname, noOfShares, shareprice.we have to calculate total share price for
     *                every stock.
     * @param {JSON object} obj 
     */
    stock(obj) {
      var flag=true;
        var stk = obj.stock;
        console.log();
      var n=read.question("how many stock you want to enter ");
      while(flag){
          if(!isNaN(n)){
            flag=false;
          }else{
            n=read.question("wrong input !!! how many stock you want to enter ");
          }
      }
      for (let i = 0; i < n; i++) {
         this.addStock(obj);
          
      }
        for (var key in stk) {//printing the total value for each stock
            console.log(stk[key]);
            console.log("total value for " + stk[key].stockname + " is " + stk[key].No_of_shares * stk[key].share_price);
        }
        var total = 0;//var for adding total shares amount
        for (var key in stk) {
            total = parseInt(total) + parseInt(stk[key].No_of_shares * stk[key].share_price)
        }
        console.log("Total value for total shares is " + total);//print total amount

        //console.log(stk[]);
    },
    /**
     * purpose: Taking stock name as input and validate it. 
     */
    inStockName() {
        var name = read.question("Enter the name of stock ");
        var flag = true;
        while (flag) {//for validating inputs

            if (isNaN(name)) {//for validate the name 
                flag = false;
            } else {
                var name = read.question("Wrong input !!!...Please enter correct name of Stack  ");
            }
        }
        return name;
    },
     /**
     * purpose: Taking stock No as input and validate it. 
     */
    inNoOfShare() {
        var flag = true;
        var Noofshares = read.question("Enter how many shares you have ");
        while (flag) {

            if (!isNaN(Noofshares)) {//for validate full name
                flag = false;
            } else {
                var Noofshares = read.question("Wrong input !!!...Please enter No of shares in integer   ");
            }
        }
        return Noofshares;
    },
     /**
     * purpose: Taking stock Price as input and validate it. 
     */
    inSharePrice() {
        var flag = true;
        var shareprice = read.question(" Enter the price of your share ");
        while (flag) {

            if (!isNaN(shareprice)) {
                flag = false;
            } else {
                var shareprice = read.question("Wrong input !!!...Please enter  correct price of shares ");
            }
        }
        return shareprice;
    },
     /**
     * purpose: To add the stock data to stock object. 
     */
    addStock(object) {
        var stockobj = object.stock;
        var stkname = this.inStockName();
        var stkNoofshare = parseInt(this.inNoOfShare());
        var stksharePrice = parseInt(this.inSharePrice());
        stockobj.push({
            stockname: stkname,
            No_of_shares: stkNoofshare,
            share_price: stksharePrice
        });
        console.log(object);

    },
    /**
     * purpose:To Edit the stock data from object
     * @param {*} object 
     * @param {*} file 
     */
    editStock(object, file) {
        var val = -1;
        var stockobj = object.stock;
        var name = this.inStockName();
        for (key in stockobj) {
            if (stockobj[key].stockname == name) {
                val = key;
            }
        }
        if (val == -1) {
            console.log("No record found ");
            return;
        }
        console.log(stockobj[val]);
        var ch = Number(read.question('\n1. Edit StockName.\n2. Edit No of Share.\n3. Edit Stock Price\n4. Exit'));
        switch (ch) {
            case 1:
                value = this.inStockName();
                stockobj[val].stockname = value;
                break;
            case 2:
                value = this.inNoOfShare();
                stockobj[val].No_of_shares = value;
                break;
            case 3:
                value = this.inSharePrice();
                stockobj[val].share_price = value;
                break;

            case 4:
                return;
            default:
                console.log("wrong Input");
                return;

        }
    },
    /**
     * purpose: To delete the data from stock object.
     * @param {*} object 
     */
    deleteStock(object) {
        var stockobj = object.stock;
        var name = this.inStockName();
        var val = -1;
        //searching the data from object
        for (key in stockobj) {
            if (stockobj[key].stockname == name) {
                val = key;
            }
        }
        if (val == -1) {
            console.log("No record found ");

        }
        console.log(stockobj[val]);
        var ch = read.question("Are You Sure \n1.Delete. \n2.Exit ");
        if (ch == 1) {
            stockobj.splice(val, 1);
            console.log(stockobj);
            //  file.writeFileSync('Address.json',JSON.stringify(object));

        } else {
            console.log("wrong input ");
            return;
        }
    },
    /**
     * purpose: To display the Stock object
     * @param {*} object 
     */
    displayStock(object) {
        var stockobj = object.stock;
        for (var key in stockobj) {
            console.log(stockobj[key]);
        }
    },
    /**
     * purpose:To Save the object to file
     * @param {*} object 
     * @param {*} file 
     */
    saveStock(object, file) {
        try {
            file.writeFileSync('inventorymanage.json', JSON.stringify(object));
        } catch (err) {
            console.log("error in file");
        }
        console.log("file save successfully ");
    },
    /**
     * purpose     :  A program to Create InventoryManager to manage the Inventory. The 
     *                Inventory Manager will use InventoryFactory to create Inventory Object
     *                from JSON. The InventoryManager will call each Inventory Object in its list 
     *                to calculate the Inventory Price and then call the Inventory Object to return
     *                the JSON String.
     * @returns    : Nothing
     */
    inventoryManage(object, file) {

        var key = Number(read.question("1.Add Stock\n2.Edit Stock\n3.Delete Stock\n4.Display\n5.Save into file\n6.Exit  "));
        switch (key) {
            case 1:
                this.addStock(object);
                return this.inventoryManage(object, file);
            case 2:
                this.editStock(object);
                return this.inventoryManage(object, file);
            case 3:
                this.deleteStock(object, file);
                return this.inventoryManage(object, file);
            case 4:
                this.displayStock(object);
                return this.inventoryManage(object, file);
            case 5:
                this.saveStock(object, file);
                return this.inventoryManage(object, file);
            case 6:
                break;
            default:
                console.log("Wrong Input  ");
                return this.inventoryManage(object, file);
        }


    },
    /**
     * purpose: a method which returns all the card in mixing form. 
     */
    giveCards() {
        var suit = ["♣️", "♦️", "♥️", "♠️"];
        var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        var cards = new Array();
        var n = suit.length * rank.length;
        for (let i = 0; i < suit.length; i++) {//adding of all 52 cards in array

            for (let j = 0; j < rank.length; j++) {
                cards.push("" + rank[j]+ suit[i] );

            }

        }
        var l, temp;
        for (let index = 0; index < n; index++) {//mixing all the cards
            var l = Math.floor(Math.random() * n);
            temp = cards[l];
            cards[l] = cards[index];//swapping cards
            cards[index] = temp;

        }
        return cards;
    },
    /**
     * purpose     : A method to initialize deck of cards having suit ("Clubs","Diamonds", 
     *              "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", 
     *              "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and
     *               then distribute 9 Cards to 4 Players and Print the Cards the received by 
     *               the 4 Players
     */
    deck() {
        var cards = this.giveCards();//get all cards
        var PersonCards = [[], [], [], []];
        var x = 0;
        for (let person = 0; person < 4; person++) {//distribute the cards in among four person
            for (let index = 0; index < 9; index++) {
                PersonCards[person][index] = cards[index + x]
            }
            x = x + 9;

        }
        console.log("The First persons cards  " + PersonCards[0].join());
        console.log("The Seconds persons cards  " + PersonCards[1].join());
        console.log("The Third persons cards  " + PersonCards[2].join());
        console.log("The Fourth persons cards  " + PersonCards[3].join());




    },
    /**
     * purpose:create a Player Object having Deck of Cards, and having ability to Sort 
     *         by Rank and maintain the cards in a Queue implemented using Linked List.
     * @returns:nothing
     */
    deckExtend() {
        var que = require('../DataStructurePrograms/QueueUsingLinkedList');
        //requiring the player class 
        var playerClass = require('../Object Oriented Programs/Player');
        var cards = this.giveCards();//array containing of cards
        var p = new playerClass.player;//object for player class
        var num = read.question("How many player want to play ");
        if (isNaN(num)) {
            console.log("Please enter correct inputs ");
            return;
        }
        for (let i = 0; i < num; i++) {
            p.addplayer();//add players in game

        } var playerNum = 0;
        //distributing the cards in players
        for (let index = 0; index < cards.length; index++) {
            playerNum = (index % num) + 1;
            p.addCards(playerNum, cards[index]);//give the card one by one to players

        }
        console.log("After sorting the card ");
        for (let index = 0; index < num; index++) {
            console.log();
            //for sorting the cards
            p.sort(index + 1);
            console.log("Player " + (index + 1) + " card is ");
            p.displayCards(index + 1);

        }
    },/**
     * purpose:for search the doctor name in file 
     * @param {*} object 
     * @param {*} file 
     */
    drname(object, file) {
        var drobject = object.Doctor;
        var flag = true;
        var name = read.question("Please enter the Doctor name ");
        while (flag) {//validating
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! please input correct name ");
            }
        }
        flag = true;
        for (key in drobject) {//search the name
            if (drobject[key].Name == name) {
                console.log(drobject[key]);
                flag = false;
                //appointment method to take appointment from user
                var fix = this.drAppointment(object, file);

                if (fix != undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name + " on " + fix);
                    file.writeFileSync('Clinique.json', JSON.stringify(object));
                    return this.clinique(object, file);
                } else {
                    console.log("Your Appointment is not fix ");
                    return this.clinique(object, file);
                }
            }
        }
        if (flag) {
            console.log("No Dr. Available search another doctor");
            return this.drname(object, file);
        }
    },
    drId(object, file) {
        var drobject = object.Doctor;
        var flag = true;

        var Id = read.question("Please enter the Doctor Id ");
        for (key in drobject) {
            if (drobject[key].Id == Id) {
                console.log(drobject[key]);
                flag = false;
                var id = drobject[key].Id;
                var fix = this.drAppointment(object, file);

                if (fix != undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name + " on " + fix);
                    file.writeFileSync('Clinique.json', JSON.stringify(object));
                    return this.clinique(object, file);
                } else {
                    console.log("Your Appointment is not fix ");
                    return this.clinique(object, file);
                }
            }
        }
        if (flag) {
            console.log("No Dr. Available search another doctor");
            return this.clinique(object, file);
        }
    },
    drSpecialization(object, file) {
        var drobject = object.Doctor;
        var flag = true;

        var name = read.question("Please enter the Specialization you want to search ");
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! please input correct Specialization you want to search ");
            }
        }
        flag = true;
        for (key in drobject) {
            if (drobject[key].Specialization == name) {
                console.log(drobject[key]);
                flag = false; var
                    fix = this.drAppointment(object, file);

                if (fix != undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name + " on " + fix);
                    file.writeFileSync('Clinique.json', JSON.stringify(object));
                    return this.clinique(object, file);
                } else {
                    console.log("Your Appointment is not fix ");
                    return this.clinique(object, file);
                }
            }
        }
        if (flag) {
            console.log("No Dr. Available search another doctor");
            return this.clinique(object, file);
        }
    },
    drAvail(object, file) {
        var drobject = object.Doctor;
        var flag = true;

        var name = read.question("Please enter AM/PM/BOTH to search ");
        while (flag) {
            if (name == "AM" || name == "PM" || name == "BOTH") {
                flag = false;
            } else {
                name = read.question("Wrong input !! please input AM/PM/BOTH ONLY ");
            }
        }
        flag = true;
        for (key in drobject) {
            if (drobject[key].Availability == name) {
                console.log(drobject[key]);
                flag = false;
                var fix = this.drAppointment(object, file);

                if (fix != undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name + " on " + fix);
                    file.writeFileSync('Clinique.json', JSON.stringify(object));
                } else {
                    console.log("Your Appointment is not fix ");
                }
            }
        }
        if (flag) {
            console.log("No Dr. Available search another doctor")
        }
    },
    /**
     * purpose:To check the Date is available in json or not if not available the push it.
     * @param {*} appoinobject 
     * @param {*} key 
     * @param {*} Obj 
     * @param {*} file 
     * @param {*} str 
     */
    appoinmentSearch(appoinobject, key, Obj, file, str) {
        for (key1 in appoinobject[key].AppointmentTaken) {
            //for matching the key or date available
            if (appoinobject[key].AppointmentTaken[key1][str] !== undefined) {
                return true;
            }
        }
        return false;
    },
    /**
     * purpose:To check the doctor have slots or not for the date .
     * @param {*} key 
     * @param {*} appoinobject 
     * @param {*} object 
     * @param {*} file 
     * @param {*} str 
     * @param {*} patId 
     * @param {*} date 
     */
    appointLength(key, appoinobject, object, file, str, patId, date) {
        //for search the date is available or not given in form of str.
        var add = this.appoinmentSearch(appoinobject, key, object, file, str);
        //if not available then add or push it
        if (!add) {
            appoinobject[key].AppointmentTaken.push({
                [str]: []
            });
            file.writeFileSync('Clinique.json', JSON.stringify(object));
        }
        //traverse the appointment object.
        for (key1 in appoinobject[key].AppointmentTaken) {
            //for matching only with defined data
            if (appoinobject[key].AppointmentTaken[key1][str] !== undefined) {
                //for check list contain less than  5 patient or not.
                   if (appoinobject[key].AppointmentTaken[key1][str].length < 5) {
                       //if less then 5 patient then add patient to doctor appointment list
                    appoinobject[key].AppointmentTaken[key1][str].push(patId);
                    file.writeFileSync('Clinique.json', JSON.stringify(object));
                    return str;
                } else {
                    //if not 
                    date = date + 1;
                    str = (date) + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
                    return this.appointLength(key, appoinobject, object, file, str, patId, date);

                }
            }
        }
    },/**
     * purpose: To take appointment from doctor.
     * @param {*} object 
     * @param {*} file 
     */
    drAppointment(object, file) {
        //creating appointment object.
        var appoinobject = object.DrAppointment;
        var val = Number(read.question(" For Appointment press 1 \n For Exit press 2 "));
        var date = dt.getDate();
        //generating date and time.
        var str = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
        if (val == 1) {
            var id = read.question("Please enter the Doctor Id ");
            for (key in appoinobject) {
                //search for doctor Id
                if (appoinobject[key].ID == id) {
                    var patId = read.question("Please enter patient Id ");
                    //method for search appointment is available or not.passing the date as argument
                    var val = this.appointLength(key, appoinobject, object, file, str, patId, date);
                    return val;
                }
            }
            //for exit.
        } else if (val == 2) {
            return undefined;
        } else {
            console.log("Wrong input ");
            return this.drAppointment(object, file);
        }

    },
    checkId(object) {
        var flag = true;
        var id = read.question("Please Input Dr. Id ");
        while (flag) {
            if (isNaN(id)) {
                flag = false;
            } else
                id = read.question("Wrong input !!!!Please Input Dr. Id ");
        }
        var drobject = object.Doctor;
        for (key in drobject) {
            if (drobject[key].Id == id) {
                console.log(" This Id is already present ");
                return this.checkId(object);
            }
        }
        return id;
    },
    checkIdPat(object) {
        var flag = true;
        var id = read.question("Please Input Patient. Id ");
        while (flag) {
            if (isNaN(id)) {
                flag = false;
            } else
                id = read.question("Wrong input !!!!Please Input correct Patient. Id ");
        }
        var patobject = object.Patient;
        for (key in patobject) {
            if (patobject[key].ID == id) {
                console.log(" This Id is already present ");
                return this.checkId(object);
            }
        }
        return id;
    },
    RegisterDr(object, file) {
        var id = this.checkId(object);
        var name = read.question("Enter the Name of Doctor ");
        var flag = true;
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! Please input correct name ");

            }
        }
        var special = read.question("Enter the Specialization of Doctor ");
        var flag = true;
        while (flag) {
            if (isNaN(special)) {
                flag = false;
            } else {
                special = read.question("Wrong input !! Please input correct Specialization of doctor ");

            }
        }
        var Avail = read.question("Enter the Availability of Doctor :AM,PM,BOTH ");
        var flag = true;
        while (flag) {
            if (isNaN(Avail) && (Avail == "AM" || Avail == "PM" || Avail == "BOTH")) {
                flag = false;
            } else {
                Avail = read.question("Wrong input !! Please input correct Availability of Doctor ");

            }
        }
        var drobject = object.Doctor;
        drobject.push({

            Id: id,
            Name: name,
            Specialization: special,
            Availability: Avail

        });
        var appointobject=object.DrAppointment;
        var appoint= {"ID": id,
        "AppointmentTaken": []
    }
    appointobject.push(appoint);
        file.writeFileSync('Clinique.json', JSON.stringify(object));
    },
    RegisterPatient(object) {
        var name = read.question("Enter the Name of Patient ");
        var flag = true;
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! Please input correct name ");
            }
        }
        var id = this.checkIdPat(object);
        flag = true;
        var mob = read.question(" Enter Patient Mobile Number ");
        while (flag) {
            if (!isNaN(mob) && mob.length == 10) {
                flag = false;
            } else {
                mob = read.question("Wrong Number!! Please Enter correct Patient Mobile Number ");
            }
        }
        flag = true;
        var age = read.question("Please Enter Patient Age ");
        while (flag) {
            if (!isNaN(age) && age < 110) {
                flag = false;
            } else {
                age = read.question("Wrong Input !!! Please Enter Correct Patient Age ");
            }
        }
        object.Patient.push({
            "Name": name,
            "ID": id,
            "MobileNumber": mob,
            "Age": age
        })
    },
    patname(object) {
        var patobject = object.Patient;
        var flag = true;

        var name = read.question("Please enter the Patient name ");
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! please input correct name ");
            }
        }
        flag = true;
        for (key in patobject) {
            if (patobject[key].Name == name) {

                console.log(patobject[key]);
                flag = false;
            }
        }
        if (flag) {
            console.log("No Patient Available search another Patient");

        }
    },
    patmob(object) {
        var patobject = object.Patient;
        var flag = true;

        var mobileno = read.question("Please enter the Patient Mobile Number ");
        while (flag) {
            if (!isNaN(mobileno) && mobileno.length == 10) {
                flag = false;
            } else {
                mobileno = read.question("Wrong input !! please input correct mobile number ");
            }
        }
        flag = true;
        for (key in patobject) {
            if (patobject[key].MobileNumber == mobileno) {

                console.log(patobject[key]);
                flag = false;
            }
        }
        if (flag) {
            console.log("No Patient Available search another Patient")
        }
    },
    patId(object) {
        var patobject = object.Patient;
        var flag = true;

        var Id = read.question("Please enter the Patient Id ");
        for (key in patobject) {
            if (patobject[key].ID == Id) {
                console.log(patobject[key]);
                flag = false;
            }
        }
        if (flag) {
            console.log("No Patient Available ");
        }
    },
    showAllDr(object) {
        drobject = object.Doctor;
        for (var Key in drobject) {
            console.log();
            console.log(drobject[Key]);
        }
    },
    clinique(object, file) {
        var choice = read.question("What You want \n Press 1 for Search doctor \n Press 2 for Search patient \n press 3 for Register Doctor \n"
            + " Press 4 for Register Patient \n Press 5 for to Show All Doctor \n press 6 for Save File \n press 7 for Exit ");
       //run if according to user choice.
            if (choice == 1) {
            var drchoice = Number(read.question("Search by : \n 1.Name \n 2.ID \n 3.Specialization \n 4.Availability \n 5.Exit "));
            switch (drchoice) {
                case 1:
                //search by name
                    this.drname(object, file);
                    break;
                case 2:
                    this.drId(object, file);
                    break;
                case 3:
                    this.drSpecialization(object, file);
                    break;
                case 4:
                    this.drAvail(object, file);
                    break;
                case 5:
                    break;
                default:
                    console.log("Wrong Choice ");
                    return this.clinique(object, file);
            }
        } else if (choice == 2) {
            //for search the patient ask user to choice
            var patchoice = Number(read.question("Search by : \n 1.Name \n 2.Mobile Number \n 3.Id  \n 4.Exit "));
            switch (patchoice) {
                case 1:
                    this.patname(object);
                    return this.clinique(object, file);
                case 2:
                    this.patmob(object);
                    return this.clinique(object, file);
                case 3:
                    this.patId(object);
                    return this.clinique(object, file);
                case 4:
                    break;
                default:
                    console.log("Wrong Choice !!!");
                    return this.clinique(object, file);

            }

        } else if (choice == 3) {//for register the doctor.
            this.RegisterDr(object, file);
            this.clinique(object, file);//recursively call the method itsel
        } else if (choice == 4) {//register the patient
            this.RegisterPatient(object);
            this.clinique(object, file);
        } else if (choice == 5) {//for show all the data
            this.showAllDr(object);
            this.clinique(object, file);
        } else if (choice == 6) {//for save the file
            file.writeFileSync('Clinique.json', JSON.stringify(object));
            console.log("File Saved Successfully ");
            return this.clinique(object, file);
        } else if (choice == 7) {
            return;
        } else {
            choice = read.question("Wrong Input !!! \n What You want \n Press 1 for Search doctor \n Press 2 for Search patient \n press 3 for Exit ");
            return this.clinique(object, file);
        }
    },

    pFNameInput() {
        var flag = true;
        var name = read.question("Please enter your First name ");
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Please enter your Correct First name ");
            }
        }
        return name;
    },
    pLNameInput() {
        var flag = true;
        var Lname = read.question("Please enter your Last name ");
        while (flag) {
            if (isNaN(Lname)) {
                flag = false;
            } else {
                Lname = read.question("Please enter your Correct Last name ");
            }
        }
        return Lname;
    },
    pAddressInput() {
        var flag = true;
        var Address = read.question("Please enter your Address ");
        while (flag) {
            if (isNaN(Address)) {
                flag = false;
            } else {
                Address = read.question("Please enter your Correct Address ");
            }
        }
        return Address;
    },
    pStateInput() {
        var flag = true;
        var State = read.question("Please enter your State name ");
        while (flag) {
            if (isNaN(State)) {
                flag = false;
            } else {
                State = read.question("Please enter your Correct State name ");
            }
        }
        return State;
    },
    pMobInput() {
        var flag = true;
        var mob = read.question("Please enter your Mobile number ");
        while (flag) {
            if (!isNaN(mob) && mob.length == 10) {
                flag = false;
            } else {
                mob = read.question("Please enter your Correct Mobile. Number ");
            }
        }
        return mob;
    },
    pZipInput() {
        var flag = true;
        var Code = read.question("Please enter your Pin Code ");
        while (flag) {
            if (!isNaN(Code) && Code.length == 6) {
                flag = false;
            } else {
                Code = read.question("Please enter your Correct PinCode ");
            }
        }
        return Code;
    },
/**
 * purpose: To Add the person to object.
 * @param {*} object 
 */
    addperson(object) {
        var id = 0;
        //creating object
        try{
        var personobj = object.Person;
        //taking inputs by user using  methods
        var fname = this.pFNameInput();
        var lname = this.pLNameInput();
        var address = this.pAddressInput();
        var state = this.pStateInput();
        var PinCode = this.pZipInput();
        var mob = this.pMobInput();
        for (var key in personobj) {
            id++;
        }
        //generating id for new user
        var id1 = personobj[id - 1].ID;
        personobj.push({
            "Firstname": fname,
            "LastName": lname,
            "Address": address,
            "State": state,
            "Zip": PinCode,
            "ID": id1,
            "Mobile": mob
        });
    }catch(err){
        console.log("error in add person");
    }
    },
    /**
     * purpose:To edit the person data from address book
     * @param {*} object 
     */
    editPerson(object) {
        var permanent = -1;
        var personobj = object.Person;
        var name = this.pFNameInput();
        var mob = this.pMobInput();
        //for taking the object key value
        for (var key in personobj) {
            if (personobj[key].Firstname == name && personobj[key].Mobile == mob) {
                permanent = key;
            }
        }
       // console.log(permanent);
        if (permanent == -1) {
            console.log("No user  Detail is Found");
            return;
        }
        console.log("The Person Detail is ");
        var value;
        console.log(personobj[permanent]);
        //asking from user which he want to edit
        var ch = Number(read.question('\n 1. Edit FirstName.  \n 2. Edit LastName.  \n 3. Edit Address.  \n 4. Edit State. \n 5. Edit Zip.  \n 6. Edit Phone.  '));
      //taking input accordingly
        switch (ch) {
            case 1:
            //replace the old first name with new first name
                value = this.pFNameInput();
                personobj[permanent].Firstname = value;
                break;
            case 2:
            //replace the old last name with new last name
                value = this.pLNameInput();
                personobj[permanent].LastName = value;
                break;
            case 3:
                value = this.pAddressInput();
                personobj[permanent].Address = value;
                break;

            case 4:
                value = this.pStateInput();
                personobj[permanent].State = value;
                break;
            case 5:
                value = this.pZipInput()
                personobj[permanent].Zip = value;
                break;
            case 6:
                value = this.pMobInput();
                personobj[permanent].Mobile = value;
                break;
            default:
                console.log("Wrong input ");

                break;
        }


    },
    /**
     * purpose : For delete the person from address book.
     * @param {*} object 
     * @param {*} file 
     */
    deletePerson(object, file) {
        var permanent = -1;
        var personobj = object.Person;
        var name = this.pFNameInput();
        var mob = this.pMobInput();
        //taking key of object
        for (var key in personobj) {
            if (personobj[key].Firstname == name && personobj[key].Mobile == mob) {
                permanent = key;
            }
        }
        if (permanent == -1) {
            console.log("No user  Detail is Found");
            return;
        }
        console.log("The Person Detail is ");
    //Print the person detail
        console.log(personobj[permanent]);
        var ch = read.question("Are You Sure \n1.Delete. \n2.Exit ");
        if (ch == 1) {
            personobj.splice(permanent,1);
            //delete personobj[permanent];
           

        } else {
            return;
        }

    },/**
     * purpose:To save the file
     * @param {*} object 
     * @param {*} file 
     */
    saveFile(object, file) {
        file.writeFileSync('Address.json', JSON.stringify(object));
    },
    /**
     * purpose:To display the all person data
     * @param {*} object 
     */
    displayPerson(object) {
        var personobj = object.Person;
        for (var key in personobj) {
            if (personobj[key] != null) {
                console.log(personobj[key])
            }
        }

    },/**
     * purpose: to sort the object by its name.
     * @param {*} object 
     */
    sortbyname(object) {
        var personobj = object.Person;
        personobj.sort(function (a, b) {
            //comparing the name
            if (a.Firstname == b.Firstname)
                return 0;
            if (a.Firstname < b.Firstname)
                return -1;
            if (a.Firstname > b.Firstname)
                return 1;
        });
        console.log(personobj);
    },
    /**
     * purpose:To sort the object by its pincode.
     * @param {*} object 
     */
    sortbyzip(object) {
        var personobj = object.Person;
        personobj.sort(function (a, b) {

            return a.Zip - b.Zip;
        });
        console.log(personobj);
    },
/**
 * purpose: In this method we ask from user what he want add person or edit or display call 
 *          method accordingly.
 * @param {*} object 
 * @param {*} file 
 * 
 */
    addressMain(object, file) {

        var key = Number(read.question("1.Add Person\n2.Edit Person\n3.Delete Person\n4.Sort By Name\n5.Sort by Zip\n6.Display\n7.Save into file\n8.Exit  "));
       //calling the method as user user input
        switch (key) {
            case 1:
                this.addperson(object);
                return this.addressMain(object, file);
            case 2:
                this.editPerson(object);
                return this.addressMain(object, file);
            case 3:
                this.deletePerson(object, file);
                return this.addressMain(object, file);
            case 4:
                this.sortbyname(object);
                return this.addressMain(object, file);
            case 5:
                this.sortbyzip(object);
                return this.addressMain(object, file);
            case 6:
                this.displayPerson(object);
                return this.addressMain(object, file);
            case 7:
                this.saveFile(object, file);
                return this.addressMain(object, file);
            case 8:
                return;
            default:
                console.log("Wrong Input  ");
                return this.addressMain(object, file);

        }

    },
    /**
     * purpsoe:To display the stock from linked list.
     * @param {*} Linked 
     */
    displaystockLL(Linked){
        var arr=[];
        var curr=Linked.head;
        while(curr){
            //taking the data from linked list and print it
           arr.push(curr.element);
            curr=curr.next;
        }
        console.log(arr);
        return arr;
    },
    //for taking the stock id as input. from user
    stockid(object,Linked){
       var flag=true;
       var id=Number(read.question('Enter the id '));
       while(flag){
           if(!isNaN(id)){
               flag=false;
           }else{
                id=read.question('Wrong input !!! Enter the id  Again');
           }
       }
      var curr=Linked.head;
      while(curr){
    //searching the Id if already present in linked list then take again input as id recursively
        if(parseInt(curr.element.Id)===id){
            console.log("The Stock Id is matching ");
            return this.stockid(object,Linked);
        }
        curr=curr.next;
      }
       return id;

    },
    /**
     * purpose :Add the object to linked list.
     * @param {*} object 
     * @param {*} Linked 
     */
    addStockLL(object,Linked) {
        //taking the input from user
        var stkname = this.inStockName();
        var stkNoofshare = parseInt(this.inNoOfShare());
        var stksharePrice = parseInt(this.inSharePrice());
       // var l=object.stock.length-1;
      var id=parseInt(this.stockid(object,Linked));
      //creating the data object
     var ob=   {
           Id:id,
            stockname: stkname,
            No_of_shares: stkNoofshare,
            share_price: stksharePrice
        }
        Linked.add(ob);
    },
   
    inputid(){
        var flag=true;
        var id=read.question('Enter the id ');
        while(flag){
            if(!isNaN(id)){
                flag=false;
            }else{
                 id=read.question('Wrong input !!! Enter the id  Again');
            }
        }
        return id;
    },
    /**
     * purpose: To delete the stock from linked list.
     * @param {*} object 
     * @param {*} Linked 
     */
    deleteStockLL(object,Linked) {
        var stockobj = object.stock;
        var n=0;
        var id = parseInt(this.inputid());
        var curr=Linked.head;

      while(curr){
          n++;
          //search for id
          if(curr.element.Id===id){
              Linked.popIndex(n);
              return;
          }
          curr=curr.next;
      }
      console.log("Id Not found");

    },
    /**
     * purpose: To save the data from linkedlist to file
     * @param {*} file 
     * @param {*} Linked 
     */
    saveStockLL(file,Linked) {
        var arr=new Array();
        var curr=Linked.head;
        while(curr){
            arr.push(curr.element);
            curr=curr.next;
        }
        var arrobj={
            "stock":arr
        }
        try {
            file.writeFileSync('StockLL.json', JSON.stringify(arrobj));
        } catch (err) {
            console.log("error in file");
        }
        console.log("file save successfully ");
    },
    /**
     * purpose     :  A program  used by a financial institution to keep track of customer information
     *                in this we can buy stock or sell the stock.using linked list
     * @param {*} file 
     * @param {*} object 
     * @param {*} Linked 
     */
    stockLinkedList(file,object,Linked) {
        
        var ch = Number(read.question("1.ADD Stock\n2.Remove Stock\n3.Display Stock\n4.Save File\n5.Exit  "));
        
        switch (ch) {
            case 1:
                this.addStockLL(object,Linked);// add stock method
                return this.stockLinkedList(file,object,Linked);//reccursively call method itself.
            case 2:
            //delete the stock
                this.deleteStockLL(object,Linked);
                return this.stockLinkedList(file,object,Linked);
            case 3:
            //display the stock
                this.displaystockLL(Linked);
                return this.stockLinkedList(file,object,Linked);
            case 4:
            //save the stock to file.
                this.saveStockLL(file,Linked);
                return this.stockLinkedList(file,object,Linked);
            case 5:
            //for exit
                return;
            default:
                 console.log("wrong Input");
                 return this.stockLinkedList(file,object,Linked);
        }
    }



}