// write program in js to print all the prime numbers between 1 to 100

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) console.log(i);
}
