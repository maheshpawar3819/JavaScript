// Write a JavaScript program to remove duplicate elements from the array.

let arr = [1, 3, 5, 3, "rohan", "kiran", "Mahi","rohan"];
let arrc = [];


for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let dupli = false;
    for (let j = 0; j < arr.length; j++) {
        if (arrc[j] === value) {
            dupli = true;
            break;
        }
    
    }
    if (!dupli) {
        arrc.push(value);
    }
}
console.log(arrc);