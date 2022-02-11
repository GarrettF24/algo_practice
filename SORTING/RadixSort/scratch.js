function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let largestDigits = 0
  arr.forEach((digit) => {
    largestDigits = Math.max(largestDigits, digitCount(digit))
  })
  return largestDigits
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      digitBuckets[digit].push(arr[i])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))
