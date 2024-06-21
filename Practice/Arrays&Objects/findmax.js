// find the maximum value on an array

let arr = [1, 2, 3, 7, 4, 5, 6];

function findmax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findmax(arr));

//using reduce higher order function

let arr2 = [1, 4, 3, 9, 55, 10, 5];

const max = arr2.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(max);
