//check the prime numbers in the given array.
let array=[1,2,3,4,5,6,7,8,9,10,11,12];
let prime = [];
let notprime = [];


for(let i=0;i<array.length;i++){
    let isprime=true;
    for(let j=2;j<=Math.sqrt(array[i]);j++){
        if(array[i]%j===0){
            notprime.push(array[i]);
            isprime=false;
            break;
        }
    }
    if(isprime !== false){
        prime.push(array[i]);
    }
}
console.log("prime",prime);
console.log("not prime",notprime);




/*
function checkprime(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        notprime.push(arr[i]);
        isprime = false;
        break;
      }
    }
    if (isprime !== false) {
      prime.push(arr[i]);
    }
  }
  console.log("prime numbers", prime);
  console.log("not prime numbers", notprime);
}

*/
