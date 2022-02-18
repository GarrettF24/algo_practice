const subStringWithConcatenationOfAllWords = require('./scratch');

test('Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.', () => {
  expect(
    subStringWithConcatenationOfAllWords('barfoothefoobarman', ['foo', 'bar'])
  ).toEqual([0, 9]);
});
