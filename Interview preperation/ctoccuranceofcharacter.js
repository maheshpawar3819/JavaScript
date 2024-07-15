// Question : Count Occurance of Character

/*
    Write a function called countchar that takes 2 parameters : a string and character to count. The funtion should return the number of times of specified character appears in the string

    Ex:- console.log(countchar("mahesh","h")) output:2

    //Todo Constraints:
       -The function should be case-sensitive
       -The function should be handle both lowercase and uppercase character
       -The character parameter can be any printable ASCII character (The function should accept any character that is the part of th ASCII character set and it is printable);
*/

/*
Generalsolution

let countcharacter = (string, character) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count += 1;
    }
  }
  return count;
};

finalresult = countcharacter("mahesh dhanaji pawar", "a");
console.log(finalresult);

*/
