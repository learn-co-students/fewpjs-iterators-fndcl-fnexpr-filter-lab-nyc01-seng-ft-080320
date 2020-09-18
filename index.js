// Code your solution here

function findMatching(drivers, name) {
//string.toLowerCase()
    return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase())
}

// function fuzzyMatch(drivers, string) {
//     return drivers.filter ( driver => driver.includes(string))
// }

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }


function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string)
}
