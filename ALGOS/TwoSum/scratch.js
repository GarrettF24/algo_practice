// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
//   return -1
// }
function twoSum(nums, target) {
  let dic = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dic) {
      return [dic[target - nums[i]], i]
    }
    dic[nums[i]] = i
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
