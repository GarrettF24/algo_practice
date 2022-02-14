function sumUpandCountDown(n1, n2) {
  let sum = n1 + n2
  let countdown = setInterval(() => {
    console.log(sum)
    sum--
    if (sum < 0) {
      clearInterval(countdown)
    }
  }, 1000)
}

console.log(sumUpandCountDown(5, 5))
