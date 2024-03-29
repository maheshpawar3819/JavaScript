// 2.write a programm in j/s to check whether are year leap year or not

// let year=prompt("enter the number:");

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
