// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

//---Solution from Leetcode
const longestOnes = (nums, k) => {
  // left = start of window, right = end of window
  //Right is variable holding number of zeroes turned to me.
  let left = 0;
  let right = 0;
  let zeros = 0;

  while (right < nums.length) {
    if (nums[right++] === 0) zeros++;
    if (zeros > k && nums[left++] === 0) zeros--;
  }

  return right - left;
};

module.exports = longestOnes;
