const disemvowel = require('./scratch');

test('removes all vowels from string', () => {
  expect(disemvowel('hello')).toBe('hll');
});
