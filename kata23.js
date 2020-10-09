'use strict';

// Currency

// Never store as Decimal. Floating-Point rounding issues when you do any math.
// Store currency as Ints, do any math, then convert back to Decimal
// just before formatting to local Currency.

// NPM packages like "currency" and "dinero" solve these problems.

const number = 123456.789;

let currency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

// ^^^ Old way. Less performant.

console.log(currency);
// Output: $123,456.79

currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

// ^^^ New way.

console.log(currency);

// Output: $123,456.79

// The Intl API also has other useful methods for internationalization purposes such as language-specific date formatting.

let num = 0.1
let num2 = 0.2

let total = num + num2

console.log(total);

// 0.30000000000000004. Ug. Base 2 and Base 10 forever incompatible.

let totalUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);

console.log(totalUsd);

// $0.30

// 1st workaround. Convert to Ints and back.
let totalDecimal = (num * 100 + num2 * 100) / 100

console.log(totalDecimal);
// 0.3

// 2nd workaround. Use the new Number.EPSILON constant in ES6.
function epsEqu(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(epsEqu(num + num2, 0.3));
// true

// EPSILON is the difference between 1 and the smallest Floating-Point number greater than 1.

// 3rd workaround. MDN's recommended rounding.
function roundToTwoPlaces(num) {
  // MDN's recommended rounding. Avoids the problem with 1.005 rounding
  // to 1 instead of 1.01.
  return +(Math.round(num + 'e+2') + 'e-2')
}


// Dates
let today = new Date()

// Never create a date by parsing strings with the Date constructor
// (this includes Date.parse). Too many browser differences.
// Create a date link this:
let birthday = new Date(1995, 11, 17, 3, 24, 0)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

console.log(birthday.toLocaleDateString(undefined, options))

// Date is within a given range.

let startDate = new Date(1994, 1, 1)
let endDate = new Date()
let isWithinRange = (startDate <= birthday && birthday <= endDate)

console.log(isWithinRange)


function sayHello(name) {
  name = (
    name !== null &&
    name !== undefined &&
    name.trim() !== ''
  ) ? `, ${name}` : ' there'

  return `Hello${name}!`
};

console.log(sayHello('Russ'))
console.log(sayHello())
console.log(sayHello(''))
console.log(sayHello(null))
console.log(sayHello('  '))
console.log(sayHello(undefined))
