//return and object with keys that are lowercase(toLowerCase()) alphanumeric chars
//in the string. values should be the counts for those characters
//make object to return at end
//loop over string, for each character...
//if the char is a number/letter AND is a key in object, add 1 to count
//if the char is a number/letter AND not in object, add it to object and
//set value to 1.
//if char is something else. don't do anything.
// return object at end
// function charCount(str) {

//     let result = {}
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()

//         if(char.match(/[0-9a-z]/g)) {
//         if(result[char] > 0) {
//             result[char]++
//         } else {
//             result[char] = 1;
//         }
//        }
//     }

//     return result

// }

function charCount(str) {
  let result = {}
  for (let char of str) {
    //         char = char.toLowerCase()
    //          if(char.match(/[0-9a-z]/g)) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      result[char] > 0 ? result[char]++ : (result[char] = 1)
      //          result[char] = ++result[char] || 1
    }
  }
  return result
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false
  }
  return true
}

console.log(charCount("Your PIN is 1234!"))
