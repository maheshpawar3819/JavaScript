// in this file practice of pure and impure function

// pure function:
//pure functions is a function that always produce some output for the same input
function pure(a, b) {
  return a + b;
}

console.log(pure(3, 4));

//impure function:

let count = 0;
function impure(a) {
 return count += a;
}

// it will changes output when we will called function multiple times
//it can produce diffrent outputs form same inputs
console.log(impure(2));
console.log(impure(2));
