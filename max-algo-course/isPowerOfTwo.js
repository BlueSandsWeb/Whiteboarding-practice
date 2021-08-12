// check if an input number is a power of two
function isPowerOfTwo(num) {
  // solution 1
  if (num % 2 !== 0 || num < 1) return false;
  for (let i = 2; i < num; i *= 2) {
    if ((i = num)) return true;
    if (i > num) return false;
  }

  // solution 2 using bitwise operators
  if (number < 1) return false;
  return (number & (number - 1)) === 0; // O(1)
}

console.log("isPowerOfTwo(5) :>> ", isPowerOfTwo(5));
console.log("isPowerOfTwo(8) :>> ", isPowerOfTwo(8));
console.log("isPowerOfTwo(16) :>> ", isPowerOfTwo(16));
console.log("isPowerOfTwo(13) :>> ", isPowerOfTwo(13));
