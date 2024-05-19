// find the first element of an array.
// Examples input: [1, 2, 3] output: 1
// Examples: input: [18, 15, 10] output: 18

function getFirstElement(arr) {
    if (arr.length === 0) {
      return undefined; // or you can return a specific value or message indicating the array is empty
    }
    return arr[0];
  }
  
  // Examples
  console.log(getFirstElement([1, 2, 3]));        // Output: 1