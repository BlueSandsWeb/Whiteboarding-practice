// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// example:
// 11, 2, 4
//  4, 5, 6
// 10, 8, -12

// diagonal top left -> bottom right sum = 4

// diagonal top right -> bottom left sum = 19

// absolute diagonal difference(subtract) = |4 - 19|

function diagonalDifference(arr) {
  let ltr = 0;
  let rtl = arr.length - 1;
  let ltrSum = 0;
  let rtlSum = 0;

  for (let i = 0; i < arr.length; i++) {
    ltrSum += arr[i][ltr];
    rtlSum += arr[i][rtl];
    ltr++;
    rtl--;
  }
  return Math.abs(ltrSum - rtlSum);
}

// Test1
console.log(15 === diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
