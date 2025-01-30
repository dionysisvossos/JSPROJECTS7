const initial = [1, 2, 3, 4, 5];
const copy = [...initial];

const extended = [0, ...initial, 6];
const chars = [...'Hello'];

console.log(copy); // [1, 2, 3, 4, 5]
console.log(extended); // [0, 1, 2, 3, 4, 5, 6]
console.log(chars); // ['H', 'e', 'l', 'l', 'o']