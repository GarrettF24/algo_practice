function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //if call < 5 minutes, 3 * total seconds
  //if call >= 5 minutes, 150 * total minutes, so in the case of seconds(decimal) round up. Math.ceil()
  //call that is greater than other calls === free.
  //I need to convert the string into a number and if it is more than 5 minutes round up to the one and times that by 150. if less times by the number of seconds by 3. if the same number is present in S add up the total time between the calls. in the event of phone numbers equalling each other, select the
  //convert string into array, set the phone numbers and call times to variables.

  // console.log(arr)
  let arr = S.split("\n")
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let callDuration = arr[i].slice(0, 8)
    // console.log(callDuration)
    let callToNum = parseInt(callDuration.split(":").join("").slice(3))
    // console.log(callToNum)
    var newTime = time_convert(callToNum)
    console.log(newTime)
    let phoneNumber = arr[i].slice(9)
    let phoneToNum = parseInt(phoneNumber.split("-").join(""))
    // console.log(phoneToNum)
  }
}

console.log(
  solution(`00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090`) //should return 900
)
