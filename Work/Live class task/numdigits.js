// write a program using while loop to calculate number of digits present in a number

let num = 1234567;

let count = 0;

while (num !== 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log("Number of digits in the given number", count);
