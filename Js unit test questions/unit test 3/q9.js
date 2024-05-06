// Adding element at the beginning of an array using array method.
// example: input: let a=[1,2,3,4] let b=5 output:[5,1,2,3,4] input: let a=[15,12,37,45] let b=52 output:[52,15,12,37,45]

let array=['mahi','ashwini','apurva','rohan'];

array.unshift("mayur");
console.log(array);

// with using function

function addele(array,element){
    return array.unshift(element);
}
addele(array,'mrunal');
console.log(array);
