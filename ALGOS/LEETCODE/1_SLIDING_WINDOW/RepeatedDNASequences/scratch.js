// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'.

//My solution, working for the run code but time limit exceeded
var findRepeatedDnaSequences = function (s) {
  //sliding window
  //start at 0, end of slide at 9
  //push that substring into an array
  //add 1 to start and slide
  //repeat
  //once end is = s.length filter the array to return only the subtrings that occur more than once.
  let sequences = [];
  let start = 0;
  let end = 9;
  while (end < s.length) {
    sequences.push(s.substring(start, end + 1));
    start++;
    end++;
  }
  //Found this on stackoverflow but it is returning ALL occurences of duplicates.
  result = sequences.filter(
    (a, i, sequences) => sequences.indexOf(a) === i && sequences.lastIndexOf(a) !== i
  );
  console.log(result);

  return result;
};

// O(n) solution from leetcode
// var findRepeatedDnaSequences = function (s) {
//   //intiate variable as the first 10 characters from s
//   let curr = s.slice(0, 10);
//   //create a set and add curr into it.
//   const seen = new Set([curr]);
//   //another set, but empty to start
//   const res = new Set();
//   // starting at the 10th index, keep iterating until i equals s.length
//   for (let i = 10; i < s.length; i++) {
//     //curr = starting at first index + current iteration of i
//     curr = curr.slice(1) + s[i];
//     // if curr is in seen already, add it to res
//     if (seen.has(curr)) res.add(curr);
//     //otherwise add it to seen
//     seen.add(curr);
//   }
//   //spread the values of res into array and return
//   return [...res];
// };

//sets a variable to equal a substring of s
