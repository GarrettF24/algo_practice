//I have to get the min total value of arr and max total using only the 4
//smallest values for min, and 4 largest for max
//make a copy of arr for max values.
//sort arrays in ascending and descending order.
//use pop to remove the end of array and use reduce to get the total of each.

function minMax(arr) {
  let min = []
  let max = []
  let newArr = [...arr]
  min = arr.sort((a, b) => a - b)
  min.pop()
  let minArr = min.reduce((a, b) => a + b)

  max = newArr.sort((a, b) => b - a)
  max.pop()
  let maxArr = max.reduce((a, b) => a + b)

  console.log(minArr, maxArr)
}

console.log(minMax([1, 2, 3, 4, 5]))
