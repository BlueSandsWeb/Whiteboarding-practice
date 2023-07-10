// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:

// Input: s = ""
// Output: 0

// @param {string} s
// @return {number}
//

const lengthOfLongestSubstring = function (s: string): number {
  const length = 0;
  let longest = "";
  let pointer1 = 0;
  let pointer2 = 0;

  let keepGoing = true;
  let i = 0;
  while (pointer1 < s.length && keepGoing) {
    console.log("i :>> ", i);
    if (i++ > 50) {
      keepGoing = false;
    }
  }

  return length;
};

console.log(3 === lengthOfLongestSubstring("abcabcbb"));
