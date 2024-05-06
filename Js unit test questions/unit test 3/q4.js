// Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.
// Example :
// Input : a = 5, b = 2
// Output:1
// input : a = 218, b = 5
// output : 3
// input :a = 6, b = 3
// output : 0

function subtract(a,b){
    while(a>=b){
        a-=b;
    }
    return a;
}

console.log(subtract(218,5));