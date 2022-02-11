function add(num) {
  // Let the currying begin!
  let count = num
  let sum = function (num2) {
    count += num2
    return sum
  }
  sum.valueOf = function () {
    return count
  }
  return sum
}
