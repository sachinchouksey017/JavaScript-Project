var read=require('readline-sync');
module.exports={
insertArray(){
    var arr=[];
    console.log("how many element you want to insert");
    var n=read.question();
    console.log("insert " +n +"elements");
    for (let index = 0; index < n; index++) {
        arr[index]=Number(read.question());
    }
    return arr;
},
insertArrayString(){
    var arr=[];
    console.log("how many element you want to insert");
    var n=read.question();
    console.log("insert " +n +" elements");
    for (let index = 0; index < n; index++) {
        arr[index]=(read.question());
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

 binarySearch(arr,ele)
{
    var first=0,last=arr.length-1;
    while(first<=last){
        mid=Math.floor((first+last)/2);
        if(arr[mid]==ele){
            return mid;
        }else if(arr[mid]>ele){
            last=mid-1;
        }else{
            first=mid+1;
        }
    }
    return -1;
},
insertionSort(arr){
    n=arr.length;
    var ele;
    for (let i = 1; i < n; i++) {
        ele=arr[i];
        var j=i-1;
        while(j>=0&& arr[j]>ele){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=ele;
        
    }
    return arr;
},
bubbleSort(arr){
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
             if(arr[j]>arr[j+1]){
                 temp=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=temp;
             }
            
        }
        
    }
    return arr;

},
getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
  },
elapsedTimeForMethod(){

var start=0,stop=0;

var arr=[11,66,1,55,9,78,65,87,43,56];
start= this.getNanoSecTime();
this.insertionSort(arr);
stop=this.getNanoSecTime();
var insertionSortTime=stop-start;
console.log()

var brr=[11,66,1,55,9,78,65,87,43,56];
start= this.getNanoSecTime();
this.bubbleSort(brr);
stop=this.getNanoSecTime();
var bubbleTime=stop-start;

var crr=[11,66,1,55,9,78,65,87,43,56];
start= this.getNanoSecTime();
this.binarySearch(crr,55);
stop=this.getNanoSecTime();
var BinaryTime=stop-start;

var arrString=["a","gh","b","z","mn"];
start= this.getNanoSecTime();
this.insertionSort(arrString);
stop=this.getNanoSecTime();
var insertionSortTimeString=stop-start;


var brrString=["a","gh","b","z","mn"];
start= this.getNanoSecTime();
this.bubbleSort(brrString);
stop=this.getNanoSecTime();
var bubbleTimeString=stop-start;

var crrString=["a","gh","b","z","mn"];
start= this.getNanoSecTime();
this.binarySearch(crrString,"gh");
stop=this.getNanoSecTime();
var binaryTimeString=stop-start;

var masterList=[{type : "insertion sort ",time: insertionSortTime},{type: "bubble Sort",time : bubbleTime},
{type:"binary search",time:BinaryTime},{type :"insertion Sort String ",time:insertionSortTimeString},
  {type:"bubble sort String ",time : bubbleTimeString},{type:"binary search String",time:binaryTimeString}];
    masterList.sort(function(a, b){return b.time - a.time});
    
    console.log("the time in descending order is ");
    console.log("time for "+masterList[0].type+" is "+masterList[0].time);
    console.log("time for "+masterList[1].type+" is "+masterList[1].time);
    console.log("time for "+masterList[2].type+" is "+masterList[2].time);
    console.log("time for "+masterList[3].type+" is "+masterList[3].time);
    console.log("time for "+masterList[4].type+" is "+masterList[4].time);
    console.log("time for "+masterList[5].type+" is "+masterList[5].time);
    

},
findNumber(number){

    var n=0;
    n = Math.sqrt(number,2);
    
    console.log("think a number between 0 to "+ number);
    var low=0;
    high=number-1;
    var flag=true;
    for (let index = 0; index <=n&&flag; index++) {
        mid=Math.floor((low+high)/2);
      if(low>=high){
          flag=false;
      }else{
    var ans=read.question("Is your number is less than or equals to "+mid+" enter true or false");
    if(ans=='true'){
         high=mid;
    }else if(ans=='false'){
        low=mid+1;


    }else{
        console.log("please enter yes or No only");
        index--;
    }
    
}
    }
    console.log("your number is "+mid);
},
merge(arr,brr){
    var i=0,j=0;
    while(i<arr.length&&j<brr.length){
        
    }
}

}