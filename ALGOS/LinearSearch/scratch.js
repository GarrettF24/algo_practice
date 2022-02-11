function linearSearch(arr, val) {
  if (arr.includes(val)) {
    return arr.indexOf(val)
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 4], 4))
console.log(linearSearch([1, 2, 3, 4], 1))
console.log(linearSearch([1, 2, 3, 4], 6))
