// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

//     0 <= nums.length <= 3 * 104
//     -100 <= nums[i] <= 100
//     nums is sorted in non-decreasing order.

// @param {number[]} nums
// @return {number}

function removeDuplicates(nums: number[]): number {
  // first whack
  // Runtime: 163 ms, faster than 14.86% of JavaScript online submissions for Remove Duplicates from Sorted Array.
  //Memory Usage: 41.3 MB, less than 81.65% of JavaScript online submissions for Remove Duplicates from Sorted Array.
  if (nums.length === 0) return 0;
  let pointer1 = 1;
  let pointer2 = 1;
  let keepLooping = true;

  let i = 0;
  while (keepLooping) {
    if (nums[pointer1 - 1] < nums[pointer1]) {
      pointer1++;
    } else if (nums[pointer1] < nums[pointer2]) {
      nums[pointer1] = nums[pointer2];
    } else {
      pointer2++;
    }

    if (pointer1 >= nums.length || pointer2 >= nums.length) {
      keepLooping = false;
    }
  }

  return pointer1;
}

console.log(2 === removeDuplicates([1, 1, 2]));
console.log(5 === removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
