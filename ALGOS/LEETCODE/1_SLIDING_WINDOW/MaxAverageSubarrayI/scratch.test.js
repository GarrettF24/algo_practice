const findMaxAverage = require('./scratch');

test('Finds the k length subarray with the highest average in an array', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
});
