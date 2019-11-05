function reverseString(str) {
  let newStr = str.split("");
  for (let i = 0; i < str.length / 2; i++) {
    newStr[i] = str[str.length - i - 1];
    newStr[str.length - i - 1] = str[i];
  }
  return newStr.join("");
}

console.log(reverseString("Hello"));
console.log(reverseString("Reverse me"));
console.log(reverseString("a"));
console.log(reverseString(""));
console.log(
  reverseString(
    "You have power over your mind – not outside events. Realize this, and you will find strength."
  )
);
