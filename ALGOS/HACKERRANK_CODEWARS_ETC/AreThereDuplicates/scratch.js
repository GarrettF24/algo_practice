function areThereDuplicates(...values) {
  // good luck. (supply any arguments you deem necessary.)
  //     console.log(values)
  let freqCount = {}
  for (let val of values) {
    freqCount[val] = (freqCount[val] || 0) + 1
    if (freqCount[val] > 1) {
      return true
    }
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates("a", "b", "c", "a"))

//freq solution
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

//multiple pointers solution
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }
