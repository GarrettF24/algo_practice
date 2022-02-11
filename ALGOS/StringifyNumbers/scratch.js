function stringifyNumbers(obj) {
  var newObj = {}
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

stringifyNumbers({ a: 1, b: 2, c: 3, d: 44, e: 55, f: 666 })
