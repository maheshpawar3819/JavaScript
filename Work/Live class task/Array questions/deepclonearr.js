// write a program in js to deep clone an array.

function dparr(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let clonedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      clonedArray.push(dparr(arr[i]));
    } else {
      clonedArray.push(arr[i]);
    }
  }

  return clonedArray;
}

let originalArray = [1, [2, 3], [4, 5]];

let clonedArray = dparr(originalArray);

console.log(clonedArray);

clonedArray[0] = 100;
clonedArray[1][0] = 200;

console.log(clonedArray);
onsole.log(originalArray);
