const twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (r < numbers.length) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
    if (numbers[l] + numbers[r] < target) l++;
    if (numbers[l] + numbers[r] > target) r--;
  }
};

module.exports = twoSum;
