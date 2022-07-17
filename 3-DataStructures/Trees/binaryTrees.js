/*
    Each node can only have either zero, one or two nodes, and each child can only have one parent.

    Perfect binary tree -> All the leaf nodes are full and there's no node that only has one child.
    Full binary tree -> A node has either zero or two children but never one child.

    Binary search tree
    -lookup O(logN)
    -insert O(logN)
    -delete O(logN)
 */

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}