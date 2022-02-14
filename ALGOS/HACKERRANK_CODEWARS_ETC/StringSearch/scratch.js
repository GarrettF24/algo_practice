//define function that takes two strings
//loop over longer strings
//loop over shorter string
//if characters dont match, break out of inner loop
//if characters do match, keep going
//if inner loop completes and finds match
//increment the count of matches
//return count

// 'Naive Search'
// function stringSearch(string, substring) {
//     let count = 0;
//     for(let i = 0; i < string.length; i++) {
//         for(let j = 0; j < substring.length; j++) {
//           if(substring[j] !== string[i+j]) {
//               break;
//           }
//           if(j === substring.length - 1) {
//               count++
//           }
//         }
//         return count
//     }

// }
// stringSearch("lorie loled", "lol")

function stringSearch(string, substring) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (substring[j] !== string[i + j]) break
      if (j === substring.length - 1) count++
    }
  }
  return count
}

naiveSearch("lorie loled", "lol")
