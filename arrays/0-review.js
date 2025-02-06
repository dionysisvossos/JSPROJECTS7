const cities = ['Athens', 'Paris', 'Toronto']

//Add a new city to the end of the array - Modifies the array
cities.push('London')

let city = cities[0]
console.log(city) // Athens

cities[1] = 'Rome'

cities.forEach(c => console.log(c)) // Athens, Rome, Toronto, London

cities.sort()

cities.sort((a, b) => a.localeCompare(b, 'en'))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, 'en'))    // Creates a shallow copy of the array and sorts it

// Copy the array
const citiesCopy1 = JSON.parse(JSON.stringify(cities)) // Deep copy

const cities2 = structuredClone(cities)

// Shallow copies -- Spread operator
const cities3 = [...cities]

const nums = [1 ,2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = cities.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)