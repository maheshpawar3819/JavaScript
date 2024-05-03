//practice of foreach() method
//foreach() method used for to access individual elements in the arry.
//also used on objects to access individual properties.

let arr = [1, 2, 3, 4, 5];

let marks = [
  { name: "mahesh", mark: 98 },
  { name: "ashwini", mark: 99 },
  { name: "shrinath", mark: 94 },
  { name: "neha", mark: 90 },
];

//access keys with foreach() method

marks.forEach((ele) => {
    // console.log(ele)
    // console.log(ele.mark);
    // console.log(ele.name);
    if(ele.mark>95){
        console.log(ele);
        // console.log(ele.name)
        // console.log(ele.mark);
    }
})

/*
arr.forEach((ele) => {
  console.log(ele);
});
*/
