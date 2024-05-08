// Calculate Average of Array: using reduce method 

let arr=[1,2,3,4,5,6,7,8,9,10];

let ave=arr.reduce((acc,ele) => {
    return acc+ele;
})

let result=ave/arr.length;
console.log(result);