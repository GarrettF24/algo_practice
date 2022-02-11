function findOdd(arr) {
  //happy coding!
  let obj = {}
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1
  }
  // console.log(obj)
  return parseInt(Object.keys(obj).find((val) => obj[val] % 2 === 1))
}

// function findOdd(arr) {
//   var result, num = 0;

//   arr = arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i+1]) {
//       num++;
//     } else {
//       num++;
//       if (num % 2 != 0) {
//         result = arr[i];
//         break;
//       }
//     }
//   }
//   return result;
// }

console.log(findOdd([2, 2, 2, 2, 4, 4, 5, 5, 1, 6, 6, 1, 7, 7, 8, 1, 8]))
