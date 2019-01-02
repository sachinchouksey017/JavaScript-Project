class Stack{
    constructor(){
        this.size=0;
        this.arr=[];
        this.top=-1;
    }
    push(element){
        this.top=this.top+1;
       this.arr[this.top]=element;
       this.size++;

    }
    pop(){
        if(this.top==-1){
            console.log("Element not present in stack ,stack underflow ");
            return null;
        }else{
                this.size--;
                return this.arr[this.top--];
        }
    }
    peek(){
        if(this.top==-1){
            console.log("Stack Underflow ");
            return;
        }
        return this.arr[this.top];
    }
    isEmpty(){
        if(this.top==-1){
            return true;
        }
        return false;
    }
     giveSize(){
         return this.size;
     }

    display(){
        if(this.top>-1){
        var str="";
        for (let index = 0; index < this.top+1; index++) {
            str=str+this.arr[index]+" ";
            
        }
        console.log(str);
    }
    }

}
module.exports={
    Stack
}
