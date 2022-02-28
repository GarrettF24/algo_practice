const threeSum = require('./scratch');

test('Return an array of subarrays with a length of 3 that equal to 0', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
