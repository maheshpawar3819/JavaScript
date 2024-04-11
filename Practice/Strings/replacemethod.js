//Replace and Repeat method
//replace method use to replace a perticular string in your string
//repeat method use to repeat a perticular string it totally depend on you how much time to repeat this stirng.

let str = "i love coading";

// love replace with like
console.log(str.replace("love", "like"));

console.log(str.replace("o", "k")); //it will replace only first occurance.

console.log(str.replace("coading", "playing"));
//it will can not change original string it will make copy because strings are imutable;

//repeat method.

let fruit = "mango";
// console.log(fruit.repeat(5));

// use method chainin

let chain = fruit.toUpperCase().repeat(4).replace("mango", "apple");
console.log(chain);
