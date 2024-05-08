// Calculate Product of Array Elements:

let numbers=[1,2,3,4,5];

let product=numbers.reduce((acc,ele) =>{
    return acc*ele;
})

console.log(product);