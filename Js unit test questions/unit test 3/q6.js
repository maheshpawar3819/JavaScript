// Create a function that returns the number of arguments it was called with.
// example:
// Input : "foo"
// Output : 1

// input : true, false
// output : 2

function countnoofargs(){
    return arguments.length;
}

console.log(countnoofargs('mahe','rohan','kunal'));
console.log(countnoofargs(1,2,3,4,5,6,7));
console.log(countnoofargs());


