// 1--> 10 --> 5 --> 16

/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value:5,
            next:{
                value:16,
                next:null
            }
        }
    }
}*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        /*        let current = this.head;
                while (current.next != null) {
                    current = current.next;
                }
                current=newNode;
                */
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        //console.log(this)
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        //check params
        if (index === 0) {
            return this.prepend(value)
        } else if (index >= this.length) {
            return this.append(value)
        }
        //algorithm
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        //check params
        if (index <= 0) {
            return this.removeFromHead();
        }
        if (index >= this.length) {
            return this.removeFromTail();
        }
        //algorithm
        const leader = this.traverseToIndex(index - 1);
        let deleteNode = leader.next;
        leader.next = deleteNode.next;
        this.length--;
        return this.printList();
    }

    removeFromHead() {
        let deleteNode = this.traverseToIndex(0);
        this.head = deleteNode.next;
        this.length--;
    }

    removeFromTail() {
        const leader = this.traverseToIndex(this.length - 2);
        leader.next = null;
        this.tail = leader;
        this.length--;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        let current = this.head;
        let arr = [];
        while (current !== null) {
            arr.push(current.value)
            current = current.next;
        }
        console.log(arr.join(' -> '))
        return arr;
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 50);
myLinkedList.printList();
//console.log(myLinkedList)
myLinkedList.reverse();
