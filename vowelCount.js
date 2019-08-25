// Write a function which counts the number of vowels in a given string. 
// Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.

function vowelCount(str) {
    let count = 0;
    const vowels= {"a": 1,"e": 1,"i": 1,"o": 1,"u": 1}; // change to obj
    [...str].forEach((el) => {
      if(el.toLowerCase() in vowels){ // check using obj lookup O(1) time
        count++
      }
    })
    return count
  }

// Tests
console.log("should = 0: ", vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz')); // <--- 0
console.log("should = 3: ", vowelCount('Hello world!')); // <--- 3
console.log("should = 4: ", vowelCount('Pinto beans')); // <--- 4
console.log("should = 12: ", vowelCount('The quick brown fox jumped over the lazy dog.')); // <--- 12
console.log("should = 58: ", vowelCount('Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.')); // <--- 58
console.log("should = 16: ", vowelCount('All I have ever wanted is to be an Uber driver!')); // <--- 16
