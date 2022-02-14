// function validParentheses(parens) {
//   // your code here ..
//   // if (parens === "") return true
//   // if (parens % 2 === 1) return false
//   let stack = []
//   let map = {
//     "(": ")",
//   }
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] === "(") {
//       stack.push(parens[i])
//     } else {
//       let last = stack.pop()
//       if (parens[i] !== map[last]) {
//         return false
//       }
//     }
//   }
//   if (stack.length !== 0) {
//     return false
//   }
//   return true
// }

function validParentheses(parens) {
  let n = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") n++
    if (parens[i] === ")") n--
    if (n < 0) return false
  }

  return n == 0
}

console.log(validParentheses("(")) //false
console.log(validParentheses(")")) //false
console.log(validParentheses("")) //true
console.log(validParentheses("()")) //true
console.log(validParentheses("())")) //false
