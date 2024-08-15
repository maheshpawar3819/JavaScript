//Question : Simple bar char from array data

/*
Create a function that takes an array of number and generates a simple text-based barchar

console.log(generateBarChart([5,3,9,2]));

output : 
       1: *****
       2: ***
       3: *********
       4: **
*/

// Solution 1:
/*
const generateBarChart = (arr) => {
  let newarr = arr.map((ele, index) => {
    let star = "";
    let number = 0;
    while (number < ele) {
      star += "*";
      number++;
    }
    return `${index + 1}: ${star}`;
  });
  console.log(newarr.join("\n"));
};
generateBarChart([5, 3, 9, 2]);
*/

//Solution 2 :

const generateBarChart2 = (arr) => {
  return arr
    .map((ele, index) => {
      return `${index + 1}: ${"*".repeat(ele)}`;
    })
    .join("\n");
};

console.log(generateBarChart2([1,2,3,4,5,6]));
console.log(generateBarChart2([1,5,100,7,12,8]));

