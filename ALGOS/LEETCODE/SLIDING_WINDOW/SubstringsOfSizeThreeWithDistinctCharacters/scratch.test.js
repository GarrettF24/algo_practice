const subtrOfSizeThreeWithDisChars = require('./scratch');

test('Given a string s, return the number of good substrings of length three in s​​​​​​', () => {
  expect(subtrOfSizeThreeWithDisChars('xyzzaz')).toBe(1);
});
