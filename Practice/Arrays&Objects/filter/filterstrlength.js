// Filter Strings by Length: by using filter mathod

let string = ["mahesh", "ashwini", "vaishnavi", "rohan", "kunal", "sneha"];

let result = string.filter((ele) => {
  return ele.length >= 6;
});

console.log(result);

let result2=string.filter((ele) => {
    return ele.length <= 5;
})
console.log(result2);