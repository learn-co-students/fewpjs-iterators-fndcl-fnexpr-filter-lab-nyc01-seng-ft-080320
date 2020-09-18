const findMatching = (array, string) => {
    return array.filter(el => {
        return el.toLowerCase() === string.toLowerCase()
    })
}

const fuzzyMatch = (array, string) => {
    return array.filter(el => {
        return el.startsWith(string)
    })
}

const matchName = (array, string) => {
    return array.filter(el => {
        return el.name === string
    })
}