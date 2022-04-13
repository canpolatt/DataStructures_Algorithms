//Arrays
const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storage

//access
strings[0]; //O(1)

//push
strings.push("e"); //O(1)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift("x"); // add x at the beginning of the array
// O(n) because its depending size of array

//splice
strings.splice(2, 0, "alien");
//O(n)

//Static vs Dynamic arrays
//Dynamic arrays allow us to copy and rebuild an array at a new location

//If underneath the hood JS and our machine only created four blocks of memory
//for this array and we add another "implicitly we know that its a dynamic array"
//its gonna loop over these items, copy them and move it to a different location with
//now eight blocks of space (it usually doubles the space)
