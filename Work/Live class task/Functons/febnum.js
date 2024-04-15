//feb series
function feb(number) {
  let num1 = 0,
    num2 = 1,
    nextTerm;
  for (let i = 1; i <= number; i++) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
  }
}
let a = feb(10);
