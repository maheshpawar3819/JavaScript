// 5.write a js program to calculate the power of x raised to y.

let x=2;
let y=5;
let result=1;

for(let i=0;i<y;i++){
    result*=x;
}

console.log(`${x} rised to power of ${y} is: ${result}`);