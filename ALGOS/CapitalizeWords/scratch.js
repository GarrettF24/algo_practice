// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()]
//   }
//   let res = capitalizeWords(array.slice(0, -1))
//   res.push(array.slice(array.length - 1)[0].toUpperCase())
//   return res
// }

function capitalizeWords(array) {
  //just first letter
  return array.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
  //all letters
  // return array.map((word) => word.toUpperCase())
}
console.log(capitalizeWords(["go", "away", "you", "bitch"]))
console.log(capitalizeWords(["go"]))
