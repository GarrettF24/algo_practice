function makeChange(num) {
  let result = [1, 5, 10, 25]
  for (let i = 3; i >= 0; i--) {
    let coin = Math.floor(num / result[i])
    num = num - result[i] * coin
    result[i] = coin
  }
  return result
}

console.log(makeChange(33))
console.log(makeChange(47))
