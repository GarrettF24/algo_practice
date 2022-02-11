function findTheThreeLargestNumbers(array) {
  return array.sort((a, b) => a - b).slice(array.length - 3)
}

// O(n) time | O(1) space
// function findTheThreeLargestNumbers(array) {
//   const threeLargest = [null, null, null]
//   for (const num of array) {
//     updateLargest(threeLargest, num)
//   }
//   return threeLargest
// }

// function updateLargest(threeLargest, num) {
//   if (threeLargest[2] === null || num > threeLargest[2]) {
//     shiftAndUpdate(threeLargest, num, 2)
//   } else if (threeLargest[1] === null || num > threeLargest[1]) {
//     shiftAndUpdate(threeLargest, num, 1)
//   } else if (threeLargest[0] === null || num > threeLargest[0]) {
//     shiftAndUpdate(threeLargest, num, 0)
//   }
// }

// function shiftAndUpdate(array, num, index) {
//   for (let i = 0; i <= index; i++) {
//     if (i === index) {
//       array[i] = num
//     } else {
//       array[i] = array[i + 1]
//     }
//   }
// }

console.log(
  findTheThreeLargestNumbers([2224, 124, 432, 222, 453, 789, 4334, 5000])
)
