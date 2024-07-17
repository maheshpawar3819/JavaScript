//write a function to determine whether a given string is a palendrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forword and backwrod, ignoring spaces, punctuation, and capitalization.

/*
    console.log("isPlaindrome("racecar") output:true;
*/

const isPalindrome = (string) => {
  string = string.toLowerCase().replace(/\W/g,"");
  let reverse=string.split("").reverse().join("");
  return reverse === string ? true : false;
};
console.log(isPalindrome("A man, A plan , A canal , panama"));
console.log(isPalindrome("racecar"));
