//array methods(push,pop,unshift,shift)

// find odd numbers in this Array
/*
let arr=[2,3,4,5,6,8,10,11,19]

let odd=[];
let even=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 !== 0){
        odd.push(arr[i]);
    }
    else{
        even.push(arr[i]);
    }
}
console.log(odd);
console.log(even);
*/

//with using function

let even=[];
let odd=[];

function check(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            even.push(array[i]);
        }
        else{
            odd.push(array[i]);
        }
    }
    console.log(even);
    console.log(odd);
}

check([1,2,3,4,5]);
