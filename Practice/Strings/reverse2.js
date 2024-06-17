//reverse the string without using loop
let string="racecar";
function rev(stirng) {

    let reversestr=stirng.split('').reverse().join();
    return reversestr;
}

console.log(rev("mahi"));

if(rev("rececar")===string){
    console.log('given string is palendrome str');
}else{
    console.log('given string is not a palendrome string');
}

// console.log(rev("mahesh"));
