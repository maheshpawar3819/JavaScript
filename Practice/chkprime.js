//check prime number.

/*
let num = 5;
let isprime;

for (let i = 2; i <=num/2; i++) {
  if (num % i === 0) {
    console.log(`${num} is not a prime number`);
    isprime = false;
    break;
  }
}

if (isprime !== false) {
  console.log(`${num} is a prime number`);
}

*/

//using function

let isprime;

function checkprime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number`);
      isprime = false;
      break;
    }
  }
  if (isprime !== false) {
    console.log(`${num} is a prime number`);
  }
}

checkprime(97);
checkprime(91);
