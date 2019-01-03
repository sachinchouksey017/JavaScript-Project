

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

regex(name,fullname,mobilenumber,date){
  var file=require('fs');//require the file
  var data=file.readFileSync('regex.txt','utf8');//read the file in form string.
  data=data.replace(/"<<name>>"/g,name);
  data=data.replace(/"<<fullname>>"/g,fullname);
  data=data.replace(/"91-xxxxxxxxxx"/g,mobilenumber);
  data=data.replace("xx/xx/xxxx",date);
  console.log();
  console.log(data);



},
stock(obj){
    var stk=obj.stock;
    console.log();
    for(var key in stk){
        console.log(stk[key]);
        console.log("total value for "+stk[key].stockname+" is "+stk[key].No_of_shares*stk[key].share_price);
    }
    var total=0;
    for(var key in stk){
        total=parseInt(total)+parseInt(stk[key].No_of_shares*stk[key].share_price)
    }
    console.log("Total value for total shares is "+total);

    //console.log(stk[]);
},
inventoryManage(noOfTimes){
    var read=require('readline-sync');
    var file=require('fs');
    var filedata=file.readFileSync('inventorymanage.json','utf8');
    object=JSON.parse(filedata);
    for (let i = 0; i < noOfTimes; i++) {
        var name=read.question("Enter the name of stock ");
        var Noofshares=read.question("Enter how many shares you have ");
        var shareprice=read.question(" Enter the price of your share ");
        object.stock.push({
            stockname :name,
            No_of_shares:Noofshares,
            share_price:shareprice
        })
        console.log(inventObject);
           //user given input is writing into a file
           fs.writeFileSync('inventManagement.json',JSON.stringify(inventObject));
           var stock=inventObject.stock;
           //for evary stock printing the total price
           for(var key in stock)
           {
               //console.log(stock[key]);
               console.log("The totalprice of stock is: "+stock[key].noofshares*stock[key].price);
           }
         }
        

    },
        
    





}