// Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
    let arr = [];
    for( let i = 0; i < str.length; i++){
      if(str[i] === '-' || str[i] === '_') {
      } else {
        if(str[i-1] === '-' || str[i-1] === '_') {
          arr.push(str[i].toUpperCase())
        } else {
          arr.push(str[i])
        }
      }
    }
    return arr.join('')
}
// tests:
console.log(toCamelCase("the-stealth-warrior"))
// Should return "theStealthWarrior"
console.log(toCamelCase("The_stealth_warrior"))
// Should return "TheStealthWarrior"