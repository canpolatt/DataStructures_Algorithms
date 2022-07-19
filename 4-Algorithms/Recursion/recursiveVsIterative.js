/*
! Anything you do with a recursion CAN be done iteratively(loop)


Keep in mind that there's always two options, there's always pros and cons, a good engineer is somebody who can make the
right decisions based on those pros and cons.


Recursion
----------
Pros:
-DRY
-Readability
Cons:
-Large stack

--Recursion is really useful for things such as tree data structures and doing traversal because that is often the case.




Tail Call Optimization
- In JavaScript with ES6, it allows recursion to be called without increasing the call stack.
- https://2ality.com/2015/06/tail-call-optimization.html
- TCO (tail call optimization) is the process by which a smart compiler can make a call to a function and take no
  additional stack space. By simpler means, the compiler changes it from recursive to iterative, for JavaScript
  developer, even though tail call optimization is part of the language specification in ES6, it isn’t supported by
  many engines and that may never change.


New Rule:
Every time you are using a tree or converting something into a tree, consider recursion.
1.Divided into a number of sub-problems that are smaller instances of the same problem.
2.Each instance of the sub-problem is identical in nature.
3.The solutions of each sub-problem can be combined to solve the problem at hand.

Divide and Conquer using Recursion
-Dividing up the problem piece by piece until you get closer and closer.

 */