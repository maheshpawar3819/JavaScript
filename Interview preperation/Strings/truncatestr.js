//Question : Truncate a string
/*
Write a function called truncateString that takes two parameters.

Str: A string that needs to be truncated.

Maxlength: An integer representing the maximum length of the string allowed. 
The function should truncate the input string str if its length exceeds the specified maxlength.if truncation occurs, the function should add "..." to the end truncated string.
*/

const truncate = (str, num) => {
  if (num === 0) {
    return str;
  } else {
    return str.slice(0, num).concat("...");
  }
};
console.log(truncate("hii my name is mahesh dhanaji pawar", 2));
