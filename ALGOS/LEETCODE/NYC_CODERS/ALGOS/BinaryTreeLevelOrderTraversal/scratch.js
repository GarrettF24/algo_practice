// A binary tree level order traversal generally recommends a breadth first search (BFS) approach with the use of a queue data structure. When we process a node (curr), we'll push the node's children onto the end of the queue in the order in which we want to traverse (in this case, left to right). In this way, we'll have finished putting the next row in the queue at the same time we finish iterating through this row.

// To help us keep track of the rows, we just nest the main loop inside another loop. At the beginning of the outer loop, we capture the queue length, which will tell us how long the row is. Then we can iterate through that many nodes, popping them off the queue's front one at a time, then process any end-of-row instructions. In the case of this problem, that will mean pushing the current row array (row) onto our answer array (ans).

// We'll continue this process until the queue is empty, at which point we will have reached the end of the binary tree, and can return ans.

// Time Complexity: O(N) where N is the number of nodes in the binary tree
// Space Complexity: O(N) for our answer array

const levelOrder = (root) => {
  if (root === null) return [];
  // create a queue
  let queue = [];
  //create array to hold each row
  let result = [];
  //push root into the queue
  queue.push(root);
  //while queue[0] is true/present
  while (queue[0]) {
    //assign rows to variable
    let row = [];
    // Store current size of queue
    const currLevelSize = queue.length;
    for (let i = 0; i < currLevelSize; i++) {
      // dequeue a node
      const node = queue.shift();
      //push the value into the row so all node values end up in the row
      row.push(node.val);
      //if the node has a left or a right push them into the queue for next iteration of for loop
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    //send the row array to the results array
    result.push(row);
  }
  // return the array(result) filled with subarrays of each row of binaryTree(row)
  return result;
};
