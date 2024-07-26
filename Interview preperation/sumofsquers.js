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

// solution 2 : using for of loop

const sumofsquare2 = (array) => {
  let sum = 0;

  for (const ele of array) {
    sum = sum + ele * ele;
  }

  return console.log(sum);
};

sumofsquare2([2, 2, 2]);
sumofsquare2([2, 4, 2]);
