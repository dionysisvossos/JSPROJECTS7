const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// delete
const arr2 = arr.splice(0, 4)   // Removes the first 4 elements
console.log(arr)    // [5, 6, 7, 8]
console.log(arr2)   // [1, 2, 3, 4]

// insert
arr.splice(0, 0, 10)
console.log(arr)    // [10, 5, 6, 7, 8]

// update
arr.splice(0, 1, 11)
console.log(arr)    // [11, 5, 6, 7, 8]