// Filter Objects by Property: using filter method

let student = [
  {
    name: "mahesh",
    marks: "71",
  },
  {
    name: "ashwini",
    marks: "72",
  },
  {
    name: "pratiksha",
    marks: "60",
  },
  {
    name: "kunal",
    marks: "60",
  },
];

let findgreatermarks=student.filter((ele) => {
    return ele.marks>70;
})
console.log(findgreatermarks);

let lessmarks=student.filter((ele) => {
    return ele.marks<70;
})
console.log(lessmarks);
