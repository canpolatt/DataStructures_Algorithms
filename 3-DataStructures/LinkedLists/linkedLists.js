/*

**Javascript doesn't come prebuilt with link lists.

https://visualgo.net/en/list

prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)

** The primary reason to choose a linked list over something like
an array is simplicity and ability to grow and shrink as needed.

Contains a set of nodes, these nodes have two elements the value
of the data you want to store and a pointer to the next node in line.

 first node is called the head
 last node is called the tail

Finally, link lists are what we call null terminated, which
signifies that it's the end of the list.
 */

/*
const basket = ['apples','grapes','pears']
linked list:
apples -> grapes -> pears -> null

 */


/*
Pointer: It's a reference to another place in memory or another
object or another node.
 */

let obj1 = {a: true};
// We've just created a pointer, a reference to an object, and that is what a pointer is.
let obj2 = obj1; // not copying
//obj1 and obj2 point to the same location in memory
obj1.a = 'booya';
delete obj1;
// Eventhough we deleted object one, we still have object
console.log('2', obj2)
/* Our computer are going to delete the memory that is
unused and because it sees that object is still referencing
that({a:true}) location in memory, that location in memory, it's not
going to delete it.

garbage collector
 */

/* Javascript garbage collector, manage memory automatically.
 {a:true} gets automatically garbage collected and deleted
 because nothing is pointing to it.
 */
obj2='hello';

//A pointer is simply a reference to something else in memory
