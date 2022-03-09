const levelOrder = (root) => {
  // create a queue
  let queue = [];
  // add the root node to the queue
  queue.push(root);
  // while queue is not empty
  while (queue.length) {
    //Store the current size of queue
    const currLevelSize = queue.length;
    // for each node in the queue (current level)
    for (let i = 0; i < currLevelSize; i++) {
      // dequeue a node
      const node = queue.shift();
      // perform operation(s) with node
      console.log(node.val);
      // if node has a left node
      if (node.left !== null) {
        // add left node to the queue
        queue.push(node.left);
      }
      // if node has a right node
      if (node.right !== null) {
        // add right node to the queue
        queue.push(node.right);
      }
    }
  }
};
