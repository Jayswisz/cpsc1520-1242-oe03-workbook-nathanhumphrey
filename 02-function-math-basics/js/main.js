// Prompt for required inputs and display a monthly payment
// Required input variables

let principal;
let interestRate;
let numberOfMonths;
let payment;

// Capture input from the user
// TODO: implement some type checking (if-else) on all inputs
principal = parseFloat(prompt('Enter principal amount'));
// Other options for converting
// principal = Number(prompt('Enter principal amount'));
// principal = +prompt('Enter principal amount');

interestRate = parseFloat(prompt('Enter annual interest rate')) / 1200;
numberOfMonths = parseInt(prompt('Enter number of years')) * 12;

// If using a function expression, you must assign before use/calling
// const calculatePayment = function (p, i, n) {
//   let upper = i * Math.pow(1 + i, n);
//   let bottom = Math.pow(1 + i, n) - 1;
//   return p * (upper / bottom);
// }

payment = calculatePayment(principal, interestRate, numberOfMonths);

console.log(payment);

displayPayment(payment);

// If using declared functions, you can place them anywhere
// Using JSDoc to document a function: https://jsdoc.app/

/**
 * Calculate the monthly payment for a loan.
 * @param {number} p principal amount
 * @param {number} i monthly interest rate
 * @param {number} n number of months
 * @returns {number} monthly payment
 */
function calculatePayment(p, i, n) {
  let upper = i * Math.pow(1 + i, n);
  let bottom = Math.pow(1 + i, n) - 1;
  return p * (upper / bottom);
}

/**
 * Displays the payment in the document
 * @param {number} payment
 */
function displayPayment(payment) {
  // Using contcat
  // document.querySelector('.output').innerHTML = '$' + payment.toFixed(2);
  // Using template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  document.querySelector('.output').innerHTML = `$${payment.toFixed(2)}`;
}
