// Filter Odd Numbers: in the given array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = array.filter((ele) => {
  return ele % 2 !== 0;
});

console.log(odd);
