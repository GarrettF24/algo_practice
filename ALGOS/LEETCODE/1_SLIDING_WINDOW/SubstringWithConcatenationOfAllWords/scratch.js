// You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.
// In the previous approach, we made use of the fact that all elements of words share the same length, which allows us to efficiently check for valid substrings. Unfortunately, we repeated a lot of computation - each character of s is iterated over many times. Imagine if we had an input like this:

// s = "barfoobarfoo" and words = ["bar", "foo"]

// Valid substrings start at index 0, 3, and 6. Notice that the substrings starting at indices 0 and 3 share the same "foo". That means we are iterating over and handling this "foo" twice, which shouldn't be necessary. We do it again with the substrings starting at indices 3 and 6 - they use the same "bar". In this specific example it may not seem too bad, but imagine if we had an input like:

// s = "aaaa...aaa", s.length = 10,000 and words = ["a", "a", ..., "a", "a"], words.length = 5000

// We would be iterating over the same characters millions of times. How can we avoid repeated computation? Let's make use of a sliding window. We can re-use most of the logic from the previous approach, but this time instead of only checking for one valid substring at a time with each call to check, we will try to find all valid substrings in one pass by sliding our window across s.

// So how will the left and right bounds of the window move, and how can we tell if we our window is a valid substring? Let's say we start at index 0 and do the same process as the previous approach - iterate wordLength at a time, so that at each iteration we are focusing on one potential word. Our iteration variable, say right, can be our right bound. We can initialize our left bound at 0, say left = 0.

// Now, right will move at each iteration, by wordLength each time. At each iteration, we have a word sub = s.substring(right, right + wordLength). If sub is not in words, we know that we cannot possibly form a valid substring, so we should reset the entire window and try again, starting with the next iteration. If sub is in words, then we need to keep track of it. Like in the previous approach, we can use a hash table to keep count of all the words in our current window.

// When our window has reached the maximum size (substringSize), we can check if it is a valid substring. Like in the previous approach, we can use an integer wordsUsed to check if wordsUsed == words.length to see if we made use of all the elements in words, and thus have a valid substring. If we do, then we can add left to our answer.

// Whether we have a valid substring or not, if our window has reached maximum size, we need to move the left bound. This means we need to find the word we are removing from the window, and perform the necessary logic to keep our hash table up to date.

// Another thing to note: we may encounter excess words. For example, with s = "foofoobar", and words = ["foo", "bar"], the two "foo" should not be matched together to have wordsUsed = 2. Whenever we find that sub is in words, we should check how many times we have seen sub so far in the current window (using our hash table), and if it is greater than the number of times it appears in words (which we can find with a second hash table, wordCount in the first approach), then we know we have an excess word and should not increment wordsUsed.

// In fact, so long as we have an excess word, we can never have a valid substring. Therefore, another criterion for moving our left bound should be to remove words from the left until we find the excess word and remove it (which we can accomplish by comparing the hash table values).

// Now that we've described the logic needed for the sliding window, how will we apply the window? In the first approach, we tried every candidate index (all indices up until n - substringSize). In this problem, you may notice that starting the process from two indices that are wordLength apart is pointless. For example, if we have words = ["foo", "bar"], then starting from index 3 is pointless since by starting at index 0, we will move over index 3. However, we will still need to try starting from indices 1 and 2, in case the input looks something like s = "xfoobar" or s = "xyfoobar". As such, we will only need to perform the sliding window wordLength amount of times.

// Current
// 1 / 7
// Algorithm

// Initialize some variables:

// n as the length of s.
// k as the length of words
// wordLength as the length of each word in words.
// substringSize as wordLength * k, which represents the size of each valid substring.
// wordCount as a hash table that tracks how many times a word occurs in words.
// answer as an array that will hold the starting index of every valid substring
// Create a function slidingWindow that takes an index left and starts a sliding window from left:

// Initialize a hash table wordsFound that will keep track of how many times a word appears in our window. Also, an integer wordsUsed = 0 to keep track of how many words are in our window, and a boolean excessWord = false that indicates if our window is currently holding an excess word, such as a third "foo" if words = ["foo", "foo"].
// Iterate using the right bound of our window, right. Start iteration at left, until n, wordLength at a time. At each iteration:
// We are dealing with a word sub = s.substring(right, right + wordLength). If sub is not in wordCount, then we must reset the window. Clear our hash table wordsFound, and reset our variables wordsUsed = 0 and excessWord = false. Move left to the next index we will handle, which will be right + wordLength.
// Otherwise, if sub is in wordCount, we can continue with our window. First, check if our window is beyond max size or has an excess word. So long as either of these conditions are true, move left over while appropriately updating our hash table, integer and boolean variables.
// Now, we can handle sub. Increment its value in wordsFound, and then compare its value in wordsFound to its value in wordCount. If the value is less than or equal, then we can make use of this word in a valid substring - increment wordsUsed. Otherwise, it is an excess word, and we should set excessWord = true.
// At the end of it all, if we have wordsUsed == k without any excess words, then we have a valid substring. Add left to answer.
// Call slidingWindow with each index from 0 to wordLength. Return answer once finished.

// You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.
function subStringWithConcatenationOfAllWords(s, words) {
  let res = [];

  let wordLength = words[0].length;
  let wordCount = words.length;
  let len = wordCount * wordLength; //Length of sliding window

  let map = {};
  for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq

  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len); //Generate substring of sliding window length
    if (isConcat(sub, map, wordLength)) res.push(i);
  }

  return res;
}

function isConcat(sub, map, wordLength) {
  let seen = {};
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength);
    seen[word] = seen[word] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] !== seen[key]) return false; //Word freq must match between map and seen
  }
  return true;
}

module.exports = subStringWithConcatenationOfAllWords;
