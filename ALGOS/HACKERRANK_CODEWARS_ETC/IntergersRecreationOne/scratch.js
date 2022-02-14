// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// go over all the numbers from m to n;
// find all the divisors of the current number (i);
// square all the divisors and add them up;
// check if the resulting sum is a square number and if it is, store the number (i) and the sum into an array;

function listSquared(m, n) {
  const res = []

  for (let i = m; i <= n; i++) {
    const divs = divisorsOf(i)

    const sumOfSquaredDivs = divs.reduce(
      (accumulator, current) => (accumulator += current * current),
      0
    )

    if (isSquare(sumOfSquaredDivs)) {
      res.push([i, sumOfSquaredDivs])
    }
  }

  return res
}

function divisorsOf(x) {
  const divs = []
  for (let j = 1; j <= x; j++) {
    if (x % j === 0) {
      divs.push(j)
    }
  }

  return divs
}
function isSquare(x) {
  return Math.sqrt(x) % 1 === 0
}

function listSquared(m, n) {
  var arr = []
  for (var i = m; i <= n; i++) {
    var temp = 0
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) temp += j * j
    }
    if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp])
  }
  return arr
}

console.log(listSquared(1, 250))
console.log(listSquared(42, 250))
console.log(listSquared(250, 500))
