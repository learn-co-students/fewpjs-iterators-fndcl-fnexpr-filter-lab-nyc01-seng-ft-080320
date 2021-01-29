// Code your solution here
let findMatching = function (arr, driver) {
    return arr.filter(el =>
        el.toLowerCase() === driver.toLowerCase()
    )
}

let fuzzyMatch = function (arr, driver) {
    return arr.filter(el => {
        if (el.indexOf(driver) === 0) return el
    })
}

let matchName = function (arr, driver) {
    return arr.filter(el =>
        el.name === driver
    )
}