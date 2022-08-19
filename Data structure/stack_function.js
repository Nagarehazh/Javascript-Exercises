function Stack(){
    this.arr = [];
}

Stack.prototype.add = function(elemento){
    this.arr.push(elemento);
};

Stack.prototype.remove = function(){
    return this.arr.pop();
}

Stack.prototype.size = function(){
    return this.arr.length;
}

const miStack = new Stack();
console.log(miStack);
miStack.add(1);
miStack.add(2);
miStack.add(3);
console.log(miStack);
console.log(miStack.remove());
console.log(miStack);