const cleanTheRoom = (array) => {
  // maybe a hashmap...then loop through array checking if i is present in hashmap, if it is and the value is greater than 1
  // than push that into results array as a subarray value amount of times.
  // minus that amount so there is no longer a value.
  // if value is equal to 1, just push the key into the array.
  //continue until all values are zero.
  //might have to sort at beginning to ensure ascending order of results array.
  array.sort((a, b) => a - b);
  let results = [];
  let hash = {};
  for (const val of array) {
    hash[val] = (hash[val] || 0) + 1;
  }
  for (const [key, count] of Object.entries(hash)) {
    count === 1
      ? results.push(parseInt(key))
      : results.push(subArray(parseInt(key), array));
  }
  return results;
};

const subArray = (value, array) => {
  return array.filter((val) => val === value);
};
console.log(cleanTheRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
