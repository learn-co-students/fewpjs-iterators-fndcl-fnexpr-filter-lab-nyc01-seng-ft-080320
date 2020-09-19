// Code your solution here

let findMatching = (drivers, string) => {
  return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
}


let fuzzyMatch = (drivers, string ) => {
return drivers.filter( driver => driver[0].toLowerCase() === string[0].toLowerCase())
}


let matchName = (drivers, string ) => {
  return drivers.filter( driver => driver.name === string )
}