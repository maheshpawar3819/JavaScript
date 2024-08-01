// Question: find maximum number in the array

/*
// Solution 1:
const findmaxn=(num)=> {
    let sp=Math.max(...num);
    return sp;
}

console.log(findmaxn([1,2,36,4,89,1000]));

*/

//Solution 2: for using for loop

const findmaxn = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return console.log(max);
};

findmaxn([2, 42, 1, 4]);
findmaxn([2, 42, 1, 5,100,30,4000]);
findmaxn([1,2,36,4,89,1000]);
