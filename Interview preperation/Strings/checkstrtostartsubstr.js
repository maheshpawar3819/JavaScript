//Question : Write a function to check if a given string starts with a specific substring

/*
Input : 
        -Str : A string (e.g "Hello world")
        -subStr : A substring to check if a starts the given string (e.g "Hello");
        -Output : true if a given string start with the specified substring otherwise false
*/

// Soluton 1 : solve with using build in method

const checksubstr = (str, subStr) => {
  if (str.toLowerCase().startsWith(subStr.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

console.log(checksubstr("mahi pawar", "mahi"));
console.log(checksubstr("mahi pawar", "pawar"));
console.log(checksubstr("mahi pawar", "Mahi"));

//Solution 2 : solve with another method

const checkSubstrin2=(str,substr) => {
    return str.toLowerCase().slice(0,substr.length) === substr.toLowerCase();
}


console.log("Solution 2 :",checkSubstrin2("mahi pawar", "mahi"));
console.log("Solution 2 :",checkSubstrin2("mahi pawar", "pawar"));
console.log("Solution 2 :",checkSubstrin2("mahi pawar", "Mahi"));