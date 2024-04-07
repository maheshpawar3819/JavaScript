// 13.write a program in j/s to check wether the number is power of two or not.
let number = 32; 

if (number > 0 && (number & (number - 1)) === 0) {
    console.log(number + " is a power of two.");
} else {
    console.log(number + " is not a power of two.");
}
