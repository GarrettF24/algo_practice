//I need to turn num into single digits
//then multiply them together
//turn the result back into single digits and multiple
//until a single digit is returned.
//create variable to keep a count of how many times that happens
//and once the single digit is returned, return count

function persistence(num) {
  if (num.toString().length === 1) return 0
  let count = 0
  let digits = num.toString().split("")
  console.log(digits)
  for (let i = 0; i < digits.length; i++) {
    let numbers = parseInt(digits[i])
    console.log(numbers)
  }
}

console.log(persistence(39))
