// check the prime numbers with using for loop

let num = 5;
let isprime;
for (let i = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    console.log(`${num} is not a prime number`);
    isprime = false;
    break;
  }
}

if (isprime !== false) {
  console.log(`${num} is the prime number`);
}
