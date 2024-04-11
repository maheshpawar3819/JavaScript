//slice method practice
//the slice method use for when you need to specific pice in your string in that case you use slice method.

let str="I love coading";

console.log(str.slice(2,7));

console.log(str.slice(7));

console.log(str.slice(-1));

// use method chaining

let chain=str.slice(2,7).toUpperCase().trim();
console.log(chain);

