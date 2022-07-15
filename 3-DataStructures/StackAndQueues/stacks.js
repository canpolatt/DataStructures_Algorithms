/*
-lookup O(n)
-pop O(1)
-push O(1)
-peek(last item) O(1)

LIFO: Last In First Out

When you need to know the very last value that was
seen or added.

Browser history or maybe you're writing a piece of text and
you want to undo something so you can click the undo option to go back or forward
to redo
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {//very top element
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length > 0) {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        } else {
            this.top = newNode;
            this.bottom = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        //const holdingPointer=this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

    printStack() {
        let current = this.top;
        let arr = []
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.printStack());
myStack.push('youtube');
console.log(myStack.printStack());
console.log(myStack.peek());


