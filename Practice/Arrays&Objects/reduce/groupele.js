// Group Elements by Property: in the array using reduce method

let items = [
  { catogary: "A", value: 1 },
  { catogary: "B", value: 2 },
  { catogary: "C", value: 3 },
  { catogary: "A", value: 4 },
  { catogary: "D", value: 5 },
  { catogary: "B", value: 6 },
  { catogary: "E", value: 7 },
  { catogary: "C", value: 8 },
];

let addcatogar = items.reduce((acc, ele) => {
  acc[ele.catogary] = acc[ele.catogary] || [];
  acc[ele.catogary].push(ele);
  return acc;
}, {});

console.log(addcatogar);
