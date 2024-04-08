//generate reverse reverse peramid star pattern

let num = 5;

for (let i = num; i >= 1; i--) {
  let str = "";

  for (let j = 0; j < num - i; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}
