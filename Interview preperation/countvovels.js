//Question : Write a function that takes a string as an input and returns the count of the vowels in the string. Consider 'a','e','i','o','u' as vowels (both lower case and uppercase);

const Ctvowels = (str) => {
  let lower = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      lower[i] === "a" ||
      lower[i] === "e" ||
      lower[i] === "i" ||
      lower[i] === "o" ||
      lower[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(Ctvowels("Pawar Aa"));
console.log(Ctvowels("My name is MAHESH PAWAR"));
