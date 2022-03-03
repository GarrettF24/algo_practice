// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:

// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.
// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
// Example 3:

// Input: s = "c"
// Output: ""
// Explanation: There are no nice substrings.

const longestNiceSubstring = function (s) {
  if (!s.length || s.length < 2) {
    return '';
  }

  let pivot = [];

  for (let i = 0; i < s.length; i++) {
    const isUpper = isUpperCase(s[i]);
    if (isUpper && !s.includes(s[i].toLowerCase())) {
      pivot.push(i);
    } else if (!isUpper && !s.includes(s[i].toUpperCase())) {
      pivot.push(i);
    }
  }

  // when the string is nice
  if (!pivot.length) {
    return s;
  }

  // Find the middle pivot index
  const mid = pivot[Math.floor(pivot.length / 2)];
  const leftSubstr = longestNiceSubstring(s.substring(0, mid));
  const rightSubstr = longestNiceSubstring(s.substring(mid + 1));
  // question is asking for the first occurrence of the solution so we have the equality sign >=
  return leftSubstr.length >= rightSubstr.length ? leftSubstr : rightSubstr;
};

function isUpperCase(c) {
  return c.toUpperCase() === c;
}
module.exports = longestNiceSubstring;
