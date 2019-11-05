class Node{
  constructor(val){
    this.val = val,
    this.left = null,
    this.right = null,
  }
}

class tree {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      let keepGoing = true;
      while(keepGoing){
        if(current.val > node.val){
          if(current.right === null){
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        } else if (current.val < node.val){
          if(current.left === null){
            current.left = node;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  search() {
    return null;
  }

  remove() {
    return null;
  }

  pivotRight() {
    return null;
  }

  pivotLeft() {
    return null;
  }
}
