// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

    let str = "mahesh";
    function ct(str) {
        let count=0;
    for (let i=0;i < str.length;i++) {
        if (
        str.charAt(i) === "a" ||
        str.charAt(i) === "e" ||
        str.charAt(i) === "i" ||
        str.charAt(i) === "o" ||
        str.charAt(i) === "u"
        ) {
        count++;
        }
    }
    console.log(count);
    }
    ct(str);
