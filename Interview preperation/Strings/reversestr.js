//Question : Write a function to reverse string without using any build in method or libraries. the function should take a string as an input and return a reverse string

// Ex : console.log("mahi") Output: iham

// Solution 1 : Using for loop

const reversestr = (str) => {
  let r_string="";
  for(let i=str.length-1;i>=0;i--){
    r_string+=str[i];
  }
  return console.log(r_string);
};

// reversestr("mahi");
reversestr("pawar")
reversestr("mahi")
