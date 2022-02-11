// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// function alphabetPosition(text) {
//   let newStr = text.replace(/[^a-zA-Z]+/g, "").toLowerCase()
//   // console.log(newStr.length)
//   let numbers = []
//   for (let i = 0; i < newStr.length; i++) {
//     // console.log(newStr[i])
//     numbers.push(newStr[i].charCodeAt(0) - 96)
//   }
//   return numbers.join(" ")
// }

function alphabetPosition(text) {
  return text
    .replace(/[^a-zA-Z]+/g, "")
    .toLowerCase()
    .split("")
    .map((value) => value.charCodeAt() - 96)
    .join(" ")
}

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map((c) => c.charCodeAt() - 64)
//     .join(" ")
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."))
//"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
