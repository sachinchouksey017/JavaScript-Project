var stk=require('../Object Oriented Programs/StockAccount');
var data=require('../DataStructurePrograms/LinkedList');
var read=require('readline-sync');
var val,flag1=true;
var st = new stk.StockAccount('stockaccount.json');
var linked=new data.LinkedList();
while(flag1){
console.log("What you want \n For Buy the Stock press 1 \n For Shell the Stock press 2 ");
val = read.question(" For ValueOf press 3 \n For Show Report press 4 \n For Save Report press 5 \n Exit press 6 ");
switch (Number(val)) {
    case 1:
        st.buy();
        break;
    case 2:
        st.sell();
        break;
    case 3:
        console.log("Total value for stock is "+st.valueOf());
        break;

    case 4:
        st.printReport();
        break;
    case 5:
        st.save('stockaccount.json');
        break;
    case 6:
         flag1=false;
         break;
    default:
        console.log("Wrong Key ");
        break;
}
console.log();
}

