// Write a program in js to calculate the factorial of a number.

let number=5;
let factorial=1;

for(let i=number;i>0;i--){
    factorial*=i;
}

console.log(`the factorial of ${number} is ${factorial}`);
