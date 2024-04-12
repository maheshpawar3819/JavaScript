let n = 3;
let count = 1;
for (i = 1; i <= n; i++) {
    let str = "";
    for (j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (k = 1; k <= count; k++) {
        str += "*";
    }
    count = count + 2;
    console.log(str);
}
for (i = n; i > 0; i--) {
    let str = "";
    for (j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (k = 0; k < 2 * i - 1; k++) {
        str += "*";
    }
    console.log(str);
}
