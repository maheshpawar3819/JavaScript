//Question : write a js function find median that takes array of numbers as an input and returns the median value. if the array as an even number of elements, return the average of two middle values.

/*

Example : the median of 3,3,5,9,15 is 5. if there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of two middle 
values: so the median of 3,5,7,9 is (5+7)/2 = 6;

Tips : 
    -sort the array in ascending order
    -if the array was odd number of elements,the median is middle element
    -if the array has even number of elements,the median is average of two middle elements

Hint : 
        -Step 1 : Sort the array
        -Step 2 : Check if array length is odd or even
        -Step 3 : diffrent logic for even length array
        -Step 4 : diffrent logic for odd length array    
*/

const findmedian = (arr) => {
  // -Step 1 : Sort the array
  arr.sort((a, b) => a - b);

  //-Step 2 : Check if array length is odd or even
  let length = arr.length;
  let mid = Math.floor(length / 2);

  //checking the lenght odd or even
  if (length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
};

console.log(findmedian([1, 8, 22, 3, 2, 4]));
console.log(findmedian([5, 3, 9, 1, 7]));
console.log(findmedian([1, 3, 5, 7, 9, 11]));
console.log(findmedian([1, 3, 5, 7, 9, 11, 13, 15]));
console.log(findmedian([1, 2, 3, 4, 5]));
