/*
-lookup O(n)
-enqueue(push) O(1)
-dequeue(pop-first item) O(1)
-peek(first item) O(1)

FIFO: First In First Out

If you had any sort of waitlist app to perhaps buy
tickets for a concert that uses Qs

What about a restaurant app where you check into the restaurant
to see if you can get a table that uses Qs

Most common example of Qs is a printer. The person that clicks
print first should have their first printout and same for the
second person that.

 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() { // very first item
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        //If we dont want to loss dequeued item
        //const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue.peek());
console.log(myQueue.dequeue());