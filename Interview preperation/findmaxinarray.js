// Write a function findmax that takes an array of numbers as input and returns the maximum number in the array.

/*
    Example:
            console.log(findMax([1,2,8,4,9])) Output:9
*/

let findMax = (arr) => {
  let result = Math.max(...arr);
  return result;
};

console.log("The maximum number is:",findMax([1, 2, 3, 4, 5]));
console.log("The maximum number is:",findMax([-8, -7, -1, -5, -2, 0]));

//lets find minimum number in the array

let findMin = (array) => {
  let min = Math.min(...array);
  return min;
};

console.log("The minimum number is:",findMin([1, 2, 3, 4, 5]));
console.log("The minimum number is:",findMin([-8, -7, -1, -5, -2, 0]));
