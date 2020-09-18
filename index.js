// Code your solution here
function findMatching (arr, str) {
  return arr.filter(driver => {
    return driver.toUpperCase() === str.toUpperCase()
  })
}
function fuzzyMatch (arr, str) {
  let letterLength = str.length
  return arr.filter(driver => {
    return driver.slice(0, letterLength) === str
  })  
}
function matchName (arr, str) {
  return arr.filter(driver => {
    return driver.name === str
  })  
}