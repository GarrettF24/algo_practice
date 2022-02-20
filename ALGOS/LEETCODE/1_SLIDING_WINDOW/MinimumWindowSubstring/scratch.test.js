const minWindow = require('./scratch.js');

test('returns the minimum window substring', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  expect(minWindow('a', 'a')).toBe('a');
  expect(minWindow('a', 'aa')).toBe('');
});
