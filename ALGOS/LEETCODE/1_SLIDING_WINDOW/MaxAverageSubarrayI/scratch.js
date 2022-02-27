// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
// My timeboxed solution
// var findMaxAverage = function (nums, k) {

//   let left = 0;
//   let right = 0;
//   let average = -Infinity;
//   let currentAverage = nums.slice(left, right + 1).reduce((a, b) => a + b);
//   console.log('Current Average ' + currentAverage);

//   while (right < nums.length) {
//     if (currentAverage > average) {
//       average = currentAverage;
//       console.log('AVERAGE: ' + average);
//     }
//     left++;
//     right++;
//   }
//   return average / k;
// };

//Leetcode solution
var findMaxAverage = function (nums, k) {
  if (nums.length <= 0 || k > nums.length) return;
  let left = 0;
  let right = 0;
  let max = -Infinity;
  let avg = -Infinity;
  let sum = 0;

  while (right < nums.length) {
    //Current window length
    const windowSize = right - left + 1;
    //Add up the window total
    sum += nums[right];
    //if the window is less than k, add to the window so we can eventually hit window length.
    if (windowSize < k) {
      right++;
      //if the window is equal to k
    } else if (windowSize === k) {
      //average equals the sum of the window divided by k
      avg = sum / k;
      //Max is the maximum between the average and the max(last averaged window)
      max = Math.max(avg, max);
      //remove the starting window value from the window so we can increase i and have that be the new window start.
      sum -= nums[left];
      left++;
      right++;
    }
  }
  return max;
};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
module.exports = findMaxAverage;
