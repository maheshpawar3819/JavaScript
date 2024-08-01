// Question: find maximum number in the array

const findmaxn=(num)=> {
    let sp=Math.max(...num);
    return sp;
}

console.log(findmaxn([1,2,36,4,89,1000]));