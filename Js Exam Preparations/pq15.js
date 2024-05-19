// Create a function which returns the number of true values there are in an array.

let arr = [true, false, false, true, true, true];

function cttrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}
console.log(cttrue(arr));
