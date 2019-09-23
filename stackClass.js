// A "stack" is an abstract data type.It is a LIFO construct: 
//   Last In, First Out.This is also sometimes referred to as FILO: First In, Last Out.Think of a stack of plates in a dining hall or restaurant's plate dispenser. 
//   The first plate gets a bunch of plates put on top of it. 
//   The last plate you put on the stack of plates is the first one you could remove.

// Now that you have been introduced to JavaScript classes, let's make a class called "Stack" and give it this LIFO functionality. 
// Our Stack class's storage will be an Array.You'll want to make two methods in you Stack class: add and remove. 
// The add method will push an item into storage. The remove method will remove the last item in storage.

// Lastly, add a method to your Stack class called numOfItems.
// If there are no items in your Stack's storage, then return the message, "There are no items in your Stack." 
// If there are items in storage, then return the number of items.

// Before you "run tests" remove all your console.log()s and copy these commands into your script at the end:

class Stack {
  constructor(data) {
    this.storage = [];
  }
  add(data) {
    return this.storage.push(data);
  }
  remove(data) {
    return this.storage.pop();
  }
  numOfItems() {
    if (this.storage.length === 0) {
      return "There are no items in your Stack.";
    } else {
      return this.storage.length;
    }
  }
}

const myStack = new Stack();
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
myStack.add('first');
myStack.add('second');
myStack.add('third');
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage);      // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage);      // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage);      // <--- [ 'first' ]
myStack.remove();
console.log(myStack.storage);      // <--- []
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."