// Given an array arr of integers and an integer d, write a function rotateArray(arr, d) to rotate the array to the left by d
// input : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// d = 4
// output : [ 10, 12, 14, 16, 18, 20, 2, 4, 6, 8 ]

function rotateArray(arr,d){
    let rotate=arr.slice(d).concat(arr.slice(0,d));
    return rotate;
}
arr=[1,2,3,4,5,6,7];
d=2;

console.log(rotateArray(arr,d));
