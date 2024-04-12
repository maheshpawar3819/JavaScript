// simple star pattern

let num = 4;

let str = "";

for (let i = 1; i <= num; i++) {
  //for row iteration

  for (let j = 1; j <= i; j++) {
    //for column iteration
    str += "*";
  }
  str += "\n";
}
console.log(str);
