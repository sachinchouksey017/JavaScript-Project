class Queue{
    constructor(){
        this.arr=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(item){//adding
        this.arr[this.rear]=item;
        this.rear++;
    }
    dequeue(){//
        if(this.front==this.rear){
            console.log("No item is present in ");
                 this.front=0,this.rear=0;
                 return;
        }
        var item=this.arr[this.front]
            this.front++;
            return item;
    }
    display(){
        if(this.front!=this.rear){
        var str="";
        for (let index = this.front; index < this.rear; index++) {
            str=str+this.arr[index]+" ";
            
        }
        console.log("Elements in queue is ");
        console.log(str);
    }else{
        console.log("Queue is empty ");
    }
    }
    isEmpty(){
        if(this.front==this.rear){
            return true;
        }
        return false;
    }
    size(){
        return this.rear-this.front;
    }
    

}
module.exports={
    Queue
}