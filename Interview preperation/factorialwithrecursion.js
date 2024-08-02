// Question : Write a fuction to calculate factorial of the number.(using recursion);

/*

Recursion : 
            -Recursion is a programming technique where a function calls itself in order to solve a problem. IN essence,its a function calls itself with smaller or simpler input it reaches a base case.

Base Case : 
            -the base case is condition in a recursive function that stops the recursion.its the point at which the function stops calling itself and returns a value witout further recursion. without a base case the recursive function would continue calling itself indefinitely,leading to what's known as infinite recursion.

Recursive Case:
            -The recursive case is the condition in a recursive function that determines when the function should call itself again. its tipically an expression or condition that evalutes to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.

*/

const factorial = (num) => {
  if (num === 1) {
    //base case
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));
