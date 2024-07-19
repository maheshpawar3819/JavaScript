//Question : Calculate the average

//write a function called calculateAverage that takes array of the numbers is an input and return the average of those numbers.

/*

Your Function Should :
                    -accept the array of numbers as an input
                    -calculate the sum of all numbers in the array
                    -divide the sum by total numbers of elements in the array to find the average
                    -Retun the calculted average

Example: 
        console.log(calculateAverage([5,10,2,8]))  output:6
*/

const calculateAverage = (num) => {
  //   let finaloutput = null;
  let totalsum = num.reduce((acc, currv) => {
    return acc + currv;
  });

  return Math.floor(totalsum / num.length);
};

console.log("The average is :", calculateAverage([5, 10, 2, 8]));
console.log("The average is :", calculateAverage([10, 5, 20, 15, 50]));
