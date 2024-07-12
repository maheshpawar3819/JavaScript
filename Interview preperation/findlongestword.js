//Q1 : write a function find longest word that takes the string as input returns the longest word in the string if there are multiple longest words, return the first one encountered.

/*
Constraints :
        -The input string may contain alphabetical characters ,digits ,spaces, and punctuation
        -The input string is not empty 
        -The input string may contain multiple words that saperated by spaces


Note : 
    -if the input string is empty or contains only white spaces, the function should return the false.
    -The function should ignore leading and trailing whitespace when determining the longest word.
*/

let string = "mahesh sneha ashwini devansh shiv";

function checklongestword(str) {
  //check the empty string
  if (str.trim().length === 0) {
    return false;
  }
  //convert this words into the array
  let words = str.split(" ");
  //callback function help to sort text in decending or assending order;
  words = words.sort((a, b) => {
    return b.length - a.length;
  });
  return words[0];
}
let fincalresult = checklongestword(string);
console.log(fincalresult);
