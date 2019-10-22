// Write a function called commonElements that has parameters for two arrays.
// Return an array of all items that are present in both arrays.
// Do not modify the arrays that are passed in.

function commonElements(arr1, arr2) {
  let commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
    // console.log(commonArr);
  }
  return commonArr;
}

//Tests
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // => [3, 4]
console.log(commonElements(["a", "b", "c"], ["x", "y", "z", "a"])); // => ['a']
console.log(commonElements([1, 2, 3], [4, 5, 6])); // => []
