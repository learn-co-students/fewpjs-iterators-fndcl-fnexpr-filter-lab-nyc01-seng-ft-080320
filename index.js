// Code your solution here
const findMatching = (driversArray, string) => {
    return driversArray.filter(name => {
        return name.toLowerCase() === string.toLowerCase()
    })
}

const fuzzyMatch = (driversArray, string) => {
    return driversArray.filter(name => {
        return name.toLowerCase()[0] === string.toLowerCase()[0]
    })
}

const matchName = (driversArray, string) => {
    return driversArray.filter(name => {
        return name.name === string
    })
}
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
matchName(drivers, "Bobby")