//     //set a variable to hold results
//     //loop through queries checking if each iteration is a match to an index of string.
//     //if it is, add to results.
//     //add to results but each instance of a query must have it's own index in results
//     //with every instance of a query, add
// function matchingStrings(strings, queries) {
//     // Write your code here
//     // console.log(strings, queries)
//     let results = []
//     for (let i = 0; i < strings.length; i++) {
//         // console.log(strings[i])
//        for(let j = 0; j < queries.length; j++) {
//            if (queries[j] === strings[i] ) {
//                results.push(queries[j])

//            }
//        }

//     }
//     console.log(results)
// }

function matchingStrings(strings, queries) {
  let map = {},
    output = []
  for (let i = 0; i < strings.length; i++) {
    if (!map[strings[i]]) {
      map[strings[i]] = 1
    } else {
      map[strings[i]] += 1
    }
  }

  for (let j = 0; j < queries.length; j++) {
    if (map[queries[j]]) {
      output.push(map[queries[j]])
    } else {
      output.push(0)
    }
  }
  return output
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
)
