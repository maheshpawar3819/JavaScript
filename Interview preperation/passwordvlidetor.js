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

const checkPassword = (password) => {
  let checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  return checkPassword;
};

console.log(checkPassword("Mahi8878"));
