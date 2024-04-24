//practice of nested arrays


// console.log(arr);
// console.log(arr[0][0][1]);
// console.log(arr[3][1]);
// console.log(arr[2]);

//print greater than 18 agers

let underages=[];
let teenagers=[];

function checkage(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i][1]<18){
            underages.push(arr[i]);
        }
        else{
            teenagers.push(arr[i]);
        }
    }
    console.log("under agers",underages);
    console.log("teen agers",teenagers);
}
checkage([["mahi",16],["baram",22],["shrinath",19],["pratik",22],["swapnil",15]]);