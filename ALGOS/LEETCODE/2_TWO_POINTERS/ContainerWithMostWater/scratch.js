// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Time complexity : O(n). Single pass.

// Space complexity : O(1). Constant space is used.

const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let maxarea = 0;
  while (start < end) {
    maxarea = Math.max(maxarea, Math.min(height[start], height[end]) * (end - start));
    height[start] < height[end] ? start++ : end--;
  }
  return maxarea;
};

// This question is asking us what's the largest area,
// regardless of the inside bars, only counting the outside ones

// output - area number
// input - heights array
// constraints - oN run time is probably best
// exceptions - one height array?

// basically find the highest product between length and shorter height

// we'll have two pointers, right and left index
// at each new index change, we'll calculate the shortest side and the area
// update the result based on the new area and the current result
// update the left or right index
// return the end result

// var maxArea = function (height) {
//   let result = 0;
//   let leftIndex = 0;
//   let rightIndex = height.length - 1;

//   while (leftIndex < rightIndex) {
//     // calculate the shortest side and the area
//     let shortestSide = Math.min(height[leftIndex], height[rightIndex]);
//     let area = (rightIndex - leftIndex) * shortestSide;

//     // compare area and result to update the result
//     result = Math.max(area, result);

//     // update the left or right index
//     height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--;
//   }
//   return result;
// };

module.exports = maxArea;
