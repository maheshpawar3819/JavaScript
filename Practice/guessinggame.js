//gussinggame

let max = prompt("enter the maximum number");
let random = Math.floor(Math.random()*max+1);
console.log(typeof(random));
let guess = prompt("guess the number");
while(true){
    if(guess === "quite"){
        console.log("You quite the game!");
        break;
    }
     if(random == guess){
        console.log("congratulations! You are number is", random);
        break;
    }
    else if(random>guess){
        guess = prompt("Hint: your number is less, Please try again");
    }
    else{
        guess = prompt("Hint: your number is greater, Please try again");
    }
}