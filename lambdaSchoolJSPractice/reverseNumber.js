// Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  let numStr = num.toString();
  let arr = numStr.split("");
  let arrReverse = [];
  for (let i = 0; i < numStr.length; i++) {
    arrReverse[i] = arr.pop();
  }
  return parseFloat(arrReverse.join(""));
}

// Tests:
console.log(reverseNumber(12345)); // => 54321
