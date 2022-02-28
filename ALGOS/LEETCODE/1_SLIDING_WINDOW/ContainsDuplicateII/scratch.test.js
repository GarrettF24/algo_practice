const containsNearbyDuplicate = require('./scratch');

test('Should return true if there are duplicate values and values indexes are <= k', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
});
