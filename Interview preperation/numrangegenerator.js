//Question : Write a function that generates an array containing consecutive number from a to b (inclusive)

/*
Input : 
       -a: an intiger represents the starting number of the range.
       -b: an intiger representing the ending number of the string.
       -arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

Output : 
        -An array contaning consecutive number from a to b (inclusive);
        -console.log(numberRange(0,5)) Output:[0,1,2,3,4,5]
        -console.log(numberRange(3,7)) Output:[3,4,5,6,7]
*/

const numberRange = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return console.log(arr);
};
numberRange(2, 7);
numberRange(-2, 3);
