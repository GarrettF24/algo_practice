// O(n2) --- quadratic time
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

//Refactored, O(n) --- constant time
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// same([1,2,3,2,5], [9,1,4,4,11])

// console.log(same([1,2,3,2], [9,1,4,4]))

// function validAnagram(str1, str2){
//   if(str1.length !== str2.length) {
//       return false
//   }
//   let freqCounter1 = {}
//   let freqCounter2 = {}
//   for(let val of str1) {
//       freqCounter1[val]  = (freqCounter1[val] || 0) + 1
//   }
//   for(let val of str2){
//       freqCounter2[val] = (freqCounter2[val] || 0) + 1
// }
// console.log(freqCounter1)
// console.log(freqCounter2)
// for(let key in freqCounter1){
//         if(!(key in freqCounter2)){
//             return false
//         }
// if(freqCounter2[key] !== freqCounter1[key]){
//             return false
//         }

// }
// return true
// }

// validAnagram("cat", "tac")

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm")
