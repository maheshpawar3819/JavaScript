//Q1 Using if-else statements to determine what message to display based on the age

let age=18;

if(age<18){
    console.log("Q1 Ans--> You are minor");
}
else if(age>=18 && age<50){
    console.log("Q1 Ans--> You are Adult");
}
else{
    console.log("Q1 Ans--> You are cenior sitizen");
} 

//Q2 Checking if a number is positive, negative, or zero.

let number=0.0001;

if(number>0){
    console.log("Q2 Ans--> Number is Positive");
}
else if(number===0){
    console.log("Q2 Ans--> Number is Zero");
}
else{
    console.log("Q2 Ans--> Number is Negative");
}

//Q3 Checking whether a given year is a leap year.

let year=2024;

if((year%4===0 && year%100!==0) || year%400===0){
    console.log(`Q3 Ans--> ${year} Is a Leap Year`);
}
else{
    console.log(`Q3 Ans--> ${year} Is not a Leap Year`);
}


//Q4 Determining the grade of a student based on their score.

let marks=40;

if(marks>=90){
    console.log("Q4 Ans--> Grade A");
}
else if(marks>=70){
    console.log("Q4 Ans--> Grade B");
}
else if(marks>=50){
    console.log("Q4 Ans--> Grade C")
}
else if(marks>=35){
    console.log("Q4 Ans--> Grade D");
}
else if(marks<35){
    console.log("Q4 Ans--> Fail");
}
else{
    console.log("Q4 Ans--> Plese enter valid number");
}

//Q5 Checking if a given number is even or odd.

let num=10;

if(num%2===0){
    console.log(`Q5 Ans--> ${num} is Even`);
}
else{
    console.log(`Q5 Ans--> ${num} is Odd`)
}

//Q6 Determining the type of a triangle based on its sides.

let triangleside1=5;
let triangleside2=5;
let triangleside3=5;

if(triangleside1===triangleside2 && triangleside2===triangleside3){
    console.log("Q6 Ans--> Equilateral Triangle");
}
else if(triangleside1===triangleside2 || triangleside2===triangleside3 || triangleside3===triangleside1){
    console.log("Q6 Ans--> Isosceies Triangle");
}
else{
    console.log("Q6 Ans--> Science Triangle");
}

//Q7 Determining the type of a triangle based on its sides.

let string="";

if(string===""){
    console.log("Q7 Ans--> Empty String");
}
else{
    console.log("Q7 Ans--> String is not Empty");
}

//Q8 write a programm in j/s to find maximum between three numbers.

let num1 = 500;
let num2 = 80;
let num3 = 125;

if(num1>=num2 && num1>=num3){
    console.log(`Q8 Ans--> ${num1} is the largest number`);
}
else if(num2>=num1 && num2>=num3){
    console.log(`Q8 Ans--> ${num2} it the largest number`);
}
else{
    console.log(`Q8 Ans--> ${num3} is the largest number`);
}