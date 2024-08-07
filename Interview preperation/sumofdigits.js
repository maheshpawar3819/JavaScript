//Question : write a function that takes the number as an input and return the sum of its digits

/*
    Example:
            console.log(123) Output:6
            console.log(3,4,1,6) Output:14

    Constraints:
            input number will always positive intiger
            input number can have multiple digits
            the output will be sum of all digits in the input number

*/
/*

const sum = (num) => {
  //convert number in to array and split the number into array elements
  let arr = Array.from(String(num), Number);
  // console.log(arr);
  return arr.reduce((acc, crrnum) => {
    return (acc += crrnum);
  });
};

console.log(sum(1233));
console.log(sum(12345));

*/

//try to without converting string

let sum = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sum(234));
console.log(sum(12345));
