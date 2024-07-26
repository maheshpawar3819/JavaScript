//Question : find the minimum number in the array

const findmin = (array) => {
  let result = Math.min(...array);
  return console.log(result);
};

findmin([1, 3, 5, 3, -1, -4]);
findmin([1, 3, 5, 3]);
