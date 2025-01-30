const cities = ['Athens', 'London', 'Berlin', 'Paris'] 
const numbers = [10, 101, 103, 77, 99, 123, 690, 590]

console.log(cities.sort())  // ["Athens", "Berlin", "London", "Paris"]
console.log(numbers.sort()) // [10, 101, 103, 123, 590, 690, 77, 99]

// numbers.sort(function(a, b) {
//     if (a > b) return 1
//     if (a < b) return -1
//     if (a === b) return 0
// })

numbers.sort(function(a, b) {
    return a - b
})

console.log(numbers) // [10, 77, 99, 101, 103, 123, 590, 690]
console.log(numbers.reverse()) // [690, 590, 123, 103, 101, 99, 77, 10]