// PROBLEM

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// SOLUTION

function productArr(arr) {
  let arrProduct = 1;
  // loop through arr
  arr.forEach(item => {
    // multiply all nums to get product of entire arr
    arrProduct *= item;
  });
  // loop through arr
  let newArr = arr.map(item => {
    return arrProduct / item;
  });
  // make new arr by dividing arr[i] from product of entire arr
  return newArr;
}

console.log(productArr([3, 2, 1]), "should be ", [2, 3, 6]);
console.log(productArr([1, 2, 3, 4, 5]), "should be ", [120, 60, 40, 30, 24]);

// Follow-up: what if you can't use division?

function productArrNoDiv(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum *= arr[j];
      }
    }
    newArr.push(sum);
  }
  return newArr;
}

console.log(productArrNoDiv([3, 2, 1]), "should be ", [2, 3, 6]);
console.log(productArrNoDiv([1, 2, 3, 4, 5]), "should be ", [
  120,
  60,
  40,
  30,
  24
]);
