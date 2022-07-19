/*
Recursion is when you define something in terms of itself, simply it's a function that refers to itself inside of the
function.

**** Recursion is really good for task that have repeated subtasks to do.
**** We should use recursion when it makes code more readable but sometimes it can be less efficient than iterative or
looping solutions.
!!! Space complexity and recursion are not friend

function inception() {
    inception();
}
-> If we run the function above we get an error saying maximum call stack size exceeded.

-If function keeps calling over and over again it's gonna fill something. This is called Stack Overflow.
-The computer needs to allocate memory to remember things. Stack overflow can occur when we have recursion, and there's
no way to stop this recursive call.
-Every recursive function needs to have something called a base case or a stop point.
 */

/*let counter=0;
function inception() {
    if(counter>3){
        return "done!";
    }
    counter++;
    inception();
}

console.log(inception());undefined*/
// We get undefined as a output because functions added stack and popped last to first. Therefore, last function return
// "done" but the other ones returns nothing in short "undefined"

//So we need to keep telling it to return this "done" and bubble it up towards the very end.


let counter = 0;

function inception() {
    if (counter > 3) {
        return "done!";
    }
    counter++;
    return inception();
}

console.log(inception()); // done

/*
1.Identify the base case -> where to stop
2.Identify the recursive case
3.Get closer and closer and return when needed. Usually you have 2 returns

Recursion:
-Merge sort
-Quick sort
-Tree Traversal
-Graph Traversal
 */