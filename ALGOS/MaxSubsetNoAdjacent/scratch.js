// function maxSubsetSumNoAdjacent(array) {
//   // Write your code here.
//   if (array.length === 0) return 0
//   if (array.length === 1) return array
//   if (array.length === 2) return Math.max(...array)
//   let evensArr = array.filter((v, i) => i % 2 === 0)
//   let oddsArr = array.filter((v, i) => i % 2)
//   console.log(` EVENS:  ${evensArr}  ODDS: ${oddsArr}`)
//   return Math.max(
//     evensArr.reduce((a, b) => a + b),
//     oddsArr.reduce((a, b) => a + b)
//   )
// }
// //Cant add numbers next to each other.

// function maxSubsetSumNoAdjacent(array) {
//   // Write your code here.
//   newArr = []
// }
//12/14 test cases passed.
// function maxSubsetSumNoAdjacent(array) {
//   // Write your code here.
//   if (!array.length) return 0
//   if (array.length === 1) return array[0]
//   //copy array
//   const maxSums = array.slice()
//   //iterate starting at array index of 2
//   for (let i = 2; i < array.length; i++) {
//     //maxsums index = the maxium between maxsums index - 1 and maxsums index minus 2 plus current iteration of array
//     maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
//   }
//   //return the last index of maxsums array
//   return maxSums[maxSums.length - 1]
// }

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0
  if (array.length === 1) return array[0]
  let second = array[0]
  let first = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i])
    second = first
    first = current
  }
  return first
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])) //330
console.log(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3])) //207
// console.log(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4])) //72
// console.log(maxSubsetSumNoAdjacent([1, 15, 3])) //15

//array = [75, 105, 120, 75, 90, 135]
//max sums = [75, 105, 120, 75, 90, 135]

//first iteration i = 2...array[2] = 120
//maxsums[i][2] = 120
//the max of maxsums[105] and maxsums[75] + array[120] is... 105 < 75+ 120 = 195
//maxSums now equals 195

//second iteration i = 3...array[3] = 75
//maxSums[i][3] = 75 [2]               [1]         [3]
//the max of maxSums[195] and maxSums[105] + array[75] is...195 === 195 = 195

//third iteration i = 4....array[4] = 90
//max Sums[i][4] = 90 [3]              [2]         [4]
//the max of maxSums[195] and maxSums[195] + array[90] is...195 < 195 + 90 = 285

//fourth iteration i = 5...array[5] = 135
//maxSums[i][5] =135  [4]             [3]        [5]
//the max of maxSums[285] and maxSums[195] + array[135] is.... 285 < 195 + 135 = 330

//fifth iteration i = 6; i is now greater than array.length; break out of for loop
//return the last element in the maxSums array...maxSums[5] = 330.
