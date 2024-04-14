// Write a JavaScript program to count the number of vowels in a string.

let str = "mahesh dhanaji pawar";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    count += 1;
  }
}
console.log(`${count} vovels present in the given string`);
