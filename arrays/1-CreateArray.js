const arr = []                  // Create an empty array
const arr1 = [1, 2, 3, 4, 5]    // Create an array with some elements
const arr2 = [1, 'Alice', 3.14, true] // Create an array with different data types
const sparseArr = [1, , 3]      // Create a sparse array
const arr3 = [,,,]              // Create an empty sparse array | length = 3
const arr4 = Array(2)           // Create an empty array with length 2
const grid = [[1, 2], [2, 3], [5, 6, 7]]   // Create a 2D array
const objArr = [{id: 1}, {id: 2}, {id: 3}]  // Create an array of objects

console.log(arr1[0])        // 1

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

for (const el of arr1) {
    console.log(el)
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j])
    }
}

for (const row of grid) {
    for (const item of row) {
        console.log(item)
    }
}