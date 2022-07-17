/*

##################### MEMORY HEAP != HEAP DATA STRUCTURE #####################
- Memory heap, free storage is a region in our memory where we can store arbitrary
data.

#############################################################################

A Binary Heap is a Binary Tree with following properties.
1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys
as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys
present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is
similar to MinHeap.

-There is no order from left to right like BST

-lookup O(N)
-insert O(logN)
-delete O(logN)

Pros:
-Better than O(n)
-Priority
-Flexible Size
-Fast Insert

Cons:
-Slow lookup

 */