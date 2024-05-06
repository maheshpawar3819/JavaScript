// Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position (index) of the element in an array. If the element is not found, the function should return -1.
// example:
// input:[1,2,3,4,5],2
// output:1
// input:[10,23,46,81,100],34
// output:-1

let array=[1,2,3,4,5,6];


function check(num){
   let ans=array.indexOf(num);
   console.log(ans);
}
check(10);