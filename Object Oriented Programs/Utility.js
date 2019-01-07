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

    },
    /**
     * purpose     :  Read the Json file and replace the words from file using regex and display it.
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
        var stk = obj.stock;
        console.log();
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
     * purpose     :  A program to Create InventoryManager to manage the Inventory. The 
     *                Inventory Manager will use InventoryFactory to create Inventory Object
     *                from JSON. The InventoryManager will call each Inventory Object in its list 
     *                to calculate the Inventory Price and then call the Inventory Object to return
     *                the JSON String.
     * @returns    : Nothing
     */
    inventoryManage() {
        var read = require('readline-sync');
        var file = require('fs');
        var noOfTimes = read.question("Enter number of times you want add share details ");
        if (isNaN(noOfTimes)) {
            console.log("wrong input !!!!   please enter integer value ");
            return;
        }
        try {
            var filedata = file.readFileSync('inventorymanage.json', 'utf8');

            object = JSON.parse(filedata);
            for (let i = 0; i < noOfTimes; i++) {
                var name = read.question("Enter the name of stock ");
                var flag = true;
                while (flag) {//for validating inputs

                    if (isNaN(name)) {//for validate the name 
                        flag = false;
                    } else {
                        var name = read.question("Wrong input !!!...Please enter correct name of Stack  ");
                    }
                }
                var flag = true;
                var Noofshares = read.question("Enter how many shares you have ");
                while (flag) {

                    if (!isNaN(Noofshares)) {//for validate full name
                        flag = false;
                    } else {
                        var Noofshares = read.question("Wrong input !!!...Please enter No of shares in integer   ");
                    }
                }
                var flag = true;
                var shareprice = read.question(" Enter the price of your share ");
                while (flag) {

                    if (!isNaN(shareprice)) {
                        flag = false;
                    } else {
                        var shareprice = read.question("Wrong input !!!...Please enter  correct price of shares ");
                    }
                }


                object.stock.push({
                    stockname: name,
                    No_of_shares: Noofshares,
                    share_price: shareprice
                })
                console.log(object);
                //user given input is writing into a file
                file.writeFileSync('inventorymanage.json', JSON.stringify(object));
                var stock = object.stock;
                //for evary stock printing the total price
                for (var key in stock) {
                    //console.log(stock[key]);
                    console.log("The totalprice of " + stock[key].stockname + " is: " + (parseInt(stock[key].No_of_shares) * parseInt(stock[key].share_price)));
                }
            }
        } catch (err) {
            console.log("error found!!!");
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
                cards.push("" + suit[i] + rank[j]);

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
    deckExtend() {
        var que = require('../DataStructurePrograms/QueueUsingLinkedList');
        var playerClass = require('../Object Oriented Programs/Player');
        var cards = this.giveCards();//array containing of cards
        var p = new playerClass.player;
        var num = read.question("How many player want to play ");
        if (isNaN(num)) {
            console.log("Please enter correct inputs ");
            return;
        }
        for (let i = 0; i < num; i++) {
            p.addplayer();//add players

        } var playerNum = 0;
        for (let index = 0; index < cards.length; index++) {
            playerNum = (index % num) + 1;
            p.addCards(playerNum, cards[index]);

        }
        console.log("After sorting the card ");
        for (let index = 0; index < num; index++) {
            console.log();
            p.sort(index + 1);
            console.log("Player " + (index + 1) + " card is ");
            p.displayCards(index + 1);

        }





    },
    drname(object, file) {
        var drobject = object.Doctor;
        var flag = true;

        var name = read.question("Please enter the Doctor name ");
        while (flag) {
            if (isNaN(name)) {
                flag = false;
            } else {
                name = read.question("Wrong input !! please input correct name ");
            }
        }
        flag = true;
        for (key in drobject) {
            if (drobject[key].Name == name) {
                console.log(drobject[key]);
                flag = false;
                var fix = this.drAppointment(object, file);
        
                if (fix!=undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name+" on "+fix);
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
        
                if (fix!=undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name+" on "+fix);
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
                flag = false;var 
                fix = this.drAppointment(object, file);
        
                if (fix!=undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name+" on "+fix);
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
        
                if (fix!=undefined) {
                    console.log("Your Appointment fix with " + drobject[key].Name+" on "+fix);
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
    appoinmentSearch(appoinobject, key, Obj, file, str) {

        for (key1 in appoinobject[key].AppointmentTaken) {
            if (appoinobject[key].AppointmentTaken[key1][str] !==undefined) {
                // appoinobject[key].AppointmentTaken.push({
                //     [str]: []
                // });
                // file.writeFileSync('Clinique.json', JSON.stringify(Obj));
                return true;
            }
        }
        return false;
    },
    appointLength(key,appoinobject,object,file,str,patId,date){
        var add=this.appoinmentSearch(appoinobject, key, object, file, str);
        if(!add){
            appoinobject[key].AppointmentTaken.push({
                    [str]: []
                });
                file.writeFileSync('Clinique.json', JSON.stringify(object));
        }
        for (key1 in appoinobject[key].AppointmentTaken) {
            if (appoinobject[key].AppointmentTaken[key1][str] !== undefined) {
                if (appoinobject[key].AppointmentTaken[key1][str].length < 5) {
                    appoinobject[key].AppointmentTaken[key1][str].push(patId);
                    file.writeFileSync('Clinique.json',JSON.stringify(object));
                    return str;
                } else {
                    date = date + 1;
                  str = (date) + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
                  return this.appointLength(key,appoinobject,object,file,str,patId,date);

                }
            }
        }
    },
    drAppointment(object, file) {
        var appoinobject = object.DrAppointment;
        var val = Number(read.question(" For Appointment press 1 \n For Exit press 2 "));
        var date=dt.getDate();
        var str = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

        if (val == 1) {
            var id = read.question("Please enter the Doctor Id "); 
            for (key in appoinobject) {
                if (appoinobject[key].ID == id) {
                    var patId = read.question("Please enter patient Id ");
                       var val=this.appointLength(key,appoinobject,object,file,str,patId,date);
                    
                       return val;
                        
                }
            }
        } else if (val == 2) {
            return undefined ;
        } else {
            console.log("Wrong input ");
            return this.drAppointment(object, file);
        }

    },
    checkId(object){
        var flag=true;
        var id=read.question("Please Input Dr. Id ");
        while(flag){ 
        if(isNaN(id)){
             flag=false;
         }else
         id=read.question("Wrong input !!!!Please Input Dr. Id ");
        }
          var drobject=object.Doctor;
          for(key in drobject){
             if(drobject[key].Id==id){
                 console.log(" This Id is already present ");
                 return this.checkId(object);
             }
          }
          return id;
    },
    RegisterDr(object,file){
       var id=this.checkId(object);
    var name=read.question("Enter the Name of Doctor ");
    var flag=true;
    while(flag){
        if(isNaN(name)){
           flag=false; 
        }else{
            name=read.question("Wrong input !! Please input correct name ");

        }
    }
    var special=read.question("Enter the Specialization of Doctor ");
    var flag=true;
    while(flag){
        if(isNaN(special)){
           flag=false; 
        }else{
            special=read.question("Wrong input !! Please input correct Specialization of doctor ");
            
        }
    }
    var Avail=read.question("Enter the Availability of Doctor :AM,PM,BOTH ");
    var flag=true;
    while(flag){
        if(isNaN(Avail)&&(Avail=="AM"||Avail=="PM"||Avail=="BOTH")){
           flag=false; 
        }else{
            Avail=read.question("Wrong input !! Please input correct Availability of Doctor ");
            
        }
    }
    var drobject=object.Doctor;
    drobject.push({
        
            Id: id,
            Name: name,
            Specialization: special,
            Availability: Avail
        
    });
    file.writeFileSync('Clinique.json',JSON.stringify(object));
    },
    RegisterPatient(){
        // "Name": "Honey pandey",
        // "ID": "P1",
        // "MobileNumber": 8878257808,
        // "Age": 24
        var name=read.question("Enter the Name of Patient ");
        var flag=true;
        while(flag){
            if(isNaN(name)){
               flag=false; 
            }else{
                name=read.question("Wrong input !! Please input correct name ");
    
            }
        }
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
            console.log("No Patient Available search another Patient")
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
            console.log("No Patient Available ")
        }
    },
    clinique(choice, object, file) {
        if (choice == 1) {
            var drchoice = Number(read.question("Search by : \n 1.Name \n 2.ID \n 3.Specialization \n 4.Availability \n 5.Exit "));
            switch (drchoice) {
                case 1:
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
                    return this.clinique(choice,object,file);
            }
        } else if (choice == 2) {
            var patchoice = Number(read.question("Search by : \n 1.Name \n 2.Mobile Number \n 3.Id  \n 4.Exit "));
            switch (patchoice) {
                case 1:
                    this.patname(object);
                    break;
                case 2:
                    this.patmob(object);
                    break;
                case 3:
                    this.patId(object);
                    break;
                case 4:
                    break;
                default:
                    console.log("Wrong Choice !!!");
                return this.clinique(choice,object,file);
                    
            }

        }else if(choice==3){
            return;
        } else{
            choice=read.question("Wrong Input !!! \n What You want \n Press 1 for Search doctor \n Press 2 for Search patient \n press 3 for Exit ");
            return this.clinique(choice,object,file);
        }
    }







}