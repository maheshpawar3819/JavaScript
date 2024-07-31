// Question : write a function that takes an array of numbers as input and returns the mode of the array (the number that appears most frequency);

const findmode = (arr) => {
  let counts = {};
  let maxNum = 0;
  let mode;

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  return console.log(mode);
};

findmode([1, 2, 3, 4, 2, 1, 1, 2, 1, 3, 1, 1]);
