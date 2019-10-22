// Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
    let string = str.split("");
    let reverseString = [];
    for(let i = 0; i < str.length; i++){
      reverseString[i] = string.pop();
    }
    return reverseString.join("");
    
  }
  
  console.log(reverseString("hello"));

// Tests:

// 'hello world' // 'dlrow olleh'
// 'asdf'        // 'fdsa'
// 'CS rocks!'   // '!skcor SC'
