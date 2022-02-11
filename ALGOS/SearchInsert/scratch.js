// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = nums[mid]
    if (guess === target) return mid
    guess > target ? (high = mid - 1) : (low = mid + 1)
  }
  return low
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
