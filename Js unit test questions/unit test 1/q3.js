// Create a function to check given string is palindrome or not. Return true if the string is palindrome else return false.
// A palindrome is a word, phrase, or sequence that reads the same backwards as forwards,
// input : "madam"
// output : true
// input : "abba"
// output : true
// input : "hello"
// output : false

function palendrom(char) {
  let len = char.length;
  let pld = true;
  for (let i = 0; i < len; i++) {
    let startChar = char.charAt(i);
    let endChar = char.charAt(len - 1 - i);
    if (startChar !== endChar) {
      pld = false;
      break;
    }
  }
  console.log(pld);
}
// palendrom("madam");
// palendrom("mahi");
palendrom("racecar");


