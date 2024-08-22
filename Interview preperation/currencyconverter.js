//Question : Create simple currency converter

/*
Write a function convert an amount from one currency to another using static exchange rates.

Requirements:
            -write a function convet currency that takes 3 paramenters : amount, fromcurrency,and tocurrency.
            -use fixed object to store exchange rates relative to base currency (e.g.,USD)
            -the function should return the converted amount in the target currency.
            -handle conversion through USD as a base, meaning if converting from GBP TO EUR,first convert GBP TO USD then USD TO EUR.
*/

const rates = {
  USD: 1, //BASE CURRENCY
  EUR: 0.9, //1 USD=0.9 EUR
  GBP: 0.8, //1 USD=0.8 GBP
  INR: 82, //1 USD=82 INR
};

const convertCurrency = (amount, fc, tc) => {
  let amountInUsd = 0;
  if (fc != "USD") {
    amountInUsd = amount / rates[fc];
  } else {
    amountInUsd = amount;
  }

  let convertedAmount = 0;
  if (tc != "USD") {
    convertedAmount = amount * rates[tc];
  } else {
    convertedAmount = amountInUsd;
  }

  return convertedAmount;
};

console.log(convertCurrency(1,"USD","INR"));
console.log(convertCurrency(100,"USD","INR"));
console.log(convertCurrency(100,"USD","EUR"));
console.log(convertCurrency(100,"USD","GBP"));
