//The map() method creats a new array by calling the provied function on each element in original array
//it dosent change the original array. insted it returns a new array with the result of the function applied  to each element
// ● map: Transforms each element of an array using a provided function and
// returns a new array.

let num = [1, 2, 3, 4, 5];

let reuslt = num.map((ele) => {
  return ele * 2;
});
/*
console.log(reuslt); //it will returns new array of the result. and new array length similar to original array.
*/

let students = [
  { name: "mahesh", mark: 98 },
  { name: "ashwini", mark: 99 },
  { name: "shrinath", mark: 94 },
  { name: "neha", mark: 90 },
  { name: "mahi", mark: 85 },
  { name: "vaishnavi", mark: 88 },
  { name: "apurva", mark: 82 },
];
// console.log(students);

let criteria=students.map((ele)=> {
    if(ele.mark>90){
        return ele;
    }
})
console.log(criteria);
//because of map() method create similar length of new array those student will not in criteria for their it will print undefined.

