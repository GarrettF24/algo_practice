function smallestDifference(arr1, arr2) {
  // Write your code here.
  let closestToZero = 5
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < closestToZero) {
      }
    }
  }
}
