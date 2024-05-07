//reduce method practice

let arr=[1,2,3,4,5];

let result=arr.reduce((res,ele)=> {
    return res+ele;
})
console.log(result);

//multiplication

let multi=arr.reduce((res,ele)=> {
    console.log(ele)
    return res*ele;
})
console.log(multi);