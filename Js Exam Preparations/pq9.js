//write a j/s program to check string is palendrome or not

const palendrome= (str)  => {
    let revstr=str.split('').reverse().join('');
    return str===revstr;
}
console.log(palendrome('madam'));