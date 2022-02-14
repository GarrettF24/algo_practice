var lengthOfLastWord = function (s) {
  let string = s.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g, "")
  let trimmed = string.trim()
  console.log(trimmed)
  array = trimmed.split(" ")
  return array.pop().length
  console.log(array)
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("Hello World!    how are you?     "))
console.log(lengthOfLastWord("Hello World"))
