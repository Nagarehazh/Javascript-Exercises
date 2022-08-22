//single Linked list implementation
/* Linked list is a data structure that consists of a group of nodes where each node contains a value and a pointer to the next node in the list. 

The first node in the list is called the head and the last node is called the tail.

- append method is used to add a new node to the end of the list
- prepend method is used to add a new node to the beginning of the list
- insert method is used to add a new node at a specific index
- remove method is used to remove a node at a specific index
- search method is used to search for a value in the list
- traverseToIndex method is used to traverse to a specific index in the list
*/

function Node(value){
    this.value = value;
    this.next = null;
}

function MySinglyLinkedList(value){
    this.head = {
        value: value,
        next: null
    }

    this.tail = this.head;
    this.length = 1;
   
}

MySinglyLinkedList.prototype.append = function(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
}

MySinglyLinkedList.prototype.prepend = function(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
}

MySinglyLinkedList.prototype.insert = function(index, value){
    if(index >= this.length){
        return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
}

MySinglyLinkedList.prototype.traverseToIndex = function(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
}

MySinglyLinkedList.prototype.remove = function(index){
    if(index === 0){
        this.head = this.head.next;
        this.length--;
        return this;
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this;
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
