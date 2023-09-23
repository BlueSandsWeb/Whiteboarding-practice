// Priority Queue

// Description:  There is one line, but it is broken up into different priority levels.  Each new member of a priority group goes to the
// back of it's priority section and each priority section is sorted by the priority group

// Multiple ways to implement.

// MY THOUGHTS
class Node {
  constructor(data, priority) {
    (this.data = data), (this.priority = priority);
  }
}
// Solution 1
// One way is to add nodes to the list that have priority values and data values.  To insert, loop through the list looking for the first node
// with a lower priority and insert before that node.  When removing items, just work from the front towards the back.
// NOTE: If I were implementing this in a production environment, I would create a linked list instead of using an array for operation speed
// when inserting an item
// PROS: Simple implementation.  Insertion is O(n) which isn't too bad as long as the line isn't huge
// CONS: The insertion of a new node into the queue is O(n)
// BIG O: Insertion is O(n), Dequeueing is O(1)

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  add(data, priority) {
    const node = new Node(data, priority);
    let searching = true;
    let i = 0;
    while (searching) {
      if (i === this.queue.length) {
        this.queue.push(node);
        searching = false;
        console.log("added to end", this.queue);
      } else if (
        this.queue.length === 0 ||
        this.queue[i].priority > node.priority
      ) {
        this.queue.splice(i, 0, node);
        searching = false;
        console.log("added to end", this.queue);
      }
      i++;
    }
  }
  dequeue() {
    return this.queue.shift() && console.log("Dequeueing", this.queue);
  }
}

let test = new PriorityQueue();
test.add("tom", 1);
test.add("Jangus", 3);
test.add("Jim", 2);
test.add("Jill", 1);

test.dequeue();

test.add("Tam", 1);
test.add("Bill", 3);
test.dequeue();
test.add("Boris", 2);
test.dequeue();
test.dequeue();
test.add("Sakura", 1);
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();

// Solution 2
// Have a 2 dimensional array broken down by priority group then individuals in the priority queue.
// Pros: Fast insertion
// Cons: slower dequeuing.  Potentially having to run through multiple checks for each item when dequeuing.
// Big O: Insertion is O(p(1)) (num of priority groups), Dequeueing is O(P(1))
