// Adding
// const added = [...numbers, 4]
// const added = [4, ...numbers]
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing
const removed = numbers.filter((n) => n !== 2);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));

console.log(removed);
