function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let arr1 = num1.toString()
  let arr2 = num2.toString()
  if (num1.length !== num2.length) return false
  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }
  console.log(freqCounter1)
  console.log(freqCounter2)

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false

    if (freqCounter2[key] !== freqCounter1[key]) return false
  }
  return true
}

console.log(sameFrequency(182, 218))

// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
