//My goofball unfinished solution. Passing all tests except for
//12 am times

// function timeConversion(s) {
//   // Write your code here
//   const isTwelve = s.slice(0,2)
//   if(s === "12:00:00AM") {
//       return "00:00:00"
//   }
//   if(isTwelve === "12" && lastTwo === "PM") {
//       return s.substring(0, s.length - 2)
//   }

//   console.log(isTwelve)
//   let lastTwo = s.slice(-2)
//   if(lastTwo === 'PM') {
//    //select first two characters of s,
//    //turn into number and add 12.
//    //turn back into string and put that at the front of s and add the
//    //rest of the string on starting at 3.
//    let firstTwo = parseInt(s.slice(0,3))
//    let military = firstTwo + 12
//   //  console.log(military)
//   //  console.log(firstTwo)
//   let newString = military + s.slice(2)
//   return newString.substring(0, newString.length - 2)
//   }

//Internet solution by turning s into array with ternary statements
function timeConversion(s) {
  const arr = s.slice(0, 8).split(":")
  arr[0] =
    s.indexOf("PM") > -1
      ? arr[0] == 12
        ? "12"
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? "00"
      : arr[0]
  return arr.join(":")
}
// console.log(timeConversion("07:45:55PM"))
// console.log(timeConversion("02:45:55AM"))
// console.log(timeConversion("06:45:55PM"))
// console.log(timeConversion("12:45:55PM"))
// console.log(timeConversion("12:45:55AM"))
