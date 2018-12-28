class Dequeue{
    constructor(){
        this.size=50;
        this.arr=new Array(50);
        
        this.front=-1;
        this.rear=0;
    }
    isFull(){

          if((this.front==0&&this.rear==this.size-1)||(this.rear+1)==(this.front)){
            return true;
          }
          return false;
    }
    isEmpty(){
        return this.front == -1;
    }

    addFront(item){
       
         if(this.isFull()){
             console.log("overFlow");
             return;
         }
         if(this.front==-1){
             this.front=0;
             this.rear=0;
         }else if(this.front==0){
             this.front=this.arr.length-1;
         }else{
             this.front--;
         }
         this.arr[this.front]=item;

    }

   addRear(item){
       if(this.isFull()){
           console.log("Over flow");
           return;
       }
       if(this.front==-1){
           this.front=0;
           this.rear=0;
       }else if(this.rear==this.arr.length-1){
           this.rear=0;
       }else{
           this.rear++;
       }
       this.arr[this.rear]=item;
   }
   removeRear(){
       if(this.isEmpty()){
           console.log(" Queue Under flow");
           return;
       }var item;
       if(this.front==this.rear){
           item=this.arr[this.rear];
        this.front=-1;
           this.rear=-1;
       }else if(this.rear==0){
           item=this.arr[this.rear];
                this.rear=this.arr.length-1;
       }else{
           item=this.arr[this.rear];
           this.rear=this.rear--;
       }
       return item;
   }
   removeFront(){
         if(this.isEmpty()){
             console.log("Under Flow condition");
             return;
         }
        var item;
         if(this.front==this.rear){
            item=this.arr[this.front]; 
            this.front=-1;
             this.rear=-1;
             
         }else if(this.front==this.arr.length-1){
              item=this.arr[this.front];
             this.front=0;
         }else{
            item=this.arr[this.front];
             this.front++;
         }
         return item;
   }


 getFront(){
     if(this.isEmpty()){
         return -1;
     }
     return this.arr[this.front];
 }  
 getRear(){
     if(this.isEmpty()){
         return -1;
     }
     return this.arr[this.rear];
 }

palimdromecheck(string){
   for (let index = 0; index < string.length; index++) {
           this.addRear(string.charAt(index));
       
   }
   while(this.front!=this.rear&&this.front<=this.rear){
   if(this.getFront()!=this.getRear()){
     return false;
   }
   this.front++;
   this.rear--;
}
   
    
return true;
}



}

module.exports={
    Dequeue
}