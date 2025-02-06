const students = ['Alice', 'Andreas', 'Andreas', 'Bob', 'Costas']

students.forEach(function(val, index, arr) {
    console.log(index, val, arr)
})

let filtered = students.filter(student => student === 'Andreas')
console.log(filtered) // [ 'Andreas' ]

let mapped = students.map(student => 'Student: '+ student)
console.log(mapped) // [ 'Student: Alice', 'Student: Andreas', 'Student: Bob', 'Student: Costas' ]

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum) // 28