// My solution refactored 3 times down to one line. I think this is bad time complexity though.
// function sortedSquaredArray(array) {
//   // Write your code here.
//   let arr = []
//   for (let i = 0; i < array.length; i++) {
//     arr.push(array[i] * array[i])
//   }
//   return arr.sort((a, b) => a - b)
// }

// function sortedSquaredArray(array) {
//   // Write your code here.
//   let powed = array.map((x) => Math.pow(x, 2))
//   return powed.sort((a, b) => a - b)
// }

// function sortedSquaredArray(array) {
//   // Write your code here.
// 	return array.map(x => Math.pow(x,2)).sort((a,b) => a - b)
// }

//algoexpert solutions
//O(nlogn) time | O(n) space - where n is the length of the input array
// function sortedSquaredArray(array) {
//   const sortedSquares = []
//   for (let i = 0; i < array.length; i++) {
//     const value = array[i]
//     sortedSquares[i] = value * value
//   }
//   sortedSquares.sort((a, b) => a - b)
//   return sortedSquares
// }

// O(n) time | O(n) space - where n is the length of the input array
// function sortedSquaredArray(array) {
//   const sortedSquares = []
//   let smallerValueIdx = 0
//   let largerValueIdx = array.length - 1
//   for (let i = array.length - 1; i >= 0; i--) {
//     const smallerValue = array[smallerValueIdx]
//     const largerValue = array[largerValueIdx]

//     if (Math.abs(smallerValue) > Math.abs(largerValue)) {
//       sortedSquares[i] = smallerValue * smallerValue
//       smallerValueIdx++
//     } else {
//       sortedSquares[i] = largerValue * largerValue
//       largerValueIdx--
//     }
//   }
//   return sortedSquares
// }

console.log(sortedSquaredArray([1, 2, 3, 4, 7, 5, 5, 9, 20]))
