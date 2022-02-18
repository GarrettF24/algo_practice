// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// var groupAnagrams = function (strs) {
//   let hash = {};
//   let anagramArr = [];

//   for (let i = 0; i < strs.length; i++) {}
//   for (const val of strs) {
//     hash[val] = (hash[val] || 0) + 1;
//   }

//   console.log(hash);

//   //call the function and if that is true push into subarray of anagramArray

//   return anagramArr;
// };

// //All similar values get pushed into subarray
// //as they get pushed, we subtract from value in order to remove them.

// function checkIFStringsHaveSameCharacters(str1, str2) {
//   // functionality to check if they have same characters
//   // if so return true.
//   if (str1.length !== str2.length) return false;
//   //eat
//   //['e' 'a' 't'] ---> ['a', 'e', 't']
//   //ate --> ['a', 'e', 't']
// str1.split('').sort().join('') === str2.split('').sort().join('')
// }

var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split('').sort().join('');
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
