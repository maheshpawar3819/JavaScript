//print reverse star pattern

let num = 4;

let str = "";

for (let i = num; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
