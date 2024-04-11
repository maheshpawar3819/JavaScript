//find the number of count present in the string with using for loop

let string = "i love coading";
let count = 0;
for (let i = 0; i <= string.length; i++) {
  if (
    string[i]==="a"||
    string[i]==="e"||
    string[i]==="i"||
    string[i]==="o"||
    string[i]==="u"
  ) {
    count += 1;
  }
}
console.log(`${count} vovels present in the string`);
