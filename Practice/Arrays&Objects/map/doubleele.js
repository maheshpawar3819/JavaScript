// const numbers = [1, 2, 3, 4, 5];
// Your function here
// It should return [2, 4, 6, 8, 10]

let arr = [1, 2, 3, 4, 5, 6];

function doubleele(arr) {
    return arr.map(ele => ele*2);
}

console.log(doubleele(arr));
