// Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:
// toBinaryString(6) should return "110" (no leading 0).
// Use of the native method number.toString(2);  is disallowed.

// Version 1 - breaks a rule
// function toBinaryString(number) {
//   return (number >>> 0).toString(2);
// }

// Version 2 works well, and doesn't break any rules
function toBinaryString(number) {
  let arr = [];
  if (number === 0) {
    return "0";
  }
  while (number > 0) {
    arr.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return arr.join("");
}

console.log(toBinaryString(0), toBinaryString(0) === "0"); // <--- 0
console.log(toBinaryString(1), toBinaryString(1) === "1"); // <--- 1
console.log(toBinaryString(2), toBinaryString(2) === "10"); // <--- 10
console.log(toBinaryString(3), toBinaryString(3) === "11"); // <--- 11
console.log(toBinaryString(4), toBinaryString(4) === "100"); // <--- 100
console.log(toBinaryString(5), toBinaryString(5) === "101"); // <--- 101
console.log(toBinaryString(6), toBinaryString(6) === "110"); // <--- 110
console.log(toBinaryString(7), toBinaryString(7) === "111"); // <--- 111
console.log(toBinaryString(8), toBinaryString(8) === "1000"); // <--- 1000
console.log(toBinaryString(9), toBinaryString(9) === "1001"); // <--- 1001
console.log(toBinaryString(10), toBinaryString(10) === "1010"); // <--- 1010
console.log(toBinaryString(11), toBinaryString(11) === "1011"); // <--- 1011
console.log(toBinaryString(12), toBinaryString(12) === "1100"); // <--- 1100
console.log(toBinaryString(13), toBinaryString(13) === "1101"); // <--- 1101
console.log(toBinaryString(14), toBinaryString(14) === "1110"); // <--- 1110
console.log(toBinaryString(15), toBinaryString(15) === "1111"); // <--- 1111
console.log(toBinaryString(16), toBinaryString(16) === "10000"); // <--- 10000
