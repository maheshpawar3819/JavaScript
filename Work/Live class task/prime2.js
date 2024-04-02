//check the given is prime or not
//with diffrent approach

let number = 7;
let flag;

for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    console.log(`${number} is not prime number`);
    flag = false;
    break;
  }
}

if (flag !== false) {
  console.log(`${number} is prime number`);
}
