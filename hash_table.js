class Hashtable{
    constructor(size){
        this.data = new Array(size); //create an array of size
    }

    hashMethod(key){ //hash the key
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key); //get the address
        if(!this.data[address]){ //if the address is empty
            this.data[address] = []; //create an array at the address
        }
        this.data[address].push([key, value]); //add the key and value to the array at the address
        return this.data; //return the data
    }

    get(key){
        const address = this.hashMethod(key); //get the address
        if(this.data[address]){ //if the address is not empty
            for(let i = 0; i < this.data[address].length; i++){ //loop through the array at the address
                if(this.data[address][i][0] === key){ //if the key is found
                    return this.data[address][i][1]; //return the value
                }
            }
        }
        return undefined; //if the key is not found
    }

    getAllKeys(){
        const keys = []; //create an array to store the keys
        for(let i = 0; i < this.data.length; i++){ //loop through the data
            if(this.data[i]){ //if the address is not empty
                for(let j = 0; j < this.data[i].length; j++){ //loop through the array at the address
                    keys.push(this.data[i][j][0]); //add the key to the array
                }
            }
        }
        return keys; //return the keys
    }

    remove(key){
        const address = this.hashMethod(key); //get the address
        if(this.data[address]){ //if the address is not empty
            for(let i = 0; i < this.data[address].length; i++){ //loop through the array at the address
                if(this.data[address][i][0] === key){ //if the key is found
                    this.data[address].splice(i, 1); //remove the item
                    return this.data; //return the data
                }
            }
        }
        return undefined; //if the key is not found
    }

}

const myHashtable = new Hashtable(50);

myHashtable.set("grapes", "red");
myHashtable.set("apples", "blue");

myHashtable.get("grapes");






