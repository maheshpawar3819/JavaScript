// Create a function which returns the number of true values there are in an array.

let array = [false, true, false, false, true, false];

function check(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
}
return count;
}

console.log(check(array));

//function to return false values

const checkfalse = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {
      count++;
    }
  }
  return count;
};
console.log(checkfalse(array));
