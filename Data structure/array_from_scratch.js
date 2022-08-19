class MyArray{
    constructor(){
        this.length = 0;  //length is a property of the array object
        this.data = {};   //data is the place where the items will be saved
    }

    get(index){     //get the item at the index
        return this.data[index];
    }

    push(item){    //add an item to the end of the array   
        this.data[this.length] = item; //add the item to the data object at the length property
        this.length++; //increment the length property
        return this.length; //return the new length 
    }
    
    pop(){         //remove the last item from the array    
        const lastItem = this.data[this.length - 1]; //get the last item
        delete this.data[this.length - 1]; //delete the last item
        this.length--; //decrement the length property
        return lastItem; //return the last item 
    }

    myDelete(index){ //delete the item at the index    
        const item = this.data[index]; //get the item at the index
        this.shiftItems(index); //shift the items after the index
        return item; //return the item
    }

    shiftItems(index){ //shift the items after the index
        for(let i = index; i < this.length - 1; i++){ //loop through the items after the index
            this.data[i] = this.data[i + 1]; //shift the items
        }
        delete this.data[this.length - 1]; //delete the last item
        this.length--; //decrement the length property
    }

    unShift(item){ //add an item to the beginning of the array
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    

    shift(){ //remove the first item from the array   
        const firstItem = this.data[0]; //get the first item
        this.shiftItems(1); //shift the items
        return firstItem; //return the first item
    }

}

//verification
const myArray = new MyArray();
console.log(myArray.push("a"));
console.log(myArray.push("b"));
console.log(myArray.push("c"));
console.log(myArray.push("d"));
console.log(myArray);
console.log(myArray.get(0));
console.log(myArray.get(1));
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.myDelete(1));
console.log(myArray);
console.log(myArray.shiftItems(0));
console.log(myArray);
console.log(myArray.unShift("e"));
console.log(myArray.unShift("d"));
console.log(myArray.unShift("f"));
console.log(myArray.shift());
console.log(myArray);