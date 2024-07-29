//Question : write a fuction to convert a string into camel case and snake_case.

/*
Example :
        1.console.log(toCamelcase("hello world ")) output :helloWorld 

*/

// Solution 1 :

/*

const toCamecase=(str) => {
    str=str.trim().split(" ");
    
    str=str.map((ele,index) => {
        if(index === 0){
            return ele.toLowerCase();
        }else{
            return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
        }
    })
    return str.join("");
}

console.log(toCamecase("my name iS maHI"));
console.log(toCamecase("my name is mahesh"));

*/

// Solution 2 : with method chaining

const toCamelcase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((ele, index) => {
      if (index === 0) {
        return ele.toLowerCase();
      } else {
        return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
      }
    })
    .join("");
};

console.log(toCamelcase("hello mahi how are you"));
console.log(toCamelcase("hello MAHESH how are you"));
