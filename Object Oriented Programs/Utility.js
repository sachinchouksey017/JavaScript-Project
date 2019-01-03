

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
        
    }
    console.log(stk[]);
}




}