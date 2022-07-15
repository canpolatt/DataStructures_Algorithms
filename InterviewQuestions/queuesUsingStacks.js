const MyQueue = function () {
    this.stack = [];
    this.length = 0;
    this.top = null;
    this.bottom = null;

};

MyQueue.prototype.push = function (x) {
    this.stack.push(x);
    this.length++;
    if (this.length === 0) {
        this.top = this.stack[0];
        this.bottom = this.stack[0];
    } else {
        this.bottom = this.stack[this.length - 1];
    }

};


MyQueue.prototype.pop = function () {
    const poppedItem=this.stack.shift();
    this.length--;
    return poppedItem;
};



MyQueue.prototype.peek = function () {
    return this.stack[0];
};


MyQueue.prototype.empty = function () {
    return this.length <= 0;

};


const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false