// Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

function sortString(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr.sort().join("")
}

// Tests:
console.log(sortString('dcba'))         // =>  'abcd'
console.log(sortString('zycxbwa'))      // =>  'abcwxyz'
console.log(sortString('AzycxbCwBaA'))  // =>  'AABCabcwxyz'