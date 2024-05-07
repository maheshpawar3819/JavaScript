// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let array=[1,2,3,4,5];

let squ=array.reduce((acc,ele)=> {
    return acc*ele;
})

console.log(squ);

let sum=array.reduce((acc,ele)=>{
    return acc+ele;
})
console.log(sum);

let average=sum/array.length;
console.log(average);