//write a function to delete last item in the array.

let array = ["mahesh", "soham", "kiran", "suraj", "sanket"];

let lastele = (array) => {
  return array.pop();
};

console.log(lastele(array));

//Delete first element from the array

let firstele = (array) => {
  return array.shift();
};

console.log(firstele(array));
