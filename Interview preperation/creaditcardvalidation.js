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
  return console.log(revNum);
};

validateCreaditCard("4539 1488 0343 6467");
