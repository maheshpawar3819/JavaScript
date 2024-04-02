//check the given number is perfect square or not

let num=100;
let flag=true;

for(let i=1;i<=Math.sqrt(num);i++){
    if(i*i===num){
        console.log(`${num} is a perfect square`);
        flag=false;
        break;
    }
}

if(flag!==false){
    console.log(`${num} is a not perfect square`);
}