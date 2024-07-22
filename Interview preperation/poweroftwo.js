// Question : write a function that takes an intiger number as an input returns the true if the number is a power of two , and false otherwise;

/*
Example:
    console.log(ispoweroftwo(8)) Output: true
    console.log(ispoweroftwo(7)) Output: false

Nots : 
        the input will be positive intiger
        Zero(0) and negative intigers are not consider as power of two, and false otherwise
*/

const checkpower = (num) => {
  let valfalse = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      return (valfalse = true);
    }
  }
  return valfalse;
};
console.log(checkpower(8));
console.log(checkpower(7));
console.log(checkpower(4));
console.log(checkpower(3));
