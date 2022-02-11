// newArr and sequence are both rendering as objects even though I am pretty
// sure they should be arrays. WTF!

function isValidSubsequence(array, sequence) {
  // Write your code here.
  console.log("sequence: " + typeof sequence)
  let newArr = []
  console.log(
    "Lets FIND OUT IF THIS THING IS AN ARRAY! " + Array.isArray(newArr)
  )
  console.log(
    "newArr: " +
      typeof newArr +
      " <--- AND NOW ITS SAYING ITS AN OBJECT?? WHAT COULD HAVE POSSIBLY CHANGED IN ONE LINE OF CODE?????"
  )
  let subPosition = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[subPosition]) {
      newArr.push(array[i])
      subPosition++
    }
  }
  console.log(`This is the newArr: ${newArr} <- Not Array. Fucker`)
  console.log(
    `This is the sequence: ${sequence} <- Also Not Array. Double Fucker`
  )
  console.log(newArr) //says its a fucking array
  console.log(sequence) // also  a array...fuck you
  // let whyAreYouNotAlreadyAnArray = newArr.split("") //newArr.split is not a function BECAUSE ITS ALREADY AN ARRAY
  //EVEN THOUGH ITS PRETENDING TO BE AN OBJECT! DAAAAAAMMMNN YOOOOOOU!
  // console.log(whyAreYouNotAlreadyAnArray)
  return false
}

// function isValidSubsequence(array, sequence) {
//   let arrIdx = 0
//   let seqIdx = 0
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++
//     arrIdx++
//   }
//   return seqIdx === sequence.length
// }

console.log(isValidSubsequence([2, 3, 4, 6, 7, 8, 21, 234], [2, 3, 8, 234]))
