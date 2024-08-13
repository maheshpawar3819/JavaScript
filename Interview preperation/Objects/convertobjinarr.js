// Question : Convert object into array

/*
Write a function that takes object as an argument and return the array of key value pairs.where each element in array is the array with two elements: the key and the corresponding value from the object.

Convert array to object : write a funtion that takes an array of key value pairs (as returned by the function)
and returns the new object with the key and value from the array
*/

const convertobjinarr = (obj) => {
  //convert the object to an array of key value pairs
  let result = Object.entries(obj);
  let final = result.flat();
  console.log(final);
  //again array convert into object
  let finaloutput = Object.fromEntries(result);
  return finaloutput;
};

console.log(
  convertobjinarr({
    name: "mahi",
    age: 20,
    marks: 30,
  })
);
