let num=7;
let str="";

for(let i=0;i<=num;i++){
    for(let j=0;j<i;j++){
        if(j%2===0){
            str+="*"
        }
        else{
            str+="=";
        }
    }
    str+="\n";
}
console.log(str)