// Write a program in js to calculate the sum of the series  9+99+999+9999 .... n.

let n = 4;
let sum = 0;
let term = 9;

for (let i = 0; i < n; i++) {
    sum += term;
    term = term * 10 + 9;
}

console.log("Sum of the series is:", sum);
