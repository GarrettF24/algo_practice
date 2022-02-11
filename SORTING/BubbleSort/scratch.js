// function sort(arr) {
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//               let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// sort([4,2,6,3,1,7,13,24,11])

// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr
// }
// bubbleSort([4,2,6,3,1,7,13,24,11])

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
