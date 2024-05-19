//Write a program to print a pattern of stars using a nested for loop.

function str(num) {
  let star = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i  ; j++) {
      star += "*";
    }
    star += "\n";
  }
   return star;
}
console.log(str(2));
