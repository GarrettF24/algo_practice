// function jumbledNumbers(str) {
//   let sortedStr = str.split("").sort()
//   // console.log(sortedStr)
//   let nums = []
//   let map = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   }

//   for (let i = 0; i < sortedStr.length; i++) {
//     console.log(sortedStr)
//     //if the character matches example ("o" is equal to one at its zero index)
//     //move that character into words and so on. if words is a match for one of the keys, push that value into
//     //nums
//   }
// }

const str = "TOWNE"
const findNumber = (str = "") => {
  function stringPermutations(str) {
    const res = []
    if (str.length == 1) return [str]
    if (str.length == 2) return [str, str[1] + str[0]]
    str.split("").forEach((chr, ind, arr) => {
      let sub = [].concat(arr)
      sub.splice(ind, 1)
      stringPermutations(sub.join("")).forEach(function (perm) {
        res.push(chr + perm)
      })
    })
    return res
  }
  const legend = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    ZERO: 0,
  }
  const keys = Object.keys(legend)
  const res = {}
  const resArr = []
  let result = ""
  keys.forEach((key) => {
    const match = stringPermutations(key).find((el) =>
      el.split("").every((char) => str.includes(char))
    )
    if (match) {
      const index = str.indexOf(match[0])
      if (!res.hasOwnProperty(key)) {
        res[key] = [index]
      } else if (!res[key].includes(index)) {
        res[key].push(index)
      }
    }
  })
  Object.keys(res).forEach((word) => {
    resArr.push([word, ...res[word]])
  })
  resArr.sort((a, b) => a[1] - b[1])
  resArr.forEach((sub) => {
    result = result + String(legend[sub[0]]).repeat(sub.length - 1)
  })
  return +result
}

console.log(jumbledNumbers("reuonnoinfe"))

//create an object with nums as letters as keys and cooresponding number as its value
//sort the string first to make checking easier.
//loop through the string and see if any combination of words matches keys
// if so (initialze num variable as empty array) push value into array and remove those letters from the string.
//once a word is matched delete those from the string. once they are all gone then return nums.sort((a,b) => a - b)
//move that character into words and so on. if words is a match for one of the keys, push that value into
//nums
