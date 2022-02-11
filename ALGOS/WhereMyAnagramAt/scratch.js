// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// function anagrams(word, words) {
//   //We have to find a way to check if all the letters present in word are present in the array of words, if so return those words
//   //in new array.
//   let results = [] // Push any words that match all the letters in word.
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(word)) {
//       results.push(words[i])
//     }
//   }
//   return results
// }

const sort = (word) => word.split("").sort().join("")

function anagrams(word, words) {
  let token = sort(word)
  let total = []

  for (let x = 0; x < words.length; x++) {
    if (sort(words[x]) === token) {
      total.push(words[x])
    }
  }

  return total
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]))
