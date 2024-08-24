//Question : Fizzbuzz challenge

/*
write a function that accept two numbers, startNum and endNum, as input . the function should return an array containing numbers and specific strings based on following rules.

For each number i in the range from startNum to endNum (both inclusive)
-id i is divisible by both 3 and 5, include "fizzbuzz" in the result.
-if i is divisible by only 3, include "fizz" in the result.
-if i is divisible by only 5, include "buzz" in the result.
-otherwiese, include the number i itself.
*/

const fizzBuzz = (num1, num2) => {
  let result = [];
  for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(fizzBuzz(1, 5));
