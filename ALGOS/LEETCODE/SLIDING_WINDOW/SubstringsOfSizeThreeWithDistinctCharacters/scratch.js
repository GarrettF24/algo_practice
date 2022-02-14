// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.
function substringsOfSizeThreeWithDistinctCharacters(string) {
  // let count = 0;
  // for (let i = 0; i < s.length - 2; i++) {
  //   if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) count++;
  // }
  // return count;
  // create a sliding window of size 3 and keep track of unique chars in window using a map

  //Create a map to store unique chars
  const map = {};
  let counter = 0;
  let start = 0;
  //loop through the chars
  for (let i = 0; i < string.length; i++) {
    //if char not in map add it
    let char = string[i];
    map[char] = map[char] + 1 || 1;
    //if i greater than 2
    if (i > 2) {
      //decreaase window size by 1
      char = string[start];
      //remove initial char from map as sliding window becomes smaller
      map[char] > 1 ? (map[char] = map[char] - 1) : delete map[char];
      start++;
    }
    //if map length > 3 ie substring has 3 unique chars
    if (Object.keys(map).length > 2) {
      counter++;
    }
  }

  return counter;
}

module.exports = substringsOfSizeThreeWithDistinctCharacters;
