//practice of push,pop,shift,unshift

let arr=["balram","swapnil","mahesh","kiran"];

//remove balram and swapnil and add others to replace them.
//using shift unshift

arr.shift();
arr.shift();

arr.unshift("ashwini","neha");
// arr.unshift("neha");
console.log(arr);


//remove last two 
//use and add new one
//using push pop 

arr.pop();
arr.pop();

//add new 
arr.push("mrunal","pratiksha")
console.log(arr);

// console.log(arr.length);

//practice indexof() and includes()

console.log(arr.indexOf("ashwini"));
console.log(arr.indexOf("kiran"));
console.log(arr.includes("neha"));
//original array will be change because arrays are mutable in nature.
console.log(arr.includes("mahesh"));

//reverse method it will reverse whole array change original array

arr.reverse();
console.log(arr);

