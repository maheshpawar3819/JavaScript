// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "digikull" and store it in a variable called result. He needs your help to fix this code.
// example:
// Input: "Mubashir"
// output: "Mubashirdigikull"
// Input: "Matt"
// output: "Mattdigikull"

function input(str){
    let result="digikull";
    return str.concat(result);
}
console.log(input("hii"));
console.log(input("noida"));

