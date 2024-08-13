// Question : Simple Interest Calculetor

// write a function that calculates the simple interest given the principal amount, rate of interest per annum,and time in years.

const simpleinterest = (amt, rate, time) => {
    return calculate=amt*rate*time/100;
};

console.log(simpleinterest(1000,5,3));
console.log(simpleinterest(2000,5,3));
console.log(simpleinterest(10000,10,3));
