//reverse the given string

let str="mahi";
let reverse="";

for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
}

//this if condition checks the given string is palendrome or not.
if(reverse===str){
    console.log("The given String is palendrome");
}
else{
    console.log("The given String is not a palendrome");
}