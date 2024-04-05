//reverse no useing any look

let number = 123456;
let digits = "";
while (number > 0) {
  var one = number % 10;
  digits = one + digits;
  number = Math.floor(number / 10);
}
console.log(digits);




