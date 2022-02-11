//this only works with var, when using let j is not defined on line 9
//as it is out of scope of j for loop
function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

// console.log(insertionSort([2, 1, 9, 76, 4]))

console.log(insertionSort([5, 3, 1, 2, 6, 4, 9, 7, 0, 8]))
