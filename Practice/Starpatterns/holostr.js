let num = 4;
let str = "";
/*
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i === 1 || i === num) str += "*";
    else if (j === 1 || j === num) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
*/

//with using function

function squre(number) {
    let star="";
    for(let i=0;i<=number;i++){
        for(let j=0;j<=number;j++){
            if(i===0 || i===number){
                star+="*";
            }else if(j===0 || j===number){
                star+="*";
            }
            else{
                star+=" ";
            }
        }
        star+="\n";
    }
     return star;
}

console.log(squre(5));