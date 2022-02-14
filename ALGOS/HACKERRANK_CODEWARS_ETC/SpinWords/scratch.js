// function spinWords(string) {
//   //TODO Have fun :)
//   //Turn string into an array
//   //loop through array
//   //if a word(index) is 5 letters or more
//   //reverse that word in place
//   //turn array back into string and return string
//   let array = string.split(" ")
//   let testArray = []
//   // console.log(array)
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     if (array[i].length < 5) {
//       testArray.push(array[i])
//     }
//     if (array[i].length >= 5) {
//       testArray.push(array[i].split("").reverse().join(""))

//       //The necessary strings are selected. "fellow" "warriors"
//       //Now inside this conditional we must reverse those strings.
//     }
//   }
//   return testArray.join(" ")
// }
// Alex and I solution
function spinWords(string) {
  let array = string.split(" ")
  let testArray = []
  array.forEach((index) => {
    index.length < 5
      ? testArray.push(index)
      : testArray.push(index.split("").reverse().join(""))
  })
  return testArray.join(" ")
}

console.log(spinWords("Hey fellow warriors"))

//Nerd solutions
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }

// function spinWords(str){
//   return str.split(' ').map(spinSingleWord).join(' ');
// }

// function spinSingleWord(word){
//   return word.length>4 ? word.split('').reverse().join('') : word;
// }

// function spinWords(words){
//   return words.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
// }
