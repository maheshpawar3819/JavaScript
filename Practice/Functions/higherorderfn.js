//the function are takes one or multiple functions as an argunment it is called as higher order function.
/*
function higher(fun,b){
    for(let i=1;i<=b;i++){
        fun();
    }
}

let hello=function(){
    console.log("hii");
}

higher(hello,5);

*/

function print(fun1,fun2,num){
    for(let i=1;i<=num;i++){
        fun1();
        fun2();
    }
}

let words=function(){
    console.log("Hii");
}

let words2=function(){
    console.log("Mahi");
}
print(words,words2,4);