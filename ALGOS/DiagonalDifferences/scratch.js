const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]
let primary = 0
let secondary = array.length - 1
let primaryArr = []
let secondaryArr = []

for (let i = 0; i < array.length; i++) {
  //         console.log(array[i][0])
  primaryArr.push(array[i][primary])
  primary++

  secondaryArr.push(array[i][secondary])
  secondary--
}
// console.log(primaryArr, secondaryArr)

const primaryTotal = primaryArr.reduce((acc, curVal) => {
  return acc + curVal
}, 0)

const secondaryTotal = secondaryArr.reduce((acc, curVal) => {
  return acc + curVal
})

console.log(primaryTotal, secondaryTotal)

console.log(Math.abs(primaryTotal - secondaryTotal))
