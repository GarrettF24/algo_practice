const strStr = require('./scratch');

test('returns the index of the start of needle', () => {
  expect(strStr('aaaaababbbafdmklf', 'bba')).toEqual(8);
});
