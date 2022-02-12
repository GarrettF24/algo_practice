const lengthOfLongestSubstring = require('./scratch');

test('Returns the length of the longest substring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});
