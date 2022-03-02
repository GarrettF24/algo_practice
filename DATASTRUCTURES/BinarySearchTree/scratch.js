class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(val) {
    // If no root exists return null
    if (!root) return null;
    // Create a current node variable and set it to root
    let currentNode = this.root;
    // Repeat until current node is not null]
    while (currentNode !== null) {
      // If val < current node val
      if (val < currentNode.val) {
        // Set current node to left child
        currentNode = currentNode.left;
        // Else if val > current node val
      } else if (val > currentNode.val) {
        // Set current node to right child
        // Else
        currentNode = currentNode.right;
      } else {
        // Return current node
        return currentNode;
      }
      // Return null
      return null;
    }
  }

  insert(val) {
    //     Create a node with val and store it
    let newNode = new Node(val);
    // If no root exists set root to new node and return
    if (!root) {
      newNode = this.root;
      return newNode;
    }
    // Create a current node variable and set it to root
    let currentNode = root;
    // Repeat until insertion
    while (currentNode.next !== null) {
      // If val < current node val
      if (val < currentNode.val) {
        // If no left child on current node, add new node to left
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          // Else set current node to left child
          currentNode = currentNode.left;
        }
        // If val > current node val
        if (val > currentNode.val) {
          if (currentNode.right === null) {
            // If no right child on current node, add new node to right
            currentNode.right = newNode;
          } else {
            // Else set current node to right child
            currentNode.right = currentNode;
          }
        }
      }
    }
  }
}
