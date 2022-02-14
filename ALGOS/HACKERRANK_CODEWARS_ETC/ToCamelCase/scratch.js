function toCamelCase(str) {
  //  --> passes 4 fails 4 <---
  //    const regex = /[-_]/g

  //    let strArr = str.split(regex)
  //     console.log(strArr)

  //    for(let i = 0; i < strArr.length; i++) {
  //        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  //    }
  //      console.log(strArr)

  // let backToString = strArr.join('')
  // console.log(backToString)

  //     return (backToString.charAt(0).toLowerCase() + backToString.slice(1))    -

  // ---> passes 5 fails 3 <---
  //   const regex = /[-_]/g

  //   let newArray = str.split(regex)
  //   console.log(newArray)
  //     let mapArray = newArray.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  //     newArray.join("")
  //   console.log(newArray)
  //     return mapArray.join("")

  if (str === "") {
    return ""
  }

  if (str.includes("-")) {
    const firstArrayIndex = str.split("-")[0]
    const array = str.split("-").slice(1)
    const adjustedArray = array.map(
      (x) => x.charAt(0).toUpperCase() + x.slice(1)
    )
    const finalArray = [firstArrayIndex, ...adjustedArray]
    return finalArray.join("")
  }
  if (str.includes("_")) {
    const firstArrayIndex = str.split("_")[0]
    const array = str.split("_").slice(1)
    const adjustedArray = array.map(
      (x) => x.charAt(0).toUpperCase() + x.slice(1)
    )

    const finalArray = [firstArrayIndex, ...adjustedArray]
    return finalArray.join("")
  }
}

console.log(toCamelCase("the-stealth-warrior"))
