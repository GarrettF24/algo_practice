function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
  //-------OR----------
  //     if (num < 0 ) return 0;
  //    if (num <= 1 ) return 1;
  //    return num * factorial(num-1);
}

console.log(factorial(5))

function factorial(num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total *= i
  }
}
