// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Here's my solution using JavaScript. Should be pretty easy to follow. Basically, I keep calculating the sum of squares until I come across one that I've already seen. The nice thing about this approach is that it memoizes all values so if this were used on multiple numbers, in the event that during the process a previously seen number is encountered, an answer can immediately be given.

//

var isHappy = function (n) {
  var map = {};
  while (n !== 1 && !map[n]) {
    map[n] = true;

    n = sumOfSquares(n);
  }
  return n === 1 ? true : false;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split('')
    .reduce((sum, num) => {
      return sum + Math.pow(num, 2);
    }, 0);
}

console.log(isHappy(19));
