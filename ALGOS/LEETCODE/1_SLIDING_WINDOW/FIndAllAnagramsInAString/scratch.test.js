const findAnagrams = require('./scratch');
test('should return starting indexes of all anagrams in string', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toBe([0, 6]);
});
