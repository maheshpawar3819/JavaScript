//check the prime numbers in the given array.
let primearr = [];
let notpirme = [];
let isprime;
function primecheck(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        notpirme.push(arr[i]);
        isprime = false;
        break;
      }
    }
    if (isprime !== false) {
      primearr.push(arr[i]);
    }
  }
  console.log("prime numbers", primearr);
  console.log("not prime numbers", notpirme);
}

primecheck([1, 2, 3, 4, 5, 6, 7]);
