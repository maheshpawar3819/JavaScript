//Write a function called checkTriangleType that takes three parameters representing the length of the sides of a triangle. the function should return a string indicating the type of triangle: "equilateral" , "isosceles", or "sclene".

//console.log(checkTriangletype(3,3,3)) output: "equilateral";
//console.log(checkRriangletype(3,4,3)); output: "isosceles";
//console.log(checkRinangletype(5,8,6)); output: "scalene";

//todo The funtion should adhere to the following rules:
//if all three sides are equal length, return "equilateral";
//if only two sides are equal in length, return "isosceles";
//if all three sides are diffrent lengths, return "scalene";

const checkTriangletype = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) {
    return console.log("Equilateral");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return console.log("isosceles");
  } else {
    return console.log("scalene");
  }
};

checkTriangletype(2,2,2);
checkTriangletype(2,3,1);
checkTriangletype(2,1,2);
