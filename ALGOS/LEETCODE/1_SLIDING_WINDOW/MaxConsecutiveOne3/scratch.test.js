const longestOnes = require('./scratch');

test('returns maximum number of consecutive ones', () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
});
