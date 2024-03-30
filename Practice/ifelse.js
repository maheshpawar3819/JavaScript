// Using if-else statements to determine what message to display based on the age

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

//Checking if a number is positive, negative, or zero.

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

// Checking whether a given year is a leap year.

let year=2024;

if((year%4===0 && year%100!==0) || year%400===0){
    console.log(`Q3 Ans--> ${year} Is a Leap Year`);
}
else{
    console.log(`Q3 Ans--> ${year} Is not a Leap Year`);
}


// Determining the grade of a student based on their score.

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

// Checking if a given number is even or odd.

let num=10;

if(num%2===0){
    console.log(`Q5 Ans--> ${num} is Even`);
}
else{
    console.log(`Q5 Ans--> ${num} is Odd`)
}

// Determining the type of a triangle based on its sides.

let triangleside1=5;
let triangleside2=5;
let triangleside3=5;

if(triangleside1===triangleside2 && triangleside2===triangleside3){
    console.log("Q6 Equilateral Triangle");
}
else if(triangleside1===triangleside2 || triangleside2===triangleside3 || triangleside3===triangleside1){
    console.log("Q6 Isosceies Triangle");
}
else{
    console.log("Q6 Science Triangle");
}