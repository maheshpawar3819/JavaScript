//Question : write a function ArrayEqual that takes the 2 arrays arr1 and arr2 as an input and return the true if the arrays are equal (i.e , contain the same element in the same order), and false otherwise.

/*
Example : 
        console.log(arrayEqual([1,2,3], [1,2,3])) output: True;
        console.log(arrayEqual([3,4,5] ,[1,7,4])) output: False;
        console.log(arrayEqual([3,4,5] ,[3,5,4])) output: False;
        console.log(arrayEqual([],[])) output: True;
Note :
        -function should return false if the array are diffrent length
        -function should compare each element of arr1 with the corresponding element in arr2
        -function should return a true only if all elements in array one are equal to corresponding elements in array 2
*/

const arrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  //introducing new method every()
  return arr1.every((currentvalue, index) => {
    return currentvalue === arr2[index];
  });
};

console.log(arrayEqual([1, 2, 3], [1, 2, 3]));
console.log(arrayEqual([3, 4, 5], [1, 7, 4]));
console.log(arrayEqual([3, 4, 5], [3, 5, 4]));
console.log(arrayEqual([], []));
