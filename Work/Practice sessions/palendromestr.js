// Write a Js program to find if a string is a palindrome or not.

let str="madam";
let len=str.length;
let palendrom=true;

for(let i=0;i<len;i++){
    let startchar=str.charAt(i);
    let endChar=str.charAt(len-1-i)
    if(startchar !== endChar){
        palendrom=false;
        break;
    }
}
console.log(palendrom);