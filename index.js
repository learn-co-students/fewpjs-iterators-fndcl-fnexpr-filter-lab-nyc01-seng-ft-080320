const findMatching = (driverArray, driverName) => {
    return driverArray.filter(driver => {
        return driver.toLowerCase() === driverName.toLowerCase();
    });
}

//.indexOf returns '-1' if value doesn't exist in string. Returns '0' if the partial begins at START.
const fuzzyMatch = (driverArray, partialName) => {
    return driverArray.filter(driver => {
        return driver.toLowerCase().indexOf(partialName.toLowerCase()) === 0;
    });

}

const matchName = (driverAofOs, driverName) => {
    return driverAofOs.filter(driverObj => {
        return driverObj.name === driverName;
    })

}
