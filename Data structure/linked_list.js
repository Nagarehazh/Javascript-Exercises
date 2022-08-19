
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
//     }

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}    


class MySinglyLinkedList {  
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value){ //adds to the end of the list
        const newNode = new Node(value);    //create a new node
        this.tail.next = newNode;   //set the next property of the new node to the head
        this.tail = newNode;    //set the head to the new node
        this.length++;  //increment the length
        return this;    //return the list
    }

    prepend(value){ //adds to the beginning of the list
        const newNode = new Node(value);    //create a new node
        newNode.next = this.head;   //set the next property of the new node to the head
        this.head = newNode;    //set the head to the new node
        this.length++;  //increment the length
        return this;    //return the list
    }

    insert(index, value){   //inserts at the index
        if(index >= this.length){   //if the index is greater than the length, add to the end
            return this.append(value);  //call the append method
        }
        const newNode = new Node(value);    //create a new node
        const leader = this.traverseToIndex(index - 1); //get the leader node
        const holdingPointer = leader.next; //get the holding pointer
        leader.next = newNode; //set the leader's next property to the new node
        newNode.next = holdingPointer;  //set the new node's next property to the holding pointer
        this.length++;
        return this;    //return the list
    }

    traverseToIndex(index){ //traverses to the index
        let counter = 0;    //set the counter to 0
        let currentNode = this.head;    //set the current node to the head
        while(counter !== index){   //loop through the list until the counter is equal to the index
            currentNode = currentNode.next; //set the current node to the next node
            counter++;  //increment the counter
        }
        return currentNode;
    }

    remove(index){ //removes at the index
        if(index === 0){ //if the index is 0, remove the head
            this.head = this.head.next;
            this.length--;
            return this;
        }
        const leader = this.traverseToIndex(index - 1); //get the leader node
        const unwantedNode = leader.next; //get the unwanted node
        leader.next = unwantedNode.next; //set the leader's next property to the unwanted node's next property
        this.length--; //decrement the length
        return this; //return the list
    }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);