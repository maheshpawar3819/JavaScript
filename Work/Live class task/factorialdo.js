// factorial using do while loop 

let num = 5;
let factorial = 1;
let i = num;

do {
    factorial *= i;
    i--;
} while (i > 0);

console.log(factorial);
