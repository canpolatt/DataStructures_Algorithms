/*
Doubly link list is similar, except that it links to the
node before it.
 */


class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = {
            prev: null,
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.getSelectedNode(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        return this;
    }

    getSelectedNode(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    /*

    ************** OTHER METHODS **************

     */

    printList() {
        let current = this.head;
        let arr = [];
        while (current !== null) {
            arr.push(current.value)
            current = current.next;
        }
        console.log(arr.join(' < -- > '))
    }
}

const myLinkedList = new DoublyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.insert(1, 55);
myLinkedList.printList();


/*
Single linked list
+Fairly simple implementation
+It requires lesser memory
+Delete, insert technically less operation so little bit faster

-It cannot be iterated in reverse or traverse from back to front
-If we ever lose the reference of head, the list can actually be
lost in memory forever

** Singly list is appropriate to use when you have less memory
or memory is really expensive. Your main goal is that you want to
do fast insertion and deletion and you don't really have that much searching

Doubly linked list
+It can be iterated or traversed both from the front
or from the back.
+Another beauty is that if you need to delete a previous node,
you don't need to traverse from the head.

-It is fairly complex
-It requires more memory
-There are some extra operations

** Doubly link list are really good when you don't have that much limitation
on memory and when you want good operation for searching for elements such as
searching backwards instead of just forwards.

 */