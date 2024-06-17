//guess the output

const a=[1,2,3];
const b=[...a];

b.push(6);

console.log(a);
// console.log(b);

function left(){
    return console.log("left");
}

function right(){
    return console.log("right");
}

left () || right()