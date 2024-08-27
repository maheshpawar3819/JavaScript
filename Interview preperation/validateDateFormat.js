//Question : Validate Date Format

/*
Write a function to take singel input string representing the date and determines if it is valid date in the format MM/DD/YYYY. The valid date range should be from January 1,1900, To December 31, 2099.

-Format Check : The date must strectly follow the MM/DD/YYYY format.Ensure that slashes (/) are used saperators.
-month Validation : Valid months are from 01 (january) to 12 (December).
-Day Validation : Days should be valid according to the month 
*/

const isValidDate = (date) => {
  return /(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})/.test(
    date
  );
};

console.log(isValidDate("25/07/2002"));
console.log(isValidDate("07/25/2002"));
console.log(isValidDate("01/01/1857"));
console.log(isValidDate("01/01/2025"));
