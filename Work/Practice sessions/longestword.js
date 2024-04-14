// Write a Js program to find the longest word in a string.
// Input : 'I love JavaScript and you should as well'

let input="i love coading";

let words=input.split(" ");

let longword=" ";
let length=0;

for(let i=0;i<words.length;i++){
    if(words[i].length>length){
        length=words[i].length;
        longword=words[i];
    }
}

console.log(longword);
