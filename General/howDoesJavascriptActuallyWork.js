/*

Javascript is a single threaded language that can be non-blocking

****** Program
-allocate memory
-parse and execute

****** Javascript Engine
Javascript Engine that each browser implements and Chrome,
it's the V8 and the V8 engine reads the JavaScript that
we write and changes into machine executable instructions for
the browser.

Engine consists of two parts a memory heap and a call stack.
Memory heap -> This is where the memory allocation happens.
Call stack -> This is where your code is read and executed.

Memory leaks happen when you have unused memory, such as, let's
say we're not using the variable X, but it's still there. By having
unused memory, just laying around, it fills up this memory heap. That's
why you might hear why global variables are bad. Global variables are bad because
if we don't forget to clean up after ourselves, we fill up this memory heap and
eventually the browser will not be able to work.

Call stack whats reads and executes our scripts. It reads the code and it gets put
in the call stack. So the JavaScript engine says script has been added. Let's
pop it onto this call stack.

-----------------------------------------
const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}

one();

-----------------------------------------


In call stack:
-console.log('4')
-two()
-one()


Javascript is a single threaded language that can be non-blocking

Single threaded means that it has only one call stack. It can only do one
thing at a time. Whatever is at the top of the call stack, it gets run first, then
below that...

Other languages can have multiple call stacks and these are called multi-threaded.
Beneficial to have multiple call stack so that we don't keep waiting.

Why was JavaScript designed to be single threaded?
-Running code on a single thread can be quite easy since you don't have to deal
with complicated scenarios that arise in multi-threaded environment. You just have
one thing to worry about. Issues with multi-threaded environment, you can have such
things as deadlocks.

Synchronous programming simply means line one gets executed, then line two gets executed,
and then and then...

Stack overflow is this when a stack is overflowing, kind of like we talked about memory
leaks and how the memory heap of a JavaScript engine can overflow well with Stack Overflow.
This happens when the call stack just gets bigger and bigger until it just doesn't have enough
space anymore.

JavaScript engine, which is the V8 engine in Chrome, has a memory heap and a call stack.

Javascript runtime environment is again part of the browser. It's included
in the browser.

setTimeout is part of the web API. It's not technically part of JS.
It's what the browsers give us to use so we can do asynchronous
programming.
Web APIs(DOM,AJAX,Timeout)


Event loop checks if the call stack is empty. If the call stack is empty
it is looking do we have any callbacks? It's gonna check the callback queue
and add it into call stack and then execute it
 */



