//it was used on arrays and objects.
//if any situation the property of objects or arrays not exist it was show undefined or null {mostly show undefined}.
//it was dinoted by ?[symbol];
// example:-

let user = {
  name: "mahesh",
  age: 20,
  address: {
    state: "maharashtra",
    city: "pune",
    pin: 415902,
  },
  education: {
    qualification: "Graudate",
    degree: "BCA",
  },
};
//in that case road property was not found and also house property not fount in that way it will through an error
// console.log(user.address.road.house);
//for solve this problem i will use optional chaining

// console.log(user?.address?.road?.house);

// on arrays:=>

let array = [
  { name: "rahul", age: 30, edu: "MCA" },
  { name: "mahi", age: 25, edu: "BCA" },
  { name: "ashwini", age: 24, edu: "BCA" },
];

// console.log(array[2].edu.que.year)
console.log(array[2]?.edu?.que?.year);
console.log(array[3]?.edu?.year);
