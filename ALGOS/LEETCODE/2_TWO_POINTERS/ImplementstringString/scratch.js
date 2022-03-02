// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

const strStr = (haystack, needle) => {
  if (needle.length === 0 || needle === haystack) return 0;
  //Find the needle[0] within the haystack
  //if needle is equal to i + the length of needle
  //return needle[0] index
  let needleLength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      //haystack.substring, starts with index ofi and ends at index of i + needlelength
      if (needle === haystack.substring(i, i + needleLength)) return i;
    }
  }
  return -1;
};

module.exports = strStr;
