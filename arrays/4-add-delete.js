const arr = [1, 2, 3, 4, 5]
delete arr[0]

console.log(arr)    // [ <1 empty item>, 2, 3, 4, 5 ]

arr.push(6)         // Adds to the end of the array | it is the same array
arr.push(7, 8)
console.log(arr)    // [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8 ]