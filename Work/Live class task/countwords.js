// write a program in j/s to count the number of words in a string
// I am a human
// 4

let wor = "   i am mahesh pawar";
Number = 1;
let tr = wor.trim();

for (let index = 0; index < tr.length; index++) {
  if (tr[index] === " ") {
    Number++;
  }
  if (tr[index] === " " && tr[index + 1] === " ") {
    Number--;
  }
}

console.log(Number);
