// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function containsSum(arr, k) {
  referenceObj = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (referenceObj[`${arr[i]}`]) {
      return true;
    }
    referenceObj[`${k - arr[i]}`] = true;
  }
  //   console.log(referenceObj);
}

console.log(containsSum([10, 15, 3, 7], 17) === true);
console.log(containsSum([10, 7, 11, 22, 23], 21) === true);
console.log(
  containsSum(
    [10, 17, 5, 8, 9, 12, 651, 65, 1, 6, 5, 1, 65, 65, 6, 51, 6, 5, 1, 62],
    7
  ) === true
);
