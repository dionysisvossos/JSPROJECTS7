const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// Get the indexes of all the occurrences of a number in an array
const getIndexes = (arr, num) => {
    const indexes = []
    arr.forEach((el, index) => {
        if (el === num) {
            indexes.push(index)
        }
    })
    return indexes
}

console.log(getIndexes(arr, 2))    // [ 1, 4, 7, 12 ]