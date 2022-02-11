// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point a , and the orange tree is at point b .
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the -axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *
// Apple and orange(2).png

// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t] )?

// For example, Sam's house is between s=7  and t=10 . The apple tree is located at a=4 and the orange at b=12. There are m=3 apples and n=3 oranges. Apples are thrown apples=[2,3,-4] units distance from a, and oranges=[3,-2,-4] units distance. Adding each apple distance to the position of the tree, they land at [4+2, 4+3, 4+-4] = [6,7,0]. Oranges land at [12+3, 4+3, 4+-4] = [6,7,0] . One apple and two oranges land in the inclusive range 7-10 so we print...
// 1
// 2

// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

//if a + distance fallen from tree apples[index] or oranges[index] falls within start of house(s) and end of house(t) range
//count++ amd then return count. for hacker rank console.log final count for apples and oranges.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0
  let orangeCount = 0
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] <= t && a + apples[i] >= s) appleCount++
  }
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) orangeCount++
  }
  console.log(appleCount)
  console.log(orangeCount)
}

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let appleCount = 0
//   let orangeCount = 0
//   apples.forEach((apple) => {
//     if (a + apple <= t && a + apple >= s) appleCount++
//   })
//   oranges.forEach((orange) => {
//     if (b + orange <= t && b + orange >= s) orangeCount++
//   })
//   console.log(appleCount)
//   console.log(orangeCount)
// }

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
