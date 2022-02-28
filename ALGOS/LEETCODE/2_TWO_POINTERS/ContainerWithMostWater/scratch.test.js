const maxArea = require('./scratch');

test('Returns the maximum area of a container', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});
