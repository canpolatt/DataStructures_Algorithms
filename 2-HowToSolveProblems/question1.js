// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items

// 2 parameters - arrays - no size limit
// return true or false

//We can ask the interviewer, is our goal here to be
//as efficient as possible with our function?
//What's more important to us is time or space complexity etc.

// O(n^2) brute force

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// O(a*b)
// O(1) - Space complexity
// console.log(containsCommonItem([1, 2, 3], [4, 5, 3]));

const arr1 = ["a", "a", "c", "x"];
const arr2 = ["z", "y", "a"];

//  arr1 => obj{
//  a:true
//  b:true
//  x:true
// }

//arr2[index]===obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object
  // where properties === items in the array
  // can we assume always 2 params?

  // Maybe we can modularize code the below
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item
  // in second array exists on created object

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItem2(arr1, arr2));
// O(a+b) Time Complexity
// O(a) Space Complexity
// If interviewer says if there is limited memory or memory is expensive, we can say that
// this solution, altough faster in terms of complexitiy, is more heavy in terms of space complexity

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(arr1, arr2));
