// function onlyElementsAtEvenIndex(array) {
//     var newArray = Array(Math.ceil(array.length / 2));
//     console.log(newArray)
//     for (var i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             console.log(`index ${i}, `)
//             newArray[i / 2] = array[i];
//             console.log(newArray)
//         }
//     }
//     return newArray;
// }

// console.log(onlyElementsAtEvenIndex([1,2,3,4,5,6,7,8,9,10]))

// function subtotals(array) {
//     var subtotalArray = Array(array.length);
//     for (var i = 0; i < array.length; i++) {
//         var subtotal = 0;
//         for (var j = 0; j <= i; j++) {
//             subtotal += array[j];
//         }
//         subtotalArray[i] = subtotal;
//     }
//     return subtotalArray;
// }

// console.log(subtotals([1,2,3,4,5,6,7,8,9,10]))
