/*
Binary search tree are really, really good, as the name suggests at searching. They're great for comparing things. This
data structure preserves relationships.
Rules:
-All child nodes in the tree to the right of the root node must be greater than the current node.
-A node can only have up to two children because it's a binary tree.

---------------------------------------------------------------------------------------

Why an unbalanced binary search tree is bad?

-Balanced trees: gives us log(n) performance
-Unbalanced trees: it sort of turns into a long linked list. So you now have to loop through every single node and lookup
and searches. So it became o(n) complexity.

** Ideally, we want to balance our search trees so that we can have this performance optimization.

We have things like AVL trees and Red black trees that allow us to make sure that our binary search tree is going to be
balanced.

---------------------------------------------------------------------------------------

BST Pros and Cons

Pros:
-Better than O(n)
-Ordered
-Flexible size

Cons:
-No O(1) operations

---------------------------------------------------------------------------------------

A good thing to keep in mind is that binary searches aren't the fastest for anything. Remember their operations are
usually always  log(n). On average, an array or an object will have faster operation, but there are certain conditions
where they do outperform objects in arrays.

 */

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Mistake that was I made, I lost reference to the root object through changing the code below.
    // currentNode=currentNode.left;
    // currentNode=node
    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //Option 1:No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current
                        //left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                //Option 2: Right child which doesnt have a left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        }

                        // if parent < current, make right child a right child of the parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                }

                //Option 3: Right child that has a left child
                else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }


                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }

    }

}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(37);
tree.insert(15);
tree.insert(1);
tree.insert(6);
tree.remove(9);
//console.log(tree.lookup(223320));
console.log(JSON.stringify(traverse(tree.root)))

//      9
//  4       20
//1   6   15   170

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}