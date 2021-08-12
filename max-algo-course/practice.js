// Define time complexities and possible cases for both algos

// make an algo that takes an array of numbers and returns the smallest value
// O(n
function smallest(arr) {
  if (!arr || arr.length === 0) throw "please give an array";

  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) smallest = arr[i];
  }

  return smallest;
}
console.log(smallest([1, 2, 3, 4, 5]));
console.log(smallest([0, 2, 3, 4, 5]));
console.log(smallest([0, -2, 3, -4, 5]));

// make an algorithm that takes a number as input and return true if it's even and false if it's odd
// O(1)
function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(0));
console.log(isEven(-1));
