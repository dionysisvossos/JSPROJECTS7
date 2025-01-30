const queue = [1, 2, 3, 4, 5]

queue.push(6)
console.log(queue)    // [1, 2, 3, 4, 5, 6]

let first = queue.shift()
console.log(first)    // 1
console.log(queue)    // [2, 3, 4, 5, 6]