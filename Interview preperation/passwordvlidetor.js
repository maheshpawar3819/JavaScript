//Question : Create Password Validetor

/*
Create Simple password validator function that takes one parameter

Password : A string represending the password to be valideted
The function should validate the password based on following craiteria:
    -the password contain at least one lowercase letter, one uppercase letter and one digit.
    -the length of password must be at least 8 characters.
    -the function should be return the true if password meets all criteria otherwise it should return the false.

Input : password : a non-empty string representing the password to be valid.
Output : true if the password meets all criteria 
         Otherwise false.
*/

// Solution 1 : with using regular expression

/*
const checkPassword = (password) => {
  let checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  return checkPassword;
};

console.log(checkPassword("Mahi8878"));

*/

// Solution 2 : without using regular expression simple password validetor

const checkPassword2 = (password) => {
  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;

  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUppercase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowercase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }

  if (!hasLowercase || !hasUppercase || !hasNumber || password.length < 8) {
    return false;
  }

  return true;
};

console.log(checkPassword2("afkdsdaee1A"));
