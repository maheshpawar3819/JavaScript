//Question : Write a function that takes an array of intigers as an input and removes any duplicate elements, returning a new array with only the unique elements.

//The new Set() method in js create a new Set object. A Set object is a collenction of unique values. It can store any type of values, whether primitive values or object references.

// Constraints :
// input array contain both posite and negative elements
// The input array may be empty
// the elements in the input array are not garantted to be stroed.
// the input array should retain the original order of the elements from the input array

// Solution 1:

let removeduplicate = (array) => {
  let result = new Set(array);
  let final = [...result];
  return console.log(final);
};

removeduplicate([1, 2, 3, 4, 5, 6, 4, 3]);
removeduplicate([]);
removeduplicate([10,50,10,7,88,55,10,7]);
