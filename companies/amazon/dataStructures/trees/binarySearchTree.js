class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      const searchTree = node => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        } else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(this.root);
    }
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // THE REST OF THIS IS UNECESSARY FOR A BST BUT I DID IT FOR PRACTICE WITH N-ARY TREES

  // Depth first search goes branch by branch (left to right bottom to top(ish))
  // uses recursion or a stack

  //         4
  //       /   \
  //      2     6
  //     / \   / \
  //    1   3 5   7
  // in-order 1-2-3-4-5-6-7 (left -> root -> right)

  dfsInOrder() {
    let result = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  //         4
  //       /   \
  //      2     6
  //     / \   / \
  //    1   3 5   7
  //
  // pre-order 4-2-1-3-6-5-7 (root -> left -> right)

  dfsPreOrder() {
    let result = [];
    const traverse = node => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  //         4
  //       /   \
  //      2     6
  //     / \   / \
  //    1   3 5   7
  //
  // post-order 1-3-2-5-7-6-4 (left -> right -> root)
  dfsPostOrder() {
    let result = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }

  // Breadth first search goes level by level (level1: root, level2: 1st child of root, level3: 2nd gen children)
  // Uses a queue
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
}
4 - 2 - 1 - 3 - 6 - 5 - 7;
const test = new BST(4);
test.insert(2);
test.insert(1);
test.insert(3);
test.insert(6);
test.insert(5);
test.insert(7);

console.log(test.contains(3));
console.log(test.contains(42));
console.log(test.max());
console.log(test.min());
console.log(test.size());

console.log(test.dfsInOrder());
console.log(test.dfsPreOrder());
console.log(test.dfsPostOrder());
console.log(test.bfs());
