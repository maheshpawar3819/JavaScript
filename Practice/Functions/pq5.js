// Qs5. Write a JavaScript function to generate a random number within a range (start, end)

let start=100;
let end =300;

function generate(start,end){
    let diffrence=end-start;
    console.log(Math.floor(Math.random()*diffrence)+start);
}

generate(start,end);
generate(start,end);
generate(start,end);
