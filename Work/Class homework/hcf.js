// Write a program in js to calculate the hcf of two numbers.

let num1=10;
let num2=2;

let min=(num1<num2) ? num1: num2;
let hcf=1;

for(let i=1;i<=min;i++){
    if(num1%i===0 && num2%2===0){
        hcf=i;
    }
}

console.log(`The HCF ${num1} and ${num2} is ${hcf}`);