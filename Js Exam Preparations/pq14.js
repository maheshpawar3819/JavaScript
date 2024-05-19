// Write a function that takes two parameters, an array of numbers and a single number and returns an array of two numbers that add up to value.Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return -1.Note: Do not use array methods to solve this problem. input : [5,6,3,4,7,1], 13 output : [6,7] input : [4,6,3,7,9,1], 89 output:-1.

function findPairWithSum(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === value) {
          return [arr[i], arr[j]];
        }
      }
    }
    return -1;
  }
  
  // Examples
  console.log(findPairWithSum([5, 6, 3, 4, 7, 1], 13)); // Output: [6, 7]
  console.log(findPairWithSum([4, 6, 3, 7, 9, 1], 89)); // Output: -1
  