// Question : Check Object Emptyness

//write a function that takes object as an input and determines whether it empty or not. An empty object is defined as an object with no own properties.

//Task impliment the function usign javascript and return a message indicating wether the object is empty or not;

// Solution 1:

// const checkObjempty=(obj) => {
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//         return `given object is not a empty`
//     }
//   }
//   return `given object is empty`
// }

// console.log(checkObjempty({name:"mahesh",age:20}));
// console.log(checkObjempty({}));

const checkObjempty = (obj) => {
  if (Object.keys(obj).length === 0) {
    return `it is empty object`;
  } else {
    return `it was not empty object`;
  }
};
console.log(checkObjempty({ name: "Aditya", age: 55 }));
console.log(checkObjempty({}));
