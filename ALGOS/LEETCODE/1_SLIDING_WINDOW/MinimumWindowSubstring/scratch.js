// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

//I need to iterate through the s string checking for instances of t string. I can
//make a list of the length of a windows starting at first instance of t string within s string
//and check the smallest length at the end.
//have two pointers starting at 0. and a variable window to hold substring.
//loop through string, push first letter of t found in s and begin from there, and - 1 from hashmap
//continue adding all characters after and - 1 from hashmap for all characters until hash is empty.
//move left pointer to the next instance of  a hash key in s.
//continue process, if current window is less than window, window = currentwindow
//return window.
