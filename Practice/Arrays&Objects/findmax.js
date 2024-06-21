// find the maximum value on an array

let arr = [1, 2, 3, 4, 5, 6, 7];

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
