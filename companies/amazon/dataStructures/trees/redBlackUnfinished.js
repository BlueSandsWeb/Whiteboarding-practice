// RED BLACK TREES

// Notes:

// Every node is either red or black.
// Root node is always black

// There are no two adjacent red nodes (A red node cannot have a red parent or red child).

// More reading at: https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/

// Same rules as Binary tree, (smaller num go left, larger go right)

class Node{
  constructor(val, color){
    this.val = val,
    this.color = color,
    this.left = null,
    this.right = null,
  }
}

class rbTree{
  constructor(root){
    this.root = null,
  }

  insert(node, value) {
    const nullChild = {value: null, color: "black", left: null, right: null}
    let newNode = new Node(value, "red")
    newNode.left = nullChild;
    newNode.right = nullChild;
    if(node.value === null){
      return newNode
    } else if(value > node.value) {
      node.right = this.insert(node.right, value)

    }

  }
}