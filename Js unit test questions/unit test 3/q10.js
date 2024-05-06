// Removing elements from the end of an array using array method.
// example: input:[ 20, 30, 40, 50 ]; output:[ 20, 30, 40]; input:[ "amit", "sumit", "anil" ]; output:[ "amit", "sumit"];

let arr=[10,20,30,40,50,60];

arr.pop();
console.log(arr);

//with using function

function removelastele(arr){
    return arr.pop();
}
console.log(removelastele(arr));

console.log(removelastele(['mahi','kiran','suraj','swapnil','rahul']));