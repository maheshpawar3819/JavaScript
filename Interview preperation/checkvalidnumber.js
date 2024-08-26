//Question : Check valid indian mobile number

/*
write a function that takes a string as an input and returns true if the string rapresents valid indian moible number , and false otherwise.

Validation Requirements:
                        1.Length:An Indian mobile number should have exactly 10 digits
                        2.Starting digit: the number must be started with 6,7,8,and 9 with are valid starting digits for indian mobile numbers.
*/

const checkMobileNumber = (number) => {
  let check =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(
      number
    );
  if (check) {
    return console.log("Valid Mobile number:", number);
  } else {
    return console.log("The given number is not a valid Mobile number", number);
  }
  //   return check;
};

checkMobileNumber("7739430288");
checkMobileNumber("1739430288");
checkMobileNumber("+91-9883443344");
checkMobileNumber("+91-9850785009");
checkMobileNumber("5078459575");
