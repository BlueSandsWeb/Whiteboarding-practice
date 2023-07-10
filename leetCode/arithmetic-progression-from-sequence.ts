// 1502. Can Make Arithmetic Progression From Sequence
// Easy | 2K | 98 | Companies

// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

function canMakeArithmeticProgression(arr: number[]): boolean {
  // sort
  arr.sort((a, b) => (a >= b ? 1 : -1));
  // check diff between 0 and 1
  let diff = Math.abs(arr[0] - arr[1]);
  let answer = true;
  // loop checking diff between each
  for (let i = 0; i < arr.length - 1; i++) {
    // check diff between i and i+1
    const num1 = arr[i];
    const num2 = arr[i + 1];
    // console.log("num1 :>> ", num1);
    // console.log("num2 :>> ", num2);
    // console.log("num1 - num2 :>> ", num1 - num2);
    if (Math.abs(num1 - num2) !== diff) {
      answer = false;
    }
  }

  return answer;
}

console.log("test1, should be true: ", canMakeArithmeticProgression([3, 5, 1]));
console.log(
  "test1, should be false: ",
  canMakeArithmeticProgression([1, 2, 4])
);
