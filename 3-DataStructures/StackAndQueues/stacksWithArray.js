class Stack {
    constructor() {
        this.stack = [];
        this.top = this.stack[0];
        this.bottom = this.stack[0];
        this.length = 0;
    }

    peek() {
        return this.stack[this.length - 1];
    }

    push(value) {
        this.length++;
        this.stack.push(value);
        if (this.length > 1) {
            this.top = this.stack[this.length - 1];
        } else {
            this.top = this.stack[0];
            this.bottom = this.stack[0];
        }
        return this;
    }

    pop() {
        this.stack.pop();
        this.length--;
        this.top = this.stack[this.length - 1];
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
console.log(myStack.pop());