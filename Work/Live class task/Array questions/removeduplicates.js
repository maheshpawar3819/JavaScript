// write a j/s program to input an array and remove diplicates form the array without any other kind of datastructure.

let arr=[2,3,4,"rohan","mahesh",2,"rohan"];
let newarr=[];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            newarr.push(arr[i]);
        }
    }
}

console.log(newarr);



