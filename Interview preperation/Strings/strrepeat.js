// Question : Repeat string

/*
Write a function that takes two parameters:
str: A String that needs to be repeated
num: An intiger representing the number of times that string should be repeated.
The function should repeat the input string str the specified number of times num and retun the resulting string.
*/

const repeatstr = (str, num) => {
  return num > 0 ? str.repeat(num) : str;
};

console.log(repeatstr("mahi", 4));
console.log(repeatstr("abc", 10));
console.log(repeatstr("race", 3));

