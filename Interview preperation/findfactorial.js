//Question : Factorial Finder
/*
    wirte a function factorial that takes a non-negative integer num as input and returns its factorial. The factrorial of a non-negative integer n, denoted as n! , is the product of all positive integers less or equal to n. the factorial of 0 is defined as 1.

    Here are some examples of factorial calculations:
        1.factorial(0) => 1
        2.factorial(1) => 1
        3.factorial(2) => 2
        4.factorial(3) => 6
        5.factorial(4) => 24
        6.factorial(5) => 120
*/

// solution 1:

const findfactorial = (number) => {
  let fact = 1;
  for (let i = number; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};

console.log(findfactorial(5));
console.log(findfactorial(6));
