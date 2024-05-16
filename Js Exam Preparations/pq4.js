// Write a program that will take a number as argument and return the square of that number.

let square=(num) => {
    return num*num;
} 
console.log(square(5));
// console.log(square(3));
// console.log(square(10));

//with using sqrt function

let sqr=(num) => {
    let result=square(num);
    return result;
}
console.log(sqr(4));