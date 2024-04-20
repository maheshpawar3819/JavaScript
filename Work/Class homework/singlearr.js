// JavaScript program to flatten this nested array into a single-dimensional array.

let arr = [1,2,[2,5,6],7,[8]];
let flattenarray = [];
for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     for (let j = 0; j < arr[i].length; j++) {
        flattenarray += arr[i][j];
     }   
    }
    else{
        flattenarray += arr[i];
    }
    console.log(flattenarray[i]);
}