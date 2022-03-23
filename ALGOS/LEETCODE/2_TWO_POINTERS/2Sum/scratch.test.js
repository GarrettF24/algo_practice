const twoSum = require('./scratch');

test('sum should equal target and return there indexes (1-indexes)', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});
