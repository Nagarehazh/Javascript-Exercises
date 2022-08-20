class Node{
    constructor(value){
        this.value = value;
        this.next = null;
}
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){  //
        if(this.length === 0){
            return null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        if(this.length === 0){
            this.last = null;
        }
        return holdingPointer;
    }
}