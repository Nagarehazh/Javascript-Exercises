function Queue(){
    this.arr = [];
}

Queue.prototype.enqueue = function(elemento){
    this.arr.push(elemento);
}

Queue.prototype.dequeue = function(){
    return this.arr.shift();
}

Queue.prototype.size = function(){
    return this.arr.length;
}

const miQueue = new Queue();
miQueue.enqueue(1);
miQueue.enqueue(2);
miQueue.enqueue(3);
console.log(miQueue);
console.log(miQueue.dequeue());
console.log(miQueue);
console.log(miQueue.size());
