var read=require('readline-sync');
module.exports={
insertArray(){
    var arr=[];
    console.log("how many element you want to insert");
    var n=read.question();
    console.log("insert " +n +"elements");
    for (let index = 0; index < n; index++) {
        arr[index]=read.question();
    }
    return arr;
},
isAnagram(string1,string2){
    if(string1.length!=string2.length){
        return false;
    }
    var arr=[];
    for (let index = 0; index < 36; index++) {
     arr[index]=0;
        
    }
    for (let index = 0; index <string1.length; index++) {
          var ch=string1.charAt(index);
          if(ch>='a'&&ch<='z'){
             var code=ch.charCodeAt(0);
            
             arr[code-97]++;
          }else if(ch>='A'&&ch<='Z'){
            var code=ch.charCodeAt(0);
            arr[code-65]++;
        }else{
            var code=ch.charCodeAt(0);
            arr[code-22]++;
        }
         ch=string2.charAt(index);
          if(ch>='a'&&ch<='z'){
             var code=ch.charCodeAt(0);
            
             arr[code-97]--;
          }else if(ch>='A'&&ch<='Z'){
            var code=ch.charCodeAt(0);
            arr[code-65]--;
        }else{
            var code=ch.charCodeAt(0);
            arr[code-22]--;
         }
        
        
}
for (let index = 0; index < 36; index++) {
    if(arr[index]!=0){
        return false;
    }
}
return true;
},
isPrime(number){
if(number==0||number==1){
    return false;
}
for (let index = 2; index < number; index++) {
        if(number%index==0){
            return false;
        }
    
}
return true;
},
isPalimdrome(string1){
    var str="";
    for (let index = 0; index < string1.length; index++) {
        str=string1.charAt(index)+str;
    }
    if(str==string1){
      return true;
    }
    return false;
},




isAnagramPalimdrome(){
    for (let index = 0; index < 1000; index++) {
        if(this.isPrime(index)){
            if(this.isPalimdrome(index+""))
            console.log(index);
        }
        
    }
},

binarySearch(arr,firstIndex,lastIndex,ele){
    if(firstIndex>lastIndex){
        return -1;                                                              ``
    }
    var mid=Math.floor((firstIndex+lastIndex)/2);
    console.log(mid);
    if(arr[mid]==ele){
        console.log(mid)
        return mid;
    }else if(arr[mid]<ele)
    this.binarySearch(arr,mid+1,lastIndex,ele);
    else
    this.binarySearch(arr,firstIndex,mid-1,ele);
},
vendingMachineRecursion(rupay,i,notes) {
	var arr= [1000,500,100,50,10,5,2,1];
	if(rupay==0&&i==arr.length) {
		console.log("total number of notes "+notes);
		return;
	}
	if(Math.floor(rupay/arr[i])>0) {
		console.log(arr[i]+" rupay notes is "+Math.floor(rupay/arr[i]));
		notes=notes+Math.floor(rupay/arr[i]);
        rupay=rupay%arr[i];
	 this.vendingMachineRecursion(rupay,i+1,notes);
	 return;
	}
		this.vendingMachineRecursion(rupay,i+1,notes);
},
 dayOfWeek(day,month,year){
     var arr=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
     var y0=year-Math.floor((14-month)/12);
     var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
     var m0=month+12*Math.floor((14-month)/12)-2;
     var d0=(day+x+Math.floor(31*m0/12))%7;
     console.log(arr[d0]+" is on "+day+"/"+month+"/"+year);
 },
 temperatureConvertion(){
     var temperature;
     var choice=read.question("In Which formate you want to convert \n press 1 for Celsius to Fahrenheit \n "
                             +"press 2 for Fahrenheit to celsius");
     if(choice==1){
         temperature=read.question("enter temperature in celsius");
         var fahrenheit=temperature*(9/5)+32;
         console.log("Fahrenheit form of "+temperature+"C is :"+fahrenheit);
     }else if(choice==2){
        temperature=read.question("enter temperature in Fahrenheit");
         var celsius=(temperature-32)*(5/9);
         console.log("celsius form of "+temperature+"F is :"+celsius);
     }else{
         console.log("wrong choice");
     }
 },
 monthlyPayment(principal,year,rate){
     var n=12*year;
     var r=(rate/(12*100));
     var payment=((principal*r)/((1-Math.pow((1+r),-n))));
     console.log("total payment is "+payment);
 },
 sqrt(number){
     var t=number;
     epsilon=1e-15;
     while(Math.abs(t-number/t)>epsilon*t){
         t=(((number/t+t))/2);
     }
     return t;
 },
 toBinary(number){
     str="";
     var ch="";
   while(number>0){
       ch=(number%2);
       str=ch+str;
       number=Math.floor(number/2);
   }
   return str;

 },
 swapNibble(mainstr){
   var tempString=mainstr.substring(0,4);
   mainstr=mainstr.substring(4,8);
   mainstr=mainstr+tempString;
   return mainstr;
 },
 addZero(str){
   while(str.length<8){
       str='0'+str;
   }
   return str;
 },
 power(base,pow){
     var sum=1;
     while(pow>0){
         sum=sum*base;
         pow--;
     }
     return sum;

 },
 binaryToDecimal(strBinary){
     sum=0;var ch;
     var n=0;
     for (let index = strBinary.length-1; index >=0; index--) {
            ch=(strBinary.charAt(index).charCodeAt(0))-48;
            sum=sum+this.power(2,n)*ch;
            n++;
         
     }
     return sum;
 },

}