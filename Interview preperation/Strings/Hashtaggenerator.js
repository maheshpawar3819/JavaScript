// Question : Hash tag generator

/*

-you are required to implement a function generateHash that generates a hash tag from a given input string the hash tag should be constructed as follows:

-The input string should be converted to a has tag format, whare each word is capitalized and concatenated together with spaces.

-if the length of the input string is greater than 280 characters or if the input string is impty or contains only whitespace , the fucntion should return false.

-Otherwise, the function should return the generated hash tag prefixed with #

input: "my name is mahesh pawar"
output : "#MyNameIsMaheshPawar"

*/

let string = "my name is sanket pawar";

let addhashtag = (str) => {
  //check string length and blank string
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" "); //convert this string in to array
  str = str.map((ele) => {
    return ele.replace(ele[0], ele[0].toUpperCase()); //replace old string with captalized string
  });

  return (str = `#${str.join("")}`); //again this string array convert in strings
};

const finalresult = addhashtag(string);
console.log(finalresult);
