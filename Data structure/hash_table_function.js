/*  Hashtable
    - Hashtable is a data structure that stores key-value pairs.
    Insert, search and delete are the three methods that are used to store and retrieve data.

    we need the next methods:
    - set(key, value) - adds a new key-value pair to the hashtable
    - get(key) - returns the value of the key
    - getAllKeys() - returns an array of all the keys in the hashtable
    - remove(key) - removes the key-value pair from the hashtable
*/

function Hashtable(size){
    this.data = new Array(size); //create an array of size
}

Hashtable.prototype.hashMethod = function(key){ //hash the key
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length; //charCodeAt returns the unicode of the character
    }
    return hash;
}

Hashtable.prototype.set = function(key, value){
    const address = this.hashMethod(key); //get the address
    if(!this.data[address]){ //if the address is empty
        this.data[address] = []; //create an array at the address
    }
    this.data[address].push([key, value]); //add the key and value to the array at the address
    return this.data; //return the data
}

Hashtable.prototype.get = function(key){
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

Hashtable.prototype.getAllKeys = function(){
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

Hashtable.prototype.remove = function(key){
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

const myHashTable = new Hashtable(10); //create a new hashtable with size 10
myHashTable;
myHashTable.set('name', 'John'); //add a new key-value pair to the hashtable
myHashTable.set('age', '30');
myHashTable.set('city', 'New York');
myHashTable.set('state', 'New York');
myHashTable.set('country', 'USA');
myHashTable.set('zip', '10001');
myHashTable;
myHashTable.get('name'); //returns 'John'
myHashTable.get('age'); //returns '30'
myHashTable.get('city'); //returns 'New York'
myHashTable.get('state'); //returns 'New York'
myHashTable.get('country'); //returns 'USA'
myHashTable.get('zip'); //returns '10001'
myHashTable.get('address'); //returns undefined
