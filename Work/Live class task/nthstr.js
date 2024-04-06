// Write a program to remove nth character from a string
// ex :0 < n < length of the string

let string = "mahesh";
let indexToRemove = 0;

if (indexToRemove >= 0 && indexToRemove < string.length) {
  string = string.slice(0, indexToRemove) + string.slice(indexToRemove + 1);
  console.log("Result", string);
}
else{
    console.log("plese enter valid index number");
}
