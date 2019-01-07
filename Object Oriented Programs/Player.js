class player{
     constructor(){
         this.arr=[];
         this.totalplayer=0;
        
        
     }
     addplayer(){
         var que=require('../DataStructurePrograms/QueueUsingLinkedList');   
         this.arr.push(new que.QueueLinked);
             this.totalplayer++;
    
             
     }
     addCards(playernum,card){
           this.arr[playernum-1].enqueue(card);
           
     }
     sort(playernum){
         var sort=require('../Algorithm Programs/Utility');
         var str="";
         str=this.arr[playernum-1].getData();
         var newArr=str.split(' ');
         sort.insertionSort(newArr);
         this.arr[playernum-1].makeBlank();
         for (let index = 0; index < newArr.length; index++) {
             this.addCards(playernum,newArr[index]);
             
         }



         
         
     }
     displayCards(playernum){
        var str=this.arr[playernum-1].getData();
        console.log(str);
     }
}
module.exports={
    player
}
