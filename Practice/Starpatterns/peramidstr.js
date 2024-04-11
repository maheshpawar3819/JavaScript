let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);