
/*


** idempotent
    -function given an input always outputs the same output
Example: hash-functions


insert O(1)
lookup O(1) -it might take O(n)
delete O(1)
search O(1)

Hash Tables

Pros
-fast lookups
-fast inserts
-flexible keys

Cons
-unordered
-slow key iteration

*/


let user = {
    age:54,
    name:'Kylie',
    magic:true,
    scream:function(){
        console.log('ahhhhh!')
    }
}
user.scream()

/* If we have enough data with limited memory we're always going
 to have collision.
 There's two common ways to deal with these collisions.
 1- Linked List
 2- Seperate chaining
 */

// The difference between object and map, map allow you to save any data type as the key
// In object we can only save the key as a string
const a = new Map()

// Set is similar to map, the only difference is that it only stores the keys, no values
const b = new Set()

