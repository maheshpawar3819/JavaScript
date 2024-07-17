// Question : Sort an Array

//write a fucntion to sort an array of the numbers in an assending order.
//ex : console.log(sortAscending([5,3,1,8])); output:[1,3,5,8];
//   : console.log(sortAscending([5,3,10,8])); output:[3,5,8,10];

/*
 To do requirements:
                -the function should take array of numbers as an input 
                -it should return new array with the numbers sorted in ascending order
                -the original array should remain unchanged
                -you are Not allow to use builtin sort() method

*/

/*
solution 1

let array = [2, 1, 4, 3, 9, 10, 12];

const sortAscending = (arr) => {
  //use compare function
  return arr.sort((a, b) => a - b);
};

console.log(sortAscending(array));

*/

