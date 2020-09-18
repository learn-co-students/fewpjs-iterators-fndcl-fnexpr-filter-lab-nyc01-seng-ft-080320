// Code your solution here
function findMatching(drivers, string) {
    const matchedDrivers = drivers.filter(driver => 
        { if (driver.toLowerCase() == string.toLowerCase()) {
            return driver
        }}
    ) 
    return matchedDrivers
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

function matchName(drivers, string) {
    const matchedDrivers = drivers.filter(driver => 
        { if (driver.name === string) {
            return driver
        }}
    ) 
    return matchedDrivers
}
