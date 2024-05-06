// Create a function which returns the number of true values there are in an array.

let array=[true,false,true,false,false,true,false,false];

function addnum(value){
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===value){
            count+=1;
        }
    }
    console.log(count);
}
addnum(false);
addnum(true);