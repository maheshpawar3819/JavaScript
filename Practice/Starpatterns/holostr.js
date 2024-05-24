
let num=4;
let str=""

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i===1 || i===num) str+="*"
        else if(j===1 || j===num){
            str+="*";
        }else{
            str+=" ";
        }
    }
    str+="\n";
}
console.log(str);







// let rows = 5;

// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//   for (let num = 1; num <= 5; num++) {
//     if (n == 1 || n == rows) pattern += "*";
//     else {
//       if (num == 1 || num == 5) {
//         pattern += "*";
//       } else {
//         pattern += " ";
//       }
//     }
//   }
//   pattern += "\n";
// }
// console.log(pattern);
