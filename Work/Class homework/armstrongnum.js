// Write a program to check whether a number is Armstrong or not.

let num = 13;
let originalNum = num;
let sum = 0;
let digits = String(num).length;

while (originalNum > 0) {
    let digit = originalNum % 10;
    sum += digit ** digits; 
    originalNum = (originalNum / 10) | 0; 
}

if (sum === num) {
    console.log(`${num} is an Armstrong number.`);
} else {
    console.log(`${num} is not an Armstrong number.`);
}
