// Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
    let longest = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(longest.length < arr[i].length){
       longest = arr[i];
      }
    }
    return longest;
   }

// Tests:

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string!'