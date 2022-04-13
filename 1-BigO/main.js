// https://www.bigocheatsheet.com/

// What is good code?
// 1.Readable
// 2.Scalable(Speed,Memory)

// Most programming code solution, there's usually a trade off
// between speed and memory.

// Memory: Heap, Stack
// When a program executes, it has two ways to remember things,
// the heap and the stack. The heap usually where we store variables
// that we assign values to, and the stack is usually where we keep track
// of our function calls.

const large = new Array(1000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
}

findNemo(large); // O(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) -> Constant time = O(1)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// anotherFunChallenge  -> BigO (n)

// Rule 1: Worst Case
//     Rule 2: Remove Constants
//         Rule 3: Different terms for inputs
//             Rule 4: Drop Non Dominants

function logAllPairsOfBoxes(boxes) {
  boxes.forEach(function (firstBox) {
    boxes.forEach(function (secondBox) {
      console.log(firstBox, secondBox);
    });
  });
}

// O(n^2) Quadratic Time

// O(n!) Oh NO -> We're adding a nested loop for every input
// that we have.

/// -----------------------------------------------------

function foo(n) {
  for (let i = 0; i < n.length; i++) {
    // Just creating let i = 0
    console.log("foo");
  }
}

foo([1, 2, 3, 4, 5]); // Space complexity O(1)

function boo(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "hi";
  }
  return arr; // [ 'hi', 'hi', 'hi', 'hi', 'hi', 'hi' ]
}

boo(6); // Space complexity O(n)
// Because we're creating a new data structure and adding
// memory. So each item is an additional memory space on
// our computers and times.

// Find 1st, Find Nth...

// const arr = ["hi", "my", "teddy"];
// arr[0]; //oldest tweet O(1)
// arr[arr.length - 1]; // most recent tweet

const arr = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2016 },
];

// O(n^2) -> Compare each tweets date

"asdjdasjsdajasdj".length; // O(1) It's about the fundamental of language -> Built in property
