// Filter Array of Arrays: usign filter() method 

let numbers=[[1,2,3],[4,5],[6,7,8],[9,10]];

let filterbylength=numbers.filter((ele) => {
    return ele.length>2;
})
console.log(filterbylength);

