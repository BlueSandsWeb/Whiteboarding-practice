// NODE
class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

// LIST
class LinkedList {
  constructor(node) {
    (this.head = null), (this.size = 0);
  }
  // Add a node
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }

  // get by index
  get(index) {
    if (index > -1 && this.head !== null) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        if (current.next !== null) {
          current = current.next;
        } else {
          return null;
        }
      }
      return current.data;
    } else {
      return null;
    }
  }

  sizeCheck() {
    return this.size;
  }

  remove(index) {
    if (index > -1 && this.head !== null) {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (current.next !== null) {
          current = current.next;
        }
      }

      if (current.next !== null && current.next.next !== null) {
        const removeNode = current.next;
        current.next = current.next.next;
        this.size--;
        return removeNode.data;
      } else if (current.next !== null) {
        const removeNode = current.next;
        current.next = null;
        this.size--;
        return removeNode.data;
      } else if (this.head === current) {
        const data = current.data;
        this.head = null;
        this.size--;
        return data;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

const testList = new LinkedList();
// Test1
console.log("Test1");
testList.add("Joe");
console.log(testList.get(0));
console.log(testList.get(1));
console.log(testList.remove(0));
console.log(testList.get(0));
console.log(testList.get(1));

console.log("");

// Test2
console.log("Test2");
testList.add("Joe");
testList.add("Bob");
testList.add("Jim");
testList.add("Randy");
testList.add("Rick");
console.log(testList.get(0));
console.log(testList.get(1));
console.log(testList.get(2));
console.log(testList.get(3));
console.log(testList.get(4));
console.log(testList.get(5));
console.log(testList.sizeCheck());

console.log("");
console.log(testList.remove(-1));
console.log(testList.remove(0));
console.log(testList.remove(6));
console.log("");

console.log(testList.get(0));
console.log(testList.get(1));
console.log(testList.get(2));
console.log(testList.get(3));
console.log(testList.get(4));
console.log(testList.get(5));
console.log(testList.sizeCheck());
