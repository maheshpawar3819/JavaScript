//Question : Write a function to find nth Fibonacci number.

/*
The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two preceding ones.
It series with 0 and 1 , and the subsequent numbers are calculated by adding the last two numbers.So Fibonacci series tooks like : 0,1,1,2,3,5,8,13,21,...

Febonacci number is calculated using the following formula
Syntax: F(n)=F(n-1)+F(n-2),Where ,F(1)=F(2)=1
*/

const fseries = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fseries(num - 1) + fseries(num - 2);
  }
};

console.log(fseries(6));
