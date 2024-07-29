//Question : write a function calculatethemean that takes an array of a numbers as input and retun the mean(average) of those numbers.

/*
 Constraints : 
                -the input array may be empty if the input array is empty , the function should retun 0.

 Example : 
            console.log(calculatemean([1,2,3,4,5])) output: 3
*/

const calculatemean = (arr) => {
  let mean = arr.reduce((acc, currn) => {
    return acc + currn / arr.length;
  }, 0);

  return console.log("the mean of given array is : ", mean);
};

calculatemean([1, 2, 3, 4, 5]);
calculatemean([10, 20, 30]);
calculatemean([-1, 0, 1]);
calculatemean([]);
