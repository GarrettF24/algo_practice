// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   if (b.length === 0) return a
//   if (a.length === 0) return []
//   let results = []
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] !== b[j]) {
//         results.push(a[i])
//       }
//     }
//   }
//   return results
// }

function arrayDiff(a, b) {
  return (results = a.filter((num) => !b.includes(num)))
}

console.log(arrayDiff([1, 8, 2], []))
console.log(arrayDiff([1, 2], [2]))
console.log(arrayDiff([3, 4], [3]))
console.log(arrayDiff([1, 2, 3], [1, 2]))
console.log(arrayDiff([], [4, 5]))
