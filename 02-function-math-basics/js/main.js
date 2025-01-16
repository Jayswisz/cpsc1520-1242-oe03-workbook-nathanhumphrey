// Prompt for required inputs and display a monthly payment
// Required input variables

let principal = 1000;
let interestRate = 0.05 / 12;
let numberOfMonths = 5 * 12;
let payment;

let upper = interestRate * Math.pow(1 + interestRate, numberOfMonths);
let bottom = Math.pow(1 + interestRate, numberOfMonths) - 1;
payment = principal * (upper / bottom);

console.log(payment);
