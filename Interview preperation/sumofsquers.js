//Question : Write a function to calculate the sum of squares of all elements in the array.
//Ex : given the array [1,2,3], the function should return 14 because  1*1 + 2*2 + 3*3 =1+4+9=14

const sumofsquare = (arr) => {
  const data = arr.map((ele) => {
    return ele * ele;
  });

  const sum = data.reduce((acc, curr) => {
    return acc + curr;
  });

  return console.log("the sum is ", sum);
};

sumofsquare([1, 2, 3]);
sumofsquare([2, 4, 3]);
