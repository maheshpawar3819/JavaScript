// 11.write a program in j/s to count number of vovels present in a string.

let str="maheshio";
let count=0;

for(let i=0;i<str.length;i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++
    }
}
console.log(count);

  