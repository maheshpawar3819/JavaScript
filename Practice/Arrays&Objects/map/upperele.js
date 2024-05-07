// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array

let array = ["mahesh", "balram", "pratik", "shrinath", "kunal"];

let changecase = array.map((ele) => {
    return ele.toUpperCase();
});
console.log(changecase);
