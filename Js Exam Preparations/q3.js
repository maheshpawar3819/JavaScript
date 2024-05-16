// Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.
// Example :
// Input : a = 5, b = 2
// Output:1


function remainder(a,b){
    let divide=Math.floor(a/b);
    let remain=a-divide*b;
    return remain;
}
console.log(remainder(4,2));
