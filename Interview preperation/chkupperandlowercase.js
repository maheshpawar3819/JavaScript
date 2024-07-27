// Question : Write a function to check character touppercase or lowercase

/*
Constraints : 
            -The input char will be single character
            -The character can be any printable ASCII character
            -You can assume that the input will always be string of length 1.

*/

//Check for uppercase

const Checkuppercase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
};

console.log(Checkuppercase("A"));
console.log(Checkuppercase("m"));

const Checklowercas=(char) => {
    if(char.charCodeAt(0) >=97 && char.charCodeAt(0) <=122){
        return true;
    }
    return false;
} 

console.log("CheckLowerCase",Checklowercas("A"));
console.log("CheckLowerCase",Checklowercas("m"));

