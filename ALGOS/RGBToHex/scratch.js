// // The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// // Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// // The following are examples of expected output values:
// // rgb(255, 255, 255) // returns FFFFFF
// // rgb(255, 255, 300) // returns FFFFFF
// // rgb(0,0,0) // returns 000000
// // rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  function toHex(x) {
    if (x < 0) return "00"
    if (x >= 255) return "FF"

    return x.toString(16).length === 1
      ? "0" + x.toString(16).toUpperCase()
      : x.toString(16).toUpperCase()
  }

  return toHex(r) + toHex(g) + toHex(b)
}

console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(0, 0, 0))
console.log(rgb(148, 0, 211))
console.log(rgb(283, 208, 47))
console.log((254).toString(16))
