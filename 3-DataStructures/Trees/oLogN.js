/*
Perfectly balanced binary tree

Level 0: 2^0 = 1
Level 1: 2^1 = 2
Level 2: 2^2 = 4
Level 3: 2^3 = 8

------------------------------------------------------------------

I learned that depth and height are properties of a node:

-The depth of a node is the number of edges from the node to the tree's root node.
A root node will have a depth of 0.

-The height of a node is the number of edges on the longest path from the node to a leaf.
A leaf node will have a height of 0.

Properties of a tree:

-The height of a tree would be the height of its root node,
or equivalently, the depth of its deepest node.

-The diameter (or width) of a tree is the number of nodes on the longest path between any two leaf nodes.
The tree below has a diameter of 6 nodes.

------------------------------------------------------------------

# of nodes = (2^h) - 1
log nodes = steps
-logN simply means that based on the height, the maximum number of decisions.
 */