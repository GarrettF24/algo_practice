// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Input: nums = [1,2,3,1], k = 3

// index 0(i) = 1, index 3(j) = 1
//distinct equal values at indexes
// k = 3 and j(3) - i(0) = 3.

// k is <= 3 so true
// My attempt
// var containsNearbyDuplicate = function (nums, k) {
//   //     if nums.length < 2 || nums.length === 2 && nums[0] === nums[1] && k > 2 return false ?
//   // Start i at 0 and j at 1
//   // if i === j minus those indexes and check against k
//   // if its less than k return true
//   //if not add to j and continue
//   //if get all the way through i++ and j = i + 1 and start over.
//   let left = 0;
//   let right = 1;
//   while (left < nums.length) {
//     if (nums[right] === nums[left] && nums.indexOf(right) - nums.indexOf(left) <= k)
//       return true;
//     right++;
//     if (right === nums.length) {
//       left++;
//       right = left + 1;
//     }
//   }
//   return false;
// };

// Leetcode
//Sliding window doesnt seem optimal in this case
//This one is a lot easier to understand,
//create a map, if val at i isnt in map put it in with the value at the key and the index as the value
//if nums[i] is present in map and the current iteration - map[nums[i]] <= k then return true
// const containsNearbyDuplicate = (nums, k) => {
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
//     map[nums[i]] = i;
//   }
//   return false;
// };

const containsNearbyDuplicate = (nums, k) => {
  let left = 0;
  let right = 0;
  let map = {};
  while (right < nums.length) {
    if (nums[right] in map) {
      const i = map[nums[right]];
      if (Math.abs(i - right) <= k) return true;
      map[nums[right]] = right;
    } else {
      map[nums[right]] = right;
    }
    right++;
    if (map.length === k) {
      map.delete(nums[left]);
      left++;
      map[nums[left]] = left;
    }
  }
  return false;
};

module.exports = containsNearbyDuplicate;
