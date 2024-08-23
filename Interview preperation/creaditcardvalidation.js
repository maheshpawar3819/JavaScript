//Question : Validate a Credit Card Number (Luhn Algorithm);
/*
Write a function named validateCareditCard that takes a credit card number as a string.

Requirements:
            -Write a function named validateCreditCard that takes a credit card number as a string.
            -the function should retrun true if the number is valid according to the Luhn algorithm, and false otherwise.
            -Ensure the function can handle numbers as strings,which may include spaces and dashes.
*/

const validateCreaditCard = (str) => {
  //initial step
  str = str.replace(/\D/g, "");

  //Step 1 : Reverse the digit
  let revNum = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revNum = revNum + str[i];
  }
  //Step 2 : Double every second digit
  let doubleNum = revNum.split("").map((currDigit, index) => {
    if (index % 2 != 0) {
      currDigit = currDigit * 2;
      //Step 3 : Subtract 8 from Numbers Higher Than 9;
      if (currDigit > 9) {
        currDigit = currDigit - 9;
      } else {
        currDigit = currDigit;
      }
    }
    return currDigit;
    //Step 4 : add all digits together (sum of all digits) used method chaining
  }).reduce((accum,currElem) => accum+Number(currElem),0);
  return console.log(doubleNum);
};

validateCreaditCard("4539 1488 0343 6467");
