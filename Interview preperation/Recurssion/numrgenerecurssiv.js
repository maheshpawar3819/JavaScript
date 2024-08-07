// Question :  Number generator Recurssiv way
//Write a recursive function that generates an array containing consecutive numbers from a to b (inclusive);

/*
 -a: an intiger represents the starting number of the range.
       -b: an intiger representing the ending number of the string.
       -arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.
*/

const numrangeRecurssive = (a, b, arr = []) => {
  if(a<=b){
    arr.push(a);
    return numrangeRecurssive(a+1,b,arr);
  }
  return arr;
};

console.log(numrangeRecurssive(2, 5));
console.log(numrangeRecurssive(-5, 5));
console.log(numrangeRecurssive(1, 10));
