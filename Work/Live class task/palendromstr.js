// write a program in j/s using any look check whether a string palendrom or not.
// Do not use any inbuilt function apart from length and charAt
// Do not revert the string

let str = "dad";
let len = str.length;
let Palindrome = true;

for (let i = 0; i < len; i++) {
  let startChar = str.charAt(i);
  let endChar = str.charAt(len - 1 - i);
  if (startChar !== endChar) {
    Palindrome = false;
    break;
  }
}

console.log(Palindrome);
