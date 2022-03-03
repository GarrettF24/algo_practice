// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//I can utilize a sliding window. Starting left at 0 and right at the length of p.
//therefore the window would be the same length as p.
//if all the values of p are present in the sliding window.
//push the start index into a array and add 1 to left until right is <= s.length - 1

// put p values into a hash for easier look up?

const findAnagrams = (s, p) => {
  let results = [];
  let map = {};
  let left = 0;
  let right = 0;
  let count = p.length;

  for (const val of p) {
    map[val] = (map[val] || 0) + 1;
  }
  while (right < s.length) {
    if (map[s[right]] > 0) count--;
    map[s[right]]--;
    right++;
    if (count === 0) results.push(left);
    if (right - left === p.length) {
      if (map[s[left]] >= 0) count++;
      map[s[left]]++;
      left++;
    }
  }
  return results;
};
module.exports = findAnagrams;

// const findAnagrams = (s, p) => {
// initialize output array to be returned at the end and neededChars object to store the chars in p.
// populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
// initialize window pointers and the total number of chars needed to form an anagram.
// start sliding the window
// if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0),
// then decrease the count which is the total number of chars that are needed and that still haven't been found.
// decrease the needed amount for the current char and move the window's right end one step forward.
// if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
// at first, the window will increase its length by taking steps forward with its right end.
// after the window length reaches p's length for the first time,
// the window will start moving forward like a caterpillar with the left end moving first.
// if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
// the lines below are the most important to understand:
// every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,
// increment that char's value in the neededChars object (restore the need for that char for the window's future reference).

//   const output = [];
//   const neededChars = {};
//   for (let char of p) {
//     if (char in neededChars) {
//       neededChars[char]++;
//     } else neededChars[char] = 1;
//   }
//   let left = 0;
//   let right = 0;
//   let count = p.length;
//   while (right < s.length) {
//     if (neededChars[s[right]] > 0) count--;
//     neededChars[s[right]]--;
//     right++;
//     if (count === 0) output.push(left);
//     if (right - left == p.length) {
//       if (neededChars[s[left]] >= 0) count++;
//       neededChars[s[left]]++;
//       left++;
//     }
//   }
//   return output;
// };
