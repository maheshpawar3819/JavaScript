//write a j/s program to check string is palendrome or not

const palendrome = (str) => {
  let revstr = str.split("").reverse().join("");
  return str === revstr;
};
console.log(palendrome("madam"));
// console.log(palendrome('racecar'));
// console.log(palendrome('laptop'));

//with using if condition

const checkpalendrome = (str) => {
  let rev = str.split("").reverse().join("");
  if (rev === str) {
    return "given string is palendrome";
  } else {
    return "given string is not a palendrome";
  }
};

// console.log(checkpalendrome("mahesh"));
console.log(checkpalendrome("racecar"));
