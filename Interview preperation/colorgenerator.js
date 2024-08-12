// Question : Random hex color generator

//? write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG, and BB are two-digit hexadecimal numbers representing the green, and components of the color, respectively.

//? Your challenge is to implement the randomHexColor function using JavaScript and ensure that it produces a valid hexadecimal color code with a length of 7 characters (including the # symbol).

// Constraints:
//? The output color code should always start with #followed by six hexadecimal characters (RRGGBB).
//? The function should not take any parameters.
//? The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color codes.

//* Hint
// converts the random number into a hexadecimal string representation.

const randomHexColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

console.log(randomHexColor());
