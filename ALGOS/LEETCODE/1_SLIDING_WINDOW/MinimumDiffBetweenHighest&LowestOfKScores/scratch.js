// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.
//My Solution sliding window...O(nlogn) due to sorting of array?
//O(1) space because not storing anything?
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;
  nums.sort((a, b) => a - b);
  let minimum = Infinity;
  let left = 0;
  let right = k - 1;
  while (right < nums.length) {
    let potentialMin = nums[right] - nums[left];
    // if (potentialMin < minimum) {
    //   minimum = potentialMin;
    // }
    minimum = Math.min(minimum, potentialMin);
    left++;
    right++;
  }
  return minimum;
};

console.log(minimumDifference([9, 4, 1, 7], 2));

module.exports = minimumDifference;
// Leetcode solution
// var minimumDifference = function(nums, k) {
//   if (nums.length===1) return 0;

//   nums.sort((a,b)=>a-b);

//   let left = 0;
//   let right = k-1;

//   let min = Infinity;

//   while (right<nums.length){
//       min = Math.min(min, nums[right]-nums[left]);
//       right++;
//       left++;
//   }
//   return min;
// };
