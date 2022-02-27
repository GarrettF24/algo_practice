const minimumDifference = require('./scratch');
test('Returns minimum possible difference', () => {
  expect(minimumDifference([9, 4, 1, 7], 2)).toEqual(2);
});
