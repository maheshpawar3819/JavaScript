//the filter() method creates a new arry with all elements that pass the test implemented by the provided function.
//like map() it dosent change original array.instead it returns a new arry with only the elements that meet the condition.

let arr = [1, 2, 3, 4, 5, 6];

//print only even numbers form the array.using filter method.

let even = arr.filter((ele) => {
  if (ele % 2 == 0) {
    return ele;
  }
});
console.log(even); //create even numbers array.

let odd = arr.filter((ele) => {
  if (ele % 2 !== 0) {
    return ele;
  }
});
console.log(odd); //create odd numbers array.

let students = [
    { name: "mahesh", mark: 98 },
    { name: "ashwini", mark: 99 },
    { name: "shrinath", mark: 94 },
    { name: "neha", mark: 90 },
    { name: "mahi", mark: 85 },
    { name: "vaishnavi", mark: 88 },
    { name: "apurva", mark: 82 },
  ];

let criteria=students.filter((ele) => {
    if(ele.mark>90){
        return ele;
    }
})
console.log(criteria);
