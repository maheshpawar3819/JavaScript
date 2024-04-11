let num=5;
let str="";

for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        str+="*";
    }
    str+="\n";
}
console.log(str);



//use conditions
let string="";
for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        if(j%2===0){
            string+="*";
        }
        else{
            string+="-";
        }
    }
    string+="\n";
}
console.log(string);