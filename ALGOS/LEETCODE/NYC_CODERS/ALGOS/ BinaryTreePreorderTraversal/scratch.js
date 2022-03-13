// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// (for a recursive traversal function)
// add a base case
// call recursive function with left node
// call recursive function with right node
// perform operation(s) with node

var preorderTraversal = function (root, array = []) {
  if (root !== null) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};
