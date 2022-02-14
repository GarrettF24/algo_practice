// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
// function solution(str) {
//   let splitStrs = ""
//   if (str.length % 2 !== 0) str += "_"
//   while (str.length) {
//     splitStrs += str.slice(0, 2)
//     splitStrs += " "
//     str = str.slice(2)
//   }
//   let finalArray = splitStrs.split(" ")
//   let popped = finalArray.pop()
//   return finalArray
// }

function solution(str) {
  if (str.length % 2 !== 0) str += "_"
  let splitStrs = []
  while (str.length) {
    splitStrs.push(str.slice(0, 2))
    str = str.slice(2)
  }
  return splitStrs
}

// function solution(s) {
//   return (s + "_").match(/.{2}/g) || []
// }
console.log(solution("abcdef"))
console.log(solution("abcdefg"))
