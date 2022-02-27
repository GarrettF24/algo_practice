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

var containsNearbyDuplicate = function (nums, k) {
  //     if nums.length < 2 || nums.length === 2 && nums[0] === nums[1] && k > 2 return false ?
  // Start i at 0 and j at 1
  // if i === j minus those indexes and check against k
  // if its less than k return true
  //if not add to j and continue
  //if get all the way through i++ and j = i + 1 and start over.
};
