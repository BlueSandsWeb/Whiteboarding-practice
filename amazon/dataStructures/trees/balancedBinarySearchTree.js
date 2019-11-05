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
    }
    return null;
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
