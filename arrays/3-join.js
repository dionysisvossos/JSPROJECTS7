const arr = [1, 2, 3, 4, 5]
console.log(arr.join(", "))    // 1, 2, 3, 4, 5

let out = ""
for (const el of arr) {
    out += el + ", "
}

console.log(out)    // 1, 2, 3, 4, 5,