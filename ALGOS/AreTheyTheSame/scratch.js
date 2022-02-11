// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
// that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the
// order.

function comp(array1, array2) {
  let testArr = array1.map((num) => Math.pow(num, 2))
  let sortedTest = testArr.sort((a, b) => a - b)
  let sortedArr2 = array2.sort((a, b) => a - b)
  console.log(sortedTest.join(","), sortedArr2.join(","))
  return sortedTest.join(",") === sortedArr2.join(",")
}

console.log(comp([1, 2, 3, 4, 5], [16, 1, 9, 25, 4]))
