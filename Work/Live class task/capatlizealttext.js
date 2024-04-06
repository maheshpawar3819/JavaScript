// Write a program in js to capitalise every alternate character of a string.

let string = "mahesh dhanaji pawar";
let output = "";

for (let i = 0; i < string.length; i++) {
  if (i % 2 === 0) {
    output += string[i].toUpperCase();
  } else {
    output += string[i];
  }
}

console.log(output);
