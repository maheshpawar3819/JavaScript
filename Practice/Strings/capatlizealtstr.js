// Write a program in js to capitalise every alternate character of a string.

let string="mahesh";
let result=""
for(let i=0;i<string.length;i++){
   if(i%2===0){
    result+=string[i].toUpperCase();
   }
   else{
    result+=string[i];
   }
}
console.log(result);