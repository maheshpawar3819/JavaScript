// Write a function that takes two parameters, an array of numbers and a single number and returns an array of two numbers that add up to value.Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return -1.Note: Do not use array methods to solve this problem.

// input : [5,6,3,4,7,1], 13 output : [6,7] input : [4,6,3,7,9,1], 89 output:-1

let array = [1, 2, 3, 4, 5];
let num = 9;
function check(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        return [array[i], array[j]];
      }
    }
  }
  return -1;
}
console.log(check(array,num));
