// Two pointer approach

function removeDuplicates(arr) {
    let k=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}

let arr=[1,1,2,3,3,4];
let k1=removeDuplicates(arr);
console.log(k1,arr.splice(0,k1));


// let arr = [1, 1, 2, 3, 4, 4, 5];

// // Solution 1

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//       }
//     }
//   }
//   return arr.length;
// }

// console.log(removeDuplicates(arr));


// Solution :2 
// let arr2=[1,2,3,3,4,5,5];

// function rmd(arr2) {
//     let remove= [...new Set(arr2)];
//     // console.log(remove)
//     return remove.length;
// }

// console.log(rmd(arr2));

