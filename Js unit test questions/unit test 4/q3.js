// Merge two array
// Example : Input: a= [1,2,3] b=[4,5,6] Output:[1,2,3,4,5,6]
// Input: a= ["apple","mango","banana"] b=["orange","pine-apple"] Output:["apple","mango","banana","orange","pine-apple"]


let arr1=['mahesh','vishnavi','satyam'];
let arr2=['ashwini','apurva','mayur'];

// with using function 
let emp=[]
let combine=(arr1,arr2)=> {
    return emp.concat(arr1,arr2);
}
console.log(combine(arr1,arr2));


