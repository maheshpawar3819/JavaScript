//Question : Extract numbers from string

/*
Write a regular expression to extract all numbers from the string

Requairements:
                1.Extract numbers from a string
                2.Return a numbers as an array
*/

const extractNumbersFromStr = (str) => {
  let rejax = /\d+/g;
  return str.match(rejax);
};

console.log(extractNumbersFromStr("abc458dkde841djk78"));
console.log(extractNumbersFromStr("a2b3c4k3"));
console.log(extractNumbersFromStr("100,399,and ,5888"));
