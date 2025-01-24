console.log(Boolean(1))         // true
console.log(Boolean(0))         // false
console.log(Boolean("Hello"))   // true
console.log(Boolean(""))        // false
console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false
console.log(Boolean({}))    // true
console.log(Boolean([]))    // true

while (1) {
    console.log('Hello')
    break;
}

do {
    console.log('One iteration')
} while (0)

for (let i = 1; 1; i++) {
    console.log('In for')
    break;
}

let num = 10
while (num) {
    console.log(num)
    num--
}

// && || !
console.log("Coding" && 7)  // truthy && truthy -> last truthy value
console.log(0 && "Coding")  // falsy && truthy -> first falsy value

console.log('' || 'Default') // falsy || truthy -> first truthy value
console.log(0 || 'Default')  // falsy || falsy -> last falsy value
console.log('user' || 'Default')  // truthy || falsy -> first truthy value

const username = '' || 'Default'
let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button

