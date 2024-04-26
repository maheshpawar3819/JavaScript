// Qs1. Write a JavaScript function that returns array elements larger than a number.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
function largernum(array,num){
    for(let i=0;i<=array.length;i++){
        if(array[i]>num){
            console.log(array[i]);
        }
    }
}

largernum(array,5);
*/
// create saparate array of nums.

let greterele = [];
let lessele = [];
function elements(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      greterele.push(array[i]);
    } else {
      lessele.push(array[i]);
    }
  }
  console.log(greterele);
  console.log(lessele);
}

elements(array, 6);
