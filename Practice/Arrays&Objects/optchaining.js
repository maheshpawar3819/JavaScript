//it was used on arrays and objects.
//if any situation the property of objects or arrays not exist it was show undefined or null {mostly show undefined}.
//it was dinoted by ?[symbol];
// example:- 

let user={
    name:"mahesh",
    age:20,
    address:{
        state:"maharashtra",
        city:"pune",
        pin:415902,
    },
    education:{
        qualification:"Graudate",
        degree:"BCA",
    }
}
//in that case road property was not found and also house property not fount in that way it will through an error
// console.log(user.address.road.house);
//for solve this problem i will use optional chaining

console.log(user?.address?.road?.house);