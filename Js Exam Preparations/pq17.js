// sort the unsorted Array using array method.
// Example: input:[1,5,3,2,4] output:[1,2,3,4,5] input:["mango","orange","apple","banana"] output:["apple","banana","mango","orange"]

// Sort an array of numbers
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Sort an array of strings
  function sortStrings(arr) {
    return arr.sort();
  }
  
  // Examples
  console.log(sortNumbers([1, 5, 3, 2, 4]));                      
  console.log(sortStrings(["mango", "orange", "apple", "banana"])); 
  