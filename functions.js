
// ES6 functions don't bind to this and the arguments object
let numbers = [9, 99, 4, 56];
let newNumbers = numbers.map((number) => number + 1);
console.log(newNumbers);
