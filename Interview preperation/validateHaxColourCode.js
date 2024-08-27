//Question : Validate Hex colour code

/*
Write a regular expression to validate a hex color code (e.g., #a3c113)

Requirements:
            -The HexColour Code should start with "#"
            -It should be followed by eigher 3 or 6 hexadecimal characters
            -filtering valid hex color codes in data processing
*/

const validateHexColorCode = (code) => {
  let validate = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i.test(code);
  return validate;
};

console.log(validateHexColorCode("#a3c114"));
console.log(validateHexColorCode("#fff"));
console.log(validateHexColorCode("#1234567"));
console.log(validateHexColorCode("#g3c113"));
console.log(validateHexColorCode("a3c113"));
