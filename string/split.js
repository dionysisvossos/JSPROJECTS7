const s = "Apples, oranges, milk, eggs";
const items = s.split(", ");

console.log(items); // ["Apples", "oranges", "milk", "eggs"]

const newStr = items.join(" | ");
console.log(newStr); // Apples | oranges | milk | eggs