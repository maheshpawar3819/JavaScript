//function expressions
//the function can store in the variable and you can use any where by the variable name

let sum=function(a,b){
    return a+b;
}

// console.log(sum(10,20));

let sub=function(n1,n2){
    return n1-n2;
}

// console.log(sub(20,10));
//calling two functions and make their addition
console.log(sum(10,10)+sub(20,10));