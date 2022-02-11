// My solution
function isPalindrome(string) {
  // Write your code here.
  let reversedStr = string.split("").reverse().join("")
  if (string === reversedStr) return true
  return false
}

// O(n^2) time | O(n) space
// function isPalindrome(string) {
//   // Write your code here.
//   let reversedStr = ""
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedStr += string[i]
//   }
//   return string === reversedStr
// }

// O(n) time | O(n) space
// function isPalindrome(string) {
//   const reversedChar = []
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedChar.push(string[i])
//   }
//   return string === reversedChar.join("")
// }

// O(n) time | O(1) space
// function isPalindrome(string) {
//   let left = 0
//   let right = string.length - 1
//   while (left < right) {
//     if (string[left] !== string[right]) return false
//     left++
//     right--
//   }
//   return true
// }

console.log(isPalindrome("abcdcba"))
