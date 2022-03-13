// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// const removeElement = (nums, val) => {
//   let k = 0;
//   let start = 0;
//   let end = nums.length - 1;
//   let lengthOfArray = 0;

//   while (start < end) {
//     // if the start index is val, then we push it to the end by making end = start, end-- | start++ | k++ | lengthOfArray++
//     //
//     if (nums[start] === val && nums[end] !== val) {
//       let temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
//     }
//     if (nums[start] === val && nums[end] === val) {
//       nums.push(nums.slice(nums[start], 1)[0]);
//     }
//     start++;
//     end--;
//     k++;
//   }
//   return k;
// };

//if nums start and end are equal to val...
//Still need to push start to the end...

// array.push(array.splice(index, 1)[0]);

const removeElement = (nums, val) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    // if the start index is val, then we push it to the end by making end = start, end-- | start++ | k++ | lengthOfArray++
    //
    if (nums[start] === val) {
      nums[start] = nums[end];
      end--;
    } else {
      start++;
    }
  }
  return start;
};

module.exports = removeElement;
