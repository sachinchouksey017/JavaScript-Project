
var read=require('readline-sync');
module.exports={
    /**
     * purpose:In this method we have to calculate price for every inventory read from json file.
     * @param {*} object 
     * @returns : Nothing
     */

inventory(object){
    //converting every string inventory to object
    var rice=object.Rice;
    var wheats=object.Wheats;
    var pulse=object.Pulse;
    for(key in rice){
        console.log("\n");
        console.log(rice[key]);
        //total price for rice
        console.log("Total price for  "+rice[key].name+" is "+rice[key].price*rice[key].weight);
    }

    for(key in wheats){
        console.log("\n");
        console.log(wheats[key]);//printing the inventory object by using key 
        //total price for wheats
        console.log("Total price for  "+wheats[key].name+" is "+wheats[key].price*wheats[key].weight);
    }
    for(key in pulse){
        console.log("\n");
        console.log(pulse[key]);
        //total price for pulse;
        console.log("Total price for  "+pulse[key].name+" is "+pulse[key].price*pulse[key].weight);
    }

},
/**
 * purpose     :  Read the Json file and replace the words from file using regex and display it.
 * @param {string} name 
 * @param {string} fullname 
 * @param {number} mobilenumber 
 * @param {number} date 
 */
regex(name,fullname,mobilenumber,date){
  var file=require('fs');//require the file
  try{
  var data=file.readFileSync('regex.txt','utf8');//read the file in form string.
  data=data.replace(/"<<name>>"/g,name);//replace the name
  data=data.replace(/"<<fullname>>"/g,fullname);
  data=data.replace(/"91-xxxxxxxxxx"/g,mobilenumber);
  data=data.replace("xx/xx/xxxx",date);
  console.log();
  console.log(data);
  }catch(err){
      console.log("Error !!!");
  }



},
/**
 * purpose     :  Read the Json file having properties Details for stock with properties
 *                stockname, noOfShares, shareprice.we have to calculate total share price for
 *                every stock.
 * @param {JSON object} obj 
 */
stock(obj){
    var stk=obj.stock;
    console.log();
    for(var key in stk){//printing the total value for each stock
        console.log(stk[key]);
        console.log("total value for "+stk[key].stockname+" is "+stk[key].No_of_shares*stk[key].share_price);
    }
    var total=0;//var for adding total shares amount
    for(var key in stk){
        total=parseInt(total)+parseInt(stk[key].No_of_shares*stk[key].share_price)
    }
    console.log("Total value for total shares is "+total);//print total amount

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
inventoryManage(){
    var read=require('readline-sync');
    var file=require('fs');
    var noOfTimes =read.question("Enter number of times you want add share details ");
    if(isNaN(noOfTimes)){
        console.log("wrong input !!!!   please enter integer value ");
        return;
    }
    try{
    var filedata=file.readFileSync('inventorymanage.json','utf8');
    
    object=JSON.parse(filedata);
    for (let i = 0; i < noOfTimes; i++) {
        var name=read.question("Enter the name of stock ");
        var flag = true;
        while (flag) {//for validating inputs
    
            if (isNaN(name)) {//for validate the name 
                flag = false;
            } else {
                var name = read.question("Wrong input !!!...Please enter correct name of Stack  ");
            }
        }
        var flag = true;
        var Noofshares=read.question("Enter how many shares you have ");
        while (flag) {
    
            if (!isNaN(Noofshares)) {//for validate full name
                flag = false;
            } else {
                var Noofshares = read.question("Wrong input !!!...Please enter No of shares in integer   ");
            }
        }
        var flag = true;
        var shareprice=read.question(" Enter the price of your share ");
        while (flag) {
    
            if (!isNaN(shareprice)) {
                flag = false;
            } else {
                var shareprice = read.question("Wrong input !!!...Please enter  correct price of shares ");
            }
        }
        
        
        object.stock.push({
            stockname :name,
            No_of_shares:Noofshares,
            share_price:shareprice
        })
        console.log(object);
           //user given input is writing into a file
           file.writeFileSync('inventorymanage.json',JSON.stringify(object));
           var stock=object.stock;
           //for evary stock printing the total price
           for(var key in stock)
           {
               //console.log(stock[key]);
               console.log("The totalprice of "+stock[key].stockname+" is: "+(parseInt(stock[key].No_of_shares)*parseInt(stock[key].share_price)));
           }
         }
        }catch(err){
                console.log("error found!!!");
        }
        
        

    },
    /**
     * purpose: a method which returns all the card in mixing form. 
     */
    giveCards(){
        var suit=["♣️","♦️", "♥️", "♠️"];
        var rank=["King","Queen","Jack","Ace","2","3","4","5","6","7","8","9","10"];
        var cards=new Array();
        var n=suit.length*rank.length;
        for (let i = 0; i < suit.length; i++) {//adding of all 52 cards in array
        
            for (let j = 0; j < rank.length; j++) {
                cards.push(""+suit[i]+rank[j]);
                
            }
            
        }
        var l,temp;
        for (let index = 0; index < n; index++) {//mixing all the cards
            var l=Math.floor(Math.random()*n);
            temp=cards[l];
            cards[l]=cards[index];//swapping cards
            cards[index]=temp;
            
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
    deck(){
        var cards=this.giveCards();//get all cards
        var PersonCards=[[],[],[],[]];
        var x=0;
        for (let person = 0; person < 4; person++) {//distribute the cards in among four person
            for (let index = 0; index < 9; index++) {
             PersonCards[person][index]=cards[index+x]
            }
            x=x+9; 
            
        }
        console.log("The First persons cards  "+PersonCards[0].join());
        console.log("The Seconds persons cards  "+PersonCards[1].join());
        console.log("The Third persons cards  "+PersonCards[2].join());
        console.log("The Fourth persons cards  "+PersonCards[3].join());

        
    

    },
    deckExtend(){
        var que=require('../DataStructurePrograms/QueueUsingLinkedList');
        var playerClass=require('../Object Oriented Programs/Player');
        var cards=this.giveCards();//array containing of cards
        var p=new playerClass.player;
        var num=read.question("How many player want to play ");
        if(isNaN(num)){
            console.log("Please enter correct inputs ");
            return;
        }
        for (let i = 0; i < num; i++) {
            p.addplayer();//add players
            
        }var playerNum=0;
        for (let index = 0; index < cards.length; index++) {
              playerNum=(index%num)+1;
            p.addCards(playerNum,cards[index]);
            
        }
        console.log("After sorting the card ");
        for (let index = 0; index < num; index++) {
            console.log();
           p.sort(index+1);
          console.log("Player "+(index+1)+" card is ");
          p.displayCards(index+1);
            
        }
    
       



    }
        
    





}