// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// (for a recursive traversal function)
// add a base case
// call recursive function with left node
// perform operation(s) with node
// call recursive function with right node

var inorderTraversal = function (root, array = []) {
  if (root !== null) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};
