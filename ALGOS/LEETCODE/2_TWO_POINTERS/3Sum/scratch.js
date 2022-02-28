// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
// I have two pointers...I need to somehow check if those two pointers plus another index all equal up to zero.
//Not sure how this works with two pointers pattern.
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) i++; //Skip if we have already checked for this element before. This makes sure we record it at least once.
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        j++;
      }
      if (sum > 0) k--;
      if (sum < 0) j++;
    }
  }
  return results;
};

// var threeSum = function(nums, target = 0) {
//   const result = [];

//   // we need 3 values for this to work
//   // so return an empty array if we have less than 3
//   if (nums.length < 3) {
//       return result;
//   }

//   // sorting is ok because the function is already O(n^2)
//   // and sort is O(nlogn)
//   // this also lets us stop iterating once weve passed the target value
//   nums = nums.sort((a,b) => a - b );

//   // well use i as our anchor as we move through the array
//   // we stop at nums.length - 2 to prevent undefined for k
//   for (let i = 0; i < nums.length - 2; i++) {

//       // because we sorted the array already
//       // we can stop here if the current iterator is greater than the target value
//       if (nums[i] > target) {
//           break;
//       }

//       // if our iterator is the same as the previous value
//       // skip it to prevent duplicate results
//       if (i > 0 && nums[i] === nums[i - 1]) {
//           continue;
//       }

//       // start j at i + 1
//       let j = i + 1;

//       // start k at end of array
//       let k = nums.length - 1;

//       // walking j and k towards each other to find all possible values
//       // with i as our anchor value
//       while (j < k) {
//           let sum = nums[i] + nums[j] + nums[k];
//           if (sum === target) {
//               result.push([nums[i], nums[j], nums[k]]);

//               // skip duplicate values of j and k
//               while (nums[j] === nums[j + 1]) j++;
//               while (nums[k] === nums[k - 1]) k--;

//               // move j and k inward
//               j++;
//               k--;
//               continue;
//           }
//           if (sum < target) {
//               j++;
//               continue;
//           }
//           if (sum > target) {
//               k--;
//               continue;
//           }
//       }
//   }
//   return result;
// };

module.exports = threeSum;
