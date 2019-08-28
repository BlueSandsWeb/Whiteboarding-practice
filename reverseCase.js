// Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

function reverseCase(str) {
  let arr = str.split("");
  let arrRev = [];
  arr.forEach(function(i) {
    if (i === i.toUpperCase()) {
      arrRev.push(i.toLowerCase());
    } else {
      arrRev.push(i.toUpperCase());
    }
  });
  return arrRev.join("");
}

let string = "HELLO world!";
console.log(reverseCase(string)); // <--- hello WORLD!

string = "HeLlO wOrLd!";
console.log(reverseCase(string)); // <--- hElLo WoRlD
