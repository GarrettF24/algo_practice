function findAllOdds(arr) {
  return arr.filter((num) => num % 2 !== 0)
}

findAllOdds([1, 2, 3, 4, 5])
